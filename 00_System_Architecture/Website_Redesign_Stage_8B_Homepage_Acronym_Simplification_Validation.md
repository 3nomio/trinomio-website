# Website Redesign Stage 8B - Homepage Acronym Simplification Validation

## 1. Homepage files reviewed

- `src/components/Hero.tsx`
- `src/components/HomepagePathway.tsx`
- `src/app/(es)/es/page.tsx`
- `src/app/(en)/en/page.tsx`
- `src/lib/content.ts`
- `src/components/FlowDoctrine.tsx`
- `src/components/EcosystemArchitectureMap.tsx`
- `src/components/ProjectContinuitySection.tsx`

## 2. Homepage files edited

- `src/components/Hero.tsx`
- `src/components/HomepagePathway.tsx`
- `src/app/(es)/es/page.tsx`
- `src/app/(en)/en/page.tsx`
- `src/lib/content.ts`
- `src/components/FlowDoctrine.tsx`
- `src/components/EcosystemArchitectureMap.tsx`
- `src/components/ProjectContinuitySection.tsx`

## 3. Acronyms removed or reduced from homepage copy

- Reduced first-level exposure of `EE`, `SPV`, `FICR`, `DSCR`, and `CAFDS`.
- Replaced acronym-heavy hero and metric copy with outcome-oriented language.
- Simplified the homepage pathway from a seven-step technical chain into three novice-readable cards.
- Added homepage-only simplified modes for shared diagram components so interior pages can retain their technical vocabulary.

## 4. Plain-language replacements used

- `EE / SPV` became `estructura financiable`, `vehículo de proyecto`, `estructura de ejecución`, `estructura gobernada`, and `activo estructurado`.
- `FICR` became `vehículos temáticos de inversión`, `vehículos de inversión`, `mercado de capitales`, and `capital institucional`.
- `DSCR / CAFDS` became `capacidad de pago`, `disciplina de crédito`, `flujo de caja bancable`, and `criterios de financiamiento`.
- `Project Finance, FICR, SPV, DSCR` moved behind first-level concepts such as `bancabilidad`, `financiamiento`, `estructura contractual`, `disciplina de capital`, and `escalabilidad`.

## 5. Energía → Empresa ← Capital consistency

Confirmed. The homepage still presents `Energía → Empresa ← Capital` in the hero and pathway. The firm / empresa remains the governed execution layer where energy potential and capital discipline are translated into financeable architecture.

## 6. Technical concepts preserved

Confirmed. `Project Finance`, `FICR`, `SPV`, `DSCR`, and `CAFDS` were not conceptually deleted from the website. The homepage now uses plain-language first-level copy, while the technical language remains available in deeper components, thesis pages, glossary paths, investor-oriented content, and supporting technical sections.

## 7. Novice-reader clarity

Confirmed. The homepage now leads with outcomes:

- strategic energy potential
- governed architecture
- financeable cash flow
- bankable and scalable energy assets
- capital attraction and investment scalability

The reader no longer needs to understand `EE`, `SPV`, `FICR`, `DSCR`, or `CAFDS` to understand what Trinomio does.

## 8. Build / lint results

- `npm run lint`: passed
- `npm run build`: passed

## 9. Recommended next step

Manual browser review before adding visuals.
