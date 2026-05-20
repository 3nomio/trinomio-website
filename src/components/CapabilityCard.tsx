type CapabilityCardProps = {
  title: string;
  label: string;
  description: string;
  index: number;
};

export function CapabilityCard({
  title,
  label,
  description,
  index,
}: CapabilityCardProps) {
  return (
    <article className="flow-card group relative overflow-hidden border border-white/12 bg-white/[0.045] p-6">
      <div className="orbital-field orbital-drift absolute -right-20 -top-20 size-48 rounded-full opacity-28 transition duration-500 group-hover:scale-110 group-hover:opacity-45" />
      <div className="relative">
        <div className="mb-10 flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-trinomio-cyan">
            {label}
          </p>
          <span className="grid size-10 place-items-center rounded-full border border-trinomio-cyan/35 text-sm text-trinomio-cyan">
            {index + 1}
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/88">{description}</p>
        <div className="mt-8 h-px bg-[linear-gradient(90deg,var(--cyan),var(--electric-blue),transparent)] transition group-hover:bg-[linear-gradient(90deg,var(--green),var(--cyan),transparent)]" />
      </div>
    </article>
  );
}
