"use client";

import React, { useState } from "react";
import { ERP_MODULES, ModuleItem } from "@/data/modules";
import { 
  GraduationCap, 
  UserPlus, 
  Users, 
  FileCheck2, 
  Smartphone, 
  ScanFace, 
  MessageSquareText, 
  Receipt, 
  Bus, 
  ShieldCheck, 
  Briefcase, 
  Wallet, 
  Building2, 
  AlertOctagon, 
  Globe, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Database
} from "lucide-react";
import Link from "next/link";

const iconComponents: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-cyan-600" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-blue-600" />,
  UserPlus: <UserPlus className="w-5 h-5 text-blue-600" />,
  FileCheck2: <FileCheck2 className="w-5 h-5 text-blue-600" />,
  Users: <Users className="w-5 h-5 text-blue-600" />,
  Smartphone: <Smartphone className="w-5 h-5 text-blue-600" />,
  ScanFace: <ScanFace className="w-5 h-5 text-blue-600" />,
  MessageSquareText: <MessageSquareText className="w-5 h-5 text-blue-600" />,
  Receipt: <Receipt className="w-5 h-5 text-blue-600" />,
  Bus: <Bus className="w-5 h-5 text-blue-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
  Briefcase: <Briefcase className="w-5 h-5 text-blue-600" />,
  Wallet: <Wallet className="w-5 h-5 text-blue-600" />,
  Building2: <Building2 className="w-5 h-5 text-blue-600" />,
  AlertOctagon: <AlertOctagon className="w-5 h-5 text-blue-600" />,
  Globe: <Globe className="w-5 h-5 text-blue-600" />
};

export default function InteractiveERPArchitecture() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedModule, setSelectedModule] = useState<ModuleItem>(ERP_MODULES[0]);

  const categories = ["ALL", "Academic", "Administration", "Operations & Safety", "Finance & HR", "AI & Analytics", "Global"];

  const filteredModules = activeCategory === "ALL" 
    ? ERP_MODULES 
    : ERP_MODULES.filter(m => m.category === activeCategory);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Layer Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/60 border-b border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-bold mb-2">
              <Database className="w-3.5 h-3.5 text-blue-600" />
              Single Cloud Core • Zero Redundant Data Entry
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Interactive 24-Module ERP System Matrix
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Click any module below to inspect its data pipelines, role permissions, and cross-functional integration with the central AI layer.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interactive Grid & Detail Inspection Panel */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 7 Cols: Module Tiles Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[620px] overflow-y-auto pr-2">
          {filteredModules.map((mod) => {
            const isSelected = selectedModule.id === mod.id;
            return (
              <div
                key={mod.id}
                onClick={() => setSelectedModule(mod)}
                className={`p-4 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between group ${
                  isSelected
                    ? "bg-blue-50/70 border-blue-600 shadow-xs ring-1 ring-blue-600"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 shadow-2xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className={`p-2 rounded-xl border ${
                      isSelected ? "bg-white border-blue-200" : "bg-slate-50 border-slate-200 group-hover:bg-white"
                    }`}>
                      {iconComponents[mod.icon] || <Layers className="w-5 h-5 text-blue-600" />}
                    </div>
                    {mod.badge && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
                        {mod.badge}
                      </span>
                    )}
                  </div>

                  <h4 className={`text-sm font-bold tracking-tight ${isSelected ? "text-blue-900" : "text-slate-900"}`}>
                    {mod.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-snug line-clamp-2">
                    {mod.shortDesc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-400">{mod.category}</span>
                  <span className={`font-bold flex items-center gap-1 ${isSelected ? "text-blue-600" : "text-slate-500 group-hover:text-blue-600"}`}>
                    Inspect <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 5 Cols: Deep Inspection & Data Flow Inspector */}
        <div className="lg:col-span-5 bg-slate-50/70 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
          <div className="space-y-5">
            
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                {iconComponents[selectedModule.icon] || <Layers className="w-6 h-6 text-blue-600" />}
              </div>
              <div>
                <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">
                  {selectedModule.category} Module
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
                  {selectedModule.name}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {selectedModule.fullDesc}
            </p>

            {/* Core Capabilities Checklist */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2.5">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Integrated Operational Capabilities:
              </h5>
              <div className="grid grid-cols-1 gap-2">
                {selectedModule.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Data Flow Diagram Node */}
            <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 space-y-1.5 text-xs">
              <span className="font-bold text-blue-900 block">Single Database Integration Node</span>
              <p className="text-[11px] text-blue-700 leading-snug">
                Updates in {selectedModule.name} automatically synchronize with <strong>Parent Mobile App</strong>, <strong>AI Predictive Attrition Engine</strong>, and <strong>Group HQ Ledger</strong> with zero API lag.
              </p>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
            <Link
              href={selectedModule.pagePath}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
            >
              <span>Explore Dedicated {selectedModule.name.split(" ")[0]} Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
