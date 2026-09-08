"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Users, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Moon, 
  FileText,
  AlertCircle
} from "lucide-react";

export default function InteractiveHostelHub() {
  const [activeFloor, setActiveFloor] = useState<number>(2);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            Residential Boarding &amp; Dormitory Operations
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Hostel &amp; Boarding Supervisor Command Hub
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Dormitory room allocation, biometric night curfew roll call, mess management, and warden logbooks.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-200">
            Dormitory Sync Online
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 sm:p-8 space-y-6 bg-slate-50/20">
        
        {/* Curfew & Occupancy Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-slate-400 font-bold block">Total Boarders</span>
            <p className="text-xl font-black text-slate-900 mt-1">420 Students</p>
            <span className="text-[10px] text-slate-500">Across 3 Dorm Blocks</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-slate-400 font-bold block">Night Curfew Sync</span>
            <p className="text-xl font-black text-emerald-600 mt-1">100% Present</p>
            <span className="text-[10px] text-emerald-700 font-bold">Biometric roll call 9:30 PM</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-slate-400 font-bold block">Weekend Gate Passes</span>
            <p className="text-xl font-black text-blue-600 mt-1">18 Approved</p>
            <span className="text-[10px] text-slate-500">Parent OTP authorized</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-slate-400 font-bold block">Clinic / Infirmary</span>
            <p className="text-xl font-black text-slate-900 mt-1">2 Rest Days</p>
            <span className="text-[10px] text-slate-500">Warden monitored</span>
          </div>
        </div>

        {/* Visual Room Allocation Grid */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
            <span className="font-bold text-slate-900">Block B: Senior Boys Wing (Floor 2 Allocation)</span>
            <span className="text-slate-500 font-medium">4 Occupants per Suite</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {[
              { room: "Suite 201", occupants: ["Zayn Al-Mansoor", "Aarav Patel", "Chen Wei", "Liam O'Connor"], status: "Full" },
              { room: "Suite 202", occupants: ["Noah Williams", "Kofi Mensah", "Hamza Al-Sayed", "Rami Haddad"], status: "Full" },
              { room: "Suite 203", occupants: ["Sofia De Silva (Reserved)", "Vacant Bed 2", "Vacant Bed 3", "Vacant Bed 4"], status: "1 / 4 Occupied" }
            ].map((r, i) => (
              <div key={i} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-slate-900 font-bold">{r.room}</strong>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200">
                    {r.status}
                  </span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-600">
                  {r.occupants.map((occ, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      <span>{occ}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
