import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileActionBar } from "@/components/MobileActionBar";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const fraunces = Fraunces({ variable: "--font-serif", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.doctorName} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.doctorName}`,
  },
  description: siteConfig.metaDescription,
  keywords: siteConfig.seoKeywords,
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    title: `${siteConfig.doctorName}, ${siteConfig.title}`,
    description: siteConfig.metaDescription,
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-14 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
