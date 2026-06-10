"use client";

import { useState } from "react";

type Phase = {
  id: "build" | "measure" | "doors";
  label: string;
  duration: string;
  color: "cyan" | "blue" | "green";
  youBring: string[];
  trinomioDoes: string[];
  outcome: string[];
  whyMatters: string;
};

const phases: Phase[] = [
  {
    id: "build",
    label: "BUILD THE COMPANY",
    duration: "2–4 weeks",
    color: "cyan",
    youBring: [
      "Land, load, or energy surplus (the raw potential)",
      "Basic economics (rough numbers)",
      "A question: Can this become a real company?",
    ],
    trinomioDoes: [
      "Listen to your numbers",
      "Ask: Is there real value here, or just a spreadsheet dream?",
      "Design the company structure (who owns what, who gets paid, where does risk sit?)",
      "Tell you go or no-go before you waste time",
    ],
    outcome: [
      "Clear go/no-go decision (not maybe)",
      "Company structure on paper (governance blueprint)",
      "Next steps (what it takes to make it real)",
    ],
    whyMatters:
      "A project might earn money for a year. A company earns money for twenty years because it's designed to adapt, measure, and survive.",
  },
  {
    id: "measure",
    label: "MEASURE EVERY DAY",
    duration: "3–6 months",
    color: "blue",
    youBring: [
      "Resources to build the company (legal entity, contracts, governance)",
      "Real monthly data (kWh, revenue, costs)",
      "Willingness to let numbers guide decisions",
    ],
    trinomioDoes: [
      "Build the measurement layer (what gets tracked, how often, who sees it)",
      "Connect measurement to decisions (when X changes, we do Y)",
      "Find capital that trusts this kind of honesty (banks, funds, FICR)",
      "Make sure the company is legible to them (they understand what they see)",
    ],
    outcome: [
      "Working company with real monthly data",
      "Clear answer every month: Is this working?",
      "Path to capital (because banks see you measure honestly)",
    ],
    whyMatters:
      "A company that measures every day stays ahead of problems. A company that guesses once gets surprised when it's too late.",
  },
  {
    id: "doors",
    label: "DESIGN WITH DOORS",
    duration: "Ongoing (from day one)",
    color: "green",
    youBring: [
      "Daily operations (you run the company)",
      "Revenue decisions (you know what's coming in)",
      "Growth vision (where you want to go next)",
    ],
    trinomioDoes: [
      "Build flexibility into the structure (add more projects, switch markets, upgrade tech)",
      "Enable refinancing (capital recycling at year 5)",
      "Create sale optionality (company is legible and valuable)",
      "Support replication (take the structure and multiply it)",
    ],
    outcome: [
      "Company worth more because it can move and adapt",
      "Options you didn't have before (switch, grow, sell, refinance)",
      "Real optionality (worth real money)",
    ],
    whyMatters:
      "A project dies when the world changes. A company with doors thrives when the world changes. Those doors are worth real money — and they're built from day one.",
  },
];

const colorClasses = {
  cyan: {
    accent: "text-trinomio-cyan",
    border: "border-trinomio-cyan/30",
    dot: "bg-trinomio-cyan",
  },
  blue: {
    accent: "text-[#609DFF]",
    border: "border-[#609DFF]/30",
    dot: "bg-[#609DFF]",
  },
  green: {
    accent: "text-trinomio-green",
    border: "border-trinomio-green/30",
    dot: "bg-trinomio-green",
  },
};

type ExpandedPhase = "build" | "measure" | "doors" | null;

export function EngagementPlaybookV2EN() {
  const [expanded, setExpanded] = useState<ExpandedPhase>("build");

  return (
    <div className="space-y-8">
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        {/* Horizontal connector line */}
        <div className="relative mb-12 flex items-start justify-between">
          <div className="absolute left-[12%] right-[12%] top-12 h-px bg-[linear-gradient(90deg,var(--cyan),#609DFF,var(--green),transparent)]" />

          {phases.map((phase, index) => {
            const colors = colorClasses[phase.color];
            const isExpanded = expanded === phase.id;

            return (
              <div key={phase.id} className="relative flex w-1/3 flex-col">
                {/* Phase Header (clickable) */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : phase.id)}
                  className={`group relative rounded-lg border p-6 transition-all ${
                    isExpanded
                      ? `${colors.border} bg-white/[0.08]`
                      : "border-white/10 bg-white/[0.04] hover:border-white/20"
                  }`}
                >
                  {/* Dot connector */}
                  <div
                    className={`absolute -top-16 left-1/2 size-4 -translate-x-1/2 rounded-full border-4 border-trinomio-navy-deep ${colors.dot}`}
                  />

                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${colors.accent}`}>
                    {phase.label}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[#E2E6E9]/60">
                    {phase.duration}
                  </p>

                  {/* Expand indicator */}
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#E2E6E9]/60 transition group-hover:text-white">
                    {isExpanded ? "Collapse" : "Expand"}
                    <span className={`transition ${isExpanded ? "rotate-180" : ""}`}>↓</span>
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className={`absolute top-full left-0 z-10 mt-4 w-[110%] rounded-lg border ${colors.border} bg-trinomio-navy-deep/95 backdrop-blur p-6 shadow-2xl`}>
                    <div className="space-y-6">
                      {/* You Bring */}
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                          You bring
                        </p>
                        <ul className="mt-3 space-y-2">
                          {phase.youBring.map((item) => (
                            <li key={item} className="text-sm leading-6 text-[#E2E6E9]/85 flex gap-2">
                              <span className={`${colors.accent} flex-shrink-0`}>→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-px bg-white/10" />

                      {/* Trinomio Does */}
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                          Trinomio does
                        </p>
                        <ul className="mt-3 space-y-2">
                          {phase.trinomioDoes.map((item) => (
                            <li key={item} className="text-sm leading-6 text-[#E2E6E9]/85 flex gap-2">
                              <span className={`${colors.accent} flex-shrink-0`}>◆</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-px bg-white/10" />

                      {/* Outcome */}
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                          You get
                        </p>
                        <ul className="mt-3 space-y-2">
                          {phase.outcome.map((item) => (
                            <li key={item} className="text-sm leading-6 text-[#E2E6E9]/85 flex gap-2">
                              <span className={`${colors.accent} flex-shrink-0`}>✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-px bg-white/10" />

                      {/* Why It Matters */}
                      <p className="text-sm italic leading-6 text-[#E2E6E9]/80">
                        "{phase.whyMatters}"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Stack */}
      <div className="space-y-4 lg:hidden">
        {phases.map((phase) => {
          const colors = colorClasses[phase.color];
          const isExpanded = expanded === phase.id;

          return (
            <div key={phase.id}>
              {/* Phase Header */}
              <button
                onClick={() => setExpanded(isExpanded ? null : phase.id)}
                className={`w-full rounded-lg border p-5 text-left transition-all ${
                  isExpanded
                    ? `${colors.border} bg-white/[0.08]`
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${colors.accent}`}>
                      {phase.label}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[#E2E6E9]/60">
                      {phase.duration}
                    </p>
                  </div>
                  <span className={`text-xl transition ${isExpanded ? "rotate-180" : ""}`}>
                    ↓
                  </span>
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className={`mt-2 rounded-lg border ${colors.border} bg-white/[0.045] p-5 space-y-5`}>
                  {/* You Bring */}
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                      You bring
                    </p>
                    <ul className="mt-3 space-y-2">
                      {phase.youBring.map((item) => (
                        <li key={item} className="text-xs leading-5 text-[#E2E6E9]/85 flex gap-2">
                          <span className={`${colors.accent} flex-shrink-0`}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="h-px bg-white/10" />

                  {/* Trinomio Does */}
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                      Trinomio does
                    </p>
                    <ul className="mt-3 space-y-2">
                      {phase.trinomioDoes.map((item) => (
                        <li key={item} className="text-xs leading-5 text-[#E2E6E9]/85 flex gap-2">
                          <span className={`${colors.accent} flex-shrink-0`}>◆</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="h-px bg-white/10" />

                  {/* Outcome */}
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                      You get
                    </p>
                    <ul className="mt-3 space-y-2">
                      {phase.outcome.map((item) => (
                        <li key={item} className="text-xs leading-5 text-[#E2E6E9]/85 flex gap-2">
                          <span className={`${colors.accent} flex-shrink-0`}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="h-px bg-white/10" />

                  {/* Why It Matters */}
                  <p className="text-xs italic leading-5 text-[#E2E6E9]/75">
                    "{phase.whyMatters}"
                  </p>
                </div>
              )}

              {/* Connector line (mobile) */}
              {phases.indexOf(phase) < phases.length - 1 && (
                <div className="my-2 flex justify-center">
                  <div className="h-3 w-px bg-[linear-gradient(180deg,var(--cyan),#609DFF,var(--green))]" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
