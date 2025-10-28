"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate asset loading with incremental progress
    const startTime = Date.now();
    const duration = 1500; // 1.5 seconds total loading time
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(interval);
        // Add a small delay before hiding preloader for smoother transition
        setTimeout(() => setLoading(false), 300);
      }
    }, 50);

    // Listen for window load event as a backup
    const handleLoad = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setLoading(false), 300);
    };

    window.addEventListener('load', handleLoad);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Prevent background scroll and ensure loader overlays everything
  useEffect(() => {
    if (loading) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [loading]);

  if (!loading) return null;

  return (
    <div 
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center"
      style={{ 
        transition: "opacity 0.5s ease-in-out",
        opacity: progress === 100 ? 0 : 1
      }}
    >
      <div className="w-16 h-16 mb-4 relative">
        {/* Animated ring similar to black hole */}
        <div 
          className="absolute inset-0 rounded-full border-t-2 border-purple-500"
          style={{ 
            animation: "spin 2.8s linear infinite",
            boxShadow: "0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)"
          }}
        />
      </div>
      
      <div className="w-40 h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-purple-300"
          style={{ width: `${progress}%`, transition: "width 0.3s ease-out" }}
        />
      </div>
      
      <div className="mt-2 text-xs text-gray-400 font-mono">
        {progress}%
      </div>
    </div>
  );
}

