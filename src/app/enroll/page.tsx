"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

function EnrollForm() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get("course") || "ai-performance";

  const [selectedTrack, setSelectedTrack] = useState(initialCourse);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "1-3 years",
    notes: "",
  });

  const tracks = [
    {
      id: "ai-performance",
      title: "Autonomous AI Performance Marketing",
      duration: "12 Weeks",
      price: "$699",
      seats: 6,
    },
    {
      id: "generative-creative",
      title: "Generative AI Creative Direction",
      duration: "8 Weeks",
      price: "$599",
      seats: 8,
    },
    {
      id: "ai-seo",
      title: "Generative Engine Optimization (GEO)",
      duration: "6 Weeks",
      price: "$549",
      seats: 11,
    },
    {
      id: "marketing-data",
      title: "Marketing Data Science & LLM Engineering",
      duration: "10 Weeks",
      price: "$749",
      seats: 4,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enroll-section" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Summary & Guarantee */}
        <FadeIn direction="right" distance={30} className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b7367] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              {"// APPLICATION & ONBOARDING"}
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Fast-Track Cohort Application
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Secure your placement in the upcoming academic season. All applications are reviewed by our faculty board within 24 hours.
            </p>
          </div>

          {/* Track Selection Cards */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              Select Your Academic Track
            </span>
            <StaggerContainer staggerDelay={0.06} className="space-y-3">
              {tracks.map((track) => (
                <StaggerItem key={track.id}>
                  <label
                    onClick={() => setSelectedTrack(track.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedTrack === track.id
                        ? "bg-emerald-50/50 border-[#0b574c] shadow-sm"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="track"
                        checked={selectedTrack === track.id}
                        onChange={() => setSelectedTrack(track.id)}
                        className="accent-[#0b574c] w-4 h-4 cursor-pointer"
                      />
                      <div>
                        <div className="text-sm font-bold text-slate-900">{track.title}</div>
                        <div className="text-xs text-slate-500 font-mono">{track.duration} • {track.seats} seats remaining</div>
                      </div>
                    </div>
                    <div className="text-base font-black text-[#0b574c]">{track.price}</div>
                  </label>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0b574c]" />
              <span>What You Receive Immediately</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b574c]" />
                <span>Instant Sandbox Access &amp; Cloud Budget Emulator</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b574c]" />
                <span>Orientation Call with Program Director</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b574c]" />
                <span>Lifetime Alumni Network &amp; Discord VIP Chamber</span>
              </li>
            </ul>
          </div>
        </FadeIn>

        {/* Right: Application Form */}
        <FadeIn direction="left" distance={30} delay={0.15} className="lg:col-span-7">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-[#0b574c] border border-emerald-200 flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">Application Received</h4>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed mb-8">
                  Welcome to ExEdu. Your provisional registration for the selected track has been recorded. Check your inbox for confirmation and sandbox credentials.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-[#0b574c] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#063f37] transition-all cursor-pointer"
                >
                  Modify Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">
                    Student Information
                  </h4>
                  <p className="text-xs text-slate-500">
                    Provide your professional details to initiate your application.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Alex"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Mercer"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                    Marketing / Technical Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm"
                  >
                    <option value="Beginner (< 1 year)">Beginner (&lt; 1 year in marketing)</option>
                    <option value="1-3 years">1–3 years (Media Buyer / Growth Specialist)</option>
                    <option value="3-5 years">3–5 years (Senior Growth Lead / Agency)</option>
                    <option value="5+ years">5+ years (Director / VP / Founder)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                    Primary Objective or Specific Goals
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us what you want to achieve with ExEdu..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#0b574c] hover:bg-[#063f37] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0b574c]/25 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                >
                  <span>Submit Cohort Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-[#0b574c] selection:text-white">
      <main className="flex-1 w-full">
        {/* Reusable Notched Hero Banner */}
        <PageBanner
          bannerTitle="ENROLL NOW"
          imageSrc="/compass-hero-cropped.jpg"
          imageAlt="Compass held in hand against pine forest"
          headingLine1="Discover the Thrill of"
          headingLine2="Adventure with Thrilliz"
          targetId="enroll-section"
        />

        <Suspense fallback={<div className="py-20 text-center">Loading enrollment...</div>}>
          <EnrollForm />
        </Suspense>
      </main>

      {/* Footer in light mode */}
      <Footer theme="light" />
    </div>
  );
}
