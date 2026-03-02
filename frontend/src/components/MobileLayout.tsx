'use client';

import React from 'react';

interface MobileLayoutProps {
  children: React.ReactNode;
  className?: string;
  hasBottomNav?: boolean;
}

/**
 * MobileLayout wrapper that handles safe area insets for notches and home indicators
 * Automatically applies safe-area-inset CSS variables
 */
export const MobileLayout = ({
  children,
  className = '',
  hasBottomNav = true,
}: MobileLayoutProps) => {
  return (
    <div
      className={className}
      style={{
        paddingTop: 'max(var(--safe-area-inset-top, 0), 0px)',
        paddingLeft: 'max(var(--safe-area-inset-left, 0), 0px)',
        paddingRight: 'max(var(--safe-area-inset-right, 0), 0px)',
        paddingBottom: hasBottomNav
          ? 'max(var(--safe-area-inset-bottom, 0), 0px)'
          : 'max(var(--safe-area-inset-bottom, 0), 0px)',
        // CSS custom properties for iOS safe area support
        WebkitUserSelect: 'none' as any,
      }}
    >
      {children}
    </div>
  );
};

/**
 * SafeAreaInset component - use for specific areas that need safe area padding
 * @param edge - which edge to apply padding to: 'top', 'bottom', 'left', 'right', 'all'
 */
export const SafeAreaInset = ({
  edge = 'all',
  children,
  className = '',
}: {
  edge?: 'top' | 'bottom' | 'left' | 'right' | 'all';
  children?: React.ReactNode;
  className?: string;
}) => {
  const getPadding = () => {
    const baseStyle: React.CSSProperties = {};
    
    if (edge === 'all' || edge === 'top') {
      baseStyle.paddingTop = 'max(env(safe-area-inset-top), 0px)';
    }
    if (edge === 'all' || edge === 'bottom') {
      baseStyle.paddingBottom = 'max(env(safe-area-inset-bottom), 0px)';
    }
    if (edge === 'all' || edge === 'left') {
      baseStyle.paddingLeft = 'max(env(safe-area-inset-left), 0px)';
    }
    if (edge === 'all' || edge === 'right') {
      baseStyle.paddingRight = 'max(env(safe-area-inset-right), 0px)';
    }
    
    return baseStyle;
  };

  return (
    <div className={className} style={getPadding()}>
      {children}
    </div>
  );
};
