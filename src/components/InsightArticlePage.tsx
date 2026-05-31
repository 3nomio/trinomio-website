import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedFrameworks } from "@/components/ContextualNavigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import {
  getAdjacentInsights,
  getFinalInsight,
  getInsightBySlug,
} from "@/lib/insights";
import { frameworkLinks, spanishNav, type ContextualLink } from "@/lib/navigation";

type InsightArticlePageProps = {
  insightSlug: string;
  insightsBasePath: "/es/insights" | "/insights";
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*|\[[^\]]+\]\((?:<[^>]+>|[^)]+)\))/g);

  return (
    <>
      {parts.map((part, index) => {
        const linkMatch = part.match(/^\[([^\]]+)\]\((?:<([^>]+)>|([^)]+))\)$/);

        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong className="font-semibold text-white" key={`${part}-${index}`}>
              {part.slice(2, -2)}
            </strong>
          );
        }

        if (linkMatch) {
          const [, label, bracketedHref, plainHref] = linkMatch;
          const href = bracketedHref ?? plainHref.trim();
          const className =
            "font-semibold text-trinomio-cyan underline decoration-trinomio-cyan/45 underline-offset-4 transition hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan";

          if (href.startsWith("http")) {
            return (
              <a className={className} href={href} key={`${href}-${index}`}>
                {label}
              </a>
            );
          }

          return (
            <Link className={className} href={href} key={`${href}-${index}`}>
              {label}
            </Link>
          );
        }

        return part;
      })}
    </>
  );
}

function ArticleBody({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/);

  return (
    <div className="article-body mx-auto max-w-3xl">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        const imageMatch = trimmed.match(
          /^!\[([^\]]*)\]\((?:<([^>]+)>|([^)]+))\)(?:\n\*([^*]+)\*)?$/,
        );

        if (imageMatch) {
          const [, alt, bracketedSrc, plainSrc, caption] = imageMatch;
          const src = bracketedSrc ?? plainSrc.trim();

          return (
            <figure className="article-figure" key={`${src}-${index}`}>
              <Image
                alt={alt}
                className="article-image"
                height={1024}
                sizes="(max-width: 768px) calc(100vw - 2.5rem), 768px"
                src={src}
                width={1536}
              />
              {caption ? (
                <figcaption className="article-caption">
                  <InlineText text={caption} />
                </figcaption>
              ) : null}
            </figure>
          );
        }

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={`${trimmed}-${index}`}>
              <InlineText text={trimmed.replace(/^##\s+/, "")} />
            </h2>
          );
        }

        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={`${trimmed}-${index}`}>
              <InlineText text={trimmed.replace(/^###\s+/, "")} />
            </h3>
          );
        }

        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={`${trimmed}-${index}`}>
              <InlineText text={trimmed.replace(/^>\s?/gm, "")} />
            </blockquote>
          );
        }

        if (trimmed.startsWith("- ")) {
          return (
            <ul key={`${trimmed}-${index}`}>
              {trimmed.split("\n").map((item) => (
                <li key={item}>
                  <InlineText text={item.replace(/^-\s+/, "")} />
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${trimmed}-${index}`}>
            <InlineText text={trimmed} />
          </p>
        );
      })}
    </div>
  );
}

function getRelatedFrameworks(category: string): readonly ContextualLink[] {
  if (category === "Capital") {
    return frameworkLinks.proof;
  }

  if (category === "Empresa") {
    return frameworkLinks.doctrine;
  }

  return frameworkLinks.transition;
}

export function InsightArticlePage({
  insightSlug,
  insightsBasePath,
}: InsightArticlePageProps) {
  const insight = getInsightBySlug(insightSlug);

  if (!insight) {
    notFound();
  }

  const { previous } = getAdjacentInsights(insight.slug);
  const finalInsight = getFinalInsight();
  const isFinalInsight = finalInsight?.slug === insight.slug;

  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <article>
          <section className="relative min-h-[82vh] overflow-hidden bg-trinomio-navy-deep px-5 py-24 text-white sm:px-8 lg:py-32">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center opacity-34"
              style={{ backgroundImage: `url(${insight.coverImage})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,23,0.48),rgba(2,11,23,0.94)),radial-gradient(circle_at_22%_26%,rgba(23,215,255,0.18),transparent_34rem)]" />
            <div className="adaptive-grid absolute inset-0 opacity-28" />
            <div className="orbital-field orbital-drift absolute right-[-16rem] top-20 size-[46rem] rounded-full opacity-24" />
            <div className="animated-flow-line absolute bottom-24 left-0 right-0" />

            <div className="relative mx-auto max-w-7xl">
              <Logo
                className="mb-16 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
                imageClassName="h-14 w-auto sm:h-16"
                priority
              />
              <div className="max-w-5xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
                  {insight.category}
                </p>
                <h1 className="mt-8 text-5xl font-semibold leading-[1.03] sm:text-7xl lg:text-8xl">
                  {insight.title}
                </h1>
                <p className="mt-8 max-w-3xl text-xl leading-8 text-[#E2E6E9]/92">
                  {insight.excerpt}
                </p>
                <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-sm uppercase tracking-[0.16em] text-[#E2E6E9]/72">
                  <span>{formatDate(insight.date)}</span>
                  <span>{insight.author}</span>
                  <span>{insight.readingTime} min lectura</span>
                </div>
              </div>
              <figure className="mt-16 overflow-hidden border border-white/12 bg-white/[0.035] shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    alt={`Portada del insight: ${insight.title}`}
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 768px) calc(100vw - 2.5rem), (max-width: 1280px) calc(100vw - 4rem), 1280px"
                    src={insight.coverImage}
                  />
                </div>
              </figure>
            </div>
          </section>

          <OrbitalDivider />

          <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-20 sm:px-8 lg:py-28">
            <div className="orbital-field orbital-drift absolute -left-64 top-36 size-[36rem] rounded-full opacity-14" />
            <div className="orbital-field orbital-drift absolute -right-72 bottom-20 size-[42rem] rounded-full opacity-16" />
            <ArticleBody content={insight.content} />
            <div className="mx-auto max-w-3xl">
              <RelatedFrameworks links={getRelatedFrameworks(insight.category)} />
            </div>
          </section>

          <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-20 sm:px-8">
            <div className="mx-auto mb-10 flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
                  Navegación de lectura
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                  Continuar desde la serie institucional.
                </h2>
              </div>
              <Link
                className="inline-flex w-fit border border-white/14 bg-white/[0.045] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
                href={insightsBasePath}
              >
                Volver a Insights
              </Link>
            </div>
            <div className="mx-auto mb-5 max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
                Artículos adyacentes
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
              {previous ? (
                <Link
                  className="flow-card block border border-white/12 bg-white/[0.045] p-6 transition hover:border-trinomio-cyan/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
                  href={`${insightsBasePath}/${previous.slug}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
                    Artículo anterior
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-white">
                    {previous.title}
                  </h2>
                </Link>
              ) : (
                <div className="border border-white/10 bg-white/[0.025] p-6 text-sm uppercase tracking-[0.16em] text-[#E2E6E9]/56">
                  Primer artículo de la serie
                </div>
              )}

              {finalInsight && !isFinalInsight ? (
                <Link
                  className="flow-card block border border-white/12 bg-white/[0.045] p-6 transition hover:border-trinomio-green/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan md:text-right"
                  href={`${insightsBasePath}/${finalInsight.slug}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
                    Último artículo de la serie
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-white">
                    {finalInsight.title}
                  </h2>
                </Link>
              ) : (
                <div className="border border-white/10 bg-white/[0.025] p-6 md:text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
                    Último artículo de la serie
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#E2E6E9]/56">
                    Está leyendo el cierre de esta serie
                  </p>
                </div>
              )}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
