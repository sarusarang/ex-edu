"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

export interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "transition" | "variants"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  once = true,
  amount = 0.15,
  className = "",
  ...props
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default StaggerContainer;

