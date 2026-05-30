import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Trinomio | Energy → Firm ← Capital",
  description:
    "Trinomio turns energy surplus into bankable assets through the firm layer between energy functions and capital-market discipline.",
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
