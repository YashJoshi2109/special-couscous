'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { GlassCard } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { formatTime, formatDuration, formatCurrency } from '@/lib/utils';
import { EmployeeSession } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { api } from '@/lib/api';

export default function TimesheetPage() {
  const [viewMode, setViewMode] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [selectedDate, setSelectedDate] = useState(new Date());
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

  // Group sessions by day
  const sessionsByDay = sessions.reduce((acc, session) => {
    const dayKey = session.clockInTime.toLocaleDateString('en-US');
    if (!acc[dayKey]) acc[dayKey] = [];
    acc[dayKey].push(session);
    return acc;
  }, {} as Record<string, EmployeeSession[]>);

  const getTimelineHours = () => {
    return Array.from({ length: 9 }, (_, i) => i + 12); // 12 PM to 9 PM
  };

  const getSessionPosition = (session: EmployeeSession) => {
    const startHour = session.clockInTime.getHours();
    const startMin = session.clockInTime.getMinutes();
    const endHour = session.clockOutTime?.getHours() ?? startHour + 1;
    const endMin = session.clockOutTime?.getMinutes() ?? 0;

    const startPercent = (startHour + startMin / 60) * (100 / 9);
    const endPercent = (endHour + endMin / 60) * (100 / 9);

    return {
      left: `${startPercent}%`,
      width: `${Math.max(endPercent - startPercent, 3)}%`,
    };
  };

  const roleColor = (role: string) => {
    const colors: Record<string, string> = {
      FRONT_DESK: 'bg-blue-500',
      SHUTTLE: 'bg-purple-500',
      RESTAURANT: 'bg-orange-500',
      HOUSEKEEPING: 'bg-green-500',
    };
    return colors[role] || 'bg-gray-500';
  };

  const totalEarnings = sessions.reduce(
    (sum, s) => sum + (s.basePayAmount || 0) + (s.tipsAmount || 0) + (s.bonusAmount || 0),
    0
  );

  const prevWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 7);
    setSelectedDate(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 7);
    setSelectedDate(newDate);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24">
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-display-md font-bold text-neutral-900">
              Timesheet
            </h1>
            <p className="text-body-md text-neutral-600">
              {viewMode === 'weekly' ? 'Weekly view' : viewMode === 'daily' ? 'Daily view' : 'Monthly view'}
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2">
            {(['daily', 'weekly', 'monthly'] as const).map((mode) => (
              <Button
                key={mode}
                variant={viewMode === mode ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setViewMode(mode)}
                className="capitalize"
              >
                {mode.slice(0, 1).toUpperCase() + mode.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Earnings Card */}
        <GlassCard variant="elevated" className="mb-6 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-caption-md text-neutral-600 mb-1">
                Total Earnings
              </p>
              <p className="text-heading-lg font-bold text-primary-600">
                {formatCurrency(totalEarnings)}
              </p>
            </div>
            <div>
              <p className="text-caption-md text-neutral-600 mb-1">
                Total Hours
              </p>
              <p className="text-heading-lg font-bold text-success-600">
                {Math.floor(
                  sessions.reduce((sum, s) => {
                    if (!s.clockOutTime) return sum;
                    return sum + (s.clockOutTime.getTime() - s.clockInTime.getTime()) / (1000 * 60 * 60);
                  }, 0)
                )}h
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Timeline Header */}
        <div className="flex items-center justify-between mb-4">
          <Button variant="secondary" size="sm" onClick={prevWeek}>
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <span className="text-body-md font-semibold text-neutral-900">
            {selectedDate.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>

          <Button variant="secondary" size="sm" onClick={nextWeek}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Horizontal Timeline */}
        {sessionsQuery.isLoading ? (
          <GlassCard className="p-6 text-center text-neutral-600">
            Loading timesheet...
          </GlassCard>
        ) : (
          <div className="overflow-x-auto pb-4">
            <div className="min-w-max">
              {/* Hour Labels */}
              <div className="flex mb-2">
                <div className="w-20 flex-shrink-0" />
                {getTimelineHours().map((hour) => (
                  <div
                    key={hour}
                    className="w-20 text-center text-caption-sm text-neutral-600 font-medium"
                  >
                    {hour === 12 ? '12 PM' : hour < 12 ? `${hour} AM` : `${hour - 12} PM`}
                  </div>
                ))}
              </div>

              {/* Days */}
              {Object.entries(sessionsByDay).map(([dayKey, daySessions]) => (
                <div key={dayKey} className="mb-4">
                  <div className="flex items-start">
                    <div className="w-20 flex-shrink-0">
                      <p className="text-body-md font-semibold text-neutral-900">
                        {dayKey.split('/')[0].padStart(2, '0')}/{dayKey.split('/')[1].padStart(2, '0')}
                      </p>
                      <p className="text-caption-sm text-neutral-600">
                        {new Date(dayKey).toLocaleDateString('en-US', { weekday: 'short' })}
                      </p>
                    </div>

                    {/* Timeline Bar */}
                    <div className="flex-1 relative h-20 bg-neutral-100 rounded-lg overflow-hidden">
                      {/* Grid Lines */}
                      {getTimelineHours().map((hour) => (
                        <div
                          key={hour}
                          className="absolute top-0 bottom-0 w-px bg-neutral-300"
                          style={{ left: `${(hour - 12) * (100 / 9)}%` }}
                        />
                      ))}

                      {/* Sessions */}
                      {daySessions.map((session) => {
                        const position = getSessionPosition(session);
                        return (
                          <button
                            key={session.id}
                            onClick={() => setSelectedSession(session)}
                            className={`absolute top-1 bottom-1 ${roleColor(
                              session.role
                            )} text-white text-xs font-medium rounded px-2 py-1 hover:shadow-lg transition-shadow overflow-hidden flex items-center justify-center cursor-pointer`}
                            style={{ left: position.left, width: position.width }}
                            title={`${formatTime(session.clockInTime)} - ${
                              session.clockOutTime ? formatTime(session.clockOutTime) : 'Clocked in'
                            } (${session.role})`}
                          >
                            <span className="truncate">
                              {formatTime(session.clockInTime).split(':')[0]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Session Details Modal */}
        {selectedSession && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-end">
            <div className="w-full bg-white rounded-t-2xl p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between">
                <h2 className="text-heading-lg font-semibold text-neutral-900">
                  Session Details
                </h2>
                <button
                  onClick={() => setSelectedSession(null)}
                  className="p-2 hover:bg-neutral-100 rounded-lg"
                />
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="p-4">
                  <p className="text-caption-sm text-neutral-600 mb-1">Role</p>
                  <p className="text-body-md font-semibold text-neutral-900">
                    {selectedSession.role}
                  </p>
                </GlassCard>
                <GlassCard className="p-4">
                  <p className="text-caption-sm text-neutral-600 mb-1">Date</p>
                  <p className="text-body-md font-semibold text-neutral-900">
                    {selectedSession.clockInTime.toLocaleDateString()}
                  </p>
                </GlassCard>
              </div>

              {/* Time Range */}
              <GlassCard className="p-4">
                <p className="text-caption-sm text-neutral-600 mb-2">Time</p>
                <div className="flex items-center justify-between">
                  <span className="text-body-md font-semibold text-neutral-900">
                    {formatTime(selectedSession.clockInTime)}
                  </span>
                  <span className="text-caption-sm text-neutral-600">to</span>
                  <span className="text-body-md font-semibold text-neutral-900">
                    {selectedSession.clockOutTime
                      ? formatTime(selectedSession.clockOutTime)
                      : 'Still working'}
                  </span>
                </div>
              </GlassCard>

              {/* Earnings */}
              <div className="space-y-2">
                <h3 className="text-body-md font-semibold text-neutral-900">
                  Earnings Breakdown
                </h3>
                {[
                  {
                    label: 'Base Pay',
                    value: selectedSession.basePayAmount,
                    color: 'text-neutral-900',
                  },
                  {
                    label: 'Tips',
                    value: selectedSession.tipsAmount,
                    color: 'text-success-600',
                  },
                  {
                    label: 'Bonus',
                    value: selectedSession.bonusAmount,
                    color: 'text-success-600',
                  },
                ].map(
                  ({ label, value, color }) =>
                    value &&
                    value > 0 && (
                      <div key={label} className="flex justify-between items-center">
                        <span className="text-body-md text-neutral-600">
                          {label}
                        </span>
                        <span className={`text-body-md font-semibold ${color}`}>
                          {label !== 'Base Pay' && '+'}
                          {formatCurrency(value)}
                        </span>
                      </div>
                    )
                )}

                <div className="border-t border-neutral-200 pt-2 mt-4">
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

              <Button
                variant="secondary"
                className="w-full"
                onClick={() => setSelectedSession(null)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>

      <EmployeeNavBar />
    </main>
  );
}
