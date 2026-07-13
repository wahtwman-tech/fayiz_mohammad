"use client";
import { useState, useEffect } from "react";
import { Leaf, AlertCircle } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isDemo, setIsDemo] = useState(false);

  useEffect(() => {
    // عرض شاشة التحميل لمدة 3 ثواني
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleClose = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 text-center">
        {/* الشعار المتحرك */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-600 animate-bounce shadow-2xl shadow-emerald-500/50">
              <Leaf className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -inset-4 rounded-full border-4 border-emerald-400/30 animate-ping" />
          </div>
        </div>

        {/* العنوان */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          صندوق الاستدامة التنموي
        </h1>
        
        {/* خط التحميل */}
        <div className="w-64 h-1 bg-slate-700 rounded-full mx-auto overflow-hidden mb-6">
          <div className="h-full bg-emerald-500 rounded-full animate-progress" />
        </div>

        {/* رسالة التحميل */}
        <p className="text-slate-300 text-lg mb-8">جاري تحميل الموقع...</p>

        {/* رسالة المشروع التجريبي */}
        <div className="bg-amber-500/20 border border-amber-500/50 rounded-xl p-4 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
            <AlertCircle className="h-5 w-5" />
            <span className="font-bold">مشروع تجريبي</span>
          </div>
          <p className="text-amber-200/80 text-sm">
            هذا الموقع مشروع وهمي/تجريبي showcasing للتصميم والتطوير. 
            يمكن تحويله لشركة حقيقية مستقبلاً.
          </p>
        </div>

        {/* زر التخطي */}
        <button 
          onClick={handleClose}
          className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20"
        >
          تخطي والبدء
        </button>
      </div>

      {/* CSS للحركة */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
