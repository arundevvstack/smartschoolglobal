import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Globe, 
  GraduationCap, 
  Smartphone, 
  FileCheck2, 
  Receipt, 
  Bus, 
  Users, 
  Zap,
  Building2,
  Lock,
  BarChart3,
  Server
} from "lucide-react";
import HeroDashboardPreview from "@/components/dashboard/HeroDashboardPreview";
import SchoolTrustTicker from "@/components/schools/SchoolTrustTicker";
import AICommandSimulator from "@/components/ai/AICommandSimulator";
import { ERP_MODULES } from "@/data/modules";
import { ROLE_BENEFITS } from "@/data/features";
import { REGIONS_DATA } from "@/data/regions";
import { FAQS_DATA } from "@/data/faqs";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-14 pb-12 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 5-6 Cols */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-tight hover:bg-blue-100/70 transition-colors cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span>AI-POWERED SCHOOL MANAGEMENT</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                AI-Powered School Management, <br />
                <span className="text-blue-600">Built for a Global Future.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Bring academics, administration, finance, communication and school operations together in one intelligent cloud platform.
              </p>

              {/* Primary & Secondary Buttons with Crisp Hover Effects */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="btn-primary-hover inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-xs"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/platform"
                  className="btn-secondary-hover inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-blue-600 bg-white border border-blue-600 rounded-xl shadow-2xs"
                >
                  <span>Explore the Platform</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  44+ Partner Schools
                </span>
                <span className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Multi-Campus &amp; Multi-Country
                </span>
                <span className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  99.98% Cloud Uptime
                </span>
              </div>

            </div>

            {/* Right 7 Cols: Interactive Dashboard */}
            <div className="lg:col-span-7">
              <HeroDashboardPreview />
            </div>

          </div>

        </div>
      </section>

      {/* 2. 44-SCHOOL TRUST ECOSYSTEM */}
      <SchoolTrustTicker />

      {/* 3. AI-FIRST COMMAND CENTER DEMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider hover:bg-cyan-100 transition-colors cursor-default">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
            Embedded Intelligence Layer
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            AI is Not a Plugin. It's the Nervous System of Your School.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Predict learning regressions before exams happen, eliminate timetable substitution chaos, automate principal briefings, and ensure 100% on-time fleet arrivals.
          </p>
        </div>

        <AICommandSimulator />
      </section>

      {/* 4. CORE PLATFORM PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              End-to-End ERP Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              One Unified System. 24+ Interconnected Modules.
            </h2>
          </div>
          <Link
            href="/platform"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:translate-x-0.5 transition-all group"
          >
            <span>Explore Complete ERP Architecture</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Academic & Learning",
              desc: "Multi-curriculum lesson planning (IB, Cambridge, CBSE, ICSE), dynamic gradebooks, and tamper-proof report cards.",
              href: "/academics",
              icon: GraduationCap,
              badge: "Curriculum Engine"
            },
            {
              title: "Admissions CRM & 360",
              desc: "7-stage digital inquiry funnel, multi-language online forms, instant document OCR, and longitudinal student portfolios.",
              href: "/admissions",
              icon: Users,
              badge: "CRM Pipeline"
            },
            {
              title: "Finance & Fee Ledger",
              desc: "Multi-currency invoicing, installment tracking, sibling concessions, and automated digital bank reconciliations.",
              href: "/finance",
              icon: Receipt,
              badge: "Zero Leakage"
            },
            {
              title: "Mobile App & IoT Fleet",
              desc: "6 tailored user roles, live GPS bus telemetry, RFID student boarding scans, and parent pickup OTP gate verification.",
              href: "/mobile-app",
              icon: Smartphone,
              badge: "6 User Roles"
            }
          ].map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="card-hover-effect p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-slate-50 text-blue-600 rounded-xl border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {col.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {col.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {col.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={col.href}
                    className="text-xs font-bold text-blue-600 flex items-center justify-between group-hover:text-blue-700"
                  >
                    <span>View Module Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ROLE-BASED VALUE PERSPECTIVES */}
      <section className="bg-slate-50/60 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Built for Every Stakeholder
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Designed for the Whole Education Community
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              From the Boardroom to the Classroom, SmartSchool Global empowers every user with purpose-built clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROLE_BENEFITS.slice(0, 3).map((r, i) => (
              <div
                key={i}
                className="card-hover-effect p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider group-hover:text-blue-700 transition-colors">
                    {r.role}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {r.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {r.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {r.headline}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {r.keyOutcomes.slice(0, 3).map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2 hover:text-slate-900 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. REGIONAL CAPABILITY HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Global Architecture • Regional Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Engineered for GCC, India, Africa &amp; Global Networks
              </h2>
            </div>
            <Link
              href="/global"
              className="btn-secondary-hover inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>Explore Multi-Country Capabilities</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="card-hover-effect p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 group">
              <span className="font-extrabold text-blue-900 group-hover:text-blue-600 transition-colors block text-sm">GCC Edition</span>
              <p className="text-slate-600 leading-relaxed">UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman. Bilingual English/Arabic RTL, VAT &amp; ZATCA e-invoicing ready.</p>
            </div>
            <div className="card-hover-effect p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 group">
              <span className="font-extrabold text-blue-900 group-hover:text-blue-600 transition-colors block text-sm">India National</span>
              <p className="text-slate-600 leading-relaxed">CBSE, ICSE, NEP 2020 holistic report cards, tiered fee installments, multi-bank UPI reconciliation.</p>
            </div>
            <div className="card-hover-effect p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 group">
              <span className="font-extrabold text-blue-900 group-hover:text-blue-600 transition-colors block text-sm">Africa Cloud</span>
              <p className="text-slate-600 leading-relaxed">Mobile-first, low bandwidth optimization, mobile money (M-Pesa, MTN MoMo) integration, and offline caching.</p>
            </div>
            <div className="card-hover-effect p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 group">
              <span className="font-extrabold text-blue-900 group-hover:text-blue-600 transition-colors block text-sm">International Enterprise</span>
              <p className="text-slate-600 leading-relaxed">IB World Schools, Cambridge CAIE, multi-currency ledger, multi-timezone consolidation, and 99.98% SLA.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Executive FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions by School Leaders
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq) => (
            <div
              key={faq.id}
              className="card-hover-effect p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2"
            >
              <h3 className="text-sm font-bold text-slate-900">
                {faq.question}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
