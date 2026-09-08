import React from "react";
import type { Metadata } from "next";
import InteractiveWorldMap from "@/components/modules/InteractiveWorldMap";
import SchoolLogoGrid from "@/components/schools/SchoolLogoGrid";
import { Globe, Building2, Layers, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global & Multi-Campus Management — GCC, India, Africa & Global",
  description: "Enterprise multi-country and multi-entity school governance. Standardize group-wide policies while granting campuses autonomy over regional curricula and currencies."
};

export default function GlobalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          Multi-Entity &amp; Multi-Country
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Global Scale. Multi-Campus Governance.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Architected for international school foundations and expanding multi-campus educational groups across the GCC, India, Africa, and global hubs. Connect diverse campuses to a single intelligent control panel.
        </p>
      </div>

      {/* Interactive Global World Map & Regional Inspector */}
      <InteractiveWorldMap />

      {/* 44 School Institutional Directory */}
      <div id="schools-directory" className="space-y-4 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Trusted by Leading Educational Networks
          </span>
          <h2 className="text-2xl font-black text-slate-900">
            44 Schools • One Platform • One Intelligent View
          </h2>
          <p className="text-xs text-slate-500">
            Scalable multi-tenant architecture designed to support expanding school groups without infrastructure limits.
          </p>
        </div>

        <SchoolLogoGrid />
      </div>

      {/* Trust & Compliance Statement */}
      <div className="p-8 bg-blue-50/60 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-900 font-extrabold text-sm">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span>Global Education Data &amp; Privacy Standards</span>
          </div>
          <p className="text-xs text-blue-800 leading-relaxed max-w-2xl">
            Designed to support global education data and privacy requirements. SmartSchool Global operates multi-region cloud clusters ensuring strict local data sovereignty across GCC, India, Africa, and international jurisdictions.
          </p>
        </div>

        <Link
          href="/contact?intent=consultation"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Book Global Group Consultation
        </Link>
      </div>

    </div>
  );
}
