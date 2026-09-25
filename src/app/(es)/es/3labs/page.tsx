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
    "3Labs es el laboratorio donde Trinomio lee las oportunidades de la transición energética, les da medida y las convierte en empresas que el capital puede financiar.",
};

type Lab = {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: readonly string[];
  closing: string;
  panelLabel: string;
  cues?: readonly string[];
  example?: readonly string[];
};

const labs: readonly Lab[] = [
  {
    id: "sentir",
    title: "SENTIR",
    subtitle: "Leer lo que todavía no tiene precio",
    paragraphs: [
      "Antes de que una oportunidad aparezca en un contrato o en una tarifa, ya se está formando. Se forma en proyectos de ley, en cambios tecnológicos, en la preocupación pública y en las tensiones de la geopolítica.",
      "Sentir es leer esas fuerzas a tiempo. Nos preguntamos cuáles podrían incorporarse a la estructura actual del sistema eléctrico y cuáles podrían cambiarla por completo.",
    ],
    closing:
      "El resultado no es una opinión: es una dirección. Sentir nos dice qué activos conviene formar y cuándo.",
    panelLabel: "Dónde se forma una oportunidad",
    cues: [
      "proyectos de ley",
      "cambios tecnológicos",
      "preocupación pública",
      "geopolítica",
    ],
  },
  {
    // Keeps the #efi anchor used by links across the site.
    id: "efi",
    title: "DIMENSIONAR",
    subtitle: "Darle medida a lo que se sintió",
    paragraphs: [
      "Una dirección todavía no es un negocio. Dimensionar es trazarle límites: separar lo que genera ingreso de lo que solo promete, medir el riesgo y decidir qué tamaño puede sostener.",
      "Dimensionar también es recombinar. A veces el valor aparece cuando unimos piezas que por separado son débiles.",
    ],
    closing:
      "Solo avanzan las oportunidades cuyo valor energético cubre su costo. Las demás se quedan en el laboratorio.",
    panelLabel: "Un ejemplo",
    example: [
      "El sol produce más en los años secos. El agua de una pequeña central hidroeléctrica produce más en los años lluviosos.",
      "Cada activo por separado tiene un flujo de caja que sube y baja. Juntos, sus altibajos se compensan y el flujo combinado se vuelve más estable.",
      "Un flujo más estable permite sostener más deuda con la misma seguridad. Así, los mismos activos pueden financiar más.",
    ],
  },
  {
    id: "transformar",
    title: "TRANSFORMAR",
    subtitle: "Convertir la medida en empresa",
    paragraphs: [
      "Transformar es actuar. Formamos una Empresa Energética: una empresa energética estructurada para ser financiable. Tiene modelo de negocio, contratos, derechos, medición y gobierno, de modo que el capital puede entenderla, medirla y financiarla.",
      "Luego la empresa construye su primer activo, prueba su flujo de caja y accede a financiamiento de mercado. El capital que se libera vuelve a trabajar en el siguiente activo o en una nueva Empresa Energética.",
    ],
    closing:
      "Cada ciclo deja aprendizaje. Ese aprendizaje regresa al laboratorio y mejora lo que sentimos y dimensionamos después.",
    panelLabel: "Qué tiene una Empresa Energética",
    cues: ["modelo de negocio", "contratos", "derechos", "medición", "gobierno"],
  },
];

const roles = [
  {
    name: "Trinomio · 3Labs",
    role: "El laboratorio",
    text: "Diseña la arquitectura Energía → Empresa ← Capital y el método.",
  },
  {
    name: "Aureon Nexus",
    role: "La vasija",
    text: "Opera lo que el laboratorio diseña: forma las Empresas Energéticas, tiene los contratos y lleva los activos a operación.",
  },
] as const;

const practice = [
  {
    name: "Coopesantos",
    text: "Contrato de compra de energía firmado, en proceso hacia su fecha de operación comercial (COD).",
  },
  {
    name: "Nuevas Empresas Energéticas",
    text: "Hemos iniciado relaciones para formarlas y con instituciones financieras consolidadas de Costa Rica.",
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
              Ciclo 3Labs
            </p>
            <p className="mt-3 text-xl font-semibold leading-tight text-white">
              lo aprendido vuelve al laboratorio
            </p>
          </div>
          <div className="mx-auto my-4 h-8 w-px bg-trinomio-cyan/38" />
          <div className="grid gap-4">
            {labs.map((lab, index) => (
              <a
                className="diagram-card block p-5"
                href={`#${lab.id}`}
                key={lab.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {lab.title}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#E2E6E9]/78">
                  {lab.subtitle}
                </p>
              </a>
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
                  Ciclo 3Labs
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-white">
                  lo aprendido vuelve al laboratorio
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
  lab: Lab;
}) {
  return (
    <a
      className={`diagram-card relative z-20 block min-h-44 p-5 text-center ${className}`}
      href={`#${lab.id}`}
    >
      <p className="text-xs text-trinomio-cyan">0{index + 1}</p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{lab.title}</h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#E2E6E9]/78">
        {lab.subtitle}
      </p>
    </a>
  );
}

function LabSection({ lab, index }: { lab: Lab; index: number }) {
  return (
    <section
      className="institutional-section relative scroll-mt-24 overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
      id={lab.id}
    >
      <div className="orbital-field orbital-drift absolute right-[-10rem] top-16 size-96 rounded-full opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-trinomio-green">
            Paso 0{index + 1}
          </p>
          <h2 className="mt-4 text-5xl font-semibold text-white">{lab.title}</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-trinomio-cyan">
            {lab.subtitle}
          </p>
          {lab.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              className={`${paragraphIndex === 0 ? "mt-8" : "mt-5"} max-w-2xl text-xl leading-8 text-[#E2E6E9]/92`}
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-6 max-w-2xl border-l border-trinomio-green/55 pl-4 text-base leading-7 text-trinomio-cyan-soft/90">
            {lab.closing}
          </p>
        </div>
        <div className="flow-card relative overflow-hidden border p-6">
          <div className="adaptive-grid absolute inset-0 opacity-45" />
          <div className="orbital-field orbital-drift absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-28" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
              {lab.panelLabel}
            </p>
            {lab.cues ? (
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {lab.cues.map((cue) => {
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
            ) : null}
            {lab.example ? (
              <ol className="mt-5 grid gap-3">
                {lab.example.map((step) => (
                  <li
                    className="border border-white/10 bg-white/[0.035] px-4 py-4 text-base leading-7 text-[#E2E6E9]/90"
                    key={step}
                  >
                    {step}
                  </li>
                ))}
              </ol>
            ) : null}
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
            <h1 className="mt-10 max-w-6xl text-[clamp(2.5rem,10.8vw,3.25rem)] font-semibold leading-[1.04] sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              3Labs: el laboratorio de Trinomio
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-[#E2E6E9]/90">
              La transición energética abre oportunidades antes de que tengan
              precio, contrato o regla. 3Labs es el laboratorio donde Trinomio
              las lee, les da medida y las convierte en empresas que el capital
              puede financiar.
            </p>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Método"
              title="Nuestro método tiene tres pasos: Sentir, Dimensionar y Transformar."
              description="No es una secuencia que termina. Es un ciclo: lo que aprendemos al construir vuelve al laboratorio y afina lo que sentimos después."
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
          <LabSection index={index} key={lab.id} lab={lab} />
        ))}

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32">
          <div className="adaptive-grid absolute inset-0 opacity-30" />
          <div className="orbital-field absolute -right-24 top-20 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Laboratorio y vasija"
              title="Quién diseña y quién opera"
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {roles.map((item, index) => (
                <article
                  className="diagram-card relative overflow-hidden p-6"
                  key={item.name}
                >
                  <div className="orbital-field absolute -right-24 -top-24 size-64 rounded-full opacity-16" />
                  <p className="relative text-sm text-trinomio-cyan">
                    0{index + 1}
                  </p>
                  <h3 className="relative mt-6 text-3xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="relative mt-3 text-base font-semibold leading-7 text-trinomio-green">
                    {item.role}
                  </p>
                  <p className="relative mt-4 text-base leading-7 text-[#E2E6E9]/90">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 grid max-w-4xl gap-5 text-lg leading-8 text-[#E2E6E9]/90">
              <p>
                El método de 3Labs se aplica en Aureon Nexus y está disponible
                para otros vehículos de estructuración del mercado de capitales
                orientados a la transición energética.
              </p>
              <p className="border-l border-trinomio-green/55 pl-4 text-base leading-7 text-trinomio-cyan-soft/90">
                Declaramos nuestras relaciones de forma abierta. Trinomio asesora
                en el diseño de instrumentos de inversión para la transición
                energética, y esos instrumentos pueden invertir en empresas que
                Aureon Nexus forma. Ni Trinomio ni Aureon Nexus administran
                fondos ni actúan como fiduciarios.
              </p>
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute -right-24 -top-24 size-80 rounded-full opacity-20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Aplicado en estructuras reales"
              title="El método en práctica"
              description="El método no es solo una teoría: está aplicado en estructuras reales."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {practice.map((item, index) => (
                <article
                  className="flow-card relative overflow-hidden border p-6 backdrop-blur"
                  key={item.name}
                >
                  <div className="orbital-field orbital-drift absolute -right-14 -top-14 size-36 rounded-full opacity-20" />
                  <p className="relative text-sm text-trinomio-cyan">
                    0{index + 1}
                  </p>
                  <h3 className="relative mt-6 text-3xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="relative mt-4 text-base leading-7 text-[#E2E6E9]/90">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-base leading-7 text-[#E2E6E9]/82">
              Actualizaremos esta sección a medida que cada estructura alcance
              su siguiente etapa.
            </p>
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
