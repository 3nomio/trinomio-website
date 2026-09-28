import { SectionHeading } from "@/components/SectionHeading";

// "What is in force and what is being debated": the current legal framework,
// the two bills (presented neutrally) and the signal-to-position reading.
const frameworkCopy = {
  es: {
    eyebrow: "Marco regulatorio",
    title: "Lo que ya rige y lo que se discute",
    description:
      "Costa Rica no parte de cero. Un marco de varias leyes energéticas ya está vigente, y la Ley 10.086 es hoy el principal cauce del cambio tecnológico: habilita recursos energéticos distribuidos, y ARESEP avanza con rapidez en su implementación. La reforma del reglamento AR-RT-POASEN, vigente desde junio de 2026, ya incorpora recursos distribuidos, almacenamiento y agregadores.",
    debate:
      "Al mismo tiempo, la Asamblea Legislativa discute dos proyectos de ley que proponen rutas distintas. La Asamblea decidirá qué arquitectura adopta el país, y es probable que tome elementos de ambos.",
    routes: [
      {
        bill: "Expediente 23.414",
        name: "Ley de Armonización del Sistema Eléctrico Nacional",
        summary:
          "Propone un Mercado Eléctrico Nacional y un ente coordinador, ECOSEN, con funciones de operación del sistema y del mercado. Contempla agentes que podrían agregar demanda, además de contratos y transacciones de ocasión sujetos a reglas y regulación.",
        source:
          "https://d1qqtien6gys07.cloudfront.net/wp-content/uploads/2025/10/23414_Dictamen_TEXTO_ACTUALIZADO.pdf",
      },
      {
        bill: "Expediente 25.781",
        name: "Ley de Seguridad Energética y Modernización del Sistema Eléctrico Nacional",
        summary:
          "Mantiene al DOCSE como operador del sistema dentro del ICE, con desconcentración técnica, y propone instrumentos de eficiencia y seguridad energética. Contempla programas voluntarios de respuesta de la demanda cuyas reducciones verificables podrían recibir compensaciones aprobadas por ARESEP.",
        source:
          "https://d1qqtien6gys07.cloudfront.net/wp-content/uploads/2026/09/25781.pdf",
      },
    ],
    sourceLabel: "Consultar el texto legislativo →",
    routesTitle: "Dos rutas, una misma pregunta",
    routesText:
      "No tomamos partido por uno de ellos. El cambio tecnológico y el cambio climático ya están creando valor que la estructura anterior no sabe reconocer. Cualquiera que sea la ruta, la pregunta será la misma: ¿cómo pasa una capacidad física nueva a convertirse en un servicio que alguien puede solicitar, medir y pagar?",
    signalTitle: "De la señal a la posición",
    signalText:
      "En cada lugar y momento, el sistema revela una señal: cuánta energía se necesita, cuánto vale, qué tan cargada está la red y cuánta energía hay disponible o almacenada. Cada recurso interpreta esa señal dentro de sus propias restricciones técnicas, contractuales y regulatorias, y elige una posición: generar, cargar, descargar, comprar, vender, recortar o flexibilizar su consumo.",
    signalLabel: "Señal",
    positionLabel: "Posición",
    examples: [
      {
        signal: "Demanda alta, energía costosa y batería disponible.",
        position: "Descargar la batería y reducir la compra a la red.",
      },
      {
        signal: "Demanda baja, excedente solar y bajo valor de la energía.",
        position: "Cargar la batería o desplazar consumo.",
      },
    ],
    aiText:
      "La tecnología, incluida la inteligencia artificial aplicada a la energía, mejora esa decisión más rápido de lo que cambian las reglas. Las capacidades estarán listas antes de que la regulación las reconozca; la vasija debe estarlo también. La relación entre señal y posición es la misma bajo cualquier ruta legislativa: lo que cambia es quién toma la decisión, sea un prosumidor, un agregador, una empresa distribuidora o un futuro operador de la red de distribución.",
    vesselText:
      "Nuestra tarea es preparar la vasija: empresas que actúan hoy con los derechos que la Ley 10.086 y su regulación ya reconocen, y que tienen los contratos, los datos, la medición y el gobierno necesarios para adaptarse cuando las nuevas reglas lleguen.",
    note: "Ambos expedientes son propuestas sujetas a trámite y posibles cambios. Textos consultados en septiembre de 2026.",
  },
  en: {
    eyebrow: "Regulatory framework",
    title: "What is in force and what is being debated",
    description:
      "Costa Rica is not starting from zero. A framework of several energy laws is already in force, and Law 10.086 is today the main channel for technological change: it enables distributed energy resources, and ARESEP, the regulator, is moving quickly to implement it. The reform of the AR-RT-POASEN regulation, in force since June 2026, already incorporates distributed resources, storage and aggregators.",
    debate:
      "At the same time, the Legislative Assembly is debating two bills that propose different routes. The Assembly will decide which architecture the country adopts, and it is likely to take elements from both.",
    routes: [
      {
        bill: "Bill 23.414",
        name: "National Electricity System Harmonisation Act (Ley de Armonización del Sistema Eléctrico Nacional)",
        summary:
          "Proposes a National Electricity Market and a coordinating body, ECOSEN, with system- and market-operation functions. It provides for agents that could aggregate demand, as well as contracts and spot transactions subject to rules and regulation.",
        source:
          "https://d1qqtien6gys07.cloudfront.net/wp-content/uploads/2025/10/23414_Dictamen_TEXTO_ACTUALIZADO.pdf",
      },
      {
        bill: "Bill 25.781",
        name: "Energy Security and National Electricity System Modernisation Act (Ley de Seguridad Energética y Modernización del Sistema Eléctrico Nacional)",
        summary:
          "Keeps DOCSE as system operator within ICE, with technical deconcentration, and proposes energy-efficiency and energy-security instruments. It provides for voluntary demand-response programmes whose verifiable reductions could receive compensation approved by ARESEP.",
        source:
          "https://d1qqtien6gys07.cloudfront.net/wp-content/uploads/2026/09/25781.pdf",
      },
    ],
    sourceLabel: "Read the legislative text (in Spanish) →",
    routesTitle: "Two routes, one question",
    routesText:
      "We do not take sides. Technological change and climate change are already creating value that the previous structure cannot recognise. Whatever the route, the question will be the same: how does a new physical capability become a service that someone can request, measure and pay for?",
    signalTitle: "From signal to position",
    signalText:
      "At every place and moment, the system reveals a signal: how much energy is needed, what it is worth, how loaded the grid is and how much energy is available or stored. Each resource reads that signal within its own technical, contractual and regulatory constraints, and chooses a position: generate, charge, discharge, buy, sell, curtail or flex its consumption.",
    signalLabel: "Signal",
    positionLabel: "Position",
    examples: [
      {
        signal: "High demand, expensive energy and a battery available.",
        position: "Discharge the battery and reduce purchases from the grid.",
      },
      {
        signal: "Low demand, surplus solar and low energy value.",
        position: "Charge the battery or shift consumption.",
      },
    ],
    aiText:
      "Technology, including artificial intelligence applied to energy, improves that decision faster than the rules change. The capabilities will be ready before regulation recognises them; the vessel must be ready too. The relation between signal and position is the same under either legislative route: what changes is who makes the decision, whether a prosumer, an aggregator, a distribution company or a future distribution-system operator.",
    vesselText:
      "Our task is to prepare the vessel: enterprises that act today with the rights that Law 10.086 and its regulation already recognise, and that have the contracts, data, measurement and governance needed to adapt when the new rules arrive.",
    note: "Both bills are proposals still going through the legislative process and may change. Texts consulted in September 2026.",
  },
} as const;

export function RegulatoryFramework({
  locale = "es",
}: {
  locale?: keyof typeof frameworkCopy;
}) {
  const copy = frameworkCopy[locale];

  return (
    <>
      <SectionHeading
        description={copy.description}
        eyebrow={copy.eyebrow}
        title={copy.title}
      />
      <p className="mt-8 max-w-3xl text-base leading-7 text-[#E2E6E9]/90 sm:text-lg">
        {copy.debate}
      </p>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {copy.routes.map((route, index) => (
          <article
            className="diagram-card relative flex flex-col overflow-hidden p-6"
            key={route.bill}
          >
            <div className="orbital-field absolute -right-20 -top-20 size-52 rounded-full opacity-18" />
            <p className="relative text-sm text-trinomio-cyan">0{index + 1}</p>
            <h2 className="relative mt-6 text-3xl font-semibold leading-tight text-white">
              {route.bill}
            </h2>
            <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-green">
              {route.name}
            </p>
            <p className="relative mt-5 text-sm leading-6 text-[#E2E6E9]/88">
              {route.summary}
            </p>
            <a
              className="relative mt-6 text-sm font-semibold text-trinomio-cyan transition hover:underline"
              href={route.source}
              rel="noopener noreferrer"
              target="_blank"
            >
              {copy.sourceLabel}
            </a>
          </article>
        ))}
      </div>
      <div className="mt-10 grid max-w-4xl gap-5">
        <h3 className="text-2xl font-semibold text-white">{copy.routesTitle}</h3>
        <p className="text-lg leading-8 text-[#E2E6E9]/90">{copy.routesText}</p>
        <h3 className="mt-6 text-2xl font-semibold text-white">
          {copy.signalTitle}
        </h3>
        <p className="text-lg leading-8 text-[#E2E6E9]/90">{copy.signalText}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {copy.examples.map((item) => (
            <div className="flow-card border p-5 text-sm leading-6" key={item.signal}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-cyan">
                {copy.signalLabel}
              </p>
              <p className="mt-2 text-[#E2E6E9]/90">{item.signal}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-trinomio-green">
                {copy.positionLabel}
              </p>
              <p className="mt-2 text-[#E2E6E9]/90">{item.position}</p>
            </div>
          ))}
        </div>
        <p className="text-lg leading-8 text-[#E2E6E9]/90">{copy.aiText}</p>
        <p className="border-l border-trinomio-green/55 pl-4 text-base leading-7 text-trinomio-cyan-soft/90">
          {copy.vesselText}
        </p>
        <p className="text-xs leading-5 text-[#E2E6E9]/70">{copy.note}</p>
      </div>
    </>
  );
}
