import fs from "node:fs";
import path from "node:path";

export type Insight = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  coverImage: string;
  slug: string;
  content: string;
  readingTime: number;
};

type Frontmatter = Omit<Insight, "content" | "readingTime">;

const insightsDirectory = path.join(process.cwd(), "content", "insights");

function readFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Insight Markdown files must start with frontmatter.");
  }

  const frontmatter = match[1].split("\n").reduce<Record<string, string>>(
    (fields, line) => {
      const separatorIndex = line.indexOf(":");

      if (separatorIndex === -1) {
        return fields;
      }

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim();

      fields[key] = value.replace(/^["']|["']$/g, "");

      return fields;
    },
    {},
  );

  return {
    content: match[2].trim(),
    frontmatter,
  };
}

function requiredField(
  fields: Record<string, string>,
  key: keyof Frontmatter,
  fileName: string,
) {
  const value = fields[key];

  if (!value) {
    throw new Error(`Missing "${key}" in ${fileName}.`);
  }

  return value;
}

function estimateReadingTime(content: string) {
  const words = content
    .replace(/[#>*_`[\]()~-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 220));
}

function parseInsight(fileName: string): Insight {
  const filePath = path.join(insightsDirectory, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { content, frontmatter } = readFrontmatter(raw);

  return {
    title: requiredField(frontmatter, "title", fileName),
    excerpt: requiredField(frontmatter, "excerpt", fileName),
    category: requiredField(frontmatter, "category", fileName),
    date: requiredField(frontmatter, "date", fileName),
    author: requiredField(frontmatter, "author", fileName),
    coverImage: requiredField(frontmatter, "coverImage", fileName),
    slug: requiredField(frontmatter, "slug", fileName),
    content,
    readingTime: estimateReadingTime(content),
  };
}

export function getAllInsights() {
  if (!fs.existsSync(insightsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(insightsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(parseInsight)
    .sort(
      (first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime(),
    );
}

export function getInsightBySlug(slug: string) {
  return getAllInsights().find((insight) => insight.slug === slug);
}

export function getAdjacentInsights(slug: string) {
  const insights = getAllInsights();
  const currentIndex = insights.findIndex((insight) => insight.slug === slug);

  return {
    previous: currentIndex > 0 ? insights[currentIndex - 1] : undefined,
    next:
      currentIndex >= 0 && currentIndex < insights.length - 1
        ? insights[currentIndex + 1]
        : undefined,
  };
}

export function getInsightCategories() {
  return Array.from(
    new Set(getAllInsights().map((insight) => insight.category)),
  );
}
