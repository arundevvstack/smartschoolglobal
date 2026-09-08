import React from "react";
import type { Metadata } from "next";
import InteractiveAttendanceSync from "@/components/modules/InteractiveAttendanceSync";
import { ScanFace, Zap, Send, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Attendance & Biometric Sync — SmartSchool Global",
  description: "Real-time biometric turnstile, RFID card, and mobile attendance tracking with instant parent WhatsApp notifications and AI absence radar."
};

export default function AttendancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <ScanFace className="w-3.5 h-3.5 text-emerald-600" />
          IoT Hardware &amp; Attendance Sync
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Live Attendance Intelligence &amp; Biometric Gate Sync
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Eliminate manual roll call errors with multi-modal hardware synchronization. Instant sub-second check-in alerts to parents via WhatsApp, subject-wise period registers, and AI chronic absence radar.
        </p>
      </div>

      {/* Interactive Attendance Visualizer */}
      <InteractiveAttendanceSync />

      {/* Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Sub-0.4s Facial Recognition</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            High-speed walk-through biometric turnstiles process morning student rushes effortlessly, eliminating long perimeter queues.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Send className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Instant WhatsApp Delivery</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Parents receive verified gate check-in and checkout timestamps within seconds of student arrival at school grounds.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl w-fit">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Predictive Truancy Warning</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Identifies students trending toward chronic absenteeism before term thresholds are breached, enabling early counselor engagement.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Upgrade your campus attendance infrastructure</h3>
          <p className="text-xs text-slate-600 mt-1">We support standard biometric turnstiles, RFID smart lanyards, and mobile check-ins.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Attendance Demo
        </Link>
      </div>

    </div>
  );
}
