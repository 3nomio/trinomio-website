# Engagement Playbook: Quick Reference Card

## 📋 Files You Need

```
src/components/
├── EngagementPlaybook.tsx ........................... Spanish component
├── EngagementPlaybookSection.tsx .................... Spanish wrapper
├── EngagementPlaybookEN.tsx ......................... English component
└── EngagementPlaybookSectionEN.tsx .................. English wrapper
```

---

## ⚡ Integration (Copy-Paste Ready)

### Spanish (`src/app/(es)/es/page.tsx`)

**Add import at top:**
```typescript
import { EngagementPlaybookSection } from "@/components/EngagementPlaybookSection";
```

**Add after `<ProjectContinuitySection />`:**
```typescript
<EngagementPlaybookSection />
```

---

### English (e.g., `src/app/(en)/en/page.tsx`)

**Add import at top:**
```typescript
import { EngagementPlaybookSectionEN } from "@/components/EngagementPlaybookSectionEN";
```

**Add after `<ProjectContinuitySection />`:**
```typescript
<EngagementPlaybookSectionEN />
```

---

## 🎨 What It Looks Like

| Desktop | Mobile |
|---------|--------|
| Horizontal 3-phase timeline | Vertical collapsible stack |
| Dots connected with line | Connector lines between cards |
| Click → popup expands | Tap → card expands below |
| Colors: cyan → blue → green | Same colors, different layout |

---

## 📱 Responsive Behavior

- **Desktop (1024px+):** Horizontal timeline, popup details
- **Mobile (<1024px):** Vertical stack, inline expansion

---

## ✏️ Edit Content

**File:** `EngagementPlaybook.tsx` (Spanish) or `EngagementPlaybookEN.tsx` (English)

**Find:** `const phases: Phase[] = [`

**Edit:**
```typescript
{
  id: "sentir",                      // Phase ID (don't change)
  label: "SENTIR",                   // Phase name (visible)
  duration: "2–4 semanas",           // Timeline (visible)
  color: "cyan",                     // Color (cyan|blue|green)
  youBring: [                        // Bullet points
    "Item 1",
    "Item 2",
  ],
  trinomioDescribe: "Preview text",  // Short description
  trinomioDoes: [                    // What Trinomio does (bullets)
    "Action 1",
    "Action 2",
  ],
  outcome: [                         // Results (bullets)
    "Result 1",
    "Result 2",
  ],
  whyMatters: "Longer explanation",  // Quote at bottom
}
```

---

## 🌈 Change Colors

**File:** `EngagementPlaybook.tsx` or `EngagementPlaybookEN.tsx`

**Find:** `const colorClasses = {`

```typescript
cyan: {
  accent: "text-trinomio-cyan",      // Change color here
  border: "border-trinomio-cyan/30",
  dot: "bg-trinomio-cyan",
},
blue: {
  accent: "text-[#609DFF]",          // Or here
  // ...
},
green: {
  accent: "text-trinomio-green",     // Or here
  // ...
},
```

**Available colors:**
- `text-trinomio-cyan` or `text-[#17D7FF]`
- `text-[#609DFF]` (electric blue)
- `text-trinomio-green` or `text-[#0BBF75]`

---

## ✅ Testing Checklist

- [ ] Imported into Spanish homepage → test at `/es`
- [ ] Imported into English homepage → test at `/en`
- [ ] Desktop: Click each phase → popup appears
- [ ] Desktop: Click again → popup closes
- [ ] Mobile: Tap each phase → expands below
- [ ] Mobile: Scroll works smoothly
- [ ] Colors match design system
- [ ] Text is in correct language
- [ ] No console errors (F12)

---

## 🐛 Troubleshooting

| Issue | Fix |
|-------|-----|
| Component not showing | Check import path (e.g., `@/components/EngagementPlaybookSection`) |
| Styles broken | Ensure Tailwind is running (`npm run dev`) |
| Mobile doesn't stack | Check viewport < 1024px; inspect `hidden lg:block` |
| Wrong language | Make sure you imported the `EN` version for English page |
| Colors off | Check Tailwind color variables in `globals.css` |

---

## 📚 Full Documentation

- **INTEGRATION_GUIDE.md** — Detailed Spanish setup
- **INTEGRATION_GUIDE_EN.md** — Detailed English setup
- **IMPLEMENTATION_SUMMARY.md** — Architecture & maintenance
- **MARKETING_ENHANCEMENTS_DRAFT.md** — Copy for all 3 enhancements

---

## 🚀 Advanced

### Add CTAs per phase
Edit the component to add a button:
```typescript
<button className="mt-4 px-4 py-2 bg-trinomio-cyan text-white rounded">
  Next Step
</button>
```

### Track analytics
Add to `onClick` handlers:
```typescript
onClick={() => {
  setExpanded(isExpanded ? null : phase.id);
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('event', 'engagement_phase_click', {
      phase: phase.id
    });
  }
}}
```

### Add animations
Import Framer Motion:
```typescript
import { motion } from "framer-motion";
// Wrap expanded content in <motion.div animate={{ opacity: 1 }}>
```

---

## 📞 Need Help?

1. Check the full integration guides (INTEGRATION_GUIDE.md)
2. Review IMPLEMENTATION_SUMMARY.md for architecture
3. Test on mobile/desktop with checklist above
4. Inspect console for errors (F12)

---

**Last Updated:** June 2026
**Status:** Production-ready ✅
