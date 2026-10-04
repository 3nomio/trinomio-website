// Visuals for the EFI solution page (V1–V8 of the EFI website brief).
// All chart data is illustrative and every chart says so on the chart itself.
// Colour rule: energy = cyan, finance = green, reused wherever the two sides appear.

const ENERGY = "#17d7ff";
const ENERGY_SOFT = "#8eefff";
const FINANCE = "#3fe083";
const TEXT = "#e2e6e9";
const MUTED = "rgba(226,230,233,0.62)";
const GRID = "rgba(226,230,233,0.14)";
const NEUTRAL_BAR = "rgba(226,230,233,0.34)";

function IllustrativeTag({ label, x = 0, y = 14 }: { label: string; x?: number; y?: number }) {
  return (
    <text
      fill={ENERGY_SOFT}
      fontSize="12"
      fontWeight="700"
      letterSpacing="2"
      x={x}
      y={y}
    >
      {label.toUpperCase()}
    </text>
  );
}

type Figure = {
  title: string;
  caption: string;
  illustrative: string;
};

function FigureFrame({
  figure,
  children,
  legend,
}: {
  figure: Figure;
  children: React.ReactNode;
  legend?: React.ReactNode;
}) {
  return (
    <figure className="diagram-stage mt-10 p-5 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">
        {figure.title}
      </p>
      <div className="mt-5">{children}</div>
      {legend ? <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#E2E6E9]/86">{legend}</div> : null}
      <figcaption className="mt-4 text-sm leading-6 text-[#E2E6E9]/72">{figure.caption}</figcaption>
    </figure>
  );
}

function LegendItem({ color, label, dashed = false }: { color: string; label: string; dashed?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden="true"
        className="inline-block h-0.5 w-6"
        style={
          dashed
            ? { backgroundImage: `linear-gradient(90deg, ${color} 60%, transparent 0)`, backgroundSize: "8px 2px" }
            : { backgroundColor: color }
        }
      />
      {label}
    </span>
  );
}

function SwatchItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden="true" className="inline-block size-3" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}

/* V1 — The track */
export type TrackLabels = Figure & { milestones: readonly string[]; here: string };

export function TrackDiagram({ labels }: { labels: TrackLabels }) {
  return (
    <FigureFrame figure={labels}>
      <ol className="relative grid gap-4 lg:grid-cols-5 lg:gap-3">
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[0.6875rem] top-4 w-px bg-[linear-gradient(180deg,#17d7ff,#3fe083)] lg:bottom-auto lg:left-4 lg:right-4 lg:top-[0.6875rem] lg:h-px lg:w-auto lg:bg-[linear-gradient(90deg,#17d7ff,#3fe083)]"
        />
        {labels.milestones.map((milestone, index) => {
          const isHere = index === 0;
          const isGoal = index === labels.milestones.length - 1;
          return (
            <li className="relative flex gap-4 lg:flex-col lg:gap-4" key={milestone}>
              <span
                aria-hidden="true"
                className={`relative z-10 mt-0.5 size-[1.375rem] shrink-0 rounded-full border-2 ${
                  isGoal
                    ? "border-trinomio-green bg-trinomio-green"
                    : isHere
                      ? "border-trinomio-cyan bg-trinomio-cyan shadow-[0_0_18px_rgba(23,215,255,0.6)]"
                      : "border-trinomio-cyan/70 bg-trinomio-navy-deep"
                }`}
              />
              <div className="min-w-0">
                <p className="text-xs text-trinomio-cyan">0{index + 1}</p>
                <p className="mt-1 text-base font-semibold leading-6 text-white">{milestone}</p>
                {isHere ? (
                  <p className="mt-2 inline-block border border-trinomio-cyan/50 bg-trinomio-cyan/10 px-2 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-trinomio-cyan-soft">
                    {labels.here}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-trinomio-cyan-soft">
        {labels.illustrative}
      </p>
    </FigureFrame>
  );
}

/* V2 — Contributors and drains */
export type DrainsLabels = Figure & {
  plants: readonly string[];
  axis: string;
  drains: string;
  contributors: string;
};

const DRAIN_VALUES = [4.2, 2.9, 1.6, 0.7, -1.1, -2.4] as const;

export function DrainsChart({ labels }: { labels: DrainsLabels }) {
  const zero = 200;
  const unit = 38;
  return (
    <FigureFrame
      figure={labels}
      legend={
        <>
          <SwatchItem color={FINANCE} label={labels.contributors} />
          <SwatchItem color={NEUTRAL_BAR} label={labels.drains} />
        </>
      }
    >
      <svg aria-label={labels.caption} className="h-auto w-full" role="img" viewBox="0 0 420 290">
        <IllustrativeTag label={labels.illustrative} />
        <text fill={MUTED} fontSize="13" textAnchor="end" x={zero - 6} y="36">
          ← {labels.drains}
        </text>
        <text fill={MUTED} fontSize="13" x={zero + 6} y="36">
          {labels.contributors} →
        </text>
        {DRAIN_VALUES.map((value, index) => {
          const y = 48 + index * 36;
          const width = Math.abs(value) * unit;
          const x = value >= 0 ? zero : zero - width;
          return (
            <g key={labels.plants[index]}>
              <text fill={TEXT} fontSize="13" x="0" y={y + 17}>
                {labels.plants[index]}
              </text>
              <rect fill={value >= 0 ? FINANCE : NEUTRAL_BAR} height="24" width={width} x={x} y={y} />
              <text
                fill={TEXT}
                fontSize="12"
                textAnchor={value >= 0 ? "start" : "end"}
                x={value >= 0 ? x + width + 6 : x - 6}
                y={y + 17}
              >
                {value > 0 ? `+${value.toFixed(1)}` : value.toFixed(1)}
              </text>
            </g>
          );
        })}
        <line stroke={TEXT} strokeWidth="1.5" x1={zero} x2={zero} y1="42" y2="262" />
        <text fill={MUTED} fontSize="12" textAnchor="middle" x="210" y="284">
          {labels.axis}
        </text>
      </svg>
    </FigureFrame>
  );
}

/* Shared line-chart helpers */
const PLOT = { left: 52, right: 404, top: 40, bottom: 226 };

function scaleY(value: number, min: number, max: number) {
  return PLOT.bottom - ((value - min) / (max - min)) * (PLOT.bottom - PLOT.top);
}

function scaleX(index: number, count: number) {
  return PLOT.left + (index / (count - 1)) * (PLOT.right - PLOT.left);
}

function linePath(values: readonly number[], min: number, max: number) {
  return values
    .map((value, index) => `${index === 0 ? "M" : "L"}${scaleX(index, values.length).toFixed(1)},${scaleY(value, min, max).toFixed(1)}`)
    .join(" ");
}

function Axes({ min, max, ticks, yLabel, xLabel, count }: { min: number; max: number; ticks: readonly number[]; yLabel: string; xLabel: string; count: number }) {
  return (
    <g>
      {ticks.map((tick) => (
        <g key={tick}>
          <line stroke={GRID} x1={PLOT.left} x2={PLOT.right} y1={scaleY(tick, min, max)} y2={scaleY(tick, min, max)} />
          <text fill={MUTED} fontSize="13" textAnchor="end" x={PLOT.left - 6} y={scaleY(tick, min, max) + 4}>
            {tick}
          </text>
        </g>
      ))}
      {Array.from({ length: count }, (_, index) => (
        <text fill={MUTED} fontSize="13" key={index} textAnchor="middle" x={scaleX(index, count)} y={PLOT.bottom + 16}>
          {index + 1}
        </text>
      ))}
      <text fill={MUTED} fontSize="13" textAnchor="middle" x={(PLOT.left + PLOT.right) / 2} y={PLOT.bottom + 34}>
        {xLabel}
      </text>
      <text fill={MUTED} fontSize="13" textAnchor="middle" transform={`translate(12 ${(PLOT.top + PLOT.bottom) / 2}) rotate(-90)`}>
        {yLabel}
      </text>
    </g>
  );
}

/* V3 — The dry-year squeeze */
export type DryYearLabels = Figure & {
  hydro: string;
  surcharge: string;
  solar: string;
  dryYear: string;
  yAxis: string;
  xAxis: string;
};

const DRY_YEARS = [2, 3, 7, 10] as const;
const HYDRO = [100, 102, 80, 76, 99, 101, 103, 79, 100, 98, 77, 101] as const;
const SURCHARGE = [100, 98, 128, 136, 101, 99, 97, 131, 100, 102, 138, 99] as const;
const SOLAR = [100, 101, 106, 108, 101, 100, 102, 107, 101, 100, 109, 102] as const;

export function DryYearChart({ labels }: { labels: DryYearLabels }) {
  const min = 60;
  const max = 150;
  const count = HYDRO.length;
  const half = (PLOT.right - PLOT.left) / (count - 1) / 2;
  return (
    <FigureFrame
      figure={labels}
      legend={
        <>
          <LegendItem color={ENERGY} label={labels.hydro} />
          <LegendItem color={ENERGY_SOFT} dashed label={labels.solar} />
          <LegendItem color={FINANCE} label={labels.surcharge} />
          <SwatchItem color="rgba(96,157,255,0.22)" label={labels.dryYear} />
        </>
      }
    >
      <svg aria-label={labels.caption} className="h-auto w-full" role="img" viewBox="0 0 420 266">
        <IllustrativeTag label={labels.illustrative} />
        {DRY_YEARS.map((year) => (
          <rect
            fill="rgba(96,157,255,0.2)"
            height={PLOT.bottom - PLOT.top}
            key={year}
            width={half * 2}
            x={scaleX(year, count) - half}
            y={PLOT.top}
          />
        ))}
        <text fill={MUTED} fontSize="12" textAnchor="middle" x={scaleX(2.5, count)} y={PLOT.top - 6}>
          {labels.dryYear}
        </text>
        <Axes count={count} max={max} min={min} ticks={[60, 80, 100, 120, 140]} xLabel={labels.xAxis} yLabel={labels.yAxis} />
        <path d={linePath(SURCHARGE, min, max)} fill="none" stroke={FINANCE} strokeWidth="2.5" />
        <path d={linePath(HYDRO, min, max)} fill="none" stroke={ENERGY} strokeWidth="2.5" />
        <path d={linePath(SOLAR, min, max)} fill="none" stroke={ENERGY_SOFT} strokeDasharray="6 4" strokeWidth="2" />
      </svg>
    </FigureFrame>
  );
}

/* V4 — The growth gap */
export type GrowthGapLabels = Figure & {
  organic: string;
  needed: string;
  gap: string;
  yAxis: string;
  xAxis: string;
};

const ORGANIC = [40, 42, 43, 45, 46, 48, 49, 51, 52, 54] as const;
const NEEDED = [45, 52, 60, 68, 76, 84, 92, 99, 106, 112] as const;

export function GrowthGapChart({ labels }: { labels: GrowthGapLabels }) {
  const min = 30;
  const max = 120;
  const count = ORGANIC.length;
  const area = [
    ...NEEDED.map((v, i) => `${scaleX(i, count).toFixed(1)},${scaleY(v, min, max).toFixed(1)}`),
    ...[...ORGANIC].reverse().map((v, i) => `${scaleX(count - 1 - i, count).toFixed(1)},${scaleY(v, min, max).toFixed(1)}`),
  ].join(" ");
  return (
    <FigureFrame
      figure={labels}
      legend={
        <>
          <LegendItem color={FINANCE} label={labels.organic} />
          <LegendItem color={ENERGY} label={labels.needed} />
          <SwatchItem color="rgba(23,215,255,0.22)" label={labels.gap} />
        </>
      }
    >
      <svg aria-label={labels.caption} className="h-auto w-full" role="img" viewBox="0 0 420 266">
        <IllustrativeTag label={labels.illustrative} />
        <Axes count={count} max={max} min={min} ticks={[40, 60, 80, 100, 120]} xLabel={labels.xAxis} yLabel={labels.yAxis} />
        <polygon fill="rgba(23,215,255,0.18)" points={area} />
        <path d={linePath(NEEDED, min, max)} fill="none" stroke={ENERGY} strokeWidth="2.5" />
        <path d={linePath(ORGANIC, min, max)} fill="none" stroke={FINANCE} strokeWidth="2.5" />
        <text fill={TEXT} fontSize="15" fontWeight="700" textAnchor="middle" x={scaleX(6.2, count)} y={scaleY(68, min, max)}>
          {labels.gap}
        </text>
      </svg>
    </FigureFrame>
  );
}

/* V5 — From plants to capital */
export type PlantsToCapitalLabels = { title: string; steps: readonly string[]; caption: string };

export function PlantsToCapital({ labels }: { labels: PlantsToCapitalLabels }) {
  return (
    <figure className="diagram-stage mt-10 p-5 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">{labels.title}</p>
      <ol className="mt-6 flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {labels.steps.map((step, index) => (
          <li className="flex flex-col items-stretch gap-2 md:flex-1 md:flex-row md:items-center" key={step}>
            <span
              className={`flex min-h-20 flex-1 items-center justify-center border p-4 text-center text-base font-semibold leading-6 ${
                index === 1
                  ? "border-trinomio-cyan/70 bg-[linear-gradient(135deg,rgba(23,215,255,0.22),rgba(63,224,131,0.16))] text-white"
                  : "context-node border-white/15 text-white"
              }`}
            >
              {step}
            </span>
            {index < labels.steps.length - 1 ? (
              <span aria-hidden="true" className="self-center text-xl text-trinomio-cyan">
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-sm leading-6 text-[#E2E6E9]/72">{labels.caption}</figcaption>
    </figure>
  );
}

/* V6 — Inside the engine */
export type EngineLabels = {
  title: string;
  energyLane: string;
  financeLane: string;
  energySteps: readonly string[];
  financeSteps: readonly string[];
  bypass: string;
  merged: readonly string[];
  caption: string;
};

function Chip({ children, tone }: { children: React.ReactNode; tone: "energy" | "finance" | "merged" }) {
  const toneClass =
    tone === "energy"
      ? "border-trinomio-cyan/60 bg-trinomio-cyan/10"
      : tone === "finance"
        ? "border-trinomio-green/60 bg-trinomio-green/10"
        : "border-white/30 bg-[linear-gradient(135deg,rgba(23,215,255,0.18),rgba(63,224,131,0.18))]";
  return (
    <span className={`inline-flex min-h-11 items-center justify-center border px-3 py-2 text-center text-sm font-semibold leading-5 text-white ${toneClass}`}>
      {children}
    </span>
  );
}

export function EngineDiagram({ labels }: { labels: EngineLabels }) {
  return (
    <figure className="diagram-stage mt-10 p-5 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">{labels.title}</p>
      <div className="mt-6 grid items-center gap-5 lg:grid-cols-[1.5fr_auto_1fr]">
        <div className="grid gap-4">
          <div className="border-l-4 border-trinomio-cyan bg-white/[0.03] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-trinomio-cyan">{labels.energyLane}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {labels.energySteps.map((step, index) => (
                <span className="inline-flex items-center gap-2" key={step}>
                  <Chip tone="energy">{step}</Chip>
                  {index < labels.energySteps.length - 1 ? <span aria-hidden="true" className="text-trinomio-cyan">→</span> : null}
                </span>
              ))}
            </div>
          </div>
          <div className="border-l-4 border-trinomio-green bg-white/[0.03] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-trinomio-green">{labels.financeLane}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {labels.financeSteps.map((step, index) => (
                <span className="inline-flex items-center gap-2" key={step}>
                  <Chip tone="finance">{step}</Chip>
                  {index < labels.financeSteps.length - 1 ? <span aria-hidden="true" className="text-trinomio-green">→</span> : null}
                </span>
              ))}
              <span className="inline-flex items-center gap-2 text-xs italic text-[#E2E6E9]/72">
                <span aria-hidden="true" className="hidden h-px w-10 border-t border-dashed border-trinomio-green sm:inline-block" />
                {labels.bypass}
              </span>
            </div>
          </div>
        </div>
        <span aria-hidden="true" className="justify-self-center text-2xl text-white/80">
          <span className="lg:hidden">↓</span>
          <span className="hidden lg:inline">⇒</span>
        </span>
        <ol className="grid gap-2">
          {labels.merged.map((step, index) => (
            <li className="grid gap-2" key={step}>
              <Chip tone="merged">{step}</Chip>
              {index < labels.merged.length - 1 ? <span aria-hidden="true" className="justify-self-center text-white/70">↓</span> : null}
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-5 text-sm leading-6 text-[#E2E6E9]/72">{labels.caption}</figcaption>
    </figure>
  );
}

/* V7 — The value of adaptation */
export type AdaptationLabels = Figure & {
  regimes: readonly { name: string; note: string }[];
  stay: string;
  rebalance: string;
  adaptation: string;
  yAxis: string;
};

const ADAPTATION = [
  [100, 118],
  [92, 131],
  [97, 114],
] as const;

export function AdaptationChart({ labels }: { labels: AdaptationLabels }) {
  const base = 232;
  const top = 58;
  const max = 140;
  const scale = (value: number) => ((base - top) * value) / max;
  return (
    <FigureFrame
      figure={labels}
      legend={
        <>
          <SwatchItem color={NEUTRAL_BAR} label={labels.stay} />
          <SwatchItem color={FINANCE} label={labels.rebalance} />
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="inline-block h-3 w-1.5 border-y border-r border-white" />
            {labels.adaptation}
          </span>
        </>
      }
    >
      <svg aria-label={labels.caption} className="h-auto w-full" role="img" viewBox="0 0 420 290">
        <IllustrativeTag label={labels.illustrative} />
        <text fill={MUTED} fontSize="13" x="0" y="34">
          {labels.yAxis}
        </text>
        <line stroke={GRID} x1="20" x2="410" y1={base} y2={base} />
        {ADAPTATION.map(([stay, rebalance], index) => {
          const cx = 80 + index * 130;
          const stayH = scale(stay);
          const rebH = scale(rebalance);
          const bracketX = cx + 40;
          return (
            <g key={labels.regimes[index].name}>
              <rect fill={NEUTRAL_BAR} height={stayH} width="32" x={cx - 36} y={base - stayH} />
              <rect fill={FINANCE} height={rebH} width="32" x={cx + 2} y={base - rebH} />
              <path
                d={`M${bracketX - 4},${base - stayH} H${bracketX} V${base - rebH} H${bracketX - 4}`}
                fill="none"
                stroke={TEXT}
                strokeWidth="1.5"
              />
              <text fill={TEXT} fontSize="12" textAnchor="middle" x={cx + 10} y={base - rebH - 8}>
                {labels.adaptation}
              </text>
              <text fill={TEXT} fontSize="12" fontWeight="700" textAnchor="middle" x={cx} y={base + 20}>
                {labels.regimes[index].name}
              </text>
              <text fill={MUTED} fontSize="12" textAnchor="middle" x={cx} y={base + 36}>
                {labels.regimes[index].note}
              </text>
            </g>
          );
        })}
      </svg>
    </FigureFrame>
  );
}

/* V8 — The ring */
export type RingLabels = { title: string; steps: readonly string[]; centre: string; caption: string };

export function RingDiagram({ labels }: { labels: RingLabels }) {
  const cx = 180;
  const cy = 165;
  const r = 108;
  const angles = [-90, 0, 90, 180];
  const gap = 24;
  const point = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };
  return (
    <figure className="diagram-stage mx-auto w-full max-w-md p-5 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-trinomio-cyan">{labels.title}</p>
      <svg aria-label={labels.caption} className="mt-4 h-auto w-full" role="img" viewBox="0 0 360 330">
        <defs>
          <marker id="efi-ring-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="6" refY="4">
            <path d="M0,0 L8,4 L0,8 z" fill={ENERGY} />
          </marker>
        </defs>
        <circle cx={cx} cy={cy} fill="none" r={r} stroke={GRID} strokeWidth="1" />
        {angles.map((start) => {
          const from = point(start + gap);
          const to = point(start + 90 - gap);
          return (
            <path
              d={`M${from.x.toFixed(1)},${from.y.toFixed(1)} A${r},${r} 0 0 1 ${to.x.toFixed(1)},${to.y.toFixed(1)}`}
              fill="none"
              key={start}
              markerEnd="url(#efi-ring-arrow)"
              stroke={ENERGY}
              strokeWidth="2.5"
            />
          );
        })}
        {angles.map((deg, index) => {
          const p = point(deg);
          return (
            <g key={labels.steps[index]}>
              <rect fill="#0a2747" height="34" rx="17" stroke={index === 2 ? FINANCE : ENERGY} strokeWidth="1.5" width="104" x={p.x - 52} y={p.y - 17} />
              <text fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle" x={p.x} y={p.y + 5}>
                {labels.steps[index]}
              </text>
            </g>
          );
        })}
        <text fill={TEXT} fontSize="15" fontWeight="700" textAnchor="middle" x={cx} y={cy + 5}>
          {labels.centre}
        </text>
      </svg>
      <figcaption className="mt-2 text-sm leading-6 text-[#E2E6E9]/72">{labels.caption}</figcaption>
    </figure>
  );
}
