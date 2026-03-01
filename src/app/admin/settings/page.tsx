'use client';

import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { GlassCard } from '@/components/ui/GlassUI';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AdminSidebar />
      <main className="ml-64 p-8">
        <h1 className="text-display-md font-bold text-neutral-900">Settings</h1>
        <GlassCard className="mt-6 p-8 text-center">
          <p className="text-body-lg text-neutral-600">
            Settings interface coming soon
          </p>
        </GlassCard>
      </main>
    </div>
  );
}
