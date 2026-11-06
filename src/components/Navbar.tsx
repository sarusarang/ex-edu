"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
  Phone,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export interface NavbarProps {
  onOpenCourses?: () => void;
  onOpenAbout?: () => void;
  onOpenContact?: () => void;
  onOpenEnroll?: () => void;
}

export default function Navbar({
  onOpenCourses,
  onOpenAbout,
  onOpenContact,
  onOpenEnroll,
}: NavbarProps = {}) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Optimistic active path for instant 0ms tab gliding when user clicks
  const [optimisticPath, setOptimisticPath] = useState<string | null>(null);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Sync state during render when pathname updates (official React recommended pattern)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOptimisticPath(null);
  }

  const currentPath = optimisticPath ?? pathname ?? "/";

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about", action: onOpenAbout },
    { label: "Courses", href: "/courses", action: onOpenCourses, badge: "AI 2026" },
    { label: "Contact Us", href: "/contact", action: onOpenContact },
  ];

  const isItemActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setOptimisticPath(href);
    router.push(href);
  };

  const handleEnrollClick = () => {
    setMobileMenuOpen(false);
    if (onOpenEnroll) {
      onOpenEnroll();
    } else {
      router.push("/enroll");
    }
  };

  // While scrolling on ANY page, navbar is white
  const isWhiteNav = scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isWhiteNav ? "py-3" : "py-5 sm:py-6"
        }`}
      >
        {/* Layer 1: Dark inset gradient at top (smooth fade out when scrolling down) */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-transparent pointer-events-none transition-opacity duration-500 ease-out ${
            isWhiteNav ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Layer 2: White glass bar when scrolled (smooth fade in when scrolling down) */}
        <div
          className={`absolute inset-0 bg-white/95 backdrop-blur-xl shadow-md shadow-slate-200/40 pointer-events-none transition-opacity duration-500 ease-out ${
            isWhiteNav ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Layer 3: Clean bottom divider line (smoothly fades out when scrolling back up with zero line flash) */}
        <div
          className={`absolute bottom-0 inset-x-0 h-px bg-slate-200/80 pointer-events-none transition-opacity duration-500 ease-out ${
            isWhiteNav ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Full-width content container */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-10 lg:px-14 flex items-center justify-between">
          {/* Left: Clean Brand Logo */}
          <Link
            href="/"
            onClick={() => setOptimisticPath("/")}
            className="group flex items-center transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <div className="relative h-9 md:h-11 w-32 md:w-36 flex items-center">
              <Image
                src="/ex_edu_logo-03.png"
                alt="ExEdu"
                fill
                className={`object-contain object-left transition-all duration-500 ${
                  isWhiteNav
                    ? "filter drop-shadow-[0_2px_10px_rgba(168,85,247,0.25)]"
                    : "filter drop-shadow-[0_0_18px_rgba(168,85,247,0.5)]"
                }`}
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Nav Links (No outer bubble wrap container!) */}
          <LayoutGroup id="desktop-navbar">
            <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 lg:gap-2">
              {navItems.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    prefetch={true}
                    onClick={(e) => {
                      if (pathname === item.href) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        return;
                      }
                      // Immediately glide the active bubble to this tab with 0ms delay
                      setOptimisticPath(item.href);
                    }}
                    className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors duration-200 flex items-center gap-1.5 cursor-pointer select-none ${
                      active
                        ? "text-white"
                        : isWhiteNav
                          ? "text-slate-800 hover:text-purple-600 hover:bg-slate-100/70"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_20px_rgba(147,51,234,0.45)]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                          mass: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10 transition-colors duration-200">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span
                        className={`relative z-10 px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-tight rounded transition-colors duration-200 ${
                          active
                            ? "bg-white/20 text-white border border-white/30"
                            : isWhiteNav
                              ? "bg-purple-100 text-purple-700 border border-purple-200"
                              : "bg-purple-900/60 text-purple-200 border border-purple-400/35"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>

          {/* Right: Main // ENROLL NOW */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/enroll"
              prefetch={true}
              onClick={() => setOptimisticPath("/enroll")}
              className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right text-white font-semibold text-xs tracking-wider uppercase transition-all duration-500 shadow-[0_0_24px_rgba(124,58,237,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.75)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="font-mono text-purple-200 opacity-90">{"//"}</span>
              <span>Enroll Now</span>
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-purple-900 transition-colors duration-200">
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Mobile Header Right */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/enroll"
              onClick={() => {
                setMobileMenuOpen(false);
                setOptimisticPath("/enroll");
              }}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-[11px] tracking-wide uppercase flex items-center gap-1.5 shadow-md shadow-purple-600/30 cursor-pointer"
            >
              <span>Enroll</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer shadow-sm ${
                isWhiteNav
                  ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                  : "bg-black/40 border-white/20 text-white hover:bg-black/60 backdrop-blur-md"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const active = isItemActive(item.href);
                  return (
                    <motion.button
                      key={item.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.06 }}
                      onClick={() => handleMobileNavClick(item.href)}
                      className={`flex items-center justify-between p-4 rounded-2xl text-left transition-all group ${
                        active
                          ? "bg-purple-600/20 border border-purple-500/40 text-white"
                          : "bg-white/[0.03] hover:bg-purple-600/10 border border-white/[0.05] hover:border-purple-500/30 text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-purple-400">0{index + 1}</span>
                        <span className="text-lg font-semibold tracking-wide uppercase">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                    </motion.button>
                  );
                })}
              </div>

              {/* Quick Highlight Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-mono font-bold text-purple-200 uppercase tracking-wider">
                    Next-Gen Marketer Guarantee
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Master live AI media buying, predictive ROAS algorithms, and $10M+ simulated ad spend.
                </p>
                <div className="mt-3 flex items-center gap-4 text-[11px] text-purple-300 font-mono">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 98.4% Placement
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-purple-400" /> 10X ROAS Framework
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleEnrollClick}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 cursor-pointer"
              >
                <span>Apply For Next Cohort</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push("/contact");
                }}
                className="w-full py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-medium tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>Talk with an Admissions Mentor</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
