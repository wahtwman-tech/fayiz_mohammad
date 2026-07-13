import TeamSection from "@/components/sections/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "فريقنا | صندوق الاستدامة التنموي",
  description: "تعرف على فريقنا القيادي من المتخصصين في قطاع الاستثمار التنموي.",
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">فريقنا القيادي</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">نخبة من المتخصصين يقودون رحلة التنمية المستدامة</p>
        </div>
      </section>
      <TeamSection />
    </>
  );
}
