// Reputation Experts - Online Reputation Management
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@repute/ui";
import { Footer } from "@repute/ui";
import { CookieBanner } from "@repute/ui";

export const metadata: Metadata = {
  title: {
    default: "Reputation Experts — Online Reputation Management",
    template: "%s | Reputation Experts",
  },
  description:
    "Professional online reputation management for individuals and businesses. Take control of your digital presence across search results, review platforms, and social media.",
  metadataBase: new URL("https://reputation-experts.co.uk"),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Reputation Experts",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header
          brandName="Reputation Experts"
          ctaLabel="Contact us"
          ctaLink="/contact"
          servicesLabel="Services"
          servicesHref="/services"
        />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

