"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import HeroShader from "@/components/HeroShader";

export default function CloudBackground({ children }: { children: ReactNode }) {
  const [parallax] = useState({ x: 0, y: 0 });

  return (
    <>
      <div style={{ pointerEvents: "none" }}>
        {/* Global background clouds only (no black hole), parallax disabled */}
        <HeroShader enableBlackHole={false} position="fixed" parallax={parallax} />
      </div>
      {children}
    </>
  );
}


