import Link from "next/link";
import type { ContextualLink } from "@/lib/navigation";

type ContextualNodeGridProps = {
  links: readonly ContextualLink[];
  eyebrow?: string;
  className?: string;
};

export function ContextualNodeGrid({
  links,
  eyebrow = "Siguiente lectura",
  className = "",
}: ContextualNodeGridProps) {
  return (
    <nav className={className} aria-label={eyebrow}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-trinomio-cyan">
        {eyebrow}
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {links.map((link) => (
          <Link
            className="context-node group relative overflow-hidden border border-white/12 bg-white/[0.04] p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-trinomio-cyan/55 hover:bg-white/[0.065] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
            href={link.href}
            key={`${link.href}-${link.label}`}
          >
            <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,var(--cyan),var(--electric-blue),transparent)] transition duration-300 group-hover:scale-x-100" />
            <span className="block text-sm font-semibold text-white transition group-hover:text-trinomio-cyan-soft">
              {link.label}
            </span>
            {link.meta ? (
              <span className="mt-2 block text-xs leading-5 text-[#E2E6E9]/68">
                {link.meta}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function RelatedFrameworks({
  links,
  className = "",
}: {
  links: readonly ContextualLink[];
  className?: string;
}) {
  return (
    <ContextualNodeGrid
      className={`mt-10 ${className}`}
      eyebrow="Framework relacionado"
      links={links}
    />
  );
}

export function DiagramNavigation({
  links,
  className = "",
}: {
  links: readonly ContextualLink[];
  className?: string;
}) {
  return (
    <ContextualNodeGrid
      className={`mt-6 ${className}`}
      eyebrow="Navegación del diagrama"
      links={links}
    />
  );
}
