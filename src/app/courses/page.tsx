"use client";

import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  ScaleIn,
} from "@/components/animations";
import {
  TrendingUp,
  Video,
  Search,
  ArrowUpRight,
  CheckCircle,
  Cpu,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const courses = [
    {
      id: "ai-performance",
      badge: "Flagship Cohort",
      title: "Autonomous AI Performance Marketing & Media Buying",
      category: "Paid Growth",
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
      title: "Generative AI Creative Direction & Automated Ad Production",
      category: "Creative Strategy",
      duration: "8 Weeks • Studio Intensive",
      level: "All Experience Levels",
      adSpendSimulation: "Unlimited High-Res GPU Cloud",
      icon: Video,
      description:
        "Replace slow 30-day production cycles with autonomous generative video workflows. Generate 200+ high-converting multi-hook UGC ads in under 48 hours using leading visual AI pipelines.",
      modules: [
        "Prompt Engineering for Hyper-Realistic Synthetic Avatars (HeyGen, Runway Gen-3)",
        "Automated Hook Variation Testing & Multi-Format Dynamic Resizing",
        "Visual Storytelling Frameworks That Bypass Ad Fatigue Algorithms",
        "Voice Cloning, Multilingual Localization & AI Audio Engineering",
      ],
      tools: ["Midjourney v6", "Runway Gen-3", "HeyGen API", "CapCut Pro", "ElevenLabs"],
      price: "$599",
      seatsLeft: 8,
    },
    {
      id: "ai-seo",
      badge: "Future-Proof",
      title: "Generative Engine Optimization (GEO) & Search Dominance",
      category: "Organic Discovery",
      duration: "6 Weeks • Lab Intensive",
      level: "Intermediate",
      adSpendSimulation: "Real-time Search Graph Analysis",
      icon: Search,
      description:
        "Rank inside ChatGPT, Perplexity, Claude, and Google AI Overviews. Traditional keyword stuffing is dead — conquer semantic entity graphs, citation networks, and knowledge authority nodes.",
      modules: [
        "Semantic Entity Graph Construction & Schema Microdata Architecture",
        "Citation Engineering: How LLMs Index and Reference Authoritative Sources",
        "Google SGE / AI Overviews Reverse Engineering & Visibility Audit",
        "Automated Content Clustering via Python & Vector Embeddings",
      ],
      tools: ["Perplexity Pro", "SurferSEO AI", "Python Scikit", "OpenAI Embeddings", "Ahrefs"],
      price: "$549",
      seatsLeft: 11,
    },
    {
      id: "marketing-data",
      badge: "Technical Heavyweight",
      title: "Marketing Data Science, CAPI & LLM Agent Engineering",
      category: "Engineering & Data",
      duration: "10 Weeks • Code + Architecture",
      level: "Advanced",
      adSpendSimulation: "Full AWS/GCP Marketing Data Warehouse",
      icon: Cpu,
      description:
        "Build customized autonomous marketing agents that monitor ROAS 24/7, pause low-performing ads, draft new angles, and query SQL warehouses through natural language.",
      modules: [
        "First-Party Event Streaming with BigQuery, Segment & Meta Conversions API",
        "Custom Machine Learning LTV & Churn Predictive Modeling",
        "Building Marketing Operations Agents with LangChain & Claude",
        "Marketing Mix Modeling (MMM) via Robyn & LightweightMMM",
      ],
      tools: ["Google BigQuery", "AWS Lambda", "LangChain", "Meta CAPI Gateway", "Snowflake"],
      price: "$749",
      seatsLeft: 4,
    },
  ];

  const categories = ["All", "Paid Growth", "Creative Strategy", "Organic Discovery", "Engineering & Data"];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-[#0b574c] selection:text-white">
      <main className="flex-1 w-full">
        {/* Reusable Notched Hero Banner */}
        <PageBanner
          bannerTitle="COURSES"
          imageSrc="/compass-hero-cropped.jpg"
          imageAlt="Compass held in hand against pine forest"
          headingLine1="Discover the Thrill of"
          headingLine2="Adventure with Thrilliz"
          targetId="courses-section"
        />

        {/* Content Section */}
        <section id="courses-section" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Header & Category Filters */}
          <FadeIn direction="up" distance={25} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b7367] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
                {"// 2026 ACADEMIC TRACKS"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Curated Specialized Programs
              </h3>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0b574c] text-white shadow-md shadow-[#0b574c]/20"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Courses List */}
          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {filteredCourses.map((course) => {
              const Icon = course.icon;
              return (
                <StaggerItem key={course.id} scale>
                  <TiltCard
                    maxRotation={5}
                    glowColor="rgba(11, 87, 76, 0.15)"
                    className="h-full rounded-3xl"
                  >
                    <div className="h-full rounded-3xl border border-slate-200 bg-white hover:border-[#0b574c]/40 hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between group">
                      <div>
                        {/* Top Meta */}
                        <div className="flex items-center justify-between gap-4 mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0b574c] border border-emerald-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0b574c] group-hover:text-white transition-all">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <span className="text-xs font-mono font-bold text-[#1b7367] block uppercase">
                                {course.category}
                              </span>
                              <span className="text-xs text-slate-500 font-mono">
                                {course.duration}
                              </span>
                            </div>
                          </div>

                          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200">
                            {course.seatsLeft} seats remaining
                          </span>
                        </div>

                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0b574c] transition-colors mb-4">
                          {course.title}
                        </h4>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {course.description}
                        </p>

                        {/* Simulation Highlight */}
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-6 flex items-center gap-3 text-xs font-mono text-slate-700">
                          <Sparkles className="w-4 h-4 text-[#0b574c]" />
                          <span>{course.adSpendSimulation}</span>
                        </div>

                        {/* Modules Checklist */}
                        <div className="space-y-2.5 mb-8">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                            Core Syllabus Focus
                          </span>
                          {course.modules.map((mod, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                              <CheckCircle className="w-4 h-4 text-[#0b574c] shrink-0 mt-0.5" />
                              <span>{mod}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer: Tools, Price & Action */}
                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                        <div>
                          <div className="text-2xl font-black text-slate-900">{course.price}</div>
                          <span className="text-[11px] text-slate-500 font-mono">One-time / Certification included</span>
                        </div>

                        <Link
                          href={`/enroll?course=${course.id}`}
                          className="px-6 py-3 rounded-full bg-[#0b574c] hover:bg-[#063f37] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all"
                        >
                          <span>Enroll in Track</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Guarantee Box */}
          <ScaleIn initialScale={0.96} duration={0.8} className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
            <ShieldCheck className="w-12 h-12 text-[#0b574c] mx-auto mb-4" />
            <h4 className="text-2xl font-extrabold text-slate-900 mb-3">
              Institutional Accreditation &amp; Placement Guarantee
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Complete your simulation deliverables and cohort capstone. If you do not secure a qualified performance marketing placement or achieve a verified 2X ROAS lift within 90 days, receive 100% tuition reimbursement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0b574c] hover:underline uppercase tracking-wider"
            >
              <span>Review Placement Policy Specs</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </ScaleIn>
        </section>
      </main>

      {/* Footer in light mode */}
      <Footer theme="light" />
    </div>
  );
}
