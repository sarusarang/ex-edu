"use client";

import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "Autonomous AI Performance Marketing",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-[#0b574c] selection:text-white">
      <main className="flex-1 w-full">
        {/* Reusable Notched Hero Banner */}
        <PageBanner
          bannerTitle="CONTACT US"
          imageSrc="/compass-hero-cropped.jpg"
          imageAlt="Compass held in hand against pine forest"
          headingLine1="Discover the Thrill of"
          headingLine2="Adventure with Thrilliz"
          targetId="contact-section"
        />

        {/* Content Section */}
        <section id="contact-section" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Support Channels */}
            <FadeIn direction="right" distance={30} className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b7367] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
                  {"// ADMISSIONS & EXPEDITIONS DESK"}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Connect Directly With Our Program Directors
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  Whether you have questions about live ad spend simulation budgets, cohort schedules, or enterprise team enrollment, our admissions team replies within 4 business hours.
                </p>

                <StaggerContainer staggerDelay={0.08} className="flex flex-col gap-4">
                  <StaggerItem>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0b574c]/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b574c] flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-500 uppercase">Direct Email</div>
                        <a href="mailto:admissions@exedu.ai" className="text-sm font-bold text-slate-900 hover:text-[#0b574c] transition-colors">
                          admissions@exedu.ai
                        </a>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0b574c]/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b574c] flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-500 uppercase">Admissions Hotline</div>
                        <a href="tel:+18009423933" className="text-sm font-bold text-slate-900 hover:text-[#0b574c] transition-colors">
                          +1 (800) 942-EXEDU (942-3933)
                        </a>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0b574c]/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b574c] flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-500 uppercase">Global Headquarters</div>
                        <div className="text-sm font-bold text-slate-900">
                          100 Montgomery St, Financial District, San Francisco, CA
                        </div>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0b574c]/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b574c] flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-500 uppercase">Admissions Desk Hours</div>
                        <div className="text-sm font-bold text-slate-900">
                          Monday – Friday • 8:00 AM – 7:00 PM EST
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Fast guarantee note */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-center gap-3 text-xs text-[#0b574c] font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Zero spam policy. Your contact details are kept strictly confidential.</span>
              </div>
            </FadeIn>

            {/* Right: Contact Form */}
            <FadeIn direction="left" distance={30} delay={0.15} className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-[#0b574c] border border-emerald-200 flex items-center justify-center mb-6 shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-2">Inquiry Submitted Successfully</h4>
                    <p className="text-sm text-slate-600 max-w-md leading-relaxed mb-8">
                      Thank you for contacting ExEdu &amp; Thrilliz. An admissions director will review your inquiry and reach out via email within 4 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 rounded-full bg-[#0b574c] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#063f37] transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-1">
                        Send An Official Inquiry
                      </h4>
                      <p className="text-xs text-slate-500">
                        Fill in your details below and an admissions director will assist you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Sarah Jenkins"
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@agency.com"
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                          Program of Interest
                        </label>
                        <select
                          value={formData.track}
                          onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm"
                        >
                          <option value="Autonomous AI Performance Marketing">Autonomous AI Performance Marketing</option>
                          <option value="Generative Creative Direction">Generative Creative Direction</option>
                          <option value="Generative Engine Optimization (GEO)">Generative Engine Optimization (GEO)</option>
                          <option value="Marketing Data Science & LLM Engineering">Marketing Data Science &amp; LLM Engineering</option>
                          <option value="Enterprise Team Training">Enterprise Team Training</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono font-bold uppercase text-slate-700 block mb-2">
                        How can we help? (Optional)
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your background, goals, or any specific questions regarding our curriculum..."
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b574c]/30 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#0b574c] hover:bg-[#063f37] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0b574c]/25 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Admissions</span>
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Footer in light mode */}
      <Footer theme="light" />
    </div>
  );
}
