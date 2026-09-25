import { EnglishMicroNav } from "@/components/EnglishMicroNav";
import { Footer } from "@/components/Footer";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { ThreeLabsMethod } from "@/components/ThreeLabsMethod";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3Labs | Trinomio",
  description:
    "3Labs is the laboratory where Trinomio reads the opportunities of the energy transition, gives them measure and turns them into firms that capital can finance.",
};

export default function EnglishThreeLabsPage() {
  return (
    <>
      <EnglishMicroNav active="3labs" />
      <main>
        <ScrollNavigation
          ariaLabel="Quick navigation"
          indexLabel="↑ Back to top"
          menuHref="/en"
          menuLabel="← Home"
        />
        <ThreeLabsMethod locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
