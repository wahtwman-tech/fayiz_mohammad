import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "شهادات الشركاء | صندوق الاستدامة التنموي",
  description: "ماذا يقول شركاؤنا عن التعاون مع صندوق الاستدامة التنموي.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">شهادات الشركاء</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">ماذا يقول شركاؤنا عن التعاون معنا</p>
        </div>
      </section>
      <TestimonialsSection />
    </>
  );
}
