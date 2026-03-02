import { io, type Socket } from 'socket.io-client'

let socketInstance: Socket | null = null

export function getRealtimeSocket() {
  if (typeof window === 'undefined') {
    return null
  }

  if (!socketInstance) {
    const realtimeUrl = process.env.NEXT_PUBLIC_REALTIME_URL || 'http://localhost:4001'
    socketInstance = io(realtimeUrl, {
      transports: ['websocket'],
      withCredentials: true,
      autoConnect: true,
    })
  }

  return socketInstance
}
