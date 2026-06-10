"use client";

import { useState } from "react";

type Phase = {
  id: "sense" | "dimension" | "rebalance";
  label: string;
  duration: string;
  color: "cyan" | "blue" | "green";
  youBring: string[];
  trinomioDescribe: string;
  trinomioDoes: string[];
  outcome: string[];
  whyMatters: string;
};

const phases: Phase[] = [
  {
    id: "sense",
    label: "SENSE",
    duration: "2–4 weeks",
    color: "cyan",
    youBring: [
      "Land, load, or energy surplus with basic economics",
      "Questions about feasibility, regulation, or capital structure",
    ],
    trinomioDescribe: "Validates transition signal, maps regulation, preliminary structure",
    trinomioDoes: [
      "Validates the transition signal (is there real strategic potential?)",
      "Maps regulatory windows and technical constraints",
      "Evaluates preliminary EE/SPV architecture and financial viability",
      "Identifies key actors (landowner, developer, capital provider)",
    ],
    outcome: [
      "Clear go/no-go with institutional justification",
      "Preliminary Firm Layer architecture",
      "Roadmap for next steps",
    ],
    whyMatters:
      "An energy asset without Firm Layer structure is an idea. An idea with architecture is a project.",
  },
  {
    id: "dimension",
    label: "DIMENSION",
    duration: "3–6 months",
    color: "blue",
    youBring: [
      "Resources for legal EE/SPV, governance, and operating contracts",
      "Information on operations, measurement, and risk allocation",
    ],
    trinomioDescribe: "Structuring, bankability, capital pathways",
    trinomioDoes: [
      "Structuring toolkit (contract templates, DSCR models, reporting framework)",
      "Bankability architecture (what banks, SAFIs, and funds need to see)",
      "Capital pathways (project finance, blended finance, angel structures)",
      "Institutional validation (is the asset understood as bankable?)",
    ],
    outcome: [
      "Operating EE with validated surplus",
      "Project Finance bankability blueprint",
      "Capital sourcing strategy (who finances, on what terms)",
    ],
    whyMatters:
      "Project Finance makes one asset bankable. Firm Layer makes it legible for portfolios, FICR, and capital markets.",
  },
  {
    id: "rebalance",
    label: "REBALANCE",
    duration: "Ongoing (post-close)",
    color: "green",
    youBring: [
      "The enterprise, operations, operating income",
      "Strategic decisions and growth direction",
    ],
    trinomioDescribe: "Portfolio aggregation, FICR, refinancing, capital access",
    trinomioDoes: [
      "Portfolio aggregation (how to connect this asset with others)",
      "FICR intermediation (when portfolio is ready for institutional capital)",
      "Refinancing and capital structure rebalancing",
      "Capital markets access (securitization, future programmable instruments)",
    ],
    outcome: [
      "From one asset to an institutionalized platform",
      "Access to capital at scale (not project-by-project)",
      "Transition from pure Project Finance to capital markets",
    ],
    whyMatters:
      "Energy transition is financed when assets become financial classes, not when kWh are built.",
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

type ExpandedPhase = "sense" | "dimension" | "rebalance" | null;

export function EngagementPlaybookEN() {
  const [expanded, setExpanded] = useState<ExpandedPhase>("sense");

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

                  {/* Collapsed preview */}
                  <p className="mt-4 text-sm text-[#E2E6E9]/85">{phase.trinomioDescribe}</p>

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
                          What Trinomio does
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
                          Outcome
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
                <p className="mt-4 text-sm text-[#E2E6E9]/85">{phase.trinomioDescribe}</p>
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
                      What Trinomio does
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
                      Outcome
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
