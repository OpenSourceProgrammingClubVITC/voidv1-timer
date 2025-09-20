"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export type LiquidGlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function LiquidGlassCard({
  children,
  className,
}: LiquidGlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glow-wrapper w-full"
    >
      <div
        className={`backdrop-blur-xs rounded-2xl bg-white/10 shadow-gray-300/20 shadow-[inset_0_0_60px_-15px] outline outline-purple-400/40 ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
}
