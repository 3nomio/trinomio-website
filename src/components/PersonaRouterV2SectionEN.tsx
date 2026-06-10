import { PersonaRouterV2EN } from "./PersonaRouterV2EN";
import { OrbitalDivider } from "./OrbitalDivider";
import { SectionHeading } from "./SectionHeading";

export function PersonaRouterV2SectionEN() {
  return (
    <>
      <OrbitalDivider />
      <section
        className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
        id="for-you"
      >
        <div className="orbital-field absolute -left-24 top-20 size-80 rounded-full opacity-18" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="For you"
            title="Find your role. See what changes."
            description="Every actor in energy needs something different. Here's what we add for you."
          />

          <div className="mt-16">
            <PersonaRouterV2EN />
          </div>

          {/* Bottom explanation */}
          <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8">
            <p className="text-base leading-7 text-[#E2E6E9]/90">
              <span className="block font-semibold text-white mb-3">
                Your role shapes your pathway.
              </span>
              Whether you're scaling projects, monetizing land, acquiring assets, or deploying capital, Trinomio works as the layer that builds companies, measures them every day, and designs them with doors. Find yourself above and see what changes for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
