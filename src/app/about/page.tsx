import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "نبذة عنا | صندوق الاستدامة التنموي",
  description: "تعرف على قصة تأسيس صندوق الاستدامة التنموي ورسالتنا في تعزيز التنمية المستدامة.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">نبذة عنا</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">نعمل على تحقيق التنمية المستدامة في المجتمعات العربية</p>
        </div>
      </section>
      <AboutSection />
      <TeamSection />
    </>
  );
}
