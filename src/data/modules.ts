export interface ModuleItem {
  id: string;
  name: string;
  category: "Academic" | "Administration" | "Operations & Safety" | "Finance & HR" | "AI & Analytics" | "Global";
  slug: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  icon: string;
  badge?: string;
  pagePath: string;
}

export const ERP_MODULES: ModuleItem[] = [
  {
    id: "mod-ai",
    name: "AI Command Center & Predictive Analytics",
    category: "AI & Analytics",
    slug: "ai-for-schools",
    shortDesc: "Real-time student performance forecasting, chronic absentee alerts, and smart timetable conflict resolution.",
    fullDesc: "An enterprise-grade neural intelligence layer embedded across all school operations. It evaluates historical trends, predicts learning risks, and automates principal reports.",
    highlights: ["Predictive Grade Attrition", "Chronic Absence Radar", "Automated Principal Briefs", "Intelligent Schedule Generation"],
    icon: "Sparkles",
    badge: "Intelligence Layer",
    pagePath: "/ai-for-schools"
  },
  {
    id: "mod-academics",
    name: "Academic Management & Curriculum",
    category: "Academic",
    slug: "academics",
    shortDesc: "Multi-curriculum lesson planning, syllabus milestone tracking, teacher workloads, and student learning journeys.",
    fullDesc: "Adaptable curriculum engine supporting IB, Cambridge, CBSE, ICSE, and National frameworks with integrated digital lesson journals and collaborative teacher workspaces.",
    highlights: ["IB / Cambridge / CBSE Ready", "Digital Lesson Planner", "Syllabus Milestones", "Parent Learning Visibility"],
    icon: "GraduationCap",
    pagePath: "/academics"
  },
  {
    id: "mod-admissions",
    name: "Admissions CRM & Enrollment Pipeline",
    category: "Administration",
    slug: "admissions",
    shortDesc: "End-to-end multi-language inquiry funnel, digital document verification, applicant scoring, and automated seat confirmation.",
    fullDesc: "Eliminate paper bottlenecks with a 7-stage digital admissions funnel, parent self-service portal, automated interview scheduling, and instant fee conversion.",
    highlights: ["7-Stage CRM Pipeline", "Multi-Language Application", "Instant Document OCR", "Lead Attribution Analytics"],
    icon: "UserPlus",
    pagePath: "/admissions"
  },
  {
    id: "mod-examinations",
    name: "Examinations & Digital Gradebook",
    category: "Academic",
    slug: "examinations",
    shortDesc: "Automated GPA calculation, custom CBSE/IB report card builders, mark entry locks, and instant result notifications.",
    fullDesc: "Streamline assessment periods with tamper-proof mark submission, automated percentile calculation, moderation workflows, and single-click parent result publishing.",
    highlights: ["Dynamic Report Card Builder", "Custom Grading Scales", "Teacher Mark Approval Flow", "Instant WhatsApp/SMS Delivery"],
    icon: "FileCheck2",
    pagePath: "/examinations"
  },
  {
    id: "mod-student-mgmt",
    name: "Student 360 & Holistic Profiling",
    category: "Administration",
    slug: "student-management",
    shortDesc: "Complete longitudinal student profiles capturing academic milestones, health, behavioral logs, and sibling linkages.",
    fullDesc: "Single source of truth for every learner from enrollment to alumni status. View health logs, attendance history, disciplinary records, and fee status in one view.",
    highlights: ["360° Comprehensive Timeline", "Health & Allergy Records", "Behavioral Merit/Demerit Log", "Family & Sibling Linkage"],
    icon: "Users",
    pagePath: "/student-management"
  },
  {
    id: "mod-mobile",
    name: "School Mobile App Ecosystem",
    category: "Operations & Safety",
    slug: "mobile-app",
    shortDesc: "Dedicated native-feel mobile experiences for Students, Parents, Teachers, Staff, Security, and Bus Drivers.",
    fullDesc: "Role-adaptive mobile application providing real-time bus tracking, push notifications, digital fee payments, homework submissions, and offline sync capabilities.",
    highlights: ["6 Tailored User Roles", "Push Alerts & Biometric Login", "Offline Homework Sync", "In-App Fee Clearance"],
    icon: "Smartphone",
    badge: "Multi-Role App",
    pagePath: "/mobile-app"
  },
  {
    id: "mod-attendance",
    name: "Attendance & Biometric Sync",
    category: "Operations & Safety",
    slug: "attendance",
    shortDesc: "Biometric turnstile, RFID card, and mobile geofencing attendance with instant parent check-in notifications.",
    fullDesc: "Eliminate manual roll call errors with multi-modal hardware synchronization, real-time absence escalation, and automated compliance attendance rosters.",
    highlights: ["RFID & Facial Biometric Integration", "Sub-second Parent Notifications", "Subject-wise Attendance", "Chronic Absenteeism Radar"],
    icon: "ScanFace",
    pagePath: "/attendance"
  },
  {
    id: "mod-communication",
    name: "Omnichannel Communication Hub",
    category: "Operations & Safety",
    slug: "communication",
    shortDesc: "Unified WhatsApp Business API, SMS, Email, and in-app emergency broadcast center with multi-language templates.",
    fullDesc: "Ensure parents and staff never miss critical announcements. Send targeted circulars, fee reminders, bus delay alerts, and one-touch emergency campus broadcasts.",
    highlights: ["WhatsApp Official API Gateway", "One-Click Emergency Broadcast", "Multi-Language Auto-Translate", "Delivery & Read Receipts"],
    icon: "MessageSquareText",
    pagePath: "/communication"
  },
  {
    id: "mod-finance",
    name: "Finance, Fees & Multi-Currency Ledger",
    category: "Finance & HR",
    slug: "finance",
    shortDesc: "Automated fee invoicing, digital gateway reconciliation, multi-currency support, tax compliance, and ledger audits.",
    fullDesc: "Comprehensive financial accounting engine built for single schools and multi-entity school groups. Supports installment plans, scholarships, sibling discounts, and automated bank reconciliation.",
    highlights: ["Dynamic Fee Structure Engine", "Multi-Gateway Reconciliation", "Multi-Currency & Tax Ready", "Real-Time Ledger & Balance Sheets"],
    icon: "Receipt",
    pagePath: "/finance"
  },
  {
    id: "mod-transport",
    name: "Transportation & Live Fleet Telemetry",
    category: "Operations & Safety",
    slug: "transportation",
    shortDesc: "Live GPS bus tracking, student boarding RFID scans, optimized route geofencing, and driver emergency SOS system.",
    fullDesc: "Keep parents informed and students safe with live route visualization, speed threshold monitors, automated ETA alerts, and instant driver communications.",
    highlights: ["Sub-5s GPS Fleet Telemetry", "RFID Student Boarding Scans", "Parent ETA Notifications", "Driver SOS Emergency Trigger"],
    icon: "Bus",
    pagePath: "/transportation"
  },
  {
    id: "mod-security",
    name: "Campus Security & Gate Command",
    category: "Operations & Safety",
    slug: "security",
    shortDesc: "Digital visitor badges with instant photo ID, student out-passes, Parent OTP pickup verification, and gate audit logs.",
    fullDesc: "Fortify school entry points with instant visitor badge generation, pre-authorized parent pickup codes, student movement authorization, and digital perimeter audits.",
    highlights: ["Parent Pickup OTP Verification", "Instant Visitor Photo Passes", "Digital Student Out-Passes", "24/7 Gate Entry Audit Log"],
    icon: "ShieldCheck",
    pagePath: "/security"
  },
  {
    id: "mod-hr-payroll",
    name: "HR, Staff & Automated Payroll",
    category: "Finance & HR",
    slug: "hr-payroll",
    shortDesc: "Teacher credential management, biometric staff attendance, salary slip generation, deductions, and leave planner.",
    fullDesc: "Manage teaching and administrative workforce with customized salary structures, statutory tax deductions, biometric clock-in, substitution management, and leave workflows.",
    highlights: ["Custom Salary & Allowance Rules", "Biometric Staff Clock-In", "Automated Payslip Generation", "Smart Teacher Substitution"],
    icon: "Briefcase",
    pagePath: "/hr-payroll"
  },
  {
    id: "mod-canteen",
    name: "Smart Wallet & Canteen POS",
    category: "Operations & Safety",
    slug: "smart-wallet-canteen",
    shortDesc: "Cashless student RFID wristbands, daily spend limits, allergy alerts, and touch POS meal distribution.",
    fullDesc: "Create a safe, cashless campus experience. Parents can top up digital wallets, set daily spending limits, specify dietary restrictions, and track nutritional intake.",
    highlights: ["Cashless RFID Wristband Top-ups", "Dietary & Allergy Warning Flags", "Parent Daily Spend Controls", "High-Speed Touchscreen POS"],
    icon: "Wallet",
    pagePath: "/smart-wallet-canteen"
  },
  {
    id: "mod-hostel",
    name: "Hostel & Boarding Management",
    category: "Operations & Safety",
    slug: "hostel-management",
    shortDesc: "Dormitory bed allocation, night curfew roll call, mess management, visitor passes, and warden logbooks.",
    fullDesc: "A complete residential school operations console tracking room inventory, biometric night curfew check-ins, medical room records, and weekend outing authorizations.",
    highlights: ["Visual Room & Bed Allocation", "Night Curfew Attendance Sync", "Warden Medical & Incident Log", "Parent Outing Approvals"],
    icon: "Building2",
    pagePath: "/hostel-management"
  },
  {
    id: "mod-incidents",
    name: "Incident Management & Safety",
    category: "Operations & Safety",
    slug: "incident-management",
    shortDesc: "Multi-tier safety incident reporting, disciplinary tracking, resolution workflows, and compliance audits.",
    fullDesc: "Ensure transparent campus safety governance with real-time incident logging, severity triage, parent notifications, counseling notes, and preventative analytics.",
    highlights: ["Severity-Triage Incident Log", "Confidential Counselor Notes", "Escalation Matrix & Parent Sync", "Campus Safety Trend Analytics"],
    icon: "AlertOctagon",
    pagePath: "/incident-management"
  },
  {
    id: "mod-global",
    name: "Multi-Country & Multi-Campus Governance",
    category: "Global",
    slug: "global",
    shortDesc: "Unified governance across multiple school brands, campuses, countries, currencies, and regulatory tax jurisdictions.",
    fullDesc: "Architected for international school foundations and multi-campus chains. Standardize group-wide policies while granting campuses autonomy over regional academic calendars and fees.",
    highlights: ["Multi-Entity Group Architecture", "Regional Tax & Currency Switcher", "Consolidated Group Financials", "Role-Based Global Access Control"],
    icon: "Globe",
    badge: "Global Scale",
    pagePath: "/global"
  }
];
