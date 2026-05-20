import type { ReactNode } from "react";
import Link from "next/link";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "border-transparent bg-[linear-gradient(135deg,var(--cyan),var(--electric-blue))] text-trinomio-navy shadow-[0_0_34px_rgba(96,157,255,0.28)] hover:shadow-[0_0_48px_rgba(23,215,255,0.22)]"
      : "border-white/20 bg-[rgba(96,157,255,0.11)] text-[#F5F0F0] hover:border-trinomio-cyan/55 hover:bg-[rgba(96,157,255,0.18)] hover:text-trinomio-cyan-soft";

  const className = `inline-flex min-h-11 items-center justify-center border px-5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 hover:ring-2 hover:ring-trinomio-cyan/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan active:translate-y-0 ${classes}`;
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
