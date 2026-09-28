// Web version of the capital-layer picture: capital enters, the Empresa
// Energética holds the two markets together, liquidity is realised and the
// capital is recycled. Public-safe: no counterparties, figures or mechanisms.

const diagramCopy = {
  es: {
    description:
      "El capital entra por cuatro vías, la Empresa Energética une el mercado de la energía con el mercado de capitales, la liquidez se realiza por cinco rutas y el capital realizado vuelve a trabajar en nuevos activos y nuevas Empresas Energéticas.",
    entry: {
      title: "Entrada",
      caption: "El capital entra por la puerta que corresponde a su perfil.",
    },
    capitalIn: [
      {
        label: "Capital estratégico",
        detail: "a nivel de empresa, con gobierno y participación en el crecimiento",
      },
      {
        label: "Capital financiero",
        detail: "a nivel de activo, protegido por estructuras fiduciarias",
      },
      {
        label: "Vehículos regulados de inversión",
        detail: "fondos de capital de riesgo (FICR), titularización y vehículos tipo REIT",
      },
      { label: "Deuda senior", detail: "con gestión del riesgo de tasa" },
    ],
    energy: { label: "Energía", detail: "recurso físico que la empresa convierte" },
    centre: {
      step: "02 · Centro de gravedad",
      title: "Empresa Energética",
      text: "No es un conducto: une el mercado de la energía con el mercado de capitales y los mantiene unidos.",
    },
    loop: ["Energía", "Empresa", "Capital"],
    liquidity: {
      title: "Liquidez",
      caption: "El capital se realiza por varias rutas.",
    },
    liquidityOut: [
      "Distribuciones durante la tenencia",
      "Titularización de flujos sazonados",
      "Vehículos tipo REIT",
      "Venta o salida a bolsa de la empresa",
      "Traspasos secundarios",
    ],
    recycling: {
      label: "04 · Reciclaje.",
      text: "El capital realizado vuelve a trabajar en nuevos activos y nuevas Empresas Energéticas.",
    },
  },
  en: {
    description:
      "Capital enters through four routes, the Energy Enterprise joins the energy market and the capital market, liquidity is realised through five routes, and realised capital goes back to work in new assets and new Energy Enterprises.",
    entry: {
      title: "Entry",
      caption: "Capital enters through the door that fits its profile.",
    },
    capitalIn: [
      {
        label: "Strategic capital",
        detail: "at enterprise level, with governance and a share in growth",
      },
      {
        label: "Financial capital",
        detail: "at asset level, protected by fiduciary structures",
      },
      {
        label: "Regulated investment vehicles",
        detail: "venture-capital funds (FICR), securitization and REIT-type vehicles",
      },
      { label: "Senior debt", detail: "with interest-rate risk management" },
    ],
    energy: { label: "Energy", detail: "the physical resource the enterprise converts" },
    centre: {
      step: "02 · Centre of gravity",
      title: "Energy Enterprise",
      text: "It is not a conduit: it joins the energy market and the capital market and holds them together.",
    },
    loop: ["Energy", "Firm", "Capital"],
    liquidity: {
      title: "Liquidity",
      caption: "Capital is realised through several routes.",
    },
    liquidityOut: [
      "Distributions during the holding period",
      "Securitization of seasoned cash flows",
      "REIT-type vehicles",
      "Sale or listing of the enterprise",
      "Secondary transfers",
    ],
    recycling: {
      label: "04 · Recycling.",
      text: "Realised capital goes back to work in new assets and new Energy Enterprises.",
    },
  },
} as const;

function FlowArrow({ direction }: { direction: "right" | "left" | "down" }) {
  const symbol = direction === "down" ? "↓" : direction === "right" ? "→" : "←";

  return (
    <span
      aria-hidden="true"
      className="flex items-center justify-center text-3xl font-semibold text-trinomio-cyan"
    >
      {symbol}
    </span>
  );
}

function ColumnHeading({
  step,
  title,
  caption,
}: {
  step: string;
  title: string;
  caption: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
        {step}
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#E2E6E9]/80">{caption}</p>
    </div>
  );
}

export function CapitalLayerDiagram({
  locale = "es",
}: {
  locale?: keyof typeof diagramCopy;
}) {
  const copy = diagramCopy[locale];
  const [energy, firm, capital] = copy.loop;

  return (
    <figure className="diagram-stage relative mt-12 overflow-hidden p-5 sm:p-8">
      <div className="adaptive-grid absolute inset-0 opacity-24" />
      <figcaption className="sr-only">{copy.description}</figcaption>

      <div className="relative grid gap-5 lg:grid-cols-[1fr_auto_minmax(16rem,0.9fr)_auto_1fr] lg:items-center">
        {/* 01 Entrada */}
        <div className="grid gap-4">
          <ColumnHeading
            caption={copy.entry.caption}
            step="01"
            title={copy.entry.title}
          />
          <ul className="grid gap-3">
            {copy.capitalIn.map((item) => (
              <li className="flow-card border p-4" key={item.label}>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-[#E2E6E9]/80">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <FlowArrow direction="down" />
        </div>
        <div className="hidden lg:block">
          <FlowArrow direction="right" />
        </div>

        {/* 02 Centro de gravedad */}
        <div className="grid gap-3">
          <div className="border border-white/10 bg-white/[0.035] p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
              {copy.energy.label}
            </p>
            <p className="mt-1 text-xs leading-5 text-[#E2E6E9]/80">
              {copy.energy.detail}
            </p>
          </div>
          <FlowArrow direction="down" />
          <div className="accent-callout border p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
              {copy.centre.step}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
              {copy.centre.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/88">
              {copy.centre.text}
            </p>
          </div>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#E2E6E9]/70">
            {energy} <span className="text-trinomio-cyan">→</span> {firm}{" "}
            <span className="text-trinomio-cyan">←</span> {capital}
          </p>
        </div>

        <div className="lg:hidden">
          <FlowArrow direction="down" />
        </div>
        <div className="hidden lg:block">
          <FlowArrow direction="right" />
        </div>

        {/* 03 Liquidez */}
        <div className="grid gap-4">
          <ColumnHeading
            caption={copy.liquidity.caption}
            step="03"
            title={copy.liquidity.title}
          />
          <ul className="grid gap-3">
            {copy.liquidityOut.map((item) => (
              <li
                className="flow-card border px-4 py-3 text-sm font-semibold text-white"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 04 Reciclaje */}
      <div className="relative mt-8 flex flex-col items-center gap-3 border border-dashed border-trinomio-cyan/45 px-5 py-5 text-center sm:flex-row sm:text-left">
        <span
          aria-hidden="true"
          className="text-3xl font-semibold text-trinomio-cyan"
        >
          ↺
        </span>
        <p className="text-sm leading-6 text-[#E2E6E9]/90">
          <span className="font-semibold text-white">{copy.recycling.label}</span>{" "}
          {copy.recycling.text}
        </p>
      </div>
    </figure>
  );
}
