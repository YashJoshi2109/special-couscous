'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { GlassCard, KPITile, StatusChip } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { BottomSheet } from '@/components/ui/Button';
import { formatTime, formatCurrency } from '@/lib/utils';
import { Clock, Plus, Zap, Volume2, Vibrate } from 'lucide-react';

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
  const [currentTime, setCurrentTime] = useState(new Date());
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hapticEnabled, setHapticEnabled] = useState(true);
  const [milestoneHit, setMilestoneHit] = useState<number | null>(null);

  // Live clock update
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  // Session duration updates
  useEffect(() => {
    if (!isClockedIn || !clockInTime) return;
    const timer = window.setInterval(() => {
      setTick((value) => value + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isClockedIn, clockInTime]);

  // Trigger haptic feedback
  const triggerHaptic = useCallback((pattern: 'short' | 'medium' | 'long' = 'short') => {
    if (!hapticEnabled || !window.navigator.vibrate) return;
    const patterns: Record<string, number | number[]> = {
      short: 10,
      medium: 50,
      long: 200,
    };
    window.navigator.vibrate(patterns[pattern]);
  }, [hapticEnabled]);

  // Trigger sound feedback
  const triggerSound = useCallback((type: 'success' | 'warning' | 'error' = 'success') => {
    if (!soundEnabled) return;
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      const frequencies: Record<string, number> = {
        success: 800,
        warning: 600,
        error: 400,
      };
      
      oscillator.frequency.value = frequencies[type];
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Audio context not available
    }
  }, [soundEnabled]);

  const handleClockInConfirm = () => {
    if (selectedRole && selectedShift) {
      triggerHaptic('medium');
      triggerSound('success');
      onClockIn(selectedRole, selectedShift);
      setShowClockIn(false);
      setSelectedRole('');
      setSelectedShift('');
    }
  };

  const handleClockOutConfirm = () => {
    triggerHaptic('long');
    triggerSound('success');
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

  // Calculate duration and check milestones
  let duration = '';
  let progressPercent = 0;
  let projectedEarnings = 0;
  
  if (isClockedIn && clockInTime) {
    const elapsedMs = Date.now() - clockInTime.getTime();
    const minutes = Math.floor(elapsedMs / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const secs = Math.floor((elapsedMs / 1000) % 60);
    
    duration = `${hours}h ${mins}m ${secs}s`;
    
    // Progress for 8-hour shift (normalize to percentage)
    progressPercent = Math.min((minutes / 480) * 100, 100);
    
    // Projected earnings (assuming $15/hr)
    const elapsedHours = elapsedMs / (1000 * 60 * 60);
    projectedEarnings = elapsedHours * 15;
    
    // Check for milestones (1h, 4h, 8h)
    const newMilestone = hours === 1 || hours === 4 || hours === 8 ? hours : null;
    if (newMilestone && newMilestone !== milestoneHit && minutes % 60 === 0) {
      setMilestoneHit(newMilestone);
      triggerHaptic('medium');
      triggerSound('success');
    }
  }

  const formatClockTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      <GlassCard variant="elevated" className="flex flex-col gap-4">
        {/* Current Time Display */}
        <div className="text-center py-2 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-lg">
          <p className="text-caption-md text-primary-600 font-medium">Current Time</p>
          <p className="text-display-sm font-bold text-primary-900 font-mono">
            {formatClockTime(currentTime)}
          </p>
        </div>

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

        {/* Live Timer with Circular Progress */}
        {isClockedIn && clockInTime && (
          <div className="flex flex-col gap-3">
            {/* Circular Progress Ring */}
            <div className="flex justify-center">
              <div className="relative w-32 h-32">
                {/* Background circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="8"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    strokeDasharray={`${(progressPercent / 100) * 2 * Math.PI * 50} ${2 * Math.PI * 50}`}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-caption-sm text-neutral-600">Duration</p>
                  <p className="text-heading-lg font-bold text-neutral-900 font-mono">
                    {duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Projected Earnings */}
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-success-50 rounded-lg p-2">
                <p className="text-caption-sm text-neutral-600">Projected</p>
                <p className="text-heading-md font-bold text-success-600">
                  {formatCurrency(projectedEarnings)}
                </p>
              </div>
              <div className="bg-primary-50 rounded-lg p-2">
                <p className="text-caption-sm text-neutral-600">Started</p>
                <p className="text-body-sm font-semibold text-primary-600">
                  {formatTime(clockInTime)}
                </p>
              </div>
            </div>
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
          onClick={() => {
            triggerHaptic('short');
            isClockedIn ? setShowClockOut(true) : setShowClockIn(true);
          }}
          isLoading={isLoading}
        >
          <Clock className={`w-5 h-5 ${isClockedIn ? 'animate-pulse' : ''}`} />
          {isClockedIn ? 'Clock Out' : 'Clock In'}
        </Button>

        {/* Sound & Haptic Toggles */}
        {isClockedIn && (
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant={soundEnabled ? 'secondary' : 'tertiary'}
              size="sm" 
              className="w-full"
              onClick={() => setSoundEnabled(!soundEnabled)}
            >
              <Volume2 className="w-4 h-4" />
              Sound {soundEnabled ? 'On' : 'Off'}
            </Button>
            <Button 
              variant={hapticEnabled ? 'secondary' : 'tertiary'}
              size="sm" 
              className="w-full"
              onClick={() => setHapticEnabled(!hapticEnabled)}
            >
              <Vibrate className="w-4 h-4" />
              Haptic {hapticEnabled ? 'On' : 'Off'}
            </Button>
          </div>
        )}

        {/* Quick Actions - Show add tip when clocked in */}
        {isClockedIn && (
          <Button 
            variant="secondary" 
            size="sm" 
            className="w-full hover:bg-primary-50 hover:text-primary-700 transition-colors active:scale-95"
            onClick={() => {
              triggerHaptic('short');
              setShowClockOut(true);
            }}
          >
            <Plus className="w-4 h-4" />
            Add Tip
          </Button>
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
          {/* Session Summary */}
          {clockInTime && (
            <div className="bg-neutral-50 rounded-lg p-4 space-y-2">
              <p className="text-caption-md font-medium text-neutral-700">Session Summary</p>
              <div className="flex justify-between text-body-sm">
                <span className="text-neutral-600">Time Worked:</span>
                <span className="font-semibold text-neutral-900">{duration}</span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-neutral-600">Projected Earnings:</span>
                <span className="font-semibold text-success-600">{formatCurrency(projectedEarnings)}</span>
              </div>
            </div>
          )}

          {/* Tips Input with Quick Buttons */}
          <div>
            <label className="block text-body-md font-medium text-neutral-900 mb-3">
              Tips (Optional)
            </label>
            <div className="relative mb-3">
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
                className="w-full px-4 py-3 bg-neutral-100 rounded-lg text-heading-md font-bold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 text-center transition-all"
              />
              <p className="text-caption-sm text-neutral-500 mt-1 text-center">
                Enter amount in dollars (e.g., 25.50)
              </p>
            </div>

            {/* Quick Tip Suggestions */}
            <p className="text-caption-sm font-medium text-neutral-600 mb-2">Quick Tips:</p>
            <div className="grid grid-cols-3 gap-2">
              {[20, 50, 100].map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setTips(amount.toString());
                    setDisplayTips(`$${amount.toFixed(2)}`);
                    triggerHaptic('short');
                  }}
                  className="py-2 px-3 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg font-semibold text-sm transition-colors active:scale-95"
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>

          {/* Confirm Button with Animation */}
          <Button
            variant="primary"
            className="w-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            onClick={handleClockOutConfirm}
          >
            <Clock className="w-5 h-5" />
            Confirm Clock Out
          </Button>
        </div>
      </BottomSheet>
    </>
  );
};
