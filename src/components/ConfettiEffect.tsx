import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface ConfettiEffectProps {
  fire: boolean;
}

const NUM_PIECES = 150;
const COLORS = ['#FFC700', '#FF0000', '#2E8B57', '#007AFF', '#C0392B', '#D35400'];

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ fire }) => {
  const [pieces, setPieces] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fire) {
      setPieces(Array.from({ length: NUM_PIECES }).map((_, i) => i));
    } else {
      setPieces([]);
    }
  }, [fire]);

  useLayoutEffect(() => {
    if (fire && pieces.length > 0 && containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;

      const ctx = gsap.context(() => {
        // Set initial positions at the bottom center
        gsap.set('.confetti-piece', {
          x: clientWidth / 2,
          y: clientHeight,
          backgroundColor: () => gsap.utils.random(COLORS),
          scale: () => gsap.utils.random(0.5, 1.2),
        });

        gsap.to('.confetti-piece', {
          x: () => gsap.utils.random(0, clientWidth),
          y: () => gsap.utils.random(-100, clientHeight * 0.5),
          rotation: () => gsap.utils.random(-360, 360),
          duration: () => gsap.utils.random(2, 4),
          ease: 'power2.out',
          opacity: 0,
          stagger: 0.01,
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [fire, pieces]);


  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
    >
      {pieces.map((id) => (
        <div key={id} className="confetti-piece absolute w-3 h-4" />
      ))}
    </div>
  );
};