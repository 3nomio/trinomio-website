# Website EN Stage 1 Costa Rica Opportunity Implementation Validation

## 1. Summary of Implementation

Implemented the minimum viable English strategic-localization version for Stage EN-1.

- Kept `/en` as the English landing page.
- Lightly refined `/en` around Costa Rica as an energy-transition capital-structuring opportunity.
- Added `/en/costa-rica-opportunity` as the main international opportunity page.
- Added a minimal English micro-navigation with only `Opportunity` and `Español`.
- Kept the English experience concise, institutional, capital-market oriented, and separate from a full Spanish-site translation.

## 2. Files Changed

- `src/app/(en)/en/page.tsx`
- `src/app/(en)/en/costa-rica-opportunity/page.tsx`
- `src/components/EnglishMicroNav.tsx`
- `src/components/HomepagePathway.tsx`
- `00_System_Architecture/Website_EN_Stage_1_Costa_Rica_Opportunity_Implementation_Validation.md`

`src/components/HomepagePathway.tsx` was changed only for the existing English locale CTA copy and paths.

## 3. Route Created

- `/en/costa-rica-opportunity`

Build output confirms the route is statically generated.

## 4. IEA_CR_profile Source Handling

`IEA_CR_profile` was not found as a source file in the repository and was not used.

The page intentionally avoids introducing new IEA facts, quantitative country claims, or unsupported Costa Rica energy-policy claims. The `Why Costa Rica` section uses general opportunity framing only.

Placeholder for next evidence stage: add the IEA Costa Rica profile or another approved source package before adding country-specific evidence anchors.

## 5. Claim-Discipline Notes

The implementation uses careful language around:

- pathway toward liquidity
- liquidity-oriented structuring
- structured cash-flow assets
- bankable investment assets
- long-term energy contracts
- refinancing, pooling, securitization, and capital-market participation
- capital recycling

The implementation does not claim:

- that Costa Rica already has a mature secondary PPA market
- that liquidity is guaranteed
- that securitization is currently available or assured
- that all PPA/EaaS contracts are automatically bankable

## 6. Spanish Pages

No files under `src/app/(es)` were modified.

## 7. Translation Scope

No full Spanish-to-English translation was attempted. The English implementation is strategic localization only, focused on international developers, investors, DFIs / climate capital, banks, SAFI/FICR readers, and strategic partners.

## 8. npm run lint Result

Passed.

Command:

```bash
npm run lint
```

## 9. npm run build Result

Passed.

Command:

```bash
npm run build
```

Relevant build confirmation:

- `/en`
- `/en/costa-rica-opportunity`

## 10. Recommended Next English Stage

Stage EN-2 should add source-backed Costa Rica context before expanding the English site further.

Recommended next step:

1. Add the approved IEA Costa Rica profile or equivalent source package.
2. Extract stable evidence anchors for the opportunity page.
3. Re-run claims review around policy, energy-system, and market-structure statements.
4. Consider `/en/the-trinomio-model` only after the opportunity narrative is validated by external readers.
