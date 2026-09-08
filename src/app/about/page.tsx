import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, Sparkles, Globe, Server, Lock, CheckCircle2, ArrowRight, Building2, Users } from "lucide-react";
import Link from "next/link";
import { TRUST_STATS } from "@/data/schools";

export const metadata: Metadata = {
  title: "About Us & Security Architecture — SmartSchool Global",
  description: "Learn about SmartSchool Global's mission, enterprise cloud engineering standards, data privacy commitments, and implementation methodology."
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          Engineering Philosophy
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Pioneering AI-Powered School Management for a Global Future
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          SmartSchool Global was engineered from the ground up to solve educational fragmentation. We unite academics, operations, finance, and predictive intelligence onto a single, rock-solid cloud database.
        </p>
      </div>

      {/* Mission & Vision Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Purpose</span>
          <h2 className="text-2xl font-bold text-slate-900">Empowering Educators to Focus on Teaching</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            School leaders and teachers spend over 35% of their working hours on manual spreadsheets, disconnected registers, and repetitive administrative follow-ups. We build software that automates mundane administration and delivers actionable predictive insights.
          </p>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Our Technology Standard</span>
          <h2 className="text-2xl font-bold text-slate-900">Enterprise Cloud Architecture Without Compromise</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            From multi-region geo-redundancy to AES-256 encryption at rest and role-gated access control. Every module is engineered for sub-80ms responsiveness, high concurrent traffic, and seamless offline synchronization.
          </p>
        </div>
      </div>

      {/* Security & Data Governance Section */}
      <div id="security" className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Enterprise Trust &amp; Compliance</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Data Privacy &amp; Institutional Governance
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Designed to support global education data and privacy requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="p-2 bg-blue-100 text-blue-800 rounded-lg w-fit mb-2">
              <Lock className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 font-bold text-sm block">AES-256 &amp; TLS 1.3 Encryption</strong>
            <p className="text-slate-600 leading-relaxed">
              All institutional, financial, and student records are encrypted at rest and in transit with modern cryptographic standards.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="p-2 bg-cyan-100 text-cyan-800 rounded-lg w-fit mb-2">
              <Server className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 font-bold text-sm block">Multi-Tenant Isolation</strong>
            <p className="text-slate-600 leading-relaxed">
              Each school operates in a cryptographically isolated tenant schema ensuring complete data sovereignty and zero data cross-leakage.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg w-fit mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <strong className="text-slate-900 font-bold text-sm block">Immutable Audit Trails</strong>
            <p className="text-slate-600 leading-relaxed">
              Every grade change, fee adjustment, and disciplinary log entry is stamped with an immutable, traceable cryptographic audit log.
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Methodology */}
      <div id="implementation" className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Deployment Playbook</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Structured 4-Phase Implementation Methodology
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Zero downtime migration ensuring smooth onboarding without disrupting daily school operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            { phase: "Phase 1: Architecture & Scope", time: "Week 1", desc: "Audit existing spreadsheets/legacy ERP, configure campus hierarchy, academic terms, and grading rubrics." },
            { phase: "Phase 2: Data Migration & Scrub", time: "Week 2", desc: "Automated ETL migration of student records, family accounts, fee schedules, and historical grade sheets." },
            { phase: "Phase 3: Hardware & IoT Sync", time: "Week 3", desc: "Connect biometric turnstiles, RFID lanyards, vehicle GPS transponders, and payment gateway feeds." },
            { phase: "Phase 4: Staff Training & Go-Live", time: "Week 4", desc: "Role-based training for teachers, accountants, and administrators followed by smooth parent app rollout." }
          ].map((step, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 block w-fit">
                {step.time}
              </span>
              <strong className="text-sm font-bold text-slate-900 block">{step.phase}</strong>
              <p className="text-slate-600 text-[11px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-4">
        <h3 className="text-2xl font-black text-slate-900">Speak directly with our engineering architects</h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Learn how SmartSchool Global can modernize operations for your school or educational network.
        </p>
        <Link
          href="/contact?intent=consultation"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-xs transition-colors"
        >
          <span>Book an Executive Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
