import { DiagramNavigation, RelatedFrameworks } from "@/components/ContextualNavigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { ThreeLabsMethod } from "@/components/ThreeLabsMethod";
import { frameworkLinks, primaryLoopLinks, spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3Labs | Trinomio",
  description:
    "3Labs es el laboratorio donde Trinomio lee las oportunidades de la transición energética, les da medida y las convierte en empresas que el capital puede financiar.",
};

export default function ThreeLabsPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <ScrollNavigation indexLabel="↑ Subir" menuHref="/es" menuLabel="← Volver" />
        <ThreeLabsMethod
          afterDiagram={<DiagramNavigation links={frameworkLinks.labs} />}
          afterPractice={<RelatedFrameworks links={primaryLoopLinks} />}
          locale="es"
        />
      </main>
      <Footer />
    </>
  );
}
