import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/team";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">شهادات الشركاء</h2>
          <p className="text-slate-600 text-lg">ماذا يقول شركاؤنا عن التعاون معنا</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card key={t.id} className="border-0 shadow-lg bg-slate-50">
              <CardContent className="pt-8">
                <Quote className="h-10 w-10 text-emerald-600 mb-4" />
                <p className="text-slate-700 mb-6 leading-relaxed text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 border-2 border-emerald-200">
                    <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold">{t.name.slice(0,2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-slate-800">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
