'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { GlassCard } from '@/components/ui/GlassUI';
import { formatDuration, formatTime } from '@/lib/utils';
import { api } from '@/lib/api';

export default function TimeLogs() {
  const logsQuery = useQuery({
    queryKey: ['admin-time-logs'],
    queryFn: () => api.admin.timeLogs(),
  });

  const logs = logsQuery.data?.timeLogs ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AdminSidebar />
      <main className="ml-64 p-8">
        <h1 className="text-display-md font-bold text-neutral-900">Time Logs</h1>
        <GlassCard className="mt-6 p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left">
                <th className="px-4 py-3">Employee</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Window</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b border-neutral-100">
                  <td className="px-4 py-3">{log.employeeName}</td>
                  <td className="px-4 py-3">{log.role} · {log.shiftType}</td>
                  <td className="px-4 py-3">
                    {formatTime(new Date(log.startTime))} - {log.endTime ? formatTime(new Date(log.endTime)) : 'Open'}
                  </td>
                  <td className="px-4 py-3">{log.duration ? formatDuration(log.duration) : '-'}</td>
                  <td className="px-4 py-3">{log.status}</td>
                </tr>
              ))}
              {!logsQuery.isLoading && logs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-neutral-500">No time logs available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </GlassCard>
      </main>
    </div>
  );
}
