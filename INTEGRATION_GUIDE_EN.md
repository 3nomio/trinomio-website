# Integration Guide: Engagement Playbook Component (English Version)

## Files Created

### 1. `src/components/EngagementPlaybookEN.tsx`
**Core interactive component (English)** — Renders three phases (Sense → Dimension → Rebalance) with:
- Desktop horizontal timeline with expandable details
- Mobile vertical stack with collapsible cards
- Color-coded per phase (cyan, blue, green)
- "You bring" → "What Trinomio does" → "Outcome" → "Why it matters" structure

**Props:** None (self-contained)
**State:** Tracks which phase is expanded (`expanded` state)
**Responsive:** Automatically stacks on mobile, horizontal on desktop

---

### 2. `src/components/EngagementPlaybookSectionEN.tsx`
**Wrapper component (English)** — Bundles:
- `SectionHeading` with eyebrow, title, description
- `EngagementPlaybookEN` component
- Explanatory footer paragraph
- `OrbitalDivider` before and after for visual separation

**Usage:** Import this into the English homepage and drop it in the desired location

---

## Where to Place in Homepage

### Current English Homepage Flow:
```
1. Header (navigation)
2. Hero (tagline)
3. Language gateway (if present)
4. Doctrine section (FlowDoctrine, PillarCard)
5. Firm Layer section (EcosystemArchitectureMap)
6. Project Continuity section
7. Institutional Traction section
8. Territorial Transition section
9. "For whom" section (audience)
10. Collaboration Areas section
11. 3Labs section
12. Insights section
13. About section
14. Contact section
```

### Recommended Insertion Point:
**Insert `<EngagementPlaybookSectionEN />` after step 6 (Project Continuity) and before step 7 (Institutional Traction).**

**Rationale:**
- By this point, visitor understands the thesis (Energy → Firm ← Capital)
- Sees the architecture (Ecosystem map, firm layer)
- Now needs to understand *how engagement works*
- Playbook → Traction → Audiences (converts to action)

---

## Implementation Steps

### Step 1: Import the Section into English Homepage

Locate your English homepage file (likely `src/app/(en)/en/page.tsx`), and add at the top:

```typescript
import { EngagementPlaybookSectionEN } from "@/components/EngagementPlaybookSectionEN";
```

### Step 2: Insert into JSX

Find the `<ProjectContinuitySection />` component (around line 113 in the Spanish version), then add immediately after:

```typescript
        </section>

        <EngagementPlaybookSectionEN />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32"
          id="traccion-institucional"
        >
```

### Step 3: (Optional) Update Navigation

If you want a skip-link to this section in your header/nav, add:
```
"#methodology" → "Methodology"
```

---

## Customization Options

### Colors
The phases use:
- **SENSE:** `trinomio-cyan` (#17D7FF)
- **DIMENSION:** `#609DFF` (electric blue)
- **REBALANCE:** `trinomio-green` (#0BBF75)

To change, edit `colorClasses` object in `EngagementPlaybookEN.tsx`:
```typescript
const colorClasses = {
  cyan: {
    accent: "text-trinomio-cyan",      // Change here
    border: "border-trinomio-cyan/30",
    dot: "bg-trinomio-cyan",
  },
  // ...
};
```

### Duration / Phase Names
Edit the `phases` array in `EngagementPlaybookEN.tsx`:
```typescript
const phases: Phase[] = [
  {
    id: "sense",
    label: "SENSE",  // Change label
    duration: "2–4 weeks",  // Change duration
    // ...
  },
];
```

### Content (You bring, What Trinomio does, outcomes)
All content lives in the `phases` array. Edit strings directly:
```typescript
youBring: [
  "Your text here",
  "Another point",
],
trinomioDoes: [
  "Action item 1",
  // ...
],
outcome: [
  "Result 1",
  // ...
],
whyMatters: "Quote here",
```

### Bottom Explanation Text
Edit the explanatory paragraph in `EngagementPlaybookSectionEN.tsx`:
```typescript
<p className="text-base leading-7 text-[#E2E6E9]/90">
  <span className="block font-semibold text-white mb-3">
    YOUR NEW TEXT HERE
  </span>
  YOUR EXPLANATION HERE
</p>
```

---

## Responsive Behavior

| Breakpoint | Layout |
|-----------|--------|
| **Mobile** (`< 1024px`) | Vertical stack, one phase at a time, collapsible cards |
| **Desktop** (`≥ 1024px`) | Horizontal timeline with dots, popup expanded views, all visible at once |

Desktop expanded view appears as a **popup card** anchored to the clicked phase (positioned absolutely, z-indexed above other content).

---

## Accessibility Notes

- All buttons use `onClick` handlers with keyboard support (can tab + enter)
- Expanded state is visible via border, background, and animation
- Color is used in combination with icons (→, ◆, ✓) for non-color-blind clarity
- Text size is 12–16px (readable on all devices)

---

## Testing Checklist

- [ ] Desktop: Click each phase header; expanded content appears in popup
- [ ] Desktop: Click again to collapse; popup disappears smoothly
- [ ] Mobile: Tap each phase; expands below as a card
- [ ] Mobile: Scroll through all three phases without layout breaks
- [ ] Colors match design system (cyan, blue, green accent consistent)
- [ ] Links to glossary or next actions (if added) work
- [ ] Section sits correctly between Project Continuity and Institutional Traction
- [ ] No console errors; performance is smooth (no janky animations)
- [ ] Text is English throughout (no Spanish sneaking in)

---

## Future Enhancements

### 1. **Add CTAs per phase**
Each phase could link to specific actions:
- SENSE: "Schedule discovery call" → `/en/contact?type=sense`
- DIMENSION: "Get structuring toolkit" → `/en/resources/toolkit`
- REBALANCE: "Discuss capital pathways" → `/en/contact?type=capital`

**Implementation:** Add `cta` object to each phase, render button in expanded content.

### 2. **Animated timeline on scroll**
Use Framer Motion or Intersection Observer to animate phases in as user scrolls:
- Dot fills with color on scroll into view
- Content fades in with stagger

### 3. **Persona integration**
Link from each phase to persona-specific content:
- SENSE → filtered to "developer" / "landowner" perspective
- DIMENSION → capital-provider view
- etc.

### 4. **Video/diagram per phase**
Add embedded video or diagram icon per phase (YouTube links, Figma embeds, etc.)

### 5. **Language toggle in component**
Instead of separate files, create a generic component that accepts a `language` prop and renders the appropriate text:
```typescript
export function EngagementPlaybook({ language = "es" }: { language?: "es" | "en" }) {
  const content = language === "es" ? spanishPhases : englishPhases;
  // ...
}
```

---

## Differences from Spanish Version

- Phase labels: SENTIR → SENSE, DIMENSIONAR → DIMENSION, REBALANCEAR → REBALANCE
- All UI text translated: "Lo que traes" → "You bring", "Qué hace Trinomio" → "What Trinomio does"
- Duration format: "2–4 semanas" → "2–4 weeks", "3–6 meses" → "3–6 months"
- Content fully translated with English phrasing for institutional audiences
- File naming: `EngagementPlaybookEN.tsx` (suffix for English)

---

## Support / Questions

If you need to:
- **Sync changes between Spanish and English** → Make the change in both component files (or refactor to a single component with language prop)
- **Add more phases** → Add to `phases` array in both files + update `colorClasses`
- **Connect to backend** → Add analytics tracking to `onClick` handlers
- **Create other languages** → Copy `EngagementPlaybookEN.tsx`, rename to `EngagementPlaybookFR.tsx`, translate content

---
