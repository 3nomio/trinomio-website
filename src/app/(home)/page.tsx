import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-trinomio-navy-deep px-5 py-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(23,215,255,0.16),transparent_30rem),radial-gradient(circle_at_70%_72%,rgba(96,157,255,0.18),transparent_32rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
      <div className="orbital-field absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30" />
      <div className="spiral-divider absolute inset-x-0 top-1/2 h-32 -translate-y-1/2 opacity-70" />
      <div className="flow-line absolute left-0 right-0 top-1/2" />

      <section className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <Logo
          className="rounded-full bg-white/[0.04] p-3 ring-1 ring-white/12"
          href="/"
          imageClassName="h-20 w-auto sm:h-24"
          priority
        />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-cyan">
          Energy <span className="text-trinomio-cyan">-&gt;</span> Firm{" "}
          <span className="text-trinomio-cyan">-&gt;</span> Capital
        </p>
        <h1 className="mt-14 text-2xl font-semibold text-white sm:text-3xl">
          Seleccionar idioma / Choose language
        </h1>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/es">Entrar en español -&gt;</ButtonLink>
          <ButtonLink href="/en" variant="secondary">
            Enter in English -&gt;
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
