import { institutionalAudiences } from "@/lib/content";
import { getAudienceLoop } from "@/lib/navigation";
import Link from "next/link";

type AudienceSectionProps = {
  className?: string;
};

export function AudienceSection({ className = "" }: AudienceSectionProps) {
  return (
    <div className={className}>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {institutionalAudiences.map((audience, index) => (
          <article
            className="diagram-card group relative overflow-hidden p-6 backdrop-blur sm:p-7"
            key={audience.title}
            id={audience.title.toLowerCase().replaceAll(" ", "-")}
          >
            <div className="orbital-field orbital-drift absolute -right-24 -top-24 size-64 rounded-full opacity-16 transition duration-500 group-hover:opacity-30" />
            <div className="relative flex min-h-[25rem] flex-col">
              <div className="mb-9 flex items-start justify-between gap-5">
                <p className="text-sm text-trinomio-cyan">0{index + 1}</p>
                <div className="h-px flex-1 translate-y-2 bg-[linear-gradient(90deg,transparent,var(--cyan),var(--green),transparent)] opacity-45" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-white">
                {audience.title}
              </h3>
              <dl className="mt-7 grid gap-5 text-sm leading-6 text-[#E2E6E9]/88">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
                    Problema
                  </dt>
                  <dd className="mt-2">{audience.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
                    Cómo ayuda Trinomio
                  </dt>
                  <dd className="mt-2">{audience.help}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-green">
                    Resultado
                  </dt>
                  <dd className="mt-2">{audience.outcome}</dd>
                </div>
              </dl>
              {getAudienceLoop(audience.title) ? (
                <Link
                  className="mt-auto inline-flex w-fit items-center border border-white/12 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-trinomio-cyan/55 hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
                  href={getAudienceLoop(audience.title)!.href}
                >
                  {getAudienceLoop(audience.title)!.label}
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
