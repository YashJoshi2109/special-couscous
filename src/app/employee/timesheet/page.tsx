'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { TimelineCalendar } from '@/components/employee/TimelineCalendar';
import { GlassCard } from '@/components/ui/GlassUI';
import { EmployeeSession } from '@/types';
import { Drawer } from '@/components/ui/Button';
import { formatTime, formatDuration, formatCurrency } from '@/lib/utils';
import { api } from '@/lib/api';

export default function TimesheetPage() {
  const [selectedSession, setSelectedSession] = React.useState<EmployeeSession | null>(null);

  const sessionsQuery = useQuery({
    queryKey: ['sessions', 'employee'],
    queryFn: () => api.sessions.list(),
  });

  const sessions: EmployeeSession[] = (sessionsQuery.data?.sessions ?? []).map((session) => ({
    id: session.id,
    role: session.role,
    shiftType: session.shiftType,
    clockInTime: new Date(session.clockInTime),
    clockOutTime: session.clockOutTime ? new Date(session.clockOutTime) : undefined,
    duration: undefined,
    basePayAmount: session.basePayAmount ?? undefined,
    tipsAmount: session.tipsAmount ?? undefined,
    bonusAmount: session.bonusAmount ?? undefined,
    status: session.status,
  }));

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-display-md font-bold text-neutral-900">
            Timesheet
          </h1>
          <p className="text-body-md text-neutral-600">
            Track your shifts and earnings
          </p>
        </div>

        {/* Calendar */}
        {sessionsQuery.isLoading ? (
          <GlassCard className="p-6 text-center text-neutral-600">Loading timesheet...</GlassCard>
        ) : (
          <TimelineCalendar
            sessions={sessions}
            onSessionTap={setSelectedSession}
          />
        )}
      </div>

      {/* Session Detail Drawer */}
      {selectedSession && (
        <Drawer
          isOpen={!!selectedSession}
          onClose={() => setSelectedSession(null)}
          title="Session Details"
        >
          <div className="space-y-6">
            {/* Role & Shift */}
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="p-4">
                <p className="text-caption-sm text-neutral-600 mb-1">Role</p>
                <p className="text-body-md font-semibold text-neutral-900">
                  {selectedSession.role === 'FRONT_DESK'
                    ? 'Front Desk'
                    : 'Shuttle'}
                </p>
              </GlassCard>
              <GlassCard className="p-4">
                <p className="text-caption-sm text-neutral-600 mb-1">Shift</p>
                <p className="text-body-md font-semibold text-neutral-900">
                  {selectedSession.shiftType}
                </p>
              </GlassCard>
            </div>

            {/* Times */}
            <GlassCard className="p-4">
              <p className="text-caption-sm text-neutral-600 mb-3">
                Session Time
              </p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-body-md font-semibold text-neutral-900">
                  {formatTime(new Date(selectedSession.clockInTime))}
                </span>
                <span className="text-neutral-400">→</span>
                <span className="text-body-md font-semibold text-neutral-900">
                  {selectedSession.clockOutTime
                    ? formatTime(new Date(selectedSession.clockOutTime))
                    : 'Still clocked in'}
                </span>
              </div>
              {selectedSession.clockOutTime && (
                <p className="text-caption-sm text-neutral-600">
                  Duration:{' '}
                  {formatDuration(
                    Math.floor(
                      (new Date(selectedSession.clockOutTime).getTime() -
                        new Date(selectedSession.clockInTime).getTime()) /
                        (1000 * 60)
                    )
                  )}
                </p>
              )}
            </GlassCard>

            {/* Earnings Breakdown */}
            <div className="space-y-2">
              <h3 className="text-body-md font-semibold text-neutral-900">
                Earnings Breakdown
              </h3>
              {selectedSession.basePayAmount && (
                <div className="flex justify-between items-center">
                  <span className="text-body-md text-neutral-600">
                    Base Pay
                  </span>
                  <span className="text-body-md font-semibold text-neutral-900">
                    {formatCurrency(selectedSession.basePayAmount)}
                  </span>
                </div>
              )}
              {selectedSession.tipsAmount && selectedSession.tipsAmount > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-body-md text-neutral-600">Tips</span>
                  <span className="text-body-md font-semibold text-success-600">
                    +{formatCurrency(selectedSession.tipsAmount)}
                  </span>
                </div>
              )}
              {selectedSession.bonusAmount && selectedSession.bonusAmount > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-body-md text-neutral-600">Bonus</span>
                  <span className="text-body-md font-semibold text-success-600">
                    +{formatCurrency(selectedSession.bonusAmount)}
                  </span>
                </div>
              )}

              <div className="border-t border-neutral-200 pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-body-md font-semibold text-neutral-900">
                    Session Total
                  </span>
                  <span className="text-heading-md font-bold text-primary-600">
                    {formatCurrency(
                      (selectedSession.basePayAmount || 0) +
                        (selectedSession.tipsAmount || 0) +
                        (selectedSession.bonusAmount || 0)
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      )}

      <EmployeeNavBar />
    </main>
  );
}
