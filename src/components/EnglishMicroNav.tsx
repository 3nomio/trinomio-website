import { Logo } from "@/components/Logo";
import Link from "next/link";

type EnglishMicroNavProps = {
  active?: "home" | "opportunity" | "insights" | "contact" | "synthesis";
};

export function EnglishMicroNav({ active = "home" }: EnglishMicroNavProps) {
  return (
    <header className="relative z-20 border-b border-white/10 bg-trinomio-navy-deep/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Logo
          ariaCurrent={active === "home" ? "page" : undefined}
          className="shrink-0 px-2.5 py-2"
          href="/en"
          imageClassName="h-auto w-[112px] max-w-full object-contain sm:w-[120px]"
          priority
        />
        <nav
          aria-label="English navigation"
          className="flex flex-wrap items-center gap-2 text-sm text-[#E2E6E9]/90"
        >
          <Link
            aria-current={active === "home" ? "page" : undefined}
            className="border border-white/10 bg-white/[0.035] px-3 py-2 transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan aria-[current=page]:border-trinomio-cyan/40 aria-[current=page]:bg-white/[0.075] aria-[current=page]:text-white"
            href="/en"
          >
            Home
          </Link>
          <Link
            aria-current={active === "opportunity" ? "page" : undefined}
            className="border border-white/10 bg-white/[0.035] px-3 py-2 transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan aria-[current=page]:border-trinomio-cyan/40 aria-[current=page]:bg-white/[0.075] aria-[current=page]:text-white"
            href="/en/costa-rica-opportunity"
          >
            Costa Rica Opportunity
          </Link>
          <Link
            aria-current={active === "insights" ? "page" : undefined}
            className="border border-white/10 bg-white/[0.035] px-3 py-2 transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan aria-[current=page]:border-trinomio-cyan/40 aria-[current=page]:bg-white/[0.075] aria-[current=page]:text-white"
            href="/en/insights"
          >
            Insights
          </Link>
          <Link
            aria-current={active === "contact" ? "page" : undefined}
            className="border border-white/10 bg-white/[0.035] px-3 py-2 transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan aria-[current=page]:border-trinomio-cyan/40 aria-[current=page]:bg-white/[0.075] aria-[current=page]:text-white"
            href="/en/contact"
          >
            Contact
          </Link>
          <Link
            aria-current={active === "synthesis" ? "page" : undefined}
            className="border border-white/10 bg-white/[0.035] px-3 py-2 transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan aria-[current=page]:border-trinomio-cyan/40 aria-[current=page]:bg-white/[0.075] aria-[current=page]:text-white"
            href="/en/synthesis"
          >
            Synthesis
          </Link>
          <Link
            className="border border-white/10 bg-white/[0.035] px-3 py-2 transition hover:border-trinomio-cyan/45 hover:text-trinomio-cyan"
            href="/es"
          >
            Español
          </Link>
        </nav>
      </div>
    </header>
  );
}
