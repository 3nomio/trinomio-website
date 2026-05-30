import { RelatedFrameworks } from "@/components/ContextualNavigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { SectionHeading } from "@/components/SectionHeading";
import {
  getGlossaryHref,
  glossaryTermsAlphabetical,
  glossaryTermsByCategory,
  type GlossaryTerm,
} from "@/lib/glossary";
import { frameworkLinks, primaryLoopLinks, spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glosario | Trinomio",
  description:
    "Glosario institucional de Trinomio para greenfield energético, activos bancables, DERs, Project Finance, FICR, riesgo y estructuración de capital.",
};

function TermCard({ term }: { term: GlossaryTerm }) {
  return (
    <article
      className="flow-card scroll-mt-28 border border-white/12 bg-white/[0.045] p-5"
      id={term.slug}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
            {term.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
            <Link
              className="transition hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
              href={getGlossaryHref(term.slug)}
            >
              {term.term}
            </Link>
          </h3>
        </div>
        <Link
          aria-label={`Enlace directo a ${term.term}`}
          className="w-fit border border-white/12 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#E2E6E9]/72 transition hover:border-trinomio-cyan/55 hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
          href={getGlossaryHref(term.slug)}
        >
          #{term.slug}
        </Link>
      </div>
      <p className="mt-5 text-sm leading-6 text-[#E2E6E9]/86">
        {term.definition}
      </p>
      {term.trinomioLens ? (
        <div className="mt-5 border-l border-trinomio-green/55 pl-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
            Lente Trinomio
          </p>
          <p className="mt-2 text-sm leading-6 text-[#E2E6E9]/90">
            {term.trinomioLens}
          </p>
        </div>
      ) : null}
    </article>
  );
}

export default function GlossaryPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 text-white sm:px-8 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(23,215,255,0.16),transparent_30rem),radial-gradient(circle_at_78%_28%,rgba(96,157,255,0.18),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="adaptive-grid absolute inset-0 opacity-46" />
          <div className="orbital-field orbital-drift absolute right-[-14rem] top-16 size-[42rem] rounded-full opacity-28" />
          <div className="animated-flow-line absolute bottom-10 left-0 right-0 sm:bottom-14" />

          <div className="relative mx-auto max-w-7xl">
            <Logo
              className="mb-12 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
              imageClassName="h-14 w-auto sm:h-16"
              priority
            />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
              Glosario institucional
            </p>
            <p className="mt-5 max-w-4xl text-xl leading-8 text-[#E2E6E9]/92">
              Energía → Empresa ← Capital.
            </p>
            <h1 className="mt-10 max-w-6xl text-[clamp(2.5rem,10.8vw,3.25rem)] font-semibold leading-[1.04] sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              Términos para navegar la transición como arquitectura
              financiable.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#E2E6E9]/90">
              Una capa de conocimiento para conectar DERs, regulación, riesgo,
              empresas operativas, Project Finance, FICR, disciplina de capital
              y suscripción de activos energéticos bancables.
            </p>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-20 sm:px-8 lg:py-28">
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <SectionHeading
              eyebrow="Mapa temático"
              title="La taxonomía sigue la lógica institucional: energía, empresa, riesgo y capital."
              description="Cada término tiene un ancla estable para que futuros artículos puedan vincular directamente a su definición."
            />
            <nav
              aria-label="Categorías del glosario"
              className="grid gap-3 sm:grid-cols-2"
            >
              {glossaryTermsByCategory.map(({ category, terms }, index) => (
                <Link
                  className="flow-card border border-white/12 bg-white/[0.045] p-5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
                  href={`#${category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
                  key={category}
                >
                  <span className="text-sm text-trinomio-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-8 block text-lg font-semibold leading-tight text-white">
                    {category}
                  </span>
                  <span className="mt-3 block text-sm text-[#E2E6E9]/70">
                    {terms.length} términos
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32"
          id="alfabetico"
        >
          <div className="adaptive-grid absolute inset-0 opacity-34" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Índice alfabético"
              title="Anclas estables para lectura, citación y navegación editorial."
            />
            <div className="mt-10 flex flex-wrap gap-2">
              {glossaryTermsAlphabetical.map((term) => (
                <Link
                className="max-w-full whitespace-normal break-words border border-white/12 bg-white/[0.04] px-3 py-2 text-sm font-semibold leading-5 text-[#E2E6E9]/82 transition hover:border-trinomio-cyan/55 hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
                  href={getGlossaryHref(term.slug)}
                  key={term.slug}
                >
                  {term.term}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <ScrollNavigation
          ariaLabel="Navegación rápida del glosario"
          indexHref="#alfabetico"
          menuHref="/es"
        />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Categorías"
              title="Términos agrupados por función dentro de Energía → Empresa ← Capital."
            />
            <div className="mt-14 space-y-14">
              {glossaryTermsByCategory.map(({ category, terms }) => (
                <section
                  className="scroll-mt-28"
                  id={category
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .replaceAll("&", "and")}
                  key={category}
                >
                  <div className="mb-6 flex flex-col gap-3 border-b border-white/12 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <h2 className="text-3xl font-semibold leading-tight text-white">
                      {category}
                    </h2>
                    <Link
                      className="text-sm font-semibold uppercase tracking-[0.14em] text-trinomio-cyan transition hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
                      href="#alfabetico"
                    >
                      Volver al índice
                    </Link>
                  </div>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {terms.map((term) => (
                      <TermCard key={term.slug} term={term} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
            <RelatedFrameworks links={frameworkLinks.doctrine} />
          </div>
        </section>

        <section className="relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-22" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              El glosario no define palabras aisladas. Define el lenguaje de la
              Capa Empresa.
            </h2>
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
