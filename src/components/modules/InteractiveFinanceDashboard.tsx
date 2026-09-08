"use client";

import React, { useState } from "react";
import { 
  Receipt, 
  DollarSign, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  Building, 
  Globe, 
  CreditCard,
  FileSpreadsheet
} from "lucide-react";

export default function InteractiveFinanceDashboard() {
  const [currency, setCurrency] = useState<"USD" | "AED" | "INR" | "KES">("AED");

  const currencyRates: Record<string, { symbol: string; rate: number; totalFee: string; collectionRate: string }> = {
    AED: { symbol: "AED", rate: 3.67, totalFee: "AED 18,450,000", collectionRate: "98.2%" },
    USD: { symbol: "$", rate: 1.0, totalFee: "$5,027,247", collectionRate: "98.2%" },
    INR: { symbol: "₹", rate: 83.5, totalFee: "₹419,775,000", collectionRate: "98.2%" },
    KES: { symbol: "KES", rate: 130.0, totalFee: "KES 653,542,000", collectionRate: "98.2%" }
  };

  const curr = currencyRates[currency];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <Receipt className="w-3.5 h-3.5 text-blue-600" />
            Enterprise Financial Accounting &amp; Ledger
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            School CFO Financial Dashboard &amp; Multi-Currency Ledger
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Automated fee invoicing, real-time gateway reconciliation, multi-currency accounting, and zero revenue leakage.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
          {(["AED", "USD", "INR", "KES"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                currency === c
                  ? "bg-blue-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Main CFO Metric Cards */}
      <div className="p-6 sm:p-8 space-y-6 bg-slate-50/20">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-xs font-semibold text-slate-400">Total Billed Tuition</span>
            <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{curr.totalFee}</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Across 2,840 Students</p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-xs font-semibold text-slate-400">Collection Rate</span>
            <p className="text-xl sm:text-2xl font-black text-emerald-600 mt-1">{curr.collectionRate}</p>
            <p className="text-[10px] text-emerald-700 mt-0.5 font-bold">Auto-reconciled with bank</p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-xs font-semibold text-slate-400">Concessions / Sibling</span>
            <p className="text-xl sm:text-2xl font-black text-blue-600 mt-1">10.4%</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Automated policy checks</p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-xs font-semibold text-slate-400">Reconciliation Errors</span>
            <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1">0.00%</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Zero manual spreadsheet slips</p>
          </div>
        </div>

        {/* Invoicing Breakdown Table */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Tuition Fee Milestone Batches
            </span>
            <span className="text-xs text-slate-500 font-medium">Integration-Ready Banking Rail</span>
          </div>

          <div className="space-y-3 text-xs">
            {[
              { batch: "Term 1 Tuition & Lab Fees", due: "Sep 01, 2026", status: "100% Collected", amount: "AED 6.15M", color: "text-emerald-700 bg-emerald-50" },
              { batch: "Term 2 Tuition & Transport", due: "Jan 15, 2027", status: "98.2% Collected", amount: "AED 6.15M", color: "text-blue-700 bg-blue-50" },
              { batch: "Term 3 Advance Enrolment", due: "Apr 10, 2027", status: "Invoicing Dispatched", amount: "AED 6.15M", color: "text-amber-700 bg-amber-50" }
            ].map((b, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-50 gap-2">
                <div>
                  <strong className="text-slate-900 font-bold block">{b.batch}</strong>
                  <span className="text-[11px] text-slate-400">Due: {b.due}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-extrabold text-slate-900">{b.amount}</span>
                  <span className={`px-2.5 py-1 rounded-md font-bold text-[11px] ${b.color}`}>
                    {b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
