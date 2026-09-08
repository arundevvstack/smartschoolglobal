"use client";

import React, { useState } from "react";
import { AI_SCENARIOS, AIScenario } from "@/data/aiScenarios";
import { 
  Sparkles, 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingDown, 
  TrendingUp, 
  FileText, 
  RefreshCw,
  Zap,
  ChevronRight,
  ShieldCheck,
  Bot
} from "lucide-react";
import Link from "next/link";

export default function AICommandSimulator() {
  const [selectedScenario, setSelectedScenario] = useState<AIScenario>(AI_SCENARIOS[0]);
  const [customInput, setCustomInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectScenario = (scenario: AIScenario) => {
    setIsTyping(true);
    setTimeout(() => {
      setSelectedScenario(scenario);
      setIsTyping(false);
    }, 250);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    
    const lower = customInput.toLowerCase();
    const match = AI_SCENARIOS.find(s => 
      s.question.toLowerCase().includes(lower) || 
      lower.includes("attendance") && s.category === "Attendance Risk" ||
      (lower.includes("math") || lower.includes("grade")) && s.category === "Academic Performance" ||
      (lower.includes("principal") || lower.includes("report")) && s.category === "Principal Briefing" ||
      (lower.includes("timetable") || lower.includes("substitute")) && s.category === "Timetable Scheduling" ||
      (lower.includes("fee") || lower.includes("finance")) && s.category === "Fee Analytics" ||
      (lower.includes("bus") || lower.includes("transport")) && s.category === "Campus Safety"
    ) || AI_SCENARIOS[1];

    setIsTyping(true);
    setTimeout(() => {
      setSelectedScenario({
        ...match,
        question: customInput
      });
      setCustomInput("");
      setIsTyping(false);
    }, 350);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      
      {/* Header */}
      <div className="p-4 sm:p-6 bg-slate-50/70 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-1 hover:bg-cyan-100 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
            Interactive Neural School Intelligence
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Ask SmartSchool AI Anything About Your School
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Core Neural Engine v4.2 Active</span>
        </div>
      </div>

      {/* Preset Interactive Prompts Bar */}
      <div className="p-3 sm:p-4 bg-white border-b border-slate-100 flex items-center gap-2 overflow-x-auto">
        <span className="text-xs font-bold text-slate-400 shrink-0">Try Query:</span>
        {AI_SCENARIOS.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => handleSelectScenario(scenario)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-all cursor-pointer ${
              selectedScenario.id === scenario.id
                ? "bg-cyan-600 text-white shadow-xs font-bold scale-102"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            {scenario.category}
          </button>
        ))}
      </div>

      {/* Simulation Console Body */}
      <div className="p-4 sm:p-6 space-y-6 bg-slate-50/30">
        
        {/* Natural Language Prompt Query Bubble */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-2xs">
            You
          </div>
          <div className="p-3.5 bg-white rounded-2xl rounded-tl-xs border border-slate-200 shadow-2xs max-w-2xl hover:border-slate-300 transition-colors">
            <p className="text-sm font-semibold text-slate-900">
              "{selectedScenario.question}"
            </p>
          </div>
        </div>

        {/* AI Intelligent Response Output */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
            <Sparkles className="w-4 h-4" />
          </div>

          <div className="flex-1 space-y-4 max-w-3xl">
            <div className="p-5 bg-white rounded-2xl rounded-tl-xs border border-cyan-200 shadow-xs space-y-4 hover:border-cyan-300 transition-colors">
              
              {/* Context Pill & Status */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200 hover:bg-cyan-100 transition-colors">
                  <Zap className="w-3.5 h-3.5 text-cyan-600" />
                  {selectedScenario.contextPill}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-slate-400">Confidence: 99.4%</span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified Cloud Data
                  </span>
                </div>
              </div>

              {/* Main Summary Answer */}
              {isTyping ? (
                <div className="flex items-center gap-2 py-4 text-slate-400 text-xs">
                  <RefreshCw className="w-4 h-4 animate-spin text-cyan-600" />
                  <span>Synthesizing multi-campus parameters and generating predictive recommendations...</span>
                </div>
              ) : (
                <>
                  <p className="text-sm font-bold text-slate-800 leading-relaxed">
                    {selectedScenario.aiSummary}
                  </p>

                  {/* Highlight Metric Card */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between hover:bg-white hover:shadow-2xs transition-all">
                    <div>
                      <p className="text-xs font-semibold text-slate-500">{selectedScenario.keyMetric.label}</p>
                      <p className="text-xl font-extrabold text-slate-900 mt-0.5">{selectedScenario.keyMetric.value}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                        selectedScenario.keyMetric.status === "warning" ? "bg-amber-50 text-amber-800 border-amber-200" :
                        selectedScenario.keyMetric.status === "critical" ? "bg-rose-50 text-rose-800 border-rose-200" :
                        selectedScenario.keyMetric.status === "success" ? "bg-emerald-50 text-emerald-800 border-emerald-200" :
                        "bg-blue-50 text-blue-800 border-blue-200"
                      }`}>
                        {selectedScenario.keyMetric.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points Details */}
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Neural Evidence &amp; Findings:
                    </p>
                    <ul className="space-y-1.5">
                      {selectedScenario.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 hover:text-slate-900 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Action CTA */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs font-bold text-slate-800">
                      Suggested Autonomous Action:
                    </span>
                    <Link
                      href={selectedScenario.actionRoute}
                      className="btn-primary-hover inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg shadow-2xs"
                    >
                      <span>{selectedScenario.suggestedAction}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>

      </div>

      {/* Interactive Input Form */}
      <form onSubmit={handleCustomSubmit} className="p-4 bg-white border-t border-slate-200 flex items-center gap-3">
        <input
          type="text"
          placeholder="Ask anything... (e.g., 'Which classes need attention in physics?', 'Generate Principal report')"
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-cyan-500 focus:bg-white transition-all"
        />
        <button
          type="submit"
          className="px-4 sm:px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 shrink-0 cursor-pointer"
        >
          <span>Ask AI</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

    </div>
  );
}
