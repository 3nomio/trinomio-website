import { ButtonLink } from "@/components/ButtonLink";
import { EnglishMicroNav } from "@/components/EnglishMicroNav";
import { HomepagePathway } from "@/components/HomepagePathway";
import { EngagementPlaybookV2SectionEN } from "@/components/EngagementPlaybookV2SectionEN";
import { PersonaRouterV2SectionEN } from "@/components/PersonaRouterV2SectionEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trinomio | Costa Rica Energy Capital Structuring",
  description:
    "Trinomio helps international partners structure Costa Rican energy cash flows into bankable investment assets with a pathway toward capital recycling.",
};

export default function EnglishHome() {
  return (
    <main className="relative overflow-hidden bg-trinomio-navy-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_24%,rgba(23,215,255,0.15),transparent_30rem),radial-gradient(circle_at_72%_70%,rgba(96,157,255,0.18),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
      <div className="orbital-field absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-26" />
      <EnglishMicroNav />
      <section className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] max-w-3xl place-items-center px-5 py-12 text-center">
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-cyan">
          Energy → Firm ← Capital
        </p>
        <h1 className="mt-8 text-4xl font-semibold leading-tight sm:text-6xl">
          Turn Costa Rican energy value into bankable infrastructure.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#E2E6E9]/90">
          Trinomio helps international partners convert distributed energy
          potential into governed, contractual, credit-tested cash flows with a
          pathway toward refinancing, pooling, securitization, and capital
          recycling.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/en/costa-rica-opportunity">
            Explore the Costa Rica opportunity -&gt;
          </ButtonLink>
          <ButtonLink href="/en/insights" variant="secondary">
            Read institutional insights -&gt;
          </ButtonLink>
        </div>
      </section>
      <HomepagePathway compact locale="en" />
      <EngagementPlaybookV2SectionEN />
      <PersonaRouterV2SectionEN />
    </main>
  );
}
