import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const logs = await prisma.timeLog.findMany({
    include: {
      user: true,
      employee: true,
      session: true,
    },
    orderBy: { createdAt: 'desc' },
    take: 200,
  })

  return NextResponse.json({
    timeLogs: logs.map((log) => ({
      id: log.id,
      employeeName: `${log.user.firstName} ${log.user.lastName}`,
      employeeId: log.employee.employeeId,
      role: log.session.role,
      shiftType: log.session.shiftType,
      startTime: log.startTime,
      endTime: log.endTime,
      duration: log.duration,
      status: log.status,
      roomBonus: log.roomBonus,
      roomValue: log.roomValue,
    })),
  })
}
