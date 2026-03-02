import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { emitRealtimeEvent } from '@/lib/realtimeServerEmit'

// GET /api/sessions - Get all sessions for a user
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const requestedUserId = searchParams.get('userId')
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')
  const role = request.cookies.get('hs_role')?.value
  const sessionUserId = request.cookies.get('hs_user_id')?.value
  const userId = role === 'ADMIN' ? requestedUserId ?? sessionUserId : sessionUserId

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const where: any = { userId }

  if (startDate && endDate) {
    where.clockInTime = {
      gte: new Date(startDate),
      lte: new Date(endDate),
    }
  }

  const sessions = await prisma.session.findMany({
    where,
    include: {
      timeLogs: true,
      user: true,
    },
    orderBy: {
      clockInTime: 'desc',
    },
  })

  return NextResponse.json({ sessions })
}

// POST /api/sessions - Create a new session (clock in)
export async function POST(request: NextRequest) {
  try {
    const roleCookie = request.cookies.get('hs_role')?.value
    const sessionUserId = request.cookies.get('hs_user_id')?.value
    const body = await request.json()
    const { userId: requestedUserId, role, shiftType } = body
    const userId = roleCookie === 'ADMIN' ? requestedUserId ?? sessionUserId : sessionUserId

    if (!userId || !role || !shiftType) {
      return NextResponse.json(
        { error: 'userId, role, and shiftType are required' },
        { status: 400 }
      )
    }

    // Check if user has an active session
    const activeSession = await prisma.session.findFirst({
      where: {
        userId,
        status: 'OPEN',
      },
    })

    if (activeSession) {
      return NextResponse.json(
        { error: 'User already has an active session' },
        { status: 400 }
      )
    }

    // Get employee info
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { employee: true },
    })

    if (!user?.employee) {
      return NextResponse.json(
        { error: 'Employee not found' },
        { status: 404 }
      )
    }

    // Create session
    const session = await prisma.session.create({
      data: {
        userId,
        role,
        shiftType,
        clockInTime: new Date(),
        status: 'OPEN',
      },
      include: {
        timeLogs: true,
      },
    })

    // Create initial time log
    await prisma.timeLog.create({
      data: {
        userId,
        employeeId: user.employee.id,
        sessionId: session.id,
        startTime: new Date(),
        status: 'PENDING',
      },
    })

    await emitRealtimeEvent('session:clocked_in', {
      userId,
      sessionId: session.id,
      role,
      shiftType,
      occurredAt: new Date().toISOString(),
    })

    return NextResponse.json({ session })
  } catch (error: any) {
    console.error('Session creation error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
