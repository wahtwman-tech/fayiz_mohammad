import { Metadata } from "next";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Handshake, Award, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "شهادات الشركاء | صندوق الاستدامة التنموي",
  description: "آراء وتجارب شركاء النجاح مع صندوق الاستدامة التنموي",
};

const achievements = [
  { icon: Handshake, value: "+50", label: "شراكة استراتيجية" },
  { icon: Award, value: "+20", label: "جائزة وتكريم" },
  { icon: Users, value: "+100", label: "متطوع ومشارك" },
  { icon: TrendingUp, value: "98%", label: "نسبة رضا الشركاء" },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">شهادات الشركاء</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            نفتخر بالثقة التي يمنحنا إياها شركاؤنا ونعمل جاهدين على تحقيق توقعاتهم
          </p>
        </div>
      </section>
      
      <TestimonialsSection />
      
      {/* Partnership Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">إنجازاتنا في الشراكات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                <item.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-slate-800 mb-1">{item.value}</div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Become a Partner */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">كن شريكاً في النجاح</h2>
            <p className="text-lg text-slate-600 mb-8">
              ندعوك للانضمام إلى شبكة شركائنا المتنامية. سواء كنت مؤسسة حكومية، أو شركة خاصة، أو منظمة غير ربحية، فإننا نرحب بالتعاون معك لتحقيق أهداف التنمية المستدامة.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-right">
              <h3 className="text-xl font-bold text-slate-800 mb-4">أنواع الشراكات:</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">١</span>
                  <span>شراكات تمويلية مباشرة للمشاريع التنموية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">٢</span>
                  <span>شراكات استراتيجية لتنفيذ برامج مشتركة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">٣</span>
                  <span>دعم عيني ومهني للخبرات المتخصصة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">٤</span>
                  <span>برامج تطوعية وتوعوية مشتركة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
