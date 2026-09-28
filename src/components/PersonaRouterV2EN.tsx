"use client";

import { useState } from "react";

type Persona = {
  id: "developer" | "landowner" | "institution" | "capital";
  title: string;
  subtitle: string;
  color: "cyan" | "blue" | "green" | "purple";
  yourProblem: string[];
  theValueAdd: string;
  threeThings: string[];
};

const personas: Persona[] = [
  {
    id: "developer",
    title: "For Developers",
    subtitle: "Turn projects into a platform",
    color: "cyan",
    yourProblem: [
      "You build 3–10 projects per year",
      "Each one is a separate fight for money",
      "Financing costs weigh on every project",
      "Next project starts from zero",
    ],
    theValueAdd:
      "Your projects can be organised into one Energy Enterprise. Lenders see a company with real data, not a pitch, and each proven project makes the next one easier to finance.",
    threeThings: [
      "Three projects become one company (not separate bets)",
      "Lenders see real monthly data, not projections",
      "Second project benefits from the first: learning lowers its cost, and a proven track record makes it easier to finance",
    ],
  },
  {
    id: "landowner",
    title: "For Landowners",
    subtitle: "Land earns income. You stay owner.",
    color: "blue",
    yourProblem: [
      "You have land that earns low income (farming, lease)",
      "You know it could earn energy income",
      "You're not a developer and don't want to become one",
      "You want to stay owner, not sell and disappear",
    ],
    theValueAdd:
      "The structure keeps you as owner and turns your land into a contracted energy income stream, reported every month. Over time, the options open up: refinance, sell or hold.",
    threeThings: [
      "Company structure keeps you as owner (you don't sell)",
      "Income under contract, reported every month",
      "Options over time: refinance, sell or hold",
    ],
  },
  {
    id: "institution",
    title: "For Institutions",
    subtitle: "Structured companies. Not raw projects.",
    color: "green",
    yourProblem: [
      "You see renewable opportunity in your territory",
      "But developers bring fragmented projects, each custom, each risky",
      "You want to acquire assets, not build them",
      "You need institutional discipline (reporting, data, governance)",
    ],
    theValueAdd:
      "Energy Enterprises are formed with governance, contracts, measurement and reporting from day one: designed through Trinomio's method and formed by operating vehicles such as Aureon Nexus.",
    threeThings: [
      "Companies with governance, not raw projects you have to finish",
      "Monthly reporting from each enterprise",
      "Enterprises can be aggregated into a portfolio that is legible to refinance or expand",
    ],
  },
  {
    id: "capital",
    title: "For Capital Providers",
    subtitle: "Governed companies. Portfolios with options.",
    color: "purple",
    yourProblem: [
      "You want energy deals (good risk-adjusted returns)",
      "But individual projects are too small to underwrite",
      "Developers lack institutional discipline (no reporting, no covenants)",
      "No pathway from one deal to portfolio",
    ],
    theValueAdd:
      "Energy Enterprises with real governance, monthly measurement and clear security, designed to be aggregated into portfolios that can be refinanced, securitized or exited.",
    threeThings: [
      "Companies with governance (not just technical assets)",
      "Monthly reporting to you (you always know if it's working)",
      "A path from one enterprise to a portfolio: regulated investment vehicles, refinancing or sale",
    ],
  },
];

const colorClasses = {
  cyan: {
    accent: "text-trinomio-cyan",
    border: "border-trinomio-cyan/30",
    bg: "bg-trinomio-cyan/10",
  },
  blue: {
    accent: "text-[#609DFF]",
    border: "border-[#609DFF]/30",
    bg: "bg-[#609DFF]/10",
  },
  green: {
    accent: "text-trinomio-green",
    border: "border-trinomio-green/30",
    bg: "bg-trinomio-green/10",
  },
  purple: {
    accent: "text-[#B088FF]",
    border: "border-[#B088FF]/30",
    bg: "bg-[#B088FF]/10",
  },
};

type ExpandedPersona = "developer" | "landowner" | "institution" | "capital" | null;

export function PersonaRouterV2EN() {
  const [expanded, setExpanded] = useState<ExpandedPersona>(null);

  return (
    <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
      {personas.map((persona) => {
        const colors = colorClasses[persona.color];
        const isExpanded = expanded === persona.id;

        return (
          <div key={persona.id}>
            {/* Persona Header (clickable) */}
            <button
              onClick={() => setExpanded(isExpanded ? null : persona.id)}
              className={`group w-full rounded-lg border p-6 text-left transition-all ${
                isExpanded
                  ? `${colors.border} ${colors.bg}`
                  : "border-white/10 bg-white/[0.04] hover:border-white/20"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${colors.accent}`}>
                    {persona.title}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {persona.subtitle}
                  </p>
                </div>
                <span className={`text-2xl transition ${isExpanded ? "rotate-180" : ""}`}>
                  ↓
                </span>
              </div>
            </button>

            {/* Expanded Content */}
            {isExpanded && (
              <div className={`mt-3 rounded-lg border ${colors.border} bg-white/[0.045] p-6 space-y-6`}>
                {/* Your Problem */}
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                    Your problem
                  </p>
                  <ul className="mt-3 space-y-2">
                    {persona.yourProblem.map((item) => (
                      <li key={item} className="text-xs leading-5 text-[#E2E6E9]/85 flex gap-2">
                        <span className={`${colors.accent} flex-shrink-0`}>✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-white/10" />

                {/* The Value Add */}
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                    What Trinomio adds
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/90">
                    {persona.theValueAdd}
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                {/* Three Things */}
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                    How we do it
                  </p>
                  <ul className="mt-3 space-y-3">
                    {persona.threeThings.map((item) => (
                      <li key={item} className="text-xs leading-5 text-[#E2E6E9]/85">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
