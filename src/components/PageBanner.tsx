"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface PageBannerProps {
  bannerTitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  headingLine1?: string;
  headingLine2?: string;
  targetId?: string;
  className?: string;
}

export default function PageBanner({
  bannerTitle = "ABOUT US",
  imageSrc = "/compass-hero-cropped.jpg",
  imageAlt = "Hiking and outdoor compass adventure",
  headingLine1 = "Discover the Thrill of",
  headingLine2 = "Adventure with Thrilliz",
  className = "",
}: PageBannerProps) {
  return (
    <section className={`relative w-full bg-white select-none pt-0 pb-8 sm:pb-12 ${className}`}>
      {/* 
        Full-bleed top SVG Clip Path:
        - Top is flush (M 0 0 L 1.0 0) covering the navbar area completely
        - Left and right outer edges are straight flush with screen edges
        - Middle features the smooth organic step notch cutout on the left half
      */}
      <svg
        className="absolute w-0 h-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="thrilliz-full-page-banner-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 1.0 0 L 1.0 1.0 L 0.520 1.0 C 0.495 1.0, 0.485 0.820, 0.460 0.820 L 0 0.820 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. Main Banner Card with balanced, refined height */}
      <div className="relative w-full">
        <div
          style={{
            clipPath: "url(#thrilliz-full-page-banner-clip)",
            WebkitClipPath: "url(#thrilliz-full-page-banner-clip)",
          }}
          className="relative w-full h-[390px] sm:h-[440px] md:h-[490px] lg:h-[530px] xl:h-[550px] overflow-hidden bg-emerald-950 shadow-md"
        >
          {/* Background Image: Compass held in forest extending behind navbar with subtle scale-in */}
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.01 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover object-[center_52%]"
              sizes="100vw"
            />
          </motion.div>

          {/* Deep photographic vignette: rich at top for navbar legibility, clear in center */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/45 pointer-events-none" />

          {/* Banner Title: Centered, clean, refined weight */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-semibold md:font-bold text-white tracking-[0.06em] uppercase select-none drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)] font-sans text-center transition-all"
            >
              {bannerTitle}
            </motion.h1>
          </div>
        </div>

        {/* 2. Main Headline Section placed right under the banner with clean alignment */}
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pt-4 sm:pt-6 md:pt-0 md:-mt-14 lg:-mt-18 xl:-mt-20 md:max-w-[48%] transition-all"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0b574c] leading-[1.12]">
              <span className="block">{headingLine1}</span>
              {headingLine2 && (
                <span className="block mt-1 sm:mt-1.5">{headingLine2}</span>
              )}
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
