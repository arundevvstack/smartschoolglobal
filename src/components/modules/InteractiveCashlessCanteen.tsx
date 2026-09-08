"use client";

import React, { useState } from "react";
import { 
  Wallet, 
  AlertCircle, 
  CheckCircle2, 
  Utensils, 
  ShieldCheck, 
  CreditCard, 
  DollarSign, 
  Sparkles,
  QrCode
} from "lucide-react";

export default function InteractiveCashlessCanteen() {
  const [balance, setBalance] = useState(145.50);
  const [dailyCap, setDailyCap] = useState(25.00);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <Wallet className="w-3.5 h-3.5 text-blue-600" />
            Cashless Campus &amp; Smart RFID Wallet
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Smart Wallet, Canteen POS &amp; Dietary Guardrails
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            RFID wristband tap payments, parental daily spend limits, allergy blocklists, and automated nutrition tracking.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-200">
            Cashless Campus POS Online
          </span>
        </div>
      </div>

      {/* Main Grid: Left Parent Controls | Right Canteen POS Terminal */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50/20">
        
        {/* Left 6 Cols: Parent Mobile Wallet App Controls */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Student RFID Wristband</span>
              <h5 className="font-extrabold text-slate-900 text-sm">Zayn Al-Mansoor (Grade 8)</h5>
            </div>
            <div className="p-2 bg-blue-50 text-blue-700 rounded-xl font-black text-sm">
              ${balance.toFixed(2)}
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 bg-rose-50/70 rounded-xl border border-rose-200 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-rose-950 font-bold block">Parent Dietary Guardrail:</strong>
                <p className="text-rose-800 text-[11px] mt-0.5">
                  Peanut Sensitivity &amp; Shellfish Blocklist Active. POS terminal will automatically refuse item checkout containing these allergens.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-700">Daily Spend Cap Set by Parent:</span>
                <strong className="text-blue-600 font-black">${dailyCap.toFixed(2)} / day</strong>
              </div>
              <p className="text-[10px] text-slate-400">Prevents excessive campus snack purchases without parent authorization.</p>
            </div>
          </div>
        </div>

        {/* Right 6 Cols: Canteen Touch POS Terminal Screen */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-blue-600" />
              Canteen Touchscreen POS (Terminal #02)
            </span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              RFID Tap Ready
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {[
              { item: "Mediterranean Grilled Chicken Wrap", cal: "480 kcal", price: "$4.50", safe: true },
              { item: "Fresh Organic Apple & Orange Slice", cal: "90 kcal", price: "$1.50", safe: true },
              { item: "Almond-Peanut Crunch Bar", cal: "220 kcal", price: "$2.00", safe: false }
            ].map((menu, i) => (
              <div key={i} className={`p-2.5 rounded-xl border flex items-center justify-between ${
                menu.safe ? "bg-slate-50 border-slate-200" : "bg-rose-50/40 border-rose-200"
              }`}>
                <div>
                  <strong className="text-slate-800 block">{menu.item}</strong>
                  <span className="text-[10px] text-slate-400">{menu.cal}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-900 block">{menu.price}</span>
                  {menu.safe ? (
                    <span className="text-[9px] text-emerald-600 font-bold">Allergen Free</span>
                  ) : (
                    <span className="text-[9px] text-rose-600 font-bold">Blocked (Allergy)</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => alert("Simulated 1-Tap RFID wristband checkout: $6.00 deducted. Parent WhatsApp receipt sent.")}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Simulate 1-Tap RFID Wristband Checkout ($6.00)</span>
          </button>
        </div>

      </div>

    </div>
  );
}
