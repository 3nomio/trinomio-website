import { ButtonLink } from "@/components/ButtonLink";
import {
  AdaptationChart,
  type AdaptationLabels,
  DrainsChart,
  type DrainsLabels,
  DryYearChart,
  type DryYearLabels,
  EngineDiagram,
  type EngineLabels,
  GrowthGapChart,
  type GrowthGapLabels,
  PlantsToCapital,
  type PlantsToCapitalLabels,
  RingDiagram,
  type RingLabels,
  TrackDiagram,
  type TrackLabels,
} from "@/components/EfiVisuals";
import { Logo } from "@/components/Logo";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { SectionHeading } from "@/components/SectionHeading";

// EFI — Energy Finance Integration: the solution page.
// Copy follows the approved "EFI — Website Brief for the Web Agent".
// Guardrails: no client names, every chart labelled illustrative,
// cautious wording on bills and grid services, outside the securities perimeter.

export type EfiLocale = "en" | "es";

type Card = { title: string; text: string };
type IcebergLabels = {
  eyebrow: string;
  title: string;
  intro: string;
  waterline: string;
  tip: readonly { label: string; title: string; text: string }[];
  obstacleLabel: string;
  cureLabel: string;
  below: readonly { title: string; text: string; cure: string }[];
  base: readonly Card[];
  closing: string;
  articleLabel: string;
  articleHref: string;
};

type EfiContent = {
  homeHref: string;
  hero: {
    eyebrow: string;
    title: string;
    subhead: string;
    primary: string;
    secondary: string;
  };
  track: {
    eyebrow: string;
    title: string;
    cards: readonly Card[];
    visual: TrackLabels;
  };
  questions: {
    eyebrow: string;
    title: string;
    items: readonly Card[];
    drains: DrainsLabels;
    dryYear: DryYearLabels;
  };
  deliverables: {
    eyebrow: string;
    title: string;
    items: readonly Card[];
  };
  capital: {
    eyebrow: string;
    title: string;
    cards: readonly Card[];
    gap: GrowthGapLabels;
    flow: PlantsToCapitalLabels;
  };
  how: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: readonly Card[];
    engine: EngineLabels;
    note: string;
  };
  esg: {
    eyebrow: string;
    title: string;
    forcesLabel: string;
    forces: readonly Card[];
    obligationsLabel: string;
    obligations: readonly Card[];
  };
  iceberg: IcebergLabels;
  rules: {
    eyebrow: string;
    title: string;
    regimes: readonly Card[];
    adaptation: AdaptationLabels;
  };
  rebalance: {
    eyebrow: string;
    title: string;
    steps: readonly Card[];
    restart: string;
    pricing: string;
    ring: RingLabels;
  };
  cta: {
    eyebrow: string;
    title: string;
    copy: string;
    button: string;
    footerLine: string;
  };
};

const CONTACT = "mailto:oscar@3nomio.com?subject=EFI%20%E2%80%94%20Energy%20Finance%20Integration";

const content: Record<EfiLocale, EfiContent> = {
  en: {
    homeHref: "/en",
    hero: {
      eyebrow: "Trinomio · ESG–Energy Finance · EFI",
      title: "Your track to the utility of the future, measured in cash.",
      subhead:
        "EFI — Energy Finance Integration — joins the physics of your plants with the books of your company. It shows which assets earn their keep, how far you can grow without new debt, and what it is worth to adapt before the rules and the climate force you to.",
      primary: "Start with your last five years",
      secondary: "See how it works",
    },
    track: {
      eyebrow: "The track",
      title: "Every utility is somewhere on the road. EFI tells you where, and what the trip is worth.",
      cards: [
        {
          title: "Where you are.",
          text: "A reading of your fleet, your finances and your exposure to climate and regulation, built from your own financial statements.",
        },
        {
          title: "Where you need to go.",
          text: "The utility of the future: a company whose value comes from being available at the right place and time, not only from selling kilowatt-hours.",
        },
        {
          title: "What the journey is worth.",
          text: "The value of adapting, in colones: what your company is worth if it rebalances, compared with staying as it is.",
        },
      ],
      visual: {
        title: "The road to the utility of the future",
        milestones: [
          "Today's fleet",
          "Cash map by plant",
          "Storage and solar in the mix",
          "Paid for flexibility",
          "Utility of the future",
        ],
        here: "You are here",
        illustrative: "Illustrative. Milestones and their order depend on the regulatory regime.",
        caption: "The destination is clear, and the route can be measured.",
      },
    },
    questions: {
      eyebrow: "Six questions EFI answers",
      title: "The questions your board is already asking.",
      items: [
        {
          title: "Which of our plants pay for themselves, and which drain cash?",
          text: "Each plant gets two ledgers: the cash it earns and the debt it carries. Netting them shows contributors and drains.",
        },
        {
          title: "How much can we grow without taking on new debt?",
          text: "EFI projects ten years of cash left for investment after financing.",
        },
        {
          title: "What do cheaper solar, batteries and electric vehicles do to what we already own?",
          text: "They change both what a new plant costs and what your existing plants earn, hour by hour.",
        },
        {
          title: "What happens in a dry year?",
          text: "When your hydro produces least, the generation tariff you pay tends to rise. EFI tests both together.",
        },
        {
          title: "What can storage earn now that grid services are being priced?",
          text: "EFI values reserve and flexibility under the new rules, with tariffs still under review.",
        },
        {
          title: "How do the new bills change our position?",
          text: "EFI runs your company under today's law and under each bill before the Assembly.",
        },
      ],
      drains: {
        title: "Contributors and drains",
        plants: ["Plant A", "Plant B", "Plant C", "Plant D", "Plant E", "Plant F"],
        axis: "Net cash after the plant's own debt, per year",
        contributors: "Contributes cash",
        drains: "Drains cash",
        illustrative: "Illustrative",
        caption: "Illustrative. A fleet that looks healthy in total can hide plants that consume cash.",
      },
      dryYear: {
        title: "The dry-year squeeze",
        hydro: "Own hydro output",
        surcharge: "Generation-tariff surcharge paid",
        solar: "Solar output",
        dryYear: "Dry year",
        yAxis: "Index, normal year = 100",
        xAxis: "Year",
        illustrative: "Illustrative",
        caption: "Illustrative. Costs rise exactly when hydro output falls, and solar hedges that gap.",
      },
    },
    deliverables: {
      eyebrow: "What you receive",
      title: "A clear picture, delivered every year.",
      items: [
        { title: "A cash map of your fleet", text: "What each plant contributes after its own debt." },
        {
          title: "An EFI score for each asset",
          text: "Whether it pays for itself today, and whether a new plant would now do the job more cheaply.",
        },
        { title: "A readiness index", text: "Where your company stands on the road to the utility of the future." },
        { title: "The value of adaptation", text: "What rebalancing is worth in colones, compared with standing still." },
        { title: "A capital-markets pathway", text: "Which cash flows can be packaged and financed, and on what terms." },
        {
          title: "A disclosure-ready risk assessment",
          text: "Climate and transition risk, prepared in line with IFRS S1 and S2.",
        },
      ],
    },
    capital: {
      eyebrow: "From organic growth to capital markets",
      title: "First we measure how far your own cash can take you. Then we connect you to capital for the rest.",
      cards: [
        {
          title: "Measure the gap.",
          text: "Your organic growth rate, the rate you need, and the distance between them.",
        },
        {
          title: "Make cash flows investable.",
          text: "EFI separates each plant's cash flow, tests it under conservative production and dry years, and reports it on one standard method.",
        },
        {
          title: "Connect to capital.",
          text: "Investors buy cash flows they can understand, test and trust. A common method across utilities creates the uniformity that pooled financing needs. Trinomio works with regulated issuers and fund managers to reach them.",
        },
      ],
      gap: {
        title: "The growth gap",
        organic: "Investment funded from own cash",
        needed: "Investment needed to stay on track",
        gap: "Gap to finance",
        yAxis: "Investment per year, index",
        xAxis: "Year",
        illustrative: "Illustrative",
        caption: "Illustrative. The gap is measurable, and that is what makes it financeable.",
      },
      flow: {
        title: "From plants to capital",
        steps: ["Your plants and books", "EFI", "Financeable projects", "Institutional capital"],
        caption: "EFI is the bridge between your assets and the investors who can finance them.",
      },
    },
    how: {
      eyebrow: "How it works",
      title: "Sense. Size. Transform.",
      intro:
        "EFI lets us put what we think we know to the test. We turn assumptions about energy, regulation and capital into scenarios that can be evaluated, to understand when an opportunity creates value, who can capture it, what conditions it needs to last and how it can be financed. Every evaluation and every observed result strengthens the next investment decision.",
      steps: [
        {
          title: "Sense",
          text: "We read your last five years of financial statements and operating data, plant by plant, to discover where and when value lies.",
        },
        {
          title: "Size",
          text: "The engine simulates your fleet hour by hour, values each plant, projects ten years of cash under climate, technology and regulatory scenarios, and separates the value each investment creates as an asset.",
        },
        {
          title: "Transform",
          text: "We turn the results into a rebalancing plan and transfer each asset to the capital best placed to finance it.",
        },
      ],
      engine: {
        title: "Inside the engine",
        energyLane: "Energy",
        financeLane: "Finance",
        energySteps: ["Data", "Generation", "Dispatch"],
        financeSteps: ["Data", "Debt by plant"],
        bypass: "goes straight to valuation",
        merged: ["Value by plant (EFI)", "Ten-year organic growth", "Reports"],
        caption: "Energy and finance meet in one engine, which no existing tool does.",
      },
      note: "Built in open, inspectable code. Proven solar, wind and storage models; hydro and dispatch developed by Trinomio. AI helps us build and run the engine; the judgement stays with people.",
    },
    esg: {
      eyebrow: "ESG–Energy Finance",
      title: "Three forces move your value. Three obligations make them visible.",
      forcesLabel: "The forces",
      forces: [
        {
          title: "Technology change",
          text: "Cheaper solar, batteries, electric vehicles and smarter demand.",
        },
        { title: "Regulatory change", text: "New laws and new prices for grid services." },
        {
          title: "Physical climate risk",
          text: "Droughts and changing rainfall on a hydro-based fleet.",
        },
      ],
      obligationsLabel: "The obligations",
      obligations: [
        {
          title: "IFRS S1 and S2",
          text: "Sustainability disclosure, adopted in Costa Rica, with first reports due in 2028 on 2027 data.",
        },
        {
          title: "Asset useful lives",
          text: "The yearly review of how long each asset will keep earning, under IFRS accounting.",
        },
        {
          title: "Access to finance",
          text: "Banks must now assess climate risk in their loan books.",
        },
      ],
    },
    iceberg: {
      eyebrow: "What you don't see",
      title: "Three actions in plain sight. Underneath, the reasons they are needed.",
      intro:
        "Like an iceberg, what EFI does shows in three actions. Below the surface sits what explains why they are needed: the obstacles that keep a good project from reaching capital, even when the money exists.",
      waterline: "Below the surface",
      tip: [
        {
          label: "Sense",
          title: "Discover where value lies",
          text: "We find where and when an asset creates real value, and check that the value holds at the real price of energy.",
        },
        {
          label: "Size",
          title: "Separate it as an asset",
          text: "We isolate that value from day-to-day operations and package it in a standard format a bank can read.",
        },
        {
          label: "Transform",
          title: "Transfer it to capital",
          text: "We hand it to whoever is best placed to hold it: first a bank, later bond or fund investors.",
        },
      ],
      obstacleLabel: "The obstacle",
      cureLabel: "How it is solved:",
      below: [
        {
          title: "A bank does not read kilowatt-hours.",
          text: "What cannot be read cannot be valued.",
          cure: "we translate physics into cash flow and give one clear threshold: the energy price up to which the project still pays.",
        },
        {
          title: "Small projects cost too much to study.",
          text: "Analysing a small loan costs almost as much as a large one.",
          cure: "a common format and grouping projects together make them cheap to assess.",
        },
        {
          title: "Unchecked risks scare lenders, and banks fill up.",
          text: "A prudent lender assumes the worst, and every bank has a limit.",
          cure: "we review environmental and social risks before anyone asks, and move the portfolio on to bonds or funds so the bank can lend again.",
        },
      ],
      base: [
        {
          title: "Before anything starts: a gate",
          text: "A project first passes the yes-or-no tests (it truly saves energy, it is environmentally and socially acceptable, it meets the taxonomy and the law in force) before time is spent valuing it.",
        },
        {
          title: "From start to finish: a measurement thread",
          text: "What we measure at the start travels with the asset to the investor, who expects tracking and a credible report of energy saved, money and emissions avoided.",
        },
      ],
      closing: "Money alone fixes none of these obstacles. Translation, standard packaging and early risk review do.",
      articleLabel: "Read the article: Eligible Is Not Bankable",
      articleHref: "/en/insights/eligible-is-not-bankable",
    },
    rules: {
      eyebrow: "Ready for the new rules",
      title: "One company, several possible rulebooks. EFI tests each one.",
      regimes: [
        {
          title: "Ley 10086 (today's base case)",
          text: "The law in force: a single national price, regulated tariffs and, now, a pool for grid services. Every plan is built first on these rules.",
        },
        {
          title: "Scenario: an open electricity market",
          text: "Retailers, aggregators and large consumers buying wholesale, which makes room for value by place and time. Bill 23.414 proposed this path; the Legislative Assembly archived it in October 2026, but the option may return.",
        },
        {
          title: "Scenario: stronger central planning within ICE",
          text: "Proposals now under discussion, such as Bill 25.781, point to stronger coordination of the system inside ICE. EFI models this path as a scenario until a text is approved.",
        },
      ],
      adaptation: {
        title: "The value of adaptation",
        regimes: [
          { name: "Ley 10086", note: "today's law" },
          { name: "Open market", note: "scenario" },
          { name: "Central plan", note: "scenario" },
        ],
        stay: "Company value if it stays as it is",
        rebalance: "Company value if it rebalances",
        adaptation: "Value of adaptation",
        yAxis: "Company value, index",
        illustrative: "Illustrative",
        caption: "Illustrative. Adapting pays under every rulebook, by different amounts.",
      },
    },
    rebalance: {
      eyebrow: "The yearly rebalance",
      title: "Not a one-off study. A yearly cycle, like your annual audit.",
      steps: [
        { title: "Onboard", text: "Your data, your fleet, your books." },
        { title: "Monitor", text: "Climate, technology and regulation through the year." },
        { title: "Rebalance", text: "What to keep, add, refinance or retire." },
        { title: "Report", text: "To your board, your lenders and your disclosures." },
      ],
      restart: "Then the cycle starts again.",
      pricing:
        "A yearly fee set by portfolio size and complexity, with a defined scope; interim reviews priced separately.",
      ring: {
        title: "The ring",
        steps: ["Onboard", "Monitor", "Rebalance", "Report"],
        centre: "Every year",
        caption: "EFI keeps pace with change rather than describing one moment.",
      },
    },
    cta: {
      eyebrow: "Start here",
      title: "Start with your last five years.",
      copy: "Send us five years of financial statements. We will show you where your company stands on the road, and what the next step is worth.",
      button: "Talk to us",
      footerLine:
        "EFI — Energy Finance Integration is a Trinomio solution. The “Utility of the Future” concept originates in MIT's 2016 study of the same name. All figures on this page are illustrative.",
    },
  },
  es: {
    homeHref: "/es",
    hero: {
      eyebrow: "Trinomio · ESG–Energy Finance · EFI",
      title: "Su ruta hacia la empresa eléctrica del futuro, medida en flujo de caja.",
      subhead:
        "EFI — Energy Finance Integration — une la física de sus plantas con los libros de su empresa. Muestra qué activos pagan su propio costo, cuánto puede crecer sin deuda nueva y cuánto vale adaptarse antes de que las reglas y el clima lo obliguen.",
      primary: "Empezar con sus últimos cinco años",
      secondary: "Ver cómo funciona",
    },
    track: {
      eyebrow: "La ruta",
      title: "Toda empresa eléctrica está en algún punto del camino. EFI le dice dónde y cuánto vale el trayecto.",
      cards: [
        {
          title: "Dónde está.",
          text: "Una lectura de su parque de generación, sus finanzas y su exposición al clima y a la regulación, construida a partir de sus propios estados financieros.",
        },
        {
          title: "Hacia dónde debe ir.",
          text: "La empresa eléctrica del futuro: una empresa cuyo valor proviene de estar disponible en el lugar y el momento correctos, no solo de vender kilovatios-hora.",
        },
        {
          title: "Cuánto vale el trayecto.",
          text: "El valor de adaptarse, en colones: cuánto vale su empresa si se rebalancea, frente a quedarse como está.",
        },
      ],
      visual: {
        title: "El camino hacia la empresa eléctrica del futuro",
        milestones: [
          "Parque actual",
          "Mapa de caja por planta",
          "Almacenamiento y solar en la mezcla",
          "Remunerada por su flexibilidad",
          "Empresa eléctrica del futuro",
        ],
        here: "Usted está aquí",
        illustrative: "Ilustrativo. Los hitos y su orden dependen del régimen regulatorio.",
        caption: "El destino es claro y la ruta se puede medir.",
      },
    },
    questions: {
      eyebrow: "Seis preguntas que EFI responde",
      title: "Las preguntas que su junta directiva ya se está haciendo.",
      items: [
        {
          title: "¿Cuáles de nuestras plantas se pagan solas y cuáles consumen caja?",
          text: "Cada planta recibe dos libros: el efectivo que genera y la deuda que carga. Al netearlos aparecen las que aportan y las que drenan.",
        },
        {
          title: "¿Cuánto podemos crecer sin contraer deuda nueva?",
          text: "EFI proyecta diez años del efectivo que queda para invertir después del financiamiento.",
        },
        {
          title: "¿Qué le hacen la solar, las baterías y los vehículos eléctricos más baratos a lo que ya tenemos?",
          text: "Cambian tanto lo que cuesta una planta nueva como lo que ganan sus plantas existentes, hora por hora.",
        },
        {
          title: "¿Qué pasa en un año seco?",
          text: "Cuando su generación hidroeléctrica produce menos, la tarifa de generación que usted paga tiende a subir. EFI evalúa ambas cosas juntas.",
        },
        {
          title: "¿Qué puede ganar el almacenamiento ahora que los servicios a la red se están tarifando?",
          text: "EFI valora la reserva y la flexibilidad bajo las nuevas reglas, con las tarifas todavía en revisión.",
        },
        {
          title: "¿Cómo cambian nuestra posición los nuevos proyectos de ley?",
          text: "EFI corre su empresa bajo la ley vigente y bajo cada proyecto que está en la Asamblea Legislativa.",
        },
      ],
      drains: {
        title: "Plantas que aportan y plantas que drenan",
        plants: ["Planta A", "Planta B", "Planta C", "Planta D", "Planta E", "Planta F"],
        axis: "Caja neta tras la deuda propia de la planta, por año",
        contributors: "Aporta caja",
        drains: "Drena caja",
        illustrative: "Ilustrativo",
        caption: "Ilustrativo. Un parque que se ve sano en total puede esconder plantas que consumen caja.",
      },
      dryYear: {
        title: "El apretón del año seco",
        hydro: "Generación hidroeléctrica propia",
        surcharge: "Recargo pagado en la tarifa de generación",
        solar: "Generación solar",
        dryYear: "Año seco",
        yAxis: "Índice, año normal = 100",
        xAxis: "Año",
        illustrative: "Ilustrativo",
        caption: "Ilustrativo. Los costos suben justo cuando cae la generación hidroeléctrica, y la solar cubre esa brecha.",
      },
    },
    deliverables: {
      eyebrow: "Lo que usted recibe",
      title: "Una imagen clara, entregada cada año.",
      items: [
        { title: "Un mapa de caja de su parque", text: "Lo que aporta cada planta después de su propia deuda." },
        {
          title: "Un puntaje EFI para cada activo",
          text: "Si se paga solo hoy, y si una planta nueva haría ya el mismo trabajo a menor costo.",
        },
        { title: "Un índice de preparación", text: "Dónde está su empresa en el camino hacia la empresa eléctrica del futuro." },
        { title: "El valor de la adaptación", text: "Cuánto vale rebalancearse, en colones, frente a quedarse quieto." },
        {
          title: "Una ruta hacia el mercado de capitales",
          text: "Qué flujos de caja pueden empaquetarse y financiarse, y en qué condiciones.",
        },
        {
          title: "Una evaluación de riesgos lista para revelar",
          text: "Riesgo climático y de transición, preparado conforme a las NIIF S1 y S2.",
        },
      ],
    },
    capital: {
      eyebrow: "Del crecimiento orgánico al mercado de capitales",
      title: "Primero medimos hasta dónde lo lleva su propio efectivo. Luego lo conectamos con capital para el resto.",
      cards: [
        {
          title: "Medir la brecha.",
          text: "Su tasa de crecimiento orgánico, la tasa que necesita y la distancia entre ambas.",
        },
        {
          title: "Volver invertibles los flujos de caja.",
          text: "EFI separa el flujo de caja de cada planta, lo somete a escenarios de producción conservadora y de años secos, y lo reporta con un solo método estándar.",
        },
        {
          title: "Conectar con el capital.",
          text: "Los inversionistas compran flujos de caja que pueden entender, probar y en los que pueden confiar. Un método común entre empresas eléctricas crea la uniformidad que necesita el financiamiento agrupado. Trinomio trabaja con emisores y gestores de fondos regulados para llegar a ellos.",
        },
      ],
      gap: {
        title: "La brecha de crecimiento",
        organic: "Inversión financiada con caja propia",
        needed: "Inversión necesaria para mantener la ruta",
        gap: "Brecha por financiar",
        yAxis: "Inversión por año, índice",
        xAxis: "Año",
        illustrative: "Ilustrativo",
        caption: "Ilustrativo. La brecha se puede medir, y eso es lo que la vuelve financiable.",
      },
      flow: {
        title: "De las plantas al capital",
        steps: ["Sus plantas y sus libros", "EFI", "Proyectos financiables", "Capital institucional"],
        caption: "EFI es el puente entre sus activos y los inversionistas que pueden financiarlos.",
      },
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Sentir. Dimensionar. Transformar.",
      intro:
        "EFI permite poner a prueba lo que creemos saber. Convertimos supuestos sobre energía, regulación y capital en escenarios evaluables para comprender cuándo una oportunidad crea valor, quién puede capturarlo, qué condiciones necesita para sostenerse y cómo puede financiarse. Cada evaluación y cada resultado observado fortalecen la siguiente decisión de inversión.",
      steps: [
        {
          title: "Sentir",
          text: "Leemos sus últimos cinco años de estados financieros y datos operativos, planta por planta, para descubrir dónde y cuándo hay valor.",
        },
        {
          title: "Dimensionar",
          text: "El motor simula su parque hora por hora, valora cada planta, proyecta diez años de caja bajo escenarios climáticos, tecnológicos y regulatorios y separa el valor de cada inversión como un activo.",
        },
        {
          title: "Transformar",
          text: "Convertimos los resultados en un plan de rebalanceo y transferimos cada activo al capital que mejor puede financiarlo.",
        },
      ],
      engine: {
        title: "Dentro del motor",
        energyLane: "Energía",
        financeLane: "Finanzas",
        energySteps: ["Datos", "Generación", "Despacho"],
        financeSteps: ["Datos", "Deuda por planta"],
        bypass: "pasa directo a la valoración",
        merged: ["Valor por planta (EFI)", "Crecimiento orgánico a diez años", "Reportes"],
        caption: "La energía y las finanzas se encuentran en un solo motor, algo que ninguna herramienta existente hace.",
      },
      note: "Construido en código abierto e inspeccionable. Modelos probados de solar, eólica y almacenamiento; la hidroeléctrica y el despacho los desarrolló Trinomio. La inteligencia artificial nos ayuda a construir y operar el motor; el criterio sigue siendo de las personas.",
    },
    esg: {
      eyebrow: "ESG–Energy Finance",
      title: "Tres fuerzas mueven su valor. Tres obligaciones las hacen visibles.",
      forcesLabel: "Las fuerzas",
      forces: [
        {
          title: "Cambio tecnológico",
          text: "Solar, baterías y vehículos eléctricos más baratos, y una demanda más inteligente.",
        },
        { title: "Cambio regulatorio", text: "Nuevas leyes y nuevos precios para los servicios a la red." },
        {
          title: "Riesgo climático físico",
          text: "Sequías y cambios en las lluvias sobre un parque basado en hidroelectricidad.",
        },
      ],
      obligationsLabel: "Las obligaciones",
      obligations: [
        {
          title: "NIIF S1 y S2",
          text: "Revelación de sostenibilidad, adoptada en Costa Rica, con los primeros reportes en 2028 sobre datos de 2027.",
        },
        {
          title: "Vida útil de los activos",
          text: "La revisión anual, bajo las NIIF, de cuánto tiempo seguirá generando ingresos cada activo.",
        },
        {
          title: "Acceso al financiamiento",
          text: "Los bancos ahora deben evaluar el riesgo climático de su cartera de crédito.",
        },
      ],
    },
    iceberg: {
      eyebrow: "Lo que no se ve",
      title: "Tres acciones a la vista. Debajo, las razones por las que hacen falta.",
      intro:
        "Como en un iceberg, lo que EFI hace se ve en tres acciones. Bajo la superficie está lo que explica por qué hacen falta: los obstáculos que impiden que un buen proyecto llegue al capital, aunque el dinero exista.",
      waterline: "Bajo la superficie",
      tip: [
        {
          label: "Sentir",
          title: "Descubrir dónde hay valor",
          text: "Encontramos dónde y cuándo un activo crea valor real, y comprobamos que ese valor resiste el precio real de la energía.",
        },
        {
          label: "Dimensionar",
          title: "Separarlo como un activo",
          text: "Aislamos ese valor de la operación diaria y lo empaquetamos en un formato estándar que un banco puede leer.",
        },
        {
          label: "Transformar",
          title: "Transferirlo al capital",
          text: "Lo entregamos a quien mejor puede mantenerlo: primero un banco; después, inversionistas de bonos o de fondos.",
        },
      ],
      obstacleLabel: "El obstáculo",
      cureLabel: "Cómo se resuelve:",
      below: [
        {
          title: "Un banco no lee kilovatios-hora.",
          text: "Lo que no se puede leer no se puede valorar.",
          cure: "traducimos la física en flujo de caja y entregamos un umbral claro: el precio de la energía hasta el cual el proyecto todavía paga.",
        },
        {
          title: "Los proyectos pequeños cuestan demasiado de estudiar.",
          text: "Analizar un crédito pequeño cuesta casi lo mismo que uno grande.",
          cure: "un formato común y la agrupación de proyectos los vuelven baratos de evaluar.",
        },
        {
          title: "Los riesgos sin revisar asustan, y los bancos se llenan.",
          text: "Un prestamista prudente supone lo peor, y cada banco tiene un límite.",
          cure: "revisamos los riesgos ambientales y sociales antes de que alguien pregunte, y trasladamos la cartera a bonos o fondos para que el banco vuelva a prestar.",
        },
      ],
      base: [
        {
          title: "Antes de empezar: una puerta",
          text: "Un proyecto pasa primero las pruebas de sí o no (ahorra energía de verdad, es aceptable ambiental y socialmente, cumple la taxonomía y la ley vigente) antes de invertir tiempo en valorarlo.",
        },
        {
          title: "De principio a fin: un hilo de medición",
          text: "Lo que medimos al inicio acompaña al activo hasta el inversionista, que exige seguimiento y un reporte creíble de energía ahorrada, dinero y emisiones evitadas.",
        },
      ],
      closing: "El dinero, por sí solo, no resuelve ninguno de estos obstáculos. Los resuelven la traducción, el empaque estándar y la revisión temprana del riesgo.",
      articleLabel: "Lea el artículo: Elegible no es financiable",
      articleHref: "/es/insights/elegible-no-es-financiable",
    },
    rules: {
      eyebrow: "Preparada para las nuevas reglas",
      title: "Una empresa, varias reglas posibles. EFI evalúa cada una.",
      regimes: [
        {
          title: "Ley 10.086 (el caso base actual)",
          text: "La ley vigente: un precio nacional único, tarifas reguladas y, ahora, un fondo común para los servicios a la red. Todo plan se construye primero sobre estas reglas.",
        },
        {
          title: "Escenario: un mercado eléctrico abierto",
          text: "Comercializadores, agregadores y grandes consumidores comprando en el mercado mayorista, lo que abre espacio al valor por lugar y por momento. El expediente 23.414 proponía esta vía; la Asamblea Legislativa lo archivó en octubre de 2026, pero la opción puede volver.",
        },
        {
          title: "Escenario: una planificación central reforzada en el ICE",
          text: "Propuestas hoy en discusión, como el expediente 25.781, apuntan a una coordinación más fuerte del sistema dentro del ICE. EFI modela esta vía como escenario mientras no se apruebe un texto.",
        },
      ],
      adaptation: {
        title: "El valor de la adaptación",
        regimes: [
          { name: "Ley 10.086", note: "ley vigente" },
          { name: "Mercado abierto", note: "escenario" },
          { name: "Plan central", note: "escenario" },
        ],
        stay: "Valor de la empresa si se queda como está",
        rebalance: "Valor de la empresa si se rebalancea",
        adaptation: "Valor de adaptarse",
        yAxis: "Valor de la empresa, índice",
        illustrative: "Ilustrativo",
        caption: "Ilustrativo. Adaptarse paga bajo cualquier reglamento, en distinta medida.",
      },
    },
    rebalance: {
      eyebrow: "El rebalanceo anual",
      title: "No es un estudio aislado. Es un ciclo anual, como su auditoría.",
      steps: [
        { title: "Incorporar", text: "Sus datos, su parque, sus libros." },
        { title: "Monitorear", text: "Clima, tecnología y regulación a lo largo del año." },
        { title: "Rebalancear", text: "Qué conservar, agregar, refinanciar o retirar." },
        { title: "Reportar", text: "A su junta directiva, a sus acreedores y en sus revelaciones." },
      ],
      restart: "Luego el ciclo comienza de nuevo.",
      pricing:
        "Una tarifa anual fijada según el tamaño y la complejidad del portafolio, con un alcance definido; las revisiones intermedias se cotizan por separado.",
      ring: {
        title: "El ciclo",
        steps: ["Incorporar", "Monitorear", "Rebalancear", "Reportar"],
        centre: "Cada año",
        caption: "EFI sigue el ritmo del cambio en lugar de describir un solo momento.",
      },
    },
    cta: {
      eyebrow: "Empiece aquí",
      title: "Empiece con sus últimos cinco años.",
      copy: "Envíenos cinco años de estados financieros. Le mostraremos dónde está su empresa en el camino y cuánto vale el siguiente paso.",
      button: "Conversemos",
      footerLine:
        "EFI — Energy Finance Integration es una solución de Trinomio. El concepto de la “empresa eléctrica del futuro” proviene del estudio Utility of the Future del MIT (2016). Todas las cifras de esta página son ilustrativas.",
    },
  },
};

function NumberedCards({ items, columns = "lg:grid-cols-3" }: { items: readonly Card[]; columns?: string }) {
  return (
    <div className={`mt-12 grid gap-5 md:grid-cols-2 ${columns}`}>
      {items.map((item, index) => (
        <article className="flow-card border p-6" key={item.title}>
          <p className="text-sm text-trinomio-cyan">0{index + 1}</p>
          <h3 className="mt-5 text-xl font-semibold leading-snug text-white">{item.title}</h3>
          <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/86">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function IcebergSection({ labels }: { labels: IcebergLabels }) {
  return (
    <section className="institutional-section scroll-mt-24 bg-trinomio-navy-deep text-white" id="iceberg">
      <div className="bg-trinomio-navy px-5 pt-24 sm:px-8 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={labels.eyebrow} title={labels.title} />
          <p className="mt-8 max-w-4xl text-lg leading-8 text-[#E2E6E9]/92">{labels.intro}</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {labels.tip.map((item, index) => (
              <article className="flow-card border p-6" key={item.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
                  0{index + 1} · {item.label}
                </p>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/86">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="relative mt-8 h-28" aria-hidden="true">
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1344 112">
              <defs>
                <linearGradient id="iceberg-water" x1="0" x2="1">
                  <stop offset="0" stopColor="#17d7ff" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#17d7ff" />
                  <stop offset="1" stopColor="#3fe083" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="iceberg-mass" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#8eefff" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#8eefff" stopOpacity="0.04" />
                </linearGradient>
              </defs>
              <polygon fill="#ffffff" opacity="0.85" points="652,28 680,20 700,58 640,58" />
              <polygon fill="url(#iceberg-mass)" points="640,58 700,58 740,86 760,112 600,112 612,86" />
              <path
                d="M0 58 Q 84 46 168 58 T 336 58 T 504 58 T 672 58 T 840 58 T 1008 58 T 1176 58 T 1344 58"
                fill="none"
                stroke="url(#iceberg-water)"
                strokeWidth="2"
              />
            </svg>
          </div>
          <p className="-mt-20 mb-14 text-right text-xs uppercase tracking-[0.24em] text-trinomio-cyan">{labels.waterline}</p>
        </div>
      </div>
      <div className="bg-[linear-gradient(180deg,#05203f,var(--navy-deep))] px-5 pb-24 pt-12 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {labels.below.map((item) => (
              <article className="border border-trinomio-cyan/20 bg-[#031126]/60 p-6" key={item.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-trinomio-cyan-soft/80">{labels.obstacleLabel}</p>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/86">{item.text}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-[#E2E6E9]/92">
                  <span className="font-semibold text-trinomio-green">{labels.cureLabel}</span> {item.cure}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {labels.base.map((item) => (
              <div className="border border-dashed border-trinomio-green/40 p-6" key={item.title}>
                <h4 className="text-base font-semibold text-trinomio-green">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/86">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="accent-callout mt-10 border p-5 text-base leading-7 text-white">
            <p>{labels.closing}</p>
            {labels.articleHref ? (
              <a className="mt-2 inline-block text-sm text-trinomio-cyan hover:underline" href={labels.articleHref}>
                {labels.articleLabel} →
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EfiSolution({ locale }: { locale: EfiLocale }) {
  const t = content[locale];

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(23,215,255,0.16),transparent_30rem),radial-gradient(circle_at_80%_28%,rgba(63,224,131,0.11),transparent_30rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
        <div className="adaptive-grid absolute inset-0 opacity-38" />
        <div className="orbital-field orbital-drift absolute right-[-14rem] top-16 size-[42rem] rounded-full opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <Logo
            className="mb-12 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
            href={t.homeHref}
            imageClassName="h-14 w-auto sm:h-16"
            priority
          />
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">{t.hero.eyebrow}</p>
          <h1 className="mt-10 max-w-6xl text-[clamp(2.3rem,9vw,3.25rem)] font-semibold leading-[1.05] sm:text-6xl sm:leading-[1.03] lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-8 text-[#E2E6E9]/92">{t.hero.subhead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#start">{t.hero.primary}</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              {t.hero.secondary}
            </ButtonLink>
          </div>
        </div>
      </section>

      <OrbitalDivider />

      {/* 2. The track */}
      <section className="institutional-section scroll-mt-24 bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32" id="track">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={t.track.eyebrow} title={t.track.title} />
          <NumberedCards items={t.track.cards} />
          <TrackDiagram labels={t.track.visual} />
        </div>
      </section>

      <OrbitalDivider />

      {/* 3. Six questions */}
      <section className="institutional-section scroll-mt-24 bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32" id="questions">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={t.questions.eyebrow} title={t.questions.title} />
          <ol className="mt-12 grid gap-4 md:grid-cols-2">
            {t.questions.items.map((item, index) => (
              <li className="context-node border p-5" key={item.title}>
                <p className="text-sm text-trinomio-cyan">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/86">{item.text}</p>
              </li>
            ))}
          </ol>
          <div className="grid gap-x-6 lg:grid-cols-2">
            <DrainsChart labels={t.questions.drains} />
            <DryYearChart labels={t.questions.dryYear} />
          </div>
        </div>
      </section>

      <OrbitalDivider />

      {/* 4. What you receive */}
      <section className="institutional-section scroll-mt-24 bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32" id="deliverables">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={t.deliverables.eyebrow} title={t.deliverables.title} />
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.deliverables.items.map((item) => (
              <li className="diagram-card p-6" key={item.title}>
                <h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#E2E6E9]/86">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OrbitalDivider />

      {/* 5. From organic growth to capital markets */}
      <section className="institutional-section scroll-mt-24 bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32" id="capital">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={t.capital.eyebrow} title={t.capital.title} />
          <NumberedCards items={t.capital.cards} />
          <div className="grid items-start gap-x-6 lg:grid-cols-2">
            <GrowthGapChart labels={t.capital.gap} />
            <PlantsToCapital labels={t.capital.flow} />
          </div>
        </div>
      </section>

      <OrbitalDivider />

      {/* 6. How it works */}
      <section className="institutional-section scroll-mt-24 bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32" id="how-it-works">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={t.how.eyebrow} title={t.how.title} />
          <p className="mt-8 max-w-4xl text-lg leading-8 text-[#E2E6E9]/92">{t.how.intro}</p>
          <NumberedCards items={t.how.steps} />
          <EngineDiagram labels={t.how.engine} />
          <p className="accent-callout mt-6 border p-5 text-sm leading-6 text-[#E2E6E9]/92">{t.how.note}</p>
        </div>
      </section>

      <OrbitalDivider />

      {/* 6b. Iceberg: what EFI does, and why each step is needed */}
      <IcebergSection labels={t.iceberg} />

      <OrbitalDivider />

      {/* 7. ESG–Energy Finance */}
      <section className="institutional-section scroll-mt-24 bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32" id="esg">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={t.esg.eyebrow} title={t.esg.title} />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[
              { label: t.esg.forcesLabel, items: t.esg.forces, accent: "text-trinomio-cyan" },
              { label: t.esg.obligationsLabel, items: t.esg.obligations, accent: "text-trinomio-green" },
            ].map((group) => (
              <div key={group.label}>
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${group.accent}`}>{group.label}</p>
                <ul className="mt-4 grid gap-3">
                  {group.items.map((item) => (
                    <li className="context-node border p-5" key={item.title}>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#E2E6E9]/86">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OrbitalDivider />

      {/* 8. Ready for the new rules */}
      <section className="institutional-section scroll-mt-24 bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32" id="rules">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={t.rules.eyebrow} title={t.rules.title} />
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <ul className="grid gap-4">
              {t.rules.regimes.map((item) => (
                <li className="flow-card border p-5" key={item.title}>
                  <h3 className="text-lg font-semibold leading-snug text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#E2E6E9]/86">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="-mt-10">
              <AdaptationChart labels={t.rules.adaptation} />
            </div>
          </div>
        </div>
      </section>

      <OrbitalDivider />

      {/* 9. The yearly rebalance */}
      <section className="institutional-section scroll-mt-24 bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32" id="rebalance">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={t.rebalance.eyebrow} title={t.rebalance.title} />
            <ol className="mt-8 grid gap-3">
              {t.rebalance.steps.map((step, index) => (
                <li className="context-node flex gap-4 border p-4" key={step.title}>
                  <span className="shrink-0 text-sm leading-6 text-trinomio-cyan">0{index + 1}</span>
                  <p className="text-sm leading-6 text-[#E2E6E9]/90">
                    <strong className="text-white">{step.title}.</strong> {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-[#E2E6E9]/80">{t.rebalance.restart}</p>
            <p className="accent-callout mt-6 border p-5 text-sm leading-6 text-[#E2E6E9]/92">{t.rebalance.pricing}</p>
          </div>
          <RingDiagram labels={t.rebalance.ring} />
        </div>
      </section>

      <OrbitalDivider />

      {/* 10. Call to action and footer line */}
      <section className="institutional-section scroll-mt-24 bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32" id="start">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-trinomio-green">{t.cta.eyebrow}</p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">{t.cta.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#E2E6E9]/90">{t.cta.copy}</p>
          <div className="mt-9 flex justify-center">
            <ButtonLink href={CONTACT}>{t.cta.button}</ButtonLink>
          </div>
          <p className="mt-3 text-sm text-[#E2E6E9]/70">oscar@3nomio.com</p>
          <p className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-6 text-xs leading-5 text-[#E2E6E9]/62">
            {t.cta.footerLine}
          </p>
        </div>
      </section>
    </>
  );
}
