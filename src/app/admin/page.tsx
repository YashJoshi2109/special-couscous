'use client';

import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { GlassCard, KPITile } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { formatCurrency, formatTime, formatDate } from '@/lib/utils';
import { Users, Clock, Ticket, DollarSign, AlertCircle } from 'lucide-react';

interface LiveEmployee {
  id: string;
  name: string;
  role: string;
  shift: string;
  clockInTime: Date;
  duration: number; // minutes
  hasConflict?: boolean;
}

const mockLiveEmployees: LiveEmployee[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'FRONT_DESK',
    shift: 'MORNING',
    clockInTime: new Date(Date.now() - 3 * 60 * 60 * 1000),
    duration: 180,
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'SHUTTLE',
    shift: 'SHUTTLE',
    clockInTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
    duration: 120,
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    role: 'FRONT_DESK',
    shift: 'EVENING',
    clockInTime: new Date(Date.now() - 1 * 60 * 60 * 1000),
    duration: 60,
    hasConflict: true,
  },
];

const mockStats = {
  clockedInNow: mockLiveEmployees.length,
  totalHoursToday: 45.5,
  voucherScansToday: 12,
  estimatedPayrollPeriod: 8475.5,
};

export default function AdminOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AdminSidebar />

      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-display-md font-bold text-neutral-900 mb-2">
            Operations Dashboard
          </h1>
          <p className="text-body-md text-neutral-600">
            Real-time view of employee clocking and payroll
          </p>
        </div>

        {/* KPI Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KPITile
            label="Clocked In Now"
            value={mockStats.clockedInNow}
            change="+2 vs yesterday"
            trend="up"
          />
          <KPITile
            label="Hours Today"
            value={`${mockStats.totalHoursToday}h`}
            change="+8.5h vs yesterday"
            trend="up"
          />
          <KPITile
            label="Voucher Scans"
            value={mockStats.voucherScansToday}
            change="+3 vs yesterday"
            trend="up"
          />
          <KPITile
            label="Est. Payroll"
            value={formatCurrency(mockStats.estimatedPayrollPeriod)}
            change="In progress"
            trend="neutral"
          />
        </div>

        {/* Live Presence List */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-heading-lg font-semibold text-neutral-900">
              Live Presence
            </h2>
            <span className="text-caption-md text-neutral-600">
              {mockLiveEmployees.length} clocked in
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {mockLiveEmployees.map((emp) => {
              const hours = Math.floor(emp.duration / 60);
              const mins = emp.duration % 60;
              return (
                <GlassCard
                  key={emp.id}
                  className="p-6 flex justify-between items-start"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-danger-500 animate-pulse" />
                      <h3 className="text-body-md font-semibold text-neutral-900">
                        {emp.name}
                      </h3>
                      {emp.hasConflict && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-warning-100 text-warning-700 rounded-full text-caption-sm font-medium">
                          <AlertCircle className="w-3 h-3" />
                          Conflict
                        </span>
                      )}
                    </div>

                    <div className="space-y-1 mb-3">
                      <p className="text-caption-sm text-neutral-600">
                        <strong>Role:</strong> {emp.role}
                      </p>
                      <p className="text-caption-sm text-neutral-600">
                        <strong>Shift:</strong> {emp.shift}
                      </p>
                      <p className="text-caption-sm text-neutral-600">
                        <strong>Since:</strong> {formatTime(emp.clockInTime)}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-heading-md font-bold text-primary-600 mb-3">
                      {hours}h {mins}m
                    </p>
                    <div className="space-y-2">
                      <Button variant="secondary" size="sm" className="w-full">
                        Edit Time
                      </Button>
                      <Button variant="tertiary" size="sm" className="w-full">
                        Details
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="primary" className="w-full py-3">
              Trigger Sold-Out Bonus
            </Button>
            <Button variant="secondary" className="w-full py-3">
              Export Weekly Report
            </Button>
            <Button variant="secondary" className="w-full py-3">
              Generate Payroll
            </Button>
            <Button variant="secondary" className="w-full py-3">
              View Audit Log
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
