'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}

export const PullToRefresh: React.FC<PullToRefreshProps> = ({ onRefresh, children }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;
    
    scrollTop.current = container.scrollTop;
    startY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const container = containerRef.current;
    if (!container || isRefreshing) return;

    // Only trigger pull when at the top of scroll
    if (scrollTop.current === 0) {
      const currentY = e.touches[0].clientY;
      const distance = Math.max(0, currentY - startY.current);
      setPullDistance(distance);
    }
  }, [isRefreshing]);

  const handleTouchEnd = useCallback(async () => {
    if (pullDistance > 80 && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
        // Haptic feedback
        if (window.navigator.vibrate) {
          window.navigator.vibrate(50);
        }
      } finally {
        setIsRefreshing(false);
        setPullDistance(0);
      }
    } else {
      setPullDistance(0);
    }
  }, [pullDistance, isRefreshing, onRefresh]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('touchstart', handleTouchStart as any);
    container.addEventListener('touchmove', handleTouchMove as any);
    container.addEventListener('touchend', handleTouchEnd as any);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart as any);
      container.removeEventListener('touchmove', handleTouchMove as any);
      container.removeEventListener('touchend', handleTouchEnd as any);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-auto"
      style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
    >
      {/* Pull-to-refresh indicator */}
      <div
        className={`fixed top-0 left-0 right-0 flex items-center justify-center transition-all duration-300 bg-gradient-to-b from-primary-50 to-transparent ${
          pullDistance > 0 ? 'z-40' : 'z-0'
        }`}
        style={{
          height: `${Math.min(pullDistance, 80)}px`,
          opacity: Math.min(pullDistance / 80, 1),
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <RefreshCw
            className={`w-6 h-6 text-primary-600 transition-transform ${
              isRefreshing ? 'animate-spin' : ''
            }`}
            style={{
              transform: `rotate(${Math.min((pullDistance / 80) * 180, 180)}deg)`,
            }}
          />
          {pullDistance > 80 && !isRefreshing && (
            <p className="text-caption-sm text-primary-600 font-medium">Release to refresh</p>
          )}
        </div>
      </div>

      {/* Main content with top padding */}
      <div style={{ paddingTop: pullDistance > 0 ? `${pullDistance}px` : '0' }}>
        {children}
      </div>
    </div>
  );
};
