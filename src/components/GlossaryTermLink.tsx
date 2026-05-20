import Link from "next/link";

import { getGlossaryHref, getGlossaryTermByLabel } from "@/lib/glossary";

type GlossaryTermLinkProps = {
  children: string;
  className: string;
  glossaryLabel?: string;
};

export function GlossaryTermLink({
  children,
  className,
  glossaryLabel,
}: GlossaryTermLinkProps) {
  const term = getGlossaryTermByLabel(glossaryLabel ?? children);
  const resolvedClassName = `block ${className}`;

  if (!term) {
    return <span className={resolvedClassName}>{children}</span>;
  }

  return (
    <Link
      aria-label={`Ver ${children} en el glosario`}
      className={`${resolvedClassName} transition hover:border-trinomio-cyan/55 hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan`}
      href={getGlossaryHref(term.slug)}
    >
      {children}
    </Link>
  );
}
