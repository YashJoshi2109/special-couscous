'use client'

import { useEffect } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { getRealtimeSocket } from '@/lib/realtimeClient'

export function useRealtimeSubscriptions(scope: 'employee' | 'admin') {
  const queryClient = useQueryClient()
  const meQuery = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: () => api.auth.me(),
    staleTime: 60_000,
  })

  useEffect(() => {
    const socket = getRealtimeSocket()
    const user = meQuery.data?.user
    if (!socket || !user) {
      return
    }

    const subscribe = () => {
      socket.emit('subscribe', {
        userId: user.id,
        role: user.role,
      })
    }

    if (socket.connected) {
      subscribe()
    }

    socket.on('connect', subscribe)

    const invalidateEmployee = () => {
      queryClient.invalidateQueries({ queryKey: ['sessions'] })
      queryClient.invalidateQueries({ queryKey: ['vouchers'] })
      queryClient.invalidateQueries({ queryKey: ['pay-estimate'] })
    }

    const invalidateAdmin = () => {
      queryClient.invalidateQueries({ queryKey: ['admin-dashboard'] })
      queryClient.invalidateQueries({ queryKey: ['admin-employees'] })
      queryClient.invalidateQueries({ queryKey: ['admin-time-logs'] })
      queryClient.invalidateQueries({ queryKey: ['admin-vouchers'] })
      queryClient.invalidateQueries({ queryKey: ['admin-payroll'] })
      queryClient.invalidateQueries({ queryKey: ['admin-audit'] })
      queryClient.invalidateQueries({ queryKey: ['admin-settings'] })
      queryClient.invalidateQueries({ queryKey: ['sessions'] })
      queryClient.invalidateQueries({ queryKey: ['vouchers'] })
      queryClient.invalidateQueries({ queryKey: ['pay-estimate'] })
    }

    const onSessionClockedIn = () => {
      if (scope === 'admin') invalidateAdmin()
      else invalidateEmployee()
    }

    const onSessionClockedOut = () => {
      if (scope === 'admin') invalidateAdmin()
      else invalidateEmployee()
    }

    const onVoucherCreated = () => {
      if (scope === 'admin') invalidateAdmin()
      else invalidateEmployee()
    }

    const onVoucherUpdated = () => {
      if (scope === 'admin') invalidateAdmin()
      else invalidateEmployee()
    }

    const onAdminSettingsUpdated = () => {
      if (scope === 'admin') invalidateAdmin()
    }

    socket.on('session:clocked_in', onSessionClockedIn)
    socket.on('session:clocked_out', onSessionClockedOut)
    socket.on('voucher:created', onVoucherCreated)
    socket.on('voucher:updated', onVoucherUpdated)
    socket.on('admin:settings_updated', onAdminSettingsUpdated)

    return () => {
      socket.off('connect', subscribe)
      socket.off('session:clocked_in', onSessionClockedIn)
      socket.off('session:clocked_out', onSessionClockedOut)
      socket.off('voucher:created', onVoucherCreated)
      socket.off('voucher:updated', onVoucherUpdated)
      socket.off('admin:settings_updated', onAdminSettingsUpdated)
    }
  }, [meQuery.data?.user, queryClient, scope])
}
