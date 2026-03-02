'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { GlassCard, StatusChip } from '@/components/ui/GlassUI';
import { formatTime } from '@/lib/utils';
import { api } from '@/lib/api';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SafeAreaInset } from '@/components/MobileLayout';

interface ScheduleShift {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  role: string;
  location?: string;
  notes?: string;
}

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');

  const schedulesQuery = useQuery({
    queryKey: ['schedules', 'employee'],
    queryFn: async () => {
      return {
        schedules: [
          {
            id: '1',
            date: new Date().toISOString().split('T')[0],
            startTime: '08:00',
            endTime: '12:00',
            role: 'FRONT_DESK',
            location: 'Front Desk',
            notes: 'Check-in support',
          },
          {
            id: '2',
            date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
            startTime: '14:00',
            endTime: '20:00',
            role: 'SHUTTLE',
            location: 'Shuttle Service',
            notes: 'Evening runs',
          },
        ] as ScheduleShift[],
      };
    },
  });

  const shifts = schedulesQuery.data?.schedules || [];

  const roleColor = (role: string) => {
    const colors: Record<string, string> = {
      FRONT_DESK: 'bg-blue-100 text-blue-700',
      SHUTTLE: 'bg-purple-100 text-purple-700',
      RESTAURANT: 'bg-orange-100 text-orange-700',
      HOUSEKEEPING: 'bg-green-100 text-green-700',
    };
    return colors[role] || 'bg-gray-100 text-gray-700';
  };

  const getDaysInWeek = (date: Date) => {
    const current = new Date(date);
    const first = current.getDate() - current.getDay();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(current.setDate(first + i));
      return new Date(d);
    });
  };

  const weekDays = getDaysInWeek(selectedDate);

  const getShiftsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return shifts.filter((shift) => shift.date === dateStr);
  };

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

  const totalUpcomingShifts = shifts.length;
  const totalUpcomingHours = shifts.reduce((sum, shift) => {
    const [startHour, startMin] = shift.startTime.split(':').map(Number);
    const [endHour, endMin] = shift.endTime.split(':').map(Number);
    const hours = endHour - startHour + (endMin - startMin) / 60;
    return sum + hours;
  }, 0);

  return (
    <>
      <EmployeeNavBar />
      <SafeAreaInset edge="top"></SafeAreaInset>
      <main className="bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24" style={{ minHeight: '100vh', overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}>
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-display-md font-bold text-neutral-900">Schedule</h1>
          <p className="text-body-md text-neutral-600">View your upcoming shifts</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <GlassCard variant="elevated" className="p-4 text-center">
            <p className="text-caption-md text-neutral-600 mb-1">Upcoming Shifts</p>
            <p className="text-heading-lg font-bold text-primary-600">{totalUpcomingShifts}</p>
          </GlassCard>
          <GlassCard variant="elevated" className="p-4 text-center">
            <p className="text-caption-md text-neutral-600 mb-1">Total Hours</p>
            <p className="text-heading-lg font-bold text-success-600">{totalUpcomingHours.toFixed(1)}h</p>
          </GlassCard>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="secondary" size="sm" onClick={prevWeek}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-body-md font-semibold text-neutral-900">
            Week of {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
          <Button variant="secondary" size="sm" onClick={nextWeek}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Week Grid */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {weekDays.map((day, idx) => {
            const dayShifts = getShiftsForDate(day);
            const isToday = day.toDateString() === new Date().toDateString();
            return (
              <GlassCard
                key={idx}
                className={`p-3 text-center cursor-pointer transition-all ${
                  isToday ? 'ring-2 ring-primary-500 bg-primary-50' : ''
                }`}
              >
                <p className="text-caption-sm text-neutral-600 font-medium">
                  {day.toLocaleDateString('en-US', { weekday: 'short' })}
                </p>
                <p className="text-body-md font-bold text-neutral-900">{day.getDate()}</p>
                {dayShifts.length > 0 && (
                  <div className="mt-2 flex gap-1 justify-center">
                    {dayShifts.map((shift) => (
                      <div key={shift.id} className={`w-2 h-2 rounded-full ${roleColor(shift.role).split(' ')[0]}`} />
                    ))}
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>

        {/* Shifts List */}
        <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">Upcoming Shifts</h2>
        {schedulesQuery.isLoading ? (
          <GlassCard className="p-6 text-center text-neutral-600">Loading schedule...</GlassCard>
        ) : shifts.length === 0 ? (
          <GlassCard className="p-6 text-center">
            <AlertCircle className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
            <p className="text-body-md text-neutral-600">No shifts scheduled</p>
          </GlassCard>
        ) : (
          <div className="space-y-3">
            {shifts.map((shift) => (
              <GlassCard key={shift.id} className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-body-md font-semibold text-neutral-900">
                        {shift.location || shift.role}
                      </h3>
                      <StatusChip status="pending" />
                    </div>

                    <div className="flex items-center gap-2 text-caption-sm text-neutral-600 mb-2">
                      <span>{new Date(shift.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                      <span>•</span>
                      <span>
                        {shift.startTime} - {shift.endTime}
                      </span>
                    </div>

                    {shift.notes && (
                      <p className="text-caption-sm text-neutral-600">{shift.notes}</p>
                    )}
                  </div>

                  <div className={`px-3 py-1 rounded-full text-caption-sm font-medium ${roleColor(shift.role)}`}>
                    {shift.role.replace('_', ' ')}
                  </div>
                </div>
                <Button variant="tertiary" size="sm" className="mt-3 w-full">
                  Set Reminder
                </Button>
              </GlassCard>
            ))}
          </div>
        )}
      </div>

      <EmployeeNavBar />
    </main>
    </>
  );
}
