export function CaseStudyNarrativeEN() {
  return (
    <article className="prose prose-invert max-w-none space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-8 sm:p-12">
        <div className="orbital-field absolute -right-24 -top-24 size-80 rounded-full opacity-16" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
            Case Study
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Guayabo SANSES: How land with tariff becomes institutional asset
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#E2E6E9]/90">
            First Structured Enterprise incubated by Trinomio. From greenfield potential to
            bankable project finance funding.
          </p>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-green">
            The Opportunity
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Three elements of strategic potential converge
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Land",
              description: "50+ hectares of productive land, road access, proximity to load",
            },
            {
              label: "Resource",
              description: "Consistent irradiance, validated P50/P90 profile via SAM modeling",
            },
            {
              label: "Regulation",
              description: "BTM window / feed-in tariff with institutional terms",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/85">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-white/12 bg-white/[0.035] p-6 text-sm leading-7 text-[#E2E6E9]/90">
          <p>
            <span className="font-semibold text-white">The potential is not technical.</span>{" "}
            It&apos;s institutional: Are there actors, regulation, and demand ready to make this work{" "}
            <em>right now</em>?
          </p>
          <p className="mt-3">
            <span className="font-semibold text-white">In Guayabo: yes.</span>
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Why this needed structure
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              actor: "Developer",
              position: "Can build solar, but:",
              issues: [
                "No vehicle for multiple stakeholders (landowner ≠ developer ≠ financer)",
                "Banks won't finance without clear institutional SPV",
                "Isolated project doesn't scale; next project requires starting over",
                "Capital-constrained and time-bound",
              ],
            },
            {
              actor: "Landowner",
              position: "Has productive asset, but:",
              issues: [
                "Current income low; energy potential dormant",
                "No direct access to development or operating capital",
                "Can't capture upside if developer leads",
              ],
            },
            {
              actor: "Capital Provider",
              position: "Seeks institutional deals, but:",
              issues: [
                "Developers offer only project-by-project Project Finance",
                "No platform; no portfolio; no scale",
                "Too risky or small to underwrite individually",
              ],
            },
          ].map((section) => (
            <div
              key={section.actor}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-6"
            >
              <p className="text-sm font-semibold text-white">
                {section.actor}&apos;s position: {section.position}
              </p>
              <ul className="mt-3 space-y-2">
                {section.issues.map((issue) => (
                  <li key={issue} className="text-sm leading-6 text-[#E2E6E9]/85 flex gap-2">
                    <span className="text-trinomio-cyan flex-shrink-0">✗</span>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-lg border-2 border-trinomio-green/30 bg-trinomio-green/5 p-6">
          <p className="text-sm font-semibold text-trinomio-green">
            The Bottleneck:{" "}
            <span className="text-white">
              Potential + regulation + capital existed. The Firm Layer that connected them was
              missing.
            </span>
          </p>
        </div>
      </section>

      {/* Trinomio's Intervention */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#609DFF]">
            Trinomio&apos;s Intervention
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Firm Layer Architecture
          </h2>
        </div>

        <div className="space-y-6">
          {/* Governance Layer */}
          <div className="rounded-lg border border-[#609DFF]/30 bg-[#609DFF]/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#609DFF]">
              Governance Layer (Structured Enterprise)
            </p>
            <div className="mt-4 space-y-3">
              {[
                "HoldCo: Land owner + development rights",
                "Project SPV: Energy assets (panels, inverters, metering)",
                "Use Agreement: Land → SPV, with clear risk/benefit waterfall",
                "Unified Reporting: One financial dashboard for land, energy, and capital",
              ].map((item) => (
                <p key={item} className="text-sm leading-6 text-[#E2E6E9]/85 flex gap-2">
                  <span className="text-[#609DFF] flex-shrink-0">◆</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Bankability Layer */}
          <div className="rounded-lg border border-trinomio-green/30 bg-trinomio-green/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-trinomio-green">
              Bankability Layer (Project Finance)
            </p>
            <div className="mt-4 space-y-3">
              {[
                "PPA Structure: Fixed off-take demand or guaranteed regulatory tariff",
                "DSCR Target: 1.25x minimum for senior debt; monthly reporting covenant",
                "Security: Rights to energy flow, contractual cash flows, insurance",
                "WACC: Blended cost of capital reflecting construction + operations + regulatory risk",
              ].map((item) => (
                <p key={item} className="text-sm leading-6 text-[#E2E6E9]/85 flex gap-2">
                  <span className="text-trinomio-green flex-shrink-0">◆</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Capital Layer */}
          <div className="rounded-lg border border-trinomio-cyan/30 bg-trinomio-cyan/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
              Capital Layer (Institutional)
            </p>
            <div className="mt-4 space-y-3">
              {[
                "First Close: Project Finance debt (national bank or BCIE-aligned lender)",
                "Second Tranche: Trinomio platform equity (carried interest aligned with performance)",
                "Third (Future): FICR intermediation when portfolio reaches 5–10 similar assets",
              ].map((item) => (
                <p key={item} className="text-sm leading-6 text-[#E2E6E9]/85 flex gap-2">
                  <span className="text-trinomio-cyan flex-shrink-0">◆</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-green">
            The Results
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Figures that prove the model works
          </h2>
        </div>

        <div className="overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.035]">
                <th className="px-4 py-3 text-left font-semibold text-white">Metric</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Value</th>
                <th className="px-4 py-3 text-left font-semibold text-[#E2E6E9]/80">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  metric: "Investable asset size",
                  value: "$250–350M USD",
                  why: "Banks, funds, FICR can underwrite",
                },
                {
                  metric: "Project Finance debt",
                  value: "$180–220M @ WACC 7.5%",
                  why: "Senior debt sized to DSCR",
                },
                {
                  metric: "Equity required",
                  value: "$70–100M",
                  why: "Landowner + developer + Trinomio",
                },
                {
                  metric: "DSCR (P50)",
                  value: "1.35x",
                  why: "Debt covenant compliance",
                },
                {
                  metric: "IRR to landowner",
                  value: "12–14%",
                  why: "Land monetized above low baseline",
                },
                {
                  metric: "Developer payback",
                  value: "Year 5",
                  why: "Recoup dev costs + capture upside",
                },
                {
                  metric: "Trinomio carry",
                  value: "2–3% performance uplift",
                  why: "Aligned with success",
                },
              ].map((row) => (
                <tr key={row.metric} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-semibold text-white">{row.metric}</td>
                  <td className="px-4 py-3 text-trinomio-cyan">{row.value}</td>
                  <td className="px-4 py-3 text-[#E2E6E9]/75">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
          <p className="text-sm font-semibold text-white">Timeline:</p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-[#E2E6E9]/85">
            <li className="flex gap-2">
              <span className="font-semibold text-white flex-shrink-0">Months 1–2:</span>
              Due diligence, architecture definition
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-white flex-shrink-0">Months 3–4:</span>
              Documentation, permitting, construction financing
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-white flex-shrink-0">Months 5–8:</span>
              Construction
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-white flex-shrink-0">Month 9:</span>
              Operations + draw-down final debt tranches
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-white flex-shrink-0">Year 1+:</span>
              Operational reporting, cash distribution, refinance optionality
            </li>
          </ul>
        </div>
      </section>

      {/* Key Insights */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
            Key Insights
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Why this model works
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Landowner wins because:",
              points: [
                "Asset that was generating low income now generates 12–14% IRR",
                "Retains land ownership; doesn't become a 'loss' story",
                "Clear contractual waterfall (knows % of energy revenue is theirs)",
                "Exit optionality after Year 5 (refinance or hold long-term)",
              ],
            },
            {
              title: "Developer wins because:",
              points: [
                "Avoids being the equity provider for the whole deal",
                "Gets EPC contract + O&M contract + upside participation",
                "Can move to next project faster (not locked into 15-year O&M)",
                "Platform provides pipeline (next Guayabos exist; don't need to hunt)",
              ],
            },
            {
              title: "Capital provider wins because:",
              points: [
                "Structured bankable asset with DSCR covenant",
                "Clear exit (refinance in Year 5–7 to FICR, or hold for 15+ year spread)",
                "Scaling to portfolio (not a one-off deal)",
                "Long-term returns + refinance optionality",
              ],
            },
            {
              title: "Trinomio wins because:",
              points: [
                "Structuring fee (upfront)",
                "Carried interest (aligned with DSCR, IRR outcomes over time)",
                "Platform seat (next capital deployment on Guayabo's profits flows through us)",
                "Proof of concept (enables fundraising for next 10 Guayabos)",
              ],
            },
          ].map((section) => (
            <div
              key={section.title}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-6"
            >
              <p className="text-sm font-semibold text-white">{section.title}</p>
              <ul className="mt-4 space-y-2">
                {section.points.map((point) => (
                  <li key={point} className="text-xs leading-5 text-[#E2E6E9]/85 flex gap-2">
                    <span className="text-trinomio-green flex-shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* The Signal */}
      <section className="space-y-6">
        <div className="rounded-lg border-2 border-trinomio-green/40 bg-white/[0.055] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-green">
            The Guayabo Signal
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            This isn&apos;t about one solar farm. It&apos;s about the institutional pattern.
          </h2>

          <div className="mt-8 space-y-3">
            {[
              "Greenfield opportunity (land + regulation + demand)",
              "Converted to brownfield asset (PPA + DSCR + bankability)",
              "Converted to capital instrument (Project Finance debt + platform equity)",
              "Ready to aggregate into portfolio (FICR, securitization, refinance)",
            ].map((step) => (
              <p key={step} className="text-sm leading-6 text-[#E2E6E9]/90 flex gap-3">
                <span className="font-semibold text-trinomio-green">✓</span>
                {step}
              </p>
            ))}
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-base leading-7 text-[#E2E6E9]/90">
            <span className="font-semibold text-white">The thesis works</span> because actors
            who needed each other (landowner, developer, lender) now have a language and
            structure to dance together.
          </p>
        </div>
      </section>

      {/* From Theory to Practice */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
            From Theory to Practice
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            How potential becomes scale
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Potential → Structure",
              description: "Firm Layer, not just engineering",
            },
            {
              title: "Structure → Bankable",
              description: "DSCR, covenants, security",
            },
            {
              title: "Bankable → Scalable",
              description: "Portfolio aggregation, FICR entry",
            },
            {
              title: "Scalable → Capital Markets",
              description: "Refinance, securitization, derivatives",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
            >
              <p className="text-sm font-semibold text-trinomio-cyan">{step.title}</p>
              <p className="mt-2 text-xs leading-5 text-[#E2E6E9]/80">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
