import { NextRequest, NextResponse } from 'next/server'
import { subDays } from 'date-fns'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const now = new Date()
  const periodStart = subDays(now, 13)

  const employees = await prisma.user.findMany({
    where: { role: 'EMPLOYEE' },
    include: { employee: true },
  })

  const sessions = await prisma.session.findMany({
    where: {
      status: 'COMPLETED',
      clockInTime: { gte: periodStart, lte: now },
    },
  })

  const vouchers = await prisma.voucher.findMany({
    where: {
      status: 'ACCEPTED',
      scannedAt: { gte: periodStart, lte: now },
    },
  })

  const payrollRows = employees.map((employee: any) => {
    const employeeSessions = sessions.filter((s: any) => s.userId === employee.id)
    const employeeVouchers = vouchers.filter((v: any) => v.userId === employee.id)

    const basePay = employeeSessions.reduce((sum: any, s: any) => {
      if (!s.clockOutTime || !employee.employee) return sum
      const hours = (s.clockOutTime.getTime() - s.clockInTime.getTime()) / (1000 * 60 * 60)
      return sum + hours * employee.employee.hourlyRate
    }, 0)

    const tips = employeeSessions.reduce((sum: any, s: any) => sum + (s.tipsAmount ?? 0), 0)
    const bonus = employeeSessions.reduce((sum: any, s: any) => sum + (s.bonusAmount ?? 0), 0)
    const voucherBonus = employeeVouchers.reduce((sum: any, v: any) => sum + v.bonusAmount, 0)
    const total = basePay + tips + bonus + voucherBonus

    return {
      userId: employee.id,
      employeeId: employee.employee?.employeeId ?? '-',
      employeeName: `${employee.firstName} ${employee.lastName}`,
      basePay: Number(basePay.toFixed(2)),
      tips: Number(tips.toFixed(2)),
      bonus: Number(bonus.toFixed(2)),
      voucherBonus: Number(voucherBonus.toFixed(2)),
      total: Number(total.toFixed(2)),
      sessions: employeeSessions.length,
      vouchers: employeeVouchers.length,
    }
  })

  return NextResponse.json({
    payPeriod: {
      start: periodStart,
      end: now,
    },
    payrollRows,
    totals: {
      totalBasePay: Number(payrollRows.reduce((sum: any, row: any) => sum + row.basePay, 0).toFixed(2)),
      totalTips: Number(payrollRows.reduce((sum: any, row: any) => sum + row.tips, 0).toFixed(2)),
      totalBonus: Number(payrollRows.reduce((sum: any, row: any) => sum + row.bonus + row.voucherBonus, 0).toFixed(2)),
      grandTotal: Number(payrollRows.reduce((sum: any, row: any) => sum + row.total, 0).toFixed(2)),
    },
  })
}
