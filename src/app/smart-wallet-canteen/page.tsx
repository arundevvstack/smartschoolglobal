import React from "react";
import type { Metadata } from "next";
import InteractiveCashlessCanteen from "@/components/modules/InteractiveCashlessCanteen";
import { Wallet, Utensils, AlertCircle, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smart Wallet & Cashless Canteen POS — SmartSchool Global",
  description: "Cashless student RFID wristbands, daily spend limits, parental allergy blocklists, high-speed canteen touchscreen POS, and nutritional tracking."
};

export default function SmartWalletCanteenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Wallet className="w-3.5 h-3.5 text-blue-600" />
          Cashless Campus Ecosystem
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Smart Wallet, Canteen POS &amp; Dietary Guardrails
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Create a 100% cashless campus. Parents top up student digital wallets, set daily expenditure caps, specify allergen blocklists, and view nutritional logs.
        </p>
      </div>

      {/* Interactive Canteen POS Component */}
      <InteractiveCashlessCanteen />

      {/* Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <Wallet className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">1-Tap RFID Wristband Payments</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Students tap their waterproof RFID wristband or smart lanyard at meal counters, eliminating cash handling and queuing bottlenecks.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl w-fit">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Allergen Safety Interlocks</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            When a student taps their card, the POS terminal scans clinic records and automatically locks out items containing nuts, dairy, or gluten.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Parental Spending Limits</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Parents can configure max daily snack allowances and receive instant receipts with caloric breakdowns in their mobile application.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Transform your school into a cashless smart campus</h3>
          <p className="text-xs text-slate-600 mt-1">Request a live demonstration of our Smart Wallet POS systems.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Smart Wallet Demo
        </Link>
      </div>

    </div>
  );
}
