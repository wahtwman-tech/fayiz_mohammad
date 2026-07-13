import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600"><Leaf className="h-6 w-6 text-white" /></div>
              <span className="font-bold text-lg">صندوق الاستدامة التنموي</span>
            </div>
            <p className="text-slate-400 text-sm">مؤسسة غير ربحية مخصصة لتعزيز التنمية المستدامة في المجتمعات العربية.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">روابط سريعة</h3>
            <ul className="space-y-2">
              {[{href:"/",label:"الرئيسية"},{href:"/about",label:"نبذة عنا"},{href:"/team",label:"فريقنا"},{href:"/testimonials",label:"شهادات الشركاء"}].map(l => (
                <li key={l.href}><Link href={l.href} className="text-slate-400 hover:text-emerald-400 text-sm">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">روابط قانونية</h3>
            <ul className="space-y-2">
              {[{href:"/terms",label:"الشروط والأحكام"},{href:"/privacy",label:"سياسة الخصوصية"}].map(l => (
                <li key={l.href}><Link href={l.href} className="text-slate-400 hover:text-emerald-400 text-sm">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-500" /><span>عمان، المملكة الأردنية الهاشمية</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-500" /><span dir="ltr">+962 6 XXX XXXX</span></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-500" /><span>info@susdevfund.org</span></li>
            </ul>
            <div className="flex gap-3 pt-2">
              {["فيسبوك","تويتر","لينكد إن","إنستغرام"].map(s => (
                <a key={s} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors"><Globe className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} صندوق الاستدامة التنموي. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>سجل تجاري: 20XXX</span><span>|</span><span>الرقم الضريبي: 11XXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
