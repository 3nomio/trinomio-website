export {
  generateMetadata,
  generateStaticParams,
} from "../../../(es)/es/insights/[slug]/page";

import { InsightArticlePage } from "@/components/InsightArticlePage";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function InsightsAliasArticlePage({ params }: PageProps) {
  const { slug } = await params;

  return <InsightArticlePage insightSlug={slug} insightsBasePath="/insights" />;
}
