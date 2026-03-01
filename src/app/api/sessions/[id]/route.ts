import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { emitRealtimeEvent } from '@/lib/realtimeServerEmit'

// PATCH /api/sessions/[id] - Update session (clock out)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const role = request.cookies.get('hs_role')?.value
    const sessionUserId = request.cookies.get('hs_user_id')?.value
    const body = await request.json()
    const { tips } = body
    const sessionId = params.id

    // Get session
    const session = await prisma.session.findUnique({
      where: { id: sessionId },
      include: { timeLogs: true },
    })

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      )
    }

    const allowed = role === 'ADMIN' || session.userId === sessionUserId
    if (!allowed) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    if (session.clockOutTime) {
      return NextResponse.json(
        { error: 'Session already clocked out' },
        { status: 400 }
      )
    }

    const clockOut = new Date()
    const duration = Math.floor(
      (clockOut.getTime() - session.clockInTime.getTime()) / (1000 * 60)
    )

    // Update session
    const updatedSession = await prisma.session.update({
      where: { id: sessionId },
      data: {
        clockOutTime: clockOut,
        tipsAmount: tips || 0,
        basePayAmount: session.basePayAmount ?? 0,
        status: 'COMPLETED',
      },
      include: {
        timeLogs: true,
      },
    })

    // Update active time log
    const activeTimeLog = session.timeLogs.find(
      (log: { endTime: Date | null; id: string; startTime: Date }) => !log.endTime
    )
    if (activeTimeLog) {
      await prisma.timeLog.update({
        where: { id: activeTimeLog.id },
        data: {
          endTime: clockOut,
          duration: Math.floor(
            (clockOut.getTime() - activeTimeLog.startTime.getTime()) / (1000 * 60)
          ),
          status: 'APPROVED',
        },
      })
    }

    await emitRealtimeEvent('session:clocked_out', {
      userId: session.userId,
      sessionId,
      tips: tips || 0,
      duration,
      occurredAt: new Date().toISOString(),
    })

    return NextResponse.json({ session: updatedSession })
  } catch (error: any) {
    console.error('Session update error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
