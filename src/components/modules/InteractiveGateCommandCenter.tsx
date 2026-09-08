"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  QrCode, 
  KeyRound, 
  UserCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Camera, 
  FileCheck,
  Building
} from "lucide-react";

export default function InteractiveGateCommandCenter() {
  const [activeTab, setActiveTab] = useState<"visitor" | "otp" | "outpass">("otp");
  const [otpCode, setOtpCode] = useState("8421");
  const [otpResult, setOtpResult] = useState<{
    valid: boolean;
    parentName: string;
    studentName: string;
    grade: string;
    photoId: string;
    vehicleNo: string;
  } | null>({
    valid: true,
    parentName: "Tariq Al-Mansoor",
    studentName: "Zayn Al-Mansoor",
    grade: "Grade 8-B",
    photoId: "Verified Emirates ID / Civil ID",
    vehicleNo: "Dubai Plate K-8812"
  });

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode === "8421" || otpCode.length === 4) {
      setOtpResult({
        valid: true,
        parentName: "Tariq Al-Mansoor",
        studentName: "Zayn Al-Mansoor",
        grade: "Grade 8-B",
        photoId: "Verified National ID (Scanned)",
        vehicleNo: "Dubai Plate K-8812"
      });
    } else {
      setOtpResult(null);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Perimeter Security &amp; Gate Command
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Campus Entry/Exit &amp; Parent OTP Pickup Terminal
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Instant visitor badge generation, Parent OTP pick-up validation, and student digital out-passes.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-200">
            Main Gate Terminal #01 Online
          </span>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="px-6 pt-3 bg-white border-b border-slate-100 flex items-center gap-2 overflow-x-auto">
        {[
          { id: "otp", label: "Parent Pickup OTP Verification", icon: KeyRound },
          { id: "visitor", label: "Instant Visitor Photo Pass", icon: Camera },
          { id: "outpass", label: "Student Digital Out-Pass", icon: FileCheck }
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

      {/* Main Gate Interactive Workspace */}
      <div className="p-6 sm:p-8 bg-slate-50/20">
        
        {activeTab === "otp" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 5 Cols: OTP Keypad */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Guard Terminal: Verify Parent OTP
              </h4>
              <p className="text-xs text-slate-600">
                Enter the one-time 4-digit code generated in the parent’s mobile application for afternoon dismissal.
              </p>

              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <input
                  type="text"
                  maxLength={4}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  className="w-full text-center text-3xl font-black tracking-widest py-3 bg-slate-50 border-2 border-blue-500 rounded-2xl text-blue-900 focus:outline-hidden"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>Verify Parent Identity</span>
                </button>
              </form>

              <div className="text-[11px] text-slate-400 text-center">
                Prevents unauthorized student dismissals • 100% verified log
              </div>
            </div>

            {/* Right 7 Cols: Verification Card */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-emerald-200 shadow-2xs space-y-4">
              {otpResult ? (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Authorized Parent Match Confirmed
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Logged: 14:32:04</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Authorized Parent</span>
                      <strong className="text-slate-900 text-sm block">{otpResult.parentName}</strong>
                      <span className="text-emerald-700 font-semibold text-[11px]">Primary Guardian</span>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Student to Release</span>
                      <strong className="text-slate-900 text-sm block">{otpResult.studentName}</strong>
                      <span className="text-blue-600 font-semibold text-[11px]">{otpResult.grade}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center justify-between text-xs">
                    <span className="text-blue-900 font-medium">Vehicle Plate: <strong>{otpResult.vehicleNo}</strong></span>
                    <span className="text-blue-700 font-semibold">{otpResult.photoId}</span>
                  </div>

                  <button 
                    onClick={() => alert("Student Zayn Al-Mansoor officially checked out at North Gate.")}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs"
                  >
                    Release Student &amp; Open Gate
                  </button>
                </>
              ) : (
                <div className="py-12 text-center text-slate-400 text-xs">
                  Enter 4-digit code to simulate identity verification.
                </div>
              )}
            </div>

          </div>
        )}

        {activeTab === "visitor" && (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-xs space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Instant Visitor Badge Issuance</h4>
            <p className="text-slate-600">
              Visitor presents national ID card at reception; camera captures photo and prints self-expiring thermal badge with host teacher notification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold">1. Photo ID Scan</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold">2. Thermal QR Print</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-bold">3. Host SMS Ping</div>
            </div>
          </div>
        )}

        {activeTab === "outpass" && (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 text-xs space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Student Early Departure Digital Out-Pass</h4>
            <p className="text-slate-600">
              Initiated by clinic or principal office. Guard scans barcode on student lanyard to verify medical leave approval before exit.
            </p>
            <div className="p-3.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 font-semibold">
              ✓ Digital Out-Pass #OUT-4412 approved by Principal Dr. Jenkins for early dental appointment.
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
