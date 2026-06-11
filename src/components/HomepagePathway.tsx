import Link from "next/link";

type PathwayLocale = "es" | "en";

const pathwayCopy = {
  es: {
    eyebrow: "Ruta de transformación",
    title: "Del potencial energético estratégico al activo bancable",
    description:
      "Una ruta institucional para convertir valor energético en flujos medibles, reconocidos, contratados y financiables.",
    thesis: "Energía → Empresa ← Capital",
    thesisCopy:
      "La empresa es la capa gobernada que preserva valor energético y lo convierte en obligaciones contractuales, flujos controlados y revenue bancable.",
    operatingCopy:
      "El capital no financia potencial técnico. Financia estructuras gobernadas capaces de ejecutar, monitorear y proteger flujos de caja.",
    capitalCopy:
      "Detrás de esta ruta operan herramientas como Project Finance, vehículos temáticos de inversión, securitización y mercado de capitales.",
    governanceTitle: "Capital → Empresa",
    governanceSteps: [
      "Medición",
      "Reconocimiento Regulatorio",
      "Captura Contractual",
      "Validación de Crédito",
      "Formación de Capital",
    ],
    primaryCta: "Estructure su oportunidad energética",
    secondaryCta: "Convierta potencial energético en activos bancables",
    primaryHref: "/es/contacto#escribanos",
    secondaryHref: "/es/energia-empresa-capital#capa-capital",
    steps: [
      {
        title: "Potencial Energético Estratégico",
        description:
          "Terrenos, industrias, zonas francas, Solar-UPS, BESS, pequeña hidro, eficiencia y excedentes energéticos con potencial de convertirse en valor económico.",
      },
      {
        title: "Capa Empresa",
        description:
          "Medimos, reconocemos, contratamos y gobernamos ese valor para convertirlo en obligaciones de pago, cascadas de flujo y estructuras auditables.",
      },
      {
        title: "Flujos Bancables y Escalables",
        description:
          "La oportunidad pasa de proyecto aislado a Empresa Estructurada con flujo probado, capacidad de atraer capital y ruta de agregación de portafolio.",
      },
    ],
  },
  en: {
    eyebrow: "Transformation pathway",
    title: "From Strategic Energy Potential to Bankable Assets",
    description:
      "An institutional route for converting energy value into measured, recognized, contracted, and financeable cash flows.",
    thesis: "Energy → Firm ← Capital",
    thesisCopy:
      "The firm is the governed layer that preserves energy value and converts it into contractual obligations, controlled cash flows, and bankable revenue.",
    operatingCopy:
      "Capital does not finance technical potential. It finances governed structures capable of executing, monitoring, and protecting cash flows.",
    capitalCopy:
      "Behind this pathway are tools such as Project Finance, thematic investment vehicles, securitization, and capital-market instruments.",
    governanceTitle: "Capital → Firm",
    governanceSteps: [
      "Metering",
      "Regulatory Recognition",
      "Contractual Capture",
      "Credit Validation",
      "Capital Formation",
    ],
    primaryCta: "Explore the Costa Rica opportunity",
    secondaryCta: "Discuss a structured opportunity",
    primaryHref: "/en/costa-rica-opportunity",
    secondaryHref: "/en/contact",
    steps: [
      {
        title: "Strategic Energy Potential",
        description:
          "Land, industries, free zones, Solar-UPS, BESS, small hydro, efficiency, and energy surplus with potential to become economic value.",
      },
      {
        title: "Firm Layer Structuring",
        description:
          "We measure, recognize, contract, and govern that value so it becomes payment obligations, controlled waterfalls, and auditable structures.",
      },
      {
        title: "Bankable and Scalable Cash Flows",
        description:
          "The opportunity moves from an isolated project into a structured company with tested cash flow, capital access, and a path to portfolio aggregation.",
      },
    ],
  },
} as const;

type HomepagePathwayProps = {
  locale?: PathwayLocale;
  compact?: boolean;
};

export function HomepagePathway({
  compact = false,
  locale = "es",
}: HomepagePathwayProps) {
  const copy = pathwayCopy[locale];

  return (
    <section
      className={`institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 text-white sm:px-8 ${
        compact ? "py-16" : "py-24 lg:py-32"
      }`}
      id={locale === "es" ? "ruta-activo-bancable" : "bankable-asset-pathway"}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--cyan),var(--electric-blue),transparent)]" />
      <div className="adaptive-grid absolute inset-0 opacity-34" />
      <div className="orbital-field absolute -right-28 top-20 size-96 rounded-full opacity-18" />
      <div className="orbital-field absolute bottom-[-12rem] left-[-14rem] size-96 rounded-full opacity-12" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-trinomio-green">
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
              {copy.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#E2E6E9]/90">
              {copy.description}
            </p>
          </div>

          <div className="accent-callout border border-white/12 bg-white/[0.045] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
              {copy.thesis}
            </p>
            <p className="mt-4 text-xl font-semibold leading-tight text-white">
              {copy.thesisCopy}
            </p>
            <p className="mt-5 border-l border-trinomio-green/55 pl-4 text-sm leading-6 text-[#E2E6E9]/88">
              {copy.operatingCopy}
            </p>
            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-green">
                {copy.governanceTitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {copy.governanceSteps.map((step, index) => (
                  <span
                    className="inline-flex max-w-full items-center border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold leading-5 text-[#E2E6E9]/84"
                    key={step}
                  >
                    {index + 1}. {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="diagram-stage relative mt-14 overflow-hidden p-4 sm:p-6 lg:p-8">
          <div className="adaptive-grid absolute inset-0 opacity-24" />
          <div className="absolute left-[8%] right-[8%] top-[5.85rem] hidden h-px bg-[linear-gradient(90deg,transparent,#17D7FF,#609DFF,#0BBF75,transparent)] opacity-55 2xl:block" />

          <div className="relative grid gap-4 md:grid-cols-3">
            {copy.steps.map((step, index) => (
              <article
                className="diagram-card group relative flex min-h-[22rem] flex-col overflow-hidden p-5 transition hover:-translate-y-0.5 hover:border-trinomio-cyan/45"
                key={step.title}
              >
                <div className="orbital-field absolute -right-24 -top-24 size-56 rounded-full opacity-14 transition group-hover:opacity-24" />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="text-sm text-trinomio-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < copy.steps.length - 1 ? (
                    <span className="hidden text-xl text-trinomio-cyan/70 2xl:block">
                      →
                    </span>
                  ) : (
                    <span className="h-px w-8 translate-y-3 bg-trinomio-green" />
                  )}
                </div>
                <h3 className="relative mt-8 text-xl font-semibold leading-tight text-white">
                  {step.title}
                </h3>
                <p className="relative mt-5 text-sm leading-6 text-[#E2E6E9]/84">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-4xl text-base leading-7 text-[#E2E6E9]/88">
            {copy.capitalCopy}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              className="inline-flex items-center justify-center border border-trinomio-cyan/40 bg-trinomio-cyan/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-trinomio-cyan hover:bg-trinomio-cyan/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
              href={copy.primaryHref}
            >
              {copy.primaryCta} -&gt;
            </Link>
            <Link
              className="inline-flex items-center justify-center border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#E2E6E9] transition hover:-translate-y-0.5 hover:border-trinomio-green/55 hover:text-trinomio-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
              href={copy.secondaryHref}
            >
              {copy.secondaryCta} -&gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
