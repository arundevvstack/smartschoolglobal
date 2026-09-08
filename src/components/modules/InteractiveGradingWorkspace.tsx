"use client";

import React, { useState } from "react";
import { 
  FileCheck2, 
  Sparkles, 
  Printer, 
  Send, 
  CheckCircle2, 
  Lock, 
  Award, 
  TrendingUp, 
  ChevronRight,
  Download,
  Share2
} from "lucide-react";

interface StudentGradeRow {
  rollNo: string;
  name: string;
  mathMarks: number;
  scienceMarks: number;
  englishMarks: number;
  attendancePct: number;
  computedGPA: string;
  grade: string;
  teacherRemark: string;
  status: "Approved" | "Ready for Review";
}

export default function InteractiveGradingWorkspace() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(3); // 0: Creation, 1: Mark Entry, 2: Validation, 3: Auto Grade, 4: Report Card, 5: Publishing
  const [showReportCardModal, setShowReportCardModal] = useState<boolean>(false);
  const [selectedStudentForCard, setSelectedStudentForCard] = useState<StudentGradeRow | null>(null);

  const workflowSteps = [
    "1. Exam Setup",
    "2. Mark Entry",
    "3. Moderation & Lock",
    "4. Auto Grade Generation",
    "5. Dynamic Report Card",
    "6. Instant WhatsApp Publish"
  ];

  const gradebookRows: StudentGradeRow[] = [
    { rollNo: "G8-01", name: "Aarav Patel", mathMarks: 94, scienceMarks: 91, englishMarks: 88, attendancePct: 98, computedGPA: "3.92", grade: "A+", teacherRemark: "Exemplary critical problem solving in physics & algebra.", status: "Approved" },
    { rollNo: "G8-02", name: "Fatima Al-Zahra", mathMarks: 98, scienceMarks: 96, englishMarks: 95, attendancePct: 99, computedGPA: "4.00", grade: "A+", teacherRemark: "Outstanding academic dedication across all subjects.", status: "Approved" },
    { rollNo: "G8-03", name: "Noah Williams", mathMarks: 82, scienceMarks: 85, englishMarks: 89, attendancePct: 94, computedGPA: "3.55", grade: "A-", teacherRemark: "Consistent progress; active class participation.", status: "Approved" },
    { rollNo: "G8-04", name: "Chen Wei", mathMarks: 91, scienceMarks: 88, englishMarks: 84, attendancePct: 96, computedGPA: "3.75", grade: "A", teacherRemark: "Strong analytical rigor; excellent lab journals.", status: "Approved" },
    { rollNo: "G8-05", name: "Zainab Mensah", mathMarks: 76, scienceMarks: 80, englishMarks: 86, attendancePct: 91, computedGPA: "3.20", grade: "B+", teacherRemark: "Remedial math exercises recommended for algebra.", status: "Ready for Review" }
  ];

  const handleOpenCard = (student: StudentGradeRow) => {
    setSelectedStudentForCard(student);
    setShowReportCardModal(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
            Digital Examination &amp; Grade Engine
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Digital Mark Entry &amp; Dynamic Report Card Generator
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Tamper-proof grade calculations, custom rubrics (CBSE, IB, Cambridge), and instant parent publishing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
            Grade 8 • Section A (2026 Mid-Terms)
          </div>
          <button 
            onClick={() => handleOpenCard(gradebookRows[0])}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Preview Report Card</span>
          </button>
        </div>
      </div>

      {/* 6-Step Workflow Rail */}
      <div className="p-3.5 bg-white border-b border-slate-100 overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-[650px]">
          {workflowSteps.map((step, idx) => {
            const isActive = activeWorkflowStep === idx;
            return (
              <button
                key={step}
                onClick={() => setActiveWorkflowStep(idx)}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold text-center transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {step}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Gradebook Table */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-slate-900">Grading Scale:</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">Standard 4.0 Scale + Percentage</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Class Average: 89.2%
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>Mark Sheet Moderated &amp; Locked by HOD</span>
          </div>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-900 font-extrabold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Roll / ID</th>
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-3 text-center">Mathematics (100)</th>
                <th className="py-3 px-3 text-center">Science (100)</th>
                <th className="py-3 px-3 text-center">English (100)</th>
                <th className="py-3 px-3 text-center">Attendance</th>
                <th className="py-3 px-3 text-center">Computed GPA</th>
                <th className="py-3 px-3 text-center">Grade</th>
                <th className="py-3 px-4 text-right">Report Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white font-medium">
              {gradebookRows.map((row) => (
                <tr key={row.rollNo} className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-400">{row.rollNo}</td>
                  <td className="py-3 px-4 font-bold text-slate-900">{row.name}</td>
                  <td className="py-3 px-3 text-center font-bold text-slate-800">{row.mathMarks}</td>
                  <td className="py-3 px-3 text-center font-bold text-slate-800">{row.scienceMarks}</td>
                  <td className="py-3 px-3 text-center font-bold text-slate-800">{row.englishMarks}</td>
                  <td className="py-3 px-3 text-center text-slate-600">{row.attendancePct}%</td>
                  <td className="py-3 px-3 text-center font-black text-blue-600">{row.computedGPA}</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold border border-emerald-200 text-[11px]">
                      {row.grade}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleOpenCard(row)}
                      className="px-2.5 py-1 text-[11px] font-bold text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg border border-blue-200 transition-colors"
                    >
                      View Card
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI Insight Box for Examination */}
        <div className="p-4 bg-cyan-50/50 rounded-2xl border border-cyan-200 flex items-start gap-3 text-xs">
          <Sparkles className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-cyan-950">AI Assessment Moderation Engine:</p>
            <p className="text-slate-600 leading-relaxed">
              Standard deviation in Mid-Term Science across Section A and Section B is within acceptable 1.8% threshold. Automated personalized parent remarks have been pre-drafted for 100% of candidates.
            </p>
          </div>
        </div>

      </div>

      {/* Report Card Modal Preview */}
      {showReportCardModal && selectedStudentForCard && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative animate-in fade-in-0 zoom-in-95">
            
            {/* Header of Report Card */}
            <div className="text-center pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center mx-auto mb-2">
                SG
              </div>
              <h4 className="text-base font-extrabold text-slate-900">SmartSchool International Academy</h4>
              <p className="text-xs text-slate-500">Official Term 2 Comprehensive Academic Progress Report</p>
            </div>

            {/* Student Meta */}
            <div className="grid grid-cols-2 gap-3 text-xs p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-400">Student:</span> <strong className="text-slate-900">{selectedStudentForCard.name}</strong>
              </div>
              <div>
                <span className="text-slate-400">Roll No:</span> <strong className="text-slate-900">{selectedStudentForCard.rollNo}</strong>
              </div>
              <div>
                <span className="text-slate-400">Academic Standing:</span> <strong className="text-emerald-700">Grade {selectedStudentForCard.grade} ({selectedStudentForCard.computedGPA} GPA)</strong>
              </div>
              <div>
                <span className="text-slate-400">Term Attendance:</span> <strong className="text-slate-900">{selectedStudentForCard.attendancePct}%</strong>
              </div>
            </div>

            {/* Subjects Table */}
            <div className="text-xs">
              <table className="w-full text-left">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-2">Subject</th>
                    <th className="p-2 text-center">Marks (100)</th>
                    <th className="p-2 text-center">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-2 font-medium">Advanced Mathematics</td>
                    <td className="p-2 text-center font-bold">{selectedStudentForCard.mathMarks}</td>
                    <td className="p-2 text-center font-bold text-emerald-600">A+</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Integrated Sciences (Physics/Chem)</td>
                    <td className="p-2 text-center font-bold">{selectedStudentForCard.scienceMarks}</td>
                    <td className="p-2 text-center font-bold text-emerald-600">A</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">English Literature &amp; Rhetoric</td>
                    <td className="p-2 text-center font-bold">{selectedStudentForCard.englishMarks}</td>
                    <td className="p-2 text-center font-bold text-blue-600">A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Teacher Remarks */}
            <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-xs">
              <span className="font-bold text-blue-950 block mb-1">Class Teacher Evaluation:</span>
              <p className="text-blue-900">{selectedStudentForCard.teacherRemark}</p>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                onClick={() => setShowReportCardModal(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                Close Preview
              </button>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => alert("Simulated PDF Report Card downloaded successfully.")}
                  className="px-4 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> PDF
                </button>
                <button 
                  onClick={() => alert("Official Report Card dispatched to Parent via WhatsApp Business API & Parent Portal.")}
                  className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Send to Parent
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
