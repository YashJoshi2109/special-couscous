type HttpMethod = 'GET' | 'POST' | 'PATCH'

async function request<T>(path: string, method: HttpMethod = 'GET', body?: unknown): Promise<T> {
  const response = await fetch(`/api${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined,
  })

  const payload = await response.json()

  if (!response.ok) {
    throw new Error(payload?.error ?? 'Request failed')
  }

  return payload as T
}

export type UserRole = 'EMPLOYEE' | 'ADMIN' | 'MANAGER'
export type ShiftRole = 'FRONT_DESK' | 'SHUTTLE'
export type ShiftType = 'MORNING' | 'EVENING' | 'NIGHT' | 'SHUTTLE'

export interface AuthUser {
  id: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  employee?: {
    id: string
    employeeId: string
    hourlyRate: number
    department: string | null
    roles: string[]
    shiftPrefs: string[]
  } | null
  admin?: {
    id: string
    permissions: string[]
  } | null
}

export interface SessionDto {
  id: string
  userId: string
  role: ShiftRole
  shiftType: ShiftType
  clockInTime: string
  clockOutTime: string | null
  status: 'OPEN' | 'COMPLETED' | 'PENDING_REVIEW' | 'EDITED' | 'CONFLICTED'
  basePayAmount: number | null
  tipsAmount: number | null
  bonusAmount: number | null
}

export interface VoucherDto {
  id: string
  userId: string
  cardNumber: string
  room: string
  passengerCount: number
  bonusAmount: number
  status: 'ACCEPTED' | 'DECLINED' | 'PENDING_REVIEW'
  declineReason: string | null
  scannedAt: string
}

export const api = {
  auth: {
    login: (payload: { email: string; password: string; role?: 'EMPLOYEE' | 'ADMIN' }) =>
      request<{ success: boolean; user: AuthUser }>('/auth/login', 'POST', payload),
    logout: () => request<{ success: boolean }>('/auth/logout', 'POST'),
    me: () => request<{ user: AuthUser | null }>('/auth/me'),
    seed: () => request<{ success: boolean; users: { admin: { email: string; password: string }; employee: { email: string; password: string } } }>('/auth/seed', 'POST'),
  },

  sessions: {
    list: (params?: { userId?: string; startDate?: string; endDate?: string }) => {
      const search = new URLSearchParams()
      if (params?.userId) search.set('userId', params.userId)
      if (params?.startDate) search.set('startDate', params.startDate)
      if (params?.endDate) search.set('endDate', params.endDate)
      const suffix = search.toString() ? `?${search.toString()}` : ''
      return request<{ sessions: SessionDto[] }>(`/sessions${suffix}`)
    },
    clockIn: (payload: { userId?: string; role: ShiftRole; shiftType: ShiftType }) =>
      request<{ session: SessionDto }>('/sessions', 'POST', payload),
    clockOut: (sessionId: string, payload?: { tips?: number }) =>
      request<{ session: SessionDto }>(`/sessions/${sessionId}`, 'PATCH', payload ?? {}),
  },

  vouchers: {
    list: (params?: { userId?: string }) => {
      const search = new URLSearchParams()
      if (params?.userId) search.set('userId', params.userId)
      const suffix = search.toString() ? `?${search.toString()}` : ''
      return request<{ vouchers: VoucherDto[] }>(`/vouchers${suffix}`)
    },
    create: (payload: {
      userId?: string
      room: string
      passengerCount: number
      cardNumber: string
      bonusAmount?: number
    }) => request<{ voucher: VoucherDto }>('/vouchers', 'POST', payload),
    updateStatus: (voucherId: string, payload: { action: 'DECLINE' | 'ACCEPT'; declineReason?: string }) =>
      request<{ voucher: VoucherDto }>(`/vouchers/${voucherId}`, 'PATCH', payload),
  },

  pay: {
    estimate: (params?: { userId?: string }) => {
      const search = new URLSearchParams()
      if (params?.userId) search.set('userId', params.userId)
      const suffix = search.toString() ? `?${search.toString()}` : ''
      return request<{
        payPeriod: { start: string; end: string }
        basePay: number
        tips: number
        roomBonus: number
        voucherBonus: number
        soldOutBonus: number
        totalEstimated: number
        breakdownByDay: Array<{ date: string; hours: number; earnings: number; sessions: number }>
      }>(`/pay/estimate${suffix}`)
    },
  },

  admin: {
    dashboard: () =>
      request<{
        stats: {
          clockedInNow: number
          totalHoursToday: number
          voucherScansToday: number
          estimatedPayrollPeriod: number
        }
        liveEmployees: Array<{
          id: string
          name: string
          role: string
          shift: string
          clockInTime: string
          durationMinutes: number
          hasConflict: boolean
          sessionId: string
        }>
      }>('/admin/dashboard'),
    employees: (search?: string) =>
      request<{
        employees: Array<{
          id: string
          name: string
          email: string
          employeeId: string
          department: string
          hourlyRate: number
          status: string
          roles: string[]
        }>
      }>(`/admin/employees${search ? `?search=${encodeURIComponent(search)}` : ''}`),
    timeLogs: () =>
      request<{
        timeLogs: Array<{
          id: string
          employeeName: string
          employeeId: string
          role: string
          shiftType: string
          startTime: string
          endTime: string | null
          duration: number | null
          status: string
          roomBonus: number | null
          roomValue: number | null
        }>
      }>('/admin/time-logs'),
    vouchers: () =>
      request<{
        vouchers: Array<{
          id: string
          userId: string
          employeeName: string
          room: string
          passengerCount: number
          cardNumber: string
          bonusAmount: number
          status: string
          scannedAt: string
          declineReason: string | null
        }>
      }>('/admin/vouchers'),
    payroll: () =>
      request<{
        payPeriod: { start: string; end: string }
        payrollRows: Array<{
          userId: string
          employeeId: string
          employeeName: string
          basePay: number
          tips: number
          bonus: number
          voucherBonus: number
          total: number
          sessions: number
          vouchers: number
        }>
        totals: {
          totalBasePay: number
          totalTips: number
          totalBonus: number
          grandTotal: number
        }
      }>('/admin/payroll'),
    audit: () =>
      request<{
        auditLogs: Array<{
          id: string
          action: string
          userId: string
          adminId: string | null
          entityType: string
          entityId: string
          changes: unknown
          reason: string | null
          createdAt: string
        }>
      }>('/admin/audit'),
    settings: {
      get: () =>
        request<{
          config: {
            id: string
            enableVoucherScanning: boolean
            enableOfflineMode: boolean
            enableMultiSession: boolean
            baseSoldOutBonus: number
            roomUpsellRate: number
            voucherBonusRate: number
          }
        }>('/admin/settings'),
      update: (payload: {
        enableVoucherScanning: boolean
        enableOfflineMode: boolean
        enableMultiSession: boolean
        baseSoldOutBonus: number
        roomUpsellRate: number
        voucherBonusRate: number
      }) => request<{ config: unknown }>('/admin/settings', 'PATCH', payload),
    },
  },
}
