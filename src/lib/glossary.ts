export const glossaryCategories = [
  "Transición Energética",
  "Finanzas y Capital",
  "Marcos Trinomio",
  "Regulación y Diseño de Mercado",
  "Riesgo y Sostenibilidad",
  "Conceptos box-key",
] as const;

export type GlossaryCategory = (typeof glossaryCategories)[number];

export type GlossaryTerm = {
  term: string;
  slug: string;
  category: GlossaryCategory;
  definition: string;
  trinomioLens?: string;
  aliases?: readonly string[];
};

export const glossaryTerms = [
  {
    term: "DER",
    slug: "der",
    category: "Transición Energética",
    definition:
      "Recurso Energético Distribuido (DER): activo de generación, almacenamiento, respuesta de demanda o carga controlable ubicado cerca del consumo o de la infraestructura de distribución.",
    trinomioLens:
      "Para Trinomio, los DER no son equipos aislados. Son la base física de producción que debe organizarse mediante contratos, empresas operativas y arquitectura de flujos antes de que el capital institucional pueda suscribirlos.",
  },
  {
    term: "u-DER",
    slug: "u-der",
    category: "Transición Energética",
    definition:
      "Configuración DER de escala o interfaz con empresa distribuidora, diseñada para interactuar con redes de distribución, planificación del sistema u obligaciones reguladas de servicio.",
    trinomioLens:
      "Los u-DER se ubican cerca del diseño de mercado. Su financiabilidad depende de cómo la Capa Empresa asigna riesgos de interconexión, tarifa, restricción operativa y prestación del servicio.",
  },
  {
    term: "P-DER",
    slug: "p-der",
    category: "Transición Energética",
    definition:
      "Marco de Trinomio para DER programables y orientados al prosumidor bajo Ley 10086: sistemas energéticos distribuidos integrados dentro de arquitecturas de empresa, riesgo y capital.",
    trinomioLens:
      "Un P-DER es un DER interpretado desde Energía -> Empresa -> Capital. El activo se evalúa no solo por su rendimiento técnico, sino por su capacidad de sostener una empresa operativa invertible, capturar valor marginal programable y evolucionar hacia estructuras compatibles con mercados de capital.",
    aliases: ["p-DER"],
  },
  {
    term: "T-DER",
    slug: "t-der",
    category: "Marcos Trinomio",
    definition:
      "Arquitectura DER de transición que organiza activos distribuidos, contratos y capacidades operativas durante el paso desde sistemas energéticos convencionales hacia plataformas institucionales más programables.",
    trinomioLens:
      "Un T-DER se evalúa por su función de adaptación institucional: cómo permite reasignar riesgo, preservar continuidad operativa, integrar nuevas reglas de mercado y preparar la Capa Empresa para estructuras P-DER o portafolios financiables de mayor escala.",
    aliases: ["Transitional DER", "transition-layer DER"],
  },
  {
    term: "BESS",
    slug: "bess",
    category: "Transición Energética",
    definition:
      "Sistema de almacenamiento de energía en baterías (BESS) utilizado para almacenar electricidad, gestionar carga, aportar resiliencia, desplazar energía en el tiempo o prestar servicios a la red.",
  },
  {
    term: "Eficiencia energética",
    slug: "eficiencia-energetica",
    category: "Transición Energética",
    definition:
      "Reducción estructural del consumo energético requerido para producir, operar o sostener una actividad económica sin deteriorar su función productiva.",
    trinomioLens:
      "La eficiencia se vuelve financiable cuando puede medirse, contratarse y traducirse en ahorros, resiliencia o flujos de caja dentro de una Capa Empresa.",
    aliases: ["eficiencia"],
  },
  {
    term: "Resiliencia operativa",
    slug: "resiliencia-operativa",
    category: "Riesgo y Sostenibilidad",
    definition:
      "Capacidad de una operación, activo o empresa para sostener continuidad, adaptación y recuperación frente a interrupciones energéticas, climáticas, regulatorias o financieras.",
    trinomioLens:
      "Trinomio trata la resiliencia como una capacidad estructural: requiere activos, contratos, gobierno y rutas de capital capaces de responder bajo presión.",
    aliases: ["resiliencia"],
  },
  {
    term: "Energía como Servicio (Energy-as-a-Service)",
    slug: "energy-as-a-service",
    category: "Transición Energética",
    definition:
      "Modelo contractual en el que el cliente paga por resultados energéticos, disponibilidad del servicio o ahorros, en lugar de ser propietario y operador directo del activo.",
    aliases: ["EaaS", "Energy-as-a-Service"],
  },
  {
    term: "Transición como Servicio (Transition-as-a-Service)",
    slug: "transition-as-a-service",
    category: "Marcos Trinomio",
    definition:
      "Modelo de estructuración en el que capacidades, activos y contratos de transición se organizan como servicio institucional para convertir oportunidades energéticas en unidades operables y financiables.",
    aliases: ["TaaS", "Transition-as-a-Service"],
  },
  {
    term: "PPA",
    slug: "ppa",
    category: "Finanzas y Capital",
    definition:
      "Contrato de compraventa de energía que define precio, plazo, entrega, obligaciones de pago, riesgos asignados y condiciones de desempeño entre productor y comprador.",
  },
  {
    term: "Comprador contractual (Off-taker)",
    slug: "off-taker",
    category: "Finanzas y Capital",
    definition:
      "Comprador o beneficiario contractual de energía, capacidad, servicios o producción proveniente de un activo o portafolio energético.",
    aliases: ["off-taker", "offtaker"],
  },
  {
    term: "Distribuidor eléctrico",
    slug: "energy-distributor",
    category: "Regulación y Diseño de Mercado",
    definition:
      "Entidad responsable de distribuir electricidad mediante redes locales, normalmente bajo tarifas reguladas, obligaciones de servicio y deberes de planificación de red.",
  },
  {
    term: "SPV",
    slug: "spv",
    category: "Finanzas y Capital",
    definition:
      "Vehículo de Propósito Especial (SPV): entidad legal creada para contener un activo específico, un conjunto contractual, un perímetro de responsabilidad o una estructura de financiamiento de proyectos.",
  },
  {
    term: "EE / Empresa Estructurada",
    slug: "empresa-estructurada",
    category: "Marcos Trinomio",
    definition:
      "Empresa Estructurada: unidad empresarial organizada con gobierno, contratos, medición, asignación de riesgos y reporting, diseñada para convertir oportunidades energéticas en flujos gobernados y vehículos financiables.",
    trinomioLens:
      "La EE es donde la oportunidad energética se convierte en una unidad institucionalmente legible: define el perímetro empresarial que permite conectar activos distribuidos, operación, contratos, riesgo y capital.",
    aliases: ["Capa Empresa", "Empresa Estructurada", "EE"],
  },
  {
    term: "Gobierno operativo",
    slug: "gobierno-operativo",
    category: "Marcos Trinomio",
    definition:
      "Conjunto de reglas, responsabilidades, decisiones, controles y derechos de información que permiten operar activos y contratos con disciplina institucional.",
    aliases: ["gobierno", "gobernanza"],
  },
  {
    term: "Arquitectura contractual",
    slug: "arquitectura-contractual",
    category: "Finanzas y Capital",
    definition:
      "Diseño coordinado de contratos de suministro, servicio, operación, mantenimiento, cobro, garantías y terminación que asigna riesgos y sostiene flujos de caja.",
    aliases: ["contratos"],
  },
  {
    term: "Estrategia de estructuración",
    slug: "estrategia-estructuracion",
    category: "Marcos Trinomio",
    definition:
      "Criterio que define cómo una oportunidad energética debe organizar activos, empresa, contratos, riesgo y capital para volverse institucionalmente legible.",
    aliases: ["estrategia"],
  },
  {
    term: "Medición",
    slug: "medicion",
    category: "Transición Energética",
    definition:
      "Captura verificable de producción, consumo, disponibilidad, ahorro, desempeño o variables operativas necesarias para sostener cobro, reporting y suscripción.",
  },
  {
    term: "Riesgo",
    slug: "riesgo",
    category: "Riesgo y Sostenibilidad",
    definition:
      "Exposición técnica, contractual, regulatoria, operativa, financiera o de mercado que debe identificarse, asignarse, mitigarse o valorarse antes de formar capital.",
    aliases: ["riesgos"],
  },
  {
    term: "FICR",
    slug: "ficr",
    category: "Finanzas y Capital",
    definition:
      "Vehículo de mercado de capitales utilizado para agrupar, gobernar y desplegar capital de riesgo en empresas, proyectos o programas de inversión estructurada elegibles.",
    trinomioLens:
      "En la arquitectura de Trinomio, el FICR es una capa de formación de capital. Puede conectar carteras de Empresas Estructuradas con inversionistas que requieren gobierno, disciplina de suscripción y construcción de portafolio.",
  },
  {
    term: "Financiamiento de Proyectos (Project Finance)",
    slug: "project-finance",
    category: "Finanzas y Capital",
    definition:
      "Método de financiamiento en el que el repago se sustenta principalmente en flujos de caja del proyecto, derechos contractuales, desempeño del activo y riesgos asignados, más que en el crédito corporativo general.",
  },
  {
    term: "Bancabilidad",
    slug: "bankability",
    category: "Finanzas y Capital",
    definition:
      "Grado en que un proyecto, empresa o paquete contractual puede satisfacer requisitos de financiadores e inversionistas sobre riesgo, certeza de ingresos, gobierno y exigibilidad.",
  },
  {
    term: "DSCR",
    slug: "dscr",
    category: "Finanzas y Capital",
    definition:
      "Índice de cobertura del servicio de deuda (DSCR): métrica que compara el flujo de caja disponible con el servicio de deuda programado durante un periodo.",
  },
  {
    term: "Flujo de caja",
    slug: "flujo-de-caja",
    category: "Finanzas y Capital",
    definition:
      "Ingreso neto disponible, medible y gobernado que permite cubrir operación, reservas, servicio de deuda, reinversión o distribuciones conforme a una estructura definida.",
    aliases: ["flujos de caja"],
  },
  {
    term: "Deuda estructurada",
    slug: "deuda-estructurada",
    category: "Finanzas y Capital",
    definition:
      "Financiamiento de deuda organizado alrededor de contratos, garantías, prioridad de pagos, covenants, reservas y capacidad de repago de un activo, empresa o portafolio.",
    aliases: ["deuda"],
  },
  {
    term: "Titularización",
    slug: "titularizacion",
    category: "Finanzas y Capital",
    definition:
      "Proceso de transformar derechos sobre flujos de caja o activos en instrumentos financieros negociables o suscribibles bajo una estructura de mercado de capitales.",
  },
  {
    term: "Bonos",
    slug: "bonos",
    category: "Finanzas y Capital",
    definition:
      "Instrumentos de deuda emitidos para financiar o refinanciar activos, empresas o portafolios, con pagos definidos por una estructura contractual y crediticia.",
  },
  {
    term: "WACC",
    slug: "wacc",
    category: "Finanzas y Capital",
    definition:
      "Costo promedio ponderado de capital (WACC): retorno requerido combinado entre deuda y capital accionario, ponderado por la estructura de capital.",
  },
  {
    term: "P50",
    slug: "p50",
    category: "Transición Energética",
    definition:
      "Estimación de producción con 50 por ciento de probabilidad de excedencia; suele utilizarse como caso central o mediano del recurso.",
  },
  {
    term: "P50 / P90",
    slug: "p50-p90",
    category: "Transición Energética",
    definition:
      "Par de escenarios de recurso o producción usado para contrastar un caso central con una lectura conservadora de excedencia, útil para sensibilidad, deuda y suscripción.",
  },
  {
    term: "P90",
    slug: "p90",
    category: "Transición Energética",
    definition:
      "Estimación de producción con 90 por ciento de probabilidad de excedencia; suele utilizarse como caso conservador del recurso para financiamiento.",
  },
  {
    term: "MEV",
    slug: "mev",
    category: "Marcos Trinomio",
    definition:
      "Señal de valor de mercado, energía o empresa utilizada para conectar capacidad energética productiva con formación de valor económico.",
    trinomioLens:
      "MEV se trata como una señal de navegación, no como un eslogan. Ayuda a evaluar si una oportunidad energética puede sostener una empresa con lógica durable de ingresos y relevancia para el capital.",
  },
  {
    term: "EFI",
    slug: "efi",
    category: "Marcos Trinomio",
    definition:
      "Indicador o filtro energía-finanzas utilizado para evaluar cuándo la productividad energética, la estructura de empresa y la preparación para capital comienzan a alinearse.",
    trinomioLens:
      "EFI marca el punto en que un activo técnico empieza a ser legible institucionalmente: producción energética medible, riesgo asignable, operación gobernada y flujo de caja suscribible.",
  },
  {
    term: "LCOE",
    slug: "lcoe",
    category: "Transición Energética",
    definition:
      "Costo nivelado de energía (LCOE): estimación del costo energético durante la vida útil por unidad de electricidad producida, usualmente expresada por MWh o kWh.",
  },
  {
    term: "Compresión de Riesgo",
    slug: "risk-compression",
    category: "Riesgo y Sostenibilidad",
    definition:
      "Proceso de reducir, reasignar, documentar o valorar riesgo para que activos o flujos de caja sean más financiables.",
    trinomioLens:
      "La compresión de riesgo es el trabajo central de la Capa Empresa. El riesgo técnico, la exposición regulatoria, la incertidumbre contractual y la ambigüedad operativa deben comprimirse antes de que el capital pueda escalar la estructura.",
  },
  {
    term: "Riesgos extra-financieros",
    slug: "riesgos-extra-financieros",
    category: "Riesgo y Sostenibilidad",
    definition:
      "Riesgos climáticos, regulatorios, sociales, tecnológicos, operativos o de gobernanza que pueden afectar valor, costo de capital, continuidad o financiabilidad.",
  },
  {
    term: "Riesgo Aleatorio",
    slug: "aleatory-risk",
    category: "Riesgo y Sostenibilidad",
    definition:
      "Riesgo derivado de aleatoriedad o variabilidad inherente, como clima, irradiancia, volatilidad de demanda o patrones de indisponibilidad.",
  },
  {
    term: "Riesgo Epistémico",
    slug: "epistemic-risk",
    category: "Riesgo y Sostenibilidad",
    definition:
      "Riesgo derivado de conocimiento incompleto, datos débiles, incertidumbre de modelo, supuestos no probados o historial operativo insuficiente.",
  },
  {
    term: "Riesgo de Transición",
    slug: "transition-risk",
    category: "Riesgo y Sostenibilidad",
    definition:
      "Exposición financiera u operativa creada por cambios de política pública, evolución tecnológica, ajustes de precios de mercado, estándares legales y migración de clientes durante la transición energética.",
  },
  {
    term: "Doble Materialidad",
    slug: "double-materiality",
    category: "Riesgo y Sostenibilidad",
    definition:
      "Enfoque de sostenibilidad que considera tanto cómo los factores ambientales y sociales externos afectan el valor empresarial, como cómo la empresa afecta a la sociedad y al ambiente.",
  },
  {
    term: "ISSB S1/S2",
    slug: "issb-s1-s2",
    category: "Riesgo y Sostenibilidad",
    definition:
      "Estándares internacionales de divulgación de sostenibilidad enfocados en información financiera general relacionada con sostenibilidad y divulgaciones vinculadas al clima.",
  },
  {
    term: "Filtro de Gestión Integral de Riesgos (ERM)",
    slug: "erm-filter",
    category: "Marcos Trinomio",
    definition:
      "Filtro de gestión integral de riesgos empresariales (ERM) utilizado para clasificar, priorizar y estructurar riesgos antes de que una oportunidad avance hacia la formación de capital.",
    trinomioLens:
      "El Filtro ERM traduce la complejidad de transición en categorías accionables para decisión: qué puede contratarse, asegurarse, gobernarse, valorarse, transferirse o retenerse en la empresa.",
    aliases: ["ERM"],
  },
  {
    term: "Capacidades Dinámicas",
    slug: "dynamic-capabilities",
    category: "Marcos Trinomio",
    definition:
      "Capacidad organizacional para detectar cambios, asignar recursos, adaptar estructuras y reconfigurar estrategia conforme evolucionan mercados y tecnologías.",
  },
  {
    term: "Tecnología",
    slug: "tecnologia",
    category: "Transición Energética",
    definition:
      "Conjunto de activos, sistemas, medición, control y capacidades técnicas que modifican la productividad energética y las posibilidades de estructuración empresarial.",
  },
  {
    term: "Regulación",
    slug: "regulacion",
    category: "Regulación y Diseño de Mercado",
    definition:
      "Marco legal, tarifario, operativo y de mercado que determina derechos, obligaciones, permisos, compensaciones y límites para activos energéticos y estructuras de capital.",
  },
  {
    term: "Tarifas",
    slug: "tarifas",
    category: "Regulación y Diseño de Mercado",
    definition:
      "Precios, cargos o mecanismos regulados y contractuales que determinan la economía de consumo, generación, ahorro, servicios energéticos y repago.",
  },
  {
    term: "Demanda energética",
    slug: "demanda-energetica",
    category: "Transición Energética",
    definition:
      "Perfil de consumo, carga, necesidad de continuidad y flexibilidad que permite dimensionar activos, contratos y rutas de valor energético.",
  },
  {
    term: "Sensibilidad tarifaria",
    slug: "sensibilidad-tarifaria",
    category: "Regulación y Diseño de Mercado",
    definition:
      "Análisis de cómo cambios en tarifas, cargos, compensaciones o precios regulados alteran ahorro, ingreso, DSCR, bancabilidad o valor del activo.",
  },
  {
    term: "Desempeño operativo",
    slug: "desempeno-operativo",
    category: "Transición Energética",
    definition:
      "Resultado medible de disponibilidad, producción, ahorro, continuidad, mantenimiento y cumplimiento técnico de un activo o portafolio energético.",
    aliases: ["desempeño"],
  },
  {
    term: "Trazabilidad financiera",
    slug: "trazabilidad-financiera",
    category: "Finanzas y Capital",
    definition:
      "Capacidad de seguir ingresos, costos, cobros, reservas, pagos y distribuciones desde el activo hasta la empresa o vehículo de capital.",
    aliases: ["trazabilidad"],
  },
  {
    term: "Reporting",
    slug: "reporting",
    category: "Finanzas y Capital",
    definition:
      "Sistema de información periódica que permite a operadores, financiadores e inversionistas revisar desempeño, riesgos, covenants y evolución de flujos.",
  },
  {
    term: "Alianzas institucionales",
    slug: "alianzas-institucionales",
    category: "Marcos Trinomio",
    definition:
      "Relaciones con contrapartes estratégicas, financieras, operativas o públicas que aportan capacidades, activos, permisos, demanda o capital a una estructura.",
    aliases: ["alianzas"],
  },
  {
    term: "Detectar-Dimensionar-Rebalancear (Sense-Size-Rebalance)",
    slug: "sense-size-rebalance",
    category: "Marcos Trinomio",
    definition:
      "Secuencia operativa de Trinomio para detectar señales de transición, dimensionar estructuras de empresa y activos, y reasignar capital hacia mejores posiciones ajustadas por riesgo.",
    trinomioLens:
      "Detectar-Dimensionar-Rebalancear es el ciclo de gestión detrás de Energía -> Empresa -> Capital. Mantiene la estrategia vinculada a señales observables de transición, formación de empresas invertibles y migración disciplinada de capital.",
  },
  {
    term: "Energía -> Empresa -> Capital",
    slug: "energy-firm-capital",
    category: "Marcos Trinomio",
    definition:
      "Doctrina central de Trinomio: la energía crea la base física productiva, la empresa la organiza en flujos de caja gobernables y el capital escala la estructura.",
    trinomioLens:
      "La doctrina evita que la transición energética se lea como una lista de proyectos. Enmarca la unidad invertible como una Capa Empresa que conecta activos distribuidos, contratos, propiedad, riesgo y mercados de capital.",
  },
  {
    term: "Corredor Tarifario",
    slug: "tariff-corridor",
    category: "Regulación y Diseño de Mercado",
    definition:
      "Rango regulatorio o comercial dentro del cual los resultados tarifarios, costos evitados, mecanismos de compensación o economía del cliente permanecen viables.",
    trinomioLens:
      "Un corredor tarifario es un límite de diseño de mercado para la suscripción. Ayuda a identificar dónde la economía DER puede sostener una estructura empresarial contratable, no solo una propuesta aislada para un cliente.",
  },
  {
    term: "Ley 10086",
    slug: "ley-10086",
    category: "Regulación y Diseño de Mercado",
    definition:
      "Marco legal costarricense asociado con recursos energéticos distribuidos y la apertura de nuevos arreglos para generación distribuida y participación de mercado relacionada.",
  },
  {
    term: "Expediente 23414",
    slug: "expediente-23414",
    category: "Regulación y Diseño de Mercado",
    definition:
      "Expediente legislativo costarricense relevante para la modernización del mercado eléctrico, los recursos distribuidos y el diseño institucional de rutas de transición.",
  },
  {
    term: "Combustión térmica",
    slug: "combustion-termica",
    category: "Conceptos box-key",
    definition:
      "Base energética de la economía legado organizada alrededor de combustibles, calor, motores térmicos y cadenas de suministro centralizadas.",
  },
  {
    term: "Infraestructura centralizada",
    slug: "infraestructura-centralizada",
    category: "Conceptos box-key",
    definition:
      "Modelo de activos concentrados, grandes redes y control jerárquico que caracteriza buena parte del sistema energético heredado.",
  },
  {
    term: "Procesos mecánicos",
    slug: "procesos-mecanicos",
    category: "Conceptos box-key",
    definition:
      "Procesos productivos dominados por movimiento, calor, combustión o equipos físicos antes de su integración con medición, control digital y sistemas adaptativos.",
  },
  {
    term: "Escasez de combustibles",
    slug: "escasez-de-combustibles",
    category: "Conceptos box-key",
    definition:
      "Condición de dependencia y restricción sobre insumos fósiles que afecta costos, continuidad operativa y exposición macroenergética.",
  },
  {
    term: "Control lineal",
    slug: "control-lineal",
    category: "Conceptos box-key",
    definition:
      "Forma de operación con decisiones secuenciales y poco adaptativas, típica de sistemas que no incorporan señales distribuidas en tiempo real.",
  },
  {
    term: "Electrificación",
    slug: "electrificacion",
    category: "Conceptos box-key",
    definition:
      "Migración de usos energéticos hacia electricidad como vector productivo, con implicaciones para carga, infraestructura, medición y modelos de negocio.",
  },
  {
    term: "Inteligencia artificial",
    slug: "inteligencia-artificial",
    category: "Conceptos box-key",
    definition:
      "Capacidad computacional para detectar patrones, optimizar decisiones y operar sistemas complejos con mayor sensibilidad a datos y señales de contexto.",
  },
  {
    term: "Sistemas distribuidos",
    slug: "sistemas-distribuidos",
    category: "Conceptos box-key",
    definition:
      "Arquitectura donde activos, cargas, datos y decisiones se ubican en múltiples nodos coordinados, no en un solo centro operativo.",
  },
  {
    term: "Infraestructura programable",
    slug: "infraestructura-programable",
    category: "Conceptos box-key",
    definition:
      "Infraestructura física conectada a datos, reglas, automatización y control operativo que permite ajustar desempeño y uso económico en el tiempo.",
  },
  {
    term: "Redes adaptativas",
    slug: "redes-adaptativas",
    category: "Conceptos box-key",
    definition:
      "Redes capaces de responder a cambios de generación, demanda, congestión, resiliencia o señales económicas mediante operación flexible.",
  },
  {
    term: "Presión regulatoria",
    slug: "presion-regulatoria",
    category: "Conceptos box-key",
    definition:
      "Intensificación de normas, supervisión o expectativas públicas que modifica permisos, tarifas, divulgación, riesgo y estrategia empresarial.",
  },
  {
    term: "Volatilidad energética",
    slug: "volatilidad-energetica",
    category: "Conceptos box-key",
    definition:
      "Variabilidad de precios, disponibilidad, demanda o condiciones operativas que afecta continuidad, costo de capital y decisiones de inversión.",
  },
  {
    term: "Nuevos requerimientos de capital",
    slug: "nuevos-requerimientos-de-capital",
    category: "Conceptos box-key",
    definition:
      "Exigencias adicionales de inversión, reservas, cobertura, información o estructura financiera necesarias para operar bajo el régimen de transición.",
  },
  {
    term: "Necesidad de resiliencia",
    slug: "necesidad-de-resiliencia",
    category: "Conceptos box-key",
    definition:
      "Demanda institucional de continuidad, redundancia y capacidad de recuperación frente a interrupciones energéticas, climáticas o financieras.",
  },
  {
    term: "Repricing del riesgo",
    slug: "repricing-del-riesgo",
    category: "Conceptos box-key",
    definition:
      "Revaloración de exposiciones técnicas, regulatorias, climáticas, contractuales o financieras cuando cambia la percepción institucional del riesgo.",
  },
  {
    term: "Rebalanceo institucional",
    slug: "rebalanceo-institucional",
    category: "Conceptos box-key",
    definition:
      "Ajuste de prioridades, portafolios, activos o mandatos conforme cambian señales de transición, riesgo y oportunidad económica.",
  },
  {
    term: "Energía distribuida",
    slug: "energia-distribuida",
    category: "Conceptos box-key",
    definition:
      "Producción, almacenamiento, gestión o uso energético ubicado cerca de la carga y organizado mediante activos distribuidos, datos y contratos.",
  },
  {
    term: "Flujo gobernado",
    slug: "flujo-gobernado",
    category: "Conceptos box-key",
    definition:
      "Flujo económico sujeto a reglas, medición, responsabilidades, controles y asignación de riesgos que lo vuelven legible para capital institucional.",
  },
  {
    term: "Capital institucional",
    slug: "capital-institucional",
    category: "Conceptos box-key",
    definition:
      "Capital administrado por bancos, fondos, inversionistas, SAFIs u otros actores con criterios formales de riesgo, gobierno, escala y trazabilidad.",
  },
  {
    term: "Activo medible",
    slug: "activo-medible",
    category: "Conceptos box-key",
    definition:
      "Activo cuya producción, disponibilidad, ahorro o desempeño puede observarse con suficiente consistencia para sostener contrato, cobro y suscripción.",
  },
  {
    term: "Contrato exigible",
    slug: "contrato-exigible",
    category: "Conceptos box-key",
    definition:
      "Contrato con obligaciones, derechos, remedios y mecanismos de cumplimiento suficientemente claros para respaldar operación y flujo de caja.",
  },
  {
    term: "Flujo trazable",
    slug: "flujo-trazable",
    category: "Conceptos box-key",
    definition:
      "Ingreso, ahorro o pago que puede seguirse desde el activo o contrato hasta la empresa, el vehículo o el inversionista.",
  },
  {
    term: "Capital suscribible",
    slug: "capital-suscribible",
    category: "Conceptos box-key",
    definition:
      "Capital que puede comprometerse porque la oportunidad presenta información, gobierno, riesgo y flujo con suficiente disciplina institucional.",
  },
  {
    term: "De adentro hacia afuera",
    slug: "de-adentro-hacia-afuera",
    category: "Conceptos box-key",
    definition:
      "Lectura de materialidad que observa cómo la empresa, sus activos y sus decisiones afectan el entorno, los clientes, el sistema y los grupos relacionados.",
  },
  {
    term: "De afuera hacia adentro",
    slug: "de-afuera-hacia-adentro",
    category: "Conceptos box-key",
    definition:
      "Lectura de materialidad que observa cómo regulación, clima, tecnología, mercado y contexto externo afectan valor, riesgo y continuidad empresarial.",
  },
  {
    term: "Adaptabilidad",
    slug: "adaptabilidad",
    category: "Conceptos box-key",
    definition:
      "Capacidad de ajustar operación, estructura, contratos o estrategia cuando cambian señales tecnológicas, regulatorias, energéticas o financieras.",
  },
  {
    term: "Flexibilidad",
    slug: "flexibilidad",
    category: "Conceptos box-key",
    definition:
      "Capacidad de modificar uso, despacho, operación, estructura de contrato o asignación de capital sin perder continuidad ni disciplina económica.",
  },
  {
    term: "Capa Capital",
    slug: "capa-capital",
    category: "Conceptos box-key",
    definition:
      "Capa de vehículos, inversionistas, criterios de underwriting y estructuras de mercado que escala flujos gobernados originados en la Capa Empresa.",
  },
  {
    term: "Flujos de energía",
    slug: "flujos-de-energia",
    category: "Conceptos box-key",
    definition:
      "Movimiento físico o contractual de energía, capacidad, ahorro o servicio energético entre activos, cargas, empresas y contrapartes.",
  },
  {
    term: "Oportunidad energética",
    slug: "oportunidad-energetica",
    category: "Conceptos box-key",
    definition:
      "Situación donde recurso, carga, activo, tecnología o regulación pueden organizarse en una estructura productiva, operable y financiable.",
  },
] as const satisfies readonly GlossaryTerm[];

export const glossaryTermsAlphabetical = [...glossaryTerms].sort((a, b) =>
  a.term.localeCompare(b.term, "es", { sensitivity: "base" }),
);

export const glossaryTermsByCategory = glossaryCategories.map((category) => ({
  category,
  terms: glossaryTerms.filter((term) => term.category === category),
}));

export function getGlossaryHref(slug: string) {
  return `/es/glosario#${slug}`;
}

function normalizeGlossaryLabel(label: string) {
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function getGlossaryTermByLabel(label: string) {
  const normalizedLabel = normalizeGlossaryLabel(label);

  return (glossaryTerms as readonly GlossaryTerm[]).find((term) => {
    const labels = [term.term, term.slug, ...(term.aliases ?? [])];

    return labels.some(
      (candidate) => normalizeGlossaryLabel(candidate) === normalizedLabel,
    );
  });
}
