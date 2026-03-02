import { NextRequest, NextResponse } from 'next/server'
import { startOfDay, endOfDay, subDays } from 'date-fns'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const now = new Date()
  const dayStart = startOfDay(now)
  const dayEnd = endOfDay(now)
  const periodStart = subDays(now, 13)

  const openSessions = await prisma.session.findMany({
    where: { status: 'OPEN' },
    include: { user: true },
    orderBy: { clockInTime: 'asc' },
  })

  const completedToday = await prisma.session.findMany({
    where: {
      status: 'COMPLETED',
      clockInTime: { gte: dayStart, lte: dayEnd },
    },
  })

  const voucherScansToday = await prisma.voucher.count({
    where: { scannedAt: { gte: dayStart, lte: dayEnd } },
  })

  const periodSessions = await prisma.session.findMany({
    where: {
      status: 'COMPLETED',
      clockInTime: { gte: periodStart, lte: now },
    },
    include: {
      user: {
        include: { employee: true },
      },
    },
  })

  const estimatedPayrollPeriod = (periodSessions as any[]).reduce((sum: number, s: any) => {
    if (!s.clockOutTime || !s.user.employee) return sum
    const hours = (s.clockOutTime.getTime() - s.clockInTime.getTime()) / (1000 * 60 * 60)
    return sum + hours * (s.user.employee.hourlyRate ?? 0) + (s.tipsAmount ?? 0) + (s.bonusAmount ?? 0)
  }, 0)

  const totalHoursToday = (completedToday as any[]).reduce((sum: number, s: any) => {
    if (!s.clockOutTime) return sum
    return sum + (s.clockOutTime.getTime() - s.clockInTime.getTime()) / (1000 * 60 * 60)
  }, 0)

  const liveEmployees = (openSessions as any[]).map((session: any) => ({
    id: session.user.id,
    name: `${session.user.firstName} ${session.user.lastName}`,
    role: session.role,
    shift: session.shiftType,
    clockInTime: session.clockInTime,
    durationMinutes: Math.max(0, Math.floor((Date.now() - session.clockInTime.getTime()) / (1000 * 60))),
    hasConflict: false,
    sessionId: session.id,
  }))

  return NextResponse.json({
    stats: {
      clockedInNow: openSessions.length,
      totalHoursToday: Number(totalHoursToday.toFixed(2)),
      voucherScansToday,
      estimatedPayrollPeriod: Number(estimatedPayrollPeriod.toFixed(2)),
    },
    liveEmployees,
  })
}
