import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Trinomio | Energy -> Firm -> Capital",
  description:
    "Trinomio incubates the Capa Empresa connecting distributed energy systems with investment architecture for the new economy.",
};

export default function HomeRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
