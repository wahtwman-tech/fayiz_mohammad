import { Target, Eye, Heart, Globe, Lightbulb, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { impactAreas } from "@/data/team";

const values = [
  { icon: Eye, title: "الرؤية", description: "أن نكون الريادة في تعزيز التنمية المستدامة وتحقيق أثر اجتماعي مستدام في المنطقة العربية." },
  { icon: Target, title: "الرسالة", description: "تقديم حلول استثمارية مبتكرة تدعم المشاريع التنموية الصغيرة والمتوسطة." },
  { icon: Heart, title: "القيم", description: "الشفافية، المساءلة، الشراكة، والابتكار في كل ما نقوم به." },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">نبذة عن الصندوق</h2>
          <p className="text-slate-600 text-lg">صندوق الاستدامة التنموي مؤسسة غير ربحية تأسست لتعزيز التنمية المستدامة في المجتمعات العربية</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((v, i) => (
            <Card key={i} className="border-0 shadow-lg bg-slate-50">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center"><v.icon className="h-8 w-8 text-emerald-600" /></div>
                <CardTitle className="text-xl">{v.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center"><p className="text-slate-600">{v.description}</p></CardContent>
            </Card>
          ))}
        </div>
        <Separator className="my-12" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">فلسفة الاستثمار الاجتماعي</h3>
            <div className="space-y-4 text-slate-600">
              <p>نؤمن بأن الاستثمار في الإنسان هو الأساس الحقيقي لأي تنمية مستدامة. تعمل فلسفتنا على تحويل الموارد المالية إلى فرص حقيقية للتغيير الإيجابي.</p>
              <p>نركز على المشاريع التي تحقق توازناً بين العائد الاجتماعي والجدوى الاقتصادية، مما يضمن استدامة المشاريع.</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              {[{icon:Globe,title:"النطاق الإقليمي",desc:"أكثر من 15 دولة عربية"},{icon:Lightbulb,title:"الابتكار",desc:"حلول مالية مبتكرة"},{icon:Users,title:"الشراكة",desc:"تعاون وثيق مع المجتمعات"},{icon:Target,title:"الشفافية",desc:"تقارير دورية مفصلة"}].map((item,i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <item.icon className="h-10 w-10 text-emerald-600 mb-3" />
                  <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Separator className="my-12" />
        <div>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-12">مجالات العمل التنموي</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl mb-4">{area.icon}</div>
                  <h4 className="font-bold text-lg text-slate-800 mb-2">{area.title}</h4>
                  <p className="text-sm text-slate-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
