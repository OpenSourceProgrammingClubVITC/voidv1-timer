"use client";

import { useEffect, useState } from "react";

function getRemaining(targetIso: string) {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

// Container component that includes venue info and countdown
function EventInfoContainer({ isoTarget, venue, date }: { isoTarget: string, venue: string, date: string }) {
  return (
    <div className="mt-12 sm:mt-20 md:mt-28 lg:mt-32 flex justify-center">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-full px-6 sm:px-12 py-4 sm:py-6 backdrop-blur-2xl bg-black/20 border border-gray-700/50 shadow-[0_0_60px_rgba(0,0,0,0.4)] hover:bg-black/30 hover:border-gray-600/60 transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,0,0,0.6)]">
        <div className="text-white/90 text-xs sm:text-base font-medium hover:text-white transition-colors duration-300">{venue}</div>
        <div className="hidden sm:block h-6 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
        <CountdownTimer isoTarget={isoTarget} />
        <div className="hidden sm:block h-6 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
        <div className="text-white/90 text-xs sm:text-base font-medium hover:text-white transition-colors duration-300">{date}</div>
      </div>
    </div>
  );
}

export default function CountdownTimer({ isoTarget }: { isoTarget: string }) {
  const [t, setT] = useState(getRemaining(isoTarget));

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining(isoTarget)), 1000);
    return () => clearInterval(id);
  }, [isoTarget]);

  const pad = (n: number) => (n < 10 ? `0${n}` : String(n));

  return (
    <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
      <div className="group flex flex-col items-center">
        <span className="text-white/70 font-mono text-sm sm:text-base font-bold group-hover:text-blue-400/80 transition-colors duration-300">{pad(t.d)}</span>
        <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider group-hover:text-white/60 transition-colors duration-300">days</span>
      </div>
      
      <div className="flex items-center px-1">
        <span className="text-white/25 text-sm font-bold animate-pulse">:</span>
      </div>
      
      <div className="group flex flex-col items-center">
        <span className="text-white/70 font-mono text-sm sm:text-base font-bold group-hover:text-green-400/80 transition-colors duration-300">{pad(t.h)}</span>
        <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider group-hover:text-white/60 transition-colors duration-300">hours</span>
      </div>
      
      <div className="flex items-center px-1">
        <span className="text-white/25 text-sm font-bold animate-pulse">:</span>
      </div>
      
      <div className="group flex flex-col items-center">
        <span className="text-white/70 font-mono text-sm sm:text-base font-bold group-hover:text-yellow-400/80 transition-colors duration-300">{pad(t.m)}</span>
        <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider group-hover:text-white/60 transition-colors duration-300">mins</span>
      </div>
      
      <div className="flex items-center px-1">
        <span className="text-white/25 text-sm font-bold animate-pulse">:</span>
      </div>
      
      <div className="group flex flex-col items-center">
        <span className="text-white/70 font-mono text-sm sm:text-base font-bold group-hover:text-red-400/80 transition-colors duration-300">{pad(t.s)}</span>
        <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider group-hover:text-white/60 transition-colors duration-300">secs</span>
      </div>
    </div>
  );
}

// Export the container component as well for easy usage
export { EventInfoContainer };