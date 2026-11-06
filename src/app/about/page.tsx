"use client";

import React from "react";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  ScaleIn,
  CountUp,
} from "@/components/animations";
import {
  TrendingUp,
  ShieldCheck,
  Target,
  Globe2,
  Compass,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Placement Rate", end: 98.4, decimals: 1, suffix: "%", detail: "In Top Global Agencies & Brands" },
    { label: "Alumni Worldwide", end: 4800, decimals: 0, suffix: "+", detail: "Across 42 Countries" },
    { label: "Live Ad Spend Sandbox", end: 10, decimals: 0, prefix: "$", suffix: "M+", detail: "Hands-on real budget sandbox" },
    { label: "Average ROAS Lift", end: 380, decimals: 0, suffix: "%", detail: "Within 60 days of graduation" },
  ];

  const pillars = [
    {
      icon: Target,
      title: "Real Capital, Zero Fake Demos",
      description:
        "Every student operates inside our proprietary sandbox executing real-time ad allocation across Meta Advantage+, Google PMax, and TikTok Smart+ with simulated multi-million dollar liquidity.",
    },
    {
      icon: TrendingUp,
      title: "Algorithmic Media Buying",
      description:
        "We reject manual button clicking. You learn to build automated bid shaders, predictive LTV models, and server-side tracking pipelines that scale predictably.",
    },
    {
      icon: ShieldCheck,
      title: "1-on-1 Executive Mentorship",
      description:
        "Direct weekly coaching from VP-level growth directors managing $500k+/month in live media spend. Your portfolio is reviewed under real institutional agency standards.",
    },
    {
      icon: Globe2,
      title: "Global Expedition & Remote Network",
      description:
        "Join a global fraternity of high-performing growth marketers, media buyers, and founders across North America, Europe, Asia, and the Middle East.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-[#0b574c] selection:text-white">
      <main className="flex-1 w-full">
        {/* Reusable Notched Hero Banner */}
        <PageBanner
          bannerTitle="ABOUT US"
          imageSrc="/compass-hero-cropped.jpg"
          imageAlt="Compass held in hand against pine forest"
          headingLine1="Discover the Thrill of"
          headingLine2="Adventure with Thrilliz"
          targetId="page-content"
        />

        {/* Page Content Section */}
        <section id="page-content" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Introductory Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <FadeIn direction="up" distance={30} className="lg:col-span-7">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b7367] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-4">
                {"// OUR INSTITUTIONAL PURPOSE"}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-6">
                Bridging The Gap Between Conventional Theory And Autonomous Frontier Performance
              </h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Founded by elite growth engineers and veteran media operators, ExEdu was created to address a critical vacuum in modern technical education: outdated university curriculums and superficial online video courses that fail to prepare talent for real high-stakes marketing environments.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Whether steering multi-million-dollar automated ad spend or navigating unexplored horizons on outdoor expeditions with Thrilliz, our graduates operate with unshakeable conviction, deep systems thinking, and razor-sharp execution.
              </p>
            </FadeIn>

            <FadeIn direction="left" distance={30} delay={0.15} className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#0b574c]/10 text-[#0b574c] flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">The 2026 Charter</h4>
                  <p className="text-xs text-slate-500 font-mono">Verified Academic Track</p>
                </div>
              </div>
              <ul className="flex flex-col gap-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0b574c] shrink-0 mt-0.5" />
                  <span>100% cloud sandbox access with live simulated budget engine</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0b574c] shrink-0 mt-0.5" />
                  <span>Curriculum updated bi-weekly based on algorithmic API changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0b574c] shrink-0 mt-0.5" />
                  <span>Direct hiring pipeline with 120+ vetted global enterprise partners</span>
                </li>
              </ul>
            </FadeIn>
          </div>

          {/* Institutional Stats Grid */}
          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat, idx) => (
              <StaggerItem key={idx} scale>
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#0b574c]/40 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-black text-[#0b574c] mb-2 tracking-tight">
                    <CountUp
                      end={stat.end}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={1.8}
                    />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{stat.detail}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Four Core Pillars */}
          <div className="mb-24">
            <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b7367] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
                {"// WHY OPERATORS CHOOSE US"}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Built For Those Who Demand Mastery Over Mediocrity
              </h3>
            </FadeIn>

            <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <StaggerItem key={idx} scale>
                    <TiltCard
                      maxRotation={5}
                      glowColor="rgba(11, 87, 76, 0.15)"
                      className="h-full rounded-3xl"
                    >
                      <div className="h-full p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#0b574c]/50 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0b574c] border border-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0b574c] group-hover:text-white transition-all">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0b574c] transition-colors">
                            {pillar.title}
                          </h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Bottom CTA Card */}
          <ScaleIn initialScale={0.96} duration={0.8} className="rounded-3xl bg-gradient-to-r from-[#0b574c] to-[#063f37] p-8 sm:p-12 lg:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-300 mb-3 block">
                {"// READY TO ELEVATE YOUR STANDARD?"}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4 leading-tight">
                Join The Next Elite Cohort of Operators
              </h3>
              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                Admissions are strictly application-only with capped enrollment per track to maintain our rigorous mentor-to-student ratio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <Link
                href="/enroll"
                className="px-8 py-4 rounded-full bg-white text-[#0b574c] font-bold text-xs uppercase tracking-wider hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all text-center shadow-lg"
              >
                Apply Online Now
              </Link>
              <Link
                href="/courses"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs uppercase tracking-wider text-center transition-all"
              >
                Explore Curriculums
              </Link>
            </div>
          </ScaleIn>
        </section>
      </main>

      {/* Footer in light mode */}
      <Footer theme="light" />
    </div>
  );
}
