"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // degrees
  glowColor?: string;
  disabled?: boolean;
}

export function TiltCard({
  children,
  className = "",
  maxRotation = 7,
  glowColor = "rgba(168, 85, 247, 0.22)",
  disabled = false,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 20 });

  // Map to 3D rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxRotation, -maxRotation]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxRotation, maxRotation]);

  // Spotlight coordinates (percentage)
  const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: disabled ? 0 : rotateX,
        rotateY: disabled ? 0 : rotateY,
      }}
      className={`relative transition-[box-shadow] duration-300 will-change-transform ${className}`}
    >
      {/* Dynamic Cursor Spotlight / Glare Glow */}
      {!disabled && isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-inherit overflow-hidden"
          style={{
            background: `radial-gradient(circle 280px at ${spotlightX.get()}% ${spotlightY.get()}%, ${glowColor}, transparent 75%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <div style={{ transform: "translateZ(10px)" }}>{children}</div>
    </motion.div>
  );
}

export default TiltCard;

