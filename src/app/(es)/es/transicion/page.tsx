import { DiagramNavigation, RelatedFrameworks } from "@/components/ContextualNavigation";
import { Footer } from "@/components/Footer";
import { GlossaryTermLink } from "@/components/GlossaryTermLink";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { frameworkLinks, primaryLoopLinks, spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transición Energética | Trinomio",
  description:
    "La transición energética necesita Capa Empresa para convertir activos distribuidos, contratos y flujos de caja en estructuras financiables.",
};

const legacyEconomy = [
  "combustión térmica",
  "infraestructura centralizada",
  "procesos mecánicos",
  "escasez de combustibles",
  "control lineal",
];

const newEconomy = [
  "electrificación",
  "DER",
  "inteligencia artificial",
  "sistemas distribuidos",
  "infraestructura programable",
  "redes adaptativas",
];

const macroForces = [
  "presión regulatoria",
  "volatilidad energética",
  "nuevos requerimientos de capital",
  "necesidad de resiliencia",
  "repricing del riesgo",
  "rebalanceo institucional",
];

const efiSignals = [
  "activo medible",
  "contrato exigible",
  "gobierno operativo",
  "flujo trazable",
  "capital suscribible",
];

const transitionSequence = [
  "energía distribuida",
  "Capa Empresa",
  "flujo gobernado",
  "capital institucional",
] as const;

function SignalList({ items }: { items: readonly string[] }) {
  const className =
    "border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-[#E2E6E9]/90 transition hover:border-trinomio-cyan/40 hover:text-white";

  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item}>
          <GlossaryTermLink className={`block ${className}`}>
            {item}
          </GlossaryTermLink>
        </li>
      ))}
    </ul>
  );
}

export default function TransitionPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(23,215,255,0.17),transparent_30rem),radial-gradient(circle_at_78%_30%,rgba(96,157,255,0.2),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="orbital-field orbital-drift absolute right-[-14rem] top-16 size-[42rem] rounded-full opacity-32" />
          <div className="orbital-field orbital-drift absolute bottom-[-18rem] left-[-14rem] size-[34rem] rounded-full opacity-18" />

          <div className="relative mx-auto max-w-7xl">
            <Logo
              className="mb-12 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
              imageClassName="h-14 w-auto sm:h-16"
              priority
            />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
              La Transición
            </p>
            <p className="mt-5 max-w-4xl text-xl leading-8 text-[#E2E6E9]/92">
              Energía distribuida -&gt; Capa Empresa -&gt; flujo gobernado -&gt;
              capital institucional.
            </p>
            <h1 className="mt-10 max-w-6xl text-[clamp(2.5rem,10.8vw,3.25rem)] font-semibold leading-[1.04] sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              La transición energética necesita una capa empresarial para
              volverse financiable
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-[#E2E6E9]/90">
              Los activos distribuidos, la eficiencia, el almacenamiento y la
              resiliencia operativa no se convierten automáticamente en valor
              institucional. Primero deben organizarse en empresas, contratos,
              gobierno, información y flujos de caja legibles para el capital.
            </p>
            <RelatedFrameworks className="max-w-5xl" links={frameworkLinks.transition} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute -right-28 top-16 size-80 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Problema institucional"
              title="La transición no es solo tecnológica. Es un desafío de estructuración."
              description="Más DER, más BESS o más eficiencia no bastan. Sin una estructura empresarial que organice riesgos, contratos, medición y gobierno, la oportunidad energética permanece fragmentada y difícil de financiar."
            />
            <div className="diagram-stage mt-14 overflow-hidden p-5 sm:p-8">
              <div className="relative grid gap-4 lg:grid-cols-3">
                {[
                  {
                    eyebrow: "Activo",
                    title: "La energía produce capacidad física.",
                    text: "Generación distribuida, almacenamiento, eficiencia y resiliencia operativa crean una base productiva cercana al consumo.",
                  },
                  {
                    eyebrow: "Empresa",
                    title: "La Capa Empresa organiza la oportunidad.",
                    text: "Contratos, propiedad, operación, medición, gobierno y asignación de riesgos convierten esa base en unidad económica.",
                  },
                  {
                    eyebrow: "Capital",
                    title: "El flujo gobernado permite underwriting.",
                    text: "Bancos, SAFIs, inversionistas y socios estratégicos necesitan información, trazabilidad y disciplina de caja para participar.",
                  },
                ].map((item, index) => (
                  <article
                    className="diagram-card relative min-h-72 overflow-hidden p-6"
                    key={item.eyebrow}
                  >
                    <div className="orbital-field orbital-drift absolute -right-20 -top-20 size-52 rounded-full opacity-20" />
                    <p className="relative text-sm text-trinomio-cyan">
                      0{index + 1}
                    </p>
                    <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
                      {item.eyebrow}
                    </p>
                    <h2 className="relative mt-4 text-3xl font-semibold leading-tight text-white">
                      {item.title}
                    </h2>
                    <p className="relative mt-5 text-sm leading-6 text-[#E2E6E9]/88">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.doctrine} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="animated-flow-line absolute left-0 right-0 top-0" />
          <div className="orbital-field absolute left-[-12rem] top-24 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1fr]">
            <SectionHeading
              eyebrow="Rol de Trinomio"
              title="Trinomio trabaja en la capa intermedia entre oportunidad energética y capital institucional."
              description="Ahí la oportunidad energética se convierte en Empresa Estructurada, y la empresa produce flujos de caja capaces de dialogar con bancos, SAFIs, inversionistas y mercados de capital."
            />
            <div className="diagram-stage relative overflow-hidden p-6">
              <div className="conversion-rail absolute left-[8%] right-[8%] top-1/2 hidden md:block" />
              <div className="relative grid gap-3 lg:grid-cols-4">
                {transitionSequence.map((item, index) => (
                  <div
                    className="diagram-card min-h-44 p-4"
                    key={item}
                  >
                    <p className="text-xs text-trinomio-cyan">0{index + 1}</p>
                    <GlossaryTermLink className="mt-12 block text-sm font-semibold uppercase tracking-[0.12em] text-white">
                      {item}
                    </GlossaryTermLink>
                  </div>
                ))}
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.doctrine} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute -right-28 top-16 size-80 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Contexto de régimen"
              title="Dos sistemas económicos operan simultáneamente."
              description="La economía legado conserva escala, balances y activos existentes. La nueva economía crece desde electrificación, inteligencia y redes distribuidas que modifican la productividad marginal del capital."
            />
            <div className="diagram-stage mt-14 overflow-hidden p-5 sm:p-8">
              <div className="relative grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
                <article className="diagram-card p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E2E6E9]/64">
                    Economía Legado
                  </p>
                  <h2 className="mt-8 text-4xl font-semibold leading-tight text-white">
                    Infraestructura térmica y control lineal.
                  </h2>
                  <div className="mt-8">
                    <SignalList items={legacyEconomy} />
                  </div>
                </article>
                <div className="hidden min-h-full place-items-center lg:grid">
                  <div className="w-28">
                    <div className="conversion-rail relative" />
                    <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
                      conversión
                    </p>
                  </div>
                </div>
                <article className="diagram-card relative overflow-hidden border-trinomio-cyan/24 p-6">
                  <div className="orbital-field orbital-drift absolute -right-20 -top-20 size-56 rounded-full opacity-28" />
                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-trinomio-cyan">
                      Nueva Economía
                    </p>
                    <h2 className="mt-8 text-4xl font-semibold leading-tight text-white">
                      Sistemas eléctricos, programables y adaptativos.
                    </h2>
                    <div className="mt-8">
                      <SignalList items={newEconomy} />
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.transition} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="adaptive-grid absolute inset-0 opacity-45" />
          <div className="orbital-field absolute right-[-10rem] top-16 size-96 rounded-full opacity-20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Umbral de financiabilidad"
              title="La oportunidad cruza el umbral cuando puede producir flujo gobernado."
              description="EFI se entiende como una lectura institucional: no basta con medir el activo. Hay que saber cuándo producción, contrato, gobierno y trazabilidad permiten una conversación de capital."
            />
            <div className="diagram-stage relative mt-14 overflow-hidden p-5 sm:p-8">
              <div className="conversion-rail absolute left-[8%] right-[8%] top-1/2 hidden md:block" />
              <div className="relative grid gap-4 lg:grid-cols-5">
              {efiSignals.map((signal, index) => (
                <div
                  className="diagram-card relative min-h-52 overflow-hidden p-5 backdrop-blur"
                  key={signal}
                >
                  <div className="orbital-field absolute -right-14 -top-14 size-32 rounded-full opacity-20" />
                  <p className="relative text-sm text-trinomio-cyan">
                    0{index + 1}
                  </p>
                  <GlossaryTermLink className="relative mt-5 block text-sm font-semibold uppercase tracking-[0.12em] text-[#E2E6E9]/95">
                    {signal}
                  </GlossaryTermLink>
                </div>
              ))}
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.labs} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field absolute -left-20 top-10 size-80 rounded-full opacity-18" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <SectionHeading
              eyebrow="Presiones de contexto"
              title="El régimen macro aumenta la necesidad de estructuras financiables."
              description="Cambio tecnológico, presión regulatoria, volatilidad energética, requerimientos de capital y resiliencia operativa elevan la importancia de organizar activos distribuidos como empresas gobernables."
            />
            <div>
              <SignalList items={macroForces} />
              <p className="flow-card mt-8 border border-trinomio-cyan/25 bg-white/[0.035] p-5 text-lg leading-8 text-[#E2E6E9]/92">
                En este contexto, el capital no busca exposición dispersa.
                Busca estructuras con gobierno, información, contratos y
                mecanismos de protección suficientes para suscribir riesgo.
              </p>
            </div>
            <RelatedFrameworks links={frameworkLinks.transition} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="animated-flow-line absolute left-0 right-0 top-1/2" />
          <div className="orbital-field absolute right-[-8rem] top-20 size-96 rounded-full opacity-22" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Puente institucional"
              title="Energía distribuida → Capa Empresa → Flujo gobernado → Capital institucional"
              description="El capital no puede migrar directamente hacia oportunidades energéticas dispersas. Migra hacia empresas estructuradas que convierten activos, contratos, riesgo y operación en una arquitectura legible, financiable y escalable."
            />
            <div className="diagram-stage relative mt-12 overflow-hidden p-6 sm:p-8">
              <div className="conversion-rail absolute left-[8%] right-[8%] top-1/2 hidden md:block" />
              <div className="relative grid gap-4 lg:grid-cols-4">
                {transitionSequence.map((item, index) => (
                  <div className="diagram-card min-h-56 p-6" key={item}>
                    <p className="text-sm text-trinomio-cyan">0{index + 1}</p>
                    <GlossaryTermLink className="mt-20 block text-3xl font-semibold leading-tight text-white">
                      {item}
                    </GlossaryTermLink>
                  </div>
                ))}
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.doctrine} />
          </div>
        </section>

        <section className="relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-24" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              El desafío no es solo financiar activos energéticos. Es construir
              las unidades empresariales que permitan que esos activos se
              conviertan en flujos, garantías, información y vehículos
              invertibles.
            </h2>
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
