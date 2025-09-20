import { ReactNode } from "react";

export type LiquidGlassCardProps = {
  children: ReactNode;
};

export function LiquidGlassCard({ children }: LiquidGlassCardProps) {
  return (
    <div className="backdrop-blur-xs rounded-2xl bg-white/10 shadow-gray-300/20 shadow-[inset_0_0_60px_-15px] outline outline-purple-400/40">
      {children}
    </div>
  );
}
