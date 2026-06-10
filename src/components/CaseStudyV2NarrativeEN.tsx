export function CaseStudyV2NarrativeEN() {
  return (
    <article className="prose prose-invert max-w-none space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-8 sm:p-12">
        <div className="orbital-field absolute -right-24 -top-24 size-80 rounded-full opacity-16" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
            How it works
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Guayabo: Build, measure, doors
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#E2E6E9]/90">
            How land and a tariff window became a company worth $350M, earning 12–15% for the owner, and designed to grow, adapt, and refinance.
          </p>
        </div>
      </section>

      {/* The Setup */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-green">
            What existed
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Land. Energy. Tariff. Demand.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "50+ hectares",
              description: "Productive land, road access, near load",
            },
            {
              label: "Strong irradiance",
              description: "P50/P90 validated, consistent",
            },
            {
              label: "Feed-in tariff",
              description: "Regulatory window, institutional terms",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
            >
              <p className="text-sm font-semibold text-trinomio-cyan">{item.label}</p>
              <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/85">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border-2 border-trinomio-green/30 bg-trinomio-green/5 p-6">
          <p className="text-sm text-[#E2E6E9]/90">
            <span className="font-semibold text-trinomio-green">All the ingredients existed.</span> But nobody knew how to structure them so all four actors (landowner, developer, bank, capital) would trust it and commit.
          </p>
        </div>
      </section>

      {/* PHASE 1: BUILD */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
            Phase 1
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">BUILD THE COMPANY</h2>
        </div>

        <div className="rounded-lg border border-trinomio-cyan/30 bg-trinomio-cyan/5 p-6">
          <p className="text-sm font-semibold text-white">
            We didn&apos;t ask: &quot;Can we build solar here?&quot; (obvious yes)
          </p>
          <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/90">
            We asked: <span className="font-semibold">&quot;Can we build a company that earns money for twenty years, where every actor trusts the numbers and knows their place?&quot;</span>
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-white">Structure we designed:</p>
          {[
            {
              name: "Land company",
              desc: "Owns and leases the land to the energy company",
            },
            {
              name: "Energy company",
              desc: "Builds, operates, and measures the solar",
            },
            {
              name: "Governance",
              desc: "Clear contracts, clear waterfall (who gets what), aligned incentives",
            },
            {
              name: "Reporting",
              desc: "One dashboard, updated monthly, visible to all partners",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-4"
            >
              <p className="text-sm font-semibold text-trinomio-cyan">{item.name}</p>
              <p className="mt-2 text-sm text-[#E2E6E9]/85">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border-2 border-trinomio-cyan/40 bg-white/[0.055] p-6">
          <p className="text-sm font-semibold text-white">
            Result: <span className="text-trinomio-cyan">A company, not a project.</span>
          </p>
        </div>
      </section>

      {/* PHASE 2: MEASURE */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#609DFF]">
            Phase 2
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">MEASURE EVERY DAY</h2>
        </div>

        <div className="rounded-lg border border-[#609DFF]/30 bg-[#609DFF]/5 p-6">
          <p className="text-sm font-semibold text-white">
            Not a spreadsheet guess. Real measurement.
          </p>
          <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/90">
            Monthly we tracked: kWh generated (from meters) + revenue earned (from actual tariff payments) + costs incurred (operations, maintenance, finance) = net cash flow (did it work this month?).
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
          <p className="text-sm font-semibold text-white mb-3">When numbers weakened:</p>
          <ul className="space-y-2">
            {[
              "We knew immediately",
              "We acted before money was lost",
              "We adjusted (maintenance, operations, technology)",
              "Everyone could see the same truth",
            ].map((item) => (
              <li key={item} className="text-sm text-[#E2E6E9]/85 flex gap-2">
                <span className="text-[#609DFF] flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border-2 border-[#609DFF]/40 bg-white/[0.055] p-6">
          <p className="text-sm font-semibold text-white">
            Result: <span className="text-[#609DFF]">Everyone trusts the numbers because they&apos;re real and current.</span>
          </p>
        </div>
      </section>

      {/* PHASE 3: DOORS */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-green">
            Phase 3
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">DESIGN WITH DOORS</h2>
        </div>

        <div className="rounded-lg border border-trinomio-green/30 bg-trinomio-green/5 p-6">
          <p className="text-sm font-semibold text-white">
            We built the company with optionality from day one.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              door: "Grow",
              desc: "Right to add more solar at the same site",
            },
            {
              door: "Upgrade",
              desc: "Right to switch to storage when batteries got cheaper",
            },
            {
              door: "Recycle",
              desc: "Right to refinance at year 5 (recycle capital)",
            },
            {
              door: "Exit",
              desc: "Right to sell as a package to larger fund",
            },
            {
              door: "Multiply",
              desc: "Right to replicate structure elsewhere",
            },
            {
              door: "Evolve",
              desc: "Right to add other cash flows beyond energy",
            },
          ].map((item) => (
            <div
              key={item.door}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
                {item.door}
              </p>
              <p className="mt-2 text-sm text-[#E2E6E9]/85">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border-2 border-trinomio-green/40 bg-white/[0.055] p-6">
          <p className="text-sm font-semibold text-white">
            Result: <span className="text-trinomio-green">Company worth more because it can move and adapt. Those doors are worth real money.</span>
          </p>
        </div>
      </section>

      {/* THE RESULTS */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-green">
            What it earned
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            The numbers that matter
          </h2>
        </div>

        <div className="overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.035]">
                <th className="px-4 py-3 text-left font-semibold text-white">Who</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Got</th>
                <th className="px-4 py-3 text-left font-semibold text-[#E2E6E9]/80">Why it works</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  who: "Landowner",
                  got: "12–15% annual return on land",
                  why: "Land that was earning 1% now earns 12%. They stay owner.",
                },
                {
                  who: "Developer",
                  got: "Upside + repeat projects",
                  why: "Built once, benefits ongoing. Next project is cheaper.",
                },
                {
                  who: "Bank",
                  got: "1.35x DSCR, monthly reporting, security",
                  why: "Real numbers, real safety. They know the truth.",
                },
                {
                  who: "Trinomio",
                  got: "Structuring fee + carried interest",
                  why: "Aligned with success. We win when they win.",
                },
              ].map((row) => (
                <tr key={row.who} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-semibold text-white">{row.who}</td>
                  <td className="px-4 py-3 text-trinomio-cyan">{row.got}</td>
                  <td className="px-4 py-3 text-[#E2E6E9]/75">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* THE PATTERN */}
      <section className="space-y-6">
        <div className="rounded-lg border-2 border-trinomio-green/40 bg-white/[0.055] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-green mb-4">
            The signal
          </p>
          <h2 className="text-3xl font-semibold text-white">
            This is the pattern that scales
          </h2>

          <div className="mt-8 space-y-3">
            {[
              "Raw potential (land + tariff + technology)",
              "↓ BUILD a company (governance, contracts, doors)",
              "↓ MEASURE every day (real numbers, not guesses)",
              "↓ Design for doors (flexibility, optionality, growth)",
              "↓ Worth more money (because it can adapt and survive)",
            ].map((step) => (
              <p key={step} className="text-sm leading-6 text-[#E2E6E9]/90 font-semibold">
                {step}
              </p>
            ))}
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-base leading-7 text-[#E2E6E9]/90">
            <span className="font-semibold text-white">Guayabo proved:</span> When you build a company instead of a project, measure instead of guess, and design instead of lock, everyone wins. This pattern repeats. It scales. It&apos;s the future of energy finance.
          </p>
        </div>
      </section>
    </article>
  );
}
