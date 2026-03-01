'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { GlassCard, KPITile } from '@/components/ui/GlassUI';
import { formatCurrency } from '@/lib/utils';
import { api } from '@/lib/api';

export default function PayrollPage() {
  const payrollQuery = useQuery({
    queryKey: ['admin-payroll'],
    queryFn: () => api.admin.payroll(),
  });

  const data = payrollQuery.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AdminSidebar />
      <main className="ml-64 p-8">
        <h1 className="text-display-md font-bold text-neutral-900">Payroll</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 mb-6">
          <KPITile label="Base" value={formatCurrency(data?.totals.totalBasePay ?? 0)} />
          <KPITile label="Tips" value={formatCurrency(data?.totals.totalTips ?? 0)} />
          <KPITile label="Bonuses" value={formatCurrency(data?.totals.totalBonus ?? 0)} />
          <KPITile label="Grand Total" value={formatCurrency(data?.totals.grandTotal ?? 0)} />
        </div>

        <GlassCard className="p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left">
                <th className="px-4 py-3">Employee</th>
                <th className="px-4 py-3">Sessions</th>
                <th className="px-4 py-3">Vouchers</th>
                <th className="px-4 py-3">Base</th>
                <th className="px-4 py-3">Tips</th>
                <th className="px-4 py-3">Bonus</th>
                <th className="px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {(data?.payrollRows ?? []).map((row) => (
                <tr key={row.userId} className="border-b border-neutral-100">
                  <td className="px-4 py-3">{row.employeeName}</td>
                  <td className="px-4 py-3">{row.sessions}</td>
                  <td className="px-4 py-3">{row.vouchers}</td>
                  <td className="px-4 py-3">{formatCurrency(row.basePay)}</td>
                  <td className="px-4 py-3">{formatCurrency(row.tips)}</td>
                  <td className="px-4 py-3">{formatCurrency(row.bonus + row.voucherBonus)}</td>
                  <td className="px-4 py-3 font-semibold">{formatCurrency(row.total)}</td>
                </tr>
              ))}
              {!payrollQuery.isLoading && (data?.payrollRows ?? []).length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-neutral-500">No payroll rows available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </GlassCard>
      </main>
    </div>
  );
}
