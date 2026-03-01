'use client';

import React, { useState } from 'react';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { StatusCard } from '@/components/employee/StatusCard';
import { GlassCard, KPITile, EmptyState } from '@/components/ui/GlassUI';
import { formatCurrency } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import toast from 'react-hot-toast';

export default function EmployeeHome() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState<Date | undefined>();
  const [activeRole, setActiveRole] = useState<string | undefined>();
  const [activeShiftType, setActiveShiftType] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handleClockIn = async (role: string, shiftType: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      setIsClockedIn(true);
      setClockInTime(new Date());
      setActiveRole(role);
      setActiveShiftType(shiftType);
      toast.success(`Clocked in as ${role}`);
    } catch (error) {
      toast.error('Failed to clock in');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClockOut = async (tips?: number) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      setIsClockedIn(false);
      setClockInTime(undefined);
      setActiveRole(undefined);
      setActiveShiftType(undefined);
      toast.success('Clocked out successfully');
    } catch (error) {
      toast.error('Failed to clock out');
    } finally {
      setIsLoading(false);
    }
  };

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
            isClockedIn={isClockedIn}
            activeRole={activeRole}
            activeShiftType={activeShiftType}
            clockInTime={clockInTime}
            onClockIn={handleClockIn}
            onClockOut={handleClockOut}
            isLoading={isLoading}
          />
        </div>

        {/* Today's Sessions */}
        <div className="mb-6">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
            Today's Sessions
          </h2>
          <EmptyState
            icon="📭"
            title="No sessions yet"
            description="Clock in to start tracking your shift"
          />
        </div>

        {/* Today Summary */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <KPITile label="Hours Today" value="0h" />
          <KPITile label="Earnings Today" value={formatCurrency(0)} />
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
                0h
              </span>
            </div>
            <div className="border-t border-white/20" />
            <div className="flex justify-between items-center py-2">
              <span className="text-body-md text-neutral-600">
                Estimated Gross
              </span>
              <span className="text-heading-md font-semibold text-primary-600">
                {formatCurrency(0)}
              </span>
            </div>
          </GlassCard>
        </div>
      </div>

      <EmployeeNavBar />
    </main>
  );
}
