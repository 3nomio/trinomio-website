# Website EN Stage 1 Strategic Localization Plan

## 1. Executive Summary

Stage EN-1 should create a focused English presence for international observers and capital-market participants, not a translated mirror of the Spanish site.

The current English site is minimal: `/en` exists as a standalone landing page, with no English navigation, no English footer pathing, and no additional English routes. This is a useful base because it avoids overloading the English experience, but it needs a clearer capital-structuring thesis and at least one deeper page for international review.

Recommended first implementation step: create `/en/costa-rica-opportunity` as the first strategic English page, with a light refinement of `/en` only where necessary to route international readers into that page. This keeps the English site focused on the highest-value external narrative: Costa Rica's energy transition as a liquidity-oriented capital-structuring opportunity.

The IEA Costa Rica profile source requested for this stage is not present in the repository. No IEA facts should be introduced until the source is added or separately verified. The opportunity page can be framed conceptually first, but any country-policy or energy-system evidence should wait for the source.

## 2. Current English Site Structure

Existing English route:

- `src/app/(en)/en/page.tsx`

Existing English layout:

- `src/app/(en)/layout.tsx`

Observed route structure:

- `/en` exists.
- No `/en/costa-rica-opportunity` route exists.
- No `/en/the-trinomio-model` route exists.
- No `/en/contact` route exists.
- No English insights routes exist.
- No English glossary route exists.

Current `/en` behavior:

- Uses a standalone page layout without `Header`.
- Uses `Logo` with `href="/en"`.
- Presents the core formula: `Energy → Firm ← Capital`.
- Uses a homepage headline: `Trinomio converts strategic energy potential into scalable bankable assets.`
- Uses a short explanation of the governed firm as the layer between energy functions and capital discipline.
- Includes two CTAs:
  - `Ver sitio en Español ->` pointing to `/es`.
  - `Explore the 3-Syst model ->` pointing to `/es/energia-empresa-capital`.
- Uses `HomepagePathway compact locale="en"`.

Current English layout metadata:

- Title: `Trinomio | Energy → Firm ← Capital`
- Description: `Trinomio turns energy surplus into bankable assets through the firm layer between energy functions and capital-market discipline.`

Navigation configuration:

- `src/lib/navigation.ts` currently exports `spanishNav`.
- There is no `englishNav`.
- All primary navigation links point to Spanish routes.
- `Header` accepts arbitrary `navItems`, so it can support English navigation later without structural redesign.

Footer configuration:

- `src/components/Footer.tsx` is Spanish-oriented.
- Footer slogan uses `Energía → Empresa ← Capital`.
- Footer link points to `/es/sintesis`.
- The English homepage does not currently render `Footer`.

Related English-capable component:

- `src/components/HomepagePathway.tsx` already supports `locale="en"`.
- Its English copy is usable as a base, but the English CTA URLs currently point to Spanish routes:
  - primary: `/es/contacto#escribanos`
  - secondary: `/es/energia-empresa-capital#capa-capital`

## 3. English Strategic Positioning

The English site should position Trinomio around capital formation, asset structuring, and institutional execution.

Core positioning:

Costa Rica's energy transition is not only a project-development opportunity. It is a capital-structuring opportunity.

Strategic English framing:

- Trinomio helps international partners convert long-term Costa Rican PPA/EaaS cash flows into structured, bankable investment assets.
- The model should emphasize a pathway toward refinancing, pooling, securitization, and capital-market participation.
- The site should describe liquidity-oriented structuring and capital recycling without implying that a mature secondary PPA liquidity market already exists in Costa Rica.

The English version should reduce local doctrinal density and make the international investment logic easier to scan:

- Energy transition creates long-term contractual cash flows.
- Long-term contracts can become structured cash-flow assets when governance, risk allocation, monitoring, and capital discipline are designed correctly.
- Structured cash-flow assets can support refinancing, pooling, securitization, and faster capital recycling over time.
- Trinomio operates in the firm layer between project origination, execution capacity, and capital-market requirements.

## 4. International Audience

Primary English audience:

- International developers
- Infrastructure and energy investors
- DFIs and climate-capital platforms
- Strategic energy partners
- Banks and credit providers
- Regional capital-market actors
- SAFI / FICR readers

Audience needs:

- A clear country opportunity narrative.
- A credible explanation of how Trinomio turns energy contracts into bankable assets.
- Careful language around liquidity, securitization, and capital-market pathways.
- Enough Costa Rica context to orient international readers without overloading them with local regulatory detail.
- A direct inquiry path for partnerships, capital, and strategic energy collaboration.

The English site should not target general consumers or attempt to educate every local stakeholder. Those roles are better served by the Spanish site.

## 5. IEA Costa Rica Profile Source Review

Searches performed:

- `IEA_CR_profile`
- `Costa Rica IEA`
- `International Energy Agency`
- `energy profile`
- `Costa Rica energy policy`
- `Costa Rica energy transition`
- Broad filename search for `IEA`, `costa`, and `energy profile`

Result:

- No matching IEA Costa Rica profile source was found in the repository.
- No file path can be identified for `IEA_CR_profile`.
- No IEA facts should be invented or paraphrased during implementation.

Recommended source handling:

- Add the IEA Costa Rica profile source to the project before implementing evidence-backed Costa Rica opportunity claims.
- Store it in a predictable source or research location, for example `00_System_Architecture/` or a dedicated research/content source directory.
- Once added, extract only stable, source-supported anchors relevant to international capital readers.

Potential strongest evidence anchors to review once the source is available:

- Costa Rica electricity mix and renewable generation profile.
- Grid reliability, electrification, and demand-growth context.
- Energy-policy targets and transition priorities.
- Constraints or opportunities related to distributed energy, private participation, electrification, storage, efficiency, or power-market modernization.
- Any IEA language on investment needs, infrastructure requirements, regulation, resilience, or financing.

Until the source exists, the opportunity page should use careful, general framing rather than quantitative claims.

## 6. Recommended English Information Architecture

Minimum focused structure for EN-1:

1. `/en`
   - English landing page.
   - Keep as the entry point.
   - Lightly align copy to the capital-structuring thesis.
   - Add a route into `/en/costa-rica-opportunity` once that page exists.

2. `/en/costa-rica-opportunity`
   - New priority page.
   - Explain Costa Rica as an energy-transition capital-market opportunity.
   - Frame the opportunity around long-term energy contracts, structured cash-flow assets, bankability, refinancing pathways, pooling, securitization, and capital recycling.
   - Include IEA-supported policy/evidence anchors only after the source is added.

3. `/en/the-trinomio-model`
   - Optional later page.
   - Explain `Energy → Firm ← Capital` for international readers.
   - Translate the model strategically, not literally from Spanish pages.

4. `/en/contact`
   - Optional later page or section.
   - Provide a direct international inquiry path for partners, investors, developers, DFIs, banks, and strategic energy actors.

Navigation should stay intentionally small:

- Opportunity
- Model
- Contact
- Español

For EN-1, it is acceptable to expose only:

- Opportunity
- Español

## 7. Recommended First Implementation Step

Best first step: **E. create a staged combination**, with `/en/costa-rica-opportunity` as the main deliverable and a light `/en` refinement to support it.

Recommended sequence:

1. Add `/en/costa-rica-opportunity`.
2. Lightly refine `/en` headline, supporting copy, and CTA pathing so international readers understand the capital-structuring thesis.
3. Add a minimal English navigation only if it improves discoverability.
4. Defer `/en/the-trinomio-model` until the opportunity page proves the strategic direction.
5. Defer `/en/contact` unless an immediate international inquiry endpoint is required.

Assessment of options:

- A. Lightly refine `/en` homepage only: useful but insufficient for external review because it leaves no deeper international narrative.
- B. Create `/en/costa-rica-opportunity`: strongest single move and the clearest fit for Stage EN-1.
- C. Create `/en/the-trinomio-model`: useful later, but more internal-framework heavy than the market opportunity page.
- D. Create `/en/contact`: premature unless there is already enough English context to qualify inbound interest.
- E. Staged combination: best option if kept narrow.

## 8. Page-by-Page Content Direction

`/en`

- Keep the existing landing-page base.
- Reframe the main message toward structured cash-flow assets and capital recycling.
- Keep `Energy → Firm ← Capital`.
- Avoid dense local terminology.
- Replace or supplement Spanish-route CTAs with English-route CTAs.
- Suggested primary CTA: `Explore the Costa Rica opportunity`.
- Suggested secondary CTA: `View Spanish site`.

`/en/costa-rica-opportunity`

- Purpose: explain why Costa Rica matters to international capital and strategic energy partners.
- Lead with the capital thesis, not a generic country overview.
- Recommended sections:
  - Costa Rica as a transition platform.
  - From long-term energy contracts to structured cash-flow assets.
  - Why bankability requires governance, monitoring, risk allocation, and capital discipline.
  - Pathway toward refinancing, pooling, securitization, and capital-market participation.
  - How Trinomio helps partners structure the firm layer.
  - Evidence anchors from IEA or other approved sources once available.

`/en/the-trinomio-model`

- Purpose: explain the Trinomio model to international readers after they understand the Costa Rica opportunity.
- Keep the model practical:
  - Energy functions generate contractable value.
  - The firm layer governs execution and risk.
  - Capital requires bankable structures, not isolated projects.
  - The model supports scalability and capital recycling.

`/en/contact`

- Purpose: create a clean path for international partner inquiries.
- Recommended inquiry categories:
  - Development partnerships.
  - Investment and credit structuring.
  - DFI / climate capital collaboration.
  - Strategic energy partnerships.
  - SAFI / FICR and regional capital-market conversations.

## 9. Language and Claims Discipline

Use:

- pathway toward liquidity
- liquidity-oriented structuring
- capital recycling
- structured cash-flow assets
- bankable investment assets
- long-term energy contracts
- refinancing, pooling, securitization, and capital-market participation
- governed execution layer
- risk allocation
- monitoring and controls
- contractual cash flows

Avoid:

- Claims that Costa Rica already has a mature secondary liquidity market for PPAs.
- Claims that securitization is guaranteed or immediately available.
- Claims that all PPAs/EaaS contracts are automatically bankable.
- Overly broad claims about Costa Rica's energy system without a source.
- Direct translation of Spanish doctrinal language where international readers need a sharper investment thesis.

Preferred phrasing:

- `a pathway toward liquidity`
- `designed for future refinancing and pooling`
- `liquidity-oriented structuring`
- `a capital-recycling pathway`
- `structured to become bankable investment assets`

Phrasing to avoid:

- `liquid PPA market`
- `guaranteed securitization`
- `immediate secondary-market exit`
- `fully mature capital market for energy contracts`
- `risk-free cash flows`

## 10. Risks to Avoid

Strategic risks:

- Translating the full Spanish site and diluting the English message.
- Overloading the English navigation with glossary, insights, and local pages.
- Making the English site read like a generic renewable-energy developer website.
- Centering project origination while underplaying capital structuring.

Claims risks:

- Inventing IEA facts before the source exists.
- Overstating Costa Rica's current capital-market liquidity for PPAs or EaaS contracts.
- Treating securitization as a present market fact rather than a structuring pathway.
- Using language that implies guaranteed exits or guaranteed refinancing.

Implementation risks:

- Reusing Spanish navigation directly in English.
- Leaving English CTAs pointed only to Spanish pages.
- Using Spanish footer labels on English pages without adaptation.
- Creating too many English routes before the core narrative is validated.

## 11. Implementation Roadmap

Stage EN-1A: Source readiness

- Add the IEA Costa Rica profile source or another approved source package.
- Extract source-supported country, policy, and energy-system anchors.
- Decide which evidence belongs on the page and which belongs in internal notes only.

Stage EN-1B: Minimum English structure

- Create `/en/costa-rica-opportunity`.
- Lightly refine `/en` to point into the opportunity page.
- Add a small English navigation if needed.
- Keep Spanish site links available but secondary.

Stage EN-1C: Claims review

- Review all English copy for liquidity and securitization discipline.
- Remove any unsupported country-policy claims.
- Confirm that all Costa Rica evidence is source-backed.

Stage EN-1D: External-review readiness

- Validate responsive layout.
- Check English CTA paths.
- Confirm metadata for `/en` and `/en/costa-rica-opportunity`.
- Ensure the English site stands alone for international readers without requiring the Spanish site.

Later stages:

- Add `/en/the-trinomio-model` if international reviewers need a deeper model explanation.
- Add `/en/contact` if international inquiry flow needs a dedicated page.
- Consider selective English insights only after the core opportunity narrative is stable.

## 12. Final Recommendation

The minimum viable English version for external international review should include:

- `/en` as a concise English landing page.
- `/en/costa-rica-opportunity` as the primary strategic page.
- A very small English navigation.
- A clear route back to the Spanish site.
- No translated glossary.
- No bulk-translated insights.
- No unsupported IEA or Costa Rica policy claims.

The first implementation should prioritize `/en/costa-rica-opportunity`, supported by a light `/en` alignment. This gives international developers, investors, DFIs, banks, SAFI/FICR readers, and strategic energy partners a focused narrative: Costa Rica's energy transition can be understood as a platform for structured, bankable long-term energy cash flows with a pathway toward refinancing, pooling, securitization, and capital recycling.
