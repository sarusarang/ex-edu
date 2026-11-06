"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations";
import { Phone, Mail, Compass } from "lucide-react";

interface FooterProps {
  theme?: "light" | "dark";
}

export default function Footer({ theme = "light" }: FooterProps) {
  const isLight = theme === "light";

  return (
    <footer
      className={`relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t transition-colors ${
        isLight
          ? "bg-slate-50 border-slate-200/80 text-slate-600"
          : "bg-[#05040a] border-purple-500/15 text-slate-400"
      }`}
    >
      <div className="max-w-[1320px] mx-auto">
        <FadeIn direction="up" distance={20} duration={0.7} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-block relative h-10 w-36">
              <Image
                src="/ex_edu_logo-03.png"
                alt="ExEdu Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className={`text-sm leading-relaxed max-w-sm ${isLight ? "text-slate-600" : "text-slate-400"}`}>
              The premier hybrid AI digital marketing institute and expedition learning hub. Empowering the next generation of marketing leaders and modern explorers.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className={`px-2.5 py-1 rounded-full border ${
                isLight
                  ? "bg-emerald-50 text-[#0b574c] border-emerald-200"
                  : "bg-purple-500/15 text-purple-300 border-purple-500/30"
              }`}>
                ● 2026 Admissions Active
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#0b574c] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0b574c] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#0b574c] transition-colors">
                  Courses &amp; Tracks
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0b574c] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/enroll" className="hover:text-[#0b574c] transition-colors">
                  Apply Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
              Programs
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/courses" className="hover:text-[#0b574c] transition-colors">
                  Autonomous AI Performance
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#0b574c] transition-colors">
                  Generative Creative Direction
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#0b574c] transition-colors">
                  AI Search &amp; GEO
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#0b574c] transition-colors">
                  LLM Marketing Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0b574c]" />
                <span>admissions@exedu.ai</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0b574c]" />
                <span>+1 (800) 942-EXEDU</span>
              </li>
              <li className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#0b574c]" />
                <span>San Francisco • Global Remote</span>
              </li>
            </ul>
          </div>
        </FadeIn>

        {/* Bottom bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
          isLight ? "border-slate-200 text-slate-500" : "border-purple-500/15 text-slate-500"
        }`}>
          <div>
            <span>© 2026 ExEdu Inc. &amp; Thrilliz Expeditions. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:underline">Privacy Policy</Link>
            <Link href="/about" className="hover:underline">Terms of Service</Link>
            <Link href="/contact" className="hover:underline">Admissions Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
