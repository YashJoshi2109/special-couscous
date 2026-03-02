import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const userId = request.cookies.get('hs_user_id')?.value

  if (!userId) {
    return NextResponse.json({ user: null }, { status: 200 })
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      employee: true,
      admin: true,
    },
  })

  if (!user) {
    return NextResponse.json({ user: null }, { status: 200 })
  }

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      employee: user.employee,
      admin: user.admin,
    },
  })
}
