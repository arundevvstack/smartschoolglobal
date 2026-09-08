import React from "react";
import type { Metadata } from "next";
import InteractiveFinanceDashboard from "@/components/modules/InteractiveFinanceDashboard";
import { Receipt, DollarSign, CreditCard, ShieldCheck, CheckCircle2, ArrowRight, Building } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance & Fee Management — Multi-Currency Cloud Ledger",
  description: "Automated fee invoicing, digital gateway reconciliation, multi-currency support (AED, USD, INR, KES), regional VAT/tax compliance, and zero revenue leakage."
};

export default function FinancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Receipt className="w-3.5 h-3.5 text-blue-600" />
          School Financial Governance
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Enterprise School Finance, Fees &amp; Multi-Currency Ledger
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Say goodbye to manual spreadsheet fee reconciliation. SmartSchool Global automates fee structures, installment tracking, sibling discounts, scholarship grants, and tax-compliant digital invoicing.
        </p>
      </div>

      {/* Interactive Finance Dashboard Component */}
      <InteractiveFinanceDashboard />

      {/* Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <CreditCard className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Multi-Gateway Bank Reconciliation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Integration-ready connectors for regional payment rails, UPI, credit cards, and direct bank feeds automatically clear student ledger balances.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Dynamic Concession &amp; Sibling Rules</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Auto-applies sibling discounts, staff concessions, and merit scholarships with zero manual recalculation errors across family profiles.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl w-fit">
            <Building className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Multi-Entity Group Consolidation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            School group trustees can monitor consolidated revenue, collection rates, and outstanding dues across all national and international campus branches.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Transform your school's revenue operations</h3>
          <p className="text-xs text-slate-600 mt-1">Schedule a session with our school financial systems architects.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Finance Demo
        </Link>
      </div>

    </div>
  );
}
