'use client';

import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  direction = 'left',
  duration = 300,
}) => {
  const directionMap = {
    left: {
      from: 'translate-x-full',
      to: 'translate-x-0',
    },
    right: {
      from: '-translate-x-full',
      to: 'translate-x-0',
    },
    up: {
      from: 'translate-y-full',
      to: 'translate-y-0',
    },
    down: {
      from: '-translate-y-full',
      to: 'translate-y-0',
    },
  };

  const { to } = directionMap[direction];

  return (
    <div
      className={`${to} transition-transform`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};
