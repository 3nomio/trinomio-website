import { DiagramNavigation, RelatedFrameworks } from "@/components/ContextualNavigation";
import { EcosystemArchitectureMap } from "@/components/EcosystemArchitectureMap";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InstitutionalTraction } from "@/components/InstitutionalTraction";
import { Logo } from "@/components/Logo";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { ProjectContinuitySection } from "@/components/ProjectContinuitySection";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { SectionHeading } from "@/components/SectionHeading";
import { TerritorialTransitionCard } from "@/components/TerritorialTransitionCard";
import { getGlossaryHref, getGlossaryTermByLabel } from "@/lib/glossary";
import { frameworkLinks, primaryLoopLinks, spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Energía → Empresa ← Capital | Trinomio",
  description:
    "Trinomio convierte oportunidades energéticas greenfield en activos brownfield bancables mediante 3-Syst, Project Finance y FICR.",
};

const valueArchitectureLayers = [
  {
    title: "Greenfield opportunity",
    eyebrow: "Potencial energético",
    text: "Tierra, demanda, solar, BESS, Solar-UPS, small hydro, eficiencia, resiliencia y ventanas regulatorias.",
    terms: ["DER", "BESS", "Solar-UPS", "small hydro", "eficiencia"],
    href: "#cadena-valor",
  },
  {
    title: "3-Syst structuring",
    eyebrow: "Capa Empresa",
    text: "Gobierno, contratos, medición, asignación de riesgos, EE / SPV y disciplina operativa.",
    terms: ["gobierno", "contratos", "estrategia", "medición", "riesgo"],
    href: "#empresa",
  },
  {
    title: "Brownfield asset",
    eyebrow: "Calidad de ingreso",
    text: "Función validada, excedente operativo, PPA, EaaS, TaaS, reporting y trazabilidad financiera.",
    terms: ["PPA", "EaaS", "TaaS", "desempeño", "trazabilidad"],
    href: "#empresa",
  },
  {
    title: "Escala de capital",
    eyebrow: "Bankability",
    text: "Project Finance bankability, FICR, portafolio, deuda, titularización e instrumentos programables futuros.",
    terms: ["Project Finance", "SPV", "FICR", "WACC", "DSCR"],
    href: "#capa-capital",
  },
] as const;

const labs = [
  {
    title: "Sentir",
    text: "detecta la Señal de Transición.",
  },
  {
    title: "Dimensionar",
    text: "construye la Capa Empresa.",
  },
  {
    title: "Rebalancear",
    text: "guía la migración del capital.",
  },
] as const;

function ValueCreationArchitecture() {
  return (
    <div className="diagram-stage relative mt-14 overflow-hidden p-5 sm:p-8 lg:p-10">
      <div className="adaptive-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-x-12 top-[7.5rem] hidden h-px bg-[linear-gradient(90deg,transparent,#17D7FF,#609DFF,#0BBF75,transparent)] opacity-60 lg:block" />

      <div className="relative grid gap-4 lg:grid-cols-4">
        {valueArchitectureLayers.map((layer, index) => (
          <article
            className="diagram-card group relative flex min-h-[24rem] flex-col overflow-hidden p-5 transition hover:-translate-y-0.5 hover:border-trinomio-cyan/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan sm:p-6"
            key={layer.title}
          >
            <div className="orbital-field absolute -right-28 -top-28 size-64 rounded-full opacity-16 transition group-hover:opacity-28" />
            <div className="relative flex items-center justify-between">
              <span className="text-sm text-[#E2E6E9]/56">0{index + 1}</span>
              {index < valueArchitectureLayers.length - 1 ? (
                <span className="hidden text-2xl text-trinomio-cyan/70 lg:block">
                  →
                </span>
              ) : (
                <span className="h-px w-10 bg-trinomio-green" />
              )}
            </div>

            <div className="relative mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
                {layer.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {layer.title}
              </h3>
              <p className="mt-5 text-sm leading-6 text-[#E2E6E9]/86">
                {layer.text}
              </p>
            </div>

            <div className="relative mt-auto grid gap-2 pt-8">
              {layer.terms.map((term) => {
                const glossaryTerm = getGlossaryTermByLabel(term);
                const className =
                  "border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-semibold uppercase tracking-[0.09em] text-[#E2E6E9]/84";

                return glossaryTerm ? (
                  <Link
                    aria-label={`Ver ${term} en el glosario`}
                    className={`${className} transition hover:border-trinomio-cyan/55 hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan`}
                    href={getGlossaryHref(glossaryTerm.slug)}
                    key={term}
                  >
                    {term}
                  </Link>
                ) : (
                  <span className={className} key={term}>
                    {term}
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      <div className="relative mt-8 border-t border-white/10 pt-6">
        <p className="max-w-5xl text-lg leading-8 text-[#E2E6E9]/90">
          Trinomio no reemplaza Project Finance. Lo extiende hacia la
          arquitectura de mercado de capitales que requiere la transición
          energética: de bankability de proyecto a intermediación FICR,
          portafolio, instrumentos financieros y activos energéticos bancables
          a escala.
        </p>
      </div>
    </div>
  );
}

export default function EnergyFirmCapitalPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <ScrollNavigation menuHref="/es" />
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 text-white sm:px-8 lg:py-32">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(23,215,255,0.16),transparent_30rem),radial-gradient(circle_at_78%_28%,rgba(96,157,255,0.2),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="adaptive-grid absolute inset-0 z-0 opacity-50" />
          <div className="orbital-field orbital-drift absolute right-[-14rem] top-16 z-0 size-[42rem] rounded-full opacity-32" />
          <div className="animated-flow-line absolute inset-x-0 bottom-12 z-0" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <Logo
              className="mb-12 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
              imageClassName="h-14 w-auto sm:h-16"
              priority
            />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
              Energía → Empresa ← Capital
            </p>
            <h1 className="mt-10 max-w-6xl text-[clamp(2.5rem,10.8vw,3.25rem)] font-semibold leading-[1.04] sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              De oportunidad greenfield a activo energético bancable
            </h1>
            <p className="mt-8 max-w-4xl text-xl leading-8 text-[#E2E6E9]/92">
              Trinomio convierte excedente energético en activos bancables:
              identifica funciones energéticas con excedente operativo y las
              estructura como EE / SPV, Project Finance, FICR y plataformas de
              capital.
            </p>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-[#E2E6E9]/90">
              La transición energética no se financia únicamente con activos ni
              con kWh. Se financia cuando la Capa Empresa traduce funciones
              energéticas y disciplina de capital en contratos, gobierno,
              información, Project Finance y vehículos de mercado.
            </p>
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
          id="capa-capital"
        >
          <div className="orbital-field absolute -right-28 top-16 size-80 rounded-full opacity-18" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1fr]">
            <SectionHeading
              eyebrow="Cadena de valor"
              title="Greenfield Opportunity → 3-Syst Structuring → Brownfield Asset → Project Finance → FICR"
              description="El valor comercial aparece cuando una función energética deja de ser una oportunidad aislada y entra en una arquitectura con gobierno, contratos, información verificable, Project Finance y disciplina de mercado de capitales."
            />
            <div className="diagram-stage relative overflow-hidden p-6">
              <div className="conversion-rail absolute left-[10%] right-[10%] top-1/2 hidden sm:block" />
              <div className="relative grid gap-4 md:grid-cols-2">
                {[
                  "Tierra, carga o recurso energético",
                  "EE / SPV, contratos y gobierno",
                  "Brownfield techno-economic asset",
                  "Project Finance, FICR y escala",
                ].map((item, index) => (
                  <div
                    className="diagram-card min-h-44 p-5"
                    key={item}
                  >
                    <p className="text-sm text-trinomio-cyan">0{index + 1}</p>
                    <p className="mt-8 text-2xl font-semibold leading-tight text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.doctrine} />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32"
          id="cadena-valor"
        >
          <div className="adaptive-grid absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Arquitectura de Creación de Valor"
              title="Solar es el primer caso incubado. La plataforma es más amplia."
              description="Trinomio estructura funciones energéticas financiables: solar, BESS, DERs, Solar-UPS, small hydro, autoconsumo, exceso a red, eficiencia, demanda gestionable y futuras estructuras de mercado."
            />
            <ValueCreationArchitecture />
            <DiagramNavigation links={frameworkLinks.proof} />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
          id="arquitectura-ee"
        >
          <div className="orbital-field absolute -right-24 top-20 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Arquitectura operativa"
              title="La arquitectura operativa detrás del modelo"
              description="Project Finance, HoldCo, Empresas Estructuradas y SPVs siguen siendo relevantes: son la primera capa de bankability que ordena propiedad, contratos, riesgo, DSCR, CAFDS, seguridad y captura de flujo antes de escalar hacia portafolio."
            />
            <EcosystemArchitectureMap />
            <DiagramNavigation links={frameworkLinks.proof} />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
          id="empresa"
        >
          <div className="orbital-field absolute left-[-10rem] top-20 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Para desarrolladores, generadores y propietarios"
              title="La oportunidad energética conserva su origen económico, pero gana forma institucional."
              description="La EE agrega gobierno, contratos, reporting y rutas de capital sobre el proyecto; no sustituye el SPV ni borra la lógica de Project Finance. La vuelve legible para bancos, SAFIs, FICR, inversionistas y aliados estratégicos."
            />
            <ProjectContinuitySection />
            <RelatedFrameworks links={frameworkLinks.proof} />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32"
          id="sanses-ee"
        >
          <div className="orbital-field absolute -right-24 top-20 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Tracción institucional"
              title="La tesis ya opera en estructuras concretas."
              description="EE#1 comienza con solar porque es el primer caso incubado bajo la regulación actual BTM. BTM es el punto de acción actual, no la frontera permanente: la tesis está diseñada para DERs, BESS, VPPs, community energy, small hydro, Solar-UPS, eficiencia y futuras estructuras de mercado."
            />
            <InstitutionalTraction />
            <RelatedFrameworks links={frameworkLinks.proof} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field absolute -right-24 -top-24 size-80 rounded-full opacity-20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Creación de Valor"
              title="De infraestructura dispersa a Empresa Estructurada."
            />
            <TerritorialTransitionCard />
            <RelatedFrameworks links={frameworkLinks.transition} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="animated-flow-line absolute left-0 right-0 top-1/2" />
          <div className="orbital-field absolute right-[-10rem] top-16 size-96 rounded-full opacity-22" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Conexión con 3Labs"
              title="Sentir, Dimensionar y Rebalancear convierten doctrina en capacidad operativa."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {labs.map((lab, index) => (
                <article
                  className="flow-card border border-white/12 bg-white/[0.045] p-6"
                  key={lab.title}
                >
                  <p className="text-sm text-trinomio-cyan">0{index + 1}</p>
                  <h2 className="mt-8 text-3xl font-semibold text-white">
                    {lab.title}
                  </h2>
                  <p className="mt-4 text-lg leading-7 text-[#E2E6E9]/90">
                    {lab.text}
                  </p>
                </article>
              ))}
            </div>
            <DiagramNavigation links={frameworkLinks.labs} />
          </div>
        </section>

        <section className="relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-24" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Project Finance puede hacer bancable un activo. Trinomio ayuda a
              convertir ese activo en parte de una clase financiable para
              bancos, SAFIs, FICR, inversionistas y mercados de capital.
            </h2>
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
