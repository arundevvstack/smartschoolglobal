"use client";

import React, { useState } from "react";
import { 
  Smartphone, 
  Users, 
  HeartHandshake, 
  GraduationCap, 
  ShieldCheck, 
  Bus, 
  Briefcase, 
  CheckCircle2, 
  Bell, 
  Clock, 
  DollarSign, 
  FileText, 
  MapPin, 
  Sparkles,
  QrCode,
  AlertTriangle
} from "lucide-react";

type MobileRole = "parent" | "student" | "teacher" | "driver" | "security" | "staff";

export default function InteractiveMobilePhoneMockup() {
  const [activeRole, setActiveRole] = useState<MobileRole>("parent");

  const roles = [
    { id: "parent", label: "Parent App", icon: HeartHandshake, badge: "Most Popular", desc: "Live Bus GPS, Instant Grades, 1-Click Fee Checkout, Canteen Controls" },
    { id: "student", label: "Student App", icon: GraduationCap, badge: "Learning Hub", desc: "Digital Timetable, Homework Submission, Library Access, Exam Scores" },
    { id: "teacher", label: "Teacher App", icon: Users, badge: "Classroom Tool", desc: "1-Tap Attendance, Mark Entry, Lesson Plans, Parent Circulars" },
    { id: "driver", label: "Driver App", icon: Bus, badge: "Fleet IoT", desc: "Turn-by-Turn Routes, Student Boarding RFID Scan, SOS Trigger" },
    { id: "security", label: "Security Gate App", icon: ShieldCheck, badge: "Perimeter", desc: "Parent Pickup OTP Verification, Visitor Passes, Student Out-Passes" },
    { id: "staff", label: "Staff & Admin", icon: Briefcase, badge: "Operations", desc: "Leave Approvals, Substitution Radar, Biometric Clock-in" }
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              Role-Adaptive Native Mobile Experience
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              One Unified Mobile App • 6 Dedicated User Experiences
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Select a user role below to see their tailored mobile smartphone interface.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs">
              iOS &amp; Android Ready
            </span>
            <span className="px-3 py-1 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-700">
              Offline Sync Enabled
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage: Left Role Selector | Right Device Frame */}
      <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/20">
        
        {/* Left 6 Cols: Role Switcher Cards */}
        <div className="lg:col-span-6 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Select User Role to Simulate Phone:
          </h4>

          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = activeRole === role.id;
            return (
              <div
                key={role.id}
                onClick={() => setActiveRole(role.id as MobileRole)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                  isSelected
                    ? "bg-blue-50/80 border-blue-600 ring-1 ring-blue-600 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs"
                }`}
              >
                <div className={`p-2.5 rounded-xl border shrink-0 ${
                  isSelected ? "bg-white border-blue-200 text-blue-600" : "bg-slate-50 border-slate-200 text-slate-600"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h5 className={`text-sm font-bold ${isSelected ? "text-blue-900" : "text-slate-900"}`}>
                      {role.label}
                    </h5>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {role.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    {role.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 6 Cols: Realistic Smartphone Frame with Screen State */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[320px] bg-slate-900 p-3.5 rounded-[42px] shadow-2xl border-4 border-slate-800 ring-1 ring-slate-950">
            
            {/* Phone Screen Notch */}
            <div className="bg-white rounded-[32px] overflow-hidden border border-slate-200 flex flex-col h-[540px]">
              
              {/* Status Bar */}
              <div className="px-5 pt-3 pb-1 flex items-center justify-between text-[10px] font-bold text-slate-800 bg-slate-50">
                <span>9:41</span>
                <div className="w-16 h-3.5 bg-slate-900 rounded-full mx-auto"></div>
                <span>5G 100%</span>
              </div>

              {/* Dynamic Screen Content Based on Role */}
              <div className="p-4 flex-1 overflow-y-auto space-y-3.5 bg-slate-50/40 text-xs">
                
                {activeRole === "parent" && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Parent Portal</p>
                        <h6 className="font-extrabold text-slate-900">Hello, Tariq Al-Mansoor</h6>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                        TM
                      </div>
                    </div>

                    {/* Live Bus Telemetry Card */}
                    <div className="p-3 bg-white rounded-2xl border border-blue-200 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold text-blue-600 flex items-center gap-1">
                          <Bus className="w-3.5 h-3.5" /> Bus #04 (Morning Route)
                        </span>
                        <span className="text-emerald-600 font-bold">On Schedule</span>
                      </div>
                      <div className="p-2 bg-blue-50/60 rounded-xl text-[11px] font-semibold text-blue-950">
                        📍 3 Stops Away • ETA 7:42 AM
                      </div>
                      <p className="text-[10px] text-slate-500">Zayn scanned boarding at 7:15 AM</p>
                    </div>

                    {/* Quick Fees & Grades */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center">
                        <span className="text-[10px] text-slate-400 block">Term 2 Fee</span>
                        <strong className="text-emerald-600 text-xs">Paid in Full</strong>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center">
                        <span className="text-[10px] text-slate-400 block">Latest GPA</span>
                        <strong className="text-blue-600 text-xs">3.94 (A+)</strong>
                      </div>
                    </div>

                    <div className="p-2.5 bg-cyan-50 rounded-xl border border-cyan-200 text-[11px] text-cyan-950 font-medium">
                      <Sparkles className="w-3 h-3 text-cyan-600 inline mr-1" />
                      AI Notice: Science Olympiad registration open.
                    </div>
                  </>
                )}

                {activeRole === "student" && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Student Dashboard</p>
                        <h6 className="font-extrabold text-slate-900">Zayn Al-Mansoor</h6>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">Grade 8</span>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Next Class: Period 2</span>
                      <p className="font-bold text-slate-900">Advanced Mathematics</p>
                      <p className="text-[10px] text-slate-500">Room 304 • Mr. Al-Sayed • 10:00 AM</p>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-slate-200 space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Due Homework</span>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-slate-800">Physics Lab Writeup</span>
                        <span className="text-amber-600 font-bold">Due Today 4 PM</span>
                      </div>
                    </div>
                  </>
                )}

                {activeRole === "teacher" && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Faculty Workspace</p>
                        <h6 className="font-extrabold text-slate-900">Mrs. Sarah Jenkins</h6>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Grade 8 HOD</span>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-blue-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">Period 1 Attendance</span>
                        <span className="text-emerald-600 font-bold text-[10px]">26 / 28 Present</span>
                      </div>
                      <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg font-bold text-[11px]">
                        1-Tap Submit Attendance
                      </button>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-slate-200 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Lesson Journal</span>
                      <p className="font-bold text-slate-800 text-[11px]">Quadratic Equations (Lesson 4 of 6)</p>
                    </div>
                  </>
                )}

                {activeRole === "driver" && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Driver Telemetry</p>
                        <h6 className="font-extrabold text-slate-900">Route #04 — Bus A-12</h6>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Active GPS</span>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-emerald-200 space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold text-slate-700">Next Stop: Al Barsha Gate 2</span>
                        <span className="font-bold text-emerald-600">3 Students</span>
                      </div>
                      <button className="w-full py-2 bg-emerald-600 text-white rounded-lg font-bold text-[11px] flex items-center justify-center gap-1">
                        <QrCode className="w-3.5 h-3.5" /> Scan Student RFID
                      </button>
                    </div>

                    <button className="w-full py-2 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> Emergency SOS Broadcast
                    </button>
                  </>
                )}

                {activeRole === "security" && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Gate Guard Console</p>
                        <h6 className="font-extrabold text-slate-900">North Main Gate</h6>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">Turnstile #01</span>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-blue-200 space-y-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Parent Pickup OTP</span>
                      <input
                        type="text"
                        placeholder="Enter 4-digit Pickup Code"
                        className="w-full p-2 text-center text-xs font-bold border border-slate-300 rounded-lg"
                        defaultValue="8421"
                      />
                      <div className="p-1.5 bg-emerald-50 text-emerald-800 rounded-lg text-center text-[10px] font-bold">
                        ✓ Verified: Tariq Al-Mansoor for Zayn
                      </div>
                    </div>
                  </>
                )}

                {activeRole === "staff" && (
                  <>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Staff Operations</p>
                        <h6 className="font-extrabold text-slate-900">Admin Operations Hub</h6>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">HQ</span>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-slate-200 space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Pending Approvals</span>
                      <div className="flex items-center justify-between text-[11px]">
                        <span>Leave Request: 2 Staff</span>
                        <button className="text-blue-600 font-bold">Review</button>
                      </div>
                    </div>
                  </>
                )}

              </div>

              {/* Bottom Home Indicator */}
              <div className="p-2 bg-slate-50 flex justify-center">
                <div className="w-24 h-1 bg-slate-400 rounded-full"></div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
