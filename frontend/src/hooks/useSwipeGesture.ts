/**
 * useSwipeGesture hook
 * Detects swipe gestures on mobile devices
 */

export interface SwipeGestureConfig {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number; // minimum distance to trigger swipe
}

const DEFAULT_THRESHOLD = 50;

export const useSwipeGesture = (config: SwipeGestureConfig) => {
  const [touchStart, setTouchStart] = React.useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<{ x: number; y: number } | null>(null);

  const threshold = config.threshold || DEFAULT_THRESHOLD;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    });
  };

  React.useEffect(() => {
    if (!touchStart || !touchEnd) return;

    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isLeftSwipe = distanceX > threshold;
    const isRightSwipe = distanceX < -threshold;
    const isUpSwipe = distanceY > threshold;
    const isDownSwipe = distanceY < -threshold;

    // Only trigger if horizontal distance is greater than vertical (or vice versa)
    const isHorizontal = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontal) {
      if (isLeftSwipe && config.onSwipeLeft) {
        config.onSwipeLeft();
      }
      if (isRightSwipe && config.onSwipeRight) {
        config.onSwipeRight();
      }
    } else {
      if (isUpSwipe && config.onSwipeUp) {
        config.onSwipeUp();
      }
      if (isDownSwipe && config.onSwipeDown) {
        config.onSwipeDown();
      }
    }
  }, [touchStart, touchEnd, threshold, config]);

  return { handleTouchStart, handleTouchEnd };
};

import React from 'react';
