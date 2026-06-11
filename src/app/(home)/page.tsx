import { ButtonLink } from "@/components/ButtonLink";
import { LanguageGatewayDiagram } from "@/components/LanguageGatewayDiagram";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-trinomio-navy-deep px-5 py-10 text-white sm:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(23,215,255,0.16),transparent_30rem),radial-gradient(circle_at_70%_72%,rgba(96,157,255,0.18),transparent_32rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
      <div className="orbital-field absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30" />
      <div className="spiral-divider absolute inset-x-0 top-1/2 h-32 -translate-y-1/2 opacity-70" />
      <div className="flow-line absolute left-0 right-0 top-1/2" />

      <section className="relative z-10 flex w-full max-w-6xl flex-col items-center text-center">
        <Logo
          className="rounded-full bg-white/[0.04] p-3 ring-1 ring-white/12"
          height={451}
          href="/"
          imageClassName="h-auto w-[min(82vw,18.5rem)] max-w-full sm:w-[22rem]"
          priority
          width={1671}
        />

        <LanguageGatewayDiagram />

        <p className="mt-7 max-w-2xl text-base font-semibold leading-7 text-white sm:text-lg">
          Energy value into bankable infrastructure.
          <span className="block text-[#E2E6E9]/86">
            Valor energético en infraestructura bancable.
          </span>
        </p>

        <nav
          aria-label="Choose language / Seleccionar idioma"
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <ButtonLink href="/es">Español</ButtonLink>
          <ButtonLink href="/en" variant="secondary">
            English
          </ButtonLink>
        </nav>
      </section>
    </main>
  );
}
