"use client";

import React, { useState } from "react";
import { REGIONS_DATA, RegionConfig } from "@/data/regions";
import { 
  Globe, 
  Building2, 
  MapPin, 
  Layers, 
  Users, 
  ShieldCheck, 
  Languages, 
  FileText, 
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Database
} from "lucide-react";
import Link from "next/link";

export default function InteractiveWorldMap() {
  const [activeRegionKey, setActiveRegionKey] = useState<string>("gcc");

  const regionKeys = Object.keys(REGIONS_DATA);
  const activeRegion: RegionConfig = REGIONS_DATA[activeRegionKey] || REGIONS_DATA.gcc;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            Borderless Multi-Campus Cloud Architecture
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Multi-Country &amp; Multi-Entity Governance
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Single enterprise console connecting school branches across timezones, currencies, and regional curricula.
          </p>
        </div>

        {/* Regional Selector Tabs */}
        <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
          {regionKeys.map((key) => {
            const r = REGIONS_DATA[key];
            const isSelected = activeRegionKey === key;
            return (
              <button
                key={key}
                onClick={() => setActiveRegionKey(key)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {r.name.split("&")[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Global Hierarchy Tree Strip */}
      <div className="p-4 bg-blue-50/40 border-b border-slate-200 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[700px] text-xs">
          <span className="font-bold text-slate-400 uppercase text-[10px]">Data Hierarchy:</span>
          {[
            "1. Global Organization",
            "2. Country HQ",
            "3. School Group",
            "4. Campus Branch",
            "5. Academic Department",
            "6. Role Permissions",
            "7. Encrypted Tenant Data"
          ].map((level, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-white rounded-md border border-slate-200 font-extrabold text-slate-800 shadow-2xs text-[11px]">
                {level}
              </span>
              {i < 6 && <span className="text-slate-300 font-black">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Regional Inspector */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50/20">
        
        {/* Left 5 Cols: Regional Overview & Countries Supported */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 uppercase tracking-wider">
              {activeRegion.badge}
            </span>
            <h4 className="text-xl font-extrabold text-slate-900 mt-2">
              {activeRegion.name}
            </h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              {activeRegion.leadParagraph}
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Key Regional Markets &amp; Hubs:
            </h5>
            <ul className="space-y-1 text-slate-600">
              {activeRegion.targetCountries.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Curricula &amp; Board Alignments:
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {activeRegion.curriculaSupported.map((curr, i) => (
                <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 font-bold rounded text-[11px]">
                  {curr}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Key Regional Architectural Capabilities */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Localized Capabilities &amp; System Features:
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {activeRegion.keyCapabilities.map((cap, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{cap.title}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* Compliance Statement Box */}
          <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 flex items-start gap-3 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-emerald-950 font-bold block">Enterprise Compliance Standard:</strong>
              <p className="text-emerald-900 text-[11px] mt-0.5 leading-relaxed">
                {activeRegion.regulatoryContext}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/contact?intent=consultation"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              <span>Schedule a Multi-Campus Architecture Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
