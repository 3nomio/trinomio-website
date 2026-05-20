import { doctrine, metrics } from "@/lib/content";
import { ContextualNodeGrid } from "@/components/ContextualNavigation";
import { TRINOMIO_LOGO_SRC } from "@/components/Logo";
import { primaryLoopLinks } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-identity relative overflow-hidden border-b border-white/10 bg-trinomio-navy-deep">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(23,215,255,0.14),transparent_33rem),radial-gradient(circle_at_77%_42%,rgba(96,157,255,0.18),transparent_38rem),radial-gradient(circle_at_18%_72%,rgba(63,224,131,0.08),transparent_24rem),linear-gradient(180deg,rgba(4,25,56,0.3),var(--navy-deep))]" />
      <div className="hero-motion-field pointer-events-none absolute inset-0 z-0 opacity-80" />
      <div className="orbital-field orbital-drift pointer-events-none absolute right-[-18rem] top-16 z-0 size-[52rem] rounded-full opacity-25" />
      <div className="orbital-field pointer-events-none absolute bottom-[-20rem] left-[-18rem] z-0 size-[40rem] rounded-full opacity-16" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl content-between px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="hero-copy-field relative z-10 max-w-3xl pt-4 lg:pt-10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
              Finanzas institucionales de energía
            </p>
            <h1 className="text-[clamp(2.5rem,10.8vw,3.25rem)] font-semibold leading-[1.04] text-white sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              Energía <span className="text-trinomio-cyan">-&gt;</span> Empresa{" "}
              <span className="text-trinomio-cyan">-&gt;</span> Capital
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#E2E6E9]/92">
              Trinomio incuba la Capa Empresa que conecta sistemas energéticos
              distribuidos con Arquitecturas de Inversión financiables.
              El capital no migra hacia la energía. Migra hacia las Empresas
              Estructuradas.
            </p>
            <ContextualNodeGrid
              className="mt-9 max-w-3xl"
              eyebrow="Rutas institucionales"
              links={primaryLoopLinks.slice(1, 4)}
            />
          </div>

          <div
            className="hero-logo-system relative mx-auto flex w-full max-w-[35rem] items-center justify-center py-10 sm:py-14 lg:py-16"
            aria-label="Sistema visual Trinomio: Energía hacia Empresa hacia Capital"
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

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="border-l border-trinomio-cyan/40 pl-5">
            <p className="max-w-xl text-base leading-7 text-[#E2E6E9]/86">
              Trinomio organiza energía física, Capa Empresa y capital
              institucional en un solo sistema para convertir activos
              distribuidos en vehículos financiables.
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
          aria-label="Secuencia doctrinal de Trinomio"
        >
          {doctrine.map((item, index) => (
            <span className="flex items-center gap-3" key={item}>
              <span>{item}</span>
              {index < doctrine.length - 1 ? (
                <span className="text-trinomio-cyan">-&gt;</span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
