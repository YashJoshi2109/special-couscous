'use client';

import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { GlassCard, KPITile } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { formatCurrency, formatTime } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';
import { api } from '@/lib/api';

export default function AdminOverviewPage() {
  const queryClient = useQueryClient();
  const dashboardQuery = useQuery({
    queryKey: ['admin-dashboard'],
    queryFn: () => api.admin.dashboard(),
    refetchInterval: 15000,
  });

  const clockOutMutation = useMutation({
    mutationFn: (payload: { sessionId: string }) => api.sessions.clockOut(payload.sessionId, { tips: 0 }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-dashboard'] });
      queryClient.invalidateQueries({ queryKey: ['sessions'] });
    },
  });

  const stats = dashboardQuery.data?.stats;
  const liveEmployees = dashboardQuery.data?.liveEmployees ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AdminSidebar />

      <main className="ml-64 p-8 overflow-y-auto max-h-screen pb-20">
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
            value={stats?.clockedInNow ?? 0}
            change="+2 vs yesterday"
            trend="up"
          />
          <KPITile
            label="Hours Today"
            value={`${stats?.totalHoursToday ?? 0}h`}
            change="+8.5h vs yesterday"
            trend="up"
          />
          <KPITile
            label="Voucher Scans"
            value={stats?.voucherScansToday ?? 0}
            change="+3 vs yesterday"
            trend="up"
          />
          <KPITile
            label="Est. Payroll"
            value={formatCurrency(stats?.estimatedPayrollPeriod ?? 0)}
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
              {liveEmployees.length} clocked in
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {liveEmployees.map((emp) => {
              const hours = Math.floor(emp.durationMinutes / 60);
              const mins = emp.durationMinutes % 60;
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
                        <strong>Since:</strong> {formatTime(new Date(emp.clockInTime))}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-heading-md font-bold text-primary-600 mb-3">
                      {hours}h {mins}m
                    </p>
                    <div className="space-y-2">
                      <Button variant="secondary" size="sm" className="w-full" onClick={() => clockOutMutation.mutate({ sessionId: emp.sessionId })} isLoading={clockOutMutation.isPending}>
                        Force Clock Out
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
            {dashboardQuery.isLoading && (
              <GlassCard className="p-6 text-center text-neutral-600">Loading live presence...</GlassCard>
            )}
          </div>
        </div>

        {/* Weekly Timesheet Calendar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-heading-lg font-semibold text-neutral-900">
              Weekly Timesheet
            </h2>
            <span className="text-caption-md text-neutral-600">
              Week {Math.ceil(new Date().getDate() / 7)}
            </span>
          </div>

          <GlassCard className="p-6 overflow-x-auto">
            <div className="min-w-max">
              {/* Calendar Header */}
              <div className="grid grid-cols-8 gap-2 mb-4">
                <div className="text-caption-sm font-medium text-neutral-600">EMPLOYEE</div>
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, idx) => {
                  const date = new Date();
                  date.setDate(date.getDate() - date.getDay() + idx + 1);
                  return (
                    <div key={day} className="text-center">
                      <div className="text-caption-sm font-medium text-neutral-600">{day}</div>
                      <div className="text-caption-sm text-neutral-500">
                        {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Employee Rows */}
              {liveEmployees.length > 0 ? (
                liveEmployees.map((emp) => (
                  <div key={emp.id} className="grid grid-cols-8 gap-2 mb-3 items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-caption-sm font-semibold">
                        {emp.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-body-sm font-medium text-neutral-900">{emp.name}</div>
                        <div className="text-caption-sm text-neutral-500">{emp.role}</div>
                      </div>
                    </div>

                    {/* Day cells - showing shift badges */}
                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => {
                      const shiftColors: Record<string, string> = {
                        MORNING: 'bg-blue-500',
                        EVENING: 'bg-purple-500',
                        NIGHT: 'bg-teal-500',
                        SHUTTLE: 'bg-amber-500',
                      };
                      const randomShifts = ['MORNING', 'EVENING', 'NIGHT', 'SHUTTLE'];
                      const hasShift = Math.random() > 0.3;
                      const shift = randomShifts[Math.floor(Math.random() * randomShifts.length)];
                      
                      return (
                        <div key={day} className="flex justify-center">
                          {hasShift && (
                            <div
                              className={`${shiftColors[shift]} text-white text-caption-sm font-medium px-2 py-1 rounded`}
                              title={shift}
                            >
                              {shift[0]}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-neutral-500">
                  No employees currently clocked in
                </div>
              )}

              {/* Legend */}
              <div className="flex gap-4 mt-6 pt-4 border-t border-neutral-200 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-500" />
                  <span className="text-caption-sm text-neutral-600">Morning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-purple-500" />
                  <span className="text-caption-sm text-neutral-600">Evening</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-teal-500" />
                  <span className="text-caption-sm text-neutral-600">Night</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-amber-500" />
                  <span className="text-caption-sm text-neutral-600">Shuttle</span>
                </div>
              </div>
            </div>
          </GlassCard>
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
