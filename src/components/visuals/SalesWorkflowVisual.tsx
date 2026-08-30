import React, { useState } from 'react';
import { Language } from '../../types';
import { Compass, MessageCircle, Lightbulb, TrendingUp, Sparkles, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface SalesWorkflowVisualProps {
  lang: Language;
}

export const SalesWorkflowVisual: React.FC<SalesWorkflowVisualProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = isAr
    ? [
        {
          id: 0,
          label: 'احتياج العميل الحقيقي',
          sub: 'الاستماع النشط والتشخيص',
          desc: 'التعمق في فهم التحديات التشغيلية أو احتياجات الخدمة، وتحديد نقاط الألم الحقيقية دون افتراضات مسبقة.',
          icon: Compass,
          badge: 'الاستكشاف الاستشاري',
        },
        {
          id: 1,
          label: 'التواصل الاستشاري الفعال',
          sub: 'بناء الثقة ومواءمة التوقعات',
          desc: 'ترجمة المميزات التقنية المعقدة إلى فوائد مباشرة ومفهومة تخاطب أولويات العميل وميزانيته.',
          icon: MessageCircle,
          badge: 'الحوار المهني',
        },
        {
          id: 2,
          label: 'الحل المصمم خصيصاً',
          sub: 'تقديم العرض المناسب',
          desc: 'هيكلة باقة أو خدمة تلبي الاحتياج بدقة، مع توضيح مسار التنفيذ والدعم المستمر.',
          icon: Lightbulb,
          badge: 'الملاءمة الاستراتيجية',
        },
        {
          id: 3,
          label: 'القيمة الملموسة والولاء',
          sub: 'العلاقات طويلة الأمد',
          desc: 'تحقيق رضا العميل، تجاوز أهداف المبيعات، وبناء علاقة مستدامة تتجاوز مجرد إتمام الصفقة.',
          icon: TrendingUp,
          badge: 'الأثر التراكمي',
        },
      ]
    : [
        {
          id: 0,
          label: 'Customer Real Need',
          sub: 'Active Listening & Diagnosis',
          desc: 'Deep discovery into operational bottlenecks and service expectations without upfront assumptions.',
          icon: Compass,
          badge: 'Consultative Discovery',
        },
        {
          id: 1,
          label: 'Consultative Communication',
          sub: 'Trust & Expectation Alignment',
          desc: 'Translating technical capabilities into direct, tangible benefits mapped to customer priorities.',
          icon: MessageCircle,
          badge: 'Persuasive Empathy',
        },
        {
          id: 2,
          label: 'Tailored Solution',
          sub: 'Strategic Offering',
          desc: 'Structuring packages that fit exact needs with explicit execution timelines and continuous support.',
          icon: Lightbulb,
          badge: 'Precision Fit',
        },
        {
          id: 3,
          label: 'Tangible Value & Retention',
          sub: 'Long-term Partnership',
          desc: 'Driving customer satisfaction, surpassing sales quotas, and nurturing lasting commercial relationships.',
          icon: TrendingUp,
          badge: 'Sustainable ROI',
        },
      ];

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="my-10 p-6 sm:p-8 bg-[#0F0C08] border border-amber-500/25 relative overflow-hidden">
      {/* Amber top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-amber-500/15">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-mono tracking-widest text-amber-400/80 uppercase">
              {isAr ? 'منهجية المبيعات الاستشارية' : 'CONSULTATIVE SALES CYCLE'}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {isAr ? 'من تحديد الاحتياج إلى بناء القيمة المستدامة' : 'From Discovery to Long-Term Value'}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-amber-400/70">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>{isAr ? 'مبيعات قائمة على الثقة' : 'Trust-Driven Commercials'}</span>
        </div>
      </div>

      {/* 4 Flow Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-2.5 mb-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`group relative p-4 text-left rtl:text-right transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-amber-950/35 border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.14)] -translate-y-0.5'
                  : 'bg-[#120E09] border-amber-500/15 hover:border-amber-500/35 hover:bg-[#18130B]'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2.5">
                <span className={`text-[10px] font-mono font-bold tracking-wider ${isActive ? 'text-amber-300' : 'text-amber-400/50'}`}>
                  0{idx + 1}
                </span>
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-amber-400' : 'text-white/40 group-hover:text-amber-400/80'}`} />
              </div>

              <div>
                <h4 className={`text-xs sm:text-sm font-bold leading-tight mb-1 ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                  {step.label}
                </h4>
                <p className="text-[11px] font-mono text-amber-400/60 line-clamp-1">
                  {step.sub}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-2.5 rtl:-right-auto rtl:-left-2.5 -translate-y-1/2 z-20 pointer-events-none text-amber-500/40">
                  <ArrowIcon className="w-3.5 h-3.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Detail Card */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="p-4 sm:p-5 bg-[#140F0A] border border-amber-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2 py-0.5 text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase">
              {steps[activeStep].badge}
            </span>
            <span className="text-xs font-mono text-white/50">
              {isAr ? `المرحلة 0${activeStep + 1} من 04` : `Stage 0${activeStep + 1} of 04`}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
            {steps[activeStep].desc}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
            className="px-3 py-1.5 text-xs font-mono bg-white/[0.03] hover:bg-white/[0.08] text-white/70 hover:text-white border border-amber-500/20 transition-colors cursor-pointer"
          >
            {isAr ? 'السابق' : 'Prev'}
          </button>
          <button
            onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
            className="px-3 py-1.5 text-xs font-mono bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors cursor-pointer"
          >
            {isAr ? 'التالي' : 'Next'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
