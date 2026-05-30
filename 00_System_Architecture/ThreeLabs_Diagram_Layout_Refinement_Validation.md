# 3Labs Diagram Layout Refinement Validation

Date: 2026-05-30

## Scope

Scoped refinement for the strategic 3Labs diagram on `/es/3labs`, in the `Sistema 3Labs` section.

No homepage, glossary, insights, thesis, contact, or unrelated page redesigns were made as part of this refinement.

## Root Cause

The desktop/tablet 3Labs diagram used fixed absolute positioning for the orbit nodes inside an `overflow-hidden` diagram stage.

The lower nodes were positioned by percentage coordinates and then shifted with `translate(-50%, -50%)`. Because those cards were removed from normal document flow, their real rendered height did not contribute to the diagram container height. The lower-right node could therefore extend beyond the visible stage and be clipped.

## Files Changed

- `src/app/(es)/es/3labs/page.tsx`
- `00_System_Architecture/ThreeLabs_Diagram_Layout_Refinement_Validation.md`

## Layout Adjustments

- Removed the fragile `labPositions` absolute-coordinate model for the desktop/tablet 3Labs diagram.
- Rebuilt the desktop/tablet composition as an in-flow grid:
  - top node centered
  - center row with left capability, central `Capa Empresa` anchor, and right capability
  - orbital field retained as a decorative background layer
- Kept the existing mobile stacked diagram intact.
- Preserved the institutional visual system: `diagram-stage`, `diagram-card`, `accent-callout`, adaptive grid, orbital field, restrained cyan/blue styling, and existing typography.
- Ensured the diagram stage now expands based on real content height, so key nodes are part of layout and cannot be clipped by fixed coordinate assumptions.

## Responsive Behavior

- Desktop: full diagram remains centered, with the three 3Labs capabilities arranged around the central `Capa Empresa` anchor.
- Tablet: cards remain in normal document flow and stack proportionally within the desktop/tablet stage instead of relying on fixed orbit coordinates.
- Mobile: existing stacked mobile layout remains complete and unchanged.

## Validation

- `npm run lint`: passed.
- `npm run build`: passed.

