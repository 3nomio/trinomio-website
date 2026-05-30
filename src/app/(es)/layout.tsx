import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Trinomio | Energía → Empresa ← Capital",
  description:
    "Trinomio convierte excedente energético en activos bancables mediante la Capa Empresa entre funciones energéticas y disciplina de capital.",
};

export default function SpanishRootLayout({
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
