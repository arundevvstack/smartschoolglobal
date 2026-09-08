"use client";

import React, { useState } from "react";
import { 
  Bus, 
  MapPin, 
  Navigation, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Users,
  Search,
  Sparkles
} from "lucide-react";

interface FleetVehicle {
  id: string;
  routeNumber: string;
  routeName: string;
  driverName: string;
  driverPhone: string;
  vehicleNo: string;
  capacity: string;
  status: "In Transit • On Time" | "Approaching Stop" | "Completed" | "Delayed";
  currentLocation: string;
  studentsBoarded: number;
  totalAssigned: number;
  speedKmH: number;
  nextStop: string;
  eta: string;
}

export default function InteractiveLiveFleetMap() {
  const [selectedBus, setSelectedBus] = useState<number>(0);

  const fleet: FleetVehicle[] = [
    {
      id: "BUS-01",
      routeNumber: "Route #04",
      routeName: "Emirates Hills & Springs Circuit",
      driverName: "Captain Mansoor Ali",
      driverPhone: "+971 50 123 4567",
      vehicleNo: "DXB-K-9428",
      capacity: "32 Seater AC",
      status: "In Transit • On Time",
      currentLocation: "Springs Community Gate 3",
      studentsBoarded: 24,
      totalAssigned: 28,
      speedKmH: 42,
      nextStop: "Meadows East Villa 14",
      eta: "7:44 AM (4 mins)"
    },
    {
      id: "BUS-02",
      routeNumber: "Route #07",
      routeName: "Downtown & Business Bay Express",
      driverName: "Captain Rajesh Kumar",
      driverPhone: "+971 50 987 6543",
      vehicleNo: "DXB-M-1102",
      capacity: "45 Seater AC",
      status: "Approaching Stop",
      currentLocation: "Executive Towers Stop 2",
      studentsBoarded: 38,
      totalAssigned: 42,
      speedKmH: 34,
      nextStop: "Bay Square Junction",
      eta: "7:48 AM (8 mins)"
    },
    {
      id: "BUS-03",
      routeNumber: "Route #12",
      routeName: "Arabian Ranches & Motor City",
      driverName: "Captain Ibrahim Khan",
      driverPhone: "+971 55 456 7890",
      vehicleNo: "DXB-P-7741",
      capacity: "32 Seater AC",
      status: "In Transit • On Time",
      currentLocation: "Arabian Ranches Retail Center",
      studentsBoarded: 28,
      totalAssigned: 28,
      speedKmH: 48,
      nextStop: "School Campus North Gate",
      eta: "7:52 AM (12 mins)"
    }
  ];

  const currentBus = fleet[selectedBus];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <Bus className="w-3.5 h-3.5 text-blue-600" />
            Live GPS Fleet Telemetry &amp; Student Safety
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            School Transportation &amp; Route Command Center
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time GPS bus tracking, student RFID boarding logs, dynamic parent ETA countdown, and driver emergency SOS.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            24/24 Buses Active on Live GPS
          </span>
        </div>
      </div>

      {/* Main Grid: Left Fleet Selector & Route Details | Right Map Simulation */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50/20">
        
        {/* Left 5 Cols: Vehicle Cards */}
        <div className="lg:col-span-5 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Select Active Morning Route:
          </h4>

          {fleet.map((bus, idx) => {
            const isSelected = selectedBus === idx;
            return (
              <div
                key={bus.id}
                onClick={() => setSelectedBus(idx)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2.5 ${
                  isSelected
                    ? "bg-blue-50/80 border-blue-600 ring-1 ring-blue-600 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-blue-100 text-blue-800 rounded-lg text-xs font-black">
                      {bus.routeNumber}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900">{bus.routeName}</h5>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {bus.status.split("•")[0]}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Driver:</span>
                    <strong className="text-slate-800">{bus.driverName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Boarded:</span>
                    <strong className="text-blue-600">{bus.studentsBoarded} / {bus.totalAssigned} Students</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-medium">📍 {bus.nextStop}</span>
                  <span className="font-extrabold text-blue-600">ETA {bus.eta.split("(")[0]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 7 Cols: Interactive Map & Telemetry Dashboard */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          
          {/* Simulated Map Container with Clean Vector UI */}
          <div className="relative h-64 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between p-4">
            
            {/* Ambient Map Grid Background */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Map Header Status */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-xs rounded-lg text-xs font-bold text-slate-800 shadow-2xs border border-slate-200">
                🛰️ Live GPS Telemetry: {currentBus.vehicleNo}
              </span>
              <span className="px-2.5 py-1 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-2xs">
                Speed: {currentBus.speedKmH} km/h
              </span>
            </div>

            {/* Visual Bus Node on Map */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-xl flex items-center gap-2 border-2 border-white animate-bounce">
                <Bus className="w-5 h-5" />
                <span className="font-black text-xs">{currentBus.routeNumber}</span>
              </div>
              <div className="mt-1 px-2.5 py-0.5 bg-slate-900 text-white text-[10px] font-bold rounded-full shadow-md">
                {currentBus.currentLocation}
              </div>
            </div>

            {/* Route Progress Bar */}
            <div className="relative z-10 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Next Stop: <strong>{currentBus.nextStop}</strong></span>
              </div>
              <span className="font-extrabold text-emerald-600">{currentBus.eta}</span>
            </div>

          </div>

          {/* Telemetry Breakdown Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] text-slate-400 font-bold block">Vehicle Type</span>
              <strong className="text-slate-800 font-bold text-xs">{currentBus.capacity}</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] text-slate-400 font-bold block">Speed Limit</span>
              <strong className="text-emerald-700 font-bold text-xs">Safe (&lt; 60 km/h)</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] text-slate-400 font-bold block">RFID Scanner</span>
              <strong className="text-blue-600 font-bold text-xs">100% Operational</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] text-slate-400 font-bold block">Emergency SOS</span>
              <strong className="text-slate-800 font-bold text-xs">Standby • Ready</strong>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-slate-600">Direct Dispatcher Contact: <strong>{currentBus.driverPhone}</strong></span>
            </div>
            <button 
              onClick={() => alert("Simulated Parent WhatsApp Broadcast: Bus #04 ETA 4 minutes away sent to 28 parents.")}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-2xs"
            >
              Broadcast Route ETA to Parents
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
