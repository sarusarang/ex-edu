"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-emerald-400 origin-left z-[100] pointer-events-none ${className}`}
    />
  );
}

export default ScrollProgress;

