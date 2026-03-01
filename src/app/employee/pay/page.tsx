'use client';

import React from 'react';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { GlassCard, KPITile } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Download, Share2, TrendingUp } from 'lucide-react';

const mockPayData = {
  payPeriod: {
    start: '2026-03-01',
    end: '2026-03-14',
  },
  estimatedTotal: 1245.75,
  breakdown: [
    { label: 'Base Pay', value: 960, color: 'bg-blue-100 text-blue-700' },
    { label: 'Tips', value: 175, color: 'bg-green-100 text-green-700' },
    { label: 'Room Bonus', value: 75, color: 'bg-purple-100 text-purple-700' },
    { label: 'Voucher Bonus', value: 35.75, color: 'bg-orange-100 text-orange-700' },
  ],
  byDay: [
    {
      date: 'Mar 1',
      hours: 8,
      base: 120,
      tips: 15,
      bonus: 10,
      total: 145,
    },
    {
      date: 'Mar 2',
      hours: 8,
      base: 120,
      tips: 20,
      bonus: 15,
      total: 155,
    },
  ],
};

export default function PayPage() {
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
            {formatCurrency(mockPayData.estimatedTotal)}
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
            {mockPayData.breakdown.map((item, idx) => (
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
            {mockPayData.byDay.map((day, idx) => (
              <GlassCard key={idx} className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-body-md font-semibold text-neutral-900">
                    {day.date}
                  </span>
                  <span className="text-heading-md font-bold text-primary-600">
                    {formatCurrency(day.total)}
                  </span>
                </div>
                <p className="text-caption-sm text-neutral-600">
                  {day.hours}h • Base {formatCurrency(day.base)} + Tips{' '}
                  {formatCurrency(day.tips)} + Bonus{' '}
                  {formatCurrency(day.bonus)}
                </p>
              </GlassCard>
            ))}
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
