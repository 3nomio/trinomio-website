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
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto | Trinomio",
  description:
    "Rutas de conversación institucional con Trinomio para convertir oportunidades energéticas en activos bancables.",
};

const contactRoutes = [
  {
    audience: "Cooperativas y distribuidoras eléctricas",
    purpose:
      "Su cooperativa tiene la concesión, la carga y los socios. Trinomio estructura la EE para que usted no cargue el CAPEX ni la deuda — energía limpia a precio conocido por 20 años, sin exposición de balance. Su rol como proveedor energético queda intacto.",
  },
  {
    audience: "SAFIs, bancos e inversionistas",
    purpose:
      "El flujo de proyectos de transición energética no llega estructurado a SUGEVAL. Trinomio lo resuelve — EEs con DSCR probado, contrapartes cooperativas reguladas, gobernanza EFI continua y portafolio FICR-listo. Flujos contratados, contrapartes creíbles, reportes que sus LPs pueden leer.",
  },
  {
    audience: "Empresas y off-takers",
    purpose:
      "Para evaluar eficiencia, energía firme, contratos EaaS / PPA / TaaS, resiliencia y excedente operativo.",
  },
  {
    audience: "Propietarios de tierra",
    purpose:
      "Evalúe si su terreno puede convertirse en una oportunidad energética estructurable.",
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

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Dos conversaciones"
              title="La misma arquitectura. Dos puntos de entrada."
              description="Trinomio trabaja desde el origen de la oportunidad — sea una cooperativa con carga y concesión, o una institución financiera con capital y necesidad de flujos estructurados."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="flow-card border border-trinomio-cyan/24 bg-white/[0.045] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-trinomio-cyan">
                  Cooperativas / Distribuidoras eléctricas
                </p>
                <h2 className="mt-6 text-2xl font-semibold leading-tight text-white">
                  Usted tiene la concesión.<br />Le falta la estructura.
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#E2E6E9]/86">
                  Su cooperativa tiene la concesión, la carga y los socios. La
                  transición energética llega igual — la pregunta es si usted la
                  lidera o reacciona.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "EaaS sin CAPEX ni deuda de balance",
                    "Energía limpia a precio conocido por 20 años",
                    "Su rol como proveedor energético queda intacto",
                  ].map((point) => (
                    <li
                      className="flex items-start gap-3 text-sm leading-6 text-[#E2E6E9]/88"
                      key={point}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-trinomio-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <a
                    className="inline-flex text-sm font-semibold text-white transition hover:text-trinomio-cyan"
                    href="mailto:oscar@3nomio.com?subject=Cooperativa%20-%20Oportunidad%20energ%C3%A9tica"
                  >
                    Escribir a Trinomio{" "}
                    <span className="ml-2 text-trinomio-cyan">→</span>
                  </a>
                </div>
              </article>

              <article className="flow-card border border-trinomio-green/24 bg-white/[0.045] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-trinomio-green">
                  SAFIs / Bancos / Inversionistas
                </p>
                <h2 className="mt-6 text-2xl font-semibold leading-tight text-white">
                  El flujo no llega estructurado.<br />Trinomio lo resuelve.
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#E2E6E9]/86">
                  La transición energética en Costa Rica es la mayor oportunidad
                  de despliegue de capital de la próxima década. El problema: el
                  flujo de proyectos no llega estructurado a SUGEVAL.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "EEs con DSCR probado y gobernanza EFI continua",
                    "Contrapartes cooperativas reguladas y creíbles",
                    "Portafolio FICR-listo, reportes que sus LPs pueden leer",
                  ].map((point) => (
                    <li
                      className="flex items-start gap-3 text-sm leading-6 text-[#E2E6E9]/88"
                      key={point}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-trinomio-green" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <a
                    className="inline-flex text-sm font-semibold text-white transition hover:text-trinomio-green"
                    href="mailto:oscar@3nomio.com?subject=SAFI%20-%20Portafolio%20FICR"
                  >
                    Escribir a Trinomio{" "}
                    <span className="ml-2 text-trinomio-green">→</span>
                  </a>
                </div>
              </article>
            </div>
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
                <p className="mt-6 text-sm leading-6 text-[#E2E6E9]/86">
                  Cuéntenos brevemente su oportunidad: tipo de activo,
                  contexto y lo que busca lograr.
                </p>
                <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/72">
                  Después de recibir su mensaje, revisamos el contexto inicial y
                  coordinamos una primera conversación para entender el activo,
                  la necesidad energética, la contraparte y la posible ruta de
                  estructuración.
                </p>
                <div className="mt-6 border-t border-white/12 pt-6">
                  <p className="text-sm leading-6 text-trinomio-cyan/90">
                    Trinomio trabaja sobre oportunidades donde energía,
                    gobernanza y capital deben organizarse como una arquitectura
                    bancable.
                  </p>
                  <Link
                    className="mt-4 inline-flex text-sm font-semibold text-white transition hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
                    href="/es/sintesis"
                  >
                    Leer síntesis <span className="ml-2 text-trinomio-cyan">→</span>
                  </Link>
                </div>
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

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
          id="propietarios-de-tierra"
        >
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
              Estructure su oportunidad energética. Convierta una posibilidad
              técnica en una arquitectura bancable y escalable.
            </h2>
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
