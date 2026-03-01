'use client';

import React, { useState } from 'react';
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { GlassCard, StatusChip, EmptyState } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { BottomSheet } from '@/components/ui/Button';
import { formatTime, formatDate, formatCurrency, maskCardNumber } from '@/lib/utils';
import { Scan, Check, X } from 'lucide-react';
import toast from 'react-hot-toast';

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

const mockVouchers: VoucherItem[] = [
  {
    id: '1',
    room: '201',
    passengerCount: 2,
    cardNumber: '4532xxxxxxxx5678',
    bonusAmount: 15,
    status: 'ACCEPTED',
    scannedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: '2',
    room: '305',
    passengerCount: 3,
    cardNumber: '5432xxxxxxxx4321',
    bonusAmount: 22.5,
    status: 'ACCEPTED',
    scannedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
];

export default function VouchersPage() {
  const [vouchers, setVouchers] = useState<VoucherItem[]>(mockVouchers);
  const [showScanner, setShowScanner] = useState(false);
  const [showDeclineForm, setShowDeclineForm] = useState(false);
  const [selectedVoucherId, setSelectedVoucherId] = useState<string | null>(null);
  const [declineReason, setDeclineReason] = useState('');

  const handleScanVoucher = () => {
    // Simulate scan with mock data
    toast.loading('Scanning voucher...');
    setTimeout(() => {
      toast.dismiss();
      const newVoucher: VoucherItem = {
        id: String(vouchers.length + 1),
        room: '402',
        passengerCount: 4,
        cardNumber: '4916xxxxxxxx7890',
        bonusAmount: 30,
        status: 'ACCEPTED',
        scannedAt: new Date(),
      };
      setVouchers([newVoucher, ...vouchers]);
      setShowScanner(false);
      toast.success('Voucher scanned successfully!');
    }, 1500);
  };

  const handleDeclineVoucher = (voucherId: string) => {
    setSelectedVoucherId(voucherId);
    setShowDeclineForm(true);
  };

  const confirmDecline = () => {
    if (!selectedVoucherId) return;
    setVouchers(
      vouchers.map((v) =>
        v.id === selectedVoucherId
          ? { ...v, status: 'DECLINED', declineReason }
          : v
      )
    );
    setShowDeclineForm(false);
    setSelectedVoucherId(null);
    setDeclineReason('');
    toast.success('Voucher marked as declined');
  };

  const totalBonus = vouchers
    .filter((v) => v.status === 'ACCEPTED')
    .reduce((sum, v) => sum + v.bonusAmount, 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 pb-24">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-display-md font-bold text-neutral-900">
            Vouchers
          </h1>
          <p className="text-body-md text-neutral-600">
            Scan guest vouchers to earn bonuses
          </p>
        </div>

        {/* Total Bonus */}
        <GlassCard variant="elevated" className="mb-6 text-center py-6">
          <p className="text-caption-md text-neutral-600 mb-2">Total Bonus</p>
          <p className="text-display-md font-bold text-success-600">
            {formatCurrency(totalBonus)}
          </p>
          <p className="text-caption-sm text-neutral-600 mt-2">
            From {vouchers.filter((v) => v.status === 'ACCEPTED').length} vouchers
          </p>
        </GlassCard>

        {/* Scan Button */}
        <Button
          variant="primary"
          className="w-full mb-6"
          onClick={() => setShowScanner(true)}
        >
          <Scan className="w-4 h-4" />
          Scan Voucher
        </Button>

        {/* Vouchers List */}
        <div className="space-y-3">
          <h2 className="text-heading-md font-semibold text-neutral-900">
            Recent Vouchers
          </h2>
          {vouchers.length === 0 ? (
            <EmptyState
              icon="🎫"
              title="No vouchers yet"
              description="Start scanning guest vouchers to earn bonuses"
            />
          ) : (
            <div className="space-y-2">
              {vouchers.map((voucher) => (
                <GlassCard
                  key={voucher.id}
                  className="p-4 flex justify-between items-start gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-body-md font-semibold text-neutral-900">
                        Room {voucher.room}
                      </h3>
                      <StatusChip status={
                        voucher.status === 'ACCEPTED' ? 'completed' :
                        voucher.status === 'DECLINED' ? 'declined' : 'pending'
                      } />
                    </div>
                    <p className="text-caption-sm text-neutral-600 mb-1">
                      {voucher.passengerCount} passenger{voucher.passengerCount > 1 ? 's' : ''}
                    </p>
                    <p className="text-caption-sm text-neutral-500">
                      Card: {maskCardNumber(voucher.cardNumber)}
                    </p>
                    <p className="text-caption-sm text-neutral-500">
                      {formatTime(voucher.scannedAt)}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-heading-md font-bold text-success-600 mb-2">
                      {formatCurrency(voucher.bonusAmount)}
                    </p>
                    {voucher.status === 'ACCEPTED' && (
                      <Button
                        variant="tertiary"
                        size="sm"
                        onClick={() => handleDeclineVoucher(voucher.id)}
                      >
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

      {/* Scanner Sheet */}
      <BottomSheet
        isOpen={showScanner}
        onClose={() => setShowScanner(false)}
        title="Scan Voucher"
      >
        <div className="flex flex-col gap-6 items-center justify-center py-12">
          <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-100 rounded-2xl flex items-center justify-center">
            <Scan className="w-16 h-16 text-primary-600" />
          </div>
          <p className="text-center text-body-md text-neutral-600">
            Point camera at the voucher barcode
          </p>
          <Button
            variant="primary"
            className="w-full"
            onClick={handleScanVoucher}
          >
            Simulate Scan
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => setShowScanner(false)}
          >
            Cancel
          </Button>
        </div>
      </BottomSheet>

      {/* Decline Form Sheet */}
      <BottomSheet
        isOpen={showDeclineForm}
        onClose={() => setShowDeclineForm(false)}
        title="Decline Voucher"
      >
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-body-md font-medium text-neutral-900 mb-2">
              Reason for Decline
            </label>
            <select
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
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
          >
            Confirm Decline
          </Button>
        </div>
      </BottomSheet>

      <EmployeeNavBar />
    </main>
  );
}
