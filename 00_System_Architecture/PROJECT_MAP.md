# Project Map

## Project Summary

This repository is the Trinomio institutional website. It is a private Next.js App Router project built with React, TypeScript, and Tailwind CSS. The site presents bilingual Spanish and English content around Trinomio's Energy / Energia -> Firm / Empresa <- Capital positioning, with static pages, reusable visual sections, Markdown-backed insights, and public visual assets.

## Source Folders

- `src/app`: Next.js App Router pages, layouts, metadata, route groups, and global CSS.
- `src/components`: Reusable UI components, page sections, diagrams, navigation, article layouts, and visual primitives.
- `src/lib`: Shared data and helper logic, including content constants, navigation models, glossary data, utility functions, and Markdown insight loading.
- `src/app/globals.css`: Global Tailwind import, theme variables, base styles, animations, article styles, and shared visual classes.

## Content Inputs

- `content/insights`: Markdown insight articles with frontmatter consumed by `src/lib/insights.ts`.
- `public`: Static website assets served by Next.js.
- `public/images`: General image assets, diagrams, heroes, clients, backgrounds, and insight images.
- `public/insights`: SVG insight cover assets.
- `public/logos`: Trinomio logo assets.
- `.env.local`: Local environment input. Treat as sensitive and do not print or commit.

## Documentation And Architecture

- `README.md`: Basic project description, setup commands, and high-level structure.
- `AUDIT_WEB_DESIGN.md`: Website audit notes and previously addressed design findings.
- `MOBILE_DIAGRAM_READABILITY_REPORT.md`: Mobile diagram readability findings and recommended fix order.
- `00_System_Architecture`: Architecture, validation, implementation history, planning notes, and project assessment documents.

## Outputs And Results

- `.next`: Generated Next.js build/dev output. Do not treat as source.
- `tsconfig.tsbuildinfo`: Generated TypeScript incremental build metadata.
- `node_modules`: Installed dependencies.
- `.vercel`: Local Vercel project/deployment metadata.
- `.gitignore` also anticipates generated or external result folders/files such as `05_outputs/`, `06_reports/`, `*.csv`, `*.zip`, `*.xlsx`, `*.xls`, `*.pptx`, and `*.pdf`.

## Package And Configuration Files

- `package.json`: Package metadata, dependencies, and npm scripts.
- `package-lock.json`: Locked npm dependency graph.
- `next.config.ts`: Next.js configuration; currently enables React strict mode.
- `tsconfig.json`: TypeScript compiler options and path alias configuration.
- `eslint.config.mjs`: ESLint flat config extending Next core web vitals and TypeScript rules.
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS.
- `next-env.d.ts`: Generated Next.js TypeScript declarations.
- `.gitignore`: Ignore rules for generated, local, environment, and output artifacts.

## Scripts And Build Commands

Defined npm scripts:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

Recommended commands before code edits:

```bash
git status --short
npm run lint
npm run typecheck
```

Recommended commands after code edits:

```bash
npm run lint
npm run typecheck
npm run build
```

There is no configured automated test script.

## Agent Reading Checklist

Before making broad changes, read:

- `README.md`
- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `eslint.config.mjs`
- `postcss.config.mjs`
- `src/app/globals.css`
- Relevant files under `00_System_Architecture`

Before page or layout changes, also read:

- The target `src/app/**/page.tsx` or `src/app/**/layout.tsx`
- Components imported by that page or layout
- `src/lib/navigation.ts` when routes or navigation labels are involved

Before content or article changes, also read:

- `src/lib/insights.ts`
- The relevant Markdown file in `content/insights`
- Article rendering components in `src/components`

Before glossary or terminology changes, also read:

- `src/lib/glossary.ts`
- Relevant strategic notes in `00_System_Architecture`

## Risks And Ambiguities

- The Markdown parser in `src/lib/insights.ts` is custom and limited; it does not fully parse YAML and ignores richer fields such as `tags`.
- Spanish and English insights share the same content directory. Route generation and article navigation should be reviewed carefully before changing language-specific behavior.
- Some shared article components are Spanish-oriented, including navigation and labels.
- The design system is highly custom and visually dense. Small CSS changes can affect mobile readability, overflow, and diagram clarity.
- `.env.local` and `.vercel` are local environment/deployment state and should be handled carefully.
- `.next`, `node_modules`, `.DS_Store`, and `tsconfig.tsbuildinfo` are local/generated artifacts.
- A zero-byte root file named `next` exists and its purpose is unclear.
- Architecture notes record both planning and validation history; confirm whether a note is current guidance before treating it as a requirement.
- No test suite is configured, so validation depends on lint, typecheck, build, and manual visual review.

## Recommended Next Steps

- Add a lightweight test or smoke-check strategy if future changes expand behavior beyond static pages.
- Consider documenting Markdown frontmatter requirements in `README.md` or a content guide.
- Clarify whether the root `next` file is intentional.
- Review English insight article routing and shared article UI before adding more English content.
- Keep generated artifacts and environment files out of commits.
- Use visual QA for mobile and desktop after layout, CSS, navigation, or diagram changes.

## Files Created Or Modified

- `00_System_Architecture/PROJECT_MAP.md`
