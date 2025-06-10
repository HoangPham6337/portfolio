import { useState, useEffect } from 'react';

export const CursorSplash = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{ background: `radial-gradient(300px at ${position.x}px ${position.y}px, var(--splash-color), transparent 80%)`}}
    />
  );
};
