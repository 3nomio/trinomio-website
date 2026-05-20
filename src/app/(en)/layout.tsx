import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Trinomio | Energy -> Firm -> Capital",
  description:
    "Trinomio incubates the firm layer connecting distributed energy systems with institutional capital structures.",
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
