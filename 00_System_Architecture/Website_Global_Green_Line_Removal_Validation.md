# Website Global Green Line Removal Validation

## Root cause

The remaining thin green/cyan horizontal line came from the shared `.animated-flow-line` utility in `src/app/globals.css`.

That utility renders a 1px full-width cyan / blue / green gradient and animates it with `flow-pulse`. It was still mounted in internal page hero or section backgrounds, including `/es/sobre-trinomio`, `/es/glosario`, `/es/transicion`, and `/es/energia-empresa-capital`.

The earlier `/es/3labs` cleanup removed the page-specific hero instance from that route, but left the reusable utility active. The remaining issue was therefore global, not page-copy or content related.

## Files changed

- `src/app/globals.css`
- `00_System_Architecture/Website_Global_Green_Line_Removal_Validation.md`

## Pages checked

- `/es/sobre-trinomio`
- `/es/3labs`
- `/es/transicion`
- `/es/energia-empresa-capital`
- `/es/glosario`

## Confirmation

`.animated-flow-line` is now disabled at the shared CSS source with `display: none`, so any remaining mounted instances no longer render the unwanted horizontal rule on internal pages.

The dark institutional background, orbital / concentric background graphics, typography, logo, navbar, card borders, section dividers, and page layout were preserved. The separate `.flow-line` used by intentional orbital dividers was not changed.

## Unrelated content

No navigation, copy, content structure, glossary definitions, insight markdown, thesis pages, or Obsidian files were modified for this fix.

## Validation commands

### `npm run lint`

Result: passed.

### `npm run build`

Result: passed.

The build generated the checked static routes, including `/es/sobre-trinomio`, `/es/3labs`, `/es/transicion`, `/es/energia-empresa-capital`, and `/es/glosario`.
