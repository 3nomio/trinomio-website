import { Logo } from "@/components/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-trinomio-navy-deep px-5 py-10 sm:px-8">
      <div className="orbital-field absolute -right-28 -top-36 size-80 rounded-full opacity-18" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#E2E6E9]/72 sm:flex-row sm:items-center sm:justify-between">
        <Logo
          className="rounded-full bg-white/[0.03] p-1.5 ring-1 ring-white/10"
          imageClassName="h-8 w-auto"
        />
        <div className="flex flex-col gap-3 sm:items-end">
          <p className="uppercase tracking-[0.18em]">
            Energía <span className="text-trinomio-cyan">→</span> Empresa{" "}
            <span className="text-trinomio-cyan">←</span> Capital
          </p>
          <Link
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E2E6E9]/68 transition hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
            href="/es/sintesis"
          >
            Síntesis
          </Link>
        </div>
      </div>
    </footer>
  );
}
