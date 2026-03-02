import React from 'react';

/**
 * Haptic feedback hook for iOS and Android
 * Provides tactile feedback for user interactions
 */

export type HapticFeedbackType = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error' | 'selection';

export const useHapticFeedback = () => {
  const trigger = (type: HapticFeedbackType = 'light') => {
    // Check if haptic feedback API is available (iOS 13+, Android)
    if (!('vibrate' in navigator)) {
      return;
    }

    // Haptic patterns based on type
    const patterns: Record<HapticFeedbackType, number | number[]> = {
      light: 10,
      medium: 20,
      heavy: 30,
      success: [10, 30, 10],
      warning: [20, 10, 20],
      error: [30, 20, 30],
      selection: 15,
    };

    try {
      navigator.vibrate(patterns[type]);
    } catch (e) {
      // Vibration API might be restricted
      console.debug('Haptic feedback not available');
    }
  };

  return { trigger };
};

/**
 * Haptic feedback component wrapper
 * Automatically triggers haptic on click events
 */
export const withHapticFeedback = <P extends Record<string, any>>(
  Component: React.ComponentType<P>,
  hapticType: HapticFeedbackType = 'light'
) => {
  const Wrapped = React.forwardRef<HTMLElement, P & { onClick?: (e: React.MouseEvent) => void }>(
    (props, ref) => {
      const { trigger } = useHapticFeedback();

      const handleClick = (e: React.MouseEvent) => {
        trigger(hapticType);
        (props as any).onClick?.(e);
      };

      return React.createElement(Component, {
        ...props,
        onClick: handleClick,
        ref,
      } as P);
    }
  );

  Wrapped.displayName = `withHapticFeedback(${Component.displayName || Component.name || 'Component'})`;
  return Wrapped;
};


