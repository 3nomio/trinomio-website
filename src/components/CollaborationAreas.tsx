import { collaborationAreas } from "@/lib/content";

type CollaborationAreasProps = {
  className?: string;
};

export function CollaborationAreas({ className = "" }: CollaborationAreasProps) {
  return (
    <div className={className}>
      <div className="mt-12 grid gap-4 lg:grid-cols-5">
        {collaborationAreas.map((area, index) => (
          <article
            className="flow-card group relative overflow-hidden border border-white/12 bg-trinomio-navy-glass p-5 backdrop-blur"
            key={area.title}
          >
            <div className="orbital-field orbital-drift absolute -right-20 -top-20 size-44 rounded-full opacity-16 transition duration-500 group-hover:opacity-30" />
            <div className="relative flex min-h-72 flex-col">
              <div className="mb-8 flex items-start justify-between gap-4">
                <p className="text-sm text-trinomio-cyan">0{index + 1}</p>
                <span className="h-px flex-1 translate-y-2 bg-[linear-gradient(90deg,var(--cyan),transparent)] opacity-40" />
              </div>
              <h3 className="text-xl font-semibold leading-tight text-white">
                {area.title}
              </h3>
              <p className="mt-5 text-sm leading-6 text-[#E2E6E9]/88">
                {area.forWhom}
              </p>
              <div className="mt-auto pt-7">
                <p className="border-t border-white/12 pt-4 text-sm leading-6 text-trinomio-cyan-soft/90">
                  {area.outcome}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
