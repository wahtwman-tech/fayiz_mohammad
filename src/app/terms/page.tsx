import { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "الشروط والأحكام | صندوق الاستدامة التنموي",
  description: "الشروط والأحكام الخاصة بصندوق الاستدامة التنموي - مؤسسة غير ربحية",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الشروط والأحكام</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            الشروط والأحكام التي تحكم استخدام خدمات صندوق الاستدامة التنموي
          </p>
        </div>
      </section>
      
      {/* Important Notice */}
      <section className="py-12 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-amber-800">
            <AlertCircle className="h-6 w-6" />
            <p className="font-medium text-lg">
              تنويه مهم: صندوق الاستدامة التنموي هو مؤسسة غير ربحية، وجميع أنشطتها موجهة لتحقيق الأغراض التنموية فقط
            </p>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Section 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FileText className="h-6 w-6 text-emerald-600" />
                    第一条: القبول بالشروط
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                  <p>
                    باستخدام خدمات صندوق الاستدامة التنموي، سواء كنت مستثمراً، أو متبرعاً، أو شريكاً، أو زائراً للموقع الإلكتروني، فإنك توافق على الالتزام بهذه الشروط والأحكام بشكل كامل. إذا كنت لا توافق على أي جزء من هذه الشروط، فيرجى عدم استخدام خدماتنا.
                  </p>
                  <p>
                    يحتفظ الصندوق بحق تعديل هذه الشروط من وقت لآخر، وسيتم إخطارك بأي تغييرات جوهرية عبر الموقع الإلكتروني أو البريد الإلكتروني المسجل. استمرارك في استخدام الخدمات بعد إجراء التعديلات يعني قبولك للشروط المعدلة.
                  </p>
                </CardContent>
              </Card>
              
              {/* Section 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Scale className="h-6 w-6 text-emerald-600" />
                    第二条: طبيعة الصندوق
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                  <p>
                    صندوق الاستدامة التنموي هو مؤسسة غير ربحية مسجلة بموجب القوانين المعمول بها في المملكة العربية السعودية. الأهداف الأساسية للصندوق هي:
                  </p>
                  <ul className="list-disc pr-6 space-y-2">
                    <li>تعزيز التنمية المستدامة في المجتمعات العربية</li>
                    <li>دعم المشاريع التنموية الصغيرة والمتوسطة</li>
                    <li>تمويل برامج التعليم والرعاية الصحية</li>
                    <li>المساهمة في حماية البيئة、促进 البيئة المستدامة</li>
                    <li>بناء قدرات الشباب وتأهيلهم لسوق العمل</li>
                  </ul>
                  <p className="bg-slate-50 p-4 rounded-lg border-r-4 border-emerald-500">
                    <strong>ملاحظة مهمة:</strong> الصندوق لا يهدف إلى تحقيق أرباح مالية. جميع الإيرادات تُعيد استثمارها في المشاريع والبرامج التنموية. لا يُقدم الصندوق أي عوائد مالية للمستثمرين أو المتبرعين.
                  </p>
                </CardContent>
              </Card>
              
              {/* Section 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FileText className="h-6 w-6 text-emerald-600" />
                    第三条: الاستثمار والتبرعات
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                  <p><strong>3.1 طبيعة المساهمات:</strong> أي مبالغ مالية تُدفع للصندوق تُعتبر مساهمات أو تبرعات وليست استثمارات مالية. لا يُقدم الصندوق أي عوائد مالية أو أرباح على هذه المساهمات.</p>
                  
                  <p><strong>3.2 استخدام المساهمات:</strong> يلتزم الصندوق باستخدام جميع المساهمات في تحقيق أهدافه التنموية المحددة. يُقدم الصندوق تقارير دورية عن استخدام الأموال.</p>
                  
                  <p><strong>3.3 سياسة الاسترداد:</strong> نظراً لطبيعة الصندوق غير الربحية، لا توجد سياسة استرداد للمساهمات المالية. يُرجى مراجعة القسم المالي بعناية قبل اتخاذ قرار المساهمة.</p>
                  
                  <p><strong>3.4 التبرعات الخيرية:</strong> قد تكون التبرعات المقدمة للصندوق قابلة للخصم الضريبي وفقاً للقوانين المحلية المعمول بها. يُرجى استشارة مستشار ضريبي لتأكيد أهليتك.</p>
                </CardContent>
              </Card>
              
              {/* Section 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FileText className="h-6 w-6 text-emerald-600" />
                    第四条: السرية وحماية البيانات
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                  <p>
                    يلتزم الصندوق بحماية خصوصية جميع المساهمين والشركاء والزوار. لا يتم بيع أو مشاركة البيانات الشخصية مع أطراف ثالثة لأغراض تسويقية. يُرجى الرجوع إلى سياسة الخصوصية للحصول على تفاصيل كاملة.
                  </p>
                </CardContent>
              </Card>
              
              {/* Section 5 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Scale className="h-6 w-6 text-emerald-600" />
                    第五条: إخلاء المسؤولية
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                  <p>
                    يبذل الصندوق قصارى جهده لضمان دقة المعلومات المنشورة على الموقع الإلكتروني. ومع ذلك، لا يتحمل الصندوق أي مسؤولية عن:
                  </p>
                  <ul className="list-disc pr-6 space-y-2">
                    <li>أي أخطاء أو omissions في المعلومات المقدمة</li>
                    <li>أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الموقع</li>
                    <li>أي قرارات يتم اتخاذها بناءً على معلومات الموقع</li>
                    <li>أي انقطاع أو خطأ في الخدمة</li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Section 6 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FileText className="h-6 w-6 text-emerald-600" />
                    第六条: القانون الحاكم
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                  <p>
                    تخضع هذه الشروط والأحكام للقوانين المعمول بها في المملكة العربية السعودية. أي نزاعات تنشأ عن هذه الشروط ستُحل وفقاً للإجراءات القانونية المعمول بها في المملكة.
                  </p>
                  <p>
                    تاريخ آخر تحديث: يناير 2024
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
