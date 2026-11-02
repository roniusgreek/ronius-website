import type { Metadata } from "next";
import { Heebo, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import { SITE_URL } from "@/lib/site";
import { seo } from "@/content/copy";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seo.home.title,
    template: `%s | רוניוס חג'ידאקיס`,
  },
  description: seo.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <GoogleAnalytics />
        <PageViewTracker />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
