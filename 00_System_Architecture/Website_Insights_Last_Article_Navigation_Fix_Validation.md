# Website Insights Last Article Navigation Fix Validation

## 1. Issue observed

On Insights article pages, the bottom navigation card labeled "Último artículo de la serie" rendered as inactive plain text. When the card represented the final article in the series, it did not provide a clickable route to that article from earlier articles.

## 2. Root cause

The article navigation component only rendered "Último artículo de la serie" inside the fallback state used when there was no `next` article. That fallback was a non-clickable `<div>`, so the label appeared only on the final article and never functioned as a navigation link to the final article from other articles.

## 3. Behavior implemented

The Insights article navigation now resolves the final article from the existing ordered Insights collection.

- If the current article is not the final article, the card labeled "Último artículo de la serie" renders as a clickable navigation card linking to the final article slug.
- If the current article is already the final article, the card remains non-clickable and confirms the state with supporting text: "Está leyendo el cierre de esta serie".
- Existing card styling, hover treatment, and focus-visible keyboard accessibility classes are preserved for the clickable card.

## 4. Files changed

- `src/components/InsightArticlePage.tsx`
- `src/lib/insights.ts`
- `00_System_Architecture/Website_Insights_Last_Article_Navigation_Fix_Validation.md`

## 5. Article content confirmation

No files under `content/insights/` were modified. Article content was not rewritten.

## 6. `npm run lint` result

Passed.

## 7. `npm run build` result

Passed. The production build generated the Insights article routes successfully, including `/es/insights/[slug]` and `/insights/[slug]`.
