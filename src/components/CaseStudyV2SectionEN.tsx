import { CaseStudyV2NarrativeEN } from "./CaseStudyV2NarrativeEN";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { OrbitalDivider } from "./OrbitalDivider";
import { ScrollNavigation } from "./ScrollNavigation";
import { spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guayabo Case Study | Trinomio",
  description:
    "How Trinomio built a company from land and a tariff window. Real measurement. Real results. Designed to grow.",
};

export function CaseStudyV2SectionEN() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <ScrollNavigation indexLabel="↑ Back to top" menuHref="/en" menuLabel="← Home" />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 text-white sm:px-8 lg:py-32">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(23,215,255,0.16),transparent_30rem),radial-gradient(circle_at_78%_28%,rgba(96,157,255,0.2),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="adaptive-grid absolute inset-0 z-0 opacity-50" />
          <div className="orbital-field orbital-drift absolute right-[-14rem] top-16 z-0 size-[42rem] rounded-full opacity-32" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-cyan">
              How we work
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Build. Measure. Doors.
            </h1>
            <p className="mt-8 text-lg leading-8 text-[#E2E6E9]/92">
              Land and a tariff window became a company worth $350M. The story of what we build, how we know it&apos;s working, and why it&apos;s designed to grow.
            </p>
          </div>
        </section>

        <OrbitalDivider />

        {/* Case Study Content */}
        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field absolute -left-28 top-20 size-96 rounded-full opacity-16" />
          <div className="relative mx-auto max-w-4xl">
            <CaseStudyV2NarrativeEN />
          </div>
        </section>

        <OrbitalDivider />

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-20 sm:px-8 lg:py-28">
          <div className="orbital-field absolute right-[-10rem] top-16 size-96 rounded-full opacity-22" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Your energy potential has a structure waiting.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#E2E6E9]/90">
              Whether you&apos;re a developer, landowner, institution, or capital provider, we build companies that measure honestly and grow sustainably.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/en/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-trinomio-cyan px-6 py-3 font-semibold text-black transition hover:bg-trinomio-cyan/90"
              >
                Let&apos;s talk
                <span>→</span>
              </a>
              <a
                href="/en"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40"
              >
                Back to home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
