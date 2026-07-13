import { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "نبذة عنا | صندوق الاستدامة التنموي",
  description: "تعرف على رؤية صندوق الاستدامة التنموي ورسالته وفلسفة الاستثمار الاجتماعي",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">نبذة عنا</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            مؤسسة غير ربحية مخصصة لتعزيز التنمية المستدامة في المجتمعات العربية
          </p>
        </div>
      </section>
      
      <AboutSection />
      
      {/* Extended Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">قصتنا ورحلتنا</h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                تأسس صندوق الاستدامة التنموي في عام 2015 برؤية طموحة تتمثل في أن يكون رائداً في مجال الاستثمار الاجتماعي والتنموي في المنطقة العربية. بدأنا رحلتنا بمجموعة صغيرة من المتخصصين الذين يشتركون في إيمان راسخ بأن الاستثمار في الإنسان هو الأساس الحقيقي لأي تنمية مستدامة.
              </p>
              
              <p>
                على مدار السنوات، نجحنا في بناء شبكة واسعة من الشراكات مع الحكومات والقطاع الخاص والمنظمات غير الربحية والمؤسسات الأكاديمية. هذه الشراكات مكنتنا من توسيع نطاق عملنا والوصول إلى المزيد من المجتمعات الأكثر احتياجاً.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">أهدافنا الاستراتيجية</h3>
              <ul className="list-disc pr-6 space-y-3">
                <li>تعزيز الوصول إلى التعليم الجيد في المناطق المحرومة</li>
                <li>دعم المشاريع الصغيرة والمتوسطة كوسيلة لتحقيق التنمية الاقتصادية</li>
                <li>توفير الرعاية الصحية الأولية للمجتمعات ذات الحاجة</li>
                <li>المساهمة في حماية البيئة من خلال المشاريع الخضراء</li>
                <li>بناء قدرات الشباب وتأهيلهم لسوق العمل</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">مبدأ الشفافية</h3>
              <p>
                نؤمن بأن الشفافية هي أساس أي مؤسسة تعمل في القطاع التنموي. لذلك، نقدم تقارير دورية مفصلة عن جميع أنشطتنا ومشاريعنا، ونخضع لعمليات تدقيق مستقلة لضمان التزامنا بأعلى معايير الحوكمة والمساءلة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
