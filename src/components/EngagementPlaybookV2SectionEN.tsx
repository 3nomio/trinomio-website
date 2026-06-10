import { EngagementPlaybookV2EN } from "./EngagementPlaybookV2EN";
import { OrbitalDivider } from "./OrbitalDivider";
import { SectionHeading } from "./SectionHeading";

export function EngagementPlaybookV2SectionEN() {
  return (
    <>
      <OrbitalDivider />
      <section
        className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32"
        id="how-we-work"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--cyan),var(--electric-blue),transparent)]" />
        <div className="orbital-field absolute left-[-12rem] top-1/2 size-96 rounded-full opacity-16" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we work"
            title="Build companies. Measure every day. Design with doors."
            description="Three phases. One approach. We convert energy potential into lasting companies that adapt, measure, and grow."
          />

          <div className="mt-16">
            <EngagementPlaybookV2EN />
          </div>

          {/* Bottom explanation */}
          <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8">
            <p className="text-base leading-7 text-[#E2E6E9]/90">
              <span className="block font-semibold text-white mb-3">
                Others build projects and guess once. We build companies, measure every day, and design them with doors to the future.
              </span>
              The difference isn&apos;t speed—it&apos;s sustainability. A project might earn money for one year. A company earns money for twenty years because it&apos;s designed to measure what&apos;s working, adapt when conditions change, and grow when the moment arrives. That&apos;s why we measure every month, why we build governance from day one, and why we design for doors—the right to evolve without tearing down the foundation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
