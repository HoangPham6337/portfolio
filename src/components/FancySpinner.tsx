import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const FancySpinner = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target all the elements with the class "spinner-dot"
      gsap.to('.spinner-dot', {
        y: -25, // The height the dots will jump
        ease: 'power2.inOut', // A smooth easing function
        duration: 0.5, // How long each dot's up-and-down animation takes
        stagger: {
          each: 0.1, // The delay between the start of each dot's animation
          yoyo: true, // Makes the animation reverse, so the dots go up and then down
          repeat: -1, // Repeat the entire sequence infinitely
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="isolate min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: 'var(--base-color)' }}
    >
      {/* Container for the dots */}
      <div className="flex items-center justify-center space-x-2">
        <div
          className="spinner-dot w-4 h-4 rounded-full"
          style={{ backgroundColor: 'var(--primary-color)' }}
        />
        <div
          className="spinner-dot w-4 h-4 rounded-full"
          style={{ backgroundColor: 'var(--primary-color)' }}
        />
        <div
          className="spinner-dot w-4 h-4 rounded-full"
          style={{ backgroundColor: 'var(--primary-color)' }}
        />
        <div
          className="spinner-dot w-4 h-4 rounded-full"
          style={{ backgroundColor: 'var(--primary-color)' }}
        />
        <div
          className="spinner-dot w-4 h-4 rounded-full"
          style={{ backgroundColor: 'var(--primary-color)' }}
        />
      </div>

      {/* Optional text below the spinner */}
      <p
        className="mt-6 text-lg font-semibold tracking-wider"
        style={{ color: 'var(--text-color)' }}
      >
        LOADING...
      </p>
    </div>
  );
};