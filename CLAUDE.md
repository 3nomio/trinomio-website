# Claude Instructions

This repository is the private **Trinomio institutional website**. Use
`00_System_Architecture/PROJECT_MAP.md` as the authoritative project map, and this
file as the working guide to the codebase, conventions, and workflows.

A companion `AGENTS.md` carries the same operating rules for non-Claude agents; keep
the two consistent when either changes.

## Project Overview

Trinomio is a bilingual (Spanish + English) marketing/thesis site built with the
**Next.js App Router**. It presents Trinomio's `Energía → Empresa ← Capital`
positioning through static pages, dense custom visual sections and diagrams,
Markdown-backed insight articles, and a glossary. There is no database, CMS, or
authenticated app surface — all content is code or Markdown, rendered statically.

### Domain vocabulary (for accurate copy and naming)

Two canonical documents define the strategic model. The **Manifesto** explains *why*
differentiated value emerges; the **Operating System** explains *how* Trinomio
captures it. The chain runs: structural forces → systemic risks → risk pricing →
`ΔTech, ΔReg, ΔCapital` adjustments → capital reallocation → localized
time-and-place value `P(n,t)` → **Sense → Size → Transform** → enterprise (EE) →
projects (EP/SPVs) → **FICR** portfolio → learning/redeployment → compounded value.
Recurring terms you will see in content, components, and data:

- **Energía → Empresa ← Capital** — the core doctrine; the firm ("Empresa") is the
  adaptive unit between energy functions and capital.
- **EE (Empresa Estructurada)** — the structured firm; the flexible value-creation
  unit that holds learning, contracts, and PVGO. **SPV** — the rigid, ring-fenced
  project-finance container subordinate to the EE (capital flows
  `Capital → EE/HoldCo → SPV`).
- **Sense → Size → Transform** — the repeatable Operating System methodology: sense
  where a `P(n,t)` differential opens, size whether it is material/financeable
  (seven-instrument dashboard, capital-allocation lens), and transform it into an
  executable enterprise architecture.
- **P(n,t)** — localized marginal economic value of an energy function at node `n`,
  time `t`. **EFI** = `MEV / LCOE` (operating-surplus signal; `EFI > 1` precedes the
  bankability and `ROIC > WACC` tests). **D = 0** — the convergence objective (no
  valuable function unmonetized, no material risk unallocated).
- **EP** (Energy Project), **FICR** (portfolio layer), **3Labs**, **EFI**,
  **SANSES (EE#1)**, **HoldCo**, **PVGO**, **MOC** (compounded at Y10) —
  Trinomio-specific frameworks/entities. Preserve their exact spelling and casing.
  When in doubt about a term, check `src/lib/glossary.ts` (the source of truth).

## Tech Stack

- **Next.js `^15.3` (App Router)**, **React `^19`**, **TypeScript `^5.8`** (strict).
- **Tailwind CSS `^4.1`** via `@tailwindcss/postcss` (CSS-first config — no
  `tailwind.config.*`; theme lives in `src/app/globals.css`).
- ESLint flat config (`eslint-config-next`, core-web-vitals + TypeScript).
- No test framework, no runtime dependencies beyond `next`/`react`/`react-dom`.
- Path alias: **`@/*` → `./src/*`** (see `tsconfig.json`). Prefer it over deep
  relative imports.

## Repository Layout

```
src/app/          Route groups, layouts, pages, metadata, globals.css
src/components/    Reusable UI: sections, diagrams, navigation, article layouts, primitives
src/lib/          Shared data + logic: content, navigation, glossary, insights loader, utils
content/insights/ Markdown articles with frontmatter (source of truth for insights)
public/           Static assets: images/, insights/ (SVG covers), logos/
00_System_Architecture/  Project map + validation/implementation history (Markdown)
```

Root-level Markdown (`AUDIT_WEB_DESIGN.md`, `MOBILE_DIAGRAM_READABILITY_REPORT.md`,
`*_SUMMARY.md`, `INTEGRATION_GUIDE*.md`, `MARKETING_*.md`, `QUICK_REFERENCE.md`) are
notes/reports, not application code. `README.md` is the short public description.

## App Router Architecture

Routing uses **route groups** to separate languages and metadata while sharing
components:

- `src/app/(es)/es/**` — Spanish site (canonical, most complete). Routes:
  `transicion`, `energia-empresa-capital`, `3labs`, `glosario`, `insights`,
  `insights/[slug]`, `sobre-trinomio`, `sintesis`, `contacto`.
- `src/app/(en)/en/**` — English site (subset): `page`, `contact`, `insights`,
  `insights/[slug]`, `synthesis`, `costa-rica-opportunity`.
- `src/app/(home)/` — root `/` landing page and its layout.
- `src/app/(aliases)/` — unprefixed aliases (e.g. `/insights`) that **re-export**
  Spanish pages/layouts, e.g. `export { default, metadata } from "../(es)/es/insights/page"`.
  Don't duplicate logic here — keep aliases as thin re-exports.

Each route group has its own `layout.tsx` defining `<html>`, `<body>`, and
`metadata` (title/description). The `(aliases)` layout re-exports the `(es)` layout.
`globals.css` is imported once per layout via `"../globals.css"`.

Language is **path-based**, not a `[locale]` dynamic segment. Spanish and English
pages are largely independent; many shared article/nav components are
Spanish-oriented. Review both when a change is meant to apply to both languages.

## `src/lib` Reference

- `content.ts` — homepage/section constants (`doctrine`, `pillars`, `metrics`, …),
  typed with `as const`. Spanish copy lives here.
- `navigation.ts` — `spanishNav`, contextual link clusters (`primaryLoopLinks`,
  `frameworkLinks`, `audienceLoops`) and the `getAudienceLoop` helper. Update this
  when adding/renaming routes or nav labels.
- `glossary.ts` — `glossaryCategories`, `GlossaryTerm` model, and term data. The
  source of truth for terminology; keep terms/slugs/aliases consistent with copy.
- `insights.ts` — server-side Markdown loader (see below).
- `utils.ts` — `cn(...)` classname joiner (the only shared utility).

## Insights Content Pipeline

`src/lib/insights.ts` reads `content/insights/*.md` at build/request time (Node
`fs`, server-only). Key rules:

- Every file **must** start with `---` frontmatter. A **custom, minimal parser**
  handles it — it is line-based `key: value`, strips surrounding quotes, and does
  **not** support full YAML (no nested objects, lists, or `tags`).
- Required frontmatter keys (missing any throws at parse time): `title`, `excerpt`,
  `category`, `date`, `author`, `coverImage`, `slug`. Optional `locale` (`es`
  default, `en` if set to `en`).
- Reading time is auto-estimated (~220 wpm); do not add it to frontmatter.
- Helpers: `getAllInsights` (sorted newest-first by `date`), `getInsightBySlug`,
  `getAdjacentInsights`, `getFinalInsight`, `getSpanishInsights`,
  `getEnglishInsights`, `getInsightCategories`. Locale filters key off frontmatter
  `locale`, so set it correctly on English articles.

To add an article: create `content/insights/<slug>.md` with valid frontmatter and a
matching `coverImage` (SVG covers live in `public/insights/`). No route wiring is
needed — `[slug]` pages resolve via the loader.

## Styling & Visual Conventions

- Tailwind v4 with a **CSS-first theme**: brand tokens are CSS custom properties in
  `:root` (e.g. `--navy`, `--electric-blue`, `--cyan`, `--green`) and exposed as
  Tailwind colors through `@theme inline` (e.g. `--color-trinomio-navy`). Use the
  `trinomio-*` color utilities and existing CSS variables rather than hardcoded hex.
- `globals.css` also holds base styles, animations, article typography, and shared
  visual classes. The design is dark-navy, dense, and diagram-heavy.
- The site is **mobile-sensitive**: diagrams and long sections overflow easily.
  `html` uses `overflow-x: clip`. After any layout/CSS/diagram change, do visual QA
  at mobile and desktop widths (see `MOBILE_DIAGRAM_READABILITY_REPORT.md`).

## Component Conventions

- **Server Components by default.** Only add `"use client"` when interactivity
  requires it — currently: `Header`, `ScrollNavigation`, `EngagementPlaybook`,
  `EngagementPlaybookEN`, `PersonaRouterEN`, `PersonaRouterV2EN`,
  `EngagementPlaybookV2EN`. Don't make a component client-side without cause.
- Naming: `PascalCase.tsx`, one component per file. English-specific variants use an
  `EN` suffix (e.g. `PersonaRouterEN`, `CaseStudySectionEN`); `V2` marks iterated
  versions kept alongside the original.
- Reusable primitives: `ButtonLink`, `SectionHeading`, `PillarCard`,
  `CapabilityCard`, `Logo`, `OrbitalDivider`. Diagrams/sections compose these.
- Import shared code via `@/` (e.g. `import { cn } from "@/lib/utils"`).

## Operating Protocol

For every task:

1. **Inspect first:** read the project map, run `git status --short`, and inspect the
   relevant files before proposing edits.
2. **Explain the plan before editing:** identify expected files, intended scope, and
   checks to run.
3. **Make minimal changes only:** keep the current structure, conventions, and
   ownership boundaries.
4. **Run the relevant checks** after editing.
5. **Report** exact files changed, command results, and any skipped checks.

Do not modify application code unless explicitly asked. Do not reorganize folders.

## Safe-Editing Rules

- Respect the existing folder structure. Do not move, rename, or reorganize folders
  unless directly requested.
- Do not edit generated outputs or raw inputs unless explicitly requested.
- Treat `.next`, `tsconfig.tsbuildinfo`, `node_modules`, and `.vercel` as generated
  or local state.
- Treat `.env.local` as sensitive. Do not print, expose, copy, summarize, or commit
  it.
- Treat `content/insights` Markdown and `public` assets as source inputs. Edit only
  when the task specifically requests content or asset changes.
- Keep diffs scoped to the task. Avoid unrelated refactors, dependency updates, broad
  formatting, or design changes.
- Preserve existing route groups, the bilingual structure, alias re-exports,
  component patterns, and Tailwind/global CSS conventions.
- Never overwrite or revert unrelated user changes. If unrelated files are dirty,
  leave them alone and mention them only if they affect the requested work.

## Inspection Checklist

Before broad changes, inspect:

- `00_System_Architecture/PROJECT_MAP.md`
- `README.md`
- `package.json`
- Relevant configuration files (`next.config.ts`, `tsconfig.json`,
  `eslint.config.mjs`, `postcss.config.mjs`)
- Relevant files under `src/app`, `src/components`, or `src/lib`

Before page or layout changes, inspect the target `src/app/**/page.tsx` or
`src/app/**/layout.tsx`, imported components, `src/app/globals.css`, and
`src/lib/navigation.ts` when navigation is involved. Check whether the change should
also apply to the other language and to any `(aliases)` re-export.

Before content or article changes, inspect `src/lib/insights.ts`, the relevant
Markdown file in `content/insights`, and the article rendering components
(`InsightArticlePage`, `EnglishInsightArticlePage`).

Before glossary or terminology changes, inspect `src/lib/glossary.ts` and relevant
notes in `00_System_Architecture`.

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server
npm run build      # production build (also the strongest correctness check here)
npm run start      # serve the production build
npm run lint       # eslint .
npm run typecheck  # tsc --noEmit
```

Before edits:

```bash
git status --short
```

Before code, layout, CSS, navigation, or rendering edits, run when feasible:

```bash
npm run lint
npm run typecheck
```

After documentation-only edits:

```bash
git diff --check
```

After code, layout, CSS, navigation, Markdown rendering, or configuration edits:

```bash
npm run lint
npm run typecheck
npm run build
```

No automated test script is configured. Validation relies on lint, typecheck, build,
and visual QA (mobile + desktop).

## Completion Report

End every task with:

- Exact files changed.
- Checks run and whether they passed.
- Checks not run, with the reason.
- Any remaining risks or assumptions (call out mobile-layout, article-routing,
  bilingual-parity, generated-output, and sensitive-file risks explicitly).
