"use client";

import React, { useState } from "react";
import { 
  ScanFace, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Send, 
  Smartphone, 
  ShieldCheck, 
  Users,
  AlertTriangle
} from "lucide-react";

export default function InteractiveAttendanceSync() {
  const [activeMode, setActiveMode] = useState<"biometric" | "rfid" | "mobile" | "manual">("biometric");
  const [livePings, setLivePings] = useState([
    { id: "LOG-991", time: "07:58:12", student: "Aarav Sharma (Grade 6)", method: "Facial Biometric Turnstile #02", status: "Verified & Synced", parentAlert: "WhatsApp Dispatched" },
    { id: "LOG-992", time: "07:58:24", student: "Sofia De Silva (Grade 11)", method: "RFID Card Tap Turnstile #01", status: "Verified & Synced", parentAlert: "In-App Push Sent" },
    { id: "LOG-993", time: "07:58:45", student: "Zayn Al-Mansoor (Grade 8)", method: "Bus Fleet RFID Boarding", status: "Verified & Synced", parentAlert: "WhatsApp Dispatched" },
    { id: "LOG-994", time: "07:59:02", student: "Fatima Noor (Grade 10)", method: "Facial Biometric Turnstile #03", status: "Verified & Synced", parentAlert: "SMS Dispatched" }
  ]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
            <ScanFace className="w-3.5 h-3.5 text-emerald-600" />
            Live Hardware-to-Cloud Synchronization
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Attendance &amp; Biometric Gate Intelligence
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time biometric turnstile sync, instant parent WhatsApp broadcast, and AI chronic absence warnings.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-800">Hardware Connectors Online</span>
        </div>
      </div>

      {/* 4 Mode Buttons */}
      <div className="p-4 bg-white border-b border-slate-100 flex items-center gap-2 overflow-x-auto">
        <span className="text-xs font-bold text-slate-400 mr-2">Input Mode:</span>
        {[
          { id: "biometric", label: "1. Facial Biometric Turnstiles" },
          { id: "rfid", label: "2. RFID Smart Cards" },
          { id: "mobile", label: "3. Mobile Teacher App" },
          { id: "manual", label: "4. Emergency Backup Roster" }
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMode(m.id as any)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeMode === m.id
                ? "bg-blue-600 text-white shadow-2xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Workflow Diagram & Live Feed */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50/20">
        
        {/* Left 6 Cols: 5-Stage Visual Workflow */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Automated Attendance Data Pipeline:
          </h4>

          <div className="space-y-3">
            {[
              { step: "Step 1: Check-in Capture", desc: "Student scans face or taps RFID card at school gate turnstile or bus.", icon: ScanFace, status: "< 0.4s response" },
              { step: "Step 2: Instant Cloud Sync", desc: "Device securely transmits encrypted payload to centralized school database.", icon: ShieldCheck, status: "TLS 1.3 encrypted" },
              { step: "Step 3: Central Attendance Record", desc: "Roll call updated automatically across class register, subject ledger, and admin console.", icon: CheckCircle2, status: "100% automated" },
              { step: "Step 4: Parent Notification", desc: "Automated WhatsApp or Push notification sent to parent with verified timestamp.", icon: Send, status: "Sub-second delivery" },
              { step: "Step 5: AI Absence Radar", desc: "Pattern detection engine flags chronic unexcused absences and alerts school counselor.", icon: Sparkles, status: "Predictive AI active" }
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-slate-900">{st.step}</p>
                      <span className="text-[10px] font-bold text-slate-400">{st.status}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 6 Cols: Live Real-Time Inflow Stream */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Live Hardware Stream (Dubai Campus Gate):
            </h4>
            <span className="text-[10px] text-emerald-600 font-bold">● Streaming live</span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-3">
            {livePings.map((ping) => (
              <div key={ping.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between gap-2 text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{ping.student}</span>
                    <span className="text-[10px] text-slate-400">{ping.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{ping.method}</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-bold rounded text-[10px] block">
                    {ping.status}
                  </span>
                  <span className="text-[9px] text-blue-600 font-semibold mt-0.5 block">
                    {ping.parentAlert}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Radar Card */}
          <div className="p-4 bg-cyan-50/70 rounded-2xl border border-cyan-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-cyan-900 font-bold">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>AI Attendance Anomaly Radar</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Attendance rate today is <strong>96.4%</strong>. 18 students flagged for cumulative monthly attendance below 85%. Automated counselor reviews prepared.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
