import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { emitRealtimeEvent } from '@/lib/realtimeServerEmit'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const role = request.cookies.get('hs_role')?.value
    const sessionUserId = request.cookies.get('hs_user_id')?.value
    const body = await request.json()
    const { action, declineReason } = body as {
      action?: 'DECLINE' | 'ACCEPT'
      declineReason?: string
    }

    const voucher = await prisma.voucher.findUnique({ where: { id: params.id } })

    if (!voucher) {
      return NextResponse.json({ error: 'Voucher not found' }, { status: 404 })
    }

    const allowed = role === 'ADMIN' || voucher.userId === sessionUserId
    if (!allowed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const nextStatus = action === 'DECLINE' ? 'DECLINED' : 'ACCEPTED'

    const updated = await prisma.voucher.update({
      where: { id: params.id },
      data: {
        status: nextStatus,
        declineReason: nextStatus === 'DECLINED' ? declineReason ?? 'declined_by_user' : null,
        declinedAt: nextStatus === 'DECLINED' ? new Date() : null,
      },
    })

    await emitRealtimeEvent('voucher:updated', {
      userId: voucher.userId,
      voucherId: updated.id,
      status: updated.status,
      declineReason: updated.declineReason,
      occurredAt: new Date().toISOString(),
    })

    return NextResponse.json({ voucher: updated })
  } catch (error: any) {
    return NextResponse.json({ error: error.message ?? 'Failed to update voucher' }, { status: 500 })
  }
}
