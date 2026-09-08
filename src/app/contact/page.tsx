import React from "react";
import type { Metadata } from "next";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { Mail, PhoneCall, Globe, ShieldCheck, CheckCircle2, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Demo & Book a Consultation — SmartSchool Global",
  description: "Schedule an executive consultation or live platform demonstration of SmartSchool Global with our senior educational technology architects."
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ intent?: string }>;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
          Executive Advisory &amp; Demonstrations
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          See SmartSchool Global in Action
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Discover how our unified AI-powered cloud ERP can transform your school's academics, admissions, finance, and campus safety. Book a personalized consultation tailored to your curricula and campus structure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left 5 Cols: Value Proposition & Direct Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900">What to expect during your demonstration:</h3>
            
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Live AI Diagnostic:</strong> See our predictive attendance radar, grade drop analyzer, and timetable scheduler live on demo data.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Multi-Campus Architecture:</strong> Learn how to connect multiple school branches under one centralized group HQ ledger.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Hardware Compatibility Mapping:</strong> Review your existing biometric turnstiles, RFID lanyards, and GPS devices with our engineers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero-Downtime Migration:</strong> Discover our 4-week onboarding roadmap with automated historical data scrubbing.</span>
              </li>
            </ul>
          </div>

          {/* Regional Advisory Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Regional Advisory &amp; Enterprise Support Hubs:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <span className="text-blue-600 font-bold block">GCC / Middle East HQ</span>
                <p className="text-slate-500 text-[11px] mt-0.5">Dubai Silicon Oasis, UAE</p>
                <p className="text-slate-400 text-[10px] mt-1">Arabic &amp; English Support</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <span className="text-blue-600 font-bold block">India / South Asia</span>
                <p className="text-slate-500 text-[11px] mt-0.5">Bengaluru &amp; New Delhi</p>
                <p className="text-slate-400 text-[10px] mt-1">CBSE &amp; ICSE Specialists</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <span className="text-blue-600 font-bold block">Pan-African Hub</span>
                <p className="text-slate-500 text-[11px] mt-0.5">Nairobi, Kenya</p>
                <p className="text-slate-400 text-[10px] mt-1">Mobile Money &amp; Cloud Support</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <span className="text-blue-600 font-bold block">International Schools</span>
                <p className="text-slate-500 text-[11px] mt-0.5">London, United Kingdom</p>
                <p className="text-slate-400 text-[10px] mt-1">IB &amp; Cambridge Specialists</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3 text-xs text-emerald-900">
            <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Guaranteed executive response within <strong>4 business hours</strong>.</span>
          </div>

        </div>

        {/* Right 7 Cols: Interactive Consultation Form */}
        <div className="lg:col-span-7">
          <ConsultationForm />
        </div>

      </div>

    </div>
  );
}
