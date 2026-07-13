import { TeamMember, Testimonial, Stat } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "المملكة العربية السعودية",
    role: "الرئيس التنفيذي",
    bio: "خبرة تتجاوز 25 عاماً في قطاع الاستثمار التنموي والتمويل المستدام.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=ceo",
  },
  {
    id: 2,
    name: "الإمارات العربية المتحدة",
    role: "مديرة الاستثمار",
    bio: "متخصصة في التحليل المالي وإدارة محافظ الاستثمار الاجتماعي.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=investment",
  },
  {
    id: 3,
    name: "الدكتور أحمد محمد",
    role: "مدير الأبحاث والتطوير",
    bio: "دكتوراه في الاقتصاد التنموي. نشر أكثر من 30 بحثاً علمياً.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=research",
  },
  {
    id: 4,
    name: "سارة خالد",
    role: "مديرة الشراكات الاستراتيجية",
    bio: "خبرة 15 عاماً في بناء الشراكات بين القطاعين العام والخاص.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=partnerships",
  },
  {
    id: 5,
    name: "محمد علي",
    role: "مدير العمليات",
    bio: "متخصص في إدارة المشاريع التنموية وتقييم الأثر الاجتماعي.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=operations",
  },
  {
    id: 6,
    name: "نورة سعد",
    role: "المسؤولة القانونية",
    bio: "محامية معتمدة متخصصة في القانون التجاري والاستثمار.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=legal",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "صناديق النور الاستثمارية",
    role: "شريك استراتيجي",
    quote: "شراكتنا مع صندوق الاستدامة التنموي أثمرت عن مشاريع تنموية حقيقية غيّرت حياة آلاف الأسر.",
    imageUrl: "https://api.dicebear.com/7.x/initials/svg?seed=partner1",
  },
  {
    id: 2,
    name: "مؤسسة الأمل الخيرية",
    role: "شريك تنموي",
    quote: "الدعم المالي والفني ساعدنا في توسيع نطاق عملنا والوصول إلى المزيد من المستفيدين.",
    imageUrl: "https://api.dicebear.com/7.x/initials/svg?seed=partner2",
  },
  {
    id: 3,
    name: "مجلس الغرف التجارية",
    role: "شريك مؤسسي",
    quote: "صندوق الاستدامة التنموي شريك موثوق يفهم احتياجات السوق ويقدم حلولاً ابتكارية.",
    imageUrl: "https://api.dicebear.com/7.x/initials/svg?seed=partner3",
  },
];

export const stats: Stat[] = [
  { value: "+150", label: "مشروع تنموي" },
  { value: "+500 مليون", label: "ريال مستثمر" },
  { value: "+50,000", label: "مستفيد مباشر" },
  { value: "+15", label: "دولة عربية" },
];

export const impactAreas = [
  { title: "التعليم", description: "دعم المدارس والمؤسسات التعليمية", icon: "📚" },
  { title: "الرعاية الصحية", description: "توفير الرعاية الصحية الأولية", icon: "🏥" },
  { title: "البيئة", description: "المشاريع الخضراء والطاقة المتجددة", icon: "🌱" },
  { title: "ريادة الأعمال", description: "دعم المشاريع الصغيرة والمتوسطة", icon: "💼" },
];
