# Website Global Long-Scroll Navigation Validation

## 1. Reusable Navigation Pattern

Added a lightweight reusable `ScrollNavigation` component for long internal pages. The control is fixed near the lower-right viewport edge, remains hidden until the user scrolls beyond the configured threshold, and then exposes compact pill actions:

- `← Menú` links back to the relevant language menu.
- `↑ Índice` links to a page index anchor when one exists, or scrolls smoothly to the top when no index anchor is provided.

The component uses existing Trinomio colors, typography, spacing, focus outlines, and backdrop treatment. It introduces no new dependencies.

## 2. Files Changed

- `src/components/ScrollNavigation.tsx`
- `src/app/(es)/es/glosario/page.tsx`
- `src/app/(es)/es/3labs/page.tsx`
- `src/app/(es)/es/energia-empresa-capital/page.tsx`
- `src/app/(es)/es/transicion/page.tsx`
- `src/app/(es)/es/sobre-trinomio/page.tsx`
- `00_System_Architecture/Website_Global_Long_Scroll_Navigation_Validation.md`

## 3. Pages Where Control Was Applied

- `/es/glosario`
- `/es/3labs`
- `/es/energia-empresa-capital`
- `/es/transicion`
- `/es/sobre-trinomio`

## 4. Pages Intentionally Excluded

- `/` language gateway: short gateway experience.
- `/en`: short English gateway/home experience; no long English internal equivalents currently exist in the app.
- `/es`: homepage with primary navigation and CTAs.
- `/es/contacto`: excluded to avoid interfering with conversion/contact CTAs.
- `/es/insights`: listing page, not a deep long-scroll reading surface.
- `/es/insights/[slug]` and `/insights/[slug]`: article pages excluded per scope unless clearly useful and non-intrusive.
- `/insights`: alias listing page excluded.

## 5. Desktop Behavior

On desktop, the control appears as compact bottom-right pills after the scroll threshold is crossed. It uses fixed positioning, subtle borders, Trinomio glass/navy styling, and focus-visible outlines for keyboard access.

## 6. Mobile Behavior

On mobile, the same compact pill group remains fixed at the lower-right with wrapping constrained to the viewport width. It stays hidden near the top of the page and appears only after meaningful scrolling so it does not compete with first-viewport content or primary CTAs.

## 7. Content Confirmation

No page content, thesis wording, glossary definitions, insight content, homepage copy, or Obsidian Vault files were rewritten for this navigation refinement. The implementation only adds the reusable navigation component and mounts it on selected long-scroll pages.

## 8. `npm run lint`

Result: Passed.

Command completed successfully with no lint errors.

## 9. `npm run build`

Result: Passed.

Next.js compiled successfully, checked types, generated 26 static pages, and produced the production route summary including `/es/glosario`, `/es/3labs`, `/es/energia-empresa-capital`, `/es/transicion`, and `/es/sobre-trinomio`.
