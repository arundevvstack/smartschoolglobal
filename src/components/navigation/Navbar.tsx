"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sparkles, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  FileCheck2, 
  Users, 
  UserPlus, 
  Receipt, 
  Briefcase, 
  ScanFace, 
  Bus, 
  ShieldCheck, 
  Wallet, 
  AlertOctagon, 
  Globe,
  PhoneCall
} from "lucide-react";
import { MAIN_NAVIGATION } from "@/data/navigation";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  FileCheck2: <FileCheck2 className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  Users: <Users className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  UserPlus: <UserPlus className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  Receipt: <Receipt className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  Briefcase: <Briefcase className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  ScanFace: <ScanFace className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  Bus: <Bus className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  Wallet: <Wallet className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  Building2: <Building2 className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  AlertOctagon: <AlertOctagon className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />,
  Globe: <Globe className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-250 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3" 
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 group-hover:scale-105 group-hover:shadow-md transition-all">
              <span className="font-extrabold text-xl tracking-tighter">SG</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900 leading-tight tracking-tight flex items-center gap-1.5 group-hover:text-blue-600 transition-colors">
                SmartSchool <span className="text-blue-600 font-extrabold">Global</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                AI &amp; Education ERP Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {MAIN_NAVIGATION.map((item) => {
              const hasMega = !!item.megaMenu;
              const isActive = pathname === item.href;

              return (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMega && setActiveMegaMenu(item.label)}
                  onMouseLeave={() => hasMega && setActiveMegaMenu(null)}
                >
                  <Link
                    href={item.href || "#"}
                    className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                      isActive 
                        ? "text-blue-600 bg-blue-50/80 shadow-2xs font-bold" 
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/70"
                    }`}
                  >
                    {item.label}
                    {item.label === "AI for Schools" && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200 group-hover:border-cyan-400 transition-colors">
                        <Sparkles className="w-2.5 h-2.5 mr-0.5 text-cyan-600" />
                        AI
                      </span>
                    )}
                    {hasMega && (
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        activeMegaMenu === item.label ? "rotate-180 text-blue-600" : ""
                      }`} />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {hasMega && activeMegaMenu === item.label && item.megaMenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] pt-3 animate-in fade-in-0 slide-in-from-top-1 duration-150">
                      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 grid grid-cols-3 gap-6">
                        
                        {item.megaMenu.sections.map((sec) => (
                          <div key={sec.category} className="space-y-3">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              {sec.category}
                            </h4>
                            <div className="space-y-1">
                              {sec.items.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-blue-50/60 hover:translate-x-0.5 transition-all"
                                >
                                  <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-2xs transition-all mt-0.5">
                                    {iconMap[sub.icon] || <GraduationCap className="w-4 h-4 text-blue-600" />}
                                  </div>
                                  <div>
                                    <div className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                      {sub.name}
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                                      {sub.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact?intent=consultation"
              className="btn-secondary-hover inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg shadow-2xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
              Talk to an Expert
            </Link>

            <Link
              href="/contact"
              className="btn-primary-hover inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg shadow-xs"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
            >
              Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white border-t border-slate-200 z-50 overflow-y-auto p-4 flex flex-col justify-between animate-in fade-in-0 duration-150">
          <div className="space-y-4">
            
            <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-blue-900">SmartSchool Global Enterprise</p>
                <p className="text-[11px] text-blue-700">AI &amp; School ERP across 44+ institutions</p>
              </div>
              <Link 
                href="/contact"
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-2xs"
              >
                Book
              </Link>
            </div>

            <div className="space-y-1">
              {[
                { name: "Platform Architecture (All Modules)", href: "/platform" },
                { name: "AI for Schools", href: "/ai-for-schools", badge: "AI Layer" },
                { name: "Academics & Curriculum", href: "/academics" },
                { name: "Admissions CRM Pipeline", href: "/admissions" },
                { name: "Examinations & Report Cards", href: "/examinations" },
                { name: "Student 360 Profiles", href: "/student-management" },
                { name: "School Mobile App (6 Roles)", href: "/mobile-app" },
                { name: "Attendance & Biometrics", href: "/attendance" },
                { name: "Omnichannel Communication", href: "/communication" },
                { name: "Finance, Fees & Multi-Currency", href: "/finance" },
                { name: "Transportation & Live Fleet", href: "/transportation" },
                { name: "Campus Security & Gate Control", href: "/security" },
                { name: "HR & Automated Payroll", href: "/hr-payroll" },
                { name: "Smart Wallet & Canteen", href: "/smart-wallet-canteen" },
                { name: "Hostel & Boarding Management", href: "/hostel-management" },
                { name: "Incident & Safety Management", href: "/incident-management" },
                { name: "Multi-Country & Multi-Campus (GCC / India / Africa)", href: "/global" },
                { name: "About SmartSchool Global", href: "/about" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-slate-800 rounded-xl hover:bg-blue-50/70 hover:text-blue-600 transition-colors border-b border-slate-100 last:border-0"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded-full font-extrabold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

          </div>

          <div className="pt-4 pb-6 border-t border-slate-200 space-y-2">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center shadow-xs transition-all"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?intent=consultation"
              className="w-full flex items-center justify-center py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold rounded-xl text-center transition-all"
            >
              Book an Executive Consultation
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}
