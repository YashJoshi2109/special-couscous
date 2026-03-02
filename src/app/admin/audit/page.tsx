'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { GlassCard } from '@/components/ui/GlassUI';
import { formatDateFull } from '@/lib/utils';
import { api } from '@/lib/api';

export default function AuditLogPage() {
  const auditQuery = useQuery({
    queryKey: ['admin-audit'],
    queryFn: () => api.admin.audit(),
  });

  const logs = auditQuery.data?.auditLogs ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AdminSidebar />
      <main className="ml-64 p-8 overflow-y-auto max-h-screen pb-20">
        <h1 className="text-display-md font-bold text-neutral-900">Audit Log</h1>
        <GlassCard className="mt-6 p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-left">
                <th className="px-4 py-3">Action</th>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Reason</th>
                <th className="px-4 py-3">At</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b border-neutral-100">
                  <td className="px-4 py-3">{log.action}</td>
                  <td className="px-4 py-3">{log.entityType} · {log.entityId}</td>
                  <td className="px-4 py-3">{log.userId}</td>
                  <td className="px-4 py-3">{log.reason ?? '-'}</td>
                  <td className="px-4 py-3">{formatDateFull(new Date(log.createdAt))}</td>
                </tr>
              ))}
              {!auditQuery.isLoading && logs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-neutral-500">No audit events yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </GlassCard>
      </main>
    </div>
  );
}
