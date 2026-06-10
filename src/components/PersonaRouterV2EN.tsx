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
  example: {
    text: string;
    link: string;
  };
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
      "Financing costs almost as much as the project itself",
      "Next project starts from zero",
    ],
    theValueAdd:
      "We combine your projects into one company. Bankers see a company with real data, not a pitch. Cheaper debt. Faster second project.",
    threeThings: [
      "BUILD: Three projects become one company (not separate bets)",
      "MEASURE: Banks see real monthly data and trust it",
      "DOORS: Second project costs 40% less to finance because the first proved the company works",
    ],
    example: {
      text: "Guayabo developer: Built 1 project → joined a company → financed next 3 at half the cost",
      link: "/en/cases/guayabo",
    },
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
      "We structure a company that keeps you as owner. Real income every month. In 5 years, you choose: refinance, sell, or hold longer.",
    threeThings: [
      "BUILD: Company structure keeps you as owner (you don't sell)",
      "MEASURE: Real monthly income (not a promise, real numbers)",
      "DOORS: Year 5, you have options (refinance, sell, or keep it)",
    ],
    example: {
      text: "Guayabo landowner: Contributed land → gets 12–15% annual return on land value → retains ownership",
      link: "/en/cases/guayabo",
    },
  },
  {
    id: "institution",
    title: "For Institutions",
    subtitle: "Pre-built companies. Not raw projects.",
    color: "green",
    yourProblem: [
      "You see renewable opportunity in your territory",
      "But developers bring fragmented projects, each custom, each risky",
      "You want to acquire assets, not build them",
      "You need institutional discipline (reporting, data, governance)",
    ],
    theValueAdd:
      "We deliver pre-built companies. Each one arrives with real data, clear reporting, proven measurement. You acquire institutions that can grow.",
    threeThings: [
      "BUILD: We deliver companies (not raw projects you have to finish)",
      "MEASURE: Each one has real monthly reporting (you always know the truth)",
      "DOORS: One company becomes five → five become a portfolio → portfolio is legible to refinance or expand",
    ],
    example: {
      text: "Costa Rica cooperative: Acquired 5 pre-structured companies → integrated them → portfolio earning real money",
      link: "/en/cases/guayabo",
    },
  },
  {
    id: "capital",
    title: "For Capital Providers",
    subtitle: "Companies with doors. Portfolios with options.",
    color: "purple",
    yourProblem: [
      "You want energy deals (good risk-adjusted returns)",
      "But individual projects are too small to underwrite",
      "Developers lack institutional discipline (no reporting, no covenants)",
      "No pathway from one deal to portfolio",
    ],
    theValueAdd:
      "We build companies with real governance. Monthly measurement. Clear security. One company becomes a portfolio. Portfolio is legible to refinance, securitize, or exit.",
    threeThings: [
      "BUILD: Companies with governance (not just technical assets)",
      "MEASURE: Monthly reporting to you (you always know if it's working)",
      "DOORS: One → five → fifty. Portfolio is legible to FICR, refinance, or sale",
    ],
    example: {
      text: "Regional bank: Financed first structured company → saw the data → financed 10 more → now manages $50M portfolio",
      link: "/en/cases/guayabo",
    },
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

                <div className="h-px bg-white/10" />

                {/* Example */}
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                    Real example
                  </p>
                  <a
                    href={persona.example.link}
                    className={`mt-3 inline-block text-xs font-semibold ${colors.accent} transition hover:underline`}
                  >
                    → {persona.example.text}
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
