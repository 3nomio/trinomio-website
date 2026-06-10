import { EngagementPlaybookEN } from "./EngagementPlaybookEN";
import { OrbitalDivider } from "./OrbitalDivider";
import { SectionHeading } from "./SectionHeading";

export function EngagementPlaybookSectionEN() {
  return (
    <>
      <OrbitalDivider />
      <section
        className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32"
        id="methodology"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--cyan),var(--electric-blue),transparent)]" />
        <div className="orbital-field absolute left-[-12rem] top-1/2 size-96 rounded-full opacity-16" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Methodology"
            title="From strategic potential to institutionalized asset"
            description="Trinomio guides the transformation through three operational phases: sense the signal, structure the enterprise, and scale toward capital."
          />

          <div className="mt-16">
            <EngagementPlaybookEN />
          </div>

          {/* Bottom explanation */}
          <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8">
            <p className="text-base leading-7 text-[#E2E6E9]/90">
              <span className="block font-semibold text-white mb-3">
                Each phase is concrete. Each outcome is verifiable.
              </span>
              We don&apos;t structure strategies; we structure enterprises that convert energy
              potential into assets that banks, SAFIs, FICR, and investors can trust. Time,
              team, and cost vary based on your starting point—but the flow is always the
              same: signal → structure → scale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
