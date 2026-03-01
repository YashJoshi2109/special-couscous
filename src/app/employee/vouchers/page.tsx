'use client';

import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { GlassCard, StatusChip, EmptyState } from '@/components/ui/GlassUI';
import { Button, BottomSheet } from '@/components/ui/Button';
import { formatTime, formatCurrency, maskCardNumber } from '@/lib/utils';
import { Scan, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '@/lib/api';

interface VoucherItem {
  id: string;
  room: string;
  passengerCount: number;
  cardNumber: string;
  bonusAmount: number;
  status: 'ACCEPTED' | 'DECLINED' | 'PENDING_REVIEW';
  scannedAt: Date;
  declineReason?: string;
}

export default function VouchersPage() {
  const queryClient = useQueryClient();
  const [room, setRoom] = useState('');
  const [passengerCount, setPassengerCount] = useState('1');
  const [cardNumber, setCardNumber] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const [showDeclineForm, setShowDeclineForm] = useState(false);
  const [selectedVoucherId, setSelectedVoucherId] = useState<string | null>(null);
  const [declineReason, setDeclineReason] = useState('');

  const vouchersQuery = useQuery({
    queryKey: ['vouchers', 'employee'],
    queryFn: () => api.vouchers.list(),
  });

  const createVoucherMutation = useMutation({
    mutationFn: (payload: { room: string; passengerCount: number; cardNumber: string }) =>
      api.vouchers.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vouchers'] });
      queryClient.invalidateQueries({ queryKey: ['pay-estimate'] });
      queryClient.invalidateQueries({ queryKey: ['admin-dashboard'] });
      setShowScanner(false);
      setRoom('');
      setPassengerCount('1');
      setCardNumber('');
      toast.success('Voucher saved successfully');
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const updateVoucherMutation = useMutation({
    mutationFn: (payload: { voucherId: string; action: 'DECLINE' | 'ACCEPT'; declineReason?: string }) =>
      api.vouchers.updateStatus(payload.voucherId, {
        action: payload.action,
        declineReason: payload.declineReason,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vouchers'] });
      queryClient.invalidateQueries({ queryKey: ['pay-estimate'] });
      queryClient.invalidateQueries({ queryKey: ['admin-dashboard'] });
      toast.success('Voucher updated successfully');
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const vouchers: VoucherItem[] = (vouchersQuery.data?.vouchers ?? []).map((voucher) => ({
    id: voucher.id,
    room: voucher.room,
    passengerCount: voucher.passengerCount,
    cardNumber: voucher.cardNumber,
    bonusAmount: voucher.bonusAmount,
    status: voucher.status,
    scannedAt: new Date(voucher.scannedAt),
    declineReason: voucher.declineReason ?? undefined,
  }));

  const handleScanVoucher = () => {
    if (!room || !passengerCount || !cardNumber) {
      toast.error('Please complete all voucher fields');
      return;
    }

    createVoucherMutation.mutate({
      room,
      passengerCount: Number(passengerCount),
      cardNumber,
    });
  };

  const handleDeclineVoucher = (voucherId: string) => {
    setSelectedVoucherId(voucherId);
    setShowDeclineForm(true);
  };

  const confirmDecline = () => {
    if (!selectedVoucherId || !declineReason) return;
    updateVoucherMutation.mutate({
      voucherId: selectedVoucherId,
      action: 'DECLINE',
      declineReason,
    });
    setShowDeclineForm(false);
    setSelectedVoucherId(null);
    setDeclineReason('');
  };

  const totalBonus = vouchers
    .filter((voucher) => voucher.status === 'ACCEPTED')
    .reduce((sum, voucher) => sum + voucher.bonusAmount, 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-display-md font-bold text-neutral-900">Vouchers</h1>
          <p className="text-body-md text-neutral-600">Scan guest vouchers to earn bonuses</p>
        </div>

        <GlassCard variant="elevated" className="mb-6 text-center py-6">
          <p className="text-caption-md text-neutral-600 mb-2">Total Bonus</p>
          <p className="text-display-md font-bold text-success-600">{formatCurrency(totalBonus)}</p>
          <p className="text-caption-sm text-neutral-600 mt-2">
            From {vouchers.filter((voucher) => voucher.status === 'ACCEPTED').length} vouchers
          </p>
        </GlassCard>

        <Button variant="primary" className="w-full mb-6" onClick={() => setShowScanner(true)}>
          <Scan className="w-4 h-4" />
          Scan Voucher
        </Button>

        <div className="space-y-3">
          <h2 className="text-heading-md font-semibold text-neutral-900">Recent Vouchers</h2>
          {vouchersQuery.isLoading ? (
            <GlassCard className="p-4 text-center text-neutral-600">Loading vouchers...</GlassCard>
          ) : vouchers.length === 0 ? (
            <EmptyState icon="🎫" title="No vouchers yet" description="Start scanning guest vouchers to earn bonuses" />
          ) : (
            <div className="space-y-2">
              {vouchers.map((voucher) => (
                <GlassCard key={voucher.id} className="p-4 flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-body-md font-semibold text-neutral-900">Room {voucher.room}</h3>
                      <StatusChip
                        status={
                          voucher.status === 'ACCEPTED'
                            ? 'completed'
                            : voucher.status === 'DECLINED'
                              ? 'declined'
                              : 'pending'
                        }
                      />
                    </div>
                    <p className="text-caption-sm text-neutral-600 mb-1">
                      {voucher.passengerCount} passenger{voucher.passengerCount > 1 ? 's' : ''}
                    </p>
                    <p className="text-caption-sm text-neutral-500">Card: {maskCardNumber(voucher.cardNumber)}</p>
                    <p className="text-caption-sm text-neutral-500">{formatTime(voucher.scannedAt)}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-heading-md font-bold text-success-600 mb-2">{formatCurrency(voucher.bonusAmount)}</p>
                    {voucher.status === 'ACCEPTED' && (
                      <Button variant="tertiary" size="sm" onClick={() => handleDeclineVoucher(voucher.id)}>
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </div>

      <BottomSheet isOpen={showScanner} onClose={() => setShowScanner(false)} title="Scan Voucher">
        <div className="flex flex-col gap-4 py-2">
          <p className="text-center text-body-md text-neutral-600">Enter voucher details from scan result</p>
          <input
            type="text"
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg"
            placeholder="Room number"
            value={room}
            onChange={(event) => setRoom(event.target.value)}
          />
          <input
            type="number"
            min="1"
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg"
            placeholder="Passenger count"
            value={passengerCount}
            onChange={(event) => setPassengerCount(event.target.value)}
          />
          <input
            type="text"
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg"
            placeholder="Card number"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
          />
          <Button variant="primary" className="w-full" onClick={handleScanVoucher} isLoading={createVoucherMutation.isPending}>
            Save Voucher
          </Button>
          <Button variant="secondary" className="w-full" onClick={() => setShowScanner(false)}>
            Cancel
          </Button>
        </div>
      </BottomSheet>

      <BottomSheet isOpen={showDeclineForm} onClose={() => setShowDeclineForm(false)} title="Decline Voucher">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-body-md font-medium text-neutral-900 mb-2">Reason for Decline</label>
            <select
              value={declineReason}
              onChange={(event) => setDeclineReason(event.target.value)}
              className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select a reason...</option>
              <option value="invalid_card">Invalid Card</option>
              <option value="expired">Card Expired</option>
              <option value="duplicate">Duplicate Scan</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Button
            variant="danger"
            className="w-full"
            onClick={confirmDecline}
            disabled={!declineReason}
            isLoading={updateVoucherMutation.isPending}
          >
            Confirm Decline
          </Button>
        </div>
      </BottomSheet>

      <EmployeeNavBar />
    </main>
  );
}
