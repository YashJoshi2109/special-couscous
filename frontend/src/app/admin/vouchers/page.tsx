'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { GlassCard } from '@/components/ui/GlassUI';
import { formatCurrency, formatTime, maskCardNumber } from '@/lib/utils';
import { api } from '@/lib/api';

export default function VouchersPage() {
  const vouchersQuery = useQuery({
    queryKey: ['admin-vouchers'],
    queryFn: () => api.admin.vouchers(),
  });

  const vouchers = vouchersQuery.data?.vouchers ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AdminSidebar />
      <main className="ml-64 p-8 overflow-y-auto max-h-screen pb-20">
        <h1 className="text-display-md font-bold text-neutral-900">Vouchers</h1>
        <GlassCard className="mt-6 p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left">
                <th className="px-4 py-3">Employee</th>
                <th className="px-4 py-3">Room</th>
                <th className="px-4 py-3">Card</th>
                <th className="px-4 py-3">Bonus</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {vouchers.map((voucher) => (
                <tr key={voucher.id} className="border-b border-neutral-100">
                  <td className="px-4 py-3">{voucher.employeeName}</td>
                  <td className="px-4 py-3">{voucher.room} ({voucher.passengerCount})</td>
                  <td className="px-4 py-3">{maskCardNumber(voucher.cardNumber)}</td>
                  <td className="px-4 py-3">{formatCurrency(voucher.bonusAmount)}</td>
                  <td className="px-4 py-3">{formatTime(new Date(voucher.scannedAt))}</td>
                  <td className="px-4 py-3">{voucher.status}</td>
                </tr>
              ))}
              {!vouchersQuery.isLoading && vouchers.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-neutral-500">No vouchers available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </GlassCard>
      </main>
    </div>
  );
}
