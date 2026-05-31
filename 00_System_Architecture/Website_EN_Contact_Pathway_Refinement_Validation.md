# Website EN Contact Pathway Refinement Validation

## 1. Issue observed

The English experience routed international CTA traffic into `/es/contacto`, which moved readers out of the English context and made it harder to continue navigating the concise English pathway.

## 2. Route created

Created the lightweight English contact route:

- `/en/contact`
- `src/app/(en)/en/contact/page.tsx`

The page is scoped to international developers, investors, DFIs / climate capital, banks, SAFI / FICR readers, strategic energy partners, and regional capital-market actors. It keeps the claim set disciplined around bankable cash-flow assets, capital recycling, liquidity-oriented structuring, and a pathway toward liquidity.

## 3. CTA links updated

Updated English CTAs that previously sent English users toward the Spanish contact page:

- `/en` shared English pathway secondary CTA now points to `/en/contact`.
- `/en/costa-rica-opportunity` closing CTA now points to `/en/contact`.

The Spanish locale CTA inside the shared homepage pathway copy was not changed.

## 4. English navigation behavior

Refined the English micro-navigation to include only:

- Home -> `/en`
- Costa Rica Opportunity -> `/en/costa-rica-opportunity`
- Contact -> `/en/contact`
- Espanol -> `/es`

The new `/en/contact` route also includes return links to `/en`, `/en/costa-rica-opportunity`, and `/es`.

## 5. Spanish pages were not redesigned

Confirmed: no Spanish page redesign was performed. The Spanish institutional contact page remains available as the optional secondary link from `/en/contact` to `/es/contacto`.

No Obsidian files were modified.

## 6. npm run lint result

Passed.

Command:

```bash
npm run lint
```

Result:

```text
> trinomio-institutional-website@0.1.0 lint
> eslint .
```

## 7. npm run build result

Passed.

Command:

```bash
npm run build
```

Result:

```text
Compiled successfully
Generating static pages (29/29)
/en/contact generated as a static route
```
