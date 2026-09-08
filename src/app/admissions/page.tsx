import React from "react";
import type { Metadata } from "next";
import InteractiveAdmissionsPipeline from "@/components/modules/InteractiveAdmissionsPipeline";
import { UserPlus, Sparkles, CheckCircle2, ArrowRight, FileText, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admissions CRM & Enrollment Pipeline — SmartSchool Global",
  description: "Eliminate paper bottlenecks with a 7-stage digital admissions funnel, multi-language application forms, instant AI document OCR, and automated seat conversion."
};

export default function AdmissionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <UserPlus className="w-3.5 h-3.5 text-blue-600" />
          Admissions &amp; Enrollment CRM
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          7-Stage Digital Admissions Pipeline &amp; Funnel
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Attract, nurture, verify, and enroll prospective students with an intuitive CRM. Empower parents with multi-language digital applications, automated interview booking, and instant fee seat confirmation.
        </p>
      </div>

      {/* Interactive 7-Stage Pipeline Component */}
      <InteractiveAdmissionsPipeline />

      {/* 3 Value Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Multi-Language Application Forms</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Parents can submit applications in English, Arabic, French, or Hindi. Form fields and communication automatically adapt to parental language preferences.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl w-fit">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Instant AI Document OCR</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Auto-extracts dates of birth, immunization history, passport numbers, and academic transcripts from uploaded scans with 99.4% accuracy.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">1-Click Fee Seat Conversion</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            When an applicant is approved, the system generates an official acceptance letter with a secure digital deposit link, automatically reserving their seat.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Boost your school's enrollment conversion</h3>
          <p className="text-xs text-slate-600 mt-1">Discover how top international schools increased inquiry-to-enrollment rates by 34%.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Admissions Demo
        </Link>
      </div>

    </div>
  );
}
