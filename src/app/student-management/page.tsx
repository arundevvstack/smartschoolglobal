import React from "react";
import type { Metadata } from "next";
import InteractiveStudent360 from "@/components/modules/InteractiveStudent360";
import { Users, Heart, Award, Clock, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student 360 Management & Holistic Profiling — SmartSchool Global",
  description: "Complete longitudinal student profiles tracking academic milestones, biometric attendance, behavioral logs, clinic health, and fee ledger status."
};

export default function StudentManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Users className="w-3.5 h-3.5 text-blue-600" />
          Single Source of Learner Truth
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Student 360° Management &amp; Holistic Portfolio
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Track every student’s journey from kindergarten enrollment to graduation. Unify academic marks, daily attendance, clinic allergy alerts, disciplinary merits, sibling links, and fee balances in one intelligent profile.
        </p>
      </div>

      {/* Interactive 360 Profile Component */}
      <InteractiveStudent360 />

      {/* Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Longitudinal Academic History</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Preserve complete multi-year grade trends, standardized assessment percentiles (CAT4, MAP), and teacher commentary across every grade level.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl w-fit">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Campus Clinic &amp; Allergy Guard</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Vital health records, emergency contacts, allergy alerts, and medication schedules sync automatically with the Canteen POS and Physical Education teachers.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Family &amp; Sibling Linkage</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Link siblings under a single parent account. Enables automatic sibling fee concessions, unified parent mobile access, and synchronized bus departures.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Ready to centralize your student records?</h3>
          <p className="text-xs text-slate-600 mt-1">Our team provides automated data migration from legacy spreadsheets and older ERP databases.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Student 360 Demo
        </Link>
      </div>

    </div>
  );
}
