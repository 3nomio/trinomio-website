import { ButtonLink } from "@/components/ButtonLink";
import { RelatedFrameworks } from "@/components/ContextualNavigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { OrbitalDivider } from "@/components/OrbitalDivider";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { SectionHeading } from "@/components/SectionHeading";
import { frameworkLinks, spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sector Energético | Trinomio",
  description:
    "Tesis de Trinomio para empresas distribuidoras, cooperativas y operadores del sector energético: convertir proyectos de energía en empresas de energía financiables.",
};

const macroForces = [
  {
    title: "Geopolítica",
    text: "La energía vuelve a ser una cuestión de seguridad, soberanía, cadenas de suministro y liderazgo tecnológico.",
  },
  {
    title: "Tecnologías avanzadas",
    text: "Solar, baterías, datos e infraestructura programable reducen costos y aceleran los activos distribuidos.",
  },
  {
    title: "Cambio regulatorio",
    text: "Los mercados se reestructuran. Las reformas eléctricas apuntan hacia señales por lugar, tiempo, flexibilidad y asignación de riesgo.",
  },
] as const;

const methodLinks = [
  {
    title: "El método: Sentir · Dimensionar · Transformar",
    text: "3Labs es el laboratorio donde Trinomio lee las oportunidades de la transición, les da medida y las convierte en empresas que el capital puede financiar.",
    href: "/es/3labs",
    cta: "Ver el método 3Labs",
  },
  {
    title: "La arquitectura: Energía → Empresa ← Capital",
    text: "Cómo la Empresa Energética une el mercado de la energía con el mercado de capitales: entrada, tenencia, liquidez y reciclaje del capital.",
    href: "/es/energia-empresa-capital",
    cta: "Ver la arquitectura",
  },
] as const;

const utilityValueProps = [
  "Capacidad adicional estructurada fuera del balance de la entidad.",
  "Bancabilidad como pericia faltante, no dinero faltante.",
  "Complementariedad con la red, la gran generación y la operación del sistema.",
  "Formación de capital local con ahorro institucional doméstico.",
  "Preparación para precios nodales, flexibilidad y cambios de régimen.",
  "Higiene de riesgo mediante vehículos estructurados, contratos y derechos de intervención.",
] as const;

const counterpartMessages = [
  {
    title: "Utility estatal y grandes operadores públicos",
    text: "Capacidad adicional estructurada fuera del balance público, complementariedad de roles y preparación para mercados futuros.",
  },
  {
    title: "Cooperativas eléctricas",
    text: "Acceso a capital que no compromete su naturaleza cooperativa ni su función territorial.",
  },
  {
    title: "Distribuidoras públicas y territoriales",
    text: "Proyectos comercial-industriales, almacenamiento, resiliencia y servicios fuera del balance institucional.",
  },
  {
    title: "Clientes internacionales",
    text: "La tesis se adapta al régimen local equivalente: tres fuerzas, empresa frente a proyecto, bancabilidad y capital local.",
  },
] as const;

export default function EnergySectorThesisPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <ScrollNavigation indexLabel="↑ Subir" menuHref="/es" menuLabel="← Volver" />
        <section className="relative overflow-hidden bg-trinomio-navy-deep px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(23,215,255,0.16),transparent_30rem),radial-gradient(circle_at_80%_28%,rgba(63,224,131,0.11),transparent_30rem),linear-gradient(180deg,var(--navy),var(--navy-deep))]" />
          <div className="adaptive-grid absolute inset-0 opacity-38" />
          <div className="orbital-field orbital-drift absolute right-[-14rem] top-16 size-[42rem] rounded-full opacity-30" />

          <div className="relative mx-auto max-w-7xl">
            <Logo
              className="mb-12 rounded-full bg-white/[0.035] p-2 ring-1 ring-white/10"
              imageClassName="h-14 w-auto sm:h-16"
              priority
            />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-trinomio-green">
              Tesis para el sector energético
            </p>
            <h1 className="mt-10 max-w-6xl text-[clamp(2.45rem,10vw,3.25rem)] font-semibold leading-[1.04] sm:text-7xl sm:leading-[1.02] lg:text-8xl">
              Convertir proyectos de energía en empresas de energía
            </h1>
            <p className="mt-8 max-w-4xl text-xl leading-8 text-[#E2E6E9]/92">
              Trinomio diseña la empresa que une activos energéticos, contratos,
              gobierno y capital para que la transición sea financiable, medible
              y escalable.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/es/contacto#rutas">Abrir conversación</ButtonLink>
              <ButtonLink href="#piloto" variant="secondary">
                Ver la propuesta de piloto
              </ButtonLink>
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Por qué ahora"
              title="Tres fuerzas reordenan el sector al mismo tiempo."
              description="El cambio climático es el detonante, pero la oportunidad aparece porque la geopolítica, la tecnología y la regulación se mueven juntas. Un proyecto calculado una sola vez nace obsoleto; una empresa puede medir, adaptarse y capturar valor cada día."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {macroForces.map((force, index) => (
                <article className="diagram-card min-h-72 p-6" key={force.title}>
                  <p className="text-sm text-trinomio-cyan">0{index + 1}</p>
                  <h2 className="mt-8 text-3xl font-semibold leading-tight text-white">
                    {force.title}
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-[#E2E6E9]/86">
                    {force.text}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/es/transicion#marco-regulatorio" variant="secondary">
                Ver el marco regulatorio -&gt;
              </ButtonLink>
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Cómo trabajamos"
              title="Diseñamos la empresa; no invertimos ni administramos fondos."
              description="Trinomio diseña el método y la arquitectura. Vehículos operativos como Aureon Nexus forman las Empresas Energéticas, tienen los contratos y llevan los activos a operación."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {methodLinks.map((item) => (
                <Link
                  className="diagram-card group relative flex flex-col overflow-hidden p-6 transition hover:-translate-y-0.5 hover:border-trinomio-cyan/45"
                  href={item.href}
                  key={item.href}
                >
                  <h2 className="text-2xl font-semibold leading-tight text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[#E2E6E9]/86">
                    {item.text}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-trinomio-cyan group-hover:text-white">
                    {item.cta} -&gt;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeading
              eyebrow="Valor para empresas distribuidoras"
              title="El problema real es bancabilidad, no voluntad de invertir."
              description="La distribuidora conserva su columna vertebral: red, operación, gran generación y función territorial. Trinomio diseña la estructura de la capa distribuida, comercial-industrial y de almacenamiento para que pueda financiarse sin consumir el balance de la entidad."
            />
            <ul className="grid gap-3">
              {utilityValueProps.map((item) => (
                <li
                  className="context-node border border-white/12 bg-white/[0.04] p-4 text-base font-semibold leading-7 text-white"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <OrbitalDivider />

        <section className="institutional-section bg-trinomio-navy-deep px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Conversación por contraparte"
              title="La tesis central no cambia. El énfasis sí."
              description="El mismo marco se adapta a utilities estatales, distribuidoras públicas, cooperativas eléctricas, otros operadores regulados y clientes internacionales, según su restricción principal."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {counterpartMessages.map((item) => (
                <article className="flow-card border p-6" key={item.title}>
                  <h2 className="text-2xl font-semibold leading-tight text-white">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-[#E2E6E9]/86">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <OrbitalDivider />

        <section
          className="institutional-section scroll-mt-24 bg-trinomio-navy px-5 py-24 sm:px-8 lg:py-32"
          id="piloto"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Piloto"
              title="Empezar con una iniciativa y convertirla en una Empresa Energética."
              description="La forma correcta de abrir conversación no es un acuerdo abstracto. Es tomar una oportunidad real de la cartera de la contraparte, estructurarla como empresa y usarla como señal institucional."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/es/contacto#rutas">Plantear un piloto</ButtonLink>
              <ButtonLink href="/es/glosario" variant="secondary">
                Ver el glosario
              </ButtonLink>
            </div>
            <RelatedFrameworks links={frameworkLinks.transition} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
