import { doctrine, metrics } from "@/lib/content";
import { ButtonLink } from "@/components/ButtonLink";
import { TRINOMIO_LOGO_SRC } from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-identity relative overflow-hidden border-b border-white/10 bg-trinomio-navy-deep">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(23,215,255,0.14),transparent_33rem),radial-gradient(circle_at_77%_42%,rgba(96,157,255,0.18),transparent_38rem),radial-gradient(circle_at_18%_72%,rgba(63,224,131,0.08),transparent_24rem),linear-gradient(180deg,rgba(4,25,56,0.3),var(--navy-deep))]" />
      <div className="hero-motion-field pointer-events-none absolute inset-0 z-0 opacity-80" />
      <div className="orbital-field orbital-drift pointer-events-none absolute right-[-18rem] top-16 z-0 size-[52rem] rounded-full opacity-25" />
      <div className="orbital-field pointer-events-none absolute bottom-[-20rem] left-[-18rem] z-0 size-[40rem] rounded-full opacity-16" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid min-h-[calc(100svh-73px)] gap-8 py-10 sm:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-12">
          <div className="hero-copy-field relative z-10 max-w-[46rem]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-trinomio-green sm:text-sm">
              Energía → Empresa ← Capital
            </p>
            <h1 className="text-[clamp(2.35rem,8.5vw,3.5rem)] font-semibold leading-[1.04] text-white sm:text-[clamp(3.25rem,6vw,4.75rem)] sm:leading-[1.02] lg:text-[clamp(3.7rem,5.1vw,5.35rem)]">
              <span className="block">
                Convertimos valor energético
              </span>
              <span className="block">en infraestructura bancable.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#E2E6E9]/92 sm:text-lg sm:leading-8">
              Trinomio estructura proyectos de energía distribuida desde
              potencial técnico hacia flujos gobernados, contractuales y
              probados por crédito que el capital institucional puede financiar.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/es/contacto#escribanos">
                Estructure su oportunidad energética
              </ButtonLink>
              <ButtonLink href="/es/energia-empresa-capital" variant="secondary">
                Explore el modelo 3-Syst
              </ButtonLink>
            </div>
          </div>

          <div
            className="hero-logo-system relative mx-auto flex w-full max-w-[31rem] items-center justify-center py-8 sm:py-10 lg:py-12"
            aria-label="Sistema visual Trinomio: Energía y Capital traducidos por Empresa"
          >
            <div className="hero-orbit hero-orbit-outer" />
            <div className="hero-orbit hero-orbit-middle" />
            <div className="hero-orbit hero-orbit-inner" />
            <div className="hero-flow hero-flow-a" />
            <div className="hero-flow hero-flow-b" />
            <div className="hero-flow hero-flow-c" />
            <span className="hero-node left-[11%] top-[53%]" />
            <span className="hero-node right-[17%] top-[24%]" />
            <span className="hero-node bottom-[16%] right-[28%] bg-trinomio-green" />

            <div className="hero-logo-core relative z-10 flex w-full max-w-[480px] items-center justify-center">
              <div className="absolute inset-x-[8%] inset-y-[20%] bg-trinomio-cyan/12 blur-3xl" />
              <Image
                alt="Trinomio"
                className="relative h-auto max-h-full w-full max-w-full object-contain drop-shadow-[0_0_42px_rgba(23,215,255,0.24)]"
                height={240}
                priority
                src={TRINOMIO_LOGO_SRC}
                width={480}
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 72vw, 92vw"
              />
            </div>

            <div className="hero-doctrine-marker left-[2%] top-1/2 -translate-y-1/2">
              <span>01</span>
              Energía
            </div>
            <div className="hero-doctrine-marker right-[4%] top-[14%]">
              <span>02</span>
              Empresa
            </div>
            <div className="hero-doctrine-marker bottom-[7%] right-[16%]">
              <span>03</span>
              Capital
            </div>
          </div>
        </div>

        <div className="grid gap-6 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:pb-16">
          <div className="border-l border-trinomio-cyan/40 pl-5">
            <p className="max-w-xl text-base leading-7 text-[#E2E6E9]/86">
              La energía crea valor físico. La Capa Empresa lo mide, reconoce,
              contrata, gobierna y convierte en flujo de caja bancable antes de
              llevarlo a capital.
            </p>
          </div>
          <div className="diagram-card grid overflow-hidden backdrop-blur md:grid-cols-3">
            {metrics.map((metric) => (
              <Link
                className="group flex min-h-[10.75rem] cursor-pointer flex-col border-b border-white/10 bg-white/[0.012] p-5 transition duration-200 hover:border-trinomio-cyan/45 hover:bg-white/[0.065] hover:shadow-[0_0_32px_rgba(23,215,255,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                href={metric.href}
                key={metric.value}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm text-trinomio-cyan transition group-hover:text-trinomio-green">
                    {metric.value}
                  </p>
                  <span
                    aria-hidden="true"
                    className="translate-x-0 text-sm text-trinomio-cyan/70 transition group-hover:translate-x-1 group-hover:text-trinomio-cyan-soft"
                  >
                    -&gt;
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-[#E2E6E9]/94 transition group-hover:text-white">
                  {metric.label}
                </p>
                <p className="mt-auto pt-5 text-sm leading-6 text-[#E2E6E9]/72 transition group-hover:text-[#E2E6E9]/92">
                  {metric.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[#E2E6E9]/72"
          aria-label="Arquitectura doctrinal de Trinomio: Energía hacia Empresa y Capital hacia Empresa"
        >
          {doctrine.map((item, index) => (
            <span className="flex items-center gap-3" key={item}>
              <span>{item}</span>
              {index < doctrine.length - 1 ? (
                <span className="text-trinomio-cyan">
                  {index === 0 ? "→" : "←"}
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
