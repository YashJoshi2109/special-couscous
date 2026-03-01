'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { GlassCard } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Download, Share2 } from 'lucide-react';
import { api } from '@/lib/api';

export default function PayPage() {
  const payQuery = useQuery({
    queryKey: ['pay-estimate'],
    queryFn: () => api.pay.estimate(),
  });

  const pay = payQuery.data;

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-display-md font-bold text-neutral-900">Pay</h1>
          <p className="text-body-md text-neutral-600">
            View your estimated paystub
          </p>
        </div>

        {/* Pay Period Selector */}
        <div className="mb-6 flex gap-2">
          <button className="flex-1 px-4 py-2 rounded-lg bg-primary-600 text-white font-medium text-sm">
            Current Period
          </button>
          <button className="flex-1 px-4 py-2 rounded-lg bg-neutral-200 text-neutral-700 font-medium text-sm">
            Previous
          </button>
        </div>

        {/* Estimated Total */}
        <GlassCard variant="elevated" className="mb-6 text-center py-8">
          <p className="text-caption-md text-neutral-600 mb-2">
            Estimated Total
          </p>
          <p className="text-display-lg font-bold text-primary-600 mb-4">
            {payQuery.isLoading ? 'Loading...' : formatCurrency(pay?.totalEstimated ?? 0)}
          </p>
          <p className="text-caption-sm text-neutral-500">
            Estimate (not final payroll)
          </p>
        </GlassCard>

        {/* Breakdown Cards */}
        <div className="mb-6">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
            Breakdown
          </h2>
          <div className="space-y-2">
            {[
              { label: 'Base Pay', value: pay?.basePay ?? 0 },
              { label: 'Tips', value: pay?.tips ?? 0 },
              { label: 'Room Bonus', value: pay?.roomBonus ?? 0 },
              { label: 'Voucher Bonus', value: pay?.voucherBonus ?? 0 },
              { label: 'Sold Out Bonus', value: pay?.soldOutBonus ?? 0 },
            ].map((item, idx) => (
              <div key={idx} className="glass rounded-lg p-4 flex justify-between items-center">
                <span className="text-body-md text-neutral-700">
                  {item.label}
                </span>
                <span className="text-body-md font-semibold text-neutral-900">
                  {formatCurrency(item.value)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Details by Day */}
        <div className="mb-6">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
            Details
          </h2>
          <div className="space-y-2">
            {(pay?.breakdownByDay ?? []).map((day, idx) => (
              <GlassCard key={idx} className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-body-md font-semibold text-neutral-900">
                    {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                  <span className="text-heading-md font-bold text-primary-600">
                    {formatCurrency(day.earnings)}
                  </span>
                </div>
                <p className="text-caption-sm text-neutral-600">
                  {day.hours.toFixed(2)}h • {day.sessions} session{day.sessions === 1 ? '' : 's'}
                </p>
              </GlassCard>
            ))}
            {!payQuery.isLoading && (pay?.breakdownByDay ?? []).length === 0 && (
              <GlassCard className="p-4 text-center text-neutral-600">No completed sessions in this pay period yet.</GlassCard>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" className="w-full">
            <Download className="w-4 h-4" />
            Export PDF
          </Button>
          <Button variant="secondary" className="w-full">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>
      </div>

      <EmployeeNavBar />
    </main>
  );
}
