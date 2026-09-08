import React from "react";
import type { Metadata } from "next";
import InteractiveMobilePhoneMockup from "@/components/modules/InteractiveMobilePhoneMockup";
import { Smartphone, Bell, WifiOff, ShieldCheck, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "School Mobile App — 6 Tailored User Experiences",
  description: "Native-feel school mobile application for Parents, Students, Teachers, Staff, Bus Drivers, and Security Guards with real-time GPS tracking and offline sync."
};

export default function MobileAppPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Smartphone className="w-3.5 h-3.5 text-blue-600" />
          School Mobile App Ecosystem
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          One Mobile App. 6 Dedicated User Roles.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          SmartSchool Global adapts its entire interface depending on who logs in. Parents track live buses and pay fees; teachers submit 1-tap attendance; students view timetables and submit homework; drivers view RFID boarding manifests.
        </p>
      </div>

      {/* Interactive Mobile Phone Simulator */}
      <InteractiveMobilePhoneMockup />

      {/* Mobile Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <WifiOff className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Intelligent Offline Caching</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Teachers can take attendance and grade offline during network drops in remote campus areas. The app automatically reconciles with the cloud upon reconnection.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl w-fit">
            <Bell className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Sub-Second Push Notifications</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Instant alerts for bus arrival ETA, student gate departure, emergency circulars, and digital fee receipts keep the school community connected.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Biometric &amp; OTP Authentication</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Face ID, fingerprint login, and dynamic parent pickup OTP codes ensure confidential student data remains strictly protected.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Deploy a branded mobile app for your school</h3>
          <p className="text-xs text-slate-600 mt-1">Available for iOS and Android with customized school colors and emblem.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Mobile App Demo
        </Link>
      </div>

    </div>
  );
}
