import { Target, Eye, Heart, Globe, Lightbulb, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { impactAreas } from "@/data/team";

const values = [
  {
    icon: Eye,
    title: "الرؤية",
    description: "أن نكون الريادة في تعزيز التنمية المستدامة وتحقيق أثر اجتماعي مستدام في المنطقة العربية.",
  },
  {
    icon: Target,
    title: "الرسالة",
    description: "تقديم حلول استثمارية مبتكرة تدعم المشاريع التنموية الصغيرة والمتوسطة وتسهم في بناء مجتمعات resilient.",
  },
  {
    icon: Heart,
    title: "القيم",
    description: "الشفافية، المساءلة، الشراكة، والابتكار في كل ما نقوم به من أنشطة ومشاريع.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            نبذة عن الصندوق
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            صندوق الاستدامة التنموي مؤسسة غير ربحية تأسست برؤية طموحة لتعزيز التنمية المستدامة في المجتمعات العربية
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg bg-slate-50">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              فلسفة الاستثمار الاجتماعي
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                نؤمن في صندوق الاستدامة التنموي بأن الاستثمار في الإنسان هو الأساس الحقيقي لأي تنمية مستدامة. تعمل فلسفتنا على مبدأ تحويل الموارد المالية إلى فرص حقيقية للتغيير الإيجابي.
              </p>
              <p>
                نركز على المشاريع التي تحقق توازناً بين العائد الاجتماعي والجدوى الاقتصادية، مما يضمن استدامة المشاريع وتداول أثرها عبر الأجيال.
              </p>
              <p>
                نتعاون مع شركاء محليين ودوليين لضمان أن مشاريعنا تلبي احتياجات المجتمعات المستهدفة بشكل فعال ومباشر.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Globe className="h-10 w-10 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-800 mb-1">النطاق الإقليمي</h4>
                <p className="text-sm text-slate-600">نعمل في أكثر من 15 دولة عربية</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Lightbulb className="h-10 w-10 text-blue-600 mb-3" />
                <h4 className="font-bold text-slate-800 mb-1">الابتكار</h4>
                <p className="text-sm text-slate-600">حلول مالية مبتكرة ومستدامة</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Users className="h-10 w-10 text-purple-600 mb-3" />
                <h4 className="font-bold text-slate-800 mb-1">الشراكة</h4>
                <p className="text-sm text-slate-600">تعاون وثيق مع المجتمعات</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Target className="h-10 w-10 text-orange-600 mb-3" />
                <h4 className="font-bold text-slate-800 mb-1">الشفافية</h4>
                <p className="text-sm text-slate-600">تقارير دورية مفصلة</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Impact Areas */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
            مجالات العمل التنموي
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
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
