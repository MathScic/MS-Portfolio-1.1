import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Mathieu Scicluna — Portfolio",
  description: "Portfolio 2025 (Next.js + Vercel)",
  icons: {
    icon: "/images/logo.png", // ou "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}
    >
      <Header />
      <body className="bg-base text-text">{children}</body>
      <Footer />
    </html>
  );
}
