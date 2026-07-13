import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Globe } from "lucide-react";

const quickLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "نبذة عنا" },
  { href: "/team", label: "فريقنا" },
  { href: "/testimonials", label: "شهادات الشركاء" },
];

const legalLinks = [
  { href: "/terms", label: "الشروط والأحكام" },
  { href: "/privacy", label: "سياسة الخصوصية" },
];

const socialLinks = [
  { name: "فيسبوك", href: "https://facebook.com" },
  { name: "تويتر", href: "https://twitter.com" },
  { name: "لينكد إن", href: "https://linkedin.com" },
  { name: "إنستغرام", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-lg">صندوق الاستدامة التنموي</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              مؤسسة غير ربحية مخصصة لتعزيز التنمية المستدامة في المجتمعات العربية من خلال الاستثمار في رأس المال البشري والمشاريع التنموية.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">روابط قانونية</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4 text-emerald-500" />
                <span dir="ltr">+966 11 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4 text-emerald-500" />
                <span>info@susdevfund.org</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors"
                  aria-label={social.name}
                >
                  <Globe className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} صندوق الاستدامة التنموي. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>سجل تجاري: 1010XXXXXX</span>
              <span>|</span>
              <span>الرقم الضريبي: 3XXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
