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

export type EfiLocale = "en";

type Card = { title: string; text: string };

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
      steps: [
        {
          title: "Sense",
          text: "We read your last five years of financial statements and operating data, plant by plant.",
        },
        {
          title: "Size",
          text: "The engine simulates your fleet hour by hour, values each plant, and projects ten years of cash under climate, technology and regulatory scenarios.",
        },
        {
          title: "Transform",
          text: "We turn the results into a rebalancing plan and the financing to carry it out.",
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
    rules: {
      eyebrow: "Ready for the new rules",
      title: "One company, three possible rulebooks. EFI runs all three.",
      regimes: [
        {
          title: "Ley 10086 (today's base case)",
          text: "A single national price, regulated tariffs and, now, a pool for grid services.",
        },
        {
          title: "Bill 23.414 (a national electricity market)",
          text: "Retailers, aggregators and large consumers buying wholesale, which makes room for value by place and time.",
        },
        {
          title: "Bill 25.781 (a strengthened central plan)",
          text: "A stronger system operator inside ICE and larger limits for private plants.",
        },
      ],
      adaptation: {
        title: "The value of adaptation",
        regimes: [
          { name: "Ley 10086", note: "today's law" },
          { name: "Bill 23.414", note: "national market" },
          { name: "Bill 25.781", note: "central plan" },
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
          <NumberedCards items={t.how.steps} />
          <EngineDiagram labels={t.how.engine} />
          <p className="accent-callout mt-6 border p-5 text-sm leading-6 text-[#E2E6E9]/92">{t.how.note}</p>
        </div>
      </section>

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
