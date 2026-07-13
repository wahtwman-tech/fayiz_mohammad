import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | صندوق الاستدامة التنموي",
  description: "سياسة الخصوصية الخاصة بصندوق الاستدامة التنموي.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">سياسة الخصوصية</h1>
        </div>
      </section>
      <section className="py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. المعلومات التي نجمعها</h2>
            <p className="mb-6">نجمع فقط المعلومات الضرورية لتقديم خدماتنا، بما في ذلك: الاسم، البريد الإلكتروني، ورقم الهاتف عند التبرع أو التواصل معنا.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. استخدام المعلومات</h2>
            <p className="mb-6">نستخدم المعلومات المجمعة لتحسين خدماتنا، إرسال تحديثات حول المشاريع التنموية، والتواصل معكم بشأن تبرعاتكم.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. حماية البيانات</h2>
            <p className="mb-6">نتخذ إجراءات أمنية صارمة لحماية بياناتكم من الوصول غير المصرح به أو التعديل أو الإفصاح.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. مشاركة المعلومات</h2>
            <p className="mb-6">لا نبيع أو نشارك معلوماتكم الشخصية مع أطراف ثالثة لأغراض تسويقية.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. حقوقكم</h2>
            <p className="mb-6">لديكم الحق في الوصول إلى بياناتكم، تصحيحها، أو حذفها. يمكنكم التواصل معنا في أي وقت لممارسة هذه الحقوق.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="mb-6">نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم على الموقع. يمكنكم تعطيلها من إعدادات المتصفح.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. التعديلات</h2>
            <p className="mb-6">قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإخطاركم بأي تغييرات جوهرية.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. الاتصال</h2>
            <p>لأي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا عبر info@susdevfund.org</p>
          </div>
        </div>
      </section>
    </>
  );
}
