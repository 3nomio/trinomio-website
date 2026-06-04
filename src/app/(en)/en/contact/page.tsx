import { ButtonLink } from "@/components/ButtonLink";
import { EnglishMicroNav } from "@/components/EnglishMicroNav";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Trinomio | International Energy Structuring",
  description:
    "Contact Trinomio to explore Costa Rica's energy-transition opportunity and bankable long-term energy cash-flow assets.",
};

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
            Trinomio by emailing Oscar at oscar@3nomio.com.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="mailto:oscar@3nomio.com?subject=International%20inquiry%20for%20Trinomio">
              Email Trinomio: oscar@3nomio.com
            </ButtonLink>
            <ButtonLink href="/es/contacto" variant="secondary">
              Spanish institutional contact, if needed -&gt;
            </ButtonLink>
          </div>
        </div>

        <aside className="border border-trinomio-cyan/24 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
          <div className="border-b border-white/10 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
              Primary contact
            </p>
            <a
              className="mt-3 inline-flex text-2xl font-semibold leading-tight text-white transition hover:text-trinomio-cyan"
              href="mailto:oscar@3nomio.com?subject=International%20inquiry%20for%20Trinomio"
            >
              oscar@3nomio.com
            </a>
            <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/82">
              Best path for international inquiries about energy-transition
              structuring, bankable cash-flow assets, and capital recycling.
            </p>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
            Who this page is for
          </p>
          <div className="mt-5 space-y-4">
            <div className="border-l-2 border-trinomio-cyan/40 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-trinomio-cyan">
                Financial institutions / SAFIs
              </p>
              <p className="mt-2 text-xs leading-5 text-[#E2E6E9]/82">
                Energy transition deal flow that doesn&apos;t reach you
                structured. Trinomio converts it into DSCR-tested, FICR-ready
                portfolios with regulated cooperative counterparties.
              </p>
            </div>
            <div className="border-l-2 border-trinomio-green/40 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-trinomio-green">
                Strategic energy partners
              </p>
              <p className="mt-2 text-xs leading-5 text-[#E2E6E9]/82">
                Developers, DFIs, banks, and regional capital actors exploring
                Costa Rica&apos;s structured energy asset pipeline.
              </p>
            </div>
          </div>
          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
              Secondary route
            </p>
            <Link
              className="mt-3 inline-flex text-sm font-semibold text-[#E2E6E9] transition hover:text-trinomio-cyan"
              href="/es/contacto"
            >
              Spanish institutional contact -&gt;
            </Link>
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
