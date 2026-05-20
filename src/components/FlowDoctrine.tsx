import Link from "next/link";

import { doctrine } from "@/lib/content";

const doctrineDetails = [
  {
    label: "Producción",
    metric: "kWh",
    text: "Activos distribuidos, almacenamiento, carga e interconexión.",
    href: "/es/energia-empresa-capital#energia",
    ariaLabel: "Explorar la capa Energía dentro del marco Energía Empresa Capital",
  },
  {
    label: "Conversión",
    metric: "EE",
    text: "Empresa Estructurada con propiedad, contratos, operación, riesgo y flujos auditables.",
    href: "/es/energia-empresa-capital#empresa",
    ariaLabel: "Explorar la capa Empresa dentro del marco Energía Empresa Capital",
  },
  {
    label: "Escala",
    metric: "CAFDS",
    text: "Underwriting, portafolios, deuda, equity y Arquitectura de Inversión.",
    href: "/es/energia-empresa-capital#capital",
    ariaLabel: "Explorar la capa Capital dentro del marco Energía Empresa Capital",
  },
] as const;

export function FlowDoctrine() {
  return (
    <div
      className="diagram-stage relative mt-14 overflow-hidden p-5 sm:p-7 lg:p-8"
      aria-label="Circulación de energía a empresa y capital"
    >
      <div className="adaptive-grid absolute inset-0 opacity-35" />
      <div className="conversion-rail absolute left-[8%] right-[8%] top-1/2 hidden lg:block" />
      <div className="relative grid gap-4 lg:grid-cols-3">
        {doctrine.map((item, index) => (
          <Link
            aria-label={doctrineDetails[index].ariaLabel}
            className="diagram-card cta-card group relative min-h-72 overflow-hidden p-6 sm:p-8"
            href={doctrineDetails[index].href}
            key={item}
          >
            <div className="orbital-field orbital-drift absolute -right-24 -top-24 size-64 rounded-full opacity-20 transition group-hover:opacity-34" />
            <div className="relative flex h-full flex-col justify-between gap-12">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-trinomio-cyan">
                  {doctrineDetails[index].label}
                </p>
                <span className="text-sm text-[#E2E6E9]/56">
                  0{index + 1}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-trinomio-green">
                  {doctrineDetails[index].metric}
                </p>
                <h3 className="mt-3 text-5xl font-semibold leading-none text-white sm:text-6xl">
                  {item}
                </h3>
                <p className="mt-6 max-w-sm text-sm leading-6 text-[#E2E6E9]/82">
                  {doctrineDetails[index].text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
