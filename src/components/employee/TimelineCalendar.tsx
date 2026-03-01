'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { formatTime, formatDate, getWeekDates, isSameDay } from '@/lib/utils';
import { EmployeeSession } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineCalendarProps {
  sessions: EmployeeSession[];
  onSessionTap?: (session: EmployeeSession) => void;
}

export const TimelineCalendar: React.FC<TimelineCalendarProps> = ({
  sessions,
  onSessionTap,
}) => {
  const [weekStart, setWeekStart] = useState(
    new Date(getWeekDates()[0])
  );

  const weekDates = getWeekDates(weekStart);
  const today = new Date();

  const goToPreviousWeek = () => {
    const prev = new Date(weekStart);
    prev.setDate(prev.getDate() - 7);
    setWeekStart(prev);
  };

  const goToNextWeek = () => {
    const next = new Date(weekStart);
    next.setDate(next.getDate() + 7);
    setWeekStart(next);
  };

  const goToToday = () => {
    const todayWeekStart = new Date(getWeekDates(today)[0]);
    setWeekStart(todayWeekStart);
  };

  const getSessionsForDay = (date: Date) => {
    return sessions.filter((s) => isSameDay(new Date(s.clockInTime), date));
  };

  const getDayTotals = (date: Date) => {
    const daySessions = getSessionsForDay(date);
    const hours = daySessions.reduce((acc, s) => {
      if (s.clockOutTime) {
        const duration =
          (new Date(s.clockOutTime).getTime() -
            new Date(s.clockInTime).getTime()) /
          (1000 * 60 * 60);
        return acc + duration;
      }
      return acc;
    }, 0);

    const earnings = daySessions.reduce(
      (acc, s) => acc + (s.basePayAmount || 0) + (s.tipsAmount || 0) + (s.bonusAmount || 0),
      0
    );

    return { hours: Math.round(hours * 10) / 10, earnings };
  };

  return (
    <div className="space-y-4">
      {/* Week Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="secondary" size="sm" onClick={goToPreviousWeek}>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button variant="secondary" size="sm" onClick={goToToday}>
          Today
        </Button>
        <Button variant="secondary" size="sm" onClick={goToNextWeek}>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Calendar Grid Header */}
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="text-center text-caption-sm font-medium text-neutral-600"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid Days */}
      <div className="grid grid-cols-7 gap-2">
        {weekDates.map((date) => {
          const isToday = isSameDay(date, today);
          const daySessions = getSessionsForDay(date);
          const { hours, earnings } = getDayTotals(date);

          return (
            <div
              key={date.toISOString()}
              className={`p-3 rounded-lg transition-all ${
                isToday ? 'bg-primary-100 border-2 border-primary-500' : 'glass'
              }`}
            >
              <p
                className={`text-center text-caption-sm font-medium mb-2 ${
                  isToday ? 'text-primary-700' : 'text-neutral-600'
                }`}
              >
                {date.getDate()}
              </p>

              {daySessions.length > 0 ? (
                <div className="space-y-1 mb-2">
                  {daySessions.slice(0, 2).map((session, idx) => (
                    <div
                      key={session.id}
                      onClick={() => onSessionTap?.(session)}
                      className="bg-white/50 hover:bg-white/70 rounded px-1 py-1 cursor-pointer transition text-xs"
                    >
                      <p className="font-medium text-neutral-900 truncate">
                        {session.role === 'FRONT_DESK' ? 'FD' : 'SH'}
                      </p>
                      <p className="text-neutral-600 truncate">
                        {formatTime(new Date(session.clockInTime))} -{' '}
                        {session.clockOutTime
                          ? formatTime(new Date(session.clockOutTime))
                          : '...'}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {daySessions.length > 0 && (
                <div className="border-t border-white/20 pt-1 text-xs">
                  <p className="text-neutral-600">
                    {hours.toFixed(1)}h • ${earnings.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Week Summary */}
      <GlassCard className="flex justify-around text-center py-4">
        <div>
          <p className="text-caption-sm text-neutral-600">This Week</p>
          <p className="text-heading-md font-bold text-neutral-900">
            {weekDates
              .reduce((acc, date) => acc + getDayTotals(date).hours, 0)
              .toFixed(1)}
            h
          </p>
        </div>
        <div className="w-px bg-white/20" />
        <div>
          <p className="text-caption-sm text-neutral-600">Earnings</p>
          <p className="text-heading-md font-bold text-primary-600">
            $
            {weekDates
              .reduce((acc, date) => acc + getDayTotals(date).earnings, 0)
              .toFixed(2)}
          </p>
        </div>
      </GlassCard>
    </div>
  );
};
