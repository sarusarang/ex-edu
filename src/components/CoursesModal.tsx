"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Brain,
  Video,
  Search,
  Cpu,
  CheckCircle,
} from "lucide-react";

interface CoursesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse?: (courseTitle: string) => void;
}

const coursesData = [
  {
    id: "ai-performance",
    badge: "Flagship Cohort",
    badgeColor: "from-purple-500 to-indigo-500",
    title: "Autonomous AI Performance Marketing & Media Buying",
    category: "Paid Growth & AI Optimization",
    duration: "12 Weeks • Live + Lab Simulations",
    level: "Intermediate to Advanced",
    adSpendSimulation: "$5,000,000 Sandbox Budget",
    icon: TrendingUp,
    description:
      "Master predictive bidding algorithms, autonomous Advantage+ campaigns, and deep multi-touch attribution models to engineer consistent 5X–10X ROAS at scale.",
    modules: [
      "Algorithmic Media Buying on Meta Advantage+ & Google Performance Max",
      "Predictive AI Budget Allocators & Real-Time Bid Shaders",
      "Server-side CAPI, BigQuery Analytics & First-Party Data Foundations",
      "Scaling Past $50k/day without Creative or Audience Fatigue",
    ],
    tools: ["Meta Ads Manager", "Google PMax", "TikTok Smart+ Ads", "Triple Whale", "Northbeam"],
    price: "$699",
    seatsLeft: 6,
  },
  {
    id: "generative-creative",
    badge: "High Demand",
    badgeColor: "from-fuchsia-500 to-pink-500",
    title: "Generative Creative Direction & Viral Hook Engineering",
    category: "AI Content & High-Converting Creatives",
    duration: "8 Weeks • Hands-on Creative Sprint",
    level: "All Levels Welcome",
    adSpendSimulation: "10,000+ AI Video Ad Generations",
    icon: Video,
    description:
      "Deploy AI workflows with Midjourney, Runway Gen-3, Kling, and ElevenLabs to produce 50+ hyper-converting video and static hooks per day that outperform expensive agency shoots.",
    modules: [
      "Reverse-Engineering TikTok & Reels Viral Algorithmic Hooks",
      "Prompt Engineering for Photorealistic Brand & Product Asset Generation",
      "Automated UGC Clones, AI Voice Synthesizers & Dynamic Lip-Syncing",
      "High-Velocity Creative Testing Matrices & Statistical Significance",
    ],
    tools: ["Runway Gen-3", "Midjourney v6", "ElevenLabs", "CapCut AI", "Claude 3.7 / GPT-4o"],
    price: "$549",
    seatsLeft: 9,
  },
  {
    id: "algorithmic-seo",
    badge: "Future-Proof",
    badgeColor: "from-emerald-500 to-teal-500",
    title: "Next-Gen Algorithmic Growth & AI Search Dominance",
    category: "Organic Discovery & GEO (Generative Engine Optimization)",
    duration: "10 Weeks • Technical & Strategy",
    level: "Beginner to Intermediate",
    adSpendSimulation: "1M+ Organic Impressions Case Studies",
    icon: Search,
    description:
      "Traditional SEO is evolving into GEO. Learn how to rank inside SearchGPT, Perplexity AI, Google AI Overviews, and algorithmic social search feeds.",
    modules: [
      "GEO: Optimizing Brand Entities for LLMs, Perplexity & AI Citations",
      "Semantic Topic Graphs & Programmatic Topical Authority at Scale",
      "Technical Core Web Vitals, Structured Schema & Knowledge Graphs",
      "Autonomous Python-powered Keyword Clustering & Content Pipelines",
    ],
    tools: ["SearchGPT", "Perplexity Pro", "Ahrefs", "Google Search Console", "Python Automation"],
    price: "$599",
    seatsLeft: 12,
  },
  {
    id: "growth-automation",
    badge: "Enterprise",
    badgeColor: "from-blue-500 to-cyan-500",
    title: "Full-Stack Marketing Automation & Retention Engineering",
    category: "Lifecycle & RevOps Systems",
    duration: "8 Weeks • Architecture & Automations",
    level: "Intermediate",
    adSpendSimulation: "$10M+ Enterprise Funnel Frameworks",
    icon: Cpu,
    description:
      "Build zero-churn retention loops, AI email & WhatsApp conversational agents, and automated lead scoring that converts high-ticket pipeline 24/7.",
    modules: [
      "AI-Agentic CRM Pipelines with HubSpot & Make.com / n8n",
      "Hyper-Personalized Dynamic Email Sequences with Predictive Send Time",
      "Conversational AI Bots for High-Ticket B2B & E-Commerce Consultations",
      "LTV Maximization: Cohort Churn Forecasting & Behavioral Triggers",
    ],
    tools: ["HubSpot", "Klaviyo", "n8n / Make", "OpenAI Assistants", "Segment CDP"],
    price: "$629",
    seatsLeft: 8,
  },
];

export default function CoursesModal({
  isOpen,
  onClose,
  onSelectCourse,
}: CoursesModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Paid Growth & AI Optimization", "AI Content & High-Converting Creatives", "Organic Discovery & GEO (Generative Engine Optimization)", "Lifecycle & RevOps Systems"];

  const filteredCourses =
    selectedCategory === "All"
      ? coursesData
      : coursesData.filter((c) => c.category === selectedCategory);

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
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0c0919] border border-purple-500/30 shadow-[0_0_80px_rgba(124,58,237,0.3)] overflow-hidden z-10"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 border-b border-purple-500/20 bg-[#0c0919]/90 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    ExEdu Hybrid AI Curriculum
                    <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      2026 Editions
                    </span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    Engineered for high-performing modern digital marketers and agencies.
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

            {/* Category Filter */}
            <div className="px-6 py-3 border-b border-purple-900/20 bg-[#090714] overflow-x-auto flex items-center gap-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                      : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat === "All" ? "All Tracks" : cat.split("&")[0]}
                </button>
              ))}
            </div>

            {/* Course Cards Grid */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map((course) => {
                  const Icon = course.icon;
                  return (
                    <div
                      key={course.id}
                      className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)]"
                    >
                      <div>
                        {/* Top Badges */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`px-2.5 py-1 text-[10px] font-mono font-semibold rounded-full bg-gradient-to-r ${course.badgeColor} text-white shadow-sm`}
                          >
                            {course.badge}
                          </span>
                          <span className="text-[11px] font-mono text-purple-300 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {course.duration}
                          </span>
                        </div>

                        {/* Title */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-300 group-hover:scale-105 transition-transform">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors">
                              {course.title}
                            </h3>
                            <span className="text-xs text-purple-400 font-mono">
                              {course.category}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {course.description}
                        </p>

                        {/* Modules preview */}
                        <div className="space-y-1.5 mb-4 p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                            Key Core Pillars:
                          </span>
                          {course.modules.slice(0, 3).map((mod, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-[11px] text-slate-300"
                            >
                              <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{mod}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tools Pill Cloud */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {course.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer: Price + CTA */}
                      <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xl font-black text-white">
                              {course.price}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400">
                              / Complete Track
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-amber-400">
                            🔥 Only {course.seatsLeft} spots remaining
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            onClose();
                            if (onSelectCourse) onSelectCourse(course.title);
                          }}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
                        >
                          <span>Apply Now</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

