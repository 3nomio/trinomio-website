import { SectionHeading } from "@/components/SectionHeading";

type FirmConversionLayerProps = {
  locale?: "es" | "en";
};

const copy = {
  es: {
    eyebrow: "Capa Empresa",
    title: "La bancabilidad depende de la calidad de la captura institucional.",
    description:
      "Un proyecto puede ser técnicamente viable y aun así no ser financiable. Trinomio cierra la brecha entre valor energético y capital mediante medición, reconocimiento regulatorio, captura contractual, validación de crédito y formación de capital.",
    standardTitle: "Contrato firmado no equivale a contrato bancable.",
    standardText:
      "La EaaS-PPA debe producir ingresos deterministas, derechos ejecutables, acceso a datos, cesión de flujos, derechos de sustitución, mecanismos de cura y una cascada de pagos que soporte revisión crediticia.",
    steps: [
      {
        title: "Medición",
        text: "El servicio energético debe ser observable, verificable y compatible con facturación.",
      },
      {
        title: "Reconocimiento",
        text: "El valor debe tener base regulatoria y reconocimiento institucional suficiente.",
      },
      {
        title: "Captura contractual",
        text: "La energia se convierte en obligacion de pago mediante contrato de calidad bancaria.",
      },
      {
        title: "Validación de crédito",
        text: "El flujo se prueba bajo escenarios de estrés, rendimiento P90 y disciplina DSCR.",
      },
      {
        title: "Formación de capital",
        text: "La EE queda lista para deuda senior, equity institucional y agregacion futura.",
      },
    ],
    outputs: [
      "Vehículo EE/SPV gobernado",
      "EaaS-PPA con términos bancables",
      "Cascada de pagos controlada",
      "Flujo probado por credito",
      "Perfil de contraparte distribuidora",
      "Paquete compatible con BCR y FICR",
    ],
  },
  en: {
    eyebrow: "Firm layer",
    title: "Bankability depends on the quality of institutional capture.",
    description:
      "A project can be technically viable and still fail to become financeable. Trinomio closes the gap between energy value and capital through metering, regulatory recognition, contractual capture, credit validation, and capital formation.",
    standardTitle: "A signed contract is not the same as a bankable contract.",
    standardText:
      "The EaaS-PPA must produce deterministic revenue, enforceable rights, data access, receivables control, step-in mechanics, cure mechanisms, and a payment waterfall that can survive credit review.",
    steps: [
      {
        title: "Metering",
        text: "The energy service must be observable, verifiable, and compatible with invoicing.",
      },
      {
        title: "Recognition",
        text: "The value must have sufficient regulatory basis and institutional recognition.",
      },
      {
        title: "Contractual capture",
        text: "Energy becomes a payment obligation through a bank-quality contract.",
      },
      {
        title: "Credit validation",
        text: "The cash flow is tested under stress scenarios, P90 yield, and DSCR discipline.",
      },
      {
        title: "Capital formation",
        text: "The EE is ready for senior debt, institutional equity, and future aggregation.",
      },
    ],
    outputs: [
      "Governed EE/SPV vehicle",
      "EaaS-PPA with bankable terms",
      "Controlled payment waterfall",
      "Credit-tested cash flow",
      "Distributor counterparty profile",
      "BCR and FICR compatible package",
    ],
  },
} as const;

export function FirmConversionLayer({
  locale = "es",
}: FirmConversionLayerProps) {
  const content = copy[locale];

  return (
    <section
      className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 text-white sm:px-8 lg:py-32"
      id={locale === "es" ? "captura-institucional" : "institutional-capture"}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--cyan),var(--green),transparent)]" />
      <div className="adaptive-grid absolute inset-0 opacity-24" />
      <div className="orbital-field absolute -right-28 top-20 size-96 rounded-full opacity-18" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />
            <div className="accent-callout mt-8 border border-trinomio-green/24 bg-white/[0.045] p-6">
              <h3 className="text-2xl font-semibold leading-tight text-white">
                {content.standardTitle}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/86">
                {content.standardText}
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {content.steps.map((step, index) => (
              <article
                className="diagram-card group grid gap-4 overflow-hidden p-5 transition hover:-translate-y-0.5 hover:border-trinomio-cyan/45 sm:grid-cols-[4rem_1fr]"
                key={step.title}
              >
                <div className="flex size-14 items-center justify-center border border-trinomio-cyan/30 bg-trinomio-cyan/10 text-sm font-semibold text-trinomio-cyan">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/80">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-green">
            {locale === "es" ? "Output de la Capa Empresa" : "Firm layer output"}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.outputs.map((output) => (
              <div
                className="flow-card border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold leading-6 text-[#E2E6E9]/88"
                key={output}
              >
                {output}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
