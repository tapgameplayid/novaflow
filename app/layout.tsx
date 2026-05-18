import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300","400","600","800"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400","600"],
});

export const metadata: Metadata = {
  title: "NovaFlow — Продвижение в соцсетях",
  description: "NovaFlow — команда специалистов по продвижению социальных сетей.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${space.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-transparent">{children}</body>
    </html>
  );
}
