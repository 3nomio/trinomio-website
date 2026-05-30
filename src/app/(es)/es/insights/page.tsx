import { RelatedFrameworks } from "@/components/ContextualNavigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";
import {
  getAllInsights,
  getInsightCategories,
  type Insight,
} from "@/lib/insights";
import { frameworkLinks, primaryLoopLinks, spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Trinomio",
  description:
    "Análisis institucional de Trinomio sobre greenfield energético, activos bancables, Project Finance, FICR y arquitectura de inversión.",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

function InsightCard({
  insight,
  index,
}: {
  insight: Insight;
  index: number;
}) {
  return (
    <Link
      className="diagram-card group relative block min-h-[34rem] overflow-hidden backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
      href={`/es/insights/${insight.slug}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 border-b border-white/10 bg-cover bg-center opacity-72 mix-blend-screen transition duration-300 group-hover:scale-[1.02] group-hover:opacity-90"
        style={{ backgroundImage: `url(${insight.coverImage})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,38,0.08),rgba(3,17,38,0.94)_42%,rgba(4,25,56,0.98))]" />
      <div className="relative flex min-h-[34rem] flex-col justify-between p-6 sm:p-7">
        <div className="orbital-field absolute -right-24 -top-24 size-64 rounded-full opacity-18 transition group-hover:opacity-34" />
        <div className="relative">
          <div className="mb-32 flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
                {insight.category}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#E2E6E9]/62">
                {formatDate(insight.date)} · {insight.readingTime} min
              </p>
            </div>
            <span className="text-sm text-[#E2E6E9]/56">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {insight.title}
          </h2>
          <p className="mt-5 line-clamp-2 text-sm leading-6 text-[#E2E6E9]/78">
            {insight.excerpt}
          </p>
        </div>
        <span className="relative mt-10 inline-flex max-w-full items-center border border-white/14 bg-white/[0.045] px-4 py-3 text-left text-sm font-semibold leading-5 text-white transition group-hover:-translate-y-0.5 group-hover:border-trinomio-green/45 group-hover:text-trinomio-green">
          Leer: {insight.title}
        </span>
      </div>
    </Link>
  );
}

export default function InsightsPage() {
  const insights = getAllInsights();
  const categories = getInsightCategories();

  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 text-white sm:px-8 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(23,215,255,0.14),transparent_30rem),radial-gradient(circle_at_78%_28%,rgba(96,157,255,0.18),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="adaptive-grid absolute inset-0 opacity-42" />
          <div className="orbital-field absolute right-[-14rem] top-16 size-[42rem] rounded-full opacity-30" />

          <div className="relative mx-auto max-w-7xl">
            <Logo
              className="mb-12 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
              imageClassName="h-14 w-auto sm:h-16"
              priority
            />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
              Insights
            </p>
            <p className="mt-5 max-w-4xl text-xl leading-8 text-[#E2E6E9]/92">
              Energía → Empresa ← Capital.
            </p>
            <h1 className="mt-10 max-w-6xl text-[clamp(2.5rem,10.8vw,3.25rem)] font-semibold leading-[1.04] sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              Lectura institucional del Régimen de Transición.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#E2E6E9]/90">
              Análisis sobre oportunidades greenfield, Capa Empresa,
              underwriting, Project Finance, FICR, Solar-UPS, small hydro,
              BESS e infraestructura bancable para la nueva economía.
            </p>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Biblioteca Institucional"
              title="Artículos estructurados desde Energía → Empresa ← Capital."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {insights.map((insight, index) => (
                <InsightCard
                  index={index}
                  insight={insight}
                  key={insight.slug}
                />
              ))}
            </div>
            <RelatedFrameworks links={frameworkLinks.doctrine} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field absolute -right-24 top-16 size-80 rounded-full opacity-20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Categorías"
              title="Un mapa editorial para activos, empresas operativas y capital institucional."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {categories.map((category, index) => (
                <div
                  className="flow-card border border-white/12 bg-white/[0.04] p-5"
                  key={category}
                >
                  <p className="text-sm text-trinomio-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#E2E6E9]/92">
                    {category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32">
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <SectionHeading
              eyebrow="Posicionamiento"
              title="La interpretación empieza en la oportunidad energética y se completa en el activo bancable."
            />
            <div className="flow-card border border-white/12 bg-white/[0.045] p-8">
              <p className="text-2xl font-semibold leading-tight text-white">
                Trinomio publica desde la Capa Empresa: el lugar donde tierra,
                carga, resiliencia, DERs, Solar-UPS, small hydro y BESS se
                organizan en contratos, gobernanza, Project Finance, FICR y
                Arquitectura de Inversión.
              </p>
            </div>
            <RelatedFrameworks links={frameworkLinks.labs} />
          </div>
        </section>

        <section className="relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-24" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Energy is not a deal. Energy is strategic architecture.
            </h2>
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
