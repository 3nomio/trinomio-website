import Link from "next/link";

const audienceRoutes = [
  {
    label: "Bancos y SAFIs",
    description:
      "Trinomio convierte activos energéticos distribuidos en estructuras de flujo, riesgo y gobierno que pueden ser leídas por crédito e inversión.",
    href: "/es/insights/underwriting-activos-distribuidos",
    cta: "Ver underwriting",
  },
  {
    label: "Cooperativas y distribuidoras eléctricas",
    description:
      "La Capa Empresa organiza infraestructura, contratos y operación para sostener transición energética con disciplina institucional.",
    href: "/es/energia-empresa-capital#sanses-ee",
    cta: "Ver ejecución",
  },
  {
    label: "Inversionistas y capital privado",
    description:
      "El marco Energía -> Empresa -> Capital prepara portafolios distribuibles para análisis de cash-flow, escala y propiedad.",
    href: "/es/energia-empresa-capital#capa-capital",
    cta: "Ver Capa Capital",
  },
  {
    label: "Empresas off-taker",
    description:
      "Trinomio vincula carga, productividad energética y estructura empresarial para decisiones financiables de suministro y resiliencia.",
    href: "/es/3labs#efi",
    cta: "Explorar EFI",
  },
  {
    label: "Aliados técnicos y legales",
    description:
      "La tesis requiere ingeniería, contratos, permisos y gobierno alineados con una empresa operativa capaz de formar capital.",
    href: "/es/contacto#rutas",
    cta: "Abrir ruta",
  },
] as const;

export function AudienceRouteCluster() {
  return (
    <section
      aria-labelledby="audience-routes-title"
      className="relative overflow-hidden border-y border-white/10 bg-trinomio-navy-deep px-5 py-12 sm:px-8 lg:py-14"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(23,215,255,0.55),rgba(96,157,255,0.42),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 lg:max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
            Rutas institucionales
          </p>
          <h2
            className="text-2xl font-semibold leading-tight text-white sm:text-3xl"
            id="audience-routes-title"
          >
            Dónde encaja su institución en Energía -&gt; Empresa -&gt; Capital.
          </h2>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-5">
          {audienceRoutes.map((route) => (
            <article
              className="flex min-h-[14rem] flex-col bg-trinomio-navy px-5 py-5 transition hover:bg-trinomio-navy-elevated/72"
              key={route.label}
            >
              <h3 className="text-base font-semibold leading-snug text-white">
                {route.label}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/84">
                {route.description}
              </p>
              <Link
                className="mt-auto inline-flex w-fit items-center pt-6 text-sm font-semibold text-trinomio-cyan transition hover:text-trinomio-cyan-soft hover:underline hover:decoration-trinomio-cyan/60 hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
                href={route.href}
              >
                {route.cta} -&gt;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
