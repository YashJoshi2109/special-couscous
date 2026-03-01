// Global Type Definitions

export interface ClockingResponse {
  success: boolean;
  message?: string;
  data?: {
    sessionId: string;
    role: 'FRONT_DESK' | 'SHUTTLE';
    shiftType: 'MORNING' | 'EVENING' | 'NIGHT' | 'SHUTTLE';
    clockInTime: string;
    clockOutTime?: string;
    status: SessionStatus;
  };
}

export type SessionStatus =
  | 'OPEN'
  | 'COMPLETED'
  | 'PENDING_REVIEW'
  | 'EDITED'
  | 'CONFLICTED';

export interface PayEstimateData {
  basePay: number;
  tips: number;
  roomBonus: number;
  voucherBonus: number;
  soldOutBonus: number;
  total: number;
  breakdownByDay: {
    date: string;
    hours: number;
    earnings: number;
    sessions: number;
  }[];
}

export interface VoucherScanData {
  cardNumber: string;
  room: string;
  passengerCount: number;
  bonusAmount: number;
  timestamp: string;
}

export interface AdminDashboardStats {
  clockedInNow: number;
  totalHoursToday: number;
  voucherScansToday: number;
  estimatedPayrollPeriod: number;
}

export interface EmployeeSession {
  id: string;
  role: string;
  shiftType: string;
  clockInTime: Date;
  clockOutTime?: Date;
  duration?: number; // minutes
  basePayAmount?: number;
  tipsAmount?: number;
  bonusAmount?: number;
  status: SessionStatus;
  editedBy?: string;
  editedAt?: Date;
}

export interface TimelineDay {
  date: Date;
  sessions: EmployeeSession[];
  dayTotal: {
    hours: number;
    earnings: number;
  };
}
