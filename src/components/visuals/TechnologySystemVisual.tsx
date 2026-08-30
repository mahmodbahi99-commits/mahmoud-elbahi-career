import React, { useState } from 'react';
import { Language } from '../../types';
import { School, Database, Cpu, LayoutDashboard, FileSpreadsheet, ArrowRight, ArrowLeft, Activity, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface TechnologySystemVisualProps {
  lang: Language;
}

export const TechnologySystemVisual: React.FC<TechnologySystemVisualProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeNode, setActiveNode] = useState<number>(2); // Default to Digital System

  const nodes = isAr
    ? [
        {
          id: 0,
          label: 'المدرسة والبيئة',
          sub: 'البيئة التشغيلية',
          desc: 'دمج الكوادر الإدارية، الفصول العلاجية، والمشرفين التربويين في بيئة تشغيل موحدة ومرتبطة.',
          icon: School,
          status: 'مصدر المدخلات',
        },
        {
          id: 1,
          label: 'بيانات الطلاب',
          sub: 'السجلات والتقييمات',
          desc: 'حفظ آمن للتقارير السريرية، خطط IEP، نتائج الاختبارات النمائية، والملاحظات السلوكية اليومية.',
          icon: Database,
          status: 'طبقة البيانات',
        },
        {
          id: 2,
          label: 'النظام الرقمي الذكي',
          sub: 'المعالجة والأتمتة',
          desc: 'محرك أتمتة يربط بيانات الطلاب بأهداف الخطط الفردية مع تنبيهات استحقاق التقييم وحساب المؤشرات آلياً.',
          icon: Cpu,
          status: 'المحرك البرمجي',
        },
        {
          id: 3,
          label: 'لوحة التحكم (Dashboard)',
          sub: 'المراقبة الفورية',
          desc: 'واجهة بصرية متقدمة تمنح الإدارة والمعالجين رؤية لحظية لمعدلات إنجاز الأهداف وتوزيع الحالات.',
          icon: LayoutDashboard,
          status: 'واجهة المستخدم',
        },
        {
          id: 4,
          label: 'التقارير التحليلية',
          sub: 'اتخاذ القرار والدمج',
          desc: 'تصدير فوري لتقارير الأداء السريري الموجهة للوزارة، الإدارة، وأولياء الأمور بنقرة زر واحدة.',
          icon: FileSpreadsheet,
          status: 'المخرجات النوعية',
        },
      ]
    : [
        {
          id: 0,
          label: 'School Operations',
          sub: 'Operational Intake',
          desc: 'Unifying administrative staff, special education classrooms, and therapy specialists under a single ecosystem.',
          icon: School,
          status: 'Intake Layer',
        },
        {
          id: 1,
          label: 'Student Data',
          sub: 'Secure Repository',
          desc: 'Structured storage for clinical assessments, IEP goals, daily therapy notes, and historical progress logs.',
          icon: Database,
          status: 'Data Layer',
        },
        {
          id: 2,
          label: 'Digital System Core',
          sub: 'Processing & Logic',
          desc: 'Automated logic engine bridging student intake with goal tracking, milestone alerts, and auto-computed KPIs.',
          icon: Cpu,
          status: 'System Core',
        },
        {
          id: 3,
          label: 'Live Dashboard',
          sub: 'Real-time Telemetry',
          desc: 'High-visibility visual interface giving clinical supervisors real-time tracking of therapist-student milestones.',
          icon: LayoutDashboard,
          status: 'UI & Analytics',
        },
        {
          id: 4,
          label: 'Analytical Reports',
          sub: 'Decisions & IEP Output',
          desc: 'One-click automated export of comprehensive progress reports for educational authorities and parents.',
          icon: FileSpreadsheet,
          status: 'Actionable Output',
        },
      ];

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="my-10 p-6 sm:p-8 bg-[#07090E] border border-blue-500/25 relative overflow-hidden">
      {/* Blue top gradient accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-blue-500/15">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] font-mono tracking-widest text-blue-400/80 uppercase">
              {isAr ? 'هندسة الأنظمة والتحول الرقمي' : 'SYSTEM ARCHITECTURE & DIGITAL FLOW'}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {isAr ? 'خط أنابيب المنظومة الرقمية للتربية الخاصة' : 'EdTech Data Pipeline: School to Impact'}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-blue-400/70">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>{isAr ? 'بنية مؤتمتة وموثوقة' : 'Scalable Architecture'}</span>
        </div>
      </div>

      {/* 5-Node Architecture Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 sm:gap-2 mb-6">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isActive = activeNode === idx;

          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(idx)}
              className={`group relative p-3.5 sm:p-4 text-left rtl:text-right transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-blue-950/35 border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.14)] -translate-y-0.5'
                  : 'bg-[#080B12] border-blue-500/15 hover:border-blue-500/35 hover:bg-[#0B101A]'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2.5">
                <span className={`text-[10px] font-mono font-bold tracking-wider ${isActive ? 'text-blue-300' : 'text-blue-400/50'}`}>
                  0{idx + 1}
                </span>
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-blue-400' : 'text-white/40 group-hover:text-blue-400/80'}`} />
              </div>

              <div>
                <h4 className={`text-xs sm:text-sm font-bold leading-tight mb-1 ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                  {node.label}
                </h4>
                <p className="text-[11px] font-mono text-blue-400/60 line-clamp-1">
                  {node.sub}
                </p>
              </div>

              {idx < nodes.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-2.5 rtl:-right-auto rtl:-left-2.5 -translate-y-1/2 z-20 pointer-events-none text-blue-500/40">
                  <ArrowIcon className="w-3.5 h-3.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Node Description Details */}
      <motion.div
        key={activeNode}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="p-4 sm:p-5 bg-[#090D18] border border-blue-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2 py-0.5 text-[10px] font-mono bg-blue-500/15 text-blue-300 border border-blue-500/30 uppercase">
              {nodes[activeNode].status}
            </span>
            <span className="text-xs font-mono text-white/50">
              {isAr ? `المكون 0${activeNode + 1} من 05` : `Layer 0${activeNode + 1} of 05`}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
            {nodes[activeNode].desc}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <button
            onClick={() => setActiveNode((prev) => (prev > 0 ? prev - 1 : nodes.length - 1))}
            className="px-3 py-1.5 text-xs font-mono bg-white/[0.03] hover:bg-white/[0.08] text-white/70 hover:text-white border border-blue-500/20 transition-colors cursor-pointer"
          >
            {isAr ? 'السابق' : 'Prev'}
          </button>
          <button
            onClick={() => setActiveNode((prev) => (prev < nodes.length - 1 ? prev + 1 : 0))}
            className="px-3 py-1.5 text-xs font-mono bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/40 transition-colors cursor-pointer"
          >
            {isAr ? 'التالي' : 'Next'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
