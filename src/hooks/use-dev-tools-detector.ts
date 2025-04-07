import { useState, useEffect } from 'react';

export const useDevToolsDetector = (): boolean => {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  useEffect(() => {
    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      setIsDevToolsOpen(widthThreshold || heightThreshold);
    };

    window.addEventListener('resize', detectDevTools);
    setInterval(detectDevTools, 1000);

    return () => {
      window.removeEventListener('resize', detectDevTools);
    };
  }, []);

  return isDevToolsOpen;
};