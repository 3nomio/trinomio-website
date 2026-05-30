import { AudienceSection } from "@/components/AudienceSection";
import { CollaborationAreas } from "@/components/CollaborationAreas";
import { DiagramNavigation, RelatedFrameworks } from "@/components/ContextualNavigation";
import { Footer } from "@/components/Footer";
import { FlowDoctrine } from "@/components/FlowDoctrine";
import { GlossaryTermLink } from "@/components/GlossaryTermLink";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { SectionHeading } from "@/components/SectionHeading";
import { frameworkLinks, primaryLoopLinks, spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Trinomio | Trinomio",
  description:
    "Trinomio convierte oportunidades energéticas greenfield en activos bancables mediante Capa Empresa, Project Finance y capital-market architecture.",
};

const labs = [
  { title: "Sentir", text: "Detectamos tierra, carga, Solar-UPS, small hydro, BESS, DERs y señales regulatorias antes de que sean activos financiables." },
  { title: "Dimensionar", text: "Convertimos oportunidad greenfield en función techno-económica, excedente operativo y Empresa Estructurada." },
  { title: "Rebalancear", text: "Conectamos Project Finance, FICR, portafolio e instrumentos financieros para escalar la transición." },
] as const;

const riskSignals = [
  "ERM",
  "doble materialidad",
  "de adentro hacia afuera",
  "de afuera hacia adentro",
  "adaptabilidad",
  "flexibilidad",
] as const;

const closingLinks = [
  {
    label: "Leer síntesis",
    href: "/es/sintesis",
    meta: "Resumen de dos minutos del modelo Trinomio",
  },
  ...primaryLoopLinks,
] as const;

export default function AboutTrinomioPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <ScrollNavigation menuHref="/es" />
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 text-white sm:px-8 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(23,215,255,0.14),transparent_30rem),radial-gradient(circle_at_78%_28%,rgba(96,157,255,0.18),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="adaptive-grid absolute inset-0 opacity-42" />
          <div className="orbital-field orbital-drift absolute right-[-14rem] top-16 size-[42rem] rounded-full opacity-30" />
          <div className="animated-flow-line absolute left-0 right-0 top-1/2" />

          <div className="relative mx-auto max-w-7xl">
            <Logo
              className="mb-12 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
              imageClassName="h-14 w-auto sm:h-16"
              priority
            />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
              Sobre Trinomio
            </p>
            <h1 className="mt-10 max-w-6xl text-[clamp(2.5rem,10.8vw,3.25rem)] font-semibold leading-[1.04] sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              Trinomio convierte oportunidades energéticas en activos bancables
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-[#E2E6E9]/90">
              Somos una firma de estructuración en energía y finanzas que
              organiza recursos, contratos, gobierno e información para mover
              oportunidades greenfield hacia activos brownfield con flujo,
              Project Finance, FICR y escalabilidad institucional.
            </p>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Nuestra Tesis"
              title="Energía → Empresa ← Capital"
              description="Trinomio opera donde funciones energéticas y disciplina de capital se traducen mediante la Capa Empresa. La energía crea oportunidades productivas; el capital impone requisitos; la empresa convierte excedente operativo en activos bancables."
            />
            <FlowDoctrine />
            <DiagramNavigation links={frameworkLinks.doctrine} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <SectionHeading
              eyebrow="Nuestro Diferencial"
              title="La Capa Empresa convierte complejidad técnica y contractual en activos bancables."
            />
            <div className="flow-card border border-white/12 bg-white/[0.045] p-8">
              <p className="text-2xl font-semibold leading-tight text-white">
                Trinomio no es solo asesoría, desarrollo de proyectos o
                consultoría financiera. Estructura la capa empresarial que
                permite que oportunidades de energía distribuida, Solar-UPS,
                BESS, small hydro, DERs y eficiencia se vuelvan bancables.
              </p>
              <p className="mt-6 border-l border-trinomio-green/55 pl-4 text-lg leading-8 text-[#E2E6E9]/90">
                Donde otros ven proyectos energéticos aislados, Trinomio diseña
                arquitectura empresarial para pasar de oportunidad greenfield a
                Project Finance, FICR, portafolio y capital-market scalability.
              </p>
            </div>
            <RelatedFrameworks links={frameworkLinks.doctrine} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Cómo Trabajamos"
              title="Tres capacidades para conectar realidad energética, arquitectura corporativa y lógica de capital."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {labs.map((lab, index) => (
                <article
                  className="flow-card relative overflow-hidden border border-white/12 bg-trinomio-navy-glass p-6 backdrop-blur"
                  key={lab.title}
                >
                  <div className="orbital-field orbital-drift absolute -right-16 -top-16 size-44 rounded-full opacity-22" />
                  <p className="relative text-sm text-trinomio-cyan">
                    0{index + 1}
                  </p>
                  <h2 className="relative mt-8 text-3xl font-semibold text-white">
                    {lab.title}
                  </h2>
                  <p className="relative mt-4 text-base leading-7 text-[#E2E6E9]/90">
                    {lab.text}
                  </p>
                </article>
              ))}
            </div>
            <RelatedFrameworks links={frameworkLinks.labs} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1fr]">
            <SectionHeading
              eyebrow="Riesgo y Adaptación"
              title="El Régimen de Transición no es solo cumplimiento."
              description="Exp. 23414 no es el evento final. Es una señal de presión: Costa Rica necesita más energía, más flexibilidad, más inversión y una arquitectura que proteja solidaridad mientras escala."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {riskSignals.map((item) => (
                <GlossaryTermLink
                  className="flow-card border border-white/12 bg-white/[0.04] p-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#E2E6E9]/92"
                  key={item}
                >
                  {item}
                </GlossaryTermLink>
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field absolute -right-28 top-16 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Para quién trabajamos"
              title="Cooperativas, SAFIs, bancos, inversionistas, off-takers y socios estratégicos."
              description="Trinomio trabaja con instituciones, operadores y propietarios de activos que necesitan convertir señales energéticas en estructuras gobernables, financiables y escalables."
            />
            <AudienceSection />
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Áreas de colaboración"
              title="Mandatos institucionales donde energía y capital necesitan Capa Empresa."
              description="Las colaboraciones se enfocan en diagnóstico, estructuración, inversión, gobierno de riesgos y transferencia de criterio institucional."
            />
            <CollaborationAreas />
            <RelatedFrameworks links={frameworkLinks.proof} />
          </div>
        </section>

        <section className="relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-24" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Energy is not a deal. Energy is strategic architecture.
              Trinomio convierte presión de crecimiento energético en activos
              bancables.
            </h2>
            <RelatedFrameworks links={closingLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
