import { PersonaRouterEN } from "./PersonaRouterEN";
import { OrbitalDivider } from "./OrbitalDivider";
import { SectionHeading } from "./SectionHeading";

export function PersonaRouterSectionEN() {
  return (
    <>
      <OrbitalDivider />
      <section
        className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
        id="for-you-if"
      >
        <div className="orbital-field absolute -left-24 top-20 size-80 rounded-full opacity-18" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="For whom we work"
            title="Trinomio is for you if…"
            description="Every actor in the energy transition needs something different. Find your role, see how others did it, and move forward."
          />

          <div className="mt-16">
            <PersonaRouterEN />
          </div>

          {/* Bottom explanation */}
          <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8">
            <p className="text-base leading-7 text-[#E2E6E9]/90">
              <span className="block font-semibold text-white mb-3">
                Your role shapes your pathway.
              </span>
              Whether you're building projects, monetizing assets, acquiring portfolios, or
              providing capital, Trinomio works as the institutional layer that connects your
              constraints to market-ready solutions. Find yourself above, and let's move
              from potential to scale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
