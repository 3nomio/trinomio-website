import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";

export default function EnglishHome() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-trinomio-navy-deep px-5 py-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_24%,rgba(23,215,255,0.15),transparent_30rem),radial-gradient(circle_at_72%_70%,rgba(96,157,255,0.18),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
      <div className="orbital-field absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-26" />
      <section className="relative z-10 max-w-3xl text-center">
        <Logo
          className="mx-auto rounded-full bg-white/[0.04] p-3 ring-1 ring-white/12"
          href="/en"
          imageClassName="h-16 w-auto sm:h-20"
          priority
        />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-cyan">
          Energy -&gt; Firm -&gt; Capital
        </p>
        <h1 className="mt-8 text-4xl font-semibold leading-tight sm:text-6xl">
          English institutional homepage coming soon.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#E2E6E9]/90">
          Trinomio is preparing the English experience for energy finance,
          adaptive systems, and capital markets.
        </p>
        <div className="mt-9">
          <ButtonLink href="/es" variant="secondary">
            Ver sitio en Español -&gt;
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
