export interface RegionConfig {
  id: string;
  name: string;
  badge: string;
  leadParagraph: string;
  targetCountries: string[];
  curriculaSupported: string[];
  keyCapabilities: {
    title: string;
    description: string;
    icon: string;
  }[];
  regulatoryContext: string;
}

export const REGIONS_DATA: Record<string, RegionConfig> = {
  gcc: {
    id: "gcc",
    name: "GCC & Gulf Countries",
    badge: "Middle East & GCC Edition",
    leadParagraph: "Tailored for international and private school networks across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman with dual-language English/Arabic readiness, VAT compliance, and multi-campus governance.",
    targetCountries: ["United Arab Emirates (Dubai, Abu Dhabi, Sharjah)", "Kingdom of Saudi Arabia (Riyadh, Jeddah)", "Qatar (Doha)", "Kuwait", "Kingdom of Bahrain", "Sultanate of Oman"],
    curriculaSupported: ["British Curriculum / IGCSE", "IB Primary, Middle & Diploma", "American Common Core & AP", "Ministry of Education (MOE) Arabic & Islamic Studies", "CBSE & ICSE International"],
    keyCapabilities: [
      {
        title: "Bilingual English / Arabic Architecture",
        description: "Native right-to-left (RTL) interface support with localized parent communication across all mobile and web touchpoints.",
        icon: "Languages"
      },
      {
        title: "Regional Tax & E-Invoicing Ready",
        description: "Built-in VAT support for UAE/KSA, ZATCA e-invoicing architecture readiness, and integrated regional payment gateways.",
        icon: "FileText"
      },
      {
        title: "Multi-Campus Private School Chains",
        description: "Centralized HQ oversight for prominent school groups with granular campus-level operational autonomy.",
        icon: "Building"
      },
      {
        title: "Smart Bus & Biometric Gate Safety",
        description: "Real-time RFID student bus telemetry and parent pickup OTP validation tailored to Gulf climate requirements.",
        icon: "Shield"
      }
    ],
    regulatoryContext: "Designed to support regional private education guidelines, Ministry reporting frameworks, and local data privacy principles."
  },
  india: {
    id: "india",
    name: "India & South Asia",
    badge: "India National Edition",
    leadParagraph: "Engineered for high-volume CBSE, ICSE, State Board, and International K-12 institutions with complex fee installment structures, transport routing, and examination rubrics.",
    targetCountries: ["India (All States & Tier 1/2/3 Hubs)", "Nepal", "Sri Lanka", "Bangladesh"],
    curriculaSupported: ["CBSE (NEP 2020 Aligned Frameworks)", "ICSE & ISC Board", "State Education Boards", "Cambridge International & IB World Schools"],
    keyCapabilities: [
      {
        title: "NEP 2020 Holistic Assessment Cards",
        description: "Competency-based report cards, multidimensional grading scales, and formative assessment tracking.",
        icon: "Award"
      },
      {
        title: "High-Volume Fee & Scholarship Rules",
        description: "Tiered installment scheduling, RTE quota tracking, sibling concessions, and multi-bank UPI payment reconciliation.",
        icon: "CreditCard"
      },
      {
        title: "Comprehensive Transport & Route Optimizer",
        description: "Complex multi-stop suburban bus routing, driver allocation, and automated parent WhatsApp departure alerts.",
        icon: "Navigation"
      },
      {
        title: "Staff Biometric & Statutory Deductions",
        description: "Automated PF, ESI, TDS payroll processing, biometric clock-in, and timetable teacher substitution engine.",
        icon: "Users2"
      }
    ],
    regulatoryContext: "Designed to align with Indian national education frameworks, statutory reporting schemas, and digital payment systems."
  },
  africa: {
    id: "africa",
    name: "Africa & Emerging Hubs",
    badge: "Pan-African Cloud Edition",
    leadParagraph: "Mobile-first, low-bandwidth optimized cloud ERP designed for private academies, mission school networks, and expanding education foundations across East, West, and Southern Africa.",
    targetCountries: ["Kenya (Nairobi, Mombasa)", "Nigeria (Lagos, Abuja)", "Ghana (Accra)", "South Africa (Johannesburg, Cape Town)", "Rwanda & Uganda", "Egypt & North Africa"],
    curriculaSupported: ["National Curriculum Frameworks (CBC, 8-4-4, WAEC)", "Cambridge Assessment International Education (CAIE)", "British & American Curricula", "Bilingual French/English Streams"],
    keyCapabilities: [
      {
        title: "Mobile-First Parent & Teacher Experience",
        description: "Lightweight progressive web apps and mobile interfaces engineered to function smoothly even on variable bandwidth.",
        icon: "Smartphone"
      },
      {
        title: "Mobile Money & Multi-Channel Payments",
        description: "Integration-ready architecture for regional mobile money gateways (M-Pesa, MTN MoMo, Flutterwave, Paystack).",
        icon: "Banknote"
      },
      {
        title: "Offline Sync for Remote Campuses",
        description: "Local data caching allowing teachers to mark attendance and grades during network dropouts with automatic cloud sync.",
        icon: "WifiOff"
      },
      {
        title: "Affordable Multi-Campus Scalability",
        description: "Effortlessly manage growing multi-site school networks from a single cloud-hosted control panel.",
        icon: "Layers"
      }
    ],
    regulatoryContext: "Designed to support regional educational compliance, flexible payment rails, and pan-African school development standards."
  },
  global: {
    id: "global",
    name: "Global & International Networks",
    badge: "International Enterprise",
    leadParagraph: "A borderless enterprise cloud platform connecting international school groups across multiple timezones, languages, and national curricula from a single pane of glass.",
    targetCountries: ["United Kingdom", "Singapore & Southeast Asia", "Australia & New Zealand", "Canada & North America", "Global International Schools"],
    curriculaSupported: ["International Baccalaureate (PYP, MYP, DP)", "Cambridge International (IGCSE, A-Levels)", "American High School Diploma & AP", "Custom National Dual-Streams"],
    keyCapabilities: [
      {
        title: "Multi-Timezone & Multi-Currency Ledger",
        description: "Seamlessly consolidate financial, academic, and operational data across diverse international campus branches.",
        icon: "Globe2"
      },
      {
        title: "Role-Based Global Access Control",
        description: "Enterprise hierarchy allowing Board Trustees, Regional Directors, Principals, and Teachers strictly partitioned permissions.",
        icon: "Lock"
      },
      {
        title: "Unified School Group Analytics",
        description: "Compare cross-campus academic standards, student retention rates, and staff efficiency metrics in real time.",
        icon: "BarChart3"
      },
      {
        title: "Cloud High Availability & Redundancy",
        description: "Enterprise multi-region cloud deployment ensuring continuous 99.98% uptime with automated secure backups.",
        icon: "Server"
      }
    ],
    regulatoryContext: "Designed to support international education standards, global student record portability, and robust cloud data governance."
  }
};
