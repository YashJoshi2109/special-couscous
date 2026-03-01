"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useRealtimeSubscriptions } from '@/hooks/useRealtimeSubscriptions';
import {
  Home,
  Calendar,
  CreditCard,
  Ticket,
  Settings,
} from 'lucide-react';

const navItems = [
  { href: '/employee', icon: Home, label: 'Home' },
  { href: '/employee/timesheet', icon: Calendar, label: 'Timesheet' },
  { href: '/employee/pay', icon: CreditCard, label: 'Pay' },
  { href: '/employee/vouchers', icon: Ticket, label: 'Vouchers' },
  { href: '/employee/settings', icon: Settings, label: 'Settings' },
];

export const EmployeeNavBar: React.FC = () => {
  const pathname = usePathname();
  useRealtimeSubscriptions('employee');

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 safe-area-inset-bottom">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 py-3 px-4 min-h-[60px] transition-colors',
                isActive
                  ? 'text-primary-600 border-t-2 border-primary-600'
                  : 'text-neutral-600 hover:text-neutral-900'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-caption-sm font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
