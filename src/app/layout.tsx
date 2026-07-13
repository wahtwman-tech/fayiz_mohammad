import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "صندوق الاستدامة التنموي | Sustainable Development Fund",
  description: "مؤسسة غير ربحية مخصصة لتعزيز التنمية المستدامة في المجتمعات العربية من خلال الاستثمار في رأس المال البشري والمشاريع التنموية",
  keywords: ["استثمار تنموي", "تنمية مستدامة", "مؤسسة غير ربحية", "المملكة العربية السعودية"],
  authors: [{ name: "صندوق الاستدامة التنموي" }],
  openGraph: {
    title: "صندوق الاستدامة التنموي",
    description: "نحو مستقبل مستدام للأجيال القادمة",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
