"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import type Lenis from "lenis";
import { usePathname } from "next/navigation";

interface SmoothScrollContextType {
  lenis: Lenis | undefined;
  scrollTo: (target: string | number | HTMLElement, options?: Parameters<Lenis["scrollTo"]>[1]) => void;
  stop: () => void;
  start: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: undefined,
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  // Scroll to top on route navigation
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      // If there is no hash in the URL, gently scroll to top
      if (typeof window !== "undefined" && !window.location.hash) {
        lenisRef.current.lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname]);

  // Intercept anchor clicks for ultra-smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const element = document.querySelector(href);
        if (element && lenisRef.current?.lenis) {
          e.preventDefault();
          lenisRef.current.lenis.scrollTo(element as HTMLElement, {
            offset: -80,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
          // Update URL hash without instant jump
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  const contextValue: SmoothScrollContextType = {
    get lenis() {
      return lenisRef.current?.lenis;
    },
    scrollTo: (target, options) => {
      lenisRef.current?.lenis?.scrollTo(target, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      });
    },
    stop: () => lenisRef.current?.lenis?.stop(),
    start: () => lenisRef.current?.lenis?.start(),
  };

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.8,
        infinite: false,
        syncTouch: false,
        autoRaf: true,
      }}
    >
      <SmoothScrollContext.Provider value={contextValue}>
        {children}
      </SmoothScrollContext.Provider>
    </ReactLenis>
  );
}

// Re-export native useLenis as well for maximum flexibility
export { useLenis };

