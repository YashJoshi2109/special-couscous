'use client';

import React from 'react';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { GlassCard } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

export default function SettingsPage() {
  const handleLogout = () => {
    toast.success('Logged out successfully');
    // TODO: Implement logout logic
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-display-md font-bold text-neutral-900">
            Settings
          </h1>
        </div>

        {/* Profile Section */}
        <div className="mb-6">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
            Profile
          </h2>
          <GlassCard className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-heading-md font-bold">
              JD
            </div>
            <div>
              <p className="text-body-md font-semibold text-neutral-900">
                John Doe
              </p>
              <p className="text-caption-sm text-neutral-600">
                john@hotelshift.app
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Preferences Section */}
        <div className="mb-6">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
            Preferences
          </h2>
          <div className="space-y-2">
            <GlassCard className="p-4 flex justify-between items-center">
              <span className="text-body-md text-neutral-700">
                Notifications
              </span>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded"
              />
            </GlassCard>
            <GlassCard className="p-4 flex justify-between items-center">
              <span className="text-body-md text-neutral-700">
                Dark Mode
              </span>
              <input type="checkbox" className="w-4 h-4 rounded" />
            </GlassCard>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mb-6">
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-3">
            Account
          </h2>
          <Button
            variant="danger"
            className="w-full"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>

        {/* Version */}
        <div className="text-center">
          <p className="text-caption-sm text-neutral-500">
            HotelShift Pro v1.0.0
          </p>
        </div>
      </div>

      <EmployeeNavBar />
    </main>
  );
}
