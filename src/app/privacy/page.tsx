import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | صندوق الاستدامة التنموي",
  description: "سياسة الخصوصية الخاصة بصندوق الاستدامة التنموي - حماية بيانات المتبرعين والمستثمرين",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">سياسة الخصوصية</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            نلتزم بحماية خصوصيتك وضمان سرية بياناتك
          </p>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-12 bg-emerald-50 border-b border-emerald-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-emerald-800">
              <Shield className="h-10 w-10 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">التزامنا بحماية خصوصيتك</h2>
                <p className="text-emerald-700">
                  نؤمن في صندوق الاستدامة التنموي بأن خصوصيتك حق أساسي. نعمل على حماية بياناتك الشخصية وضمان استخدامها بطرق تتوافق مع قيم الشفافية والثقة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Section 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <FileText className="h-6 w-6 text-emerald-600" />
                  第一条: المعلومات التي نجمعها
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                <p>قد نجمع أنواعاً مختلفة من المعلومات، بما في ذلك:</p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">المعلومات الشخصية</h4>
                    <ul className="list-disc pr-4 text-sm space-y-1">
                      <li>الاسم الكامل</li>
                      <li>البريد الإلكتروني</li>
                      <li>رقم الهاتف</li>
                      <li>العنوان البريدي</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-bold text-slate-800 mb-2">معلومات التبرع</h4>
                    <ul className="list-disc pr-4 text-sm space-y-1">
                      <li>مبلغ التبرع</li>
                      <li>تاريخ التبرع</li>
                      <li>طريقة الدفع</li>
                      <li>الغرض من التبرع</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Section 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Eye className="h-6 w-6 text-emerald-600" />
                  第二条: كيفية استخدام المعلومات
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                <p>نستخدم معلوماتك الشخصية للأغراض التالية فقط:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>معالجة تبرعاتك وإرسال إيصالات ضريبية</li>
                  <li>التواصل معك بشأن أنشطتنا ومشاريعنا</li>
                  <li>إرسال تقارير دورية عن أثر تبرعاتك</li>
                  <li>تحسين خدماتنا وموقعنا الإلكتروني</li>
                  <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Section 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Lock className="h-6 w-6 text-emerald-600" />
                  第三条: حماية البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                <p>نتخذ إجراءات أمنية صارمة لحماية بياناتك:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>استخدام تشفير SSL لجميع المعاملات المالية</li>
                  <li>الاحتفاظ بالبيانات في خوادم آمنة</li>
                  <li>تقييد الوصول إلى البيانات للموظفين المعتمدين فقط</li>
                  <li>مراجعة دورية لإجراءات الأمان</li>
                  <li>الامتثال لمعايير أمان البيانات الدولية</li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Section 4 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Users className="h-6 w-6 text-emerald-600" />
                  第四条: مشاركة البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                <p>نحن ملتزمون بعدم بيع أو تأجير بياناتك الشخصية. قد نشارك معلوماتك فقط في الحالات التالية:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>مع مزودي الخدمات:</strong> مثل شركات معالجة الدفع، وذلك لتقديم خدماتنا فقط</li>
                  <li><strong>المتطلبات القانونية:</strong> عند الضرورة للامتثال للقوانين</li>
                  <li><strong>بموافقتك:</strong> في حالات أخرى فقط بموافقتك الصريحة</li>
                </ul>
                <p className="bg-slate-50 p-4 rounded-lg border-r-4 border-emerald-500 mt-4">
                  <strong>خصوصية المتبرعين:</strong> نحترم رغبتك في الخصوصية. إذا كنت تفضل عدم الظهور في قائمة المتبرعين، سنحترم ذلك تماماً.
                </p>
              </CardContent>
            </Card>
            
            {/* Section 5 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <FileText className="h-6 w-6 text-emerald-600" />
                  第五条: حقوقك
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                <p>لديك الحقوق التالية فيما يتعلق ببياناتك:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>الوصول:</strong> طلب نسخة من بياناتك الشخصية</li>
                  <li><strong>التصحيح:</strong> طلب تصحيح أي معلومات غير دقيقة</li>
                  <li><strong>الحذف:</strong> طلب حذف بياناتك في ظروف معينة</li>
                  <li><strong>الاعتراض:</strong> الاعتراض على معالجة بياناتك</li>
                  <li><strong>نقل البيانات:</strong> طلب نقل بياناتك لبريد إلكتروني</li>
                </ul>
                <p>لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني المذكور أدناه.</p>
              </CardContent>
            </Card>
            
            {/* Section 6 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Mail className="h-6 w-6 text-emerald-600" />
                  第六条: التواصل معنا
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-4 leading-relaxed">
                <p>إذا كان لديك أي استفسارات حول سياسة الخصوصية هذه، أو ترغب في ممارسة حقوقك، يمكنك التواصل معنا عبر:</p>
                <div className="bg-slate-50 p-4 rounded-lg mt-4">
                  <p><strong>صندوق الاستدامة التنموي</strong></p>
                  <p>الرياض، المملكة العربية السعودية</p>
                  <p>البريد الإلكتروني: privacy@susdevfund.org</p>
                  <p>الهاتف: +966 11 XXX XXXX</p>
                </div>
                <p className="mt-4">
                  تاريخ آخر تحديث: يناير 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
