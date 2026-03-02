import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

export async function GET(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const search = request.nextUrl.searchParams.get('search')?.trim().toLowerCase()

  const users = await prisma.user.findMany({
    where: { role: 'EMPLOYEE' },
    include: { employee: true },
    orderBy: { createdAt: 'desc' },
  })

  const rows = users
    .filter((u) => {
      if (!search) return true
      const fullName = `${u.firstName} ${u.lastName}`.toLowerCase()
      return (
        fullName.includes(search) ||
        u.email.toLowerCase().includes(search) ||
        (u.employee?.employeeId ?? '').toLowerCase().includes(search)
      )
    })
    .map((u) => ({
      id: u.id,
      name: `${u.firstName} ${u.lastName}`,
      email: u.email,
      employeeId: u.employee?.employeeId ?? '-',
      department: u.employee?.department ?? '-',
      hourlyRate: u.employee?.hourlyRate ?? 0,
      status: u.status,
      roles: u.employee?.roles ?? [],
    }))

  return NextResponse.json({ employees: rows })
}

export async function POST(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const body = await request.json()
  const { email, firstName, lastName, employeeId, department, hourlyRate, roles, password } = body

  // Validate required fields
  if (!email || !firstName || !lastName || !employeeId) {
    return NextResponse.json(
      { error: 'Email, first name, last name, and employee ID are required' },
      { status: 400 }
    )
  }

  // Check if email already exists
  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    return NextResponse.json({ error: 'Email already in use' }, { status: 400 })
  }

  try {
    // Generate username from email (before @)
    const baseUsername = email.split('@')[0];
    let username = baseUsername;
    let counter = 1;
    
    // Ensure username is unique
    while (await prisma.user.findUnique({ where: { username } })) {
      username = `${baseUsername}${counter}`;
      counter++;
    }

    const hashedPassword = await hash(password || 'tempPassword123', 12)

    const user = await prisma.user.create({
      data: {
        username,
        email,
        firstName,
        lastName,
        password: hashedPassword,
        role: 'EMPLOYEE',
        status: 'ACTIVE',
        employee: {
          create: {
            employeeId,
            department: department || null,
            hourlyRate: hourlyRate || 15.0,
            roles: roles || ['FRONT_DESK'],
            shiftPrefs: [],
            phone: '',
          },
        },
      },
      include: { employee: true },
    })

    return NextResponse.json({
      employee: {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        employeeId: user.employee?.employeeId,
        department: user.employee?.department,
        hourlyRate: user.employee?.hourlyRate,
        status: user.status,
        roles: user.employee?.roles,
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to create employee' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const body = await request.json()
  const { id, firstName, lastName, department, hourlyRate, roles, status } = body

  if (!id) {
    return NextResponse.json({ error: 'Employee ID is required' }, { status: 400 })
  }

  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        firstName: firstName !== undefined ? firstName : undefined,
        lastName: lastName !== undefined ? lastName : undefined,
        status: status !== undefined ? status : undefined,
        employee: {
          update: {
            department: department !== undefined ? department : undefined,
            hourlyRate: hourlyRate !== undefined ? hourlyRate : undefined,
            roles: roles !== undefined ? roles : undefined,
          },
        },
      },
      include: { employee: true },
    })

    return NextResponse.json({
      employee: {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        employeeId: user.employee?.employeeId,
        department: user.employee?.department,
        hourlyRate: user.employee?.hourlyRate,
        status: user.status,
        roles: user.employee?.roles,
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to update employee' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Employee ID is required' }, { status: 400 })
  }

  try {
    // Soft delete - just deactivate the user
    const user = await prisma.user.update({
      where: { id },
      data: { status: 'INACTIVE' },
      include: { employee: true },
    })

    return NextResponse.json({
      message: 'Employee deactivated successfully',
      employee: {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        status: user.status,
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to deactivate employee' },
      { status: 500 }
    )
  }
}
