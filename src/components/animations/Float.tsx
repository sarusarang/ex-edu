"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface FloatProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  distance?: number;
  duration?: number;
  rotate?: number;
  delay?: number;
  className?: string;
}

export function Float({
  children,
  distance = 8,
  duration = 5,
  rotate = 1.5,
  delay = 0,
  className = "",
  ...props
}: FloatProps) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
        rotate: [0, rotate, -rotate, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Float;

