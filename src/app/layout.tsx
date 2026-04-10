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
    default: "Witter Global LLC — Strategic Business Management & Growth Solutions",
    template: "%s | Witter Global LLC",
  },
  description:
    "Witter Global provides professional management, consulting, and operational support services designed to help businesses scale efficiently and operate at a higher level.",
  keywords: [
    "Witter Global",
    "business management",
    "business consulting",
    "operational consulting",
    "business development",
    "administrative support",
    "Plantation FL",
    "South Florida",
  ],
  openGraph: {
    title: "Witter Global LLC — Strategic Business Management & Growth Solutions",
    description:
      "Professional management, consulting, and operational support services designed to help businesses scale efficiently.",
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
