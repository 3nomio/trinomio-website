import { AudienceSection } from "@/components/AudienceSection";
import { CollaborationAreas } from "@/components/CollaborationAreas";
import { DiagramNavigation, RelatedFrameworks } from "@/components/ContextualNavigation";
import { EcosystemArchitectureMap } from "@/components/EcosystemArchitectureMap";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InstitutionalTraction } from "@/components/InstitutionalTraction";
import { Logo } from "@/components/Logo";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { frameworkLinks, primaryLoopLinks, spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Trinomio",
  description:
    "Rutas de conversación institucional con Trinomio para convertir oportunidades energéticas en activos bancables.",
};

const contactRoutes = [
  {
    audience: "Cooperativas y distribuidoras eléctricas",
    purpose:
      "Para convertir transición regulatoria, DER, BESS, resiliencia y nuevos modelos de servicio en arquitectura bancable.",
  },
  {
    audience: "SAFIs, bancos e inversionistas",
    purpose:
      "Para analizar Project Finance, flujos bancables, FICR, deuda estructurada, DSCR, tenor y esquemas de financiamiento repetibles.",
  },
  {
    audience: "Empresas y off-takers",
    purpose:
      "Para evaluar eficiencia, energía firme, contratos EaaS / PPA / TaaS, resiliencia y excedente operativo.",
  },
  {
    audience: "Aliados técnicos, legales o estratégicos",
    purpose:
      "Para colaborar en empresas estructuradas, SPVs, contratos, seguridad jurídica y plataformas de transición energética.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 text-white sm:px-8 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(23,215,255,0.14),transparent_30rem),radial-gradient(circle_at_78%_28%,rgba(96,157,255,0.18),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="adaptive-grid absolute inset-0 opacity-42" />
          <div className="orbital-field orbital-drift absolute right-[-14rem] top-16 size-[42rem] rounded-full opacity-30" />
          <div className="animated-flow-line absolute bottom-10 left-0 right-0 sm:bottom-14" />

          <div className="relative mx-auto max-w-7xl">
            <Logo
              className="mb-12 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
              imageClassName="h-14 w-auto sm:h-16"
              priority
            />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
              Contacto
            </p>
            <h1 className="mt-10 max-w-6xl text-[clamp(2.5rem,10.8vw,3.25rem)] font-semibold leading-[1.04] sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              Convirtamos presión energética en activos bancables
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-[#E2E6E9]/90">
              Trinomio conversa con cooperativas eléctricas, SAFIs, bancos,
              inversionistas, empresas y aliados estratégicos que buscan
              estructurar tierra, carga, Solar-UPS, small hydro, BESS, DERs,
              eficiencia o energía excedente mediante Capa Empresa, Project
              Finance, FICR y flujos bancables.
            </p>
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32"
          id="escribanos"
        >
          <div className="orbital-field absolute -left-28 top-20 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Escríbanos"
                title="Estructure su oportunidad energética."
                description="Si desea convertir tierra, carga, resiliencia, energía excedente o necesidad de crecimiento en una arquitectura bancable, puede escribirnos directamente."
              />
              <div className="mt-10 flow-card border border-white/12 bg-white/[0.045] p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-trinomio-cyan">
                  Correo
                </p>
                <a
                  className="mt-6 block text-2xl font-semibold text-white transition hover:text-trinomio-green"
                  href="mailto:oscar@3nomio.com"
                >
                  oscar@3nomio.com
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {contactRoutes.map((route, index) => (
                <article
                  className="flow-card border border-white/12 bg-white/[0.04] p-5"
                  key={route.audience}
                >
                  <p className="text-sm text-trinomio-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-8 text-xl font-semibold leading-tight text-white">
                    {route.audience}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/88">
                    {route.purpose}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Mapa de conversación"
              title="La conversación se ordena por traducción: función energética, EE, SPV, HoldCo y disciplina de capital."
              description="El punto de partida puede ser tierra, carga, generación, una Entidad Distribuidora o una institución financiera; la arquitectura conecta cada origen con gobierno, riesgo, contratos y capital."
            />
            <EcosystemArchitectureMap />
            <DiagramNavigation links={frameworkLinks.proof} />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32"
        >
          <div className="orbital-field absolute -left-28 top-20 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Tracción institucional"
              title="Ejecución no confidencial del marco Trinomio."
              description="Estas referencias muestran aplicación práctica de Capa Empresa y disciplina de capital sin revelar contrapartes, términos ni procesos internos."
            />
            <InstitutionalTraction />
            <RelatedFrameworks links={frameworkLinks.proof} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Para quién trabajamos"
              title="Actores que necesitan convertir el Régimen de Transición en arquitectura institucional."
              description="La conversación empieza por el problema institucional: riesgo, activo, demanda energética, tierra, vehículo de inversión o capacidad de adaptación."
            />
            <AudienceSection />
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32"
          id="rutas"
        >
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Áreas de colaboración"
              title="Cinco formas de pasar de oportunidad a activo bancable."
              description="Trinomio puede participar desde diagnóstico greenfield hasta estructuración EE / SPV, Project Finance, FICR, gobierno de riesgos y preparación de equipos."
            />
            <CollaborationAreas />
            <RelatedFrameworks links={frameworkLinks.doctrine} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-24" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Structure your energy opportunity. Move from project bankability
              to transition scalability.
            </h2>
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
