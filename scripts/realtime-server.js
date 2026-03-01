const http = require('http')
const { Server } = require('socket.io')

const port = Number(process.env.REALTIME_PORT || 4001)
const allowedOrigin = process.env.REALTIME_CORS_ORIGIN || 'http://localhost:3001'
const secret = process.env.REALTIME_SERVER_SECRET || 'dev-realtime-secret'
const allowedOrigins = allowedOrigin
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

if (!allowedOrigins.includes('http://localhost:3000')) {
  allowedOrigins.push('http://localhost:3000')
}

if (!allowedOrigins.includes('http://localhost:3001')) {
  allowedOrigins.push('http://localhost:3001')
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/internal/emit') {
    const authHeader = req.headers['x-realtime-secret']
    if (authHeader !== secret) {
      res.statusCode = 401
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Unauthorized realtime emit' }))
      return
    }

    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })

    req.on('end', () => {
      try {
        const parsed = body ? JSON.parse(body) : {}
        const eventName = parsed.eventName
        const payload = parsed.payload || {}

        if (!eventName) {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'eventName is required' }))
          return
        }

        io.emit(eventName, payload)

        if (payload.userId) {
          io.to(`user:${payload.userId}`).emit(eventName, payload)
        }

        io.to('role:ADMIN').emit(eventName, payload)

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ ok: true }))
      } catch (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: error.message || 'Realtime emit failed' }))
      }
    })

    return
  }

  if (req.method === 'GET' && req.url === '/health') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ ok: true, service: 'hotelshift-realtime' }))
    return
  }

  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(
      JSON.stringify({
        service: 'hotelshift-realtime',
        ok: true,
        health: '/health',
        emit: '/internal/emit',
        socket: 'ws://localhost:' + port,
      })
    )
    return
  }

  res.statusCode = 404
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ error: 'Not found' }))
})

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true,
  },
})

io.on('connection', (socket) => {
  socket.on('subscribe', (context) => {
    const role = context?.role
    const userId = context?.userId

    if (userId) {
      socket.join(`user:${userId}`)
    }

    if (role === 'ADMIN') {
      socket.join('role:ADMIN')
    }

    socket.emit('realtime:connected', {
      socketId: socket.id,
      role: role || null,
      userId: userId || null,
      subscribedAt: new Date().toISOString(),
    })
  })

  socket.on('disconnect', () => {
  })
})

server.listen(port, () => {
  console.log(`[realtime] listening on http://localhost:${port}`)
})

server.on('error', (error) => {
  if (error && error.code === 'EADDRINUSE') {
    console.error(`[realtime] port ${port} is already in use.`)
    console.error('[realtime] stop the existing process or use a different REALTIME_PORT.')
    process.exit(1)
  }

  console.error('[realtime] failed to start', error)
  process.exit(1)
})
