import 'dotenv/config'
import { PrismaClient } from './generated/prisma'
import { PrismaNeon } from '@prisma/adapter-neon'
import { neonConfig } from '@neondatabase/serverless'
import ws from 'ws'

// Required for Neon serverless with WebSockets in Node.js
if (typeof window === 'undefined') {
  neonConfig.webSocketConstructor = ws
}

const connectionString = process.env.DATABASE_URL!

const adapter = new PrismaNeon({ 
  connectionString 
})

export const prisma = new PrismaClient({ adapter })
