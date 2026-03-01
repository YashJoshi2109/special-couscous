"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useRealtimeSubscriptions } from '@/hooks/useRealtimeSubscriptions';
import toast from 'react-hot-toast';
import {
  LayoutDashboard,
  Users,
  Clock,
  DollarSign,
  Ticket,
  Settings,
  LogOut,
  BarChart3,
  Calendar,
} from 'lucide-react';

const adminNavItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Overview' },
  { href: '/admin/employees', icon: Users, label: 'Employees' },
  { href: '/admin/time-logs', icon: Clock, label: 'Time Logs' },
  { href: '/admin/schedule', icon: Calendar, label: 'Schedule' },
  { href: '/admin/payroll', icon: DollarSign, label: 'Payroll' },
  { href: '/admin/vouchers', icon: Ticket, label: 'Vouchers' },
  { href: '/admin/audit', icon: BarChart3, label: 'Audit Log' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
];

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = React.useState(false);
  useRealtimeSubscriptions('admin');

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (!response.ok) throw new Error('Logout failed');
      toast.success('Logged out successfully');
      router.push('/login');
    } catch (error) {
      toast.error('Failed to logout');
      setIsLoggingOut(false);
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-700 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
        <h1 className="text-heading-lg font-bold text-neutral-900 dark:text-white">
          HotelShift Pro
        </h1>
        <p className="text-caption-sm text-neutral-600 dark:text-neutral-400 mt-1">Admin Portal</p>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {adminNavItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-4 py-2 rounded-lg transition-all',
                isActive
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-medium'
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-body-md">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-body-md">{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
        </button>
      </div>
    </aside>
  );
};
