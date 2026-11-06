"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CoursesModal from "@/components/CoursesModal";
import AboutModal from "@/components/AboutModal";
import ContactModal from "@/components/ContactModal";
import EnrollModal from "@/components/EnrollModal";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  ScaleIn,
} from "@/components/animations";
import {
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  Video,
  Search,
  Cpu,
} from "lucide-react";

export default function Home() {
  const [coursesModalOpen, setCoursesModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string | undefined>(undefined);

  const handleOpenEnrollWithCourse = (courseTitle: string) => {
    setSelectedCourseForEnroll(courseTitle);
    setEnrollModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#07050f] text-slate-100 flex flex-col justify-between selection:bg-purple-600 selection:text-white">
      {/* 2. Hero Section */}
      <main className="flex-1 w-full">
        <HeroSection
          onOpenCourses={() => setCoursesModalOpen(true)}
          onOpenEnroll={() => {
            setSelectedCourseForEnroll(undefined);
            setEnrollModalOpen(true);
          }}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* 3. Interactive Quick Curriculum Preview Section */}
        <section id="courses" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <FadeIn direction="up" distance={30} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                  {"// 2026 ACADEMIC TRACKS"}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Hybrid AI Education
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Engineered For The New Era of Digital Marketing
              </h2>
            </div>

            <button
              onClick={() => setCoursesModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 hover:text-white transition-colors group"
            >
              <span>Explore Full Syllabus &amp; Sandbox Specs</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.12}
            delayChildren={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Track 1 */}
            <StaggerItem scale>
              <TiltCard
                maxRotation={6}
                glowColor="rgba(168, 85, 247, 0.25)"
                className="h-full rounded-3xl"
              >
                <div className="h-full group relative p-6 rounded-3xl bg-[#0e0a20]/90 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(124,58,237,0.25)] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 group-hover:border-purple-400 transition-all">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-semibold block mb-1">
                      Paid Growth • 12 Weeks
                    </span>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                      Autonomous AI Performance Marketing
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Predictive bidding, Meta Advantage+, Google PMax &amp; first-party CAPI server architecture.
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-purple-500/15 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">$699</span>
                    <button
                      onClick={() => handleOpenEnrollWithCourse("Autonomous AI Performance Marketing & Media Buying")}
                      className="px-3.5 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1 hover:shadow-lg hover:shadow-purple-600/30"
                    >
                      <span>Enroll</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>

            {/* Track 2 */}
            <StaggerItem scale>
              <TiltCard
                maxRotation={6}
                glowColor="rgba(217, 70, 239, 0.25)"
                className="h-full rounded-3xl"
              >
                <div className="h-full group relative p-6 rounded-3xl bg-[#0e0a20]/90 border border-purple-500/20 hover:border-fuchsia-500/60 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(217,70,239,0.25)] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-fuchsia-950/60 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 mb-5 group-hover:scale-110 group-hover:border-fuchsia-400 transition-all">
                      <Video className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-fuchsia-400 font-semibold block mb-1">
                      Creative Labs • 8 Weeks
                    </span>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-fuchsia-200 transition-colors">
                      Generative Creative &amp; Viral Hook Engineering
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Produce 50+ high-converting static &amp; video ad hooks daily with Runway, Midjourney &amp; Kling.
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-purple-500/15 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">$549</span>
                    <button
                      onClick={() => handleOpenEnrollWithCourse("Generative Creative Direction & Viral Hook Engineering")}
                      className="px-3.5 py-1.5 rounded-xl bg-fuchsia-600/30 hover:bg-fuchsia-600 text-fuchsia-200 hover:text-white text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1 hover:shadow-lg hover:shadow-fuchsia-600/30"
                    >
                      <span>Enroll</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>

            {/* Track 3 */}
            <StaggerItem scale>
              <TiltCard
                maxRotation={6}
                glowColor="rgba(16, 185, 129, 0.25)"
                className="h-full rounded-3xl"
              >
                <div className="h-full group relative p-6 rounded-3xl bg-[#0e0a20]/90 border border-purple-500/20 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(16,185,129,0.25)] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 group-hover:border-emerald-400 transition-all">
                      <Search className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                      Organic &amp; GEO • 10 Weeks
                    </span>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-200 transition-colors">
                      Algorithmic SEO &amp; SearchGPT Dominance
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Generative Engine Optimization (GEO), topical entity graphs, and programmatic ranking.
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-purple-500/15 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">$599</span>
                    <button
                      onClick={() => handleOpenEnrollWithCourse("Next-Gen Algorithmic Growth & AI Search Dominance")}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1 hover:shadow-lg hover:shadow-emerald-600/30"
                    >
                      <span>Enroll</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>

            {/* Track 4 */}
            <StaggerItem scale>
              <TiltCard
                maxRotation={6}
                glowColor="rgba(59, 130, 246, 0.25)"
                className="h-full rounded-3xl"
              >
                <div className="h-full group relative p-6 rounded-3xl bg-[#0e0a20]/90 border border-purple-500/20 hover:border-blue-500/60 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(59,130,246,0.25)] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 group-hover:border-blue-400 transition-all">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
                      RevOps &amp; Funnels • 8 Weeks
                    </span>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      Full-Stack Marketing Automation
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Agentic CRM pipelines with HubSpot &amp; n8n, AI lead scoring &amp; retention loops.
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-purple-500/15 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">$629</span>
                    <button
                      onClick={() => handleOpenEnrollWithCourse("Full-Stack Marketing Automation & Retention Engineering")}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-600/30 hover:bg-blue-600 text-blue-200 hover:text-white text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1 hover:shadow-lg hover:shadow-blue-600/30"
                    >
                      <span>Enroll</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* 4. Institutional Standards & Placement Guarantee */}
        <section id="about" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-purple-500/15">
          <ScaleIn initialScale={0.96} duration={0.8} className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-950/40 via-[#100a26] to-indigo-950/30 border border-purple-500/25 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-purple-950/20">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
                {"// INSTITUTIONAL ACCREDITATION & OUTCOMES"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Learn with $10M+ in Live Ad Budgets. Graduate as a Top 1% Marketing Strategist.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                ExEdu is built by active agency founders and media buyers managing high-volume global budgets. Every student builds a proven, verifiable campaign portfolio verified on live ad platforms.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  1-on-1 Senior Mentor Coaching
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Direct Placement Pipeline to 140+ Agencies
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Lifetime Alumni Community Access
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={() => setEnrollModalOpen(true)}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Apply For Next Batch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setContactModalOpen(true)}
                className="px-6 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/[0.08] transition-all"
              >
                <span>Book 1:1 Syllabus Call</span>
              </button>
            </div>
          </ScaleIn>
        </section>
      </main>

      {/* 5. Minimalist Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 bg-[#05040a]">
        <FadeIn direction="up" duration={0.6} className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-wider">EXEDU</span>
            <span>• Hybrid AI Digital Marketing Institute</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-purple-300 transition-colors">
              About
            </Link>
            <Link href="/courses" className="hover:text-purple-300 transition-colors">
              Curriculum
            </Link>
            <Link href="/contact" className="hover:text-purple-300 transition-colors">
              Admissions Desk
            </Link>
            <span>© 2026 ExEdu Inc. All rights reserved.</span>
          </div>
        </FadeIn>
      </footer>

      {/* 6. Interactive Modals */}
      <CoursesModal
        isOpen={coursesModalOpen}
        onClose={() => setCoursesModalOpen(false)}
        onSelectCourse={handleOpenEnrollWithCourse}
      />
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenEnroll={() => setEnrollModalOpen(true)}
      />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      <EnrollModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        defaultCourse={selectedCourseForEnroll}
      />
    </div>
  );
}
