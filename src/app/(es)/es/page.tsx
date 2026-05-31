import { Footer } from "@/components/Footer";
import { FlowDoctrine } from "@/components/FlowDoctrine";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomepagePathway } from "@/components/HomepagePathway";
import { InstitutionalTraction } from "@/components/InstitutionalTraction";
import { EcosystemArchitectureMap } from "@/components/EcosystemArchitectureMap";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { PillarCard } from "@/components/PillarCard";
import { ProjectContinuitySection } from "@/components/ProjectContinuitySection";
import { SectionHeading } from "@/components/SectionHeading";
import { AudienceSection } from "@/components/AudienceSection";
import { CollaborationAreas } from "@/components/CollaborationAreas";
import { TerritorialTransitionCard } from "@/components/TerritorialTransitionCard";
import { labs, pillars } from "@/lib/content";
import { DiagramNavigation, RelatedFrameworks } from "@/components/ContextualNavigation";
import { getSpanishInsights } from "@/lib/insights";
import { frameworkLinks, primaryLoopLinks, spanishNav } from "@/lib/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trinomio | Energía → Empresa ← Capital",
  description:
    "Trinomio convierte potencial energético estratégico en activos bancables mediante Energía → Empresa ← Capital, estructura contractual y disciplina de capital.",
};

export default function SpanishHome() {
  const recentInsights = getSpanishInsights().slice(0, 3);

  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <div id="transicion">
          <Hero />
        </div>

        <HomepagePathway />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
          id="doctrine"
        >
          <div className="orbital-field absolute -right-28 top-24 size-80 rounded-full opacity-16" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Doctrina"
              title="La nueva economía energética requiere una Capa Empresa institucional."
              description="Los activos distribuidos no se convierten por sí solos en productos de inversión. Trinomio mueve potencial energético estratégico hacia activos tecno-económicos bancables mediante Capa Empresa, contratos, bancabilidad y disciplina de capital."
            />
            <FlowDoctrine simplified />
            <DiagramNavigation links={frameworkLinks.doctrine} />
            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <PillarCard
                  description={pillar.description}
                  eyebrow={pillar.eyebrow}
                  index={index}
                  key={pillar.title}
                  title={pillar.title}
                />
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 text-white sm:px-8 lg:py-32"
          id="firm-layer"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--cyan),var(--electric-blue),transparent)]" />
          <div className="orbital-field absolute left-[-12rem] top-1/2 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Capa Empresa"
              title="De potencial energético estratégico a activo energético bancable."
              description="El sistema se entiende mejor como arquitectura: función energética, estructura de ejecución, vehículo de proyecto, bancabilidad y disciplina de mercado de capitales operando como un ecosistema."
            />
            <EcosystemArchitectureMap simplified />
            <DiagramNavigation links={frameworkLinks.doctrine} />
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                "El potencial estratégico revela recurso, demanda, resiliencia o energía excedente.",
                "La Empresa Estructurada traduce excedente operativo en contratos, vehículo de proyecto y reporting.",
                "La bancabilidad disciplina el activo individual; los mercados de capital crean escala.",
              ].map((item, index) => (
                <p
                  className="flow-card border p-5 text-sm leading-6 text-[#E2E6E9]/88"
                  key={item}
                >
                  <span className="text-[#609DFF]">0{index + 1}</span> {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
          id="proyecto-ee"
        >
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Para desarrolladores, generadores y propietarios"
              title="Su oportunidad no desaparece dentro de la estructura."
              description="La Empresa Estructurada es una capa institucional aditiva: conserva el proyecto y le suma gobierno, financiamiento, intermediación de mercado y escala."
            />
            <ProjectContinuitySection simplified />
            <RelatedFrameworks links={frameworkLinks.proof} />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32"
          id="traccion-institucional"
        >
          <div className="orbital-field absolute -right-24 top-16 size-80 rounded-full opacity-20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Tracción institucional"
              title="El marco Energía → Empresa ← Capital ya se aplica en estructuras reales."
              description="Trinomio trabaja en la conversión de oportunidades energéticas en Empresa Estructurada, Capa Empresa y Capa Capital bajo criterios institucionales de bancabilidad."
            />
            <InstitutionalTraction />
            <RelatedFrameworks links={frameworkLinks.proof} />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32"
          id="transicion-territorial"
        >
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Transición territorial"
              title="Tierra, carga e infraestructura distribuida como origen de activos bancables."
              description="La lectura territorial conecta propietarios, grandes consumidores, Solar-UPS, BESS, small hydro, eficiencia y activos distribuidos con Capa Empresa, financiamiento y vehículos de inversión."
            />
            <TerritorialTransitionCard />
            <RelatedFrameworks links={frameworkLinks.transition} />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
          id="para-quien"
        >
          <div className="orbital-field absolute -left-24 top-20 size-80 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Para quién trabajamos"
              title="Instituciones y propietarios que necesitan convertir presión energética en activos bancables."
              description="Trinomio trabaja con actores que enfrentan tierra, carga, resiliencia, regulación, inversión o capital y necesitan estructurarlos como Capa Empresa antes de escalar hacia vehículos de inversión y mercados de capital."
            />
            <AudienceSection />
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32"
          id="areas-colaboracion"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--cyan),var(--electric-blue),transparent)]" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Áreas de colaboración"
              title="Formas concretas de trabajar con Trinomio."
              description="Cada colaboración parte de una pregunta institucional: cómo leer la transición, cómo estructurar potencial energético estratégico y cómo moverlo hacia activos bancables y escalables."
            />
            <CollaborationAreas />
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
          id="labs"
        >
          <div className="orbital-field absolute right-[-10rem] top-16 size-96 rounded-full opacity-24" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="3Labs"
              title="Capacidades dinámicas para finanzas energéticas adaptativas."
              description="Sentir, Dimensionar y Rebalancear describen cómo una oportunidad energética pasa de potencial estratégico a función validada, bancabilidad, arquitectura de inversión y escalabilidad de transición."
            />
            <div className="diagram-stage relative mt-14 p-5 md:hidden">
              <div className="adaptive-grid absolute inset-0 opacity-24" />
              <div className="relative">
                <div className="accent-callout border p-5 text-center backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
                    3Labs
                  </p>
                  <p className="mt-3 text-xl font-semibold leading-tight text-white">
                    Señal de Transición → Capa Empresa ← capital
                  </p>
                </div>
                <div className="mx-auto my-4 h-8 w-px bg-trinomio-cyan/38" />
                <div className="grid gap-4">
                  {labs.map((lab, index) => (
                    <article
                      className="diagram-card p-5"
                      key={lab.title}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
                          0{index + 1}
                        </p>
                        <p className="text-right text-xs font-semibold uppercase tracking-[0.14em] text-[#E2E6E9]/72">
                          {lab.label}
                        </p>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold text-white">
                        {lab.title}
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/88">
                        {lab.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="diagram-stage relative mt-14 hidden overflow-hidden p-8 md:block">
              <div className="adaptive-grid absolute inset-0 opacity-30" />
              <div className="orbit-map orbital-drift relative mx-auto max-w-2xl" />
              <div className="absolute inset-8">
                <div className="accent-callout absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 border p-5 text-center backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
                    3Labs
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Señal de Transición → Capa Empresa ← capital
                  </p>
                </div>
                {labs.map((lab, index) => {
                  const positions = [
                    "left-1/2 top-[10%]",
                    "left-[18%] top-[72%]",
                    "left-[82%] top-[72%]",
                  ];

                  return (
                    <article
                      className={`orbit-node diagram-card absolute w-56 p-5 ${positions[index]}`}
                      key={lab.title}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
                        {lab.label}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold text-white">
                        {lab.title}
                      </h3>
                    </article>
                  );
                })}
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.labs} />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {labs.map((lab, index) => (
                <div
                  className="flow-card border p-5 text-sm leading-6 text-[#E2E6E9]/86"
                  key={lab.title}
                >
                  <span className="text-trinomio-cyan">0{index + 1}</span>{" "}
                  {lab.description}
                </div>
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32"
          id="insights"
        >
          <div className="orbital-field absolute -right-24 -top-24 size-80 rounded-full opacity-20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Insights"
              title="Lecturas institucionales sobre energía, empresa y capital."
              description="Análisis sobre potencial energético estratégico, activos tecno-económicos bancables, Solar-UPS, small hydro, BESS, DERs, financiamiento y formación de capital para el Régimen de Transición."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {recentInsights.map((insight, index) => (
                <Link
                  className="diagram-card group relative flex min-h-[28rem] overflow-hidden border border-white/12 bg-white/[0.04] p-6 text-white transition hover:-translate-y-1 hover:border-trinomio-green/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
                  href={`/es/insights/${insight.slug}`}
                  key={insight.slug}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-36 border-b border-white/10 bg-cover bg-center opacity-70 mix-blend-screen transition duration-300 group-hover:scale-[1.02] group-hover:opacity-90"
                    style={{ backgroundImage: `url(${insight.coverImage})` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,38,0.08),rgba(3,17,38,0.92)_38%,rgba(4,25,56,0.98))]" />
                  <div className="relative flex min-h-full flex-col justify-between">
                    <div>
                      <div className="mb-24 flex items-start justify-between gap-5">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
                            {insight.category}
                          </p>
                          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#E2E6E9]/62">
                            {insight.readingTime} min
                          </p>
                        </div>
                        <span className="text-sm text-[#E2E6E9]/56">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold leading-tight">
                        {insight.title}
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#E2E6E9]/78">
                        {insight.excerpt}
                      </p>
                    </div>
                    <span className="mt-10 text-sm font-semibold text-trinomio-green transition group-hover:text-white">
                      Leer insight
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32"
          id="sobre"
        >
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Sobre Trinomio"
              title="Una plataforma institucional para incubar activos energéticos bancables."
              description="Trinomio trabaja donde la energía distribuida, BTM, Solar-UPS, small hydro, BESS y eficiencia necesitan gobierno económico, operación, contratos, financiamiento y arquitectura de inversión."
            />
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-trinomio-navy px-5 py-20 sm:px-8 lg:py-28"
          id="contacto"
        >
          <div className="accent-callout relative mx-auto max-w-7xl border p-8">
            <SectionHeading
              eyebrow="Contacto"
              title="Estructure su oportunidad energética."
              description="Para convertir tierra, carga, resiliencia, energía excedente o presión de crecimiento en activos bancables, Empresas Estructuradas y plataformas de transición financiables."
            />
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
