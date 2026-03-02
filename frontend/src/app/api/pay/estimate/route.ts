import { NextRequest, NextResponse } from 'next/server'
import { subDays } from 'date-fns'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  const sessionUserId = request.cookies.get('hs_user_id')?.value
  const requestedUserId = request.nextUrl.searchParams.get('userId')
  const userId = role === 'ADMIN' ? requestedUserId ?? sessionUserId : sessionUserId

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rangeEnd = new Date()
  const rangeStart = subDays(rangeEnd, 13)

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { employee: true },
  })

  if (!user?.employee) {
    return NextResponse.json({ error: 'Employee not found' }, { status: 404 })
  }

  const sessions = await prisma.session.findMany({
    where: {
      userId,
      clockInTime: { gte: rangeStart, lte: rangeEnd },
      status: 'COMPLETED',
    },
    orderBy: { clockInTime: 'asc' },
  })

  const basePay = sessions.reduce((sum: any, s: any) => {
    if (!s.clockOutTime) return sum
    const hours = (s.clockOutTime.getTime() - s.clockInTime.getTime()) / (1000 * 60 * 60)
    return sum + hours * user.employee!.hourlyRate
  }, 0)

  const tips = sessions.reduce((sum: any, s: any) => sum + (s.tipsAmount ?? 0), 0)
  const roomBonus = sessions.reduce((sum: any, s: any) => sum + (s.bonusAmount ?? 0), 0)

  const vouchers = await prisma.voucher.findMany({
    where: {
      userId,
      scannedAt: { gte: rangeStart, lte: rangeEnd },
      status: 'ACCEPTED',
    },
  })

  const voucherBonus = vouchers.reduce((sum: any, v: any) => sum + v.bonusAmount, 0)
  const soldOutBonus = 0
  const totalEstimated = basePay + tips + roomBonus + voucherBonus + soldOutBonus

  const byDayMap = new Map<string, { hours: number; earnings: number; sessions: number }>()

  for (const session of sessions) {
    const key = session.clockInTime.toISOString().slice(0, 10)
    const existing = byDayMap.get(key) ?? { hours: 0, earnings: 0, sessions: 0 }
    if (session.clockOutTime) {
      const hours = (session.clockOutTime.getTime() - session.clockInTime.getTime()) / (1000 * 60 * 60)
      existing.hours += hours
      existing.earnings += hours * user.employee.hourlyRate
    }
    existing.earnings += (session.tipsAmount ?? 0) + (session.bonusAmount ?? 0)
    existing.sessions += 1
    byDayMap.set(key, existing)
  }

  const breakdownByDay = Array.from(byDayMap.entries()).map(([date, value]) => ({
    date,
    hours: Number(value.hours.toFixed(2)),
    earnings: Number(value.earnings.toFixed(2)),
    sessions: value.sessions,
  }))

  return NextResponse.json({
    payPeriod: {
      start: rangeStart.toISOString(),
      end: rangeEnd.toISOString(),
    },
    basePay: Number(basePay.toFixed(2)),
    tips: Number(tips.toFixed(2)),
    roomBonus: Number(roomBonus.toFixed(2)),
    voucherBonus: Number(voucherBonus.toFixed(2)),
    soldOutBonus,
    totalEstimated: Number(totalEstimated.toFixed(2)),
    breakdownByDay,
  })
}
