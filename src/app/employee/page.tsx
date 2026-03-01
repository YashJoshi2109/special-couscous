'use client';

import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { StatusCard } from '@/components/employee/StatusCard';
import { GlassCard, KPITile, EmptyState } from '@/components/ui/GlassUI';
import { formatCurrency } from '@/lib/utils';
import { formatTime } from '@/lib/utils';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';

export default function EmployeeHome() {
  const queryClient = useQueryClient();

  const meQuery = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: () => api.auth.me(),
  });

  const sessionsQuery = useQuery({
    queryKey: ['sessions', 'employee'],
    queryFn: () => api.sessions.list(),
    enabled: !!meQuery.data?.user,
    refetchInterval: 15000,
  });

  const clockInMutation = useMutation({
    mutationFn: (payload: { role: 'FRONT_DESK' | 'SHUTTLE'; shiftType: 'MORNING' | 'EVENING' | 'NIGHT' | 'SHUTTLE' }) =>
      api.sessions.clockIn(payload),
    onSuccess: () => {
      toast.success('Clocked in successfully');
      queryClient.invalidateQueries({ queryKey: ['sessions'] });
      queryClient.invalidateQueries({ queryKey: ['pay-estimate'] });
      queryClient.invalidateQueries({ queryKey: ['admin-dashboard'] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const clockOutMutation = useMutation({
    mutationFn: (payload: { sessionId: string; tips?: number }) =>
      api.sessions.clockOut(payload.sessionId, { tips: payload.tips }),
    onSuccess: () => {
      toast.success('Clocked out successfully');
      queryClient.invalidateQueries({ queryKey: ['sessions'] });
      queryClient.invalidateQueries({ queryKey: ['pay-estimate'] });
      queryClient.invalidateQueries({ queryKey: ['admin-dashboard'] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const sessions = sessionsQuery.data?.sessions ?? [];
  const activeSession = sessions.find((session) => session.status === 'OPEN' && !session.clockOutTime);

  const today = new Date();
  const todaysSessions = sessions.filter((session) => {
    const date = new Date(session.clockInTime);
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  });

  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());
  weekStart.setHours(0, 0, 0, 0);

  const weekSessions = sessions.filter((session) => new Date(session.clockInTime) >= weekStart);

  const todayHours = todaysSessions.reduce((sum, session) => {
    if (!session.clockOutTime) return sum;
    return sum + (new Date(session.clockOutTime).getTime() - new Date(session.clockInTime).getTime()) / (1000 * 60 * 60);
  }, 0);

  const todayEarnings = todaysSessions.reduce((sum, session) => {
    return sum + (session.basePayAmount ?? 0) + (session.tipsAmount ?? 0) + (session.bonusAmount ?? 0);
  }, 0);

  const weekHours = weekSessions.reduce((sum, session) => {
    if (!session.clockOutTime) return sum;
    return sum + (new Date(session.clockOutTime).getTime() - new Date(session.clockInTime).getTime()) / (1000 * 60 * 60);
  }, 0);

  const weekEarnings = weekSessions.reduce((sum, session) => {
    return sum + (session.basePayAmount ?? 0) + (session.tipsAmount ?? 0) + (session.bonusAmount ?? 0);
  }, 0);

  const weekBasePay = weekSessions.reduce((sum, session) => sum + (session.basePayAmount ?? 0), 0);
  const weekTips = weekSessions.reduce((sum, session) => sum + (session.tipsAmount ?? 0), 0);
  const weekBonuses = weekSessions.reduce((sum, session) => sum + (session.bonusAmount ?? 0), 0);

  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const monthSessions = sessions.filter((session) => new Date(session.clockInTime) >= monthStart);
  const monthEarnings = monthSessions.reduce((sum, session) => {
    return sum + (session.basePayAmount ?? 0) + (session.tipsAmount ?? 0) + (session.bonusAmount ?? 0);
  }, 0);
  const monthHours = monthSessions.reduce((sum, session) => {
    if (!session.clockOutTime) return sum;
    return sum + (new Date(session.clockOutTime).getTime() - new Date(session.clockInTime).getTime()) / (1000 * 60 * 60);
  }, 0);

  const handleClockIn = async (role: string, shiftType: string) => {
    await clockInMutation.mutateAsync({
      role: role as 'FRONT_DESK' | 'SHUTTLE',
      shiftType: shiftType as 'MORNING' | 'EVENING' | 'NIGHT' | 'SHUTTLE',
    });
  };

  const handleClockOut = async (tips?: number) => {
    if (!activeSession) {
      toast.error('No active session found');
      return;
    }
    await clockOutMutation.mutateAsync({ sessionId: activeSession.id, tips });
  };

  if (meQuery.isLoading || sessionsQuery.isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24">
        <div className="max-w-lg mx-auto px-4 py-6">
          <GlassCard className="p-6 text-center text-neutral-600">Loading dashboard...</GlassCard>
        </div>
        <EmployeeNavBar />
      </main>
    );
  }

  if (!meQuery.data?.user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24">
        <div className="max-w-lg mx-auto px-4 py-6">
          <GlassCard className="p-6 text-center text-neutral-600">You are not signed in. Please log in to continue.</GlassCard>
        </div>
        <EmployeeNavBar />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-display-md font-bold text-neutral-900">
            Welcome Back
          </h1>
          <p className="text-body-md text-neutral-600">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {/* Status Card */}
        <div className="mb-6">
          <StatusCard
            isClockedIn={!!activeSession}
            activeRole={activeSession?.role}
            activeShiftType={activeSession?.shiftType}
            clockInTime={activeSession ? new Date(activeSession.clockInTime) : undefined}
            onClockIn={handleClockIn}
            onClockOut={handleClockOut}
            isLoading={clockInMutation.isPending || clockOutMutation.isPending}
          />
        </div>

        {/* Today's Sessions */}
        <div className="mb-6">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
            Today's Sessions
          </h2>
          {todaysSessions.length === 0 ? (
            <EmptyState
              icon="📭"
              title="No sessions yet"
              description="Clock in to start tracking your shift"
            />
          ) : (
            <div className="space-y-2">
              {todaysSessions.map((session) => (
                <GlassCard key={session.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-body-md font-semibold text-neutral-900">
                        {session.role === 'FRONT_DESK' ? 'Front Desk' : 'Shuttle'} · {session.shiftType}
                      </p>
                      <p className="text-caption-sm text-neutral-600">
                        {formatTime(new Date(session.clockInTime))} - {session.clockOutTime ? formatTime(new Date(session.clockOutTime)) : 'In progress'}
                      </p>
                    </div>
                    <p className="text-body-md font-semibold text-primary-600">
                      {formatCurrency((session.basePayAmount ?? 0) + (session.tipsAmount ?? 0) + (session.bonusAmount ?? 0))}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </div>

        {/* Today Summary */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <KPITile label="Hours Today" value={`${todayHours.toFixed(1)}h`} />
          <KPITile label="Earnings Today" value={formatCurrency(todayEarnings)} />
        </div>

        {/* Weekly Summary */}
        <div className="mb-6">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
            This Week
          </h2>
          <GlassCard className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-body-md text-neutral-600">
                Total Hours
              </span>
              <span className="text-heading-md font-semibold text-neutral-900">
                {weekHours.toFixed(1)}h
              </span>
            </div>
            <div className="border-t border-white/20" />
            <div className="flex justify-between items-center py-2">
              <span className="text-body-md text-neutral-600">
                Base Pay
              </span>
              <span className="text-body-md font-semibold text-neutral-900">
                {formatCurrency(weekBasePay)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-body-md text-neutral-600">
                Tips
              </span>
              <span className="text-body-md font-semibold text-success-600">
                +{formatCurrency(weekTips)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-body-md text-neutral-600">
                Bonuses
              </span>
              <span className="text-body-md font-semibold text-success-600">
                +{formatCurrency(weekBonuses)}
              </span>
            </div>
            <div className="border-t border-white/20" />
            <div className="flex justify-between items-center py-2">
              <span className="text-body-md font-semibold text-neutral-900">
                Total Earnings
              </span>
              <span className="text-heading-md font-bold text-primary-600">
                {formatCurrency(weekEarnings)}
              </span>
            </div>
          </GlassCard>
        </div>

        {/* Monthly Summary */}
        <div className="mb-6">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
            This Month
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <KPITile label="Hours" value={`${monthHours.toFixed(1)}h`} />
            <KPITile label="Earnings" value={formatCurrency(monthEarnings)} />
          </div>
        </div>
      </div>

      <EmployeeNavBar />
    </main>
  );
}
