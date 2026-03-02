import { pool } from '../db/connection';

export interface PaystubData {
  period_start: Date;
  period_end: Date;
  total_hours: number;
  base_pay: number;
  room_bonus: number;
  voucher_bonus: number;
  soldout_bonus: number;
  tips: number;
  total_estimated: number;
  sessions: any[];
  bonus_events: any[];
}

const HOURLY_RATE = 10.00;
const ROOM_BONUS_PER_5 = 1.00;
const VOUCHER_BONUS = 3.00;
const SOLDOUT_BONUS = 25.00;

export async function calculatePaystub(employeeId: string, from: Date, to: Date): Promise<PaystubData> {
  // Sessions in period
  const { rows: sessions } = await pool.query(
    `SELECT *, EXTRACT(EPOCH FROM (COALESCE(clock_out, NOW()) - clock_in)) / 3600 AS hours_worked
     FROM shift_sessions WHERE employee_id = $1 AND clock_in BETWEEN $2 AND $3 ORDER BY clock_in`,
    [employeeId, from, to]
  );
  const totalHours = sessions.reduce((sum: number, s: any) => sum + parseFloat(s.hours_worked), 0);
  const basePay = parseFloat((totalHours * HOURLY_RATE).toFixed(2));

  // Bonus events in period
  const { rows: bonuses } = await pool.query(
    `SELECT * FROM bonus_events WHERE employee_id = $1 AND created_at BETWEEN $2 AND $3`,
    [employeeId, from, to]
  );
  const roomBonus = bonuses.filter((b: any) => b.type === 'room_upsell').reduce((s: number, b: any) => s + parseFloat(b.amount), 0);
  const voucherBonus = bonuses.filter((b: any) => b.type === 'meal_voucher').reduce((s: number, b: any) => s + parseFloat(b.amount), 0);
  const soldoutBonus = bonuses.filter((b: any) => b.type === 'sold_out').reduce((s: number, b: any) => s + parseFloat(b.amount), 0);
  const tips = sessions.reduce((sum: number, s: any) => sum + parseFloat(s.tips || '0'), 0);

  return {
    period_start: from, period_end: to,
    total_hours: parseFloat(totalHours.toFixed(2)),
    base_pay: basePay,
    room_bonus: parseFloat(roomBonus.toFixed(2)),
    voucher_bonus: parseFloat(voucherBonus.toFixed(2)),
    soldout_bonus: parseFloat(soldoutBonus.toFixed(2)),
    tips: parseFloat(tips.toFixed(2)),
    total_estimated: parseFloat((basePay + roomBonus + voucherBonus + soldoutBonus + tips).toFixed(2)),
    sessions, bonus_events: bonuses,
  };
}

export function calcRoomBonus(basePrice: number, guestPaid: number): number {
  if (guestPaid <= basePrice) return 0;
  return Math.floor((guestPaid - basePrice) / 5) * ROOM_BONUS_PER_5;
}
