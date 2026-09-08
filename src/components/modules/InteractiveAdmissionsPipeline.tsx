"use client";

import React, { useState } from "react";
import { 
  UserPlus, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ChevronRight, 
  Phone, 
  Mail, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building
} from "lucide-react";

interface PipelineCandidate {
  id: string;
  name: string;
  grade: string;
  curriculum: string;
  source: string;
  score: number;
  status: string;
  parent: string;
  appliedDate: string;
  docStatus: "Verified" | "Pending Review" | "Action Required";
}

export default function InteractiveAdmissionsPipeline() {
  const [activeStage, setActiveStage] = useState<number>(2); // 0: Lead, 1: Inquiry, 2: Application, 3: Documents, 4: Assessment, 5: Decision, 6: Enrollment

  const stages = [
    { name: "1. Lead", count: 48, badge: "Inbound", color: "bg-slate-100 text-slate-700" },
    { name: "2. Inquiry", count: 34, badge: "Qualified", color: "bg-blue-50 text-blue-700" },
    { name: "3. Application", count: 26, badge: "Form Filled", color: "bg-indigo-50 text-indigo-700" },
    { name: "4. Documents", count: 19, badge: "OCR Scanned", color: "bg-cyan-50 text-cyan-700" },
    { name: "5. Assessment", count: 14, badge: "Interview", color: "bg-amber-50 text-amber-700" },
    { name: "6. Decision", count: 9, badge: "Seat Offered", color: "bg-emerald-50 text-emerald-700" },
    { name: "7. Enrollment", count: 7, badge: "Fee Paid", color: "bg-emerald-100 text-emerald-800" }
  ];

  const candidates: Record<number, PipelineCandidate[]> = {
    0: [
      { id: "APP-101", name: "Zayn Al-Mansoor", grade: "Grade 1 (IB)", curriculum: "IB Primary Years", source: "Website Campaign", score: 85, status: "Prospect", parent: "Tariq Al-Mansoor", appliedDate: "Today, 9:15 AM", docStatus: "Pending Review" },
      { id: "APP-102", name: "Aarav Sharma", grade: "Grade 6 (CBSE)", curriculum: "CBSE Standard", source: "Parent Referral", score: 92, status: "Prospect", parent: "Rohan Sharma", appliedDate: "Yesterday", docStatus: "Pending Review" }
    ],
    1: [
      { id: "APP-103", name: "Maya El-Khatib", grade: "Grade 9 (IGCSE)", curriculum: "Cambridge", source: "Open House", score: 94, status: "Tour Booked", parent: "Dr. Laila El-Khatib", appliedDate: "2 days ago", docStatus: "Pending Review" },
      { id: "APP-104", name: "Kofi Mensah", grade: "Grade 4 (British)", curriculum: "British National", source: "Social Media", score: 88, status: "Inquiry Follow-up", parent: "Kwame Mensah", appliedDate: "3 days ago", docStatus: "Pending Review" }
    ],
    2: [
      { id: "APP-105", name: "Sofia De Silva", grade: "Grade 11 (IB DP)", curriculum: "IB Diploma", source: "Direct Portal", score: 98, status: "Application Submitted", parent: "Carlos De Silva", appliedDate: "4 hours ago", docStatus: "Verified" },
      { id: "APP-106", name: "Ananya Iyer", grade: "Grade 8 (ICSE)", curriculum: "ICSE Curriculum", source: "Sibling Enrolled", score: 95, status: "Application Submitted", parent: "Venkatesh Iyer", appliedDate: "1 day ago", docStatus: "Verified" },
      { id: "APP-107", name: "Hamza Al-Sayed", grade: "Kindergarten 2", curriculum: "Early Years IB", source: "Website Campaign", score: 90, status: "Application Submitted", parent: "Fatima Al-Sayed", appliedDate: "2 days ago", docStatus: "Action Required" }
    ],
    3: [
      { id: "APP-108", name: "Liam O'Connor", grade: "Grade 7 (Cambridge)", curriculum: "Cambridge Lower", source: "Direct Portal", score: 91, status: "AI OCR Processed", parent: "Sarah O'Connor", appliedDate: "May 12", docStatus: "Verified" },
      { id: "APP-109", name: "Fatima Noor", grade: "Grade 10 (CBSE)", curriculum: "CBSE Secondary", source: "School Relocation", score: 89, status: "Birth Cert Verified", parent: "Imran Noor", appliedDate: "May 10", docStatus: "Verified" }
    ],
    4: [
      { id: "APP-110", name: "Rami Haddad", grade: "Grade 11 (IB DP)", curriculum: "IB Diploma", source: "Entrance Exam", score: 96, status: "Oral Interview: 3:30 PM", parent: "George Haddad", appliedDate: "May 8", docStatus: "Verified" }
    ],
    5: [
      { id: "APP-111", name: "Priya Nair", grade: "Grade 5 (CBSE)", curriculum: "CBSE Primary", source: "Academic Merit", score: 99, status: "Offer Letter Dispatched", parent: "Dr. S. Nair", appliedDate: "May 4", docStatus: "Verified" }
    ],
    6: [
      { id: "APP-112", name: "Omar Al-Farsi", grade: "Grade 1 (British)", curriculum: "British National", source: "Confirmed Admission", score: 100, status: "Enrolled • Seat #18 Allocated", parent: "Sultan Al-Farsi", appliedDate: "May 1", docStatus: "Verified" }
    ]
  };

  const currentList = candidates[activeStage] || [];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <UserPlus className="w-3.5 h-3.5 text-blue-600" />
            Admissions CRM &amp; Enrollment Engine
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            7-Stage Digital Admissions Pipeline
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Click through stages to track live inquiry conversion, document verification, and seat allocation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-2 bg-white rounded-xl border border-slate-200 text-xs shadow-2xs">
            <span className="text-slate-400 font-semibold block text-[10px]">Total Funnel</span>
            <span className="font-extrabold text-slate-900">157 Active Inquiries</span>
          </div>
          <div className="px-3.5 py-2 bg-emerald-50 rounded-xl border border-emerald-200 text-xs">
            <span className="text-emerald-600 font-semibold block text-[10px]">Conversion Rate</span>
            <span className="font-extrabold text-emerald-800">34.8% (Above Avg)</span>
          </div>
        </div>
      </div>

      {/* 7-Stage Horizontal Pipeline Header */}
      <div className="p-4 bg-white border-b border-slate-200 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-[750px]">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.name}
                onClick={() => setActiveStage(idx)}
                className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                  isActive
                    ? "bg-blue-50/80 border-blue-600 ring-1 ring-blue-600 shadow-2xs"
                    : "bg-slate-50/60 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded ${stage.color}`}>
                    {stage.badge}
                  </span>
                  <span className="text-xs font-black text-slate-900">{stage.count}</span>
                </div>
                <p className={`text-xs font-bold truncate ${isActive ? "text-blue-900" : "text-slate-700"}`}>
                  {stage.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Candidates List in Selected Stage */}
      <div className="p-6 sm:p-8 bg-slate-50/30">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <span>Applicants in {stages[activeStage].name}</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
              {currentList.length} shown
            </span>
          </h4>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>AI Match Score Enabled</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentList.map((c) => (
            <div
              key={c.id}
              className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block">{c.id}</span>
                  <h5 className="text-sm font-bold text-slate-900">{c.name}</h5>
                  <p className="text-xs text-blue-600 font-semibold">{c.grade}</p>
                </div>
                <div className="p-1.5 bg-blue-50 text-blue-700 rounded-lg text-center font-black text-xs">
                  {c.score}%<span className="block text-[8px] font-normal text-slate-400">Score</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 pt-1 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Curriculum:</span>
                  <span className="font-semibold text-slate-800">{c.curriculum}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Parent:</span>
                  <span className="font-semibold text-slate-800">{c.parent}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="font-bold text-slate-900">{c.status}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className={`px-2 py-0.5 rounded font-bold ${
                  c.docStatus === "Verified" ? "bg-emerald-50 text-emerald-700" :
                  c.docStatus === "Action Required" ? "bg-amber-50 text-amber-700" :
                  "bg-slate-100 text-slate-700"
                }`}>
                  {c.docStatus}
                </span>

                <button className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Details <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Capabilities Strip */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">Multi-Language Application Forms</p>
              <p className="text-slate-500 text-[11px]">Parents apply in English, Arabic, French or Hindi with auto-translated fields.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">Instant AI Document OCR</p>
              <p className="text-slate-500 text-[11px]">Auto-scans birth certificates, passports, immunizations, and past transfer certs.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">1-Click Fee Seat Conversion</p>
              <p className="text-slate-500 text-[11px]">Approved applicants instantly receive digital acceptance letters &amp; payment links.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
