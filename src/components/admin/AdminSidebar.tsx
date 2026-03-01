import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  Clock,
  DollarSign,
  Ticket,
  Settings,
  LogOut,
  BarChart3,
} from 'lucide-react';

const adminNavItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Overview' },
  { href: '/admin/employees', icon: Users, label: 'Employees' },
  { href: '/admin/time-logs', icon: Clock, label: 'Time Logs' },
  { href: '/admin/payroll', icon: DollarSign, label: 'Payroll' },
  { href: '/admin/vouchers', icon: Ticket, label: 'Vouchers' },
  { href: '/admin/audit', icon: BarChart3, label: 'Audit Log' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
];

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-neutral-200 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-neutral-200">
        <h1 className="text-heading-lg font-bold text-neutral-900">
          HotelShift Pro
        </h1>
        <p className="text-caption-sm text-neutral-600 mt-1">Admin Portal</p>
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
                  ? 'bg-primary-100 text-primary-700 font-medium'
                  : 'text-neutral-700 hover:bg-neutral-100'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-body-md">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-200">
        <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-all">
          <LogOut className="w-5 h-5" />
          <span className="text-body-md">Logout</span>
        </button>
      </div>
    </aside>
  );
};
