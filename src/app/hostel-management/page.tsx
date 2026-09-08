import React from "react";
import type { Metadata } from "next";
import InteractiveHostelHub from "@/components/modules/InteractiveHostelHub";
import { Building2, Moon, Users, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hostel & Boarding Management — SmartSchool Global",
  description: "Residential boarding school operations, dormitory room allocation, biometric night curfew roll call, mess management, and warden logs."
};

export default function HostelManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5 text-blue-600" />
          Residential &amp; Boarding Operations
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Hostel, Dormitory &amp; Boarding Management
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Built for premier boarding schools and residential academies. Visual bed allocation, biometric night curfew sync, infirmary tracking, and weekend outing authorizations with Parent OTP approval.
        </p>
      </div>

      {/* Interactive Hostel Hub Component */}
      <InteractiveHostelHub />

      {/* Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Visual Dorm &amp; Bed Allocation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Drag-and-drop room assignments by grade, house affiliation, or dietary profile with real-time occupancy and maintenance status.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <Moon className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Biometric Night Curfew Roll Call</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Wardens execute seamless evening roll call via biometric handsets, instantly identifying unreturned boarders across dorm wings.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Parent Weekend Outing Approvals</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Parents authorize weekend home visits and local excursions digitally via their mobile app, generating verified security out-passes.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Upgrade your residential boarding operations</h3>
          <p className="text-xs text-slate-600 mt-1">Book a consultation with our boarding school specialists.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Hostel Demo
        </Link>
      </div>

    </div>
  );
}
