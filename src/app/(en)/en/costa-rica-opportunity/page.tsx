import { ButtonLink } from "@/components/ButtonLink";
import { EnglishMicroNav } from "@/components/EnglishMicroNav";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Costa Rica Energy Transition Opportunity | Trinomio",
  description:
    "Costa Rica's energy transition as a capital-market opportunity for structured cash-flow assets, bankable contracts, and capital recycling.",
};

const audienceCards = [
  {
    title: "Developers",
    copy: "Partners seeking local structuring capacity, governed execution, and financeable contract architecture.",
  },
  {
    title: "Investors",
    copy: "Capital providers evaluating long-term energy contracts as structured cash-flow assets.",
  },
  {
    title: "DFIs / climate capital",
    copy: "Institutions looking for disciplined pathways from transition need to bankable deployment.",
  },
  {
    title: "Banks and SAFI/FICR actors",
    copy: "Credit and fund-vehicle readers focused on risk allocation, monitoring, refinancing, and pooling.",
  },
  {
    title: "Strategic partners",
    copy: "Energy, infrastructure, and regional partners exploring capital-market participation over time.",
  },
] as const;

const structuringSteps = [
  "Structure asset",
  "Govern cash flow",
  "Compress risk",
  "Refinance, pool, securitize, or transfer into capital-market vehicles",
] as const;

export default function CostaRicaOpportunityPage() {
  return (
    <main className="relative overflow-hidden bg-trinomio-navy-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_8%,rgba(23,215,255,0.13),transparent_28rem),radial-gradient(circle_at_78%_18%,rgba(96,157,255,0.14),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
      <EnglishMicroNav active="opportunity" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_0.62fr] lg:items-end lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-cyan">
            Costa Rica opportunity
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl">
            Costa Rica&apos;s Energy Transition as a Capital-Market Opportunity
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#E2E6E9]/90">
            Trinomio helps international partners convert long-term energy
            contracts into structured, bankable cash-flow assets with a pathway
            toward capital recycling.
          </p>
        </div>

        <div className="border border-white/12 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
            Energy → Firm ← Capital
          </p>
          <p className="mt-4 text-xl font-semibold leading-tight text-white">
            Trinomio is the local structuring partner that connects energy
            potential, governed execution, and capital discipline.
          </p>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
          <SectionHeading
            eyebrow="Opportunity thesis"
            title="Not only project development. Capital structuring."
            description="Costa Rica's energy transition can be read as a platform for long-term contractual cash flows. The strategic question is how those cash flows are governed, risk-adjusted, and structured so they can become bankable investment assets."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-xl font-semibold text-white">
                Traditional model
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/84">
                Build asset → sign PPA/EaaS → hold to maturity.
              </p>
            </article>
            <article className="border border-trinomio-cyan/24 bg-trinomio-cyan/10 p-5">
              <h2 className="text-xl font-semibold text-white">
                Trinomio-oriented model
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/88">
                Structure asset → govern cash flow → compress risk → create a
                pathway toward liquidity and faster capital recycling.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1fr] lg:py-20">
        <SectionHeading
          eyebrow="Why Costa Rica"
          title="A focused transition context for international capital"
          description="For Stage EN-1, the country context is framed carefully and generally. The page does not introduce unsupported IEA or policy facts until the requested Costa Rica profile source is added and reviewed."
        />
        <div className="space-y-5 text-base leading-7 text-[#E2E6E9]/88">
          <p>
            Costa Rica gives international developers, investors, DFIs, banks,
            SAFI/FICR readers, and strategic energy partners a compact market
            context for evaluating how energy-transition execution can connect
            to capital-market discipline.
          </p>
          <p>
            The opportunity is not presented as a mature secondary PPA market.
            It is a liquidity-oriented structuring thesis: design long-term
            energy contracts, monitoring, controls, and risk allocation so that
            future refinancing, pooling, securitization, or transfer becomes
            more credible over time.
          </p>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Structured cash-flow assets"
            title="From long-term PPAs to capital-market participation"
            description="Long-term PPA and EaaS contracts do not become bankable automatically. They need governance, underwriting discipline, enforceable controls, and an execution layer that capital can evaluate."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {structuringSteps.map((step, index) => (
              <article
                className="min-h-40 border border-white/10 bg-white/[0.04] p-5"
                key={step}
              >
                <span className="text-sm text-trinomio-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-6 text-lg font-semibold leading-tight text-white">
                  {step}
                </h2>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-base leading-7 text-[#E2E6E9]/88">
            The target is not a guaranteed exit. It is a capital-recycling
            pathway: structure the cash-flow asset today so future refinancing,
            pooling, securitization, and capital-market participation can be
            evaluated with stronger institutional evidence.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Who this is for"
          title="International partners reading energy through capital discipline"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {audienceCards.map((card) => (
            <article
              className="border border-white/10 bg-white/[0.04] p-5"
              key={card.title}
            >
              <h2 className="text-lg font-semibold text-white">{card.title}</h2>
              <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/84">
                {card.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 bg-white/[0.03] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Trinomio's role"
            title="The governed firm layer between energy and capital"
            description="Trinomio works as the local structuring partner for energy potential that needs to become executable, monitored, risk-compressed, and financeable."
          />
          <div className="border border-trinomio-cyan/22 bg-trinomio-cyan/10 p-6">
            <p className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Energy → Firm ← Capital
            </p>
            <p className="mt-5 text-base leading-7 text-[#E2E6E9]/88">
              The firm layer converts long-term energy contracts into structured
              cash-flow assets that banks, funds, DFIs, strategic partners, and
              regional capital-market actors can underwrite with greater
              discipline.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/en/contact">
                Explore Costa Rica&apos;s energy-transition opportunity with
                Trinomio -&gt;
              </ButtonLink>
              <ButtonLink href="/en" variant="secondary">
                Back to English overview -&gt;
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
