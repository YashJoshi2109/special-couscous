import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

export async function POST() {
  try {
    // Create admin user
    const adminPassword = await hash('admin123', 12)
    const admin = await prisma.user.upsert({
      where: { email: 'admin@hotelshift.com' },
      update: {},
      create: {
        username: 'admin',
        email: 'admin@hotelshift.com',
        firstName: 'System',
        lastName: 'Admin',
        password: adminPassword,
        role: 'ADMIN',
        status: 'ACTIVE',
        admin: {
          create: {
            permissions: ['MANAGE_USERS', 'MANAGE_SESSIONS', 'VIEW_REPORTS', 'MANAGE_PAYROLL']
          }
        }
      }
    })

    // Create demo employee
    const employeePassword = await hash('employee123', 12)
    const employee = await prisma.user.upsert({
      where: { email: 'john@hotelshift.com' },
      update: {},
      create: {
        username: 'john.rivera',
        email: 'john@hotelshift.com',
        firstName: 'John',
        lastName: 'Rivera',
        password: employeePassword,
        role: 'EMPLOYEE',
        status: 'ACTIVE',
        employee: {
          create: {
            employeeId: 'EMP001',
            phone: '+1234567891',
            department: 'Operations',
            hourlyRate: 15.00,
            roles: ['FRONT_DESK', 'SHUTTLE'],
            shiftPrefs: ['MORNING', 'EVENING'],
          }
        }
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Seed data created',
      users: {
        admin: { email: admin.email, password: 'admin123' },
        employee: { email: employee.email, password: 'employee123' }
      }
    })
  } catch (error: any) {
    console.error('Seed error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
}
