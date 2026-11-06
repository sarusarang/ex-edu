"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { FadeDirection } from "./FadeIn";

export interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "variants" | "transition"> {
  children: React.ReactNode;
  direction?: FadeDirection;
  distance?: number;
  duration?: number;
  blur?: boolean;
  scale?: boolean;
  className?: string;
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 28,
  duration = 0.7,
  blur = true,
  scale = false,
  className = "",
  ...props
}: StaggerItemProps) {
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

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...initialPos,
      scale: scale ? 0.94 : 1,
      filter: blur ? "blur(8px)" : "none",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: blur ? "blur(0px)" : "none",
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export default StaggerItem;

