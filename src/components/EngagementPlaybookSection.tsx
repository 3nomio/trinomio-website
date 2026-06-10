import { EngagementPlaybook } from "./EngagementPlaybook";
import { OrbitalDivider } from "./OrbitalDivider";
import { SectionHeading } from "./SectionHeading";

export function EngagementPlaybookSection() {
  return (
    <>
      <OrbitalDivider />
      <section
        className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32"
        id="metodologia"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--cyan),var(--electric-blue),transparent)]" />
        <div className="orbital-field absolute left-[-12rem] top-1/2 size-96 rounded-full opacity-16" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Metodología"
            title="De potencial estratégico a activo institucionalizado"
            description="Trinomio acompaña la transformación en tres fases operativas: detectar la señal, estructurar la empresa, y escalar hacia capital."
          />

          <div className="mt-16">
            <EngagementPlaybook />
          </div>

          {/* Bottom explanation */}
          <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8">
            <p className="text-base leading-7 text-[#E2E6E9]/90">
              <span className="block font-semibold text-white mb-3">
                Cada fase es concreta. Cada resultado es verificable.
              </span>
              No estructuramos estrategias; estructuramos empresas que convierten potencial
              energético en activos de los que bancos, SAFIs, FICR e inversionistas pueden
              confiar. El tiempo, el equipo, y el costo varían según tu punto de partida—pero
              el flujo es siempre el mismo: señal → estructura → escala.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
