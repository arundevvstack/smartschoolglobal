"use client";

import React, { useState } from "react";
import { 
  AlertOctagon, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  FileText, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function InteractiveIncidentTracker() {
  const [selectedIncident, setSelectedIncident] = useState<number>(0);

  const incidents = [
    {
      id: "INC-2026-042",
      title: "Minor Playground Knee Scrape during Recess",
      category: "Medical / Infirmary",
      severity: "Low",
      status: "Resolved & Closed",
      time: "Today, 10:15 AM",
      student: "Grade 4 Pupil",
      location: "Junior Sports Field",
      actionTaken: "Cleaned and bandaged with antiseptic at Campus Clinic. Parent notified via automated in-app health update.",
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      id: "INC-2026-041",
      title: "Science Lab Chemical Vapor Alarm Test",
      category: "Facility & Safety",
      severity: "Routine Drill",
      status: "Drill Completed",
      time: "Yesterday, 2:00 PM",
      student: "Whole Secondary Wing",
      location: "Chemistry Lab 3B",
      actionTaken: "Safety ventilation fans tested. 100% evacuation compliance in 2 minutes 14 seconds.",
      color: "bg-blue-50 text-blue-800 border-blue-200"
    },
    {
      id: "INC-2026-040",
      title: "Classroom Peer Conflict / Disciplinary Note",
      category: "Behavioral & Counseling",
      severity: "Medium",
      status: "Counselor Review",
      time: "May 12, 11:30 AM",
      student: "2 Students (Grade 8)",
      location: "Middle School Corridor",
      actionTaken: "Both students attended mediation with school counselor. Restorative agreement signed and filed.",
      color: "bg-amber-50 text-amber-800 border-amber-200"
    }
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <AlertOctagon className="w-3.5 h-3.5 text-blue-600" />
            Campus Safety &amp; Resolution Governance
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Incident Management &amp; Disciplinary Triage
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time safety incident logging, severity triage, parent notifications, counseling notes, and audit compliance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-200">
            Safety Governance Active
          </span>
        </div>
      </div>

      {/* Grid: Incident List & Detail Viewer */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50/20">
        
        {/* Left 5 Cols: Incident List */}
        <div className="lg:col-span-5 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Recent Logged Safety Events:
          </h4>

          {incidents.map((inc, idx) => {
            const isSelected = selectedIncident === idx;
            return (
              <div
                key={inc.id}
                onClick={() => setSelectedIncident(idx)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                  isSelected
                    ? "bg-blue-50/80 border-blue-600 ring-1 ring-blue-600 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400">{inc.id}</span>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded border ${inc.color}`}>
                    {inc.severity}
                  </span>
                </div>
                <h5 className="text-xs font-bold text-slate-900">{inc.title}</h5>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>{inc.category}</span>
                  <span>{inc.time}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 7 Cols: Incident Resolution Workflow Card */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                {incidents[selectedIncident].category}
              </span>
              <h4 className="text-sm font-extrabold text-slate-900 mt-0.5">
                {incidents[selectedIncident].title}
              </h4>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200">
              {incidents[selectedIncident].status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Involved Party</span>
              <strong className="text-slate-800">{incidents[selectedIncident].student}</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Campus Location</span>
              <strong className="text-slate-800">{incidents[selectedIncident].location}</strong>
            </div>
          </div>

          <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 space-y-1 text-xs">
            <span className="font-bold text-blue-950 block">Resolution &amp; Corrective Action:</span>
            <p className="text-blue-900 leading-relaxed">{incidents[selectedIncident].actionTaken}</p>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Immutable audit timestamp logged
            </span>
            <span className="font-bold text-slate-800">Author: Duty Supervisor</span>
          </div>
        </div>

      </div>

    </div>
  );
}
