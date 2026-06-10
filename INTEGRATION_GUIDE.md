# Integration Guide: Engagement Playbook Component

## Files Created

### 1. `src/components/EngagementPlaybook.tsx`
**Core interactive component** — Renders three phases (Sentir → Dimensionar → Rebalancear) with:
- Desktop horizontal timeline with expandable details
- Mobile vertical stack with collapsible cards
- Color-coded per phase (cyan, blue, green)
- "You bring" → "Trinomio does" → "Outcome" → "Why it matters" structure

**Props:** None (self-contained)
**State:** Tracks which phase is expanded (`expanded` state)
**Responsive:** Automatically stacks on mobile, horizontal on desktop

---

### 2. `src/components/EngagementPlaybookSection.tsx`
**Wrapper component** — Bundles:
- `SectionHeading` with eyebrow, title, description
- `EngagementPlaybook` component
- Explanatory footer paragraph
- `OrbitalDivider` before and after for visual separation

**Usage:** Import this into the homepage and drop it in the desired location

---

## Where to Place in Homepage

### Current Spanish Homepage Flow:
```
1. Header (navigation)
2. Hero (tagline)
3. HomepagePathway
4. Doctrine section (FlowDoctrine, PillarCard)
5. Firm Layer section (EcosystemArchitectureMap)
6. Project Continuity section
7. Institutional Traction section
8. Territorial Transition section
9. "Para quién" section (audience)
10. Collaboration Areas section
11. 3Labs section
12. Insights section
13. About section
14. Contact section
```

### Recommended Insertion Point:
**Insert `<EngagementPlaybookSection />` after step 6 (Project Continuity) and before step 7 (Institutional Traction).**

**Rationale:**
- By this point, visitor understands the thesis (Energy → Firm ← Capital)
- Sees the architecture (Ecosystem map, firm layer)
- Now needs to understand *how engagement works*
- Playbook → Traction → Audiences (converts to action)

---

## Implementation Steps

### Step 1: Import the Section into `src/app/(es)/es/page.tsx`

At the top of the file, add:
```typescript
import { EngagementPlaybookSection } from "@/components/EngagementPlaybookSection";
```

### Step 2: Insert into JSX

Find the `<ProjectContinuitySection />` component (around line 113), then add immediately after:

```typescript
        </section>

        <EngagementPlaybookSection />

        <section
          className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32"
          id="traccion-institucional"
        >
```

### Step 3: (Optional) Update Navigation

If you want a skip-link to this section in your header/nav, add:
```
"#metodologia" → "Metodología"
```

---

## Customization Options

### Colors
The phases use:
- **SENTIR:** `trinomio-cyan` (#17D7FF)
- **DIMENSIONAR:** `#609DFF` (electric blue)
- **REBALANCEAR:** `trinomio-green` (#0BBF75)

To change, edit `colorClasses` object in `EngagementPlaybook.tsx`:
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
Edit the `phases` array in `EngagementPlaybook.tsx`:
```typescript
const phases: Phase[] = [
  {
    id: "sentir",
    label: "SENTIR",  // Change label
    duration: "2–4 semanas",  // Change duration
    // ...
  },
];
```

### Content (What you bring, Trinomio does, outcomes)
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
Edit the explanatory paragraph in `EngagementPlaybookSection.tsx`:
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

---

## Future Enhancements

### 1. **Add CTAs per phase**
Each phase could link to specific actions:
- SENTIR: "Schedule discovery call" → `/es/contacto?tipo=sentir`
- DIMENSIONAR: "Get structuring toolkit" → `/es/recursos/toolkit`
- REBALANCEAR: "Discuss capital pathways" → `/es/contacto?tipo=capital`

**Implementation:** Add `cta` object to each phase, render button in expanded content.

### 2. **Animated timeline on scroll**
Use Framer Motion or Intersection Observer to animate phases in as user scrolls:
- Dot fills with color on scroll into view
- Content fades in with stagger

### 3. **Persona integration**
Link from each phase to persona-specific content:
- SENTIR → filtered to "developer" / "landowner" perspective
- DIMENSIONAR → capital-provider view
- etc.

### 4. **Video/diagram per phase**
Add embedded video or diagram icon per phase (YouTube links, Figma embeds, etc.)

---

## Support / Questions

If you need to:
- **Change layout** (e.g., cards in a grid instead of timeline) → Edit mobile/desktop sections
- **Add more phases** → Add to `phases` array + update `colorClasses`
- **Connect to backend** (e.g., log which phase users interact with) → Add analytics tracking to `onClick` handlers
- **Translate to English** → Copy component, rename to `EngagementPlaybookEN`, translate all strings

---
