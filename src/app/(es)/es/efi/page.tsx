import { EfiSolution } from "@/components/EfiSolution";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { spanishNav } from "@/lib/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EFI — Energy Finance Integration | Trinomio",
  description:
    "EFI une la física de las plantas de una empresa eléctrica con los libros de la empresa: qué activos pagan su costo, cuánto puede crecer sin deuda nueva y cuánto vale adaptarse.",
};

export default function SpanishEfiPage() {
  return (
    <>
      <Header navItems={spanishNav} />
      <main>
        <ScrollNavigation indexLabel="↑ Subir" menuHref="/es" menuLabel="← Volver" />
        <EfiSolution locale="es" />
      </main>
      <Footer />
    </>
  );
}
