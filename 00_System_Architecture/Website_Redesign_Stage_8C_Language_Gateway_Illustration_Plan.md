# Website Redesign Stage 8C: Language Gateway Illustration Plan

## 1. Page Identified

The initial language-selection gateway is rendered by:

- `src/app/(home)/page.tsx`
- Supporting root metadata/layout: `src/app/(home)/layout.tsx`

This page is distinct from:

- Spanish homepage: `src/app/(es)/es/page.tsx`
- English homepage: `src/app/(en)/en/page.tsx`

The current gateway already functions as the root entry page and contains:

- Trinomio logo
- One architecture line: `Energy → Firm ← Capital`
- Language heading: `Seleccionar idioma / Choose language`
- Two language buttons
- Abstract dark-background visual field using `orbital-field`, `spiral-divider`, and `flow-line`

## 2. Current Layout Review

Current structure:

```tsx
<main className="relative grid min-h-svh place-items-center overflow-hidden bg-trinomio-navy-deep ...">
  background gradients
  orbital field
  spiral divider
  flow line

  <section className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
    <Logo />
    <p>Energy → Firm ← Capital</p>
    <h1>Seleccionar idioma / Choose language</h1>
    <ButtonLink href="/es">Entrar en español -></ButtonLink>
    <ButtonLink href="/en">Enter in English -></ButtonLink>
  </section>
</main>
```

Strengths:

- Clean and premium first impression.
- Dark institutional atmosphere is consistent with Trinomio brand.
- Logo is visible and centered.
- Interaction path is simple.

Gaps:

- The architecture is currently textual only.
- It reads primarily as a language picker, not as a strategic gateway.
- The visual system is atmospheric but does not explain `Energy → Firm ← Capital`.
- There is no bilingual promise line.
- The output state, `Bankable energy assets / Activos energéticos bancables`, is not visible.

## 3. Recommended Integration Strategy

Recommended approach: **central component-based SVG/CSS system diagram**, supported by the existing ambient background.

Do not replace the current dark background entirely. Instead, convert the first screen into a compact institutional gateway:

1. Logo at top.
2. Strategic architecture diagram in the center.
3. Short bilingual promise under the diagram.
4. Language buttons below the promise.

The illustration should be the primary semantic visual, while the existing `orbital-field`, `spiral-divider`, `adaptive-grid`, and gradient language should remain as subtle atmosphere.

Recommended hierarchy:

```text
Trinomio logo

[Strategic system diagram]
Energy / Energía          Firm / Empresa          Capital / Capital
Strategic potential  →    Governance              Capital discipline
Energy functions          Structuring             Investment vehicles
                           Execution
                         ↓
           Bankable energy assets
           Activos energéticos bancables

Strategic energy potential into bankable assets.
Potencial energético estratégico en activos bancables.

[Español] [English]
```

## 4. Illustration Format Recommendation

Use a **component-based SVG/CSS diagram**, not a generated AI illustration.

Rationale:

- The visual is conceptual and architectural, not photographic.
- Text legibility, bilingual precision, and responsive behavior matter more than image richness.
- SVG/CSS can use the existing Trinomio tokens: `--navy`, `--navy-deep`, `--electric-blue`, `--cyan`, `--green`, `--mist`, `--body-text`.
- It avoids generic solar panels, stock infrastructure imagery, and decorative sustainability visuals.
- It will be sharper on retina displays and easier to tune for mobile.
- It keeps the gateway lightweight and avoids image optimization, alt-text ambiguity, and asset generation iterations.

AI-generated WebP/PNG is not recommended for this page because it risks looking like generic energy-finance imagery and would be less maintainable. If a bitmap is used later, it should be only a subtle texture layer, not the main architecture.

## 5. Recommended Visual Concept

Build a `LanguageGatewayArchitecture` component or an inline component within the gateway page during implementation.

Preferred visual form:

- Three institutional nodes arranged horizontally on desktop.
- Center node is dominant: `Firm / Empresa`.
- Left and right nodes feed inward:
  - `Energy / Energía → Firm / Empresa`
  - `Capital / Capital → Firm / Empresa`
- A downward output rail leaves the center node:
  - `Bankable energy assets`
  - `Activos energéticos bancables`
- Use thin rails, small luminous nodes, restrained line weights, and subtle animation.

Suggested node copy:

Left node:

```text
Energy / Energía
Strategic energy potential
Energy functions
```

Center node:

```text
Firm / Empresa
Governance
Structuring
Execution
```

Right node:

```text
Capital / Capital
Capital discipline
Investment vehicles
```

Output:

```text
Bankable energy assets
Activos energéticos bancables
```

Keep the main architecture line visible as:

```text
Energy → Firm ← Capital
Energía → Empresa ← Capital
```

This can sit above the nodes as a compact bilingual thesis label, or be built directly into the diagram header.

## 6. Placement and Dimensions

Desktop placement:

- Keep `main` as `min-h-svh`.
- Replace `place-items-center` only if needed with a centered grid that allows top/bottom breathing room.
- Set the content wrapper to `max-w-5xl` or `max-w-6xl`.
- Logo remains first, centered.
- Diagram sits below logo with `mt-8` to `mt-10`.
- Promise line sits below diagram with `mt-7`.
- Buttons sit below promise with `mt-8`.

Recommended diagram dimensions:

- Desktop width: `min(100%, 58rem)` to `64rem`.
- Desktop height: `22rem` to `26rem`.
- Tablet height: `24rem` to `30rem`.
- Mobile height: natural content height, not fixed, using stacked cards.

Suggested desktop layout:

```text
max-width: 64rem
grid-template-columns: 1fr 1.08fr 1fr
center node slightly larger
min-height: 22rem
```

Suggested card sizing:

- Side nodes: `min-height: 9rem`
- Center node: `min-height: 11rem`
- Output node: `max-width: 30rem`, centered below
- Border radius: `0.5rem` or less to match institutional UI guidance

## 7. Mobile Behavior

Mobile should not try to preserve the full horizontal architecture.

Recommended mobile structure:

```text
Energy / Energía
↓
Firm / Empresa
↑
Capital / Capital
↓
Bankable energy assets / Activos energéticos bancables
```

However, because the core thesis is `Energy → Firm ← Capital`, the mobile diagram should visually imply convergence into the center:

- Stack Energy, Firm, Capital, Output vertically.
- Use small labels or rails that say:
  - `Energy → Firm`
  - `Capital → Firm`
- Or place Energy and Capital as two compact half-width cards above the center Firm card when viewport permits.

Recommended mobile breakpoints:

- `<640px`: vertical stacked diagram, no tiny labels, no dense linework.
- `640px-1023px`: two-column top row for Energy and Capital, center Firm below, output below.
- `>=1024px`: full horizontal convergence diagram.

Mobile dimensions:

- Content wrapper: `max-w-xl`.
- Diagram: `width: 100%`.
- Cards: `min-height: auto`, padding `1rem`.
- Hide decorative micro-labels if text becomes cramped.
- Keep only essential labels:
  - `Energy / Energía`
  - `Firm / Empresa`
  - `Capital / Capital`
  - `Bankable energy assets / Activos energéticos bancables`

## 8. Animation Recommendation

Use subtle CSS animation only.

Recommended animation:

- A slow animated gradient along the inbound rails.
- A soft pulse on the center node border or center node marker.
- Respect reduced motion with `@media (prefers-reduced-motion: reduce)`.

Avoid:

- Rotating complex diagrams.
- Particle-heavy visuals.
- Animated acronyms.
- Any motion that competes with the language buttons.

The existing `flow-pulse`, `animated-flow-line`, and `orbital-drift` patterns can be reused or adapted.

## 9. Visual Style

Use the existing Trinomio visual grammar:

- Background: `var(--navy-deep)` and `var(--navy)`.
- Primary linework: `var(--cyan)` and `var(--electric-blue)`.
- Selective output accent: `var(--green)`.
- Text: `var(--white)`, `var(--body-text)`, `var(--mist)`.
- Panels: `rgba(16, 46, 76, 0.82)` and related slate card tokens.

Recommended diagram surface:

- Transparent or near-transparent stage, not a heavy card.
- Use thin borders and internal glow.
- Keep the center node as the strongest visual anchor.
- Use the green accent only for the output state, not every node.

Avoid:

- Generic solar panels.
- Wind turbines.
- Handshake/investor clip art.
- Heavy formulas.
- Acronym clusters such as SPV, FICR, DSCR, CAFDS on the gateway.
- Dense technical detail.

## 10. Accessibility and Semantics

The diagram should be readable as normal HTML content where possible, not only SVG text.

Recommended implementation:

- Use HTML cards for the labels and supporting text.
- Use CSS pseudo-elements or a small decorative SVG layer for rails and nodes.
- Mark decorative linework as `aria-hidden="true"`.
- Preserve logical reading order:
  1. Logo
  2. Architecture thesis
  3. Diagram content
  4. Bilingual promise
  5. Language buttons
- Keep language buttons as the clearest interactive elements.

If using an SVG for rails, avoid putting essential text inside SVG. Text in HTML will be easier to scale, wrap, translate, and audit.

## 11. Proposed Content for Gateway

Primary architecture:

```text
Energy → Firm ← Capital
Energía → Empresa ← Capital
```

Promise:

```text
Strategic energy potential into bankable assets.
Potencial energético estratégico en activos bancables.
```

Buttons:

```text
Español
English
```

The current button labels `Entrar en español ->` and `Enter in English ->` are functional, but the gateway will feel more premium if the buttons are reduced to `Español` and `English`, with the diagram carrying the strategic context.

## 12. Implementation Recommendation for Later Stage

When edits are approved in a later stage:

1. Add a small component, likely:
   - `src/components/LanguageGatewayArchitecture.tsx`
2. Update:
   - `src/app/(home)/page.tsx`
3. Add any narrowly scoped CSS to:
   - `src/app/globals.css`

Recommended component responsibilities:

- Render semantic diagram labels.
- Render decorative rails with CSS/SVG.
- Handle responsive layout through Tailwind classes and a few custom classes if needed.
- Include reduced-motion support if adding animation.

No new image asset is recommended for Stage 8C implementation.

## 13. Final Recommendation

Proceed with a **component-based SVG/CSS strategic system diagram** placed centrally between the logo and the language buttons.

The gateway should communicate:

```text
Energy / Energía and Capital / Capital converge into Firm / Empresa.
Firm / Empresa converts potential and discipline into governed execution.
The output is bankable energy assets / activos energéticos bancables.
```

This best supports the objective: the first screen becomes a strategic gateway into Trinomio's architecture, not just a language selector.
