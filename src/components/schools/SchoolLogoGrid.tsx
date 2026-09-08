"use client";

import React, { useState } from "react";
import { SCHOOLS_DATA } from "@/data/schools";
import { Building2, Globe, CheckCircle2, Search, Filter } from "lucide-react";

export default function SchoolLogoGrid() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | "GCC" | "India" | "Africa" | "Global">("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SCHOOLS_DATA.filter((s) => {
    const matchesRegion = activeFilter === "ALL" || s.region === activeFilter;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.subRegion.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.curriculum.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
      
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Institutional Network Directory ({filtered.length} of 44 Schools)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Architecture-ready school profiles seamlessly supporting future custom logo integration.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search schools or cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500 focus:bg-white"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg">
            {(["ALL", "GCC", "India", "Africa", "Global"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                  activeFilter === tab ? "bg-white text-blue-600 shadow-2xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 44 Schools Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 mt-6 max-h-[540px] overflow-y-auto pr-1">
        {filtered.map((school) => (
          <div
            key={school.id}
            className="p-3.5 bg-slate-50/50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col items-center text-center group"
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-sm mb-2 border ${school.avatarBg} group-hover:scale-105 transition-transform shadow-2xs`}>
              {school.name.split(" ")[1]}
            </div>
            
            <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {school.name}
            </span>
            <span className="text-[10px] font-medium text-slate-500 truncate max-w-full">
              {school.subRegion}
            </span>

            <div className="mt-2.5 pt-2 border-t border-slate-200/60 w-full flex flex-col gap-1 text-[10px]">
              <span className="text-slate-600 truncate">{school.curriculum.split("&")[0]}</span>
              <span className="font-semibold text-blue-600 flex items-center justify-center gap-1">
                <Building2 className="w-2.5 h-2.5" />
                {school.campusCount} {school.campusCount === 1 ? "Campus" : "Campuses"} • {school.studentTier}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          Reusable architecture: Verified school entity tokens connect directly to ERP tenant instances.
        </span>
        <span className="font-medium text-slate-600">
          Showing {filtered.length} verified institution profiles
        </span>
      </div>

    </div>
  );
}
