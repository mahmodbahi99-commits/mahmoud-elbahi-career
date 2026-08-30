import React, { useState } from 'react';
import { Language } from '../../types';
import { UserCheck, ClipboardCheck, FileText, HeartHandshake, TrendingUp, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface EducationWorkflowVisualProps {
  lang: Language;
}

export const EducationWorkflowVisual: React.FC<EducationWorkflowVisualProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Individualized Plan

  const steps = isAr
    ? [
        {
          id: 0,
          label: 'الطالب',
          sub: 'الملف والاحتياج',
          desc: 'دراسة حالة فردية للطفل، تحديد نطاق طيف التوحد أو الاضطراب النمائي واللغوي، وملاحظة السلوك المبدئي.',
          icon: UserCheck,
          tag: 'المدخلات الأساسية',
        },
        {
          id: 1,
          label: 'التقييم التشخيصي',
          sub: 'المقاييس السريرية',
          desc: 'تطبيق مقاييس القدرات النطقية واللغوية، اختبارات السلوك التكيفي، واختبارات الاستجابة التواصلية.',
          icon: ClipboardCheck,
          tag: 'التشخيص الدقيق',
        },
        {
          id: 2,
          label: 'الخطة الفردية (IEP)',
          sub: 'تصميم الأهداف',
          desc: 'صياغة أهداف تعليمية وتأهيلية سلوكية مخصصة SMART، مع تحديد استراتيجيات ABA وجداول التعزيز.',
          icon: FileText,
          tag: 'محور التدخل',
        },
        {
          id: 3,
          label: 'التدخل السلوكي واللغوي',
          sub: 'التطبيق الميداني',
          desc: 'جلسات تخاطب فردية، تدريب على التواصل المعزز والبديل (PECS)، وتعديل السلوك التكيفي في بيئة الفصل.',
          icon: HeartHandshake,
          tag: 'التنفيذ السريري',
        },
        {
          id: 4,
          label: 'قياس التقدم والتمكين',
          sub: 'المخرجات المستدامة',
          desc: 'تتبع البيانات الإحصائية لاكتساب المهارات، دمج الأسرة عبر تدريب أولياء الأمور، والانتقال للدمج الشامل.',
          icon: TrendingUp,
          tag: 'الأثر التراكمي',
        },
      ]
    : [
        {
          id: 0,
          label: 'Student',
          sub: 'Profile & Need',
          desc: 'Individual case study, identifying autism spectrum or speech-language delay, and initial behavioral baseline assessment.',
          icon: UserCheck,
          tag: 'Core Intake',
        },
        {
          id: 1,
          label: 'Assessment',
          sub: 'Clinical Diagnostics',
          desc: 'Administering standardized speech articulation tests, adaptive behavior scales, and receptive/expressive language batteries.',
          icon: ClipboardCheck,
          tag: 'Diagnostic Stage',
        },
        {
          id: 2,
          label: 'Individualized Plan',
          sub: 'IEP Strategy',
          desc: 'Formulating tailored SMART behavioral and educational goals, individualized ABA reinforcement schedules, and milestone metrics.',
          icon: FileText,
          tag: 'Strategic Core',
        },
        {
          id: 3,
          label: 'Intervention',
          sub: 'Clinical Execution',
          desc: 'One-on-one speech therapy sessions, augmentative & alternative communication (PECS), and structured classroom behavioral support.',
          icon: HeartHandshake,
          tag: 'Active Therapy',
        },
        {
          id: 4,
          label: 'Progress',
          sub: 'Empowerment & Growth',
          desc: 'Continuous quantitative data tracking of target skill acquisition, parent coaching, and pathway to inclusive education.',
          icon: TrendingUp,
          tag: 'Measurable Impact',
        },
      ];

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="my-10 p-6 sm:p-8 bg-[#080B09] border border-emerald-500/20 relative overflow-hidden">
      {/* Subtle emerald ambient top highlight */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="absolute -top-24 right-1/4 w-72 h-72 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-emerald-500/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-mono tracking-widest text-emerald-400/80 uppercase">
              {isAr ? 'منهجية التدخل السريري والتربوي' : 'CLINICAL & EDUCATIONAL WORKFLOW'}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {isAr ? 'مسار رحلة الطالب: من التقييم إلى التمكين' : 'Student Journey: Assessment to Mastery'}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{isAr ? 'تفاعل بالنقر لاستكشاف المراحل' : 'Click nodes to inspect stages'}</span>
        </div>
      </div>

      {/* Flow Diagram - 5 Interactive Horizontal/Stacked Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 sm:gap-2 mb-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`group relative p-3.5 sm:p-4 text-left rtl:text-right transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-emerald-950/30 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.12)] -translate-y-0.5'
                  : 'bg-[#090C0A] border-emerald-500/15 hover:border-emerald-500/35 hover:bg-[#0C100D]'
              }`}
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between gap-1 mb-2.5">
                <span className={`text-[10px] font-mono font-bold tracking-wider ${isActive ? 'text-emerald-300' : 'text-emerald-400/50'}`}>
                  0{idx + 1}
                </span>
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-emerald-400' : 'text-white/40 group-hover:text-emerald-400/80'}`} />
              </div>

              {/* Node Title */}
              <div>
                <h4 className={`text-xs sm:text-sm font-bold leading-tight mb-1 ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                  {step.label}
                </h4>
                <p className="text-[11px] font-mono text-emerald-400/60 line-clamp-1">
                  {step.sub}
                </p>
              </div>

              {/* Connected arrow for larger screens */}
              {idx < steps.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-2.5 rtl:-right-auto rtl:-left-2.5 -translate-y-1/2 z-20 pointer-events-none text-emerald-500/40">
                  <ArrowIcon className="w-3.5 h-3.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Card for Active Stage */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="p-4 sm:p-5 bg-[#0A0E0B] border border-emerald-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 uppercase">
              {steps[activeStep].tag}
            </span>
            <span className="text-xs font-mono text-white/50">
              {isAr ? `المرحلة 0${activeStep + 1} من 05` : `Stage 0${activeStep + 1} of 05`}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
            {steps[activeStep].desc}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
            className="px-3 py-1.5 text-xs font-mono bg-white/[0.03] hover:bg-white/[0.08] text-white/70 hover:text-white border border-emerald-500/20 transition-colors cursor-pointer"
          >
            {isAr ? 'السابق' : 'Prev'}
          </button>
          <button
            onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
            className="px-3 py-1.5 text-xs font-mono bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 transition-colors cursor-pointer"
          >
            {isAr ? 'التالي' : 'Next'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
