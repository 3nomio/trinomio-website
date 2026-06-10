# Agent Instructions

This repository is the private Trinomio institutional website. Treat `00_System_Architecture/PROJECT_MAP.md` as the primary map for structure, risks, commands, and editing boundaries.

## Required Workflow

Every agent task must follow this sequence:

1. Inspect first: read `00_System_Architecture/PROJECT_MAP.md`, check `git status --short`, and inspect only the files relevant to the requested change.
2. Explain the plan before editing: state what will change, what will not change, and which files are expected to be touched.
3. Make minimal changes: keep edits scoped to the request and preserve the existing folder structure, route structure, design patterns, and naming style.
4. Run checks appropriate to the edit.
5. Report exact files changed, checks run, and any checks that could not be run.

Do not modify application code unless the task explicitly requires it. Do not reorganize folders.

## Repository Map

- Documentation and architecture live in `00_System_Architecture`, `README.md`, `AUDIT_WEB_DESIGN.md`, and `MOBILE_DIAGRAM_READABILITY_REPORT.md`.
- Architecture history, validation notes, implementation plans, assessments, and project mapping live in `00_System_Architecture`.
- Source code lives in `src`.
- Next.js App Router pages, layouts, metadata, route groups, and global CSS live in `src/app`.
- Reusable UI components, sections, diagrams, navigation, article layouts, and visual primitives live in `src/components`.
- Shared data and helper logic live in `src/lib`.
- Content inputs live in `content/insights`.
- Static asset inputs live in `public`, including `public/images`, `public/insights`, and `public/logos`.
- Scripts and package commands are defined in `package.json`.
- Package and build configuration live in `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `postcss.config.mjs`.
- Generated outputs and local results include `.next`, `tsconfig.tsbuildinfo`, `node_modules`, `.vercel`, `05_outputs/`, `06_reports/`, and external result files such as `*.csv`, `*.zip`, `*.xlsx`, `*.xls`, `*.pptx`, and `*.pdf`.

## Safe Editing Rules

- Preserve the existing folder structure. Do not move, rename, or reorganize directories unless explicitly requested.
- Do not edit generated outputs or raw inputs unless explicitly requested.
- Treat `.next`, `tsconfig.tsbuildinfo`, `node_modules`, and `.vercel` as generated or local state.
- Treat `.env.local` as sensitive local input. Do not print, copy, commit, or summarize secrets.
- Treat Markdown files in `content/insights` and assets in `public` as source inputs. Edit them only when the task is specifically about content or assets.
- Keep changes narrow. Avoid unrelated refactors, formatting churn, dependency changes, or design rewrites.
- Do not delete files or overwrite user changes without explicit instruction.
- If `git status --short` shows unrelated changes, leave them untouched and work around them.
- For page, layout, navigation, CSS, or component work, inspect the affected route, imported components, relevant `src/lib` files, and `src/app/globals.css` before editing.
- For article or content work, inspect `src/lib/insights.ts`, the relevant Markdown file, and the article rendering components before editing.
- For glossary or terminology work, inspect `src/lib/glossary.ts` and relevant architecture notes before editing.

## Commands

Run before edits:

```bash
git status --short
```

For code, layout, CSS, navigation, or content-rendering edits, also run when feasible before changing behavior:

```bash
npm run lint
npm run typecheck
```

Run after documentation-only edits:

```bash
git diff --check
```

Run after code, layout, CSS, navigation, Markdown rendering, or configuration edits:

```bash
npm run lint
npm run typecheck
npm run build
```

There is no configured automated test script. Use lint, typecheck, build, and manual visual review when relevant.

## Reporting

Final reports must include:

- Exact files changed.
- Commands run and their results.
- Any checks skipped or not available.
- Any remaining risks, especially mobile layout risk, article routing risk, generated-output risk, or sensitive-file risk.
