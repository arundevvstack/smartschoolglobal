export interface NavSubItem {
  name: string;
  href: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  megaMenu?: {
    featuredTitle?: string;
    featuredDescription?: string;
    featuredLink?: string;
    featuredBadge?: string;
    sections: {
      category: string;
      items: NavSubItem[];
    }[];
  };
}

export const MAIN_NAVIGATION: NavGroup[] = [
  {
    label: "Platform",
    href: "/platform",
    megaMenu: {
      featuredTitle: "Unified School ERP Architecture",
      featuredDescription: "Explore 24+ interconnected modules built on a single high-security cloud database.",
      featuredLink: "/platform",
      featuredBadge: "Enterprise Core",
      sections: [
        {
          category: "Academic & Learning",
          items: [
            { name: "Academics & Curriculum", href: "/academics", description: "Lesson planning & multi-curricula frameworks", icon: "GraduationCap" },
            { name: "Examinations & Grading", href: "/examinations", description: "Tamper-proof marksheets & dynamic report cards", icon: "FileCheck2" },
            { name: "Student 360 Profiles", href: "/student-management", description: "Holistic academic, behavioral & health records", icon: "Users" }
          ]
        },
        {
          category: "Administration & Finance",
          items: [
            { name: "Admissions CRM Pipeline", href: "/admissions", description: "7-stage digital inquiry & enrollment funnel", icon: "UserPlus" },
            { name: "Finance, Fees & Ledger", href: "/finance", description: "Automated invoicing & multi-currency ledger", icon: "Receipt" },
            { name: "HR & Automated Payroll", href: "/hr-payroll", description: "Staff credentials, payslips & biometric clock-in", icon: "Briefcase" }
          ]
        },
        {
          category: "Campus Life & Operations",
          items: [
            { name: "Attendance & Biometrics", href: "/attendance", description: "Facial recognition & RFID turnstile sync", icon: "ScanFace" },
            { name: "Transportation & GPS", href: "/transportation", description: "Live fleet telemetry & student boarding alerts", icon: "Bus" },
            { name: "Campus Security & Gate", href: "/security", description: "Parent OTP pickup & visitor badge system", icon: "ShieldCheck" },
            { name: "Smart Wallet & Canteen", href: "/smart-wallet-canteen", description: "Cashless RFID campus spend & dietary rules", icon: "Wallet" },
            { name: "Hostel & Boarding", href: "/hostel-management", description: "Dormitory bed allocation & curfew check-in", icon: "Building2" },
            { name: "Incident & Safety", href: "/incident-management", description: "Campus safety triage & parent notification", icon: "AlertOctagon" }
          ]
        }
      ]
    }
  },
  {
    label: "AI for Schools",
    href: "/ai-for-schools"
  },
  {
    label: "Academics",
    href: "/academics"
  },
  {
    label: "Admissions",
    href: "/admissions"
  },
  {
    label: "Mobile App",
    href: "/mobile-app"
  },
  {
    label: "Global",
    href: "/global"
  },
  {
    label: "About",
    href: "/about"
  }
];

export const FOOTER_SECTIONS = [
  {
    title: "Product Modules",
    links: [
      { name: "Platform Overview", href: "/platform" },
      { name: "AI Command Center", href: "/ai-for-schools" },
      { name: "Academics & Lesson Plans", href: "/academics" },
      { name: "Admissions CRM", href: "/admissions" },
      { name: "Examinations & Report Cards", href: "/examinations" },
      { name: "Student 360 Management", href: "/student-management" },
      { name: "School Mobile App", href: "/mobile-app" }
    ]
  },
  {
    title: "Operations & Safety",
    links: [
      { name: "Attendance & Biometrics", href: "/attendance" },
      { name: "Omnichannel Communication", href: "/communication" },
      { name: "Transportation & GPS Fleet", href: "/transportation" },
      { name: "Campus Security & Gate Control", href: "/security" },
      { name: "Finance & Fee Collection", href: "/finance" },
      { name: "HR & Automated Payroll", href: "/hr-payroll" },
      { name: "Smart Wallet & Canteen", href: "/smart-wallet-canteen" },
      { name: "Hostel & Dormitory", href: "/hostel-management" },
      { name: "Incident Management", href: "/incident-management" }
    ]
  },
  {
    title: "Global & Regions",
    links: [
      { name: "Multi-Campus Governance", href: "/global" },
      { name: "GCC & Middle East Edition", href: "/global#gcc" },
      { name: "India National Edition", href: "/global#india" },
      { name: "Africa Cloud Edition", href: "/global#africa" },
      { name: "Multi-Currency & VAT Ready", href: "/finance" },
      { name: "Security & Data Governance", href: "/about#security" }
    ]
  },
  {
    title: "Company & Engagement",
    links: [
      { name: "About SmartSchool Global", href: "/about" },
      { name: "Request a Demo", href: "/contact" },
      { name: "Book a Consultation", href: "/contact?intent=consultation" },
      { name: "Talk to an Expert", href: "/contact?intent=expert" },
      { name: "Implementation Methodology", href: "/about#implementation" }
    ]
  }
];
