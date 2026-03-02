'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner, Html5QrcodeScannerState } from 'html5-qrcode';
import { Button } from '@/components/ui/Button';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';

interface QRScannerProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (data: { room: string; passengerCount: number; cardNumber: string; expiryDate?: string }) => void;
  isLoading?: boolean;
}

export const QRScanner: React.FC<QRScannerProps> = ({
  isOpen,
  onClose,
  onScan,
  isLoading = false,
}) => {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const scanner = new Html5QrcodeScanner(
      containerRef.current.id,
      {
        fps: 10,
        qrbox: { width: 280, height: 280 },
        aspectRatio: 1.0,
        disableFlip: false,
      },
      false
    );

    scannerRef.current = scanner;

    scanner.render(
      (decodedText) => {
        try {
          console.log('QR Code Scanned:', decodedText);
          
          // Try multiple format patterns
          let room = '';
          let passengers: number = 1;
          let cardNumber = '';
          let expiryDate = '';

          // Format 1: ROOM:101|PASSENGERS:2|CARD:4111111111111111|EXPIRY:12/25
          const format1 = decodedText.match(/ROOM:(\d+)\|PASSENGERS:(\d+)\|CARD:(\d{4,})(?:\|EXPIRY:(\d{2}\/\d{2}))?/i);
          
          // Format 2: Extract card number from any numeric sequence (16 digits)
          const cardMatch = decodedText.match(/(\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4})/);
          
          // Format 3: Extract expiry date (MM/YY or MM/YYYY)
          const expiryMatch = decodedText.match(/(?:exp(?:iry)?|valid)[\s:]*(\d{2}\/\d{2,4})/i);
          
          // Format 4: Extract from URL parameters
          const urlMatch = decodedText.match(/[?&](room|card|passengers|cardNumber|expiry|expiryDate)=([^&]+)/gi);

          if (format1) {
            room = format1[1];
            passengers = parseInt(format1[2], 10);
            cardNumber = format1[3];
            expiryDate = format1[4] || '';
          } else if (cardMatch) {
            // Extract card number and clean it
            cardNumber = cardMatch[1].replace(/[-\s]/g, '');
            
            // Try to extract room from any digit pattern after common keywords
            const roomMatch = decodedText.match(/(?:room|rm|cabin|suite)[\s:]*(\d+)/i);
            room = roomMatch ? roomMatch[1] : '';
            
            // Try to extract passenger count
            const passMatch = decodedText.match(/(?:passengers?|pax|guests?)[\s:]*(\d+)/i);
            passengers = passMatch ? parseInt(passMatch[1], 10) : 1;
            
            // Extract expiry if found
            if (expiryMatch) {
              expiryDate = expiryMatch[1];
            }
          } else if (urlMatch) {
            // Parse URL parameters
            urlMatch.forEach((param) => {
              const [key, value] = param.split('=');
              const cleanKey = key.replace(/[?&]/, '').toLowerCase();
              if (cleanKey === 'card' || cleanKey === 'cardnumber') {
                cardNumber = value.replace(/[-\s]/g, '');
              } else if (cleanKey === 'room') {
                room = value;
              } else if (cleanKey === 'passengers') {
                passengers = parseInt(value, 10);
              } else if (cleanKey === 'expiry' || cleanKey === 'expirydate') {
                expiryDate = value;
              }
            });
          }

          // If we still don't have required data, prompt user
          if (!cardNumber || cardNumber.length < 4) {
            toast.error('Could not extract card number from QR code. Please enter manually.');
            console.log('Full QR text:', decodedText);
            return;
          }

          // Default room if not found
          if (!room) {
            room = prompt('Enter room number:') || '000';
          }

          // Prompt for expiry date if not found
          if (!expiryDate) {
            const userExpiry = prompt('Enter card expiry date (MM/YY):');
            if (userExpiry) {
              expiryDate = userExpiry;
            }
          }

          onScan({
            room,
            passengerCount: passengers,
            cardNumber, // Full card number for storage
            expiryDate: expiryDate || undefined,
          });

          scanner.clear();
          onClose();
          toast.success('Voucher scanned successfully!');
        } catch (error) {
          console.error('QR Parse Error:', error);
          toast.error('Error parsing QR code');
        }
      },
      (error) => {
        // Ignore scan errors - they're normal while scanning
        if (
          error &&
          !error.toString().includes('NotFoundException') &&
          !error.toString().includes('No QR code found')
        ) {
          console.debug('QR Scan Debug:', error);
        }
      }
    );

    return () => {
      if (scannerRef.current) {
        try {
          if (scannerRef.current.getState() === Html5QrcodeScannerState.SCANNING) {
            scannerRef.current.clear();
          }
        } catch (err) {
          console.debug('Cleanup error:', err);
        }
      }
    };
  }, [isOpen, onClose, onScan]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-glass-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <h2 className="text-heading-md font-semibold text-neutral-900">
            Scan Voucher QR
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        </div>

        {/* Scanner Container */}
        <div className="relative bg-black">
          <div
            id="qr-scanner"
            ref={containerRef}
            className="aspect-square"
          />
        </div>

        {/* Instructions */}
        <div className="p-4 bg-neutral-50">
          <p className="text-caption-sm text-neutral-600 text-center">
            Position the QR code within the frame to scan
          </p>
        </div>

        {/* Close Button */}
        <div className="p-4 border-t border-neutral-200">
          <Button
            variant="secondary"
            className="w-full"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
