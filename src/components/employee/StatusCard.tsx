'use client';

import React, { useEffect, useState } from 'react';
import { GlassCard, KPITile, StatusChip } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { BottomSheet } from '@/components/ui/Button';
import { formatTime, formatCurrency } from '@/lib/utils';
import { Clock, Plus, Zap } from 'lucide-react';

interface StatusCardProps {
  isClockedIn: boolean;
  activeRole?: string;
  activeShiftType?: string;
  clockInTime?: Date;
  onClockIn: (role: string, shiftType: string) => void;
  onClockOut: (tips?: number) => void;
  isLoading?: boolean;
}

export const StatusCard: React.FC<StatusCardProps> = ({
  isClockedIn,
  activeRole,
  activeShiftType,
  clockInTime,
  onClockIn,
  onClockOut,
  isLoading,
}) => {
  const [showClockIn, setShowClockIn] = useState(false);
  const [showClockOut, setShowClockOut] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedShift, setSelectedShift] = useState<string>('');
  const [tips, setTips] = useState<string>('');
  const [displayTips, setDisplayTips] = useState<string>('$0.00');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!isClockedIn || !clockInTime) return;
    const timer = window.setInterval(() => {
      setTick((value) => value + 1);
    }, 30000);
    return () => window.clearInterval(timer);
  }, [isClockedIn, clockInTime]);

  const handleClockInConfirm = () => {
    if (selectedRole && selectedShift) {
      onClockIn(selectedRole, selectedShift);
      setShowClockIn(false);
      setSelectedRole('');
      setSelectedShift('');
    }
  };

  const handleClockOutConfirm = () => {
    onClockOut(parseFloat(tips) || 0);
    setShowClockOut(false);
    setTips('');
    setDisplayTips('$0.00');
  };

  const handleTipsChange = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9.]/g, '');
    setTips(numericValue);
    
    // Format for display
    const amount = parseFloat(numericValue) || 0;
    setDisplayTips(`$${amount.toFixed(2)}`);
  };

  // Calculate duration if clocked in
  let duration = '';
  if (isClockedIn && clockInTime) {
    const minutes = Math.floor(
      (Date.now() + tick * 0 - clockInTime.getTime()) / (1000 * 60)
    );
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    duration = `${hours}h ${mins}m`;
  }

  return (
    <>
      <GlassCard variant="elevated" className="flex flex-col gap-4">
        {/* Status Indicator */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                isClockedIn ? 'bg-danger-500 animate-pulse' : 'bg-neutral-400'
              }`}
            />
            <span className="text-body-md font-medium text-neutral-700">
              {isClockedIn ? 'Clocked In' : 'Clocked Out'}
            </span>
          </div>
          {isClockedIn && <StatusChip status="live" />}
        </div>

        {/* Live Timer */}
        {isClockedIn && clockInTime && (
          <div className="flex flex-col gap-1">
            <p className="text-caption-md text-neutral-600">Session Duration</p>
            <p className="text-display-md font-bold text-primary-600">
              {duration}
            </p>
            <p className="text-caption-sm text-neutral-500">
              Since {formatTime(clockInTime)}
            </p>
          </div>
        )}

        {/* Role & Shift Info */}
        {isClockedIn && (
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/50 rounded-lg p-2">
              <p className="text-caption-sm text-neutral-600">Role</p>
              <p className="text-body-md font-semibold text-neutral-900">
                {activeRole === 'FRONT_DESK' ? 'Front Desk' : 'Shuttle'}
              </p>
            </div>
            <div className="bg-white/50 rounded-lg p-2">
              <p className="text-caption-sm text-neutral-600">Shift</p>
              <p className="text-body-md font-semibold text-neutral-900">
                {activeShiftType}
              </p>
            </div>
          </div>
        )}

        {/* Primary CTA */}
        <Button
          variant={isClockedIn ? 'danger' : 'primary'}
          className="w-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          onClick={() =>
            isClockedIn ? setShowClockOut(true) : setShowClockIn(true)
          }
          isLoading={isLoading}
        >
          <Clock className={`w-5 h-5 ${isClockedIn ? 'animate-pulse' : ''}`} />
          {isClockedIn ? 'Clock Out' : 'Clock In'}
        </Button>

        {/* Quick Actions - Show add tip OR pay estimate depending on clock state */}
        {isClockedIn && (
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full hover:bg-primary-50 hover:text-primary-700 transition-colors"
              onClick={() => setShowClockOut(true)}
            >
              <Plus className="w-4 h-4" />
              Add Tip
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full hover:bg-success-50 hover:text-success-700 transition-colors"
            >
              <Zap className="w-4 h-4" />
              Current
            </Button>
          </div>
        )}
      </GlassCard>

      {/* Clock In Sheet */}
      <BottomSheet
        isOpen={showClockIn}
        onClose={() => setShowClockIn(false)}
        title="Clock In"
      >
        <div className="flex flex-col gap-6">
          {/* Role Selection */}
          <div>
            <label className="block text-body-md font-medium text-neutral-900 mb-3">
              Select Role
            </label>
            <div className="flex gap-3">
              {['FRONT_DESK', 'SHUTTLE'].map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    selectedRole === role
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {role === 'FRONT_DESK' ? 'Front Desk' : 'Shuttle'}
                </button>
              ))}
            </div>
          </div>

          {/* Shift Type Selection */}
          <div>
            <label className="block text-body-md font-medium text-neutral-900 mb-3">
              Shift Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['MORNING', 'EVENING', 'NIGHT', 'SHUTTLE'].map((shift) => (
                <button
                  key={shift}
                  onClick={() => setSelectedShift(shift)}
                  className={`py-3 px-4 rounded-lg font-medium transition-all text-center text-sm ${
                    selectedShift === shift
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {shift}
                </button>
              ))}
            </div>
          </div>

          {/* Confirm Button */}
          <Button
            variant="primary"
            className="w-full"
            onClick={handleClockInConfirm}
            disabled={!selectedRole || !selectedShift}
          >
            Confirm Clock In
          </Button>
        </div>
      </BottomSheet>

      {/* Clock Out Sheet */}
      <BottomSheet
        isOpen={showClockOut}
        onClose={() => setShowClockOut(false)}
        title="Clock Out"
      >
        <div className="flex flex-col gap-6">
          {/* Tips Input */}
          <div>
            <label className="block text-body-md font-medium text-neutral-900 mb-2">
              Tips (Optional)
            </label>
            <div className="relative">
              <input
                type="text"
                inputMode="decimal"
                placeholder="$0.00"
                value={displayTips}
                onFocus={() => {
                  if (parseFloat(tips) === 0) {
                    setDisplayTips('');
                  }
                }}
                onBlur={() => {
                  const amount = parseFloat(tips) || 0;
                  setDisplayTips(`$${amount.toFixed(2)}`);
                }}
                onChange={(e) => handleTipsChange(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-100 rounded-lg text-body-lg font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-center"
              />
              <p className="text-caption-sm text-neutral-500 mt-1 text-center">
                Enter amount in dollars (e.g., 25.50)
              </p>
            </div>
          </div>

          {/* Confirm Button */}
          <Button
            variant="primary"
            className="w-full"
            onClick={handleClockOutConfirm}
          >
            Confirm Clock Out
          </Button>
        </div>
      </BottomSheet>
    </>
  );
};
