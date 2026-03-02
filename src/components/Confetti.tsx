'use client';

import React, { useEffect, useState } from 'react';

interface Confetti {
  id: string;
  left: number;
  duration: number;
  delay: number;
  char: string;
}

interface ConfettiProps {
  trigger: boolean;
  onComplete?: () => void;
}

export const Confetti: React.FC<ConfettiProps> = ({ trigger, onComplete }) => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    if (!trigger) return;

    // Generate confetti pieces
    const pieces: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
      id: `confetti-${i}`,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 1,
      delay: Math.random() * 0.5,
      char: ['🎉', '✨', '🎊', '⭐', '🌟'][Math.floor(Math.random() * 5)],
    }));

    setConfetti(pieces);

    // Clear after animation
    const timer = setTimeout(() => {
      setConfetti([]);
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [trigger, onComplete]);

  return (
    <>
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="fixed pointer-events-none text-2xl font-bold"
          style={{
            left: `${piece.left}%`,
            top: '-30px',
            animation: `confetti-fall ${piece.duration}s linear ${piece.delay}s forwards`,
            opacity: 1,
          }}
        >
          {piece.char}
        </div>
      ))}

      <style>{`
        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes confetti-spin {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
      `}</style>
    </>
  );
};
