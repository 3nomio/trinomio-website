import Link from "next/link";

import { doctrine } from "@/lib/content";

const doctrineDetails = [
  {
    label: "Función energética",
    metric: "MEV/LCOE",
    text: "Dispatch, flexibilidad, resiliencia y costo revelan excedente operativo.",
    href: "/es/energia-empresa-capital#energia",
    ariaLabel: "Explorar la capa Energía dentro de la arquitectura Energía Empresa Capital",
  },
  {
    label: "Traducción",
    metric: "EE",
    text: "Empresa Estructurada con propiedad, contratos, operación, riesgo y flujos auditables.",
    href: "/es/energia-empresa-capital#empresa",
    ariaLabel: "Explorar la capa Empresa como unidad de traducción",
  },
  {
    label: "Disciplina",
    metric: "WACC/DSCR",
    text: "Tenor, covenants, FICR y bankability disciplinan la estructura antes de financiar.",
    href: "/es/energia-empresa-capital#capital",
    ariaLabel: "Explorar la capa Capital como disciplina institucional",
  },
] as const;

const homepageDoctrineDetails = [
  doctrineDetails[0],
  {
    ...doctrineDetails[1],
    metric: "Empresa",
    text: "La capa gobernada organiza propiedad, contratos, operación, riesgo y flujos auditables.",
  },
  {
    ...doctrineDetails[2],
    metric: "Capital",
    text: "Capacidad de pago, plazo, riesgo y disciplina de crédito ordenan la estructura antes de financiar.",
  },
] as const;

type FlowDoctrineProps = {
  simplified?: boolean;
};

export function FlowDoctrine({ simplified = false }: FlowDoctrineProps) {
  const details = simplified ? homepageDoctrineDetails : doctrineDetails;

  return (
    <div
      className="diagram-stage relative mt-14 overflow-hidden p-5 sm:p-7 lg:p-8"
      aria-label="Arquitectura Energía Empresa Capital con Empresa como unidad de traducción"
    >
      <div className="adaptive-grid absolute inset-0 opacity-35" />
      <div className="conversion-rail absolute left-[8%] right-[8%] top-1/2 hidden lg:block" />
      <div className="relative grid gap-4 lg:grid-cols-3">
        {doctrine.map((item, index) => (
          <Link
            aria-label={details[index].ariaLabel}
            className="diagram-card cta-card group relative min-h-72 overflow-hidden p-6 sm:p-8"
            href={details[index].href}
            key={item}
          >
            <div className="orbital-field orbital-drift absolute -right-24 -top-24 size-64 rounded-full opacity-20 transition group-hover:opacity-34" />
            <div className="relative flex h-full flex-col justify-between gap-12">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-trinomio-cyan">
                  {details[index].label}
                </p>
                <span className="text-sm text-[#E2E6E9]/56">
                  0{index + 1}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-trinomio-green">
                  {details[index].metric}
                </p>
                <h3 className="mt-3 text-5xl font-semibold leading-none text-white sm:text-6xl">
                  {item}
                </h3>
                <p className="mt-6 max-w-sm text-sm leading-6 text-[#E2E6E9]/82">
                  {details[index].text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
