import { NextRequest, NextResponse } from 'next/server'
import { compare } from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, role } = body as {
      email?: string
      password?: string
      role?: 'EMPLOYEE' | 'ADMIN'
    }

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: { employee: true, admin: true },
    })

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const valid = await compare(password, user.password)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    if (role && user.role !== role) {
      return NextResponse.json({ error: `Account is not ${role.toLowerCase()}` }, { status: 403 })
    }

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    })

    response.cookies.set('hs_user_id', user.id, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    response.cookies.set('hs_role', user.role, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message ?? 'Login failed' }, { status: 500 })
  }
}
