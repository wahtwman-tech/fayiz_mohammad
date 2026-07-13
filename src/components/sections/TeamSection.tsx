import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { teamMembers } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="py-20 bg-slate-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">فريقنا القيادي</h2>
          <p className="text-slate-600 text-lg">نخبة من المتخصصين الذين يقودون رحلة التنمية المستدامة</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-0 shadow-lg bg-white overflow-hidden group">
              <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-blue-100">
                <Avatar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarImage src={member.imageUrl} alt={member.name} />
                  <AvatarFallback>{member.name.slice(0,2)}</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="pt-6 text-center">
                <h3 className="font-bold text-xl text-slate-800 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
