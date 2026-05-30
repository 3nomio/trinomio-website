const sideNodes = [
  {
    align: "left",
    eyebrow: "Energy / Energía",
    title: "Strategic energy potential",
    detail: "Solar, BESS, DERs, resilience, energy functions",
  },
  {
    align: "right",
    eyebrow: "Capital / Capital",
    title: "Capital discipline",
    detail: "Governance, contracts, controls, bankability",
  },
] as const;

const firmCapabilities = ["Governance", "Structuring", "Execution"];

export function LanguageGatewayDiagram() {
  return (
    <section
      aria-labelledby="language-gateway-architecture"
      className="relative mt-8 w-full max-w-6xl text-left sm:mt-10"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-trinomio-cyan sm:text-sm">
          Energy <span aria-hidden="true">→</span> Firm{" "}
          <span aria-hidden="true">←</span> Capital
        </p>
        <h1
          className="mt-3 text-xl font-semibold leading-tight text-white sm:text-2xl"
          id="language-gateway-architecture"
        >
          Energía <span aria-hidden="true">→</span> Empresa{" "}
          <span aria-hidden="true">←</span> Capital
        </h1>
      </div>

      <div className="diagram-stage relative mt-7 overflow-hidden p-4 sm:p-5 lg:min-h-[23rem] lg:p-7">
        <div className="adaptive-grid absolute inset-0 opacity-22" />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1000 360"
        >
          <path
            d="M185 138 C295 138 345 142 438 178"
            stroke="url(#gateway-flow)"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M815 138 C705 138 655 142 562 178"
            stroke="url(#gateway-flow)"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M500 232 C500 258 500 278 500 304"
            stroke="url(#gateway-output)"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <circle cx="438" cy="178" fill="#17D7FF" r="4" />
          <circle cx="562" cy="178" fill="#17D7FF" r="4" />
          <circle cx="500" cy="304" fill="#3FE083" r="4" />
          <defs>
            <linearGradient id="gateway-flow" x1="0" x2="1" y1="0" y2="0">
              <stop stopColor="#17D7FF" stopOpacity="0.15" />
              <stop offset="0.55" stopColor="#609DFF" stopOpacity="0.9" />
              <stop offset="1" stopColor="#17D7FF" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="gateway-output" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#609DFF" stopOpacity="0.72" />
              <stop offset="1" stopColor="#3FE083" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative grid gap-4 lg:grid-cols-[1fr_1.12fr_1fr] lg:items-center">
          <GatewaySideNode {...sideNodes[0]} />

          <article className="accent-callout relative order-first border border-trinomio-cyan/32 p-5 text-center shadow-[0_0_54px_rgba(23,215,255,0.1)] sm:p-6 lg:order-none lg:min-h-48">
            <div className="orbital-field absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-14" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
                Firm / Empresa
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Governed execution layer
              </h2>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {firmCapabilities.map((capability) => (
                  <span
                    className="inline-flex border border-white/12 bg-white/[0.045] px-3 py-2 text-xs font-semibold text-[#E2E6E9]/88"
                    key={capability}
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <GatewaySideNode {...sideNodes[1]} />
        </div>

        <div className="relative mx-auto mt-4 h-8 w-px bg-[linear-gradient(180deg,rgba(96,157,255,0.2),rgba(63,224,131,0.78))] lg:mt-2" />

        <div className="accent-callout relative mx-auto max-w-lg border border-trinomio-green/36 p-4 text-center">
          <span className="motion-safe:animate-pulse absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-trinomio-green shadow-[0_0_22px_rgba(63,224,131,0.8)]" />
          <p className="text-sm font-semibold leading-6 text-white sm:text-base">
            Bankable energy assets
          </p>
          <p className="mt-1 text-sm leading-6 text-[#E2E6E9]/86">
            Activos energéticos bancables
          </p>
        </div>
      </div>
    </section>
  );
}

function GatewaySideNode({
  align,
  detail,
  eyebrow,
  title,
}: (typeof sideNodes)[number]) {
  return (
    <article className="diagram-card relative min-h-36 overflow-hidden p-4 sm:p-5 lg:min-h-40">
      <div
        aria-hidden="true"
        className={[
          "absolute top-5 hidden h-px w-14 bg-[linear-gradient(90deg,rgba(23,215,255,0),rgba(23,215,255,0.82))] lg:block",
          align === "left" ? "right-[-3.5rem]" : "left-[-3.5rem] rotate-180",
        ].join(" ")}
      />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-xl font-semibold leading-tight text-white">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/84">{detail}</p>
    </article>
  );
}
