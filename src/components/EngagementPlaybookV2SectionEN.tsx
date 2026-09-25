import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { OrbitalDivider } from "./OrbitalDivider";
import { SectionHeading } from "./SectionHeading";
import { threeLabsCopy } from "./ThreeLabsMethod";

// One line per step, taken from the approved 3Labs method text.
const stepLines = {
  sense: "Sensing tells us which assets are worth forming, and when.",
  size: "Only opportunities whose energy value covers their cost move forward.",
  transform:
    "We form an Energy Enterprise: an energy company structured to be financeable.",
} as const;

export function EngagementPlaybookV2SectionEN() {
  const { hero, method, labs } = threeLabsCopy.en;

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
            description={`${hero.intro} ${method.description}`}
            eyebrow="How we work"
            title={method.title}
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {labs.map((lab, index) => (
              <Link
                className="diagram-card relative block overflow-hidden p-6 transition hover:border-trinomio-cyan/45"
                href={`/en/3labs#${lab.id}`}
                key={lab.id}
              >
                <div className="orbital-field absolute -right-20 -top-20 size-56 rounded-full opacity-16" />
                <p className="relative text-sm text-trinomio-cyan">
                  0{index + 1}
                </p>
                <h3 className="relative mt-6 text-3xl font-semibold text-white">
                  {lab.title}
                </h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#E2E6E9]/78">
                  {lab.subtitle}
                </p>
                <p className="relative mt-5 text-base leading-7 text-[#E2E6E9]/90">
                  {stepLines[lab.id as keyof typeof stepLines]}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <ButtonLink href="/en/3labs">Read the 3Labs method -&gt;</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
