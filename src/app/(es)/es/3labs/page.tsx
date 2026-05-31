import { DiagramNavigation, RelatedFrameworks } from "@/components/ContextualNavigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { SectionHeading } from "@/components/SectionHeading";
import { getGlossaryHref, getGlossaryTermByLabel } from "@/lib/glossary";
import { frameworkLinks, primaryLoopLinks, spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "3Labs | Trinomio",
  description:
    "3Labs es el sistema operativo de Trinomio para convertir señales de transición en empresas estructuradas, flujos gobernados y decisiones de capital.",
};

const labs = [
  {
    title: "SENTIR",
    subtitle: "Detectar señales de transición",
    copy: "Identificamos cambios en tecnología, regulación, tarifas, demanda energética, resiliencia y riesgos extra-financieros que pueden modificar la economía de una oportunidad.",
    output: "Resultado: oportunidades y riesgos identificados para decidir dónde profundizar análisis, estructuración o alianzas.",
    cues: [
      "tecnología",
      "regulación",
      "tarifas",
      "demanda energética",
      "resiliencia",
      "riesgos extra-financieros",
    ],
  },
  {
    title: "DIMENSIONAR",
    subtitle: "Convertir señales en magnitudes económicas",
    copy: "Traducimos la oportunidad en flujos de caja, riesgos, contratos, bancabilidad, P50 / P90, DSCR y sensibilidad tarifaria para saber si puede volverse estructurable.",
    output: "Resultado: oportunidad cuantificada, comparable y preparada para una tesis de Empresa Estructurada.",
    cues: [
      "flujos de caja",
      "riesgos",
      "contratos",
      "bancabilidad",
      "P50 / P90",
      "DSCR",
      "sensibilidad tarifaria",
    ],
  },
  {
    title: "REBALANCEAR",
    subtitle: "Ajustar arquitectura empresarial y financiera",
    copy: "Ordenamos Project Finance, Capa Empresa, SPV, FICR, deuda, alianzas, gobierno y reporting para conectar bankability de proyecto con intermediación de mercado de capitales.",
    output: "Resultado: estructura preparada para discusión con bancos, SAFIs, FICR, inversionistas, cooperativas y socios estratégicos.",
    cues: ["Project Finance", "Capa Empresa", "SPV", "FICR", "deuda", "gobierno", "reporting"],
  },
] as const;

const efiLevels = [
  {
    level: "Micro",
    text: "función energética con excedente operativo",
  },
  {
    level: "Meso",
    text: "estructura empresarial y flujo bancable",
  },
  {
    level: "Macro",
    text: "disciplina de capital y repetición de plataforma",
  },
] as const;

function OrbitalLabs() {
  return (
    <div className="mt-14">
      <div className="diagram-stage relative mx-auto p-5 md:hidden">
        <div className="adaptive-grid absolute inset-0 opacity-24" />
        <div className="relative">
          <div className="accent-callout border p-5 text-center backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
              Capa Empresa
            </p>
            <p className="mt-3 text-xl font-semibold leading-tight text-white">
              capacidad institucional
            </p>
          </div>
          <div className="mx-auto my-4 h-8 w-px bg-trinomio-cyan/38" />
          <div className="grid gap-4">
            {labs.map((lab, index) => (
              <article
                className="diagram-card p-5"
                key={lab.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
                  0{index + 1}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {lab.title}
                </h2>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#E2E6E9]/78">
                  {lab.subtitle}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/88">
                  {lab.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="diagram-stage relative mx-auto hidden max-w-5xl overflow-hidden p-8 md:block lg:p-10">
        <div className="adaptive-grid absolute inset-0 opacity-30" />
        <div className="orbit-map orbital-drift pointer-events-none absolute left-1/2 top-1/2 hidden w-[min(62vw,42rem)] -translate-x-1/2 -translate-y-1/2 opacity-86 lg:block" />
        <div className="relative grid gap-6">
          <LabOrbitNode lab={labs[0]} index={0} className="mx-auto max-w-xs" />

          <div className="grid gap-6 lg:grid-cols-[minmax(13rem,14rem)_minmax(16rem,1fr)_minmax(13rem,14rem)] lg:items-center">
            <LabOrbitNode lab={labs[1]} index={1} />

            <div className="accent-callout relative z-10 mx-auto w-full max-w-sm border p-5 text-center backdrop-blur lg:max-w-[17rem]">
              <div className="orbital-field absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-16" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
                  Capa Empresa
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-white">
                  capacidad institucional
                </p>
              </div>
            </div>

            <LabOrbitNode lab={labs[2]} index={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function LabOrbitNode({
  className = "",
  index,
  lab,
}: {
  className?: string;
  index: number;
  lab: (typeof labs)[number];
}) {
  return (
    <article
      className={`diagram-card relative z-20 min-h-44 p-5 text-center ${className}`}
    >
      <p className="text-xs text-trinomio-cyan">0{index + 1}</p>
      <h2 className="mt-4 text-2xl font-semibold text-white">{lab.title}</h2>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#E2E6E9]/78">
        {lab.subtitle}
      </p>
    </article>
  );
}

function LabSection({
  title,
  subtitle,
  copy,
  output,
  cues,
  index,
}: {
  title: string;
  subtitle: string;
  copy: string;
  output: string;
  cues: readonly string[];
  index: number;
}) {
  return (
    <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
      <div className="orbital-field orbital-drift absolute right-[-10rem] top-16 size-96 rounded-full opacity-20" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-trinomio-green">
            Lab 0{index + 1}
          </p>
          <h2 className="mt-4 text-5xl font-semibold text-white">{title}</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-trinomio-cyan">
            {subtitle}
          </p>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#E2E6E9]/92">
            {copy}
          </p>
          <p className="mt-6 max-w-2xl border-l border-trinomio-green/55 pl-4 text-base leading-7 text-trinomio-cyan-soft/90">
            {output}
          </p>
        </div>
        <div className="flow-card relative overflow-hidden border p-6">
          <div className="adaptive-grid absolute inset-0 opacity-45" />
          <div className="orbital-field orbital-drift absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-28" />
          <div className="relative grid gap-3 md:grid-cols-2">
            {cues.map((cue) => {
              const glossaryTerm = getGlossaryTermByLabel(cue);
              const className =
                "flow-card cta-card border px-4 py-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#E2E6E9]/92";

              return glossaryTerm ? (
                <Link
                  aria-label={`Ver ${cue} en el glosario`}
                  className={className}
                  href={getGlossaryHref(glossaryTerm.slug)}
                  key={cue}
                >
                  {cue}
                </Link>
              ) : (
                <span className={className} key={cue}>
                  {cue}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ThreeLabsPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <ScrollNavigation indexLabel="↑ Subir" menuHref="/es" menuLabel="← Volver" />
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 text-white sm:px-8 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(23,215,255,0.16),transparent_30rem),radial-gradient(circle_at_78%_24%,rgba(96,157,255,0.2),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="adaptive-grid absolute inset-0 opacity-45" />
          <div className="orbital-field orbital-drift absolute right-[-14rem] top-16 size-[42rem] rounded-full opacity-32" />

          <div className="relative mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
              3Labs
            </p>
            <p className="mt-5 max-w-4xl text-xl leading-8 text-[#E2E6E9]/92">
              Sistema operativo para traducir Energía → Empresa ← Capital.
            </p>
            <h1 className="mt-10 max-w-6xl text-[clamp(2.5rem,10.8vw,3.25rem)] font-semibold leading-[1.04] sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              3Labs: capacidades para convertir señales de transición en
              empresas estructuradas
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-[#E2E6E9]/90">
              Trinomio combina lectura estratégica, análisis financiero y
              arquitectura empresarial para transformar oportunidades
              energéticas en decisiones de estructuración, inversión y capital.
            </p>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Sistema 3Labs"
              title="3Labs no es una unidad de investigación aislada. Es el sistema operativo que permite traducir Energía → Empresa ← Capital."
              description="Cada capacidad convierte señales externas en decisiones institucionales: qué oportunidad observar, cómo cuantificar su excedente operativo y qué arquitectura necesita para satisfacer disciplina de capital."
            />
            <OrbitalLabs />
            <DiagramNavigation links={frameworkLinks.labs} />
            <p className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#E2E6E9]/82">
              Energía <span className="text-trinomio-cyan">→</span> Empresa{" "}
              <span className="text-trinomio-cyan">←</span> Capital
            </p>
          </div>
        </section>

        <OrbitalDivider />

        {labs.map((lab, index) => (
          <LabSection
            copy={lab.copy}
            cues={lab.cues}
            index={index}
            key={lab.title}
            output={lab.output}
            subtitle={lab.subtitle}
            title={lab.title}
          />
        ))}

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32"
          id="efi"
        >
          <div className="orbital-field orbital-drift absolute -right-24 -top-24 size-80 rounded-full opacity-20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="EFI"
              title="EFI ayuda a decidir cuándo una señal puede convertirse en oportunidad estructurable."
              description="EFI identifica excedente operativo: cuándo una función energética crea más valor marginal del que cuesta entregar. Luego 3Labs prueba si ese excedente puede sostener WACC, DSCR, tenor y bankability."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {efiLevels.map((item, index) => (
                <article
                  className="flow-card relative overflow-hidden border p-6 backdrop-blur"
                  key={item.level}
                >
                  <div className="orbital-field orbital-drift absolute -right-14 -top-14 size-36 rounded-full opacity-20" />
                  <p className="relative text-sm text-trinomio-cyan">
                    0{index + 1}
                  </p>
                  <h2 className="relative mt-8 text-3xl font-semibold text-white">
                    {item.level}
                  </h2>
                  <p className="relative mt-4 text-base leading-7 text-[#E2E6E9]/90">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <RelatedFrameworks links={frameworkLinks.labs} />
          </div>
        </section>

        <section className="relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-24" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              El valor de 3Labs está en reducir la distancia entre señales de
              transición y decisiones financiables. Donde otros ven tendencias,
              Trinomio busca formar empresas, flujos y vehículos capaces de
              sostener capital.
            </h2>
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
