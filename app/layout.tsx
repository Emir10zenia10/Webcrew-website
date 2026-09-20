import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebCrew — Agence web, Framer & Shopify",
  description: "WebCrew aligne perception, visibilité et conversion avec la vraie valeur de votre entreprise.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
