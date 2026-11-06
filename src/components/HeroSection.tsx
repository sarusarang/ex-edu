"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  ShoppingCart,
  X,
} from "lucide-react";

interface HeroSectionProps {
  onOpenCourses?: () => void;
  onOpenEnroll?: () => void;
  onOpenContact?: () => void;
}

export default function HeroSection({
  onOpenCourses,
  onOpenEnroll,
}: HeroSectionProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Smooth, gentle mouse parallax with high damping for a slow, organic 3D depth feel
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springConfig = { stiffness: 45, damping: 25, mass: 0.5 };
  const smoothMouseX = useSpring(rawMouseX, springConfig);
  const smoothMouseY = useSpring(rawMouseY, springConfig);

  // Parallax offsets for different layers
  const modelParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const modelParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  const haloParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]);
  const haloParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);

  const textParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);
  const textParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    rawMouseX.set(xPct);
    rawMouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    rawMouseX.set(0);
    rawMouseY.set(0);
  };

  // Easing curve for luxurious slow-settle deceleration
  const slowEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[100dvh] min-h-[700px] max-h-[1100px] w-full flex flex-col justify-between pt-20 sm:pt-24 pb-6 overflow-hidden bg-[#07050f]"
    >
      {/* =========================================================================
          BACKGROUND AMBIENT ATMOSPHERE & GLOWS (Slow bloom intro)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Radial Halo behind Model (Smooth slow scale & opacity bloom) */}
        <motion.div
          style={{ x: haloParallaxX, y: haloParallaxY }}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.4, ease: slowEase }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] lg:w-[1250px] h-[600px] sm:h-[750px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.32)_0%,rgba(99,102,241,0.18)_40%,transparent_72%)] blur-[95px]"
        />

        {/* Ambient Top Glow (Slow fade in) */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, delay: 0.1, ease: slowEase }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-purple-600/18 blur-[120px] rounded-full"
        />

        {/* Bottom Ambient Glow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, delay: 0.2, ease: slowEase }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-indigo-600/18 blur-[120px] rounded-full"
        />

        {/* Subtle Cyber Grid with slow unhurried scale-settle */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.8, ease: "easeOut" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />

        {/* Soft Ambient Floating Orbs (Slow drifting particles) */}
        <motion.div
          animate={{
            y: [-12, 12, -12],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-purple-400 blur-[1px] shadow-[0_0_12px_#c084fc]"
        />
        <motion.div
          animate={{
            y: [15, -15, 15],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-[18%] w-2.5 h-2.5 rounded-full bg-pink-400 blur-[1px] shadow-[0_0_14px_#f472b6]"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-[28%] w-1.5 h-1.5 rounded-full bg-indigo-400 blur-[1px] shadow-[0_0_10px_#818cf8]"
        />
      </div>

      {/* =========================================================================
          CENTRAL HERO IMAGE: SLOW CINEMATIC UNBLUR, ELEVATION & FLOATING LOOP
          ========================================================================= */}
      <motion.div
        style={{ x: modelParallaxX, y: modelParallaxY }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none flex items-end justify-center w-full max-w-5xl"
      >
        {/* Entrance motion container: slow rising from bottom + cinematic unblur */}
        <motion.div
          initial={{ opacity: 0, y: 75, scale: 0.94, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.9,
            delay: 0.15,
            ease: slowEase,
          }}
          className="relative flex items-end justify-center"
        >
          {/* Ambient breathing/floating loop layered on top */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.0, // seamlessly starts after the intro completes
            }}
            className="relative h-[78vh] sm:h-[84vh] md:h-[90vh] lg:h-[94vh] max-h-[820px] w-[340px] sm:w-[460px] md:w-[560px] lg:w-[640px] aspect-[3/4] flex items-end justify-center"
          >
            <Image
              src="/hero-visionary-cutout.png"
              alt="ExEdu AI Marketing Visionary"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_25px_80px_rgba(168,85,247,0.48)]"
            />

            {/* Unique Cyber Visor Glint: subtle horizontal laser sweep across the magenta visor */}
            <motion.div
              initial={{ x: "-120%", opacity: 0 }}
              animate={{
                x: ["-120%", "200%"],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.8,
                delay: 1.6,
                repeat: Infinity,
                repeatDelay: 7.5,
                ease: "easeInOut",
              }}
              className="absolute top-[32%] left-[34%] w-32 h-[3px] bg-gradient-to-r from-transparent via-pink-300 to-transparent blur-[1.5px] pointer-events-none shadow-[0_0_12px_#f472b6]"
            />

            {/* Seamless Bottom Edge Blend into obsidian page background */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#07050f] via-[#07050f]/85 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* =========================================================================
          HERO CONTENT LAYER: KINETIC MASKED TYPOGRAPHY & SMOOTH REVEAL
          ========================================================================= */}
      <motion.div
        style={{ x: textParallaxX, y: textParallaxY }}
        className="relative z-20 flex-1 w-full max-w-[1720px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 flex flex-col justify-between my-auto"
      >
        {/* UPPER ROW: HEADLINE & PARAGRAPH (LEFT) + ALUMNI STATS & ENROLL PILL (RIGHT) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pt-2 sm:pt-4">
          
          {/* Left Column: Tag, Headline, Paragraph, and Action Buttons */}
          <div className="max-w-md lg:max-w-lg z-20">
            {/* 1. Tag (Smooth unblur & slow letter-tracking expand) */}
            <motion.div
              initial={{ opacity: 0, x: -25, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.3, delay: 0.35, ease: slowEase }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#c084fc]" />
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                {"// YOUR KNOWLEDGE, OUR PLATFORM"}
              </span>
            </motion.div>

            {/* 2. Headline with Masked Cinematic Word Reveal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              {/* Line 1: Knowledge in (Masked upward slide with 3D tilt) */}
              <span className="block overflow-hidden py-1">
                <motion.span
                  className="inline-block"
                  initial={{ y: "120%", opacity: 0, rotateX: 20 }}
                  animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1.4, delay: 0.48, ease: slowEase }}
                >
                  Knowledge in
                </motion.span>
              </span>

              {/* Line 2: Digital Power (Masked upward slide + gradient unblur shimmer) */}
              <span className="block overflow-hidden py-1">
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-400 to-pink-400"
                  initial={{ y: "120%", opacity: 0, rotateX: 20, filter: "blur(10px)" }}
                  animate={{ y: "0%", opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.4, delay: 0.62, ease: slowEase }}
                >
                  Digital Power
                </motion.span>
              </span>
            </h1>

            {/* 3. Subtitle (Soft unblur glide) */}
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.3, delay: 0.82, ease: slowEase }}
              className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-sm sm:max-w-md"
            >
              Empowering the next generation of performance marketers with autonomous AI media buying, predictive ROAS algorithms, and $10M+ simulated ad spend.
            </motion.p>

            {/* 4. Dual Action Buttons (Slow scale & bloom entry) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.0, ease: slowEase }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6"
            >
              {/* Primary Explore Courses Pill */}
              <button
                onClick={onOpenCourses}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_28px_rgba(168,85,247,0.48)] hover:shadow-[0_0_38px_rgba(217,70,239,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Watch Intro Glass Pill with subtle pulse */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.12] hover:border-purple-400/35 text-white font-medium text-xs sm:text-sm transition-all duration-300 backdrop-blur-md cursor-pointer"
              >
                <div className="relative w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  <span className="absolute inset-0 rounded-full bg-purple-400/30 animate-ping opacity-40 pointer-events-none" />
                </div>
                <span>Watch Intro (1 min)</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Top-Right Metric & Action Pill + AI Layer Hierarchy */}
          <div className="hidden sm:flex flex-col items-end text-right z-20 space-y-6">
            {/* Top Right Alumni Metric & Enroll Pill */}
            <motion.div
              initial={{ opacity: 0, x: 35, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.3, delay: 0.65, ease: slowEase }}
              className="flex flex-col items-end"
            >
              {/* Staggered Avatar Stack with soft spring arrival */}
              <div className="flex items-center -space-x-2 mb-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.75, ease: slowEase }}
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border-2 border-[#07050f] flex items-center justify-center text-[11px] font-bold text-white shadow-md"
                >
                  AM
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.83, ease: slowEase }}
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500 border-2 border-[#07050f] flex items-center justify-center text-[11px] font-bold text-white shadow-md"
                >
                  SK
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.91, ease: slowEase }}
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 border-2 border-[#07050f] flex items-center justify-center text-[11px] font-bold text-white shadow-md"
                >
                  JL
                </motion.div>
              </div>

              {/* Number Counter with delayed smooth count-up */}
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  <CountUp end={4800} suffix="+" duration={2.2} delay={0.8} />
                </span>
              </div>
              <span className="text-xs text-slate-300 font-mono mt-0.5">
                Certified Marketers Placed Globally
              </span>

              {/* Enroll Now White Pill with Slow Sheen Shimmer Reflection */}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1.05, ease: slowEase }}
                onClick={onOpenEnroll}
                className="group relative mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 hover:bg-purple-100 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 overflow-hidden cursor-pointer"
              >
                {/* Subtle slow sheen light sweep across pill */}
                <motion.div
                  initial={{ x: "-150%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 2.2,
                    delay: 1.8,
                    repeat: Infinity,
                    repeatDelay: 6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12 pointer-events-none"
                />

                <span className="relative z-10">Enroll Now</span>
                <div className="relative z-10 w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <ShoppingCart className="w-3 h-3" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Mobile View Quick Actions (Gentle slide up) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.0, ease: slowEase }}
          className="w-full flex sm:hidden flex-col gap-2 z-30 pt-2"
        >
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onOpenCourses}
              className="py-2.5 px-3 rounded-2xl bg-white/[0.06] border border-white/[0.1] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Tracks</span>
            </button>
            <button
              onClick={onOpenEnroll}
              className="py-2.5 px-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/30 cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* =========================================================================
          INTERACTIVE INTRO VIDEO MODAL
          ========================================================================= */}
      {videoModalOpen && (
        <div data-lenis-prevent className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#0c0919] border border-purple-500/30 p-6 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Play className="w-4 h-4 text-purple-400" />
                ExEdu Platform Intro (1 min overview)
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video rounded-2xl bg-black/80 border border-purple-500/20 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center text-white mb-4 shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Experience Next-Level Hybrid AI Education
              </h4>
              <p className="text-xs text-slate-400 max-w-md">
                Live simulations, $10M+ real ad spend datasets, generative AI creative pipelines, and 1-on-1 industry mentorship.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
