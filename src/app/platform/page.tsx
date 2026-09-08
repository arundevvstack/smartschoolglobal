import React from "react";
import type { Metadata } from "next";
import InteractiveERPArchitecture from "@/components/modules/InteractiveERPArchitecture";
import { Database, ShieldCheck, Cpu, ArrowRight, Layers, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform Architecture — 24 Interconnected ERP Modules",
  description: "Explore SmartSchool Global's unified ERP system architecture. 24 modular subsystems connected to a single high-security education database with zero duplicate entry."
};

export default function PlatformPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Database className="w-3.5 h-3.5 text-blue-600" />
          Single Database Core
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Unified Cloud ERP Architecture for Modern Schools
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Say goodbye to fragmented point solutions. SmartSchool Global unifies academics, admissions, finance, safety, and AI intelligence into one cohesive cloud ecosystem.
        </p>
      </div>

      {/* Interactive ERP Architecture Matrix */}
      <InteractiveERPArchitecture />

      {/* Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Zero Redundant Data Entry</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            When a student enrolls in Admissions, their profile automatically populates the Academic Register, the Fee Ledger, the Clinic Log, and the Bus Fleet Manifest.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl w-fit">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Autonomous Intelligence</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Continuous background neural models scan for attendance dips, fee arrears, timetable substitution clashes, and exam score variances.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Granular Role-Based Security</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Over 120+ fine-grained permission nodes allow school boards to configure strictly partitioned visibility for teachers, accountants, wardens, and drivers.
          </p>
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Want to see how our ERP integrates with your existing hardware?</h3>
          <p className="text-xs text-slate-600 mt-1">Our system architects provide complimentary compatibility mapping for biometric gates, GPS, and finance feeds.</p>
        </div>
        <Link
          href="/contact?intent=consultation"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Book Architecture Consultation
        </Link>
      </div>

    </div>
  );
}
