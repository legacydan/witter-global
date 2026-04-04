import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Witter Global LLC — Management & Holdings",
    template: "%s | Witter Global LLC",
  },
  description:
    "Witter Global LLC is a South Florida management and holdings company overseeing a portfolio of established retail and corporate entities.",
  keywords: [
    "Witter Global",
    "management company",
    "holdings company",
    "South Florida",
    "Plantation FL",
    "business consulting",
  ],
  openGraph: {
    title: "Witter Global LLC — Management & Holdings",
    description:
      "Strategic management and holdings company based in South Florida.",
    type: "website",
    locale: "en_US",
    siteName: "Witter Global LLC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
