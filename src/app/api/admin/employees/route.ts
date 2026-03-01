import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

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
