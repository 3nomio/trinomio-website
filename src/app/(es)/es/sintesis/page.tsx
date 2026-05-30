import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Síntesis | Trinomio",
  description:
    "Síntesis breve del modelo Trinomio: energía, empresa y capital para convertir potencial energético estratégico en activos bancables.",
};

const diagramColumns = [
  {
    title: "Energía",
    accent: "text-trinomio-cyan",
    items: [
      "tierra",
      "carga",
      "resiliencia",
      "DERs",
      "BESS",
      "eficiencia",
      "Solar-UPS",
      "pequeña hidro",
    ],
  },
  {
    title: "Empresa",
    accent: "text-trinomio-green",
    items: [
      "gobernanza",
      "contratos",
      "controles",
      "ejecución",
      "monitoreo",
      "rendición de cuentas",
    ],
  },
  {
    title: "Capital",
    accent: "text-trinomio-blue",
    items: [
      "Project Finance",
      "banca",
      "SAFI / FICR",
      "mercados de capital",
      "escalabilidad",
    ],
  },
] as const;

const supportingBullets = [
  "La energía no se financia sola: debe organizarse como una función económica gobernada.",
  "La empresa convierte potencial físico en contratos, controles y flujos de caja.",
  "Project Finance crea la primera capa de bancabilidad.",
  "FICR, SAFI y mercados de capital permiten escalar activos estructurados.",
  "Trinomio estructura la traducción entre energía, empresa y capital.",
] as const;

const secondaryLinks = [
  { label: "Ver el modelo completo", href: "/es/energia-empresa-capital" },
  { label: "Conocer Trinomio", href: "/es/sobre-trinomio" },
  { label: "Explorar ideas", href: "/es/insights" },
] as const;

function SynthesisDiagram() {
  return (
    <section
      aria-label="Arquitectura Energía Empresa Capital"
      className="diagram-stage relative overflow-hidden p-4 sm:p-6 lg:p-7"
    >
      <div className="adaptive-grid absolute inset-0 opacity-22" />
      <div className="absolute left-[16%] right-[16%] top-[5.2rem] hidden h-px bg-[linear-gradient(90deg,var(--cyan),var(--green),var(--electric-blue))] opacity-64 lg:block" />
      <div className="relative grid gap-3 lg:grid-cols-3">
        {diagramColumns.map((column, index) => (
          <article
            className="diagram-card min-h-[18rem] p-5 sm:p-6"
            key={column.title}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E2E6E9]/54">
                  0{index + 1}
                </p>
                <h2
                  className={`mt-3 text-3xl font-semibold leading-tight ${column.accent}`}
                >
                  {column.title}
                </h2>
              </div>
              {index === 0 ? (
                <span className="hidden text-3xl text-trinomio-cyan/70 lg:block">
                  →
                </span>
              ) : null}
              {index === 1 ? (
                <span className="hidden text-3xl text-trinomio-cyan/70 lg:block">
                  ←
                </span>
              ) : null}
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm leading-6 text-[#E2E6E9]/88">
              {column.items.map((item) => (
                <li
                  className="border border-white/10 bg-white/[0.035] px-3 py-2"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="relative mt-4 grid gap-3 border border-trinomio-green/24 bg-trinomio-green/8 p-4 text-sm font-semibold text-white sm:grid-cols-2">
        <p>Output: Activos energéticos bancables</p>
        <p className="text-trinomio-cyan-soft">
          Arquitectura escalable de transición
        </p>
      </div>
    </section>
  );
}

export default function SynthesisPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main className="bg-trinomio-navy-deep">
        <section className="relative overflow-hidden px-5 py-16 text-white sm:px-8 lg:min-h-[calc(100vh-5rem)] lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(23,215,255,0.13),transparent_28rem),radial-gradient(circle_at_78%_26%,rgba(63,224,131,0.09),transparent_26rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="adaptive-grid absolute inset-0 opacity-34" />

          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <Logo
                className="mb-8 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
                imageClassName="h-12 w-auto sm:h-14"
                priority
              />
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
                Arquitectura Trinomio
              </p>
              <h1 className="mt-7 text-[clamp(2.35rem,8vw,4.9rem)] font-semibold leading-[1.02]">
                Energía <span className="text-trinomio-cyan">→</span> Empresa{" "}
                <span className="text-trinomio-cyan">←</span> Capital
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E2E6E9]/90">
                Trinomio convierte potencial energético estratégico en activos
                bancables.
              </p>

              <ul className="mt-8 grid gap-3 text-sm leading-6 text-[#E2E6E9]/86">
                {supportingBullets.map((bullet) => (
                  <li
                    className="border-l border-trinomio-cyan/45 pl-4"
                    key={bullet}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/es/contacto">
                  Estructure su oportunidad energética
                </ButtonLink>
              </div>
            </div>

            <div className="lg:pt-6">
              <SynthesisDiagram />
              <nav
                aria-label="Lecturas relacionadas"
                className="mt-5 grid gap-3 text-sm sm:grid-cols-3"
              >
                {secondaryLinks.map((link) => (
                  <Link
                    className="context-node border border-white/12 bg-white/[0.04] p-4 font-semibold text-white transition hover:-translate-y-0.5 hover:border-trinomio-cyan/55 hover:text-trinomio-cyan-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trinomio-cyan"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label} <span className="text-trinomio-cyan">→</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
