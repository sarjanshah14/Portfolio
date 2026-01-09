"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const lenisRef = React.useRef<any>(null);

  useEffect(() => {
    const stopLenis = () => {
      lenisRef.current?.lenis?.stop();
    };
    const startLenis = () => {
      lenisRef.current?.lenis?.start();
    };

    window.addEventListener("stop-lenis", stopLenis);
    window.addEventListener("start-lenis", startLenis);

    return () => {
      window.removeEventListener("stop-lenis", stopLenis);
      window.removeEventListener("start-lenis", startLenis);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        duration: 1.2,
        prevent: (node) => {
          if (isInsideModal) return true;
          const modalOpen = node.classList.contains("modall");
          return modalOpen;
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
