"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  Building, 
  Users, 
  Globe, 
  Mail, 
  User, 
  Sparkles, 
  ShieldCheck, 
  Calendar
} from "lucide-react";

export default function ConsultationForm({ defaultIntent = "demo" }: { defaultIntent?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    schoolName: "",
    country: "United Arab Emirates",
    role: "Principal / Head of School",
    studentCount: "1,000 – 2,500 Students",
    campusCount: "1 – 3 Campuses",
    interestedModules: ["AI Intelligence & Analytics", "Admissions & Student 360"],
    message: ""
  });

  const moduleOptions = [
    "AI Intelligence & Analytics",
    "Academics & Lesson Planning",
    "Examinations & Report Cards",
    "Admissions & Student 360",
    "School Mobile App (6 Roles)",
    "Attendance & Biometric Gates",
    "Transportation & GPS Fleet",
    "Finance, Fees & Ledger",
    "Campus Security & Passes",
    "HR & Automated Payroll"
  ];

  const toggleModule = (mod: string) => {
    setFormData(prev => {
      const exists = prev.interestedModules.includes(mod);
      return {
        ...prev,
        interestedModules: exists 
          ? prev.interestedModules.filter(m => m !== mod)
          : [...prev.interestedModules, mod]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-emerald-200 p-8 sm:p-12 text-center space-y-6 shadow-xl max-w-xl mx-auto animate-in fade-in-0 zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-2xs">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Consultation Scheduled
          </span>
          <h3 className="text-2xl font-black text-slate-900 mt-3">
            Thank you, {formData.fullName.split(" ")[0] || "Executive"}!
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Our Senior Education Technology Architect will review your institution's profile (<strong>{formData.schoolName || "Your School"}</strong>) and contact you at <strong>{formData.workEmail}</strong> within 4 business hours to deliver a tailored walkthrough of SmartSchool Global.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-left space-y-2">
          <div className="flex justify-between"><span className="text-slate-400">Target Region:</span> <strong className="text-slate-800">{formData.country}</strong></div>
          <div className="flex justify-between"><span className="text-slate-400">Scope:</span> <strong className="text-slate-800">{formData.studentCount} ({formData.campusCount})</strong></div>
          <div className="flex justify-between"><span className="text-slate-400">Selected Modules:</span> <strong className="text-blue-600">{formData.interestedModules.length} Enterprise Modules</strong></div>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition-all cursor-pointer"
        >
          Submit another inquiry or update requirements
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6">
      
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
          <Calendar className="w-3.5 h-3.5 text-blue-600" />
          Executive Consultation &amp; Platform Demo
        </div>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          Request a Tailored Demo for Your School
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Experience how SmartSchool Global unifies academics, finance, student 360, and AI operations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-800">Your Full Name *</label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder="e.g. Dr. Arthur Pendelton"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white hover:border-slate-300 transition-all"
            />
          </div>
        </div>

        {/* Work Email */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-800">Official Work Email *</label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              placeholder="e.g. principal@internationalschool.edu"
              value={formData.workEmail}
              onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white hover:border-slate-300 transition-all"
            />
          </div>
        </div>

        {/* School Name */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-800">School / Institution Name *</label>
          <div className="relative">
            <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder="e.g. Oakridge Global Academy"
              value={formData.schoolName}
              onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white hover:border-slate-300 transition-all"
            />
          </div>
        </div>

        {/* Country */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-800">Country / Region *</label>
          <div className="relative">
            <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white hover:border-slate-300 transition-all cursor-pointer"
            >
              <option>United Arab Emirates (UAE)</option>
              <option>Kingdom of Saudi Arabia (KSA)</option>
              <option>Qatar</option>
              <option>Kuwait</option>
              <option>Bahrain</option>
              <option>Oman</option>
              <option>India</option>
              <option>Kenya</option>
              <option>Nigeria</option>
              <option>Ghana</option>
              <option>South Africa</option>
              <option>United Kingdom</option>
              <option>Singapore</option>
              <option>Other Global Country</option>
            </select>
          </div>
        </div>

        {/* Role */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-800">Your Role *</label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white hover:border-slate-300 transition-all cursor-pointer"
          >
            <option>Principal / Head of School</option>
            <option>School Group CEO / Managing Trustee</option>
            <option>Academic Director / Dean</option>
            <option>Chief Financial Officer (CFO)</option>
            <option>IT Director / Technology Head</option>
            <option>Admissions &amp; Marketing Director</option>
            <option>School Administrator</option>
          </select>
        </div>

        {/* Number of Students */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-800">Total Student Body *</label>
          <select
            value={formData.studentCount}
            onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white hover:border-slate-300 transition-all cursor-pointer"
          >
            <option>Under 500 Students</option>
            <option>500 – 1,000 Students</option>
            <option>1,000 – 2,500 Students</option>
            <option>2,500 – 5,000 Students</option>
            <option>5,000+ Students (Multi-Campus Group)</option>
          </select>
        </div>

        {/* Number of Campuses */}
        <div className="space-y-1.5 sm:col-span-2">
          <label className="font-bold text-slate-800">Number of Campuses / Entities</label>
          <select
            value={formData.campusCount}
            onChange={(e) => setFormData({ ...formData, campusCount: e.target.value })}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-hidden focus:border-blue-500 focus:bg-white hover:border-slate-300 transition-all cursor-pointer"
          >
            <option>Single Campus School</option>
            <option>2 – 3 Campuses</option>
            <option>4 – 10 Campuses</option>
            <option>10+ Multi-Country Campus Network</option>
          </select>
        </div>

      </div>

      {/* Interested Modules Multi-Checkbox */}
      <div className="space-y-2 text-xs">
        <label className="font-bold text-slate-800 block">
          Select Key Modules of Interest (Optional):
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {moduleOptions.map((mod) => {
            const isChecked = formData.interestedModules.includes(mod);
            return (
              <button
                type="button"
                key={mod}
                onClick={() => toggleModule(mod)}
                className={`p-2.5 rounded-xl border text-left font-semibold text-[11px] transition-all flex items-center gap-2 cursor-pointer ${
                  isChecked
                    ? "bg-blue-50/90 border-blue-600 text-blue-900 shadow-2xs scale-101"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                  isChecked ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-slate-300"
                }`}>
                  {isChecked && <span className="text-[10px] font-bold">✓</span>}
                </div>
                <span className="truncate">{mod}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5 text-xs">
        <label className="font-bold text-slate-800">Special Requirements or Current Challenges</label>
        <textarea
          rows={3}
          placeholder="Tell us about your current systems, data migration needs, or specific timing requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500 focus:bg-white hover:border-slate-300 transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn-primary-hover w-full py-4 bg-blue-600 text-white font-extrabold text-sm rounded-2xl shadow-xs flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>Request a Demo</span>
        <Send className="w-4 h-4" />
      </button>

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>Designed to support global education data and privacy requirements • Zero spam guarantee</span>
      </div>

    </form>
  );
}
