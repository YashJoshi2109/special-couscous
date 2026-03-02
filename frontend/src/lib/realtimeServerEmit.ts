export async function emitRealtimeEvent(eventName: string, payload: Record<string, unknown>) {
  const realtimeBaseUrl = process.env.REALTIME_SERVER_URL || 'http://localhost:4001'
  const realtimeSecret = process.env.REALTIME_SERVER_SECRET || 'dev-realtime-secret'

  try {
    const response = await fetch(`${realtimeBaseUrl}/internal/emit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-realtime-secret': realtimeSecret,
      },
      body: JSON.stringify({ eventName, payload }),
      cache: 'no-store',
    })

    if (!response.ok) {
      const body = await response.text()
      console.error('[realtime] emit failed', eventName, response.status, body)
    }
  } catch (error) {
    console.error('[realtime] emit exception', eventName, error)
  }
}
