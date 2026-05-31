import { EnglishInsightArticlePage } from "@/components/EnglishInsightArticlePage";
import { getAllInsights } from "@/lib/insights";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllInsights().map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insights = getAllInsights();
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    return { title: "Insight not found | Trinomio" };
  }

  return {
    title: `${insight.title} | Trinomio`,
    description: insight.excerpt,
  };
}

export default async function EnglishInsightPage({ params }: PageProps) {
  const { slug } = await params;
  return <EnglishInsightArticlePage insightSlug={slug} />;
}
