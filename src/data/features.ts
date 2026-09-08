export interface RoleBenefit {
  role: string;
  title: string;
  badge: string;
  avatarIcon: string;
  headline: string;
  keyOutcomes: string[];
  metrics: {
    stat: string;
    label: string;
  }[];
  dashboardHighlights: string[];
}

export const ROLE_BENEFITS: RoleBenefit[] = [
  {
    role: "Principals & School Leaders",
    title: "Executive Vision & Operational Mastery",
    badge: "Leadership Suite",
    avatarIcon: "GraduationCap",
    headline: "Transform high-level academic visions into daily operational excellence with predictive real-time campus analytics.",
    keyOutcomes: [
      "Instant 360° view of campus academic indices, attendance health, and teacher workloads",
      "Automated weekly executive briefs spotlighting classes that need remedial intervention",
      "Unified compliance reporting for Ministry and accreditation board inspections",
      "Real-time visibility over critical campus safety, emergency alerts, and gate operations"
    ],
    metrics: [
      { stat: "96.4%", label: "Operational Efficiency Score" },
      { stat: "14 hrs/wk", label: "Admin Time Saved per Principal" },
      { stat: "100%", label: "Audit Compliance Readiness" }
    ],
    dashboardHighlights: ["Campus Health Radar", "Chronic Absence Warnings", "Live Bus Fleet Map", "Fee Clearance Milestones"]
  },
  {
    role: "Teachers & Academic Coordinators",
    title: "Focus on Teaching, Not Administrative Paperwork",
    badge: "Teacher Workspace",
    avatarIcon: "BookOpen",
    headline: "Simplify daily attendance, digital mark entry, dynamic lesson planning, and student progress communication.",
    keyOutcomes: [
      "One-tap classroom attendance with instant cloud synchronization and parent notification",
      "Intuitive digital gradebook with custom rubrics, automated averages, and tamper checks",
      "Collaborative lesson planning repository with curriculum standard alignments",
      "Direct secure messaging with parents without sharing personal phone numbers"
    ],
    metrics: [
      { stat: "65%", label: "Reduction in Grading Time" },
      { stat: "Zero", label: "Paper Attendance Sheets" },
      { stat: "100%", label: "Curriculum Milestones Tracked" }
    ],
    dashboardHighlights: ["1-Tap Attendance", "Rubric Marksheet", "Digital Lesson Planner", "Parent Messages"]
  },
  {
    role: "Parents & Families",
    title: "Transparent & Connected Parent Partnership",
    badge: "Parent Portal & App",
    avatarIcon: "HeartHandshake",
    headline: "Stay actively engaged in your child’s academic growth, daily safety, fee payments, and school life.",
    keyOutcomes: [
      "Live GPS school bus tracking with dynamic ETA countdown and boarding notifications",
      "Instant access to verified digital report cards, teacher feedback, and homework assignments",
      "1-click digital fee payments with instant tax receipts and installment tracking",
      "Cashless smart wallet management with dietary guardrails and daily spending limits"
    ],
    metrics: [
      { stat: "< 5 sec", label: "Bus Arrival Alert Latency" },
      { stat: "100%", label: "Digital Fee Receipts" },
      { stat: "24/7", label: "Academic Progress Access" }
    ],
    dashboardHighlights: ["Live Bus Telemetry", "Instant Report Card", "1-Click Fee Checkout", "Canteen Nutrition Log"]
  },
  {
    role: "School CFOs & Finance Teams",
    title: "Total Revenue Certainty & Zero Leakage",
    badge: "Financial Control",
    avatarIcon: "BadgePercent",
    headline: "Automate complex fee installment structures, discount matrices, multi-currency ledgers, and bank reconciliations.",
    keyOutcomes: [
      "Dynamic fee scheduling with automatic sibling discounts, scholarships, and transport levies",
      "Multi-gateway digital payment reconciliation matching bank feeds to student accounts",
      "Regional tax (VAT/GST) compliance with automated digital tax invoices",
      "Integrated payroll calculation with biometric clock-in and statutory deductions"
    ],
    metrics: [
      { stat: "99.2%", label: "On-Time Fee Collection Rate" },
      { stat: "Zero", label: "Manual Reconciliation Errors" },
      { stat: "100%", label: "Multi-Currency Audit Trail" }
    ],
    dashboardHighlights: ["Live Fee Inflow Gauge", "Bank Feed Reconciliation", "Scholarship Ledger", "Automated Payroll"]
  },
  {
    role: "IT Heads & Cloud Architects",
    title: "Enterprise Reliability & Zero Maintenance Friction",
    badge: "Infrastructure Suite",
    avatarIcon: "Cpu",
    headline: "Deploy a high-availability, multi-tenant cloud platform with granular role-based permissions and robust data protection.",
    keyOutcomes: [
      "Role-based access control (RBAC) with fine-grained campus and department permissions",
      "Hardware-agnostic IoT sync for biometric turnstiles, RFID scanners, and GPS transponders",
      "Automated geo-redundant database backups with point-in-time recovery",
      "Comprehensive immutable audit logs for all student grade and financial modifications"
    ],
    metrics: [
      { stat: "99.98%", label: "Guaranteed Cloud Uptime" },
      { stat: "AES-256", label: "Data Encryption Standard" },
      { stat: "< 80ms", label: "Average API Response Time" }
    ],
    dashboardHighlights: ["RBAC Permission Matrix", "IoT Device Gateway", "Database Backup Health", "Security Audit Logs"]
  }
];
