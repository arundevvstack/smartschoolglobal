"use client";

import React, { useState } from "react";
import { SCHOOLS_DATA, TRUST_STATS } from "@/data/schools";
import { Building2, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SchoolTrustTicker() {
  const [selectedRegion, setSelectedRegion] = useState<"ALL" | "GCC" | "India" | "Africa" | "Global">("ALL");

  const filteredSchools = selectedRegion === "ALL" 
    ? SCHOOLS_DATA.slice(0, 16) 
    : SCHOOLS_DATA.filter(s => s.region === selectedRegion).slice(0, 16);

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Stats */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              Trusted by 44+ Leading Schools &amp; Educational Groups
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              44 Schools <span className="text-slate-400 font-normal">|</span> One Platform <span className="text-slate-400 font-normal">|</span> One Intelligent View
            </h2>
          </div>

          {/* Key Metrics Strip */}
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-2 lg:pb-0">
            <div className="group cursor-default">
              <p className="text-xl sm:text-2xl font-extrabold text-blue-600 group-hover:scale-105 transition-transform">{TRUST_STATS.totalSchools}</p>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Institutions</p>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="group cursor-default">
              <p className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{TRUST_STATS.campusesManaged}</p>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Campuses</p>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="group cursor-default">
              <p className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{TRUST_STATS.activeStudents}</p>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Active Students</p>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="group cursor-default">
              <p className="text-xl sm:text-2xl font-extrabold text-emerald-600 group-hover:scale-105 transition-transform">{TRUST_STATS.uptimeSLA}</p>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Cloud Uptime</p>
            </div>
          </div>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <span className="text-xs font-semibold text-slate-400 mr-1">Filter Region:</span>
          {(["ALL", "GCC", "India", "Africa", "Global"] as const).map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedRegion === region
                  ? "bg-blue-600 text-white shadow-xs font-bold scale-102"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {region === "ALL" ? "All 44 Schools" : region}
            </button>
          ))}
          <Link
            href="/global#schools-directory"
            className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 hover:translate-x-0.5 transition-all whitespace-nowrap pl-4"
          >
            Explore Full 44-School Directory
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 44-School Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {filteredSchools.map((school) => (
            <div
              key={school.id}
              className="card-hover-effect p-3 bg-white rounded-xl border border-slate-200/90 flex flex-col items-center text-center group cursor-default"
            >
              {/* Scalable Reusable School Badge Logo Placeholder */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs mb-2 border ${school.avatarBg} group-hover:scale-110 group-hover:shadow-2xs transition-all duration-200`}>
                {school.name.split(" ")[1]}
              </div>
              <h4 className="text-xs font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                {school.name}
              </h4>
              <p className="text-[10px] text-slate-400 mt-0.5 truncate max-w-full">
                {school.subRegion.split(",")[0]}
              </p>
              <div className="mt-2 pt-1.5 border-t border-slate-100 w-full flex items-center justify-center gap-1 text-[9px] font-semibold text-slate-500">
                <Building2 className="w-2.5 h-2.5 text-blue-500" />
                <span>{school.campusCount} {school.campusCount === 1 ? "Campus" : "Campuses"}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
