import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/team";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            آراء شركاء النجاح
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            نفتخر بالثقة التي يمنحنا إياها شركاؤنا ونعمل جاهدين على تحقيق توقعاتهم
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg bg-slate-50 relative">
              <CardContent className="pt-8 pb-6">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-6 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center">
                  <Quote className="h-6 w-6 text-white" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 leading-relaxed mb-6 mt-4">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      {testimonial.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-emerald-600">{testimonial.role}</p>
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
