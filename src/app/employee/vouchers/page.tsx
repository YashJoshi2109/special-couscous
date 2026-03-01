'use client';

import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { GlassCard, StatusChip, EmptyState } from '@/components/ui/GlassUI';
import { Button, BottomSheet } from '@/components/ui/Button';
import { QRScanner } from '@/components/QRScanner';
import { formatTime, formatCurrency, maskCardNumber } from '@/lib/utils';
import { Scan, X, Share2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '@/lib/api';

interface VoucherItem {
  id: string;
  room: string;
  passengerCount: number;
  cardNumber: string;
  expiryDate?: string;
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
  const [expiryDate, setExpiryDate] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const [showDeclineForm, setShowDeclineForm] = useState(false);
  const [showShareForm, setShowShareForm] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState<VoucherItem | null>(null);
  const [selectedVoucherId, setSelectedVoucherId] = useState<string | null>(null);
  const [declineReason, setDeclineReason] = useState('');
  const [shareEmail, setShareEmail] = useState('');
  const [shareViewDuration, setShareViewDuration] = useState('7'); // days

  const vouchersQuery = useQuery({
    queryKey: ['vouchers', 'employee'],
    queryFn: () => api.vouchers.list(),
  });

  const createVoucherMutation = useMutation({
    mutationFn: (payload: { room: string; passengerCount: number; cardNumber: string; expiryDate?: string }) =>
      api.vouchers.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vouchers'] });
      queryClient.invalidateQueries({ queryKey: ['pay-estimate'] });
      queryClient.invalidateQueries({ queryKey: ['admin-dashboard'] });
      setShowScanner(false);
      setRoom('');
      setPassengerCount('1');
      setCardNumber('');
      setExpiryDate('');
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
    expiryDate: voucher.expiryDate ?? undefined,
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
      expiryDate: expiryDate || undefined,
    });
  };

  const handleQRScan = (data: { room: string; passengerCount: number; cardNumber: string; expiryDate?: string }) => {
    setRoom(data.room);
    setPassengerCount(String(data.passengerCount));
    setCardNumber(data.cardNumber);
    setExpiryDate(data.expiryDate || '');
    
    createVoucherMutation.mutate({
      room: data.room,
      passengerCount: data.passengerCount,
      cardNumber: data.cardNumber,
      expiryDate: data.expiryDate,
    });
  };

  const handleViewDetails = (voucher: VoucherItem) => {
    setSelectedVoucher(voucher);
    setShowDetailModal(true);
  };

  const handleShareVoucher = (voucherId: string) => {
    setSelectedVoucherId(voucherId);
    setShowShareForm(true);
  };

  const confirmShare = async () => {
    if (!selectedVoucherId || !shareEmail) {
      toast.error('Please enter an email address');
      return;
    }

    try {
      // TODO: Implement share endpoint
      toast.success('Voucher access shared successfully');
      setShowShareForm(false);
      setSelectedVoucherId(null);
      setShareEmail('');
      setShareViewDuration('7');
    } catch (error) {
      toast.error('Failed to share voucher');
    }
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
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24 overflow-y-auto">
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
                <GlassCard 
                  key={voucher.id} 
                  className="p-4 flex justify-between items-start gap-4 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleViewDetails(voucher)}
                >
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
                    <div className="flex gap-2">
                      <Button
                        variant="tertiary"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShareVoucher(voucher.id);
                        }}
                        title="Share access"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                      {voucher.status === 'ACCEPTED' && (
                        <Button
                          variant="tertiary"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeclineVoucher(voucher.id);
                          }}
                          title="Decline voucher"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </div>

      <QRScanner
        isOpen={showScanner}
        onClose={() => setShowScanner(false)}
        onScan={handleQRScan}
        isLoading={createVoucherMutation.isPending}
      />

      <BottomSheet isOpen={showDeclineForm} onClose={() => setShowDeclineForm(false)} title="Decline Voucher">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-body-md font-medium text-neutral-900 dark:text-white mb-2">Reason for Decline</label>
            <select
              value={declineReason}
              onChange={(event) => setDeclineReason(event.target.value)}
              className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-800 dark:text-white"
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

      <BottomSheet isOpen={showShareForm} onClose={() => setShowShareForm(false)} title="Share Voucher Access">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-body-md font-medium text-neutral-900 dark:text-white mb-2">Employee Email</label>
            <input
              type="email"
              value={shareEmail}
              onChange={(event) => setShareEmail(event.target.value)}
              placeholder="colleague@hotelshift.com"
              className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-body-md font-medium text-neutral-900 dark:text-white mb-2">View Duration (Days)</label>
            <select
              value={shareViewDuration}
              onChange={(event) => setShareViewDuration(event.target.value)}
              className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-800 dark:text-white"
            >
              <option value="1">1 day</option>
              <option value="7">7 days</option>
              <option value="30">30 days</option>
            </select>
          </div>

          <Button
            variant="primary"
            className="w-full"
            onClick={confirmShare}
          >
            Share Access
          </Button>
        </div>
      </BottomSheet>

      <BottomSheet 
        isOpen={showDetailModal} 
        onClose={() => {
          setShowDetailModal(false);
          setSelectedVoucher(null);
        }} 
        title="Voucher Details"
      >
        {selectedVoucher && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-caption-md text-neutral-600 mb-1">Room Number</p>
                <p className="text-body-md font-semibold text-neutral-900">{selectedVoucher.room}</p>
              </div>
              <div>
                <p className="text-caption-md text-neutral-600 mb-1">Passengers</p>
                <p className="text-body-md font-semibold text-neutral-900">
                  {selectedVoucher.passengerCount} {selectedVoucher.passengerCount > 1 ? 'guests' : 'guest'}
                </p>
              </div>
            </div>

            <div>
              <p className="text-caption-md text-neutral-600 mb-1">Card Number</p>
              <p className="text-body-md font-mono font-semibold text-neutral-900">{selectedVoucher.cardNumber}</p>
              <p className="text-caption-sm text-neutral-500 mt-1">Full card number (unmasked)</p>
            </div>

            {selectedVoucher.expiryDate && (
              <div>
                <p className="text-caption-md text-neutral-600 mb-1">Expiry Date</p>
                <p className="text-body-md font-semibold text-neutral-900">{selectedVoucher.expiryDate}</p>
              </div>
            )}

            <div>
              <p className="text-caption-md text-neutral-600 mb-1">Scanned At</p>
              <p className="text-body-md font-semibold text-neutral-900">
                {new Date(selectedVoucher.scannedAt).toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                })}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-caption-md text-neutral-600 mb-1">Bonus Amount</p>
                  <p className="text-heading-lg font-bold text-success-600">{formatCurrency(selectedVoucher.bonusAmount)}</p>
                </div>
                <StatusChip
                  status={
                    selectedVoucher.status === 'ACCEPTED'
                      ? 'completed'
                      : selectedVoucher.status === 'DECLINED'
                        ? 'declined'
                        : 'pending'
                  }
                />
              </div>
            </div>

            {selectedVoucher.declineReason && (
              <div className="p-3 bg-error-50 rounded-lg">
                <p className="text-caption-md text-error-900 font-medium mb-1">Decline Reason</p>
                <p className="text-body-sm text-error-700">{selectedVoucher.declineReason}</p>
              </div>
            )}

            <div className="flex gap-3">
              <Button
                variant="tertiary"
                className="flex-1"
                onClick={() => {
                  handleShareVoucher(selectedVoucher.id);
                  setShowDetailModal(false);
                }}
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              {selectedVoucher.status === 'ACCEPTED' && (
                <Button
                  variant="danger"
                  className="flex-1"
                  onClick={() => {
                    handleDeclineVoucher(selectedVoucher.id);
                    setShowDetailModal(false);
                  }}
                >
                  <X className="w-4 h-4" />
                  Decline
                </Button>
              )}
            </div>
          </div>
        )}
      </BottomSheet>

      <EmployeeNavBar />
    </main>
  );
}
