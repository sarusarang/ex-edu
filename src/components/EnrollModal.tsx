"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export default function EnrollModal({
  isOpen,
  onClose,
  defaultCourse = "Autonomous AI Performance Marketing & Media Buying",
}: EnrollModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const course = defaultCourse;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "1-3 years in marketing",
    cohortDate: "November 24, 2026 (Live Cohort)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

          {/* Modal Container */}
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0c0919] border border-purple-500/30 shadow-[0_0_80px_rgba(124,58,237,0.3)] overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-purple-500/20 bg-[#0c0919]/90 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    Priority Cohort Enrollment
                  </h2>
                  <p className="text-xs text-purple-300">
                    Secure your seat in the ExEdu Hybrid AI Certification.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 overflow-y-auto">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Enrollment Application Confirmed!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md">
                    Congratulations, <strong className="text-white">{formData.fullName || "Fellow Marketer"}</strong>! Your provisional enrollment for <span className="text-purple-300 font-semibold">{course}</span> has been logged. Our admissions director will send your welcome kit &amp; orientation schedule shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Selected Track Pill */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/60 to-indigo-950/40 border border-purple-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">
                        Selected Program
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5">
                        {course}
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Early Bird -20%
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Jordan Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jordan@agency.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Preferred Cohort
                      </label>
                      <select
                        value={formData.cohortDate}
                        onChange={(e) =>
                          setFormData({ ...formData, cohortDate: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#140e29] border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                      >
                        <option value="November 24, 2026 (Live Cohort)">
                          November 24, 2026 (6 seats left)
                        </option>
                        <option value="December 15, 2026 (Live Cohort)">
                          December 15, 2026 (Open)
                        </option>
                        <option value="January 10, 2027 (Weekend Track)">
                          January 10, 2027 (Weekend Track)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Experience Level
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({ ...formData, experience: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#140e29] border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                      >
                        <option value="Brand New to Marketing">
                          Complete Beginner / Transitioning Career
                        </option>
                        <option value="1-3 years in marketing">
                          1–3 Years in Marketing / Freelancing
                        </option>
                        <option value="3+ years / Agency Senior">
                          3+ Years / Agency Media Buyer or Lead
                        </option>
                        <option value="Founder / Brand Owner">
                          Founder / E-Commerce Brand Owner
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      14-Day 100% Satisfaction Guarantee
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-purple-400" />
                      Encrypted Application
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-purple-600/40 transition-all hover:scale-[1.01] active:scale-95"
                  >
                    <span>Confirm Priority Seat &amp; Access Syllabus</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

