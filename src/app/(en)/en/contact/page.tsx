import { ButtonLink } from "@/components/ButtonLink";
import { EnglishMicroNav } from "@/components/EnglishMicroNav";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Trinomio | International Energy Structuring",
  description:
    "Contact Trinomio to explore Costa Rica's energy-transition opportunity and bankable long-term energy cash-flow assets.",
};

const audiences = [
  "International developers",
  "Investors",
  "DFIs / climate capital",
  "Banks",
  "SAFI / FICR readers",
  "Strategic energy partners",
  "Regional capital-market actors",
] as const;

export default function EnglishContactPage() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-trinomio-navy-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_14%,rgba(23,215,255,0.14),transparent_30rem),radial-gradient(circle_at_78%_18%,rgba(96,157,255,0.16),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
      <EnglishMicroNav active="contact" />

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.78fr_0.72fr] lg:items-start lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-cyan">
            International inquiry
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Contact Trinomio
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#E2E6E9]/90">
            Explore how long-term Costa Rican energy contracts can be structured
            into bankable cash-flow assets with a pathway toward capital
            recycling.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#E2E6E9]/86">
            Explore Costa Rica&apos;s energy-transition opportunity with
            Trinomio.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="mailto:oscar@3nomio.com?subject=International%20inquiry%20for%20Trinomio">
              Email Trinomio
            </ButtonLink>
            <ButtonLink href="/es/contacto" variant="secondary">
              Spanish institutional contact -&gt;
            </ButtonLink>
          </div>
        </div>

        <aside className="border border-white/12 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
            Who this page is for
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <span
                className="border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold leading-5 text-[#E2E6E9]/86"
                key={audience}
              >
                {audience}
              </span>
            ))}
          </div>
          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
              Email
            </p>
            <a
              className="mt-3 inline-flex text-lg font-semibold text-white transition hover:text-trinomio-cyan"
              href="mailto:oscar@3nomio.com"
            >
              oscar@3nomio.com
            </a>
          </div>
        </aside>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-trinomio-green">
              Inquiry guidance
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Keep the first message concise.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-[#E2E6E9]/88">
            <p>
              Tell us briefly who you are, the type of opportunity you are
              exploring, and whether your interest is development, investment,
              financing, strategic partnership, or market entry.
            </p>
            <p>
              After your message, Trinomio reviews the context and coordinates
              an initial conversation to assess the energy opportunity,
              counterparties, governance needs, and possible structuring path.
            </p>
            <p>
              The focus is liquidity-oriented structuring: long-term contracts,
              controls, and governance that can support bankable cash-flow
              assets and a pathway toward liquidity over time.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-12 sm:px-8">
        <nav
          aria-label="English contact page links"
          className="mx-auto flex max-w-7xl flex-wrap gap-3 text-sm font-semibold"
        >
          <Link
            className="border border-white/12 bg-white/[0.04] px-4 py-3 text-[#E2E6E9] transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan"
            href="/en"
          >
            Home
          </Link>
          <Link
            className="border border-white/12 bg-white/[0.04] px-4 py-3 text-[#E2E6E9] transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan"
            href="/en/costa-rica-opportunity"
          >
            Costa Rica Opportunity
          </Link>
          <Link
            className="border border-white/12 bg-white/[0.04] px-4 py-3 text-[#E2E6E9] transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan"
            href="/es"
          >
            Español
          </Link>
        </nav>
      </section>
    </main>
  );
}
