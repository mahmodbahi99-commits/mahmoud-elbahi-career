import React, { useState } from 'react';
import { Language } from '../../types';
import { HelpCircle, Bot, Workflow, Sparkles, ArrowRight, ArrowLeft, Cpu, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface AiWorkflowVisualProps {
  lang: Language;
}

export const AiWorkflowVisual: React.FC<AiWorkflowVisualProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = isAr
    ? [
        {
          id: 0,
          label: 'المشكلة التربوية والسريرية',
          sub: 'تحديد العقبة الواقعية',
          desc: 'مثل هدر وقت المعالجين في كتابة التقارير يدوياً، صعوبة صياغة أهداف سلوكية متعددة المستويات، أو تأخر تحليل مؤشرات التقدم.',
          icon: HelpCircle,
          badge: 'نقطة الانطلاق',
        },
        {
          id: 1,
          label: 'نماذج الذكاء الاصطناعي',
          sub: 'هندسة السياق والتوجيه',
          desc: 'تطبيق هندسة الأوامر المتقدمة (Context Engineering) ونماذج اللغة الكبيرة المدربة سريرياً لفهم مصطلحات التوحد والتخاطب.',
          icon: Bot,
          badge: 'محرك الاستدلال',
        },
        {
          id: 2,
          label: 'سلسلة الأتمتة وسير العمل',
          sub: 'الدمج مع أدوات الإنتاجية',
          desc: 'ربط النماذج الذكية بأدوات إدارة المهام (n8n / Make / Google Sheets / Python scripts) لتشغيل تدفقات عمل ذاتية.',
          icon: Workflow,
          badge: 'هندسة التدفق',
        },
        {
          id: 3,
          label: 'الحل العملي والنتيجة',
          sub: 'أثر فوري ملموس',
          desc: 'توليد مسودات تقارير سريرية دقيقة في ثوانٍ، بناء خطط فردية منظمة، وتوفير ساعات عمل أسبوعية لصالح الرعاية المباشرة للطفل.',
          icon: Sparkles,
          badge: 'القيمة العملية',
        },
      ]
    : [
        {
          id: 0,
          label: 'Educational Problem',
          sub: 'Real-world Bottleneck',
          desc: 'Such as repetitive report writing taking hours from therapists, multi-tier behavioral IEP goal formulation friction, or delayed progress analytics.',
          icon: HelpCircle,
          badge: 'Friction Point',
        },
        {
          id: 1,
          label: 'Context & AI Models',
          sub: 'Domain-Informed Prompts',
          desc: 'Applying precise context engineering and LLMs grounded in clinical speech therapy and ABA terminologies.',
          icon: Bot,
          badge: 'Reasoning Engine',
        },
        {
          id: 2,
          label: 'Automation Workflow',
          sub: 'Tool Integration',
          desc: 'Connecting AI models to productivity platforms (n8n / Make / Google Sheets / Python pipelines) for seamless automated execution.',
          icon: Workflow,
          badge: 'Flow Engineering',
        },
        {
          id: 3,
          label: 'Practical Solution',
          sub: 'High-Impact Output',
          desc: 'Instant structured clinical report drafts, SMART goal matrices, and saving hours of administrative overhead per therapist each week.',
          icon: Sparkles,
          badge: 'Tangible Value',
        },
      ];

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="my-10 p-6 sm:p-8 bg-[#0B0812] border border-violet-500/25 relative overflow-hidden">
      {/* Violet top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-violet-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-violet-500/15">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-[11px] font-mono tracking-widest text-violet-400/80 uppercase">
              {isAr ? 'منهجية الذكاء الاصطناعي التطبيقي' : 'APPLIED AI PIPELINE'}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {isAr ? 'من التحدي الميداني إلى الحل المؤتمت الذكي' : 'From Field Problem to Practical Automation'}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-violet-400/70">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span>{isAr ? 'تكامل ذكي وعملي' : 'Pragmatic AI Stack'}</span>
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
                  ? 'bg-violet-950/35 border-violet-500/60 shadow-[0_0_20px_rgba(139,92,246,0.14)] -translate-y-0.5'
                  : 'bg-[#0E0B18] border-violet-500/15 hover:border-violet-500/35 hover:bg-[#130F20]'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2.5">
                <span className={`text-[10px] font-mono font-bold tracking-wider ${isActive ? 'text-violet-300' : 'text-violet-400/50'}`}>
                  0{idx + 1}
                </span>
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-violet-400' : 'text-white/40 group-hover:text-violet-400/80'}`} />
              </div>

              <div>
                <h4 className={`text-xs sm:text-sm font-bold leading-tight mb-1 ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                  {step.label}
                </h4>
                <p className="text-[11px] font-mono text-violet-400/60 line-clamp-1">
                  {step.sub}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-2.5 rtl:-right-auto rtl:-left-2.5 -translate-y-1/2 z-20 pointer-events-none text-violet-500/40">
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
        className="p-4 sm:p-5 bg-[#100C1C] border border-violet-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2 py-0.5 text-[10px] font-mono bg-violet-500/15 text-violet-300 border border-violet-500/30 uppercase">
              {steps[activeStep].badge}
            </span>
            <span className="text-xs font-mono text-white/50">
              {isAr ? `الخطوة 0${activeStep + 1} من 04` : `Step 0${activeStep + 1} of 04`}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
            {steps[activeStep].desc}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
            className="px-3 py-1.5 text-xs font-mono bg-white/[0.03] hover:bg-white/[0.08] text-white/70 hover:text-white border border-violet-500/20 transition-colors cursor-pointer"
          >
            {isAr ? 'السابق' : 'Prev'}
          </button>
          <button
            onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
            className="px-3 py-1.5 text-xs font-mono bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 border border-violet-500/40 transition-colors cursor-pointer"
          >
            {isAr ? 'التالي' : 'Next'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
