import { Metadata } from "next";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "فريقنا | صندوق الاستدامة التنموي",
  description: "تعرف على فريقنا القيادي من المتخصصين ذوي الخبرة والالتزام",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">فريقنا القيادي</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            نفتخر بفريق من المتخصصين ذوي الخبرة والالتزام الذين يقودون رؤيتنا نحو مستقبل مستدام
          </p>
        </div>
      </section>
      
      <TeamSection />
      
      {/* Join Our Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">انضم إلى فريقنا</h2>
            <p className="text-lg text-slate-600 mb-8">
              نبحث دائماً عن أشخاص متحمسين وملتزمين بالتغيير الإيجابي. إذا كنت تشاركنا رؤيتنا وتريد المساهمة في عملنا التنموي، نرحب بك في فريقنا.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">القيم التي نبحث عنها:</h3>
              <ul className="text-right text-slate-600 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  الالتزام بالشفافية والمساءلة
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  الشغف بالعمل التنموي والاجتماعي
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  روح العمل الجماعي والتعاون
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  الإبداع والابتكار في حل المشكلات
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
