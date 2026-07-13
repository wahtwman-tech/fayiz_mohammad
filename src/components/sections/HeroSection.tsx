import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { stats } from "@/data/team";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-8">
            <Heart className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">مؤسسة غير ربحية</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            نحو مستقبل مستدام
            <br />
            <span className="text-emerald-400">للأجيال القادمة</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            صندوق الاستدامة التنموي يعمل على تعزيز التنمية المستدامة في المجتمعات العربية من خلال الاستثمار في التعليم والرعاية الصحية وحماية البيئة.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8"
            >
              ساهم الآن
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8"
              >
                تعرف علينا
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
