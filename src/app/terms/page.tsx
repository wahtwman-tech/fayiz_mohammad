import { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشروط والأحكام | صندوق الاستدامة التنموي",
  description: "الشروط والأحكام الخاصة بصندوق الاستدامة التنموي.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الشروط والأحكام</h1>
        </div>
      </section>
      <section className="py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. القبول</h2>
            <p className="mb-6">باستخدام هذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. وصف الخدمات</h2>
            <p className="mb-6">صندوق الاستدامة التنموي هو مؤسسة غير ربحية تعمل على تعزيز التنمية المستدامة في المجتمعات العربية من خلال الاستثمار في المشاريع التنموية.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. التبرعات</h2>
            <p className="mb-6">جميع التبرعات المقدمة للصندوق تذهب بالكامل لدعم المشاريع التنموية. الصندوق لا يضمن عائداً مالياً على التبرعات.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. الملكية الفكرية</h2>
            <p className="mb-6">جميع المحتويات على هذا الموقع هي ملكية الفكرية للصندوق ولا يجوز نسخها أو إعادة استخدامها دون إذن.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. إخلاء المسؤولية</h2>
            <p className="mb-6">لا يتحمل الصندوق أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام هذا الموقع.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. التعديلات</h2>
            <p className="mb-6">يحتفظ الصندوق بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات عبر الموقع.</p>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. الاتصال</h2>
            <p>لأي استفسارات حول هذه الشروط، يرجى التواصل معنا عبر info@susdevfund.org</p>
          </div>
        </div>
      </section>
    </>
  );
}
