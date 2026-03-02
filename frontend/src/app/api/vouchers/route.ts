import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { emitRealtimeEvent } from '@/lib/realtimeServerEmit'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const requestedUserId = searchParams.get('userId')
  const role = request.cookies.get('hs_role')?.value
  const sessionUserId = request.cookies.get('hs_user_id')?.value

  const userId = role === 'ADMIN' ? requestedUserId ?? sessionUserId : sessionUserId

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const vouchers = await prisma.voucher.findMany({
    where: { userId },
    orderBy: { scannedAt: 'desc' },
    take: 100,
  })

  return NextResponse.json({ vouchers })
}

export async function POST(request: NextRequest) {
  try {
    const role = request.cookies.get('hs_role')?.value
    const sessionUserId = request.cookies.get('hs_user_id')?.value
    const body = await request.json()
    const {
      userId: requestedUserId,
      room,
      passengerCount,
      cardNumber,
      expiryDate,
      bonusAmount,
    } = body as {
      userId?: string
      room?: string
      passengerCount?: number
      cardNumber?: string
      expiryDate?: string
      bonusAmount?: number
    }

    const userId = role === 'ADMIN' ? requestedUserId ?? sessionUserId : sessionUserId

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!room || !passengerCount || !cardNumber) {
      return NextResponse.json({ error: 'room, passengerCount, cardNumber are required' }, { status: 400 })
    }

    const computedBonus = bonusAmount ?? 3.0

    const voucher = await prisma.voucher.create({
      data: {
        userId,
        room,
        passengerCount,
        cardNumber,
        expiryDate,
        bonusAmount: computedBonus,
        status: 'ACCEPTED',
      },
    })

    await emitRealtimeEvent('voucher:created', {
      userId,
      voucherId: voucher.id,
      room,
      passengerCount,
      bonusAmount: voucher.bonusAmount,
      occurredAt: new Date().toISOString(),
    })

    return NextResponse.json({ voucher })
  } catch (error: any) {
    return NextResponse.json({ error: error.message ?? 'Failed to create voucher' }, { status: 500 })
  }
}
