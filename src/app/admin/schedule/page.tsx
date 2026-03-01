'use client';

import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { OCRSchedule } from '@/components/OCRSchedule';
import { GlassCard } from '@/components/ui/GlassUI';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface ScheduleEntry {
  employeeName: string;
  date: string;
  shift: string;
  role?: string;
}

export default function AdminSchedulePage() {
  const [publishedSchedules, setPublishedSchedules] = useState<ScheduleEntry[]>([]);

  const handleScheduleExtracted = (entries: ScheduleEntry[]) => {
    setPublishedSchedules(entries);
    toast.success('Schedule ready to publish');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AdminSidebar />

      <main className="flex-1 ml-64 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-display-md font-bold text-neutral-900 mb-2">
              Schedule Management
            </h1>
            <p className="text-body-md text-neutral-600">
              Upload staff schedule images and extract shift information automatically
            </p>
          </div>

          {/* OCR Upload Section */}
          <GlassCard variant="elevated" className="p-8 mb-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Extract Schedule from Image
            </h2>
            <OCRSchedule onScheduleExtracted={handleScheduleExtracted} />
          </GlassCard>

          {/* Published Schedules */}
          {publishedSchedules.length > 0 && (
            <GlassCard variant="elevated" className="p-8">
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
                Published Schedules
              </h2>

              <div className="space-y-4">
                {publishedSchedules.map((entry, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-4 gap-4 p-4 bg-neutral-50 rounded-lg"
                  >
                    <div>
                      <p className="text-caption-sm text-neutral-600 mb-1">
                        Employee
                      </p>
                      <p className="text-body-md font-semibold text-neutral-900">
                        {entry.employeeName}
                      </p>
                    </div>

                    <div>
                      <p className="text-caption-sm text-neutral-600 mb-1">
                        Date
                      </p>
                      <p className="text-body-md font-semibold text-neutral-900">
                        {entry.date}
                      </p>
                    </div>

                    <div>
                      <p className="text-caption-sm text-neutral-600 mb-1">
                        Shift
                      </p>
                      <p className="text-body-md font-semibold text-neutral-900">
                        {entry.shift}
                      </p>
                    </div>

                    <div>
                      <p className="text-caption-sm text-neutral-600 mb-1">
                        Role
                      </p>
                      <p className="text-body-md font-semibold text-primary-600">
                        {entry.role || 'N/A'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          )}
        </div>
      </main>
    </div>
  );
}
