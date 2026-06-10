"use client";

import { useState } from "react";

type Persona = {
  id: "developer" | "landowner" | "institution" | "capital";
  title: string;
  subtitle: string;
  color: "cyan" | "blue" | "green" | "purple";
  ifYouAre: string[];
  whatTrinomioSolves: string;
  whatYouGet: string[];
  example: {
    text: string;
    link: string;
  };
  nextStep: {
    label: string;
    link: string;
    description: string;
  };
};

const personas: Persona[] = [
  {
    id: "developer",
    title: "Energy Distributed Developer",
    subtitle: "Scale from project to platform",
    color: "cyan",
    ifYouAre: [
      "You build 3–10 small solar/DER projects per year",
      "Each project is technically solid but financially scattered",
      "No institution wants to finance them one-off",
      "You're capital-constrained and time-bound",
      "Next project requires starting from zero",
    ],
    whatTrinomioSolves:
      "Aggregate into Structured Enterprise — Pool 3–5 projects into one institutional entity. Banks/FICR see portfolio, not fragments. Access Project Finance (not expensive construction loans). Your second project costs 40% less to finance than your first. Platform handles capital raising; you focus on engineering.",
    whatYouGet: [
      "EPC contracts (you build, you get paid)",
      "O&M contracts (ongoing revenue)",
      "Upside participation (portfolio performs well → you win too)",
    ],
    example: {
      text: "How the Guayabo Developer scaled from project to platform",
      link: "/en/cases/guayabo",
    },
    nextStep: {
      label: "Discover aggregation",
      link: "/en/contact?type=developer",
      description: "Leads to Dimension phase details + contact form",
    },
  },
  {
    id: "landowner",
    title: "Landowner with Energy Potential",
    subtitle: "Land to 12–15% IRR",
    color: "blue",
    ifYouAre: [
      "You have land (50+ hectares, productive but low-return)",
      "Energy potential (solar, small hydro, wind)",
      "You're not an energy developer",
      "Developers want cheap land but you can't capture upside",
      "Sitting on asset; not monetizing its strategic value",
    ],
    whatTrinomioSolves:
      "Structure an Enterprise with developer + capital — You remain land owner; you don't become 'seller'. Trinomio brings developer + sources capital. Contractual waterfall is clear (you get % of energy revenue). Upside: 12–15% IRR on land asset. Exit optionality: refinance in Year 5, or hold long-term.",
    whatYouGet: [
      "Clear institutional contract (no ambiguity)",
      "Regular cash distributions (monthly/quarterly)",
      "Refinance option (not locked in)",
      "Land back after 15+ years (if you want it)",
    ],
    example: {
      text: "How Guayabo landowners converted land to 12% IRR",
      link: "/en/cases/guayabo",
    },
    nextStep: {
      label: "Structure your land",
      link: "/en/contact?type=landowner",
      description: "Leads to Sense phase details + geographic assessment form",
    },
  },
  {
    id: "institution",
    title: "Institution / Utility / Cooperative",
    subtitle: "Pre-packaged institutional assets",
    color: "green",
    ifYouAre: [
      "You see DER/renewable opportunity in your territory",
      "You want institutional-grade assets",
      "Fragmented developers don't speak your language",
      "No standardized bankability (each deal is custom)",
      "You lack execution layer; you want to acquire, not build",
    ],
    whatTrinomioSolves:
      "Pre-packaged Structured Enterprises ready for your model — Trinomio pre-packages Firm Layer (not raw projects). Every asset arrives with: PPA, DSCR, security package, reporting. You acquire institutions, not ideas. Marginal cost of next asset drops (template, not custom). Platform-level economics (not one-off).",
    whatYouGet: [
      "Institutional-grade pipeline",
      "De-risked acquisition process",
      "Revenue visibility + cash flow certainty",
      "Options: hold long-term, refinance, securitize into FICR",
    ],
    example: {
      text: "How a Costa Rica Cooperative monetizes DER inventory",
      link: "/en/cases/cooperative",
    },
    nextStep: {
      label: "Access pre-structured assets",
      link: "/en/contact?type=institution",
      description: "Leads to Rebalance phase details + partnership inquiry",
    },
  },
  {
    id: "capital",
    title: "Capital Provider (Bank, Fund, Blended Finance)",
    subtitle: "Portfolio to FICR pathway",
    color: "purple",
    ifYouAre: [
      "You want energy deals (good risk-adjusted returns)",
      "You see institutional demand for DER/renewable assets",
      "Individual projects are too small/risky to underwrite",
      "Developers don't have institutional discipline (reporting, security)",
      "No pathway from one deal to portfolio",
    ],
    whatTrinomioSolves:
      "Portfolio of bankable assets + pathway to FICR — Trinomio aggregates Structured Enterprises into portfolio buckets. Each asset has: standardized DSCR, security, covenants, reporting. You finance portfolio, not projects. Marginal cost of capital drops as portfolio scales. Path to FICR, securitization, or refinance in Years 3–5.",
    whatYouGet: [
      "Pre-vetted pipeline of institutional-grade assets",
      "Standardized underwriting (lower diligence cost)",
      "Portfolio risk hedging (not single-point-of-failure)",
      "Long-term returns + refinance/exit optionality",
    ],
    example: {
      text: "How a Regional Bank created $50M USD DER portfolio",
      link: "/en/cases/bank-portfolio",
    },
    nextStep: {
      label: "Negotiate asset portfolio",
      link: "/en/contact?type=capital",
      description: "Leads to capital partnership inquiry + investment thesis",
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

export function PersonaRouterEN() {
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
                {/* If You Are */}
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                    If you are
                  </p>
                  <ul className="mt-3 space-y-2">
                    {persona.ifYouAre.map((item) => (
                      <li key={item} className="text-xs leading-5 text-[#E2E6E9]/85 flex gap-2">
                        <span className={`${colors.accent} flex-shrink-0`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-white/10" />

                {/* What Trinomio Solves */}
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                    What Trinomio solves
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/90">
                    {persona.whatTrinomioSolves}
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                {/* What You Get */}
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                    What you get
                  </p>
                  <ul className="mt-3 space-y-2">
                    {persona.whatYouGet.map((item) => (
                      <li key={item} className="text-xs leading-5 text-[#E2E6E9]/85 flex gap-2">
                        <span className={`${colors.accent} flex-shrink-0`}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-white/10" />

                {/* Real Example */}
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors.accent}`}>
                    Real example
                  </p>
                  <a
                    href={persona.example.link}
                    className={`mt-3 inline-block text-sm font-semibold ${colors.accent} transition hover:underline`}
                  >
                    → {persona.example.text}
                  </a>
                </div>

                <div className="h-px bg-white/10" />

                {/* Next Step CTA */}
                <div>
                  <a
                    href={persona.nextStep.link}
                    className={`inline-flex items-center gap-2 rounded-lg border ${colors.border} px-4 py-3 text-sm font-semibold ${colors.accent} transition hover:bg-white/[0.08]`}
                  >
                    {persona.nextStep.label}
                    <span>→</span>
                  </a>
                  <p className="mt-2 text-xs text-[#E2E6E9]/60">
                    {persona.nextStep.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
