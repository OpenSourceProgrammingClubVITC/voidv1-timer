"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import CountdownTimer, { EventInfoContainer } from "@/components/CountdownTimer";
import HeroShader from "@/components/HeroShader";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll-driven shrink effect for the hero band
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const inverseScale = useTransform(scale, (v) => 1 / v);
  const radius = useTransform(scrollYProgress, [0, 0.5], ["0px", "40px"]);

  return (
    <motion.div
      ref={sectionRef}
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{ scale, borderRadius: radius }}
    >
      {/* Black hole strictly inside hero */}
      <div className="absolute inset-0 z-[-1]">
        <HeroShader enableBlackHole position="absolute" />
      </div>

      {/* Hero content */}
      <motion.div 
        className="relative z-20 text-center px-4 sm:px-6 mt-[15vh] sm:mt-[20vh] w-full max-w-[90vw] sm:max-w-[80vw] mx-auto" 
        style={{ scale: inverseScale }}
      >
        <h2 className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white/70 font-mono mb-2 sm:mb-4">Embrace the unknown</h2>
        <div className="flex justify-center mt-2 sm:mt-4 md:mt-8">
          <Image
            src="/text.png"
            alt="VOID"
            width={520}
            height={160}
            className="w-[220px] sm:w-[320px] md:w-[440px] lg:w-[520px] h-auto"
            priority
          />
        </div>
        <h2 className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white/70 font-mono mt-2 sm:mt-4">Trust the process</h2>

        {/* Venue / Date / Countdown pill */}
        <EventInfoContainer 
          isoTarget="2025-09-29T10:00:00Z"
          venue="Venue: MG Auditorium"
          date="Date: 2025-09-29"
        />
      </motion.div>
    </motion.div>
  );
}