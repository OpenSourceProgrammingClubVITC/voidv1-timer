"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import HeroShader from "@/components/HeroShader";

export default function VoidCountdown() {
  const targetDate = new Date("2025-10-29T09:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <HeroShader enableBlackHole position="absolute" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-4">
        {/* VOID Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
            <div className="flex justify-center mt-2 sm:mt-4 md:mt-8">
          <Image
            src="/text.png"
            alt="VOID"
            width={520}
            height={160}
            className="w-[220px] sm:w-[320px] md:w-[440px] lg:w-[520px] max-w-[92vw] h-auto object-contain"
            priority
          />
        </div>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/60 font-mono text-center mt-2">
            Embrace the unknown
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 md:gap-8 mb-8"
        >
          {[
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINS", value: timeLeft.minutes },
            { label: "SECS", value: timeLeft.seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-black/70 backdrop-blur-sm border  border-white/10 rounded-lg p-4 md:p-8 min-w-[80px] md:min-w-[140px]">
                <span className="text-9xl font-bold text-white  tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-white/50 font-mono mt-3">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base tracking-[0.2em] uppercase text-white/60 font-mono"
        >
        </motion.p>
      </div>

      {/* Sponsors Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 w-full border-t border-white/10 bg-black/50 backdrop-blur-sm py-8 px-4"
      >
        <div className="max-w-6xl mx-auto">
        <Image
            src="/all_logo.png"
            alt="Sponsors Logos"
            width={1200}
            height={100}
            className="w-full h-auto object-contain"
          />
          
        </div>
      </motion.div>
    </div>
  );
}