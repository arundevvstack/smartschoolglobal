import React from "react";
import type { Metadata } from "next";
import AICommandSimulator from "@/components/ai/AICommandSimulator";
import { Sparkles, Brain, Zap, CheckCircle2, TrendingDown, ArrowRight, ShieldCheck, FileSpreadsheet } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Schools — Neural School Intelligence & Predictive Analytics",
  description: "Experience SmartSchool Global's predictive AI engine. Forecast learning regressions, prevent chronic absences, automate principal briefings, and solve timetable conflicts."
};

export default function AIForSchoolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          School AI Software &amp; Intelligence Layer
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          AI Command Center for School Leaders &amp; Educators
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          SmartSchool Global transforms raw institutional data into proactive intelligence. Predict academic risks weeks ahead, automate complex admin workflows, and get instant answers in natural language.
        </p>
      </div>

      {/* Interactive AI Command Simulator Component */}
      <AICommandSimulator />

      {/* 4 Core Neural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
        
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-2.5 bg-cyan-50 text-cyan-700 rounded-xl w-fit">
            <TrendingDown className="w-5 h-5 text-cyan-600" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Predictive Grade Attrition</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Multi-term neural models evaluate homework submission timing, formative quiz scores, and concept mastery to flag learning dropouts before final exams.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl w-fit">
            <Zap className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Chronic Absence Radar</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Identifies subtle day-of-week patterns, subject-specific truancy, and bus transit correlations to trigger early parent intervention.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-2.5 bg-indigo-50 text-indigo-700 rounded-xl w-fit">
            <Brain className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Timetable Conflict Solver</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Instantly generates optimal substitute teacher rosters when faculty are on emergency leave, respecting room availability and weekly maximum periods.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl w-fit">
            <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Autonomous Executive Briefs</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Synthesizes attendance rates, admission conversions, fee collections, and compliance milestones into concise weekly briefs for Principals and School Boards.
          </p>
        </div>

      </div>

      {/* Safety & Responsible AI Banner */}
      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
          <span>
            <strong>Responsible AI Ethics:</strong> Student evaluation models operate with strictly private, non-public data models. No pupil identifying data is ever shared with third-party public LLMs.
          </span>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl whitespace-nowrap shadow-xs hover:bg-blue-700 transition-colors"
        >
          Schedule Live AI Demo
        </Link>
      </div>

    </div>
  );
}
