# Trinomio Website Audit

Date: 2026-05-18

Scope: homepage, framework pages, Insights, article template, Glossary, About, Contact, shared navigation, shared logo/back affordance, metadata, and article content rendering.

## Executive Summary

The site has a coherent institutional identity and consistently reinforces the Energy -> Firm -> Capital thesis. The strongest elements are the strategic language, the repeated Capa Empresa framing, and the connection between distributed energy assets, firm formation, and institutional capital.

The main risks were practical usability gaps rather than a need for redesign: mobile navigation was not exposed, the logo/back control was visually unclear, most Spanish pages relied on global metadata, and article markdown did not yet support inline links for future glossary references. These low-risk items have been fixed.

## Critical

### Mobile Navigation Was Hidden - Fixed

Problem: The primary navigation was hidden below the `lg` breakpoint, leaving mobile visitors without a visible path to Transición, Energía -> Empresa -> Capital, 3Labs, Glosario, Insights, About, or Contact.

Why it matters: Institutional visitors often review sites on mobile before forwarding or revisiting on desktop. Missing mobile navigation weakens credibility and blocks basic discovery.

Recommended fix: Keep the navigation visible on mobile with tappable, wrapping links and preserve the existing desktop alignment.

Status: Implemented in `src/components/Header.tsx`.

## Important

### Logo / Back-Navigation Affordance Was Foggy - Fixed

Problem: The Trinomio logo includes a back cue, but the cue had low visual separation and the link label was generic.

Why it matters: A global home/back affordance must be unmistakably clickable, especially in a site with multiple institutional sections and article pages.

Recommended fix: Increase contrast, size, border clarity, hover state, and use a more descriptive accessible label when the back cue is shown.

Status: Implemented in `src/components/Logo.tsx` and `src/app/globals.css`.

### Page Metadata Was Too Generic - Fixed

Problem: Most Spanish top-level pages inherited the root metadata instead of declaring page-specific titles and descriptions.

Why it matters: Institutional users often encounter pages through shared links, search, or internal referrals. Specific metadata improves credibility, preview quality, and content indexing.

Recommended fix: Add `metadata` exports to major Spanish pages.

Status: Implemented for Home, Transición, Energía -> Empresa -> Capital, 3Labs, Insights, Sobre Trinomio, Contacto, and previously for Glosario.

### Article Markdown Did Not Support Inline Links - Fixed

Problem: The article renderer supported headings, lists, blockquotes, bold text, and images, but not inline markdown links.

Why it matters: Future articles need clean links to glossary anchors such as `/es/glosario#der` without custom rendering work.

Recommended fix: Add inline markdown link support with accessible focus styling and internal `Link` routing.

Status: Implemented in `src/app/es/insights/[slug]/page.tsx`.

### Generic CTA Label On Insight Cards - Fixed

Problem: Insight cards used the generic label "Leer artículo."

Why it matters: Descriptive link text improves accessibility and helps users understand where each card leads.

Recommended fix: Make the CTA specific to the insight title while preserving card layout.

Status: Implemented in `src/app/es/insights/page.tsx`.

### Decorative Overflow Risk On Mobile - Fixed

Problem: Several decorative orbital elements extend beyond the viewport. This can create accidental horizontal scrolling on smaller screens.

Why it matters: Horizontal scroll on institutional sites feels unstable and can make diagrams or cards appear broken.

Recommended fix: Clip horizontal overflow at the document level while keeping section-level responsive layouts intact.

Status: Implemented in `src/app/globals.css`.

## Nice-To-Have

### Active Navigation State

Problem: The header does not show which section or route is active.

Why it matters: Active states improve orientation on multi-page institutional sites.

Recommended fix: Add a small client-side active route treatment or pass the active section from each page. This is a modest refactor and was not implemented in this safe pass.

### More Explicit Homepage Audience Routing

Problem: The homepage explains the thesis well, but the first viewport could make the audience path more explicit for banks, SAFIs, cooperatives, utilities, and investors.

Why it matters: Institutional visitors should quickly see which path applies to them.

Recommended fix: Add a compact audience-oriented route cluster near the first or second screen. Avoid a marketing-style hero rewrite.

### Diagram Mobile Simplification

Problem: Some diagrams use absolute-positioned nodes that may become dense on narrow screens.

Why it matters: Diagrams should clarify the thesis, not compete with it.

Recommended fix: Add mobile-specific stacked diagram variants for the most complex diagrams. This is larger than a safe audit fix and should be handled deliberately.

### Root Language Attribute

Problem: The root layout uses `lang="en"` while most developed content is Spanish.

Why it matters: Screen readers, browser translation, and search engines use language metadata.

Recommended fix: If Spanish remains the primary site language, switch the root to Spanish or add locale-specific layouts. This touches internationalization behavior and was not changed in this pass.

### Open Graph Images

Problem: Article metadata includes titles and descriptions but not route-specific Open Graph images.

Why it matters: Shared institutional links look more credible with consistent image previews.

Recommended fix: Add Open Graph image metadata using existing insight cover assets and a default Trinomio image for static pages.

## Dimension Notes

### Strategic Clarity

The homepage makes the core thesis visible immediately. The phrase Energy -> Firm -> Capital is clear and repeated consistently. The site is strongest when it explains that the investable unit is not an isolated energy asset but the firm layer that organizes ownership, contracts, operations, risk, and cash flows.

### Navigation

The navigation is now visible on mobile and desktop. Labels are clear and predictable. The Glossary is included as a first-class route, and contextual navigation blocks support movement between frameworks, insights, glossary, and contact paths.

### Visual Hierarchy

Page titles, section headings, cards, and contextual links are visually distinct. The design is institutional and consistent. The main caution is density: some pages have many full-height sections and repeated visual motifs. Future work should simplify only where the message becomes repetitive.

### Accessibility

Focus states are present across most interactive elements. Tap targets are improved in the mobile header. Image alt text is present for rendered images. The logo/back affordance is clearer. Remaining risks are active navigation state, root language handling, and mobile diagram complexity.

### Mobile Responsiveness

The major mobile blocker was hidden navigation. Document-level overflow clipping reduces accidental horizontal scrolling from decorative elements. Complex diagrams should be reviewed visually on real mobile devices before major campaigns or investor circulation.

### Credibility and Institutional Tone

The site avoids startup-casual language and generic sustainability claims. It reads as infrastructure-finance oriented. The strongest credibility signal is the repeated relationship between DERs, firm structure, risk allocation, and capital formation.

### SEO and Content Structure

Descriptive URLs and internal routes are strong. Page metadata has been improved. Article links can now point to glossary anchors. Future SEO work should add Open Graph images, active breadcrumbs where useful, and richer structured article metadata if publishing volume increases.
