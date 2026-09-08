import React from "react";
import type { Metadata } from "next";
import InteractiveGradingWorkspace from "@/components/modules/InteractiveGradingWorkspace";
import { FileCheck2, Award, Printer, Send, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Examination & Grade Management — SmartSchool Global",
  description: "Digital examination creation, tamper-proof mark submission, automated GPA calculation, dynamic report cards, and instant parent publishing."
};

export default function ExaminationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
          Assessment &amp; Evaluation Engine
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Digital Examination &amp; Grade Management Workspace
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From exam scheduling and rubric creation to tamper-proof mark submission and automated GPA generation. Deliver beautifully formatted digital report cards straight to parents via WhatsApp and the mobile portal.
        </p>
      </div>

      {/* Interactive Gradebook & Report Card Generator Component */}
      <InteractiveGradingWorkspace />

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Custom Multi-Board Grading Scales</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Support 4.0/5.0 GPAs, letter grades (A+ to F), percentage bands, CBSE competency-based rubrics, and IB 1–7 achievement levels.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl w-fit">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">AI Assessment Moderation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Flags abnormal standard deviations across teacher sections, pre-drafts personalized student remarks, and identifies tricky exam questions.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <Send className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">1-Click Multi-Channel Publishing</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Publish verified report cards to hundreds of parents simultaneously via secure WhatsApp PDF links, mobile notifications, and portal downloads.
          </p>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">See how SmartSchool cuts exam processing time by 65%</h3>
          <p className="text-xs text-slate-600 mt-1">Book a consultation with our assessment engineering specialists.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Examination Demo
        </Link>
      </div>

    </div>
  );
}
