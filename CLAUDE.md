# Claude Instructions

This repository is the private Trinomio institutional website. Use `00_System_Architecture/PROJECT_MAP.md` as the authoritative project map before making changes.

## Operating Protocol

For every task:

1. Inspect first: read the project map, check `git status --short`, and inspect the relevant files before proposing edits.
2. Explain the plan before editing: identify expected files, intended scope, and checks to run.
3. Make minimal changes only: keep the current structure, conventions, and ownership boundaries.
4. Run the relevant checks after editing.
5. Report exact files changed, command results, and any skipped checks.

Do not modify application code unless explicitly asked. Do not reorganize folders.

## Folder Responsibilities

- `00_System_Architecture`: architecture notes, validation records, implementation plans, project assessments, and the project map.
- `README.md`: basic project description, setup commands, and high-level structure.
- `AUDIT_WEB_DESIGN.md`: website audit notes and addressed design findings.
- `MOBILE_DIAGRAM_READABILITY_REPORT.md`: mobile diagram readability findings and fix order.
- `src/app`: Next.js App Router pages, layouts, route groups, metadata, and `globals.css`.
- `src/components`: reusable UI components, visual sections, diagrams, navigation, article layouts, and visual primitives.
- `src/lib`: shared content models, navigation data, glossary data, utilities, and Markdown insight loading.
- `content/insights`: Markdown article inputs with frontmatter.
- `public`: static website asset inputs.
- `public/images`: general images, diagrams, heroes, backgrounds, and insight images.
- `public/insights`: SVG insight cover assets.
- `public/logos`: Trinomio logo assets.
- `package.json`: npm scripts, dependencies, and package metadata.
- Configuration files: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, and `next-env.d.ts`.
- Generated outputs and local results: `.next`, `tsconfig.tsbuildinfo`, `node_modules`, `.vercel`, `05_outputs/`, `06_reports/`, and external result files such as `*.csv`, `*.zip`, `*.xlsx`, `*.xls`, `*.pptx`, and `*.pdf`.

## Safe-Editing Rules

- Respect the existing folder structure. Do not move, rename, or reorganize folders unless directly requested.
- Do not edit generated outputs or raw inputs unless explicitly requested.
- Treat `.next`, `tsconfig.tsbuildinfo`, `node_modules`, and `.vercel` as generated or local state.
- Treat `.env.local` as sensitive. Do not print, expose, copy, summarize, or commit it.
- Treat `content/insights` Markdown and `public` assets as source inputs. Edit only when the task specifically requests content or asset changes.
- Keep diffs scoped to the task. Avoid unrelated refactors, dependency updates, broad formatting, or design changes.
- Preserve existing route groups, bilingual structure, component patterns, and Tailwind/global CSS conventions.
- Never overwrite or revert unrelated user changes.
- If unrelated files are dirty, leave them alone and mention them only if they affect the requested work.

## Inspection Checklist

Before broad changes, inspect:

- `00_System_Architecture/PROJECT_MAP.md`
- `README.md`
- `package.json`
- Relevant configuration files
- Relevant files under `src/app`, `src/components`, or `src/lib`

Before page or layout changes, inspect the target `src/app/**/page.tsx` or `src/app/**/layout.tsx`, imported components, and `src/lib/navigation.ts` when navigation is involved.

Before content or article changes, inspect `src/lib/insights.ts`, the relevant Markdown file in `content/insights`, and the article rendering components.

Before glossary or terminology changes, inspect `src/lib/glossary.ts` and relevant notes in `00_System_Architecture`.

## Commands

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

No automated test script is configured. Use lint, typecheck, build, and visual QA as appropriate.

## Completion Report

End every task with:

- Exact files changed.
- Checks run and whether they passed.
- Checks not run, with the reason.
- Any remaining risks or assumptions.
