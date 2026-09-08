import React from "react";
import type { Metadata } from "next";
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Layers,
  FileCheck2,
  Clock
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academics & Curriculum Management — IB, Cambridge, CBSE, ICSE Ready",
  description: "Flexible multi-curricula lesson planning, syllabus milestone tracking, teacher workflows, and parent visibility."
};

export default function AcademicsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
          Academic &amp; Learning Journey
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Adaptable Curriculum &amp; Digital Lesson Planning
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From IB Primary Years to Cambridge IGCSE, CBSE, and National Boards. Plan collaborative lesson journals, track syllabus milestones, and give parents real-time visibility into classroom learning.
        </p>
      </div>

      {/* Multi-Curriculum Matrix */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Supported Curricula Frameworks</h3>
            <p className="text-xs text-slate-500">Easily configure multi-stream or dual-curriculum campuses in a single tenant instance.</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Multi-Curriculum Engine Active
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          {[
            { name: "IB Continuum", sub: "PYP, MYP & DP Frameworks", badge: "Inquiry Based" },
            { name: "Cambridge (CAIE)", sub: "Primary to A-Levels", badge: "Standardized" },
            { name: "CBSE National", sub: "NEP 2020 Aligned Rubrics", badge: "Holistic" },
            { name: "ICSE & ISC", sub: "Comprehensive Assessment", badge: "Structured" },
            { name: "British National", sub: "Key Stage 1 to 5", badge: "National" },
            { name: "Custom Regional", sub: "Dual-Language & Ministry", badge: "Adaptable" }
          ].map((curr, idx) => (
            <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1 group hover:bg-blue-50/50 hover:border-blue-300 transition-all">
              <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200 block w-fit mx-auto">
                {curr.badge}
              </span>
              <strong className="text-xs font-bold text-slate-900 block group-hover:text-blue-600 transition-colors">
                {curr.name}
              </strong>
              <p className="text-[10px] text-slate-500 leading-snug">{curr.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lesson Planner Preview */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Teacher Workspace</span>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">Digital Lesson Journal: Grade 8 Physics (Unit 3: Energy Conservation)</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-200">
              Syllabus: 68% Completed
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Learning Objectives</span>
            <ul className="space-y-1.5 text-slate-700">
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" /> Kinetic &amp; Potential Energy Transitions</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" /> Mathematical calculation of Mechanical Work</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" /> Real-world roller coaster simulation lab</li>
            </ul>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Digital Homework &amp; Rubric</span>
            <p className="font-bold text-slate-900">Lab Report: Pendulum Oscillation Analysis</p>
            <p className="text-slate-500 text-[11px]">Due Friday 4:00 PM • Digital submission via Student App with automated plagiarism screening.</p>
          </div>

          <div className="p-4 bg-cyan-50/70 rounded-2xl border border-cyan-200 space-y-2">
            <div className="flex items-center gap-1.5 text-cyan-900 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>AI Remedial Concept Recommendation</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              3 students in Section B struggled with quadratic kinetic formulas on the quiz. AI generated personalized 5-minute interactive video explainers.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Experience our Academic Management System</h3>
          <p className="text-xs text-slate-600 mt-1">Schedule a live demonstration tailored to your school's specific curriculum framework.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Academic Demo
        </Link>
      </div>

    </div>
  );
}
