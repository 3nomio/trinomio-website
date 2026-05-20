# Mobile Diagram Readability Report

Diagnostic pass only. No diagram redesigns were implemented.

## Summary

The highest mobile-readability risks are the absolute-positioned 3Labs orbital diagrams, the multi-layer Ecosystem Architecture Map, and the dense public diagram assets that are not currently inserted into the site. Article images are already constrained with responsive image styles, so no obvious low-risk overflow bug was found.

## Findings

| Diagram / component | File path | Where it appears | Current mobile risk | Recommended treatment | Priority |
|---|---|---|---|---|---|
| Hero visual system | `src/components/Hero.tsx` | Homepage hero at `/es` | dense but acceptable | minor responsive spacing | Nice-to-have |
| Hero contextual route cards | `src/components/Hero.tsx`, `src/components/ContextualNavigation.tsx` | Homepage hero at `/es` | dense but acceptable | no change | Nice-to-have |
| Audience route cluster | `src/components/AudienceRouteCluster.tsx` | Homepage, immediately after hero | no issue | no change | Nice-to-have |
| Energy -> Firm -> Capital doctrine cards | `src/components/FlowDoctrine.tsx` | Homepage `/es`, About `/es/sobre-trinomio` | dense but acceptable | minor responsive spacing | Nice-to-have |
| Ecosystem Architecture Map | `src/components/EcosystemArchitectureMap.tsx` | Homepage `/es`, `/es/energia-empresa-capital`, `/es/contacto` | too dense on mobile | stacked mobile variant | Important |
| Project continuity system | `src/components/ProjectContinuitySection.tsx` | Homepage `/es`, `/es/energia-empresa-capital` | minor spacing issue | minor responsive spacing | Nice-to-have |
| Institutional traction flow | `src/components/InstitutionalTraction.tsx` | Homepage `/es`, `/es/energia-empresa-capital` | dense but acceptable | minor responsive spacing | Nice-to-have |
| Territorial transition map | `src/components/TerritorialTransitionCard.tsx` | Homepage `/es`, `/es/energia-empresa-capital` | too dense on mobile | stacked mobile variant | Important |
| Audience detail cards | `src/components/AudienceSection.tsx` | Homepage `/es`, About `/es/sobre-trinomio` | dense but acceptable | simplified mobile copy | Nice-to-have |
| Collaboration area cards | `src/components/CollaborationAreas.tsx` | Homepage `/es`, About `/es/sobre-trinomio` | dense but acceptable | minor responsive spacing | Nice-to-have |
| Homepage 3Labs orbital diagram | `src/app/es/page.tsx` | Homepage 3Labs section | overflow / clipping risk | stacked mobile variant | Critical |
| 3Labs orbital system | `src/app/es/3labs/page.tsx` | `/es/3labs`, "Sistema 3Labs" section | overflow / clipping risk | stacked mobile variant | Critical |
| 3Labs cue grids | `src/app/es/3labs/page.tsx` | `/es/3labs`, individual Lab sections | dense but acceptable | simplified mobile copy | Nice-to-have |
| 3Labs EFI level cards | `src/app/es/3labs/page.tsx` | `/es/3labs`, EFI section | no issue | no change | Nice-to-have |
| Cambio de Régimen comparison | `src/app/es/transicion/page.tsx` | `/es/transicion`, "Cambio de Régimen" section | dense but acceptable | minor responsive spacing | Nice-to-have |
| Destrucción Creativa sequence | `src/app/es/transicion/page.tsx` | `/es/transicion`, five-step sequence | too dense on mobile | simplified mobile copy | Important |
| EFI signal sequence | `src/app/es/transicion/page.tsx` | `/es/transicion`, "EFI como Señal de Transición" | too dense on mobile | simplified mobile copy | Important |
| Energy / Empresa / Capital transition triad | `src/app/es/transicion/page.tsx` | `/es/transicion`, "Por Qué Importa la Capa Empresa" | dense but acceptable | minor responsive spacing | Nice-to-have |
| Central thesis triad | `src/app/es/energia-empresa-capital/page.tsx` | `/es/energia-empresa-capital`, "Tesis Central" | dense but acceptable | minor responsive spacing | Nice-to-have |
| Layer cards: Energia / Empresa / Capital | `src/app/es/energia-empresa-capital/page.tsx` | `/es/energia-empresa-capital`, below architecture map | dense but acceptable | simplified mobile copy | Important |
| About page risk signal cards | `src/app/es/sobre-trinomio/page.tsx` | `/es/sobre-trinomio`, "Riesgo y Adaptación" | no issue | no change | Nice-to-have |
| Insights listing cards with SVG covers | `src/app/es/insights/page.tsx` | `/es/insights` listing | dense but acceptable | minor responsive spacing | Nice-to-have |
| Insight article hero cover backgrounds | `src/app/es/insights/[slug]/page.tsx`, `public/insights/*.svg` | Individual insight pages | dense but acceptable | no change | Nice-to-have |
| Article inline PNG: Resiliencia bajo presión estructural | `content/insights/resiliencia-estructuras-insuficientes.md`, `public/images/insights/ChatGPT Image May 15, 2026, 10_25_16 AM.png`, `src/app/es/insights/[slug]/page.tsx` | `/es/insights/resiliencia-estructuras-insuficientes` article body | dense but acceptable | no change | Nice-to-have |
| Firm layer SVG cover | `public/insights/firm-layer-cover.svg` | Insight card and article hero background for firm-layer insight | dense but acceptable | no change | Nice-to-have |
| Underwriting SVG cover | `public/insights/underwriting-cover.svg` | Insight card and article hero background for underwriting insight | dense but acceptable | no change | Nice-to-have |
| Resilience SVG cover | `public/insights/resilience-cover.svg` | Insight card and article hero background for resilience insight | dense but acceptable | no change | Nice-to-have |
| Programmable infrastructure SVG cover | `public/insights/programmable-infrastructure-cover.svg` | Insight card and article hero background for programmable infrastructure insight | dense but acceptable | no change | Nice-to-have |
| Trajectory comparison SVG asset | `public/images/diagrams/trinomio_slide3_trayectoria.svg` | Public asset; not currently inserted into routed pages or content | too dense on mobile | replace with mobile-specific image | Important |
| Trajectory comparison PNG asset | `public/images/diagrams/Trayectoria-Comparativa-Project-Finance-vs-Empresa-Estructurada.png` | Public asset; not currently inserted into routed pages or content | too dense on mobile | replace with mobile-specific image | Important |
| Unused generated diagram PNG | `public/images/diagrams/ChatGPT Image May 15, 2026, 10_25_16 AM.png` | Public asset; not currently inserted into routed pages or content | needs manual design decision | needs manual design decision | Nice-to-have |
| Root language-selection visual field | `src/app/page.tsx` | `/` language selector | no issue | no change | Nice-to-have |
| English placeholder visual field | `src/app/en/page.tsx` | `/en` placeholder | no issue | no change | Nice-to-have |

## Notes By Risk Type

### Overflow / Clipping Risk

The two 3Labs orbital diagrams are the clearest risk. Both use an `orbit-map` with absolutely positioned `orbit-node` cards of fixed width (`w-56`) placed around a circular field. On narrow screens, these nodes can crowd, overlap, or clip within the `overflow-hidden` diagram stage. This should be handled with a true stacked mobile variant rather than spacing tweaks.

### Too Dense On Mobile

The Ecosystem Architecture Map stacks into cards on mobile, but its visual logic depends on relationships between HoldCo, EE entities, SPVs, and flow legends. The hierarchy is still present, but the diagram meaning becomes more list-like. A mobile-specific stacked hierarchy would preserve the institutional logic more clearly.

The Territorial Transition map uses an abstract node-and-line panel with fixed minimum heights and a separate pathway list. It is visually coherent on desktop, but on mobile the abstract panel consumes space before the reader reaches the concrete pathways.

The Transition page's five-step sequences are readable as cards, but the flow logic weakens when stacked. Mobile copy should be shorter and more explicitly sequential.

### Image And SVG Assets

The active insight cover SVGs are mostly decorative background illustrations with sparse text. They are acceptable on mobile because they are not the primary carrier of meaning and are used behind overlays.

The article inline PNG is responsive through the article renderer: `Image` receives responsive `sizes`, and `.article-image` sets `width: 100%`, `height: auto`, and `max-width: 100%`. No overflow fix is needed.

The public trajectory SVG and PNG diagram assets are likely too dense for direct mobile insertion. They contain many labels and comparative structures. If they are used later, they should get either a mobile-specific image or a simplified in-code mobile version.

## Recommended Fix Order

1. 3Labs orbital diagrams: create stacked mobile variants for homepage and `/es/3labs`.
2. Ecosystem Architecture Map: introduce a mobile hierarchy view preserving HoldCo -> EE -> SPV -> flow legend.
3. Territorial Transition map: simplify or stack the map panel and pathway cards for mobile.
4. Transition page five-step sequences: shorten mobile copy and clarify sequence direction.
5. Layer cards on `/es/energia-empresa-capital`: reduce chip density or show fewer chips on mobile.
6. Project continuity and institutional traction: tighten mobile spacing only after higher-risk diagrams are addressed.
7. Public trajectory SVG/PNG assets: decide whether they remain archive assets or need mobile-specific derivatives before insertion.
