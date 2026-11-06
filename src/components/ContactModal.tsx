"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "Autonomous Performance Marketing",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep open so they see confirmation
    }, 500);
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
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0c0919] border border-purple-500/30 shadow-[0_0_80px_rgba(124,58,237,0.3)] overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-purple-500/20 bg-[#0c0919]/90 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-white">
                    Contact ExEdu Admissions &amp; Counselors
                  </h2>
                  <p className="text-xs text-slate-400">
                    Schedule a 1-on-1 career mapping session with a lead performance mentor.
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
                    Counseling Request Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md">
                    Thank you, <strong className="text-white">{formData.name || "Marketer"}</strong>. Our senior admissions counselor will reach out to you within 2 business hours via WhatsApp/Email.
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
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {/* Left Info Column */}
                  <div className="md:col-span-2 space-y-6 border-b md:border-b-0 md:border-r border-purple-500/20 pb-6 md:pb-0 md:pr-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 block mb-1">
                        {"// DIRECT ADMISSIONS"}
                      </span>
                      <h4 className="text-base font-bold text-white mb-2">
                        Get In Touch
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Have questions about course syllabi, live batch schedules, or corporate team sponsorships? We are here to help.
                      </p>
                    </div>

                    <div className="space-y-4 text-xs text-slate-300">
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-medium text-white">Admissions Desk</span>
                          <span className="font-mono text-purple-300">admissions@exedu.ai</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-medium text-white">Direct Line / WhatsApp</span>
                          <span className="font-mono text-purple-300">+1 (800) 428-EXEDU</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-medium text-white">Counseling Hours</span>
                          <span className="text-slate-400">Mon - Sat: 9:00 AM – 8:00 PM EST</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20">
                      <div className="flex items-center gap-1.5 text-purple-300 text-xs font-semibold mb-1">
                        <Sparkles className="w-3.5 h-3.5" /> Fast Response
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Average counselor response time: under 15 minutes during operating hours.
                      </p>
                    </div>
                  </div>

                  {/* Right Form Column */}
                  <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Alex Morgan"
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
                          placeholder="alex@domain.com"
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
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Interested Track
                      </label>
                      <select
                        value={formData.track}
                        onChange={(e) =>
                          setFormData({ ...formData, track: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#140e29] border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white text-sm transition-colors"
                      >
                        <option value="Autonomous Performance Marketing">
                          Autonomous AI Performance Marketing &amp; Media Buying
                        </option>
                        <option value="Generative Creative Direction">
                          Generative Creative Direction &amp; Viral Hook Engineering
                        </option>
                        <option value="Algorithmic Growth & SEO">
                          Next-Gen Algorithmic Growth &amp; AI Search (GEO)
                        </option>
                        <option value="Full-Stack Marketing Automation">
                          Full-Stack Marketing Automation &amp; Retention
                        </option>
                        <option value="General Guidance">
                          Not sure yet — I need career counseling
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Goals or Questions
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your background or what you want to achieve..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.01] active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Book Free 1-on-1 Consultation</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

