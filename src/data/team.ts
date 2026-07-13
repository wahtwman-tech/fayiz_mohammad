import { TeamMember, Testimonial, Stat } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "المملكة العربية السعودية",
    role: "الرئيس التنفيذي",
    bio: "خبرة تتجاوز 25 عاماً في قطاع الاستثمار التنموي والتمويل المستدام. شغل منصب المدير العام في عدة مؤسسات مالية عربية ودولية.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=ceo",
  },
  {
    id: 2,
    name: "الإمارات العربية المتحدة",
    role: "مديرة الاستثمار",
    bio: "متخصصة في التحليل المالي وإدارة محافظ الاستثمار الاجتماعي. حاصلة على درجة الماجستير في إدارة الأعمال من جامعة لندن.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=investment",
  },
  {
    id: 3,
    name: "الدكتور أحمد محمد",
    role: "مدير الأبحاث والتطوير",
    bio: "دكتوراه في الاقتصاد التنموي من جامعة هارفارد. نشر أكثر من 30 بحثاً في مجلات علمية محكّمة حول الاستثمار الاجتماعي.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=research",
  },
  {
    id: 4,
    name: "سارة خالد",
    role: "مديرة الشراكات الاستراتيجية",
    bio: "خبرة 15 عاماً في بناء الشراكات بين القطاعين العام والخاص. أشرفت على أكثر من 100 مشروع تنموي في المنطقة العربية.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=partnerships",
  },
  {
    id: 5,
    name: "محمد علي",
    role: "مدير العمليات",
    bio: "متخصص في إدارة المشاريع التنموية وتقييم الأثر الاجتماعي. قاد فريقه في تنفيذ مشاريع بقيمة تتجاوز 500 مليون ريال.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=operations",
  },
  {
    id: 6,
    name: "نورة سعد",
    role: "المسؤولة القانونية",
    bio: "محامية معتمدة متخصصة في القانون التجاري والاستثمار. عملت في كبرى المحاميات في الخليج لمدة 12 عاماً.",
    imageUrl: "https://api.dicebear.com/7.x/personas/svg?seed=legal",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "صناديق النور الاستثمارية",
    role: "شريك استراتيجي",
    quote: "شراكتنا مع صندوق الاستدامة التنموي أثمرت عن مشاريع تنموية حقيقية غيّرت حياة آلاف الأسر في المنطقة. نفتخر بهذا التعاون المثمر.",
    imageUrl: "https://api.dicebear.com/7.x/initials/svg?seed=partner1",
  },
  {
    id: 2,
    name: "مؤسسة الأمل الخيرية",
    role: "شريك تنموي",
    quote: "الدعم المالي والفني الذي نقدمه ساعدنا في توسيع نطاق عملنا والوصول إلى المزيد من المستفيدين في المناطق الأكثر احتياجاً.",
    imageUrl: "https://api.dicebear.com/7.x/initials/svg?seed=partner2",
  },
  {
    id: 3,
    name: "مجلس الغرف التجارية",
    role: "شريك مؤسسي",
    quote: "صندوق الاستدامة التنموي شريك موثوق يفهم احتياجات السوق ويقدم حلولاً ابتكارية للاستثمار في رأس المال البشري.",
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
  {
    title: "التعليم",
    description: "دعم المدارس والمؤسسات التعليمية في المناطق المحرومة",
    icon: "📚",
  },
  {
    title: "الرعاية الصحية",
    description: "توفير الرعاية الصحية الأولية والمعدات الطبية",
    icon: "🏥",
  },
  {
    title: "البيئة",
    description: "المشاريع الخضراء والطاقة المتجددة",
    icon: "🌱",
  },
  {
    title: "ريادة الأعمال",
    description: "دعم المشاريع الصغيرة والمتوسطة",
    icon: "💼",
  },
];
