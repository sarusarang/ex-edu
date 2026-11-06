"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export type FadeDirection = "up" | "down" | "left" | "right" | "none";

export interface FadeInProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "transition"> {
  children: React.ReactNode;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: boolean;
  scale?: boolean;
  once?: boolean;
  amount?: number | "some" | "all";
  className?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.75,
  distance = 32,
  blur = true,
  scale = false,
  once = true,
  amount = 0.15,
  className = "",
  ...props
}: FadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPos,
        scale: scale ? 0.95 : 1,
        filter: blur ? "blur(8px)" : "none",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: blur ? "blur(0px)" : "none",
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth luxury cubic-bezier deceleration
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;

