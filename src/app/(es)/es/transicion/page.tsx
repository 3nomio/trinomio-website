import { DiagramNavigation, RelatedFrameworks } from "@/components/ContextualNavigation";
import { Footer } from "@/components/Footer";
import { GlossaryTermLink } from "@/components/GlossaryTermLink";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { SectionHeading } from "@/components/SectionHeading";
import { frameworkLinks, primaryLoopLinks, spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transición Energética | Trinomio",
  description:
    "Costa Rica necesita más energía limpia, mayor productividad energética y arquitectura financiera para convertir oportunidades en activos bancables.",
};

const legacyEconomy = [
  "combustión térmica",
  "infraestructura centralizada",
  "procesos mecánicos",
  "escasez de combustibles",
  "control lineal",
];

const newEconomy = [
  "electrificación",
  "DER",
  "inteligencia artificial",
  "sistemas distribuidos",
  "infraestructura programable",
  "redes adaptativas",
];

const macroForces = [
  "presión regulatoria",
  "volatilidad energética",
  "nuevos requerimientos de capital",
  "necesidad de resiliencia",
  "repricing del riesgo",
  "rebalanceo institucional",
];

const efiSignals = [
  "activo medible",
  "contrato exigible",
  "gobierno operativo",
  "flujo trazable",
  "capital suscribible",
];

const transitionSequence = [
  "función energética",
  "excedente operativo",
  "Capa Empresa",
  "disciplina de capital",
] as const;

const costaRicaSignals = [
  {
    signal: "Ley 10086",
    role: "Base BTM vigente",
    reading:
      "Permite estructurar generación distribuida detrás del medidor como punto de partida operativo, sin depender de una reforma mayor para iniciar.",
  },
  {
    signal: "Expediente 23414",
    role: "Opcionalidad FTM",
    reading:
      "No debe modelarse como ingreso base. Debe preservarse mediante cláusulas de pivote, gobierno de EE y arquitectura preparada para migrar cuando exista mercado.",
  },
  {
    signal: "Cooperativas distribuidoras",
    role: "Contraparte crítica",
    reading:
      "Controlan medición, reconocimiento operativo, facturación y relación territorial. La bancabilidad depende de alineación, no solo de ingeniería.",
  },
  {
    signal: "T-SD y bloques horarios",
    role: "Proxy de valor",
    reading:
      "La tarifa y su estructura horaria son el lenguaje inicial para aproximar valor económico antes de que existan señales nodales o spot más precisas.",
  },
  {
    signal: "BESS",
    role: "Función de flexibilidad",
    reading:
      "Su valor depende de reconocimiento regulatorio, medición horaria y contrato capaz de capturar reducción de demanda, arbitraje o resiliencia.",
  },
  {
    signal: "BCR / FICR",
    role: "Canal de capital",
    reading:
      "La oportunidad se vuelve escalable cuando el flujo puede entrar a crédito senior, equity institucional y eventual agregación de portafolio.",
  },
] as const;

function SignalList({ items }: { items: readonly string[] }) {
  const className =
    "border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-[#E2E6E9]/90 transition hover:border-trinomio-cyan/40 hover:text-white";

  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item}>
          <GlossaryTermLink className={`block ${className}`}>
            {item}
          </GlossaryTermLink>
        </li>
      ))}
    </ul>
  );
}

export default function TransitionPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <ScrollNavigation indexLabel="↑ Subir" menuHref="/es" menuLabel="← Volver" />
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(23,215,255,0.17),transparent_30rem),radial-gradient(circle_at_78%_30%,rgba(96,157,255,0.2),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="orbital-field orbital-drift absolute right-[-14rem] top-16 size-[42rem] rounded-full opacity-32" />
          <div className="orbital-field orbital-drift absolute bottom-[-18rem] left-[-14rem] size-[34rem] rounded-full opacity-18" />

          <div className="relative mx-auto max-w-7xl">
            <Logo
              className="mb-12 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
              imageClassName="h-14 w-auto sm:h-16"
              priority
            />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
              La Transición
            </p>
            <p className="mt-5 max-w-4xl text-xl leading-8 text-[#E2E6E9]/92">
              Funciones energéticas → Capa Empresa ← disciplina de capital.
            </p>
            <h1 className="mt-10 max-w-6xl text-[clamp(2.5rem,10.8vw,3.25rem)] font-semibold leading-[1.04] sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              Costa Rica necesita una arquitectura energética financiable para
              su próximo ciclo de crecimiento
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-[#E2E6E9]/90">
              Más crecimiento requiere más y mejor energía: limpia, confiable,
              suficiente, competitiva y escalable. Los activos distribuidos, la
              eficiencia, Solar-UPS, BESS, small hydro y resiliencia operativa
              deben organizarse en empresas, contratos, Project Finance, FICR y
              flujos legibles para el capital. La Ley 10086 abrió el marco para
              generación distribuida detrás del medidor. El Expediente 23414
              refleja una discusión más amplia sobre modernización, apertura y
              nuevas formas de organización del sistema. Entre los dos existe la
              brecha de arquitectura financiera que Trinomio estructura.
            </p>
            <RelatedFrameworks className="max-w-5xl" links={frameworkLinks.transition} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field absolute right-[-10rem] top-16 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="El sistema eléctrico costarricense"
              title="Una base renovable sólida que enfrenta una nueva presión de escala."
              description="Costa Rica opera un sistema casi 100% renovable, gestionado por actores públicos y cooperativas distribuidoras. Ese modelo construyó cobertura casi universal, tarifas solidarias y estabilidad institucional. El próximo ciclo exige más energía, más inversión y un tipo de capital que ese modelo no fue diseñado para movilizar directamente."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {[
                {
                  eyebrow: "La fortaleza",
                  title: "Generación casi 100% renovable.",
                  text: "Hidro, geotérmica, eólica y solar. Actores públicos y cooperativas distribuidoras construyeron cobertura casi universal con tarifas solidarias y estabilidad operativa de largo plazo.",
                },
                {
                  eyebrow: "La presión",
                  title: "Crecimiento, electrificación y DERs distribuidos.",
                  text: "El aumento de demanda, la electrificación del transporte, la competitividad industrial y los activos distribuidos crean una presión de escala que el sistema centralizado no puede absorber solo.",
                },
                {
                  eyebrow: "La brecha",
                  title: "Capital que no puede entrar directamente.",
                  text: "La Ley 10086 habilita generación distribuida detrás del medidor. El Expediente 23414 abre una discusión sobre nuevas formas de participación y organización del sistema. Entre los dos existe la brecha de arquitectura financiera que convierte potencial energético en activos bancables.",
                },
              ].map((item, index) => (
                <article
                  className="diagram-card relative min-h-72 overflow-hidden p-6"
                  key={item.eyebrow}
                >
                  <div className="orbital-field orbital-drift absolute -right-20 -top-20 size-52 rounded-full opacity-20" />
                  <p className="relative text-sm text-trinomio-cyan">0{index + 1}</p>
                  <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
                    {item.eyebrow}
                  </p>
                  <h2 className="relative mt-4 text-3xl font-semibold leading-tight text-white">
                    {item.title}
                  </h2>
                  <p className="relative mt-5 text-sm leading-6 text-[#E2E6E9]/88">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 flow-card border border-trinomio-cyan/25 bg-white/[0.035] p-5">
              <p className="text-lg leading-8 text-[#E2E6E9]/90">
                Las cooperativas y distribuidoras no enfrentan un problema de
                voluntad sino de arquitectura: su mandato solidario, su
                estructura regulada y su capital propio no fueron diseñados para
                absorber inversión privada distribuida a la velocidad que la
                transición requiere. Trinomio no reemplaza ese modelo. Lo
                complementa con la Capa Empresa que convierte excedente
                energético en flujos legibles para el capital institucional.
              </p>
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="adaptive-grid absolute inset-0 opacity-36" />
          <div className="orbital-field absolute -left-28 top-24 size-96 rounded-full opacity-16" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Mapa de señales"
              title="La oportunidad costarricense se lee por señales institucionales, no por una sola narrativa."
              description="Cada señal cumple un papel diferente: algunas habilitan ejecución inmediata, otras preservan opcionalidad, otras definen contraparte, precio, flexibilidad o acceso a capital. La inteligencia está en saber qué señal usar para cada decisión."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {costaRicaSignals.map((item, index) => (
                <article
                  className="diagram-card group relative min-h-72 overflow-hidden p-6 transition hover:-translate-y-0.5 hover:border-trinomio-cyan/45"
                  key={item.signal}
                >
                  <div className="orbital-field absolute -right-20 -top-20 size-52 rounded-full opacity-18 transition group-hover:opacity-28" />
                  <div className="relative flex items-start justify-between gap-4">
                    <p className="text-sm text-trinomio-cyan">
                      0{index + 1}
                    </p>
                    <p className="max-w-[10rem] text-right text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-green">
                      {item.role}
                    </p>
                  </div>
                  <h2 className="relative mt-8 text-3xl font-semibold leading-tight text-white">
                    {item.signal}
                  </h2>
                  <p className="relative mt-5 text-sm leading-6 text-[#E2E6E9]/86">
                    {item.reading}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute -right-28 top-16 size-80 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Problema institucional"
              title="La transición no es solo tecnológica. Es un desafío de crecimiento y estructuración."
              description="La IEA describe una política energética costarricense orientada a renovables, expansión de capacidad y reemplazo de plantas antiguas. La presión estratégica es convertir más energía limpia y productividad energética en funciones financiables, no solo en proyectos aislados."
            />
            <div className="diagram-stage mt-14 overflow-hidden p-5 sm:p-8">
              <div className="relative grid gap-4 lg:grid-cols-3">
                {[
                  {
                    eyebrow: "Activo",
                    title: "La energía empieza como oportunidad greenfield.",
                    text: "Tierra, carga, BESS, Solar-UPS, small hydro, eficiencia y resiliencia crean potencial productivo cercano al consumo.",
                  },
                  {
                    eyebrow: "Empresa",
                    title: "La Capa Empresa la convierte en activo brownfield.",
                    text: "Contratos, propiedad, operación, medición, gobierno y riesgo convierten esa base en unidad techno-económica.",
                  },
                  {
                    eyebrow: "Capital",
                    title: "Project Finance y FICR habilitan escala.",
                    text: "Bancos, SAFIs, FICR e inversionistas necesitan información, trazabilidad, disciplina de caja y portafolio.",
                  },
                ].map((item, index) => (
                  <article
                    className="diagram-card relative min-h-72 overflow-hidden p-6"
                    key={item.eyebrow}
                  >
                    <div className="orbital-field orbital-drift absolute -right-20 -top-20 size-52 rounded-full opacity-20" />
                    <p className="relative text-sm text-trinomio-cyan">
                      0{index + 1}
                    </p>
                    <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-trinomio-green">
                      {item.eyebrow}
                    </p>
                    <h2 className="relative mt-4 text-3xl font-semibold leading-tight text-white">
                      {item.title}
                    </h2>
                    <p className="relative mt-5 text-sm leading-6 text-[#E2E6E9]/88">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.doctrine} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="animated-flow-line absolute left-0 right-0 top-0" />
          <div className="orbital-field absolute left-[-12rem] top-24 size-96 rounded-full opacity-18" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1fr]">
            <SectionHeading
              eyebrow="Rol de Trinomio"
              title="Trinomio mueve oportunidades desde greenfield energético hasta activos bancables."
              description="Ahí la oportunidad energética se convierte en Empresa Estructurada, y la empresa traduce excedente operativo en flujos capaces de dialogar con Project Finance, FICR, bancos, SAFIs, inversionistas y mercados de capital."
            />
            <div className="diagram-stage relative overflow-hidden p-6">
              <div className="conversion-rail absolute left-[8%] right-[8%] top-1/2 hidden md:block" />
              <div className="relative grid gap-3 lg:grid-cols-4">
                {transitionSequence.map((item, index) => (
                  <div
                    className="diagram-card min-h-44 p-4"
                    key={item}
                  >
                    <p className="text-xs text-trinomio-cyan">0{index + 1}</p>
                    <GlossaryTermLink className="mt-12 block text-sm font-semibold uppercase tracking-[0.12em] text-white">
                      {item}
                    </GlossaryTermLink>
                  </div>
                ))}
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.doctrine} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute -right-28 top-16 size-80 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Contexto de régimen"
              title="Dos sistemas económicos operan simultáneamente."
              description="La economía legado conserva escala, balances y activos existentes. La nueva economía crece desde electrificación, inteligencia y redes distribuidas que modifican la productividad marginal del capital."
            />
            <div className="diagram-stage mt-14 overflow-hidden p-5 sm:p-8">
              <div className="relative grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
                <article className="diagram-card p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#E2E6E9]/64">
                    Economía Legado
                  </p>
                  <h2 className="mt-8 text-4xl font-semibold leading-tight text-white">
                    Infraestructura térmica y control lineal.
                  </h2>
                  <div className="mt-8">
                    <SignalList items={legacyEconomy} />
                  </div>
                </article>
                <div className="hidden min-h-full place-items-center lg:grid">
                  <div className="w-28">
                    <div className="conversion-rail relative" />
                    <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
                      conversión
                    </p>
                  </div>
                </div>
                <article className="diagram-card relative overflow-hidden border-trinomio-cyan/24 p-6">
                  <div className="orbital-field orbital-drift absolute -right-20 -top-20 size-56 rounded-full opacity-28" />
                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-trinomio-cyan">
                      Nueva Economía
                    </p>
                    <h2 className="mt-8 text-4xl font-semibold leading-tight text-white">
                      Sistemas eléctricos, programables y adaptativos.
                    </h2>
                    <div className="mt-8">
                      <SignalList items={newEconomy} />
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.transition} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="adaptive-grid absolute inset-0 opacity-45" />
          <div className="orbital-field absolute right-[-10rem] top-16 size-96 rounded-full opacity-20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Umbral de financiabilidad"
              title="La oportunidad cruza el umbral cuando puede producir flujo gobernado."
              description="EFI identifica si una función energética crea excedente operativo. La oportunidad se vuelve financiable solo cuando ese excedente puede sostener contratos, trazabilidad y disciplina de capital."
            />
            <div className="accent-callout mt-10 border border-trinomio-cyan/30 bg-white/[0.04] p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
                EFI = MEV / LCOE
              </p>
              <div className="mt-5 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-trinomio-green">
                    MEV
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#E2E6E9]/88">
                    Valor de Energía Marginal: el valor económico que una
                    función energética libera al sistema en un momento y
                    ubicación específicos — tarifa evitada, reducción de punta,
                    capacidad, flexibilidad.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-trinomio-green">
                    LCOE
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#E2E6E9]/88">
                    Costo Nivelado de Energía: el costo de entregar esa función
                    durante su vida útil. Cae estructuralmente conforme maduran
                    solar y BESS.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-trinomio-green">
                    EFI &gt; 1
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#E2E6E9]/88">
                    Cuando MEV supera LCOE existe excedente operativo. Ese
                    excedente es la base sobre la que la Capa Empresa construye
                    contratos, gobierno y disciplina de capital.
                  </p>
                </div>
              </div>
            </div>
            <div className="diagram-stage relative mt-14 overflow-hidden p-5 sm:p-8">
              <div className="conversion-rail absolute left-[8%] right-[8%] top-1/2 hidden md:block" />
              <div className="relative grid gap-4 lg:grid-cols-5">
              {efiSignals.map((signal, index) => (
                <div
                  className="diagram-card relative min-h-52 overflow-hidden p-5 backdrop-blur"
                  key={signal}
                >
                  <div className="orbital-field absolute -right-14 -top-14 size-32 rounded-full opacity-20" />
                  <p className="relative text-sm text-trinomio-cyan">
                    0{index + 1}
                  </p>
                  <GlossaryTermLink className="relative mt-5 block text-sm font-semibold uppercase tracking-[0.12em] text-[#E2E6E9]/95">
                    {signal}
                  </GlossaryTermLink>
                </div>
              ))}
              </div>
            </div>
            <DiagramNavigation links={frameworkLinks.labs} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-elevated px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field absolute -left-20 top-10 size-80 rounded-full opacity-18" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <SectionHeading
              eyebrow="Presiones de contexto"
              title="El régimen macro aumenta la necesidad de arquitectura energética bancable."
              description="Costa Rica no necesita solo reforma energética. Necesita una arquitectura de crecimiento energético capaz de atraer inversión, sostener solidaridad, ampliar energía limpia y elevar productividad."
            />
            <div>
              <SignalList items={macroForces} />
              <p className="flow-card mt-8 border border-trinomio-cyan/25 bg-white/[0.035] p-5 text-lg leading-8 text-[#E2E6E9]/92">
                La electricidad debe tomar un rol mayor en la economía, y las
                renovables variables exigirán más flexibilidad, almacenamiento
                y eficiencia. En ese contexto, el capital busca estructuras con
                gobierno, información, contratos y protección suficientes para
                suscribir riesgo.
              </p>
            </div>
            <RelatedFrameworks links={frameworkLinks.transition} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="animated-flow-line absolute left-0 right-0 top-1/2" />
          <div className="orbital-field absolute right-[-8rem] top-20 size-96 rounded-full opacity-22" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Respuesta institucional"
              title="EE, Project Finance y FICR cierran el circuito."
              description="La transición no se financia con proyectos aislados. Se financia cuando la Empresa Estructurada convierte excedente operativo en activo bancable, Project Finance crea la primera capa de disciplina y el FICR escala esa bancabilidad hacia portafolio e intermediación de capital."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {[
                {
                  eyebrow: "01 — EE",
                  label: "Empresa Estructurada",
                  text: "Vehículo con gobierno, contratos, medición, asignación de riesgos y reporting. Convierte función energética en unidad techno-económica comprensible para bancos, SAFIs e inversionistas.",
                },
                {
                  eyebrow: "02 — Project Finance",
                  label: "Primera capa de bancabilidad",
                  text: "SPV, contratos, DSCR, CAFDS, asignación de riesgo y disciplina de lenders. Hace bancable el activo individual antes de que el capital institucional pueda escalar la estructura.",
                },
                {
                  eyebrow: "03 — FICR",
                  label: "Escala de capital",
                  text: "Vehículo regulado de capital de riesgo que agrupa EEs bancables en portafolio, comprime riesgo para el inversionista institucional y crea el puente hacia mercados de capital.",
                },
              ].map((item) => (
                <article
                  className="diagram-card relative min-h-80 overflow-hidden p-6"
                  key={item.eyebrow}
                >
                  <div className="orbital-field orbital-drift absolute -right-20 -top-20 size-52 rounded-full opacity-20" />
                  <p className="relative text-sm text-trinomio-cyan">
                    {item.eyebrow}
                  </p>
                  <h2 className="relative mt-4 text-3xl font-semibold leading-tight text-white">
                    {item.label}
                  </h2>
                  <p className="relative mt-5 text-sm leading-6 text-[#E2E6E9]/88">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <DiagramNavigation links={frameworkLinks.doctrine} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field absolute -left-24 top-20 size-80 rounded-full opacity-18" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Para quién es la transición"
              title="Distintos actores. Distintos mandatos. Una arquitectura común."
              description="La transición energética no afecta a todos de la misma forma. Cada actor enfrenta presión desde su posición institucional. Trinomio estructura la Capa Empresa desde el mandato específico de cada uno."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  audience: "Cooperativas y distribuidoras",
                  text: "Redes, usuarios y balances que cambian con DERs, electrificación y nuevas cargas. La Capa Empresa estructura la transición sin debilitar el modelo solidario.",
                },
                {
                  audience: "Desarrolladores y generadores",
                  text: "Activos u oportunidades que necesitan contratos, vehículos de proyecto y rutas de capital para volverse bancables ante bancos, SAFIs e inversionistas.",
                },
                {
                  audience: "Grandes consumidores y off-takers",
                  text: "La energía afecta costo, continuidad y competitividad. EaaS, PPA y resiliencia pueden convertirse en flujos contractuales gobernados y financiables.",
                },
                {
                  audience: "Inversionistas, SAFIs y bancos",
                  text: "El capital busca estructuras con gobierno, información, contratos y protección suficientes para suscribir riesgo. Project Finance y FICR organizan esa exposición.",
                },
              ].map((item, index) => (
                <article
                  className="flow-card border border-white/12 bg-white/[0.04] p-5"
                  key={item.audience}
                >
                  <p className="text-sm text-trinomio-cyan">0{index + 1}</p>
                  <h2 className="mt-8 text-2xl font-semibold leading-tight text-white">
                    {item.audience}
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-[#E2E6E9]/88">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>

        <OrbitalDivider />

        <section className="relative overflow-hidden bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="orbital-field orbital-drift absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-24" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Costa Rica no necesita solo más proyectos energéticos. Necesita
              una arquitectura que convierta presión de crecimiento, energía
              limpia y productividad en activos bancables.
            </h2>
            <RelatedFrameworks links={primaryLoopLinks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
