"use client";

import type { ReactNode } from "react";

export default function VoidBackground({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Plain black background behind everything */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        pointerEvents: 'none', 
        zIndex: -30,
        backgroundColor: '#000'
      }}>
      </div>
      {children}
    </>
  );
}