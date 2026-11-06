"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export interface CountUpProps {
  end: number;
  start?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

export function CountUp({
  end,
  start = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  delay = 0,
  once = true,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const motionVal = useMotionValue(start);
  const springVal = useSpring(motionVal, {
    damping: 30 + duration * 5,
    stiffness: 100 - duration * 10,
  });

  useEffect(() => {
    if (isInView) {
      if (delay && delay > 0) {
        const timer = setTimeout(() => {
          motionVal.set(end);
        }, delay * 1000);
        return () => clearTimeout(timer);
      } else {
        motionVal.set(end);
      }
    }
  }, [isInView, end, delay, motionVal]);

  useEffect(() => {
    const unsubscribe = springVal.on("change", (latest) => {
      if (ref.current) {
        const formatted = latest.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springVal, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}{start.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
}
