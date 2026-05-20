const pathways = [
  {
    title: "Propietarios de tierra",
    signal: "recurso → activo",
    text: "Suelo con vocación energética que necesita estructura, socios y gobierno.",
  },
  {
    title: "Grandes consumidores",
    signal: "carga → resiliencia",
    text: "Demanda energética que puede convertirse en productividad y control de riesgo.",
  },
  {
    title: "Infraestructura distribuida",
    signal: "nodos → portafolio",
    text: "Activos dispersos que requieren lectura común, contratos y Capa Empresa.",
  },
] as const;

export function TerritorialTransitionCard() {
  return (
    <div className="diagram-stage relative mt-14 overflow-hidden p-5 sm:p-8">
      <div className="adaptive-grid absolute inset-0 opacity-34" />
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,#609DFF,#E2E6E9,transparent)] opacity-45 lg:block" />
      <div className="relative grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="accent-callout relative min-h-[28rem] overflow-hidden border p-6">
          <div className="absolute inset-8 border border-[#609DFF]/18" />
          <div className="absolute left-[18%] top-[24%] size-3 bg-[#609DFF] shadow-[0_0_24px_rgba(96,157,255,0.85)]" />
          <div className="absolute right-[24%] top-[34%] size-3 bg-[#E2E6E9] shadow-[0_0_20px_rgba(226,230,233,0.55)]" />
          <div className="absolute bottom-[28%] left-[34%] size-3 bg-[#F5F0F0] shadow-[0_0_20px_rgba(245,240,240,0.45)]" />
          <div className="absolute left-[18%] right-[24%] top-[30%] h-px rotate-6 bg-[#609DFF]/55" />
          <div className="absolute bottom-[34%] left-[34%] right-[24%] h-px -rotate-12 bg-[#E2E6E9]/45" />
          <div className="relative flex h-full min-h-[24rem] flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#609DFF]">
                Transición territorial
              </p>
              <h3 className="mt-5 max-w-sm text-4xl font-semibold leading-tight text-[#F5F0F0]">
                Del territorio a infraestructura financiable.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#E2E6E9]/84">
              La oportunidad no está solo en el activo. Está en conectar tierra,
              carga, red y contratos en una arquitectura gobernable.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {pathways.map((pathway, index) => (
            <article
              className="flow-card border p-6"
              key={pathway.title}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm text-[#609DFF]">0{index + 1}</p>
                  <h3 className="mt-5 text-2xl font-semibold text-[#F5F0F0]">
                    {pathway.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/86">
                    {pathway.text}
                  </p>
                </div>
                <p className="shrink-0 border border-[#609DFF]/24 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#E2E6E9]/78">
                  {pathway.signal}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
