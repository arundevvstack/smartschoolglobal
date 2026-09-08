"use client";

import React, { useState } from "react";
import { MessageSquareText, Send, Bell, Globe, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CommunicationPage() {
  const [broadcastSent, setBroadcastSent] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <MessageSquareText className="w-3.5 h-3.5 text-blue-600" />
          Omnichannel Notification Center
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Unified Parent &amp; Campus Communication Hub
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Ensure parents never miss crucial circulars, fee reminders, or emergency safety alerts. Deliver targeted messages across official WhatsApp Business API, SMS, Email, and in-app push notifications in multiple languages.
        </p>
      </div>

      {/* Interactive Communication Console Mockup */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Broadcast Console</span>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">Campus Emergency &amp; Circular Dispatcher</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-200">
              WhatsApp Business API Verified
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left 6 Cols: Message Composer */}
          <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs">
            <div className="space-y-1">
              <label className="font-bold text-slate-700">Target Audience:</label>
              <select className="w-full p-2.5 bg-white border border-slate-200 rounded-xl font-semibold text-slate-800">
                <option>All Parents (Entire School — 2,840 Families)</option>
                <option>Secondary Wing Parents (Grades 9–12)</option>
                <option>Bus Route #04 Families (28 Students)</option>
                <option>Tuition Fee Milestone Pending (34 Accounts)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Active Delivery Channels:</label>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-white rounded-xl border border-blue-500 flex items-center gap-2 font-bold text-blue-900">
                  <span className="text-blue-600">✓</span> WhatsApp Official API
                </div>
                <div className="p-2 bg-white rounded-xl border border-blue-500 flex items-center gap-2 font-bold text-blue-900">
                  <span className="text-blue-600">✓</span> Mobile In-App Push
                </div>
                <div className="p-2 bg-white rounded-xl border border-slate-200 flex items-center gap-2 font-semibold text-slate-600">
                  <span>✓</span> High-Priority SMS
                </div>
                <div className="p-2 bg-white rounded-xl border border-slate-200 flex items-center gap-2 font-semibold text-slate-600">
                  <span>✓</span> Official Email Digest
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Message Content (Auto-Translates to Parent Language):</label>
              <textarea
                rows={3}
                className="w-full p-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-medium"
                defaultValue="Dear Parent, Mid-Term Examination Progress Reports are now published to your SmartSchool portal. You can view detailed subject breakdowns and teacher commentary."
              />
            </div>

            <button 
              type="button"
              onClick={() => {
                setBroadcastSent(true);
                setTimeout(() => setBroadcastSent(false), 4000);
              }}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{broadcastSent ? "✓ Broadcast Sent to 2,840 Families!" : "Broadcast Official Announcement"}</span>
            </button>
          </div>

          {/* Right 6 Cols: Live Phone Preview in WhatsApp */}
          <div className="lg:col-span-6 bg-slate-100 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                <span className="font-bold text-slate-800">Parent WhatsApp Preview</span>
                <span className="text-[10px] text-emerald-600 font-bold">Verified Green Badge</span>
              </div>

              {/* WhatsApp Bubble */}
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center">
                    SG
                  </div>
                  <strong className="text-slate-900 font-extrabold text-xs">SmartSchool Academy</strong>
                </div>
                <p className="text-slate-800 leading-relaxed">
                  Dear Tariq Al-Mansoor, <br /><br />
                  Zayn's <strong>Term 2 Academic Report Card</strong> is ready. Cumulative GPA: <strong>3.94 (A+)</strong>.
                </p>
                <div className="p-2 bg-white rounded-xl border border-emerald-200 flex items-center justify-between">
                  <span className="font-bold text-blue-600">📄 Zayn_Term2_Report.pdf</span>
                  <span className="text-[10px] text-slate-400">184 KB</span>
                </div>
                <span className="text-[10px] text-slate-400 block text-right">09:42 AM • Read ✓✓</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-500 mt-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Arabic &amp; French auto-translated templates delivered based on parent profile settings.</span>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Elevate parent engagement across all touchpoints</h3>
          <p className="text-xs text-slate-600 mt-1">Schedule a walkthrough with our school communication consultants.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Communication Demo
        </Link>
      </div>

    </div>
  );
}
