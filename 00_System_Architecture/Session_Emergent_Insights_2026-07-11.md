# Session Emergent Insights — Delta Over the Existing Canon

**Date:** 11 July 2026
**Purpose:** Attest, honestly and narrowly, what conceptual content *this working
session* produced that is **not** already contained in the three source documents.
This is a delta ledger, not a restatement of the doctrine. Items that merely repeat
existing concepts are excluded and listed under "What is NOT new."
**Status:** Candidate additions to the canon, pending integration into v2.3. The
overall construction is intentionally **left undenominated** for now (per instruction).

---

## A. Baseline — what the delta is measured against

The following three files are treated as the pre-existing canon. Anything already
stated in them is *not* counted as new here.

1. **Playbook Manifesto v2.2** — umbrella operating doctrine (13 Principles,
   Sense–Size–Transform, Four-Arena Map, Energy Fit-In, roles, SANSES, governance).
2. **Manifesto v2.2 — "The Energy–Capital Paradigm Shift"** — macro-causal *why*
   (structural forces → systemic risks → risk pricing → ΔTech/ΔReg/ΔCapital →
   capital reallocation → paradigm shift → `P(n,t)`).
3. **Operating System v0.3 — "From Macro Signal to Enterprise"** — execution *how*
   (`ET(n,t)`, seven-instrument Size dashboard, capital-allocation lens,
   `EFI = MEV/LCOE`, D=0, EE/SPV, FICR, EE–EP lifecycle, MOC@Y10).

---

## B. New concepts and relationships created this session

### B1. The monetization factor `m` and the `P(n,t) → MEV` bridge

The source docs define `P(n,t)` (localized marginal value) and `MEV` (monetizable
economic value) **separately** and never relate them. This session introduced the
explicit bridge:

```
MEV(n,t) = m(n,t) · P(n,t),        m(n,t) ∈ [0, 1]
```

`m` is the **capture / monetization factor**: the fraction of latent localized value
that can actually be converted to revenue. `P(n,t)` is a Sense-layer signal (latent
value that exists whether or not it can be captured); `MEV` is its Size-layer,
contract-gated realization. **New:** the relationship itself and the Sense→Size
reading of it.

### B2. `m` as a product of three independent gates (per-function)

```
m(n,t) = 1{ΔReg permits the function} · τ(n,t) · κ(n,t)
         └ regulatory gate ┘            └ tech ┘ └ commercial ┘
```

- `τ(n,t) ∈ [0,1]` — technical deliverability at that node/time (ΔTech).
- `κ(n,t) ∈ [0,1]` — commercial capture: a paying counterparty under a bankable
  contract.
- The regulatory term is often a **hard binary**: if the function is illegal to
  monetize, the gate is `0`, so `MEV = 0` even when `P(n,t) > 0` (value stranded).
- **`m` is per-function.** Each function inside `P(n,t)` (energy, capacity,
  flexibility, ancillary services, congestion relief, resilience…) carries its own
  gate vector, so a regulatory change opens only the functions it legalizes.

**New:** the scalar capture factor, its three-gate decomposition, the hard-zero
regulatory clamp, and per-function gating. None of this is in the source docs.

### B3. The EFI ceiling relationship (EFI ↔ P(n,t) ↔ D=0)

Combining B1–B2 with the existing `EFI = MEV/LCOE`:

```
EFI(n,t) = MEV(n,t)/LCOE = m(n,t)·P(n,t)/LCOE  ≤  P(n,t)/LCOE
```

- `P(n,t)/LCOE` is the **theoretical ceiling** of EFI, *not* its definition.
- Equality (`EFI = P(n,t)/LCOE`) holds **iff `m → 1`** — all three gates open — which
  is exactly the (corrected) **D=0** condition for that function.
- Therefore the gap `P(n,t)/LCOE − EFI` **is** the monetization gap that Trinomio's
  structuring work (ΔReg pathway + commercial instrument) exists to close.

This resolves a live question raised this session ("is `EFI ≈ P(n,t)/LCOE`?"): yes,
but only as an upper-bound / D=0 limit, never as the general identity.

**Open sub-item raised, not yet decided:** whether `LCOE` should also be localized as
`LCOE(n,t)` (and `LCOS` for storage-delivered functions), since cost is node/time
dependent too.

**New:** the inequality, the ceiling interpretation, and the EFI→ceiling⟺D=0 link.

### B4. Expediente 23.414 as the worked ΔReg example

Fact (supplied this session): **Expediente 23.414 = direct energy-market access for
DERs.** Framed through B2–B3:

> Before enactment, DER-delivered functions carry positive `P(n,t)` but no legal route
> to sell — the regulatory gate is shut, so `m = 0`, `MEV = 0`, `EFI ≈ 0`; the value is
> stranded regardless of resource quality. Enacting 23.414 opens direct market access,
> lifting that gate so `m` can rise above 0: `MEV = m·P(n,t)` turns positive and
> `EFI = MEV/LCOE` climbs toward its ceiling `P(n,t)/LCOE`. It reaches the ceiling only
> when the ΔTech (`τ`) and commercial (`κ`) gates also open — i.e. at **D=0**. The law
> is **necessary, not sufficient**, and is the legislative-scale analogue of the
> S1-2026 POASEN periphery double-fire already in the Playbook.

**New:** 23.414 itself (absent from all source docs) and its m-gate / EFI-ceiling
framing. (The POASEN double-fire it is contrasted with is *not* new — it is Playbook
Principle 7.)

### B5. EP = Empresa Promovida (correction + lifecycle)

The source docs conflict on "EP": Operating System v0.3 uses **EP = Energy Project**
(pre-FICR); the Playbook uses **Empresa de Portafolio** for an EE inside the FICR
portfolio. This session established the canonical reading:

- **EP = Empresa Promovida** — the denomination an **EE (Empresa Estructurada)** takes
  **once FICR selects it**.
- **Lifecycle:** `(0→1) ≈ EE` (formation/incubation, pre-FICR) → `(1→7)/Y10 ≈ EP`
  (post-selection compounding hold to the Y10 MOC realization).
- **Supersedes** the "Empresa de Portafolio" label (same concept) and **corrects** the
  Operating System's "Energy Project" usage. Consequence: in the canonical chain, EP
  moves to *after* FICR selection; SPVs remain the pre-selection project vehicles.

**New:** the Empresa Promovida denomination, the lifecycle notation, and the
supersession/correction across the two docs.

### B6. Cross-document reconciliation set (the "canon seams")

The three files were written independently and were never reconciled against each
other. This session produced the **new relationships that make them one consistent
canon** — content that exists in no single source:

1. **D=0** — Operating System's *enterprise-completeness* definition (no valuable
   function unmonetized, no material risk unallocated) is canonical; the Playbook's
   *clocks-aligned* phrasing is retained as the **FICR deployment-timing gate**. Two
   facets of one condition.
2. **Two "seven-instrument dashboards"** are disambiguated into **two distinct
   panels**: the **Sense Signal Panel** (Playbook's Costa-Rica market instruments) and
   the **Size Diligence Panel** (Operating System's diligence dimensions). Both
   retained; the naming collision resolved.
3. **Field vocabulary** — `ΔTech/ΔReg/ΔCapital` is the **primary causal spine**; the
   Playbook's "four clocks" is retained as a **complementary tempo/desynchronization
   lens** (finance-clock ≈ ΔCapital; the culture/trust clock is kept because it has no
   Δ analog).
4. **EP mapping** — as B5, reconciling Operating System "EP" vs. Playbook "Empresa de
   Portafolio" and the SPV chain.

**New:** these four resolutions establish relationships *between* the documents that
none of them contains individually.

### B7. Why/How boundary = Public/Private (disclosure) axis

The source docs state the Manifesto⟺Operating-System *why/how* boundary (Manifesto §11,
OS §16) — that part is **not** new. What this session added:

- The boundary **also maps onto an IP-disclosure axis**: the Manifesto (why) is the
  publishable thesis; the Operating System (how) is the protected method.
- Disclosure is a **projection choice** analogous to B1:
  `PublicArtifact = projection(full body | audience)`, i.e. the same `m`-like gating —
  expose the thesis, withhold the operating method.

**New:** the why/how → public/private mapping and the projection analogy. (No name is
assigned to the "full body" here, per instruction.)

---

## C. What is NOT new (excluded for honest scope)

To keep this attestation credible, the following were used or restated this session
but originate in the source docs and are **not** counted as session-created:

- Sense–Size–Transform; `ET(n,t)` / `Opportunity(n,t)`; the base identity
  `EFI = MEV/LCOE`; `P(n,t)` and its function list; the two individual D=0 definitions;
  the fade loop (`ROIC>WACC → Madden fade → Transform → reset → MOC`).
- EE vs. SPV roles; `Capital → EE/HoldCo → SPV`; FICR as the regulated vehicle; PVGO
  and `MOC = f(intellectual capital, relational capital)`; the Value-Drivers figures
  (5.14x equity MOC, 34.5% IRR, 66.5% PVGO).
- Four-Arena Map; Energy Fit-In; periphery indicators and the two-indicator trigger;
  the S1-2026 POASEN reform; SANSES / Coopesantos; file & decision governance.

---

## D. Provenance and status

- **Provenance:** mixed and co-created. B5 (EP = Empresa Promovida) and the B4 fact
  (23.414 = DER market access) are **doctrinal rulings supplied this session**; B1–B3,
  the B4 framing, B6, and B7 are **formalizations/integrations derived** in dialogue
  from the existing canon. All are session output.
- **Status:** candidate additions, **not yet integrated** into any source file. On
  approval they fold into the v2.3 build — B1–B4 into the Size section of the Operating
  System pillar, B5 into the glossary/lifecycle, B6 into the shared spine, B7 into the
  front matter / disclosure policy.
- **Deferred:** the denomination of the overall construction, and the `LCOE(n,t)/LCOS`
  localization question (B3).

---

## E. Attestation, in one line

> This session created no new *primitives* — it created the **relationships and
> corrections that close the system**: the `m`-gated `P(n,t) → MEV` bridge, the
> `EFI ≤ P(n,t)/LCOE` ceiling tied to D=0, the 23.414 ΔReg worked example, the
> EP = Empresa Promovida correction, the four cross-document reconciliations, and the
> why/how → public/private disclosure mapping.
