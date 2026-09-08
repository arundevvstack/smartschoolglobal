export interface AIScenario {
  id: string;
  category: "Attendance Risk" | "Academic Performance" | "Principal Briefing" | "Timetable Scheduling" | "Fee Analytics" | "Campus Safety";
  question: string;
  aiSummary: string;
  keyMetric: {
    label: string;
    value: string;
    trend: "up" | "down" | "neutral";
    status: "warning" | "success" | "critical" | "info";
  };
  details: string[];
  suggestedAction: string;
  actionRoute: string;
  contextPill: string;
}

export const AI_SCENARIOS: AIScenario[] = [
  {
    id: "ai-att-risk",
    category: "Attendance Risk",
    question: "Which students have attendance below 85% this month?",
    aiSummary: "18 students currently fall below the 85% threshold across Grade 7 through Grade 11. 4 of these students exhibit consecutive Friday pattern absences.",
    keyMetric: {
      label: "Identified At-Risk Learners",
      value: "18 Students",
      trend: "up",
      status: "warning"
    },
    details: [
      "Grade 9-B shows the highest cluster with 6 students below threshold",
      "Average attendance drop observed: 12.4% compared to previous term",
      "Automated early-intervention SMS alerts drafted for parent review",
      "Chronic absence correlation detected with 1st period transit delays"
    ],
    suggestedAction: "Trigger Parent Advisory & Counselor Notification Flow",
    actionRoute: "/attendance",
    contextPill: "Predictive Attendance Radar"
  },
  {
    id: "ai-math-grades",
    category: "Academic Performance",
    question: "Which classes are underperforming in mathematics assessments?",
    aiSummary: "Grade 8 Section C shows a 14.2% downward variance in Mid-Term Algebra compared to the historical grade baseline. Physics correlations indicate a concept gap in linear equations.",
    keyMetric: {
      label: "Section C Performance Gap",
      value: "-14.2%",
      trend: "down",
      status: "critical"
    },
    details: [
      "Target Topic: Algebraic Expressions & Polynomial factorisation",
      "Teacher workload index: 28 periods/week (High substitution load)",
      "Recommended: 3 remedial micro-modules generated from question bank",
      "Comparison: Section A (+4.8%) and Section B (+1.2%) remain steady"
    ],
    suggestedAction: "Generate Remedial Learning Plan & Assign Practice Sets",
    actionRoute: "/examinations",
    contextPill: "Cognitive Assessment Engine"
  },
  {
    id: "ai-principal-brief",
    category: "Principal Briefing",
    question: "Generate the weekly campus executive briefing for the Principal.",
    aiSummary: "Weekly Campus Health Score: 94.6/100. Overall student attendance averaged 96.2%. Admissions inquiry conversions grew by 18%. 98.4% fee milestone reached for Q2.",
    keyMetric: {
      label: "Campus Operational Index",
      value: "94.6 / 100",
      trend: "up",
      status: "success"
    },
    details: [
      "Total Active Students on Campus: 2,840 across 3 Wings",
      "Staff Attendance: 98.1% with zero unallocated substitute periods",
      "Admissions Pipeline: 42 new applications in Review Stage this week",
      "Fleet Telemetry: 100% on-time bus arrivals across all 24 morning routes"
    ],
    suggestedAction: "Export Executive PDF & Email to School Board",
    actionRoute: "/platform",
    contextPill: "Executive Intelligence"
  },
  {
    id: "ai-timetable-conflict",
    category: "Timetable Scheduling",
    question: "Resolve teacher substitution conflict for Grade 10 Science tomorrow.",
    aiSummary: "Identified 2 unassigned chemistry laboratory sessions due to medical leave. Algorithm matched Mrs. Davis (Physics/Chemistry qualified) with matching free period 3 & 5.",
    keyMetric: {
      label: "Substitution Conflict Solved",
      value: "100% Covered",
      trend: "neutral",
      status: "success"
    },
    details: [
      "Lab room availability verified with zero room overlap",
      "Teacher workload compliance checked against 24 max weekly periods",
      "Automated push notification sent to substitute teacher mobile app",
      "Class digital board updated with revised session agenda"
    ],
    suggestedAction: "Confirm Substitution & Update Class Timetable",
    actionRoute: "/academics",
    contextPill: "Smart Schedule Optimizer"
  },
  {
    id: "ai-fee-forecast",
    category: "Fee Analytics",
    question: "Forecast Q3 fee collection reconciliation and outstanding dues.",
    aiSummary: "Projected 96.8% fee clearance within 10 days of due date. 34 accounts flagged for automated gentle WhatsApp reminders based on past payment behavior.",
    keyMetric: {
      label: "Forecasted Collection Rate",
      value: "96.8%",
      trend: "up",
      status: "info"
    },
    details: [
      "Total Projected Inflow: $428,500 (AED 1.57M equivalent)",
      "Early Payment Discount claimed by 412 families (14.5%)",
      "Zero manual ledger entries required with auto-reconciled bank feeds",
      "Sibling concessions verified across 188 linked student profiles"
    ],
    suggestedAction: "Schedule Automated Smart WhatsApp Fee Reminders",
    actionRoute: "/finance",
    contextPill: "Financial Intelligence"
  },
  {
    id: "ai-fleet-safety",
    category: "Campus Safety",
    question: "Check active transportation telemetry and student boarding status.",
    aiSummary: "24 of 24 school buses are currently on active morning routes. All 842 registered bus riders are RFID scanned at boarding points. Zero route deviations detected.",
    keyMetric: {
      label: "Fleet On-Schedule Rate",
      value: "100%",
      trend: "neutral",
      status: "success"
    },
    details: [
      "Average Campus ETA: 7:42 AM (18 minutes ahead of bell)",
      "Live GPS Ping Latency: 2.1 seconds across cellular gateway",
      "Speed alert threshold (60 km/h) respected across all drivers",
      "Parent mobile app live bus radar viewed by 610 active parents"
    ],
    suggestedAction: "Open Live GPS Command Map",
    actionRoute: "/transportation",
    contextPill: "IoT Fleet Safety"
  }
];
