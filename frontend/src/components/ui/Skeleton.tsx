'use client';

import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = '8px',
  className = '',
  count = 1,
}) => {
  const skeletons = Array.from({ length: count });

  return (
    <>
      {skeletons.map((_, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-r from-neutral-100 via-neutral-50 to-neutral-100 animate-pulse ${className}`}
          style={{
            width,
            height,
            borderRadius,
          }}
        />
      ))}
    </>
  );
};

export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 1 }) => {
  const cards = Array.from({ length: count });

  return (
    <>
      {cards.map((_, idx) => (
        <div key={idx} className="glass rounded-2xl p-4 space-y-3">
          <Skeleton height="20px" />
          <Skeleton height="32px" />
          <div className="space-y-2">
            <Skeleton height="16px" width="80%" />
            <Skeleton height="16px" width="60%" />
          </div>
        </div>
      ))}
    </>
  );
};

export const ListSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
  const items = Array.from({ length: count });

  return (
    <div className="space-y-3">
      {items.map((_, idx) => (
        <div key={idx} className="glass rounded-xl p-4 flex items-center gap-3">
          <Skeleton height="48px" width="48px" borderRadius="12px" />
          <div className="flex-1 space-y-2">
            <Skeleton height="18px" width="70%" />
            <Skeleton height="14px" width="50%" />
          </div>
        </div>
      ))}
    </div>
  );
};
