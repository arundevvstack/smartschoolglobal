import React from "react";
import type { Metadata } from "next";
import InteractiveIncidentTracker from "@/components/modules/InteractiveIncidentTracker";
import { AlertOctagon, ShieldAlert, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Incident Management & Campus Safety — SmartSchool Global",
  description: "Campus safety governance, severity triage, counseling records, parent notification workflows, and compliance safety audit trails."
};

export default function IncidentManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider">
          <AlertOctagon className="w-3.5 h-3.5 text-rose-600" />
          Campus Safety &amp; Governance
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Incident Management &amp; Disciplinary Triage
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Ensure transparent and timely campus safety governance. Real-time incident logging, multi-tier severity triage, counselor notes, parental notifications, and immutable compliance audit logs.
        </p>
      </div>

      {/* Interactive Incident Tracker Component */}
      <InteractiveIncidentTracker />

      {/* Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl w-fit">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Multi-Tier Severity Triage</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Categorize events into Medical, Facility, Behavioral, or Emergency. High-severity events trigger instant automated SMS alerts to senior leadership.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Confidential Counselor Logs</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Role-gated documentation ensures sensitive student behavioral and mental health counseling records remain strictly private and protected.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Preventative Analytics</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            AI trend engine identifies recurring campus safety hot spots (e.g. playground wet turf or stairwells), allowing proactive maintenance intervention.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Elevate campus safety protocols today</h3>
          <p className="text-xs text-slate-600 mt-1">Book an interactive session with our school safety compliance architects.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Safety Demo
        </Link>
      </div>

    </div>
  );
}
