import { GlossaryTermLink } from "@/components/GlossaryTermLink";
import { institutionalTraction } from "@/lib/content";

export function InstitutionalTraction() {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-stretch">
      <div className="diagram-stage relative overflow-hidden p-6 sm:p-8">
        <div className="adaptive-grid absolute inset-0 opacity-35" />
        <div className="orbital-field orbital-drift absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-22" />
        <div className="relative grid min-h-80 content-center gap-4">
          {["Oportunidad energética", "Capa Empresa", "Capa Capital"].map(
            (item, index) => (
              <div
                className="flow-card border border-white/12 bg-white/[0.045] p-5"
                key={item}
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-9 place-items-center rounded-full border border-trinomio-cyan/35 text-sm text-trinomio-cyan">
                    0{index + 1}
                  </span>
                  <GlossaryTermLink className="text-lg font-semibold text-white">
                    {item}
                  </GlossaryTermLink>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="grid gap-5">
        {institutionalTraction.map((item, index) => (
          <article
            className="flow-card group relative overflow-hidden border border-white/12 bg-trinomio-navy-glass p-7 backdrop-blur"
            key={item.title}
          >
            <div className="orbital-field orbital-drift absolute -right-24 -top-24 size-64 rounded-full opacity-16 transition duration-500 group-hover:opacity-30" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between gap-5">
                <p className="text-sm text-trinomio-cyan">0{index + 1}</p>
                <div className="h-px flex-1 bg-[linear-gradient(90deg,var(--cyan),var(--electric-blue),transparent)] opacity-45" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-white">
                {item.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-[#E2E6E9]/90">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
