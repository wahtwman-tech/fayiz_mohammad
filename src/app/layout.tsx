import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import AppContent from "@/components/AppContent";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "صندوق الاستدامة التنموي | Sustainable Development Fund",
  description: "مؤسسة غير ربحية مخصصة لتعزيز التنمية المستدامة في المجتمعات العربية.",
  keywords: ["صندوق استدامة", "تنمية مستدامة", "استثمار اجتماعي", "مؤسسة غير ربحية", "الأردن"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        <AppContent>{children}</AppContent>
      </body>
    </html>
  );
}
