import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-trinomio-navy-deep px-5 py-10 sm:px-8">
      <div className="orbital-field absolute -right-28 -top-36 size-80 rounded-full opacity-18" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#E2E6E9]/72 sm:flex-row sm:items-center sm:justify-between">
        <Logo
          className="rounded-full bg-white/[0.03] p-1.5 ring-1 ring-white/10"
          imageClassName="h-8 w-auto"
        />
        <p className="uppercase tracking-[0.18em]">
          Energía <span className="text-trinomio-cyan">-&gt;</span> Empresa{" "}
          <span className="text-trinomio-cyan">-&gt;</span> Capital
        </p>
      </div>
    </footer>
  );
}
