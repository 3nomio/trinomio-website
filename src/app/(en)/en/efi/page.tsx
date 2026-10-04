import { EfiSolution } from "@/components/EfiSolution";
import { EnglishMicroNav } from "@/components/EnglishMicroNav";
import { Footer } from "@/components/Footer";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EFI — Energy Finance Integration | Trinomio",
  description:
    "EFI joins the physics of a utility's plants with the books of the company: which assets earn their keep, how far it can grow without new debt, and what it is worth to adapt.",
};

export default function EnglishEfiPage() {
  return (
    <>
      <EnglishMicroNav active="efi" />
      <main>
        <ScrollNavigation
          ariaLabel="Quick navigation"
          indexLabel="↑ Back to top"
          menuHref="/en"
          menuLabel="← Home"
        />
        <EfiSolution locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
