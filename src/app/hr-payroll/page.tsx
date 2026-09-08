import React from "react";
import type { Metadata } from "next";
import InteractiveWorkforceConsole from "@/components/modules/InteractiveWorkforceConsole";
import { Briefcase, Users, Calendar, DollarSign, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HR & Automated Payroll for Education — SmartSchool Global",
  description: "Faculty workload distribution, biometric staff clock-in, automated payslip generation, leave planners, and statutory tax deductions."
};

export default function HRPayrollPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5 text-blue-600" />
          Education Workforce &amp; Payroll
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          HR, Staff Management &amp; Automated Payroll
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Manage teaching and administrative workforce with customized salary structures, statutory tax deductions, biometric clock-in, substitution management, and leave workflows.
        </p>
      </div>

      {/* Interactive HR Console Component */}
      <InteractiveWorkforceConsole />

      {/* Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Balanced Teaching Workloads</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Monitors weekly teaching period allocations against maximum statutory thresholds, preventing educator burnout and optimizing substitute coverage.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <DollarSign className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Automated Direct Bank Payslips</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Calculates base pay, HOD allowances, transport perks, and statutory deductions with 1-click batch generation and direct bank transfer exports.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Credential &amp; Licensure Tracking</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Tracks teaching certificates, background check renewals, and professional development hours with automated alerts before expiry.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Modernize your school’s HR and faculty operations</h3>
          <p className="text-xs text-slate-600 mt-1">Book an interactive demo with our educational workforce consultants.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request HR &amp; Payroll Demo
        </Link>
      </div>

    </div>
  );
}
