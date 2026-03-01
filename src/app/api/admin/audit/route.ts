import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const role = request.cookies.get('hs_role')?.value
  if (role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const logs = await prisma.auditLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
  })

  return NextResponse.json({ auditLogs: logs })
}
