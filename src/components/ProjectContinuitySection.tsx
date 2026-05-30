import { GlossaryTermLink } from "@/components/GlossaryTermLink";

const continuitySteps = [
  {
    title: "SPV intacto",
    text: "El proyecto mantiene su identidad legal, operativa y contractual.",
  },
  {
    title: "EE aditiva",
    text: "La Empresa Estructurada no reemplaza el proyecto; agrega Capa Empresa.",
  },
  {
    title: "Gobierno y capital",
    text: "Se añaden reglas, reporting, riesgo y arquitectura de inversión por encima del activo.",
  },
  {
    title: "Escala institucional",
    text: "El ecosistema permite agrupar oportunidades sin borrar su origen.",
  },
] as const;

const homepageContinuitySteps = [
  {
    title: "Vehículo de proyecto",
    text: "El proyecto mantiene su identidad legal, operativa y contractual.",
  },
  {
    title: "Estructura aditiva",
    text: "La capa institucional no reemplaza el proyecto; le suma gobierno y lenguaje de capital.",
  },
  continuitySteps[2],
  continuitySteps[3],
] as const;

type ProjectContinuitySectionProps = {
  simplified?: boolean;
};

export function ProjectContinuitySection({
  simplified = false,
}: ProjectContinuitySectionProps) {
  const steps = simplified ? homepageContinuitySteps : continuitySteps;

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-stretch">
      <div className="diagram-stage relative overflow-hidden p-6 sm:p-8">
        <div className="adaptive-grid absolute inset-0 opacity-32" />
        <div className="relative grid min-h-[34rem] content-center gap-4">
          {steps.map((step, index) => (
            <article
              className="flow-card border p-5"
              key={step.title}
            >
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center border border-[#609DFF]/40 text-sm text-[#609DFF]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-[#F5F0F0]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#E2E6E9]/86">
                    {step.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="diagram-stage relative overflow-hidden p-6 sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,157,255,0.16),transparent_22rem)]" />
        <div className="relative mx-auto grid max-w-2xl gap-5">
          <div className="flow-card mx-auto w-full max-w-sm border p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#609DFF]">
              Proyecto original
            </p>
            <GlossaryTermLink className="mt-4 block text-4xl font-semibold text-[#F5F0F0]">
              {simplified ? "Vehículo de proyecto" : "SPV"}
            </GlossaryTermLink>
          </div>
          <div className="mx-auto h-12 w-px bg-[linear-gradient(180deg,#609DFF,#E2E6E9)]" />
          <div className="accent-callout border p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#609DFF]">
              Capa añadida
            </p>
            <GlossaryTermLink className="mt-4 block text-4xl font-semibold text-[#F5F0F0]">
              Empresa Estructurada
            </GlossaryTermLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Gobernanza", "Capa Capital"].map((item) => (
              <GlossaryTermLink
                className="flow-card border p-5 text-center text-lg font-semibold text-[#F5F0F0]"
                key={item}
              >
                {item}
              </GlossaryTermLink>
            ))}
          </div>
          <p className="text-center text-sm leading-6 text-[#E2E6E9]/82">
            El proyecto conserva su base. La estructura agrega lenguaje
            institucional, control y capacidad de conexión con capital.
          </p>
        </div>
      </div>
    </div>
  );
}
