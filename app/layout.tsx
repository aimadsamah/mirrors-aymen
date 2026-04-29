import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Mirrors by Aymen | Miroirs Personnalisés Premium",
  description:
    "Des miroirs personnalisés avec le design de vos posts réseaux sociaux. L'outil marketing idéal pour booster votre visibilité.",
  keywords: "miroir personnalisé, Instagram, TikTok, marketing, Jijel, Algérie",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <body className="bg-charcoal-950 text-charcoal-50 antialiased">{children}</body>
    </html>
  );
}
