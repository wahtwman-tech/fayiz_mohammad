"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "نبذة عنا" },
  { href: "/team", label: "فريقنا" },
  { href: "/testimonials", label: "شهادات الشركاء" },
  { href: "/terms", label: "الشروط والأحكام" },
  { href: "/privacy", label: "سياسة الخصوصية" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="hidden sm:block font-bold text-lg text-slate-800">
              صندوق الاستدامة التنموي
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              ساهم الآن
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden">
              <div className="p-2 hover:bg-slate-100 rounded-md">
                <Menu className="h-6 w-6 text-slate-700" />
                <span className="sr-only">فتح القائمة</span>
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                  ساهم الآن
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
