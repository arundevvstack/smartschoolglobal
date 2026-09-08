import React from "react";
import Link from "next/link";
import { FOOTER_SECTIONS } from "@/data/navigation";
import { ShieldCheck, Sparkles, Globe, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-700">
      
      {/* Top Banner: Enterprise Consultation & Demo CTA */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 via-white to-sky-50 rounded-2xl border border-blue-100 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                AI-Powered School Management &amp; Cloud ERP
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Ready to transform your school operations with AI?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Join 44+ leading schools and educational groups worldwide. Experience unified academics, finance, student 360, and smart IoT campus safety.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs transition-all text-center"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?intent=consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-all text-center"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg">
                SG
              </div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                SmartSchool <span className="text-blue-600">Global</span>
              </span>
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>School AI Software</strong> &amp; modern <strong>Cloud School ERP</strong> built for multi-campus K-12 networks, international foundations, and forward-thinking educational institutions.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>GCC • India • Africa • Global</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Enterprise Cloud &amp; Encryption</span>
              </div>
            </div>
          </div>

          {/* Dynamic Category Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* SEO Keywords Block */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
            <strong className="text-slate-700">Enterprise Search Directory:</strong> AI School Management Software • School ERP Software • Cloud School ERP • School Mobile App • Student Management System • School Administration Software • School AI Software • Automated School Examination System • School GPS Transportation Software • Multi-Campus School ERP • GCC School Management System • India CBSE ICSE School ERP.
          </p>
        </div>

        {/* Bottom Bar & Trust Statement */}
        <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SmartSchool Global. All rights reserved.</p>
          
          <div className="flex items-center gap-1 text-[11px] text-slate-500 text-center md:text-right">
            <span>Designed to support global education data and privacy requirements.</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              Trust &amp; Security
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Request Demo
            </Link>
            <Link href="/global" className="hover:text-blue-600 transition-colors">
              Global Compliance
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
