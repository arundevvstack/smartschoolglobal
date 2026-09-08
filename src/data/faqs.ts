export interface FAQItem {
  id: string;
  category: "Architecture & Security" | "Implementation" | "AI Capabilities" | "Multi-Campus" | "Integrations";
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Architecture & Security",
    question: "How does SmartSchool Global ensure student data privacy across regional jurisdictions?",
    answer: "SmartSchool Global is designed to support global education data and privacy principles. All institutional and student records are encrypted at rest (AES-256) and in transit (TLS 1.3). Multi-tenant isolation guarantees that your school's data remains segregated with regional data residency capabilities for GCC, India, and Pan-African deployments."
  },
  {
    id: "faq-2",
    category: "AI Capabilities",
    question: "Is the AI layer truly predictive, or is it merely rule-based notifications?",
    answer: "SmartSchool incorporates dedicated machine learning algorithms that analyze multi-term historical academic trends, attendance correlations, and behavioral patterns. It provides early warnings on learning regressions weeks before standard term-end exams, and continuously computes timetable conflict resolutions."
  },
  {
    id: "faq-3",
    category: "Multi-Campus",
    question: "Can a global school group govern multiple campuses across different countries with differing curricula?",
    answer: "Yes. The platform's multi-tier governance model allows a single central board/HQ to monitor consolidated academic and financial health while each individual campus configures its own local curriculum (e.g. IB in Dubai, CBSE in New Delhi, Cambridge in Nairobi), academic calendar, local currencies, and tax rules."
  },
  {
    id: "faq-4",
    category: "Implementation",
    question: "What is the typical deployment timeline for an enterprise K-12 institution?",
    answer: "Our standard structured onboarding spans 2 to 6 weeks depending on data volume and campus count. This includes historical student data migration, staff role training, timetable configuration, hardware integration for biometrics/RFID, and parent portal onboarding with zero disruption to daily school operations."
  },
  {
    id: "faq-5",
    category: "Integrations",
    question: "How does SmartSchool integrate with existing school biometric turnstiles and payment gateways?",
    answer: "SmartSchool features pre-built IoT hardware sync connectors for standard biometric devices, RFID readers, and turnstile controllers. For finance, it provides integration-ready gateways for regional bank feeds, Stripe, Razorpay, M-Pesa, Paystack, and Gulf payment channels with automated reconciliation."
  },
  {
    id: "faq-6",
    category: "Architecture & Security",
    question: "Does the mobile application require continuous high-speed internet connectivity?",
    answer: "No. The SmartSchool mobile app features an intelligent offline caching layer. Teachers can mark classroom attendance and log grades during temporary connectivity outages; once reconnected, the app automatically synchronizes verified records with the cloud database."
  }
];
