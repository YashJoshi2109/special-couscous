import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'dark' | 'elevated';
}

export const GlassCard = React.forwardRef<
  HTMLDivElement,
  GlassCardProps
>(({ className, variant = 'default', ...props }, ref) => {
  const variantClass = {
    default: 'glass',
    dark: 'glass-dark',
    elevated: 'glass shadow-glass-lg',
  }[variant];

  return (
    <div
      ref={ref}
      className={cn(variantClass, 'rounded-xl p-4 sm:p-6', className)}
      {...props}
    />
  );
});

GlassCard.displayName = 'GlassCard';

interface StatusChipProps {
  status: 'live' | 'completed' | 'edited' | 'pending' | 'declined';
  children?: React.ReactNode;
}

export const StatusChip: React.FC<StatusChipProps> = ({
  status,
  children,
}) => {
  const chipClass = {
    live: 'chip-live',
    completed: 'chip-success',
    edited: 'chip-warning',
    pending: 'chip-info',
    declined: 'chip-danger',
  }[status];

  const labels = {
    live: 'Live',
    completed: 'Completed',
    edited: 'Edited',
    pending: 'Pending',
    declined: 'Declined',
  };

  return (
    <span className={chipClass}>
      {children || labels[status]}
    </span>
  );
};

interface KPITileProps {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export const KPITile: React.FC<KPITileProps> = ({
  label,
  value,
  change,
  trend,
}) => {
  return (
    <GlassCard className="flex flex-col gap-1">
      <p className="text-caption-md text-neutral-600">{label}</p>
      <p className="text-heading-lg font-semibold text-neutral-900">
        {value}
      </p>
      {change && (
        <p
          className={cn(
            'text-caption-sm font-medium',
            trend === 'up' ? 'text-success-600' : '',
            trend === 'down' ? 'text-danger-600' : '',
            trend === 'neutral' ? 'text-neutral-600' : ''
          )}
        >
          {change}
        </p>
      )}
    </GlassCard>
  );
};

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {icon && <div className="mb-4 text-4xl">{icon}</div>}
      <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-body-md text-neutral-600 mb-6 max-w-xs">
          {description}
        </p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
};
