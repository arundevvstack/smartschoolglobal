"use client";

import React, { useState } from "react";
import { 
  Users, 
  Heart, 
  Award, 
  Clock, 
  DollarSign, 
  FileText, 
  AlertCircle, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2,
  Calendar
} from "lucide-react";

export default function InteractiveStudent360() {
  const [activeTab, setActiveTab] = useState<"academic" | "attendance" | "health" | "behavioral" | "fees">("academic");

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Student Profile Top Hero Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-black text-2xl flex items-center justify-center shadow-xs border-2 border-white">
              ZA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-extrabold text-slate-900">Zayn Al-Mansoor</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  Active • Enrolled
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Student ID: <strong className="text-slate-800">STU-2026-8842</strong> • Grade 8, Section B • IB Middle Years Programme
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> Dubai Campus
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" /> Parent: Tariq Al-Mansoor
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-slate-400" /> Sibling: Maya (Grade 5)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Cumulative GPA</span>
              <span className="text-lg font-black text-blue-600">3.94 / 4.0</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Attendance</span>
              <span className="text-lg font-black text-emerald-600">97.8%</span>
            </div>
          </div>

        </div>
      </div>

      {/* 360 Tab Strip */}
      <div className="px-6 pt-3 bg-white border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
        {[
          { id: "academic", label: "Academic Journey & Grades", icon: Award },
          { id: "attendance", label: "Attendance & Biometric Radar", icon: Clock },
          { id: "health", label: "Medical & Allergy Profile", icon: Heart },
          { id: "behavioral", label: "Behavioral & Merits", icon: ShieldCheck },
          { id: "fees", label: "Fee Ledger & Scholarships", icon: DollarSign }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-all shrink-0 ${
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="p-6 sm:p-8 bg-slate-50/30">
        
        {activeTab === "academic" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-slate-400">Class Rank</span>
                <p className="text-xl font-black text-slate-900 mt-1">Top 5%</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Rank #3 in cohort of 64 students</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-slate-400">IB Extended Project</span>
                <p className="text-xl font-black text-blue-600 mt-1">Exceeding</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Renewable Energy Robotics</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-slate-400">Standardized Testing</span>
                <p className="text-xl font-black text-emerald-600 mt-1">98th Percentile</p>
                <p className="text-[11px] text-slate-500 mt-0.5">CAT4 Spatial &amp; Verbal</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <h5 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Current Term Subject Scores
              </h5>
              <div className="space-y-2 text-xs">
                {[
                  { name: "IB Mathematics (Standard Level)", score: "94/100", status: "A+", trend: "+4%" },
                  { name: "Physics & Natural Sciences", score: "92/100", status: "A", trend: "+2%" },
                  { name: "World History & Geography", score: "89/100", status: "A", trend: "+1%" },
                  { name: "Arabic Language & Culture", score: "96/100", status: "A+", trend: "+5%" }
                ].map((subj, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <span className="font-bold text-slate-800">{subj.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-black text-slate-900">{subj.score}</span>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[11px]">{subj.status}</span>
                      <span className="text-[11px] font-semibold text-emerald-600">{subj.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "attendance" && (
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
              <div>
                <h5 className="text-xs font-bold text-slate-900">Biometric &amp; RFID Attendance Log</h5>
                <p className="text-[11px] text-slate-500">178 of 182 School Days Present</p>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-lg border border-emerald-200">
                Regular Attendance
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-400">Present Days</p>
                <p className="text-lg font-black text-slate-900">178</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-400">Excused Leaves</p>
                <p className="text-lg font-black text-blue-600">3</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-400">Unexcused</p>
                <p className="text-lg font-black text-slate-900">1</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-400">Tardy / Late</p>
                <p className="text-lg font-black text-amber-600">0</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "health" && (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-bold text-slate-900 text-sm">Confidential Campus Clinic Log</span>
              <span className="px-2.5 py-1 bg-rose-50 text-rose-700 font-bold rounded-md border border-rose-200 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> Allergy Warning: Peanut Sensitive
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block mb-1">Blood Group:</span>
                <strong className="text-slate-900 text-sm">O+ (Positive)</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block mb-1">Emergency Medication:</span>
                <strong className="text-slate-900">EpiPen stored at Campus Clinic Cabinet #04</strong>
              </div>
            </div>
          </div>
        )}

        {activeTab === "behavioral" && (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3 text-xs">
            <h5 className="font-bold text-slate-900 text-sm">Merits, Demerits &amp; House Points</h5>
            <div className="space-y-2">
              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-emerald-950">+15 House Points (Falcon House)</p>
                  <p className="text-[11px] text-emerald-800">1st Place in Regional Science Olympiad</p>
                </div>
                <span className="text-xs font-black text-emerald-700">Awarded May 14</span>
              </div>
              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-blue-950">Peer Mentorship Commendation</p>
                  <p className="text-[11px] text-blue-800">Volunteered 12 hours assisting Grade 6 reading group</p>
                </div>
                <span className="text-xs font-black text-blue-700">Awarded Apr 28</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "fees" && (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-bold text-slate-900 text-sm">Annual Tuition &amp; Auxiliary Ledger</span>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-md border border-emerald-200">
                100% Cleared (Term 2)
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block">Total Annual Fee</span>
                <strong className="text-slate-900 font-black text-sm">AED 48,000</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block">Sibling Concession</span>
                <strong className="text-blue-600 font-black text-sm">-10% Applied</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 block">Outstanding Balance</span>
                <strong className="text-emerald-600 font-black text-sm">AED 0.00</strong>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
