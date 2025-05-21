"use client";

import { useEffect, useRef } from 'react';

export default function ProgressBar() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollY / scrollHeight) * 100;
      
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }
    };

    // Update progress on scroll
    window.addEventListener('scroll', updateProgress);
    
    // Initial update
    updateProgress();
    
    // Cleanup
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="progress-bar" ref={progressBarRef} />
  );
}
