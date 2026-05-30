export const spanishNav = [
  { label: "Transición", href: "/es/transicion" },
  {
    label: "Energía → Empresa ← Capital",
    mobileLabel: "E→E←C",
    href: "/es/energia-empresa-capital",
  },
  { label: "3Labs", href: "/es/3labs" },
  { label: "Glosario", href: "/es/glosario" },
  { label: "Insights", href: "/es/insights" },
  { label: "Sobre Trinomio", href: "/es/sobre-trinomio" },
  { label: "Contacto", href: "/es/contacto" },
] as const;

export type ContextualLink = {
  label: string;
  href: string;
  meta?: string;
};

export const primaryLoopLinks = [
  {
    label: "Explorar la transición",
    href: "/es/transicion",
    meta: "Régimen, señales y repricing",
  },
  {
    label: "Estructurar oportunidad energética",
    href: "/es/energia-empresa-capital#empresa",
    meta: "De greenfield a activo bancable",
  },
  {
    label: "Explorar EFI",
    href: "/es/3labs#efi",
    meta: "Identificar excedente operativo",
  },
  {
    label: "Ver ejecución SANSES",
    href: "/es/energia-empresa-capital#sanses-ee",
    meta: "EE#1 como prueba institucional",
  },
  {
    label: "Leer Insight relacionado",
    href: "/es/insights/capa-empresa-energia-capital",
    meta: "Marco escrito de Energía → Empresa ← Capital",
  },
  {
    label: "Assess your energy function",
    href: "/es/glosario",
    meta: "Lenguaje para energía, empresa, riesgo y capital",
  },
  {
    label: "Turn energy surplus into assets",
    href: "/es/contacto",
    meta: "Rutas para estructurar oportunidad y capital",
  },
] as const satisfies readonly ContextualLink[];

export const frameworkLinks = {
  transition: [
    primaryLoopLinks[1],
    {
      label: "Ver arquitectura EE",
      href: "/es/energia-empresa-capital#arquitectura-ee",
      meta: "Project Finance, EE, HoldCo y SPVs",
    },
    {
      label: "Leer resiliencia estructural",
      href: "/es/insights/resiliencia-estructuras-insuficientes",
      meta: "Por qué las estructuras existentes no bastan",
    },
  ],
  doctrine: [
    primaryLoopLinks[0],
    {
      label: "Ver arquitectura EE",
      href: "/es/energia-empresa-capital#arquitectura-ee",
      meta: "Mapa de empresa, activos y capital",
    },
    {
      label: "De Project Finance a FICR",
      href: "/es/insights/underwriting-activos-distribuidos",
      meta: "Bankability de proyecto y escala de transición",
    },
  ],
  labs: [
    {
      label: "Explorar EFI",
      href: "/es/3labs#efi",
      meta: "Excedente operativo y señales de productividad",
    },
    primaryLoopLinks[1],
    {
      label: "Leer infraestructura programable",
      href: "/es/insights/infraestructura-programable-cash-flow",
      meta: "Datos operativos y cash-flow",
    },
  ],
  proof: [
    primaryLoopLinks[3],
    {
      label: "De Project Finance a FICR",
      href: "/es/energia-empresa-capital#capa-capital",
      meta: "De EE a capital-market intermediation",
    },
    {
      label: "Contactar por estructura",
      href: "/es/contacto#rutas",
      meta: "Mandatos de ejecución y capital",
    },
  ],
} as const satisfies Record<string, readonly ContextualLink[]>;

export const audienceLoops = [
  {
    match: "Propietarios de tierra",
    label: "Estructurar tierra energética",
    href: "/es/contacto#propietarios-de-tierra",
  },
  {
    match: "Instituciones Financieras",
    label: "Cómo entra el capital",
    href: "/es/insights/underwriting-activos-distribuidos",
  },
  {
    match: "Entidades Distribuidoras",
    label: "Ver ejecución SANSES",
    href: "/es/energia-empresa-capital#sanses-ee",
  },
  {
    match: "Generadores privados",
    label: "Ver arquitectura EE",
    href: "/es/energia-empresa-capital#arquitectura-ee",
  },
  {
    match: "Grandes consumidores energéticos",
    label: "Explorar EFI",
    href: "/es/3labs#efi",
  },
] as const;

export function getAudienceLoop(title: string) {
  return audienceLoops.find((loop) => title.includes(loop.match));
}
