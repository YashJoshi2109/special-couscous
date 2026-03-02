import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    danger: 'btn-danger',
  }[variant];

  // Touch-optimized sizes: minimum 44x44 for iOS, 48x48 for Android
  const sizeClass = {
    sm: 'px-3 py-2 text-sm min-h-[40px] min-w-[40px]',
    md: 'px-4 py-2.5 min-h-[44px] min-w-[44px]',
    lg: 'px-6 py-3 text-lg min-h-[48px] min-w-[48px]',
  }[size];

  return (
    <button
      ref={ref}
      className={cn(
        variantClass, 
        sizeClass, 
        'transition-all duration-200 active:scale-95',
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] bg-white rounded-t-3xl shadow-glass-xl overflow-hidden animate-in slide-in-from-bottom duration-300">
        <div className="flex flex-col max-h-full">
          {/* Handle bar */}
          <div className="flex justify-center pt-2">
            <div className="w-12 h-1 bg-neutral-300 rounded-full" />
          </div>

          {/* Header */}
          {title && (
            <div className="sticky top-0 px-4 sm:px-6 py-4 border-b border-neutral-200">
              <h2 className="text-heading-md font-semibold text-neutral-900">
                {title}
              </h2>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  side?: 'left' | 'right';
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  side = 'right',
}) => {
  if (!isOpen) return null;

  const slideDirection = side === 'left' ? 'slide-in-from-left' : 'slide-in-from-right';

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed inset-y-0 z-50 w-full max-w-md bg-white shadow-glass-xl overflow-hidden animate-in',
          slideDirection,
          'duration-300',
          side === 'left' ? 'left-0' : 'right-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          {title && (
            <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-neutral-200">
              <h2 className="text-heading-md font-semibold text-neutral-900">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="text-neutral-500 hover:text-neutral-700 transition"
              >
                ✕
              </button>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
