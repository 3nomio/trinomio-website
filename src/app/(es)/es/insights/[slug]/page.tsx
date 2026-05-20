import type { Metadata } from "next";
import { InsightArticlePage } from "@/components/InsightArticlePage";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllInsights().map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "Insight no encontrado | Trinomio",
    };
  }

  return {
    title: `${insight.title} | Trinomio Insights`,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
    },
  };
}

export default async function SpanishInsightArticleRoute({ params }: PageProps) {
  const { slug } = await params;

  return <InsightArticlePage insightSlug={slug} insightsBasePath="/es/insights" />;
}
