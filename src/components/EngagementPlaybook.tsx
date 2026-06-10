"use client";

import { useState } from "react";

type Phase = {
  id: "sentir" | "dimensionar" | "rebalancear";
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
    id: "sentir",
    label: "SENTIR",
    duration: "2–4 semanas",
    color: "cyan",
    youBring: [
      "Tierra, carga, o excedente energético con básicos económicos",
      "Preguntas sobre viabilidad, regulación, o estructura de capital",
    ],
    trinomioDescribe: "Valida la señal de transición, mapea regulación, estructura inicial",
    trinomioDoes: [
      "Valida la señal de transición (¿hay realmente potencial estratégico?)",
      "Mapea ventanas regulatorias y restricciones técnicas",
      "Evalúa arquitectura inicial de EE/SPV y viabilidad financiera",
      "Identifica actores clave (propietario, desarrollador, financista)",
    ],
    outcome: [
      "Go/no-go claro con justificación institucional",
      "Arquitectura preliminar de Capa Empresa",
      "Roadmap de siguientes pasos",
    ],
    whyMatters:
      "Un activo energético sin Empresa Estructurada es una idea. Una idea con arquitectura es un proyecto.",
  },
  {
    id: "dimensionar",
    label: "DIMENSIONAR",
    duration: "3–6 meses",
    color: "blue",
    youBring: [
      "Recursos para EE/SPV legal, gobierno, y contratos operativos",
      "Información de operación, medición, y asignación de riesgos",
    ],
    trinomioDescribe: "Estructuración, bankability, pathways de capital",
    trinomioDoes: [
      "Toolkit de estructuración (templates de contratos, DSCR models, reportería)",
      "Arquitectura de bankability (qué bancos, SAFIs y fondos necesitan ver)",
      "Pathways de capital inicial (project finance, blended finance, angel structures)",
      "Validación institucional (¿se entiende el activo como bancable?)",
    ],
    outcome: [
      "EE operativa con excedente validado",
      "Project Finance bankability blueprint",
      "Capital sourcing strategy (quién financia, en qué términos)",
    ],
    whyMatters:
      "Project Finance hace bancable un activo individual. La Capa Empresa lo hace legible para portafolios, FICR, y mercados de capital.",
  },
  {
    id: "rebalancear",
    label: "REBALANCEAR",
    duration: "Continuo (post-cierre)",
    color: "green",
    youBring: [
      "La empresa, operaciones, ingresos operativos",
      "Decisiones de estrategia y crecimiento",
    ],
    trinomioDescribe: "Agregación de portafolio, FICR, refinanciamiento, acceso a capital",
    trinomioDoes: [
      "Agregación de portafolio (cómo conectar este activo con otros)",
      "Intermediación FICR (cuando el portafolio es listo para capital institucional)",
      "Refinanciamiento y rebalance de estructura de capital",
      "Acceso a mercados de capital (titularización, instrumentos programables futuros)",
    ],
    outcome: [
      "De un activo a una plataforma institucionalizada",
      "Acceso a capital a escala (no proyecto por proyecto)",
      "Transición desde Project Finance puro a capital markets",
    ],
    whyMatters:
      "La transición energética se financia cuando los activos se convierten en clases financieras, no cuando se construyen kWh.",
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

type ExpandedPhase = "sentir" | "dimensionar" | "rebalancear" | null;

export function EngagementPlaybook() {
  const [expanded, setExpanded] = useState<ExpandedPhase>("sentir");

  return (
    <div className="space-y-8">
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        {/* Horizontal connector line */}
        <div className="relative mb-12 flex items-start justify-between">
          <div className="absolute left-[12%] right-[12%] top-12 h-px bg-[linear-gradient(90deg,var(--cyan),#609DFF,var(--green),transparent)]" />

          {phases.map((phase) => {
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
                    {isExpanded ? "Contraer" : "Expandir"}
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
                          Lo que traes
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
                          Qué hace Trinomio
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
                          Resultado
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
                        &quot;{phase.whyMatters}&quot;
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
                      Lo que traes
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
                      Qué hace Trinomio
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
                      Resultado
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
                    &quot;{phase.whyMatters}&quot;
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
