'use client';

import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { GlassCard } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import toast from 'react-hot-toast';
import { api } from '@/lib/api';

export default function SettingsPage() {
  const queryClient = useQueryClient();
  const settingsQuery = useQuery({
    queryKey: ['admin-settings'],
    queryFn: () => api.admin.settings.get(),
  });

  const [form, setForm] = React.useState({
    enableVoucherScanning: true,
    enableOfflineMode: true,
    enableMultiSession: true,
    baseSoldOutBonus: 5,
    roomUpsellRate: 1.5,
    voucherBonusRate: 0.25,
  });

  React.useEffect(() => {
    if (!settingsQuery.data?.config) return;
    setForm(settingsQuery.data.config);
  }, [settingsQuery.data?.config]);

  const saveMutation = useMutation({
    mutationFn: () => api.admin.settings.update(form),
    onSuccess: () => {
      toast.success('Settings updated');
      queryClient.invalidateQueries({ queryKey: ['admin-settings'] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const toggle = (key: 'enableVoucherScanning' | 'enableOfflineMode' | 'enableMultiSession') => {
    setForm((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AdminSidebar />
      <main className="ml-64 p-8">
        <h1 className="text-display-md font-bold text-neutral-900">Settings</h1>
        <GlassCard className="mt-6 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span>Enable voucher scanning</span>
            <input type="checkbox" checked={form.enableVoucherScanning} onChange={() => toggle('enableVoucherScanning')} />
          </div>
          <div className="flex items-center justify-between">
            <span>Enable offline mode</span>
            <input type="checkbox" checked={form.enableOfflineMode} onChange={() => toggle('enableOfflineMode')} />
          </div>
          <div className="flex items-center justify-between">
            <span>Enable multi-session</span>
            <input type="checkbox" checked={form.enableMultiSession} onChange={() => toggle('enableMultiSession')} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <input
              className="px-3 py-2 border border-neutral-200 rounded-lg"
              type="number"
              step="0.01"
              value={form.baseSoldOutBonus}
              onChange={(event) => setForm((prev) => ({ ...prev, baseSoldOutBonus: Number(event.target.value) }))}
            />
            <input
              className="px-3 py-2 border border-neutral-200 rounded-lg"
              type="number"
              step="0.01"
              value={form.roomUpsellRate}
              onChange={(event) => setForm((prev) => ({ ...prev, roomUpsellRate: Number(event.target.value) }))}
            />
            <input
              className="px-3 py-2 border border-neutral-200 rounded-lg"
              type="number"
              step="0.01"
              value={form.voucherBonusRate}
              onChange={(event) => setForm((prev) => ({ ...prev, voucherBonusRate: Number(event.target.value) }))}
            />
          </div>

          <Button variant="primary" onClick={() => saveMutation.mutate()} isLoading={saveMutation.isPending || settingsQuery.isLoading}>
            Save Settings
          </Button>
        </GlassCard>
      </main>
    </div>
  );
}
