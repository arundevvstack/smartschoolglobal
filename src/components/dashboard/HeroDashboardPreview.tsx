"use client";

import React, { useState } from "react";
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  DollarSign, 
  ArrowUpRight,
  ShieldCheck,
  Building,
  Bell,
  Search,
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function HeroDashboardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "academics" | "ai" | "finance">("overview");

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      
      {/* Top OS-style Browser Header */}
      <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-rose-400 transition-colors cursor-pointer"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-amber-400 transition-colors cursor-pointer"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-emerald-400 transition-colors cursor-pointer"></span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 ml-2 hidden sm:inline">
            SmartSchool ERP Enterprise • Global Multi-Campus Console
          </span>
        </div>

        {/* Campus & Live Pulse Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold hover:bg-emerald-100/80 transition-colors cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Cloud Sync</span>
          </div>
          <span className="text-[11px] font-bold text-slate-700 hidden sm:inline">
            Dubai International Campus (HQ)
          </span>
        </div>
      </div>

      {/* Internal Mini Header Navigation */}
      <div className="px-4 sm:px-6 pt-4 pb-3 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-white">
        <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl">
          {[
            { id: "overview", label: "Executive Overview" },
            { id: "academics", label: "Academics & Exams" },
            { id: "ai", label: "AI Intelligence Hub" },
            { id: "finance", label: "Fee Collections" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-2xs scale-102"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-[11px] text-slate-500 font-medium">
          Term 2 • Academic Year 2026–2027
        </div>
      </div>

      {/* Main ERP Dashboard Body */}
      <div className="p-4 sm:p-6 bg-slate-50/40 space-y-5">
        
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          
          {/* Card 1: Students */}
          <div className="card-hover-effect p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold">Total Enrollment</span>
              <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xl sm:text-2xl font-black text-slate-900">2,840</span>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center">
                <ArrowUpRight className="w-3 h-3" /> +12%
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Across 3 Wings (K-12)</p>
          </div>

          {/* Card 2: Attendance */}
          <div className="card-hover-effect p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold">Today's Attendance</span>
              <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xl sm:text-2xl font-black text-slate-900">96.4%</span>
              <span className="text-[11px] font-bold text-emerald-600">On Track</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">2,738 Checked in by 8:05 AM</p>
          </div>

          {/* Card 3: Fee Inflow */}
          <div className="card-hover-effect p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold">Fee Collection (Q2)</span>
              <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xl sm:text-2xl font-black text-slate-900">98.2%</span>
              <span className="text-[11px] font-bold text-blue-600">Auto-Reconciled</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">AED 4.2M cleared / Zero leakage</p>
          </div>

          {/* Card 4: AI Health Index */}
          <div className="card-hover-effect p-4 bg-white rounded-xl border border-cyan-200/90 shadow-2xs relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="flex items-center justify-between text-slate-500 mb-2 relative z-10">
              <span className="text-xs font-semibold text-slate-700">AI Campus Score</span>
              <div className="p-1.5 rounded-lg bg-cyan-100 text-cyan-700 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <Sparkles className="w-4 h-4 text-cyan-600 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <span className="text-xl sm:text-2xl font-black text-slate-900">94.8<span className="text-xs text-slate-400 font-normal">/100</span></span>
              <span className="text-[11px] font-bold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">
                Optimal
              </span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 relative z-10">2 Early warnings flagged</p>
          </div>

        </div>

        {/* Central Dashboard Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Left 2 Cols: AI Insights & Academic Performance Feed */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* AI Intelligence Alert Banner */}
            <div className="card-hover-effect p-4 bg-white rounded-xl border border-cyan-200 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-cyan-900 uppercase tracking-wider">
                      AI Predictive Insight • Grade 8 Mathematics
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-bold">
                      Needs Attention
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1 font-medium leading-relaxed">
                    Grade 8 Section C exhibits a 14.2% downward variance in linear equations. 3 automated remedial practice modules have been generated for teacher review.
                  </p>
                  <div className="mt-2.5 flex items-center gap-3">
                    <Link 
                      href="/examinations" 
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:translate-x-0.5 inline-flex items-center gap-1 transition-all"
                    >
                      View Gradebook Analysis <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-slate-300">•</span>
                    <Link 
                      href="/ai-for-schools" 
                      className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      Ask AI Assistant
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Performance Distribution Table */}
            <div className="card-hover-effect p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-900">
                  Upcoming Assessment Milestones &amp; Department Performance
                </span>
                <span className="text-[11px] font-semibold text-blue-600">
                  Term 2 Mid-Terms
                </span>
              </div>
              
              <div className="space-y-2.5">
                {[
                  { subject: "IB Diploma Mathematics", grade: "Grade 11 & 12", avg: "88.4%", status: "On Target", color: "text-emerald-600", bar: "w-[88%]", barColor: "bg-emerald-500" },
                  { subject: "Cambridge IGCSE Sciences", grade: "Grade 9 & 10", avg: "84.1%", status: "Good", color: "text-blue-600", bar: "w-[84%]", barColor: "bg-blue-600" },
                  { subject: "Middle School English Lit", grade: "Grade 6 to 8", avg: "79.8%", status: "Moderate", color: "text-amber-600", bar: "w-[80%]", barColor: "bg-amber-500" },
                  { subject: "CBSE Standard Mathematics", grade: "Grade 8-C", avg: "71.2%", status: "Remedial Plan", color: "text-rose-600", bar: "w-[71%]", barColor: "bg-rose-500" }
                ].map((row, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors gap-2">
                    <div className="sm:w-1/3">
                      <p className="font-bold text-slate-800">{row.subject}</p>
                      <p className="text-[10px] text-slate-400">{row.grade}</p>
                    </div>
                    <div className="sm:w-1/3 flex items-center gap-2">
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className={`h-full ${row.barColor} ${row.bar} rounded-full transition-all duration-500`}></div>
                      </div>
                      <span className="font-bold text-slate-700 w-10 text-right">{row.avg}</span>
                    </div>
                    <div className="sm:w-1/4 text-right">
                      <span className={`text-[11px] font-bold ${row.color}`}>
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right 1 Col: Live Campus Operations & GPS Ticker */}
          <div className="space-y-4">
            
            {/* Live Operations Feed */}
            <div className="card-hover-effect p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-900">Campus Live Telemetry</span>
                <span className="text-[10px] text-emerald-600 font-bold uppercase">All Systems Normal</span>
              </div>

              <div className="space-y-3 text-xs">
                
                <div className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                  <div>
                    <p className="font-semibold text-slate-800">Fleet Route #04 Completed</p>
                    <p className="text-[10px] text-slate-400">42 Students debussed safely • 7:48 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                  <div>
                    <p className="font-semibold text-slate-800">Main Gate Turnstile RFID</p>
                    <p className="text-[10px] text-slate-400">1,420 tap-ins processed in 20 mins</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                  <div>
                    <p className="font-semibold text-slate-800">Teacher Substitution Auto-Filled</p>
                    <p className="text-[10px] text-slate-400">Period 3 Chemistry → Assigned to Dr. Davis</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                  <div>
                    <p className="font-semibold text-slate-800">Admissions Online Verification</p>
                    <p className="text-[10px] text-slate-400">12 Documents validated by AI OCR</p>
                  </div>
                </div>

              </div>

              <div className="pt-2 border-t border-slate-100">
                <Link 
                  href="/transportation" 
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center justify-between group"
                >
                  <span className="group-hover:underline">Open Fleet Live Tracking Map</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Quick Action Footer inside dashboard */}
            <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center justify-between hover:bg-blue-50 transition-colors">
              <div>
                <p className="text-xs font-bold text-blue-900">Principal Weekly Brief</p>
                <p className="text-[10px] text-blue-700">Ready for board export</p>
              </div>
              <Link 
                href="/ai-for-schools"
                className="px-3 py-1 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-2xs hover:shadow-xs hover:scale-105 transition-all"
              >
                View
              </Link>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
