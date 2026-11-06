"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ScaleInProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "transition"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  blur?: boolean;
  once?: boolean;
  amount?: number | "some" | "all";
  className?: string;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.7,
  initialScale = 0.92,
  blur = true,
  once = true,
  amount = 0.2,
  className = "",
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: initialScale,
        filter: blur ? "blur(10px)" : "none",
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: blur ? "blur(0px)" : "none",
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth snappy curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default ScaleIn;

