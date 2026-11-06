"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Award,
  Target,
  ArrowUpRight,
} from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnroll?: () => void;
}

export default function AboutModal({
  isOpen,
  onClose,
  onOpenEnroll,
}: AboutModalProps) {
  const stats = [
    { label: "Placement Rate", value: "98.4%", detail: "In Top Global Agencies & Brands" },
    { label: "Alumni Worldwide", value: "4,800+", detail: "Across 42 Countries" },
    { label: "Live Ad Spend Simulation", value: "$10M+", detail: "Hands-on real budget sandbox" },
    { label: "Average ROAS Lift", value: "380%", detail: "Within 60 days of graduation" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0c0919] border border-purple-500/30 shadow-[0_0_80px_rgba(124,58,237,0.3)] overflow-hidden z-10"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 border-b border-purple-500/20 bg-[#0c0919]/90 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-28">
                  <Image
                    src="/ex_edu_logo-03.png"
                    alt="ExEdu"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Institutional Mission
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8">
              {/* Hero Statement */}
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
                  {"// THE HYBRID AI PARADIGM"}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  Bridging Human Strategy &amp; Machine Velocity in Digital Marketing.
                </h2>
                <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
                  Traditional digital marketing courses teach 2018 tactics—manual audience targeting, static Photoshop templates, and basic keyword stuffing. At <strong className="text-purple-300">ExEdu</strong>, we built the world’s first <span className="text-white font-semibold">Hybrid AI Marketing Curriculum</span>: combining human psychology, predictive AI media buying algorithms, generative content pipelines, and autonomous growth engines.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-purple-500/20 flex flex-col justify-between"
                  >
                    <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                      {stat.value}
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-white block mt-1">
                        {stat.label}
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        {stat.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-3">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Live Simulator Sandbox
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Students train with $10M+ in real campaign datasets across Meta, Google PMax, and TikTok—analyzing real budget fluctuations, not toy mockups.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="w-10 h-10 rounded-xl bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Autonomous Content Labs
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Learn to generate, test, and iterate 100+ high-CTR video hooks every week using state-of-the-art generative video, audio, and visual AI pipelines.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Direct Agency Placement
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our career network connects certified alumni directly with performance agencies, venture-backed tech startups, and global e-commerce conglomerates.
                  </p>
                </div>
              </div>

              {/* CTA footer */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-purple-900/40 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Ready to evolve into a Top 1% Marketer?
                  </h4>
                  <p className="text-xs text-purple-200">
                    Next cohort starts soon. Limited to 25 seats per batch for high-touch mentorship.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    if (onOpenEnroll) onOpenEnroll();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-purple-600/30 whitespace-nowrap"
                >
                  <span>Apply For Admission</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

