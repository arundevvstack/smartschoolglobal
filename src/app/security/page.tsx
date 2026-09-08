import React from "react";
import type { Metadata } from "next";
import InteractiveGateCommandCenter from "@/components/modules/InteractiveGateCommandCenter";
import { ShieldCheck, KeyRound, Camera, FileCheck, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campus Security & Gate Control — SmartSchool Global",
  description: "Campus perimeter security, instant visitor photo badges, Parent OTP pickup validation, student out-passes, and 24/7 gate entry audit logs."
};

export default function SecurityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          Campus Perimeter &amp; Safety
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Campus Security &amp; Gate Command Center
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Fortify campus entry and dismissal points. Eliminate unauthorized student pickups with dynamic Parent OTP codes, issue instant thermal visitor badges with photo ID capture, and maintain an immutable 24/7 gate audit log.
        </p>
      </div>

      {/* Interactive Gate Command Component */}
      <InteractiveGateCommandCenter />

      {/* Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <KeyRound className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Parent Dismissal OTP Verification</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Guards verify dynamic 4-digit codes generated within the parent app to authorize student release during afternoon dismissal, preventing mix-ups.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl w-fit">
            <Camera className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Instant Thermal Visitor Passes</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Scans government ID, captures real-time web camera photo, prints a timed QR badge, and sends an SMS notification to the visiting staff host.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <FileCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Digital Student Out-Pass Approvals</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Early departures initiated by the campus infirmary or principal require digital multi-step sign-off before security turnstiles unlock.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Protect your school grounds with SmartSchool Security</h3>
          <p className="text-xs text-slate-600 mt-1">Discover our integrated hardware and software gate management solutions.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Security Demo
        </Link>
      </div>

    </div>
  );
}
