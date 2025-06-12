import { useState, useEffect } from 'react';

export const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const onTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(onTouch);
  }, []);
  return isTouch;
};