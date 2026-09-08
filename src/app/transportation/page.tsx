import React from "react";
import type { Metadata } from "next";
import InteractiveLiveFleetMap from "@/components/modules/InteractiveLiveFleetMap";
import { Bus, MapPin, ShieldCheck, CheckCircle2, ArrowRight, Zap, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transportation & Live GPS Fleet Telemetry — SmartSchool Global",
  description: "Live GPS school bus tracking, student RFID boarding scans, optimized route geofencing, driver SOS system, and dynamic parent ETA alerts."
};

export default function TransportationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <Bus className="w-3.5 h-3.5 text-blue-600" />
          IoT Transportation &amp; Fleet Safety
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Live GPS Transportation &amp; Fleet Safety Command
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Ensure student safety on every commute. Real-time GPS bus telemetry, RFID boarding scans at every stop, speed threshold monitoring, and dynamic parent ETA countdown alerts.
        </p>
      </div>

      {/* Interactive Fleet Map Component */}
      <InteractiveLiveFleetMap />

      {/* Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Sub-5s Live GPS Telemetry</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            High-frequency GPS pinging with cellular fallback delivers ultra-accurate live location radar on parent and transport supervisor dashboards.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">RFID Student Boarding Scans</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Students tap their smart RFID cards upon boarding and deboarding the bus. Parents receive instant WhatsApp confirmation with exact stop timestamps.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Driver SOS &amp; Speed Radar</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Instant driver emergency SOS broadcast button and automated speed violation alerts ensure drivers adhere to school safety transit guidelines.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Enhance your school's transit safety</h3>
          <p className="text-xs text-slate-600 mt-1">We support integration with existing vehicle GPS transponders and mobile driver handsets.</p>
        </div>
        <Link
          href="/contact?intent=demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
        >
          Request Transport Demo
        </Link>
      </div>

    </div>
  );
}
