import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const vouchers = await prisma.voucher.findMany({
    include: { user: true },
    orderBy: { scannedAt: 'desc' },
    take: 200,
  })

  return NextResponse.json({
    vouchers: vouchers.map((voucher) => ({
      id: voucher.id,
      userId: voucher.userId,
      employeeName: `${voucher.user.firstName} ${voucher.user.lastName}`,
      room: voucher.room,
      passengerCount: voucher.passengerCount,
      cardNumber: voucher.cardNumber,
      bonusAmount: voucher.bonusAmount,
      status: voucher.status,
      scannedAt: voucher.scannedAt,
      declineReason: voucher.declineReason,
    })),
  })
}
