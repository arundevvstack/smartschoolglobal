"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  Users, 
  Calendar, 
  Clock, 
  DollarSign, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function InteractiveWorkforceConsole() {
  const [activeTab, setActiveTab] = useState<"workload" | "payslip" | "leave">("workload");

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            Faculty HR &amp; Automated Payroll
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Workforce Management &amp; Smart Substitution Scheduler
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Teacher workload allocation, biometric clock-in, statutory tax deductions, and automated monthly payslips.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
            184 Active Faculty &amp; Staff
          </span>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="px-6 pt-3 bg-white border-b border-slate-100 flex items-center gap-2 overflow-x-auto">
        {[
          { id: "workload", label: "Teacher Timetable & Substitution Engine", icon: Calendar },
          { id: "payslip", label: "Automated Monthly Payslip Preview", icon: DollarSign },
          { id: "leave", label: "Leave & Biometric Clock-in", icon: Clock }
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

      {/* Main Content Area */}
      <div className="p-6 sm:p-8 bg-slate-50/20">
        
        {activeTab === "workload" && (
          <div className="space-y-4 text-xs">
            <div className="p-4 bg-cyan-50/70 rounded-2xl border border-cyan-200 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-cyan-950 font-bold block">Smart Substitution Engine Active:</strong>
                <p className="text-slate-600 mt-0.5">
                  Algorithm matched 2 open science slots for tomorrow morning. Assigned Dr. Davis without exceeding the 24 weekly maximum teaching periods.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-slate-400 font-bold block">Average Teaching Load</span>
                <p className="text-xl font-black text-slate-900 mt-1">21.4 Periods/wk</p>
                <span className="text-[10px] text-emerald-600 font-bold">Optimal Balance</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-slate-400 font-bold block">Staff Attendance Today</span>
                <p className="text-xl font-black text-emerald-600 mt-1">98.1%</p>
                <span className="text-[10px] text-slate-500">Biometric Clock-in</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-slate-400 font-bold block">Open Substitute Slots</span>
                <p className="text-xl font-black text-blue-600 mt-1">0 Slots</p>
                <span className="text-[10px] text-blue-700 font-bold">100% Covered</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "payslip" && (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-xs space-y-4 max-w-2xl mx-auto shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h5 className="font-extrabold text-slate-900 text-sm">Faculty Payslip: Mrs. Sarah Jenkins</h5>
                <p className="text-[11px] text-slate-400">Department: Mathematics • Month: October 2026</p>
              </div>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-lg border border-emerald-200">
                Direct Bank Transfer Cleared
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5 p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 font-bold block uppercase text-[10px]">Earnings</span>
                <div className="flex justify-between"><span>Base Salary:</span> <strong>$4,200.00</strong></div>
                <div className="flex justify-between"><span>HOD Allowance:</span> <strong>$500.00</strong></div>
                <div className="flex justify-between"><span>Transport Allowance:</span> <strong>$300.00</strong></div>
              </div>

              <div className="space-y-1.5 p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-400 font-bold block uppercase text-[10px]">Deductions &amp; Tax</span>
                <div className="flex justify-between"><span>Statutory Pension:</span> <strong>$210.00</strong></div>
                <div className="flex justify-between"><span>Health Insurance:</span> <strong>$90.00</strong></div>
                <div className="flex justify-between"><span>Total Deductions:</span> <strong className="text-rose-600">$300.00</strong></div>
              </div>
            </div>

            <div className="p-3 bg-blue-50 text-blue-950 rounded-xl flex items-center justify-between font-bold">
              <span>Net Disbursed Compensation:</span>
              <span className="text-base text-blue-700 font-black">$4,700.00</span>
            </div>
          </div>
        )}

        {activeTab === "leave" && (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 text-xs space-y-3">
            <h5 className="font-bold text-slate-900">Faculty Leave Roster &amp; Approvals</h5>
            <p className="text-slate-600">
              Teachers request leave via the mobile app; the system checks period overlaps, suggests substitute teachers, and routes the request to the Principal for one-click approval.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
