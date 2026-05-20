type PillarCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  index: number;
};

export function PillarCard({
  title,
  eyebrow,
  description,
  index,
}: PillarCardProps) {
  return (
    <article className="flow-card group relative overflow-hidden border border-white/12 bg-white/[0.045] p-6">
      <div className="orbital-field orbital-drift absolute -bottom-24 -right-24 size-52 rounded-full opacity-18 transition group-hover:opacity-32" />
      <div className="relative mb-8 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
          {eyebrow}
        </p>
        <span className="text-sm text-[#E2E6E9]/60">0{index + 1}</span>
      </div>
      <div className="relative">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/88">{description}</p>
        <div className="mt-8 h-px bg-[linear-gradient(90deg,var(--cyan),var(--electric-blue),transparent)]" />
      </div>
    </article>
  );
}
