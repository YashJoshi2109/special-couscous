'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { GlassCard } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Download } from 'lucide-react';
import { SafeAreaInset } from '@/components/MobileLayout';
import { api } from '@/lib/api';

type Period = 'thisWeek' | 'lastWeek' | 'monthly';

export default function PayPage() {
  const [period, setPeriod] = useState<Period>('thisWeek');
  
  const payQuery = useQuery({
    queryKey: ['pay-estimate'],
    queryFn: () => api.pay.estimate(),
  });

  const pay = payQuery.data;

  const periodDates = {
    thisWeek: 'Feb 24 — Mar 2, 2026',
    lastWeek: 'Feb 17 — Feb 23, 2026',
    monthly: 'Feb 1 — Feb 29, 2026'
  };

  const dailyBreakdown = [
    { date: 'Mon Feb 24', hours: 7.92, amount: 79.17 },
    { date: 'Tue Feb 25', hours: 9.12, amount: 94.17, bonus: 3 },
    { date: 'Wed Feb 26', hours: 7.87, amount: 97.67, bonus: 8 },
  ];

  return (
    <>
      <EmployeeNavBar />
      <SafeAreaInset edge="top"></SafeAreaInset>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-display-md font-bold text-neutral-900">Estimated Paystub</h1>
          <p className="text-body-md text-neutral-600">
            Pay period: {periodDates[period]}
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setPeriod('thisWeek')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              period === 'thisWeek'
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setPeriod('lastWeek')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              period === 'lastWeek'
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
            }`}
          >
            Last Week
          </button>
          <button
            onClick={() => setPeriod('monthly')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              period === 'monthly'
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Download Button */}
        <Button variant="secondary" className="w-full mb-6">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>

        {/* Estimated Gross Pay */}
        <GlassCard variant="elevated" className="p-6 mb-6">
          <p className="text-caption-md text-neutral-600 uppercase tracking-wide mb-2">
            Estimated Gross Pay
          </p>
          <p className="text-display-lg font-bold text-neutral-900 mb-3">
            {payQuery.isLoading ? 'Loading...' : formatCurrency(pay?.totalEstimated ?? 412)}
          </p>
          <p className="text-caption-sm text-neutral-600 mb-4">
            {periodDates[period]} · 37.5 hours
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-caption-sm font-medium">
              • Estimate Only
            </span>
            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-caption-sm font-medium">
              Not Final Payroll
            </span>
          </div>
        </GlassCard>

        {/* Breakdown */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between py-3 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-body-md text-neutral-700">Base Pay (37.5h × $10)</span>
            </div>
            <span className="text-body-md font-semibold text-neutral-900">{formatCurrency(375)}</span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-body-md text-neutral-700">Room Upsell Bonuses (7 rooms)</span>
            </div>
            <span className="text-body-md font-semibold text-neutral-900">{formatCurrency(28)}</span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span className="text-body-md text-neutral-700">Meal Voucher Bonuses (3 vouchers)</span>
            </div>
            <span className="text-body-md font-semibold text-neutral-900">{formatCurrency(9)}</span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-body-md text-neutral-700">Sold-Out Bonus (0 events)</span>
            </div>
            <span className="text-body-md font-semibold text-neutral-900">{formatCurrency(0)}</span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-body-md text-neutral-700">Tips (self-reported)</span>
            </div>
            <span className="text-body-md font-semibold text-neutral-900">{formatCurrency(0)}</span>
          </div>

          <div className="flex items-center justify-between py-4 bg-success-50 rounded-lg px-4 mt-4">
            <span className="text-body-md font-semibold text-neutral-900">Total Estimated Earnings</span>
            <span className="text-heading-lg font-bold text-success-600">{formatCurrency(412)}</span>
          </div>
        </div>

        {/* Room Upsell Log */}
        <GlassCard variant="elevated" className="p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-heading-md font-semibold text-neutral-900">🏨 Room Upsell Log</h3>
            <span className="text-caption-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              7 rooms · {formatCurrency(28)}
            </span>
          </div>
          <div className="space-y-3">
            {[
              { date: 'Feb 24', room: '305', type: 'Premium Suite', amount: 4 },
              { date: 'Feb 25', room: '412', type: 'Ocean View', amount: 4 },
              { date: 'Feb 26', room: '218', type: 'Deluxe King', amount: 4 },
              { date: 'Feb 26', room: '307', type: 'Premium Suite', amount: 4 },
            ].map((upsell, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
                <div>
                  <p className="text-body-sm font-medium text-neutral-900">Room {upsell.room}</p>
                  <p className="text-caption-sm text-neutral-600">{upsell.date} · {upsell.type}</p>
                </div>
                <span className="text-body-sm font-semibold text-orange-600">{formatCurrency(upsell.amount)}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Voucher Bonuses */}
        <GlassCard variant="elevated" className="p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-heading-md font-semibold text-neutral-900">🎫 Voucher Bonuses</h3>
            <span className="text-caption-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              3 vouchers · {formatCurrency(9)}
            </span>
          </div>
          <div className="space-y-3">
            {[
              { date: 'Feb 25', voucher: 'MEAL-45623', amount: 3 },
              { date: 'Feb 26', voucher: 'MEAL-45789', amount: 3 },
              { date: 'Feb 26', voucher: 'MEAL-45834', amount: 3 },
            ].map((voucher, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
                <div>
                  <p className="text-body-sm font-medium text-neutral-900">{voucher.voucher}</p>
                  <p className="text-caption-sm text-neutral-600">{voucher.date}</p>
                </div>
                <span className="text-body-sm font-semibold text-purple-600">{formatCurrency(voucher.amount)}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Daily Breakdown */}
        <div className="mb-6">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">Daily Breakdown</h2>
          <div className="space-y-3">
            {dailyBreakdown.map((day, idx) => (
              <GlassCard key={idx} variant="elevated" className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-body-md font-semibold text-neutral-900">{day.date}</p>
                    <p className="text-caption-sm text-neutral-600">{day.hours.toFixed(2)} hours</p>
                  </div>
                  <div className="text-right">
                    <p className="text-heading-md font-bold text-primary-600">{formatCurrency(day.amount)}</p>
                    {day.bonus && (
                      <p className="text-caption-sm text-success-600">+{formatCurrency(day.bonus)} bonus</p>
                    )}
                  </div>
                </div>
                {/* Mini progress bar */}
                <div className="w-full bg-neutral-200 rounded-full h-1.5 mt-3">
                  <div 
                    className="bg-primary-600 h-1.5 rounded-full transition-all"
                    style={{ width: `${(day.hours / 10) * 100}%` }}
                  />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Hours Chart */}
        <GlassCard variant="elevated" className="p-5 mb-6">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-5">Hours This Week</h3>
          <div className="flex items-end justify-between h-40 gap-2">
            {[
              { day: 'Mon', hours: 7.92 },
              { day: 'Tue', hours: 9.12 },
              { day: 'Wed', hours: 7.87 },
              { day: 'Thu', hours: 0 },
              { day: 'Fri', hours: 0 },
              { day: 'Sat', hours: 0 },
              { day: 'Sun', hours: 0 },
            ].map((day, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col justify-end h-32">
                  {day.hours > 0 && (
                    <div 
                      className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg transition-all hover:from-primary-700 hover:to-primary-500"
                      style={{ height: `${(day.hours / 10) * 100}%` }}
                    >
                      <div className="text-[10px] font-semibold text-white text-center pt-1">
                        {day.hours.toFixed(1)}
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-caption-sm font-medium text-neutral-600">{day.day}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-neutral-200 flex justify-between">
            <span className="text-body-sm text-neutral-600">Total Hours</span>
            <span className="text-body-sm font-bold text-neutral-900">24.91 hrs</span>
          </div>
        </GlassCard>

        {/* Disclaimer */}
        <div className="glass rounded-lg p-4 mb-6 border border-amber-200 bg-amber-50/50">
          <p className="text-caption-sm text-amber-800 leading-relaxed">
            ⚠️ <strong>Estimate Only:</strong> This paystub is an estimate based on tracked time and bonuses. 
            Actual payroll may differ due to tax withholdings, deductions, and final administrative adjustments.
          </p>
        </div>
      </div>

      <EmployeeNavBar />
    </>
  );
}
