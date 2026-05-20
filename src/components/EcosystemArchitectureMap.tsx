import { GlossaryTermLink } from "@/components/GlossaryTermLink";

const structuredCompanies = [
  {
    label: "EE#1",
    annotation:
      "Plataforma orientada a cooperativas y distribuidoras eléctricas para estructurar DER, resiliencia energética y modernización de red.",
  },
  {
    label: "EE#2",
    annotation:
      "Plataforma enfocada en clientes comerciales e industriales mediante EaaS, eficiencia energética y activos energéticos behind-the-meter.",
  },
  {
    label: "EE#3",
    annotation:
      "Plataforma especializada en generación firme y activos hidroeléctricos de pequeña escala integrados a arquitecturas híbridas.",
  },
];
const projectSpvs = ["SPV activo", "SPV operativo", "SPV territorial"];
const flowTypes = [
  { label: "Flujos de capital", className: "bg-[#609DFF]" },
  { label: "Flujos de gobierno", className: "bg-[#E2E6E9]" },
  { label: "Flujos de energía", className: "bg-[#F5F0F0]" },
] as const;

export function EcosystemArchitectureMap() {
  return (
    <div className="diagram-stage relative mt-14 overflow-hidden p-5 sm:p-8 lg:p-10">
      <div className="adaptive-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-x-10 top-1/2 hidden h-px bg-[linear-gradient(90deg,transparent,#609DFF,#E2E6E9,#609DFF,transparent)] opacity-70 lg:block" />
      <div className="absolute bottom-[27%] left-[18%] right-[18%] hidden h-px bg-[linear-gradient(90deg,transparent,#F5F0F0,#609DFF,transparent)] opacity-50 lg:block" />
      <div className="absolute left-1/2 top-[18%] hidden h-[58%] w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,#E2E6E9,#609DFF,transparent)] opacity-55 lg:block" />

      <div className="relative grid gap-6 lg:min-h-[42rem] lg:grid-rows-[auto_1fr_auto]">
        <a
          className="accent-callout mx-auto block w-full max-w-md border p-6 text-center backdrop-blur transition hover:-translate-y-0.5 hover:border-trinomio-cyan/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
          href="/es/energia-empresa-capital#capa-capital"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#609DFF]">
            Capa Capital
          </p>
          <h3 className="mt-4 text-4xl font-semibold leading-none text-[#F5F0F0]">
            HoldCo
          </h3>
          <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/86">
            Consolida disciplina de capital, gobierno y lectura de portafolio.
          </p>
        </a>

        <div className="grid items-center gap-5 lg:grid-cols-3">
          {structuredCompanies.map((company, index) => (
            <a
              className="diagram-card accent-callout relative min-h-52 overflow-hidden p-6"
              href="/es/energia-empresa-capital#empresa"
              key={company.label}
            >
              <div className="absolute -right-16 -top-16 size-44 rounded-full border border-[#609DFF]/20 bg-[#609DFF]/8" />
              <p className="relative text-sm text-[#609DFF]">0{index + 1}</p>
              <h4 className="relative mt-8 text-3xl font-semibold text-[#F5F0F0]">
                {company.label}
              </h4>
              <p className="relative mt-4 text-sm leading-6 text-[#E2E6E9]/86">
                {company.annotation}
              </p>
            </a>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projectSpvs.map((spv) => (
            <div
              className="flow-card border p-5"
              key={spv}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E2E6E9]/70">
                Proyecto base
              </p>
              <GlossaryTermLink
                className="mt-3 block text-xl font-semibold text-[#F5F0F0]"
                glossaryLabel="SPV"
              >
                {spv}
              </GlossaryTermLink>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-8 grid gap-3 border-t border-[#E2E6E9]/12 pt-5 sm:grid-cols-3">
        {flowTypes.map((flow) => (
          <div className="flex items-center gap-3" key={flow.label}>
            <span className={`h-px w-12 ${flow.className}`} />
            <GlossaryTermLink
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E2E6E9]/78"
              glossaryLabel={
                flow.label === "Flujos de capital"
                  ? "FICR"
                  : flow.label === "Flujos de gobierno"
                    ? "gobierno"
                    : undefined
              }
            >
              {flow.label}
            </GlossaryTermLink>
          </div>
        ))}
      </div>
    </div>
  );
}
