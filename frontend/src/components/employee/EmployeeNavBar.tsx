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
  Clock,
} from 'lucide-react';

const navItems = [
  { href: '/employee', icon: Home, label: 'Home' },
  { href: '/employee/timesheet', icon: Calendar, label: 'Timesheet' },
  { href: '/employee/schedule', icon: Clock, label: 'Schedule' },
  { href: '/employee/pay', icon: CreditCard, label: 'Pay' },
  { href: '/employee/vouchers', icon: Ticket, label: 'Vouchers' },
  { href: '/employee/settings', icon: Settings, label: 'Settings' },
];

export const EmployeeNavBar: React.FC = () => {
  const pathname = usePathname();
  useRealtimeSubscriptions('employee');

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-neutral-200 shadow-lg" style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}>
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 py-2 px-2 min-w-[60px] min-h-[56px] transition-all duration-200 relative',
                isActive
                  ? 'text-primary-600'
                  : 'text-neutral-500 hover:text-neutral-700 active:scale-95'
              )}
            >
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary-600 rounded-full" />
              )}
              <Icon className={cn('w-6 h-6 transition-transform', isActive && 'scale-110')} />
              <span className="text-[10px] font-medium leading-tight">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
