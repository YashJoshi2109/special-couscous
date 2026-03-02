import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { emitRealtimeEvent } from '@/lib/realtimeServerEmit'

async function getOrCreateConfig() {
  const current = await prisma.appConfig.findFirst()
  if (current) return current
  return prisma.appConfig.create({
    data: {},
  })
}

export async function GET(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const config = await getOrCreateConfig()
  return NextResponse.json({ config })
}

export async function PATCH(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const body = await request.json()
  const current = await getOrCreateConfig()

  const updated = await prisma.appConfig.update({
    where: { id: current.id },
    data: {
      enableVoucherScanning: body.enableVoucherScanning,
      enableOfflineMode: body.enableOfflineMode,
      enableMultiSession: body.enableMultiSession,
      baseSoldOutBonus: body.baseSoldOutBonus,
      roomUpsellRate: body.roomUpsellRate,
      voucherBonusRate: body.voucherBonusRate,
    },
  })

  await emitRealtimeEvent('admin:settings_updated', {
    configId: updated.id,
    occurredAt: new Date().toISOString(),
  })

  return NextResponse.json({ config: updated })
}
