import { ButtonLink } from "@/components/ButtonLink";
import { HomepagePathway } from "@/components/HomepagePathway";
import { Logo } from "@/components/Logo";

export default function EnglishHome() {
  return (
    <main className="relative overflow-hidden bg-trinomio-navy-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_24%,rgba(23,215,255,0.15),transparent_30rem),radial-gradient(circle_at_72%_70%,rgba(96,157,255,0.18),transparent_34rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
      <div className="orbital-field absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-26" />
      <section className="relative z-10 mx-auto grid min-h-svh max-w-3xl place-items-center px-5 py-12 text-center">
        <Logo
          className="mx-auto rounded-full bg-white/[0.04] p-3 ring-1 ring-white/12"
          href="/en"
          imageClassName="h-16 w-auto sm:h-20"
          priority
        />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-cyan">
          Energy → Firm ← Capital
        </p>
        <h1 className="mt-8 text-4xl font-semibold leading-tight sm:text-6xl">
          Trinomio converts strategic energy potential into scalable bankable assets.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#E2E6E9]/90">
          The governed firm translates energy functions and capital discipline
          into executable, financeable structures.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/es">
            Ver sitio en Español -&gt;
          </ButtonLink>
          <ButtonLink href="/es/energia-empresa-capital" variant="secondary">
            Explore the 3-Syst model -&gt;
          </ButtonLink>
        </div>
      </section>
      <HomepagePathway compact locale="en" />
    </main>
  );
}
