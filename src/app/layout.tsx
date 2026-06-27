import type { Metadata } from "next";
import { Fredoka, Patrick_Hand, Playfair_Display } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Damaris Calderón — Portafolio 2026",
  description:
    "Portafolio de Damaris Calderón. Publicidad y Relaciones Públicas: marcas, campañas y experiencias que comunican con intención.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fredoka.variable} ${patrickHand.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
