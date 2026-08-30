import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  FileSpreadsheet, 
  Layers, 
  FileWarning, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  RefreshCw, 
  Sparkles,
  Zap,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

interface DigitalTransformationComparisonProps {
  lang: Language;
}

export const DigitalTransformationComparison: React.FC<DigitalTransformationComparisonProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'both' | 'before' | 'after'>('both');

  const beforeItems = isAr
    ? [
        { title: 'سجلات ورقية وجداول مبعثرة', desc: 'تشتت بيانات تقييم الطلاب بين ملفات ورقية متفرقة ونماذج غير متزامنة.' },
        { title: 'عمليات متابعة يدوية بطيئة', desc: 'استنزاف ساعات عمل أسبوعية من الأخصائيين في صياغة التقارير الورقية اليدوية.' },
        { title: 'انقطاع تدفق البيانات بين الأقسام', desc: 'صعوبة التنسيق اللحظي بين أخصائي التخاطب ومعلم التربية الخاصة والإدارة.' },
        { title: 'تأخر تسليم تقارير أولياء الأمور', desc: 'إعداد التقارير الفصلية يستغرق أياماً متواصلة مع احتمالية حدوث أخطاء بشرية.' },
      ]
    : [
        { title: 'Fragmented Spreadsheets & Paper Files', desc: 'Student clinical evaluations scattered across disconnected physical folders.' },
        { title: 'Slow Manual Administrative Overhead', desc: 'Therapists spending hours manually hand-crafting paper IEP logs every week.' },
        { title: 'Siloed Communication Across Specialists', desc: 'Zero real-time data sync between speech therapists, ABA educators, and admin.' },
        { title: 'Delayed Reporting Cycles for Families', desc: 'Quarterly report generation taking days with potential human calculation errors.' },
      ];

  const afterItems = isAr
    ? [
        { title: 'منظومة رقمية موحدة وآمنة', desc: 'مستودع سحابي منظم يحتوي السجل الشامل لكل طالب مع تتبع دقيق لكافة المراحل.' },
        { title: 'سير عمل مؤتمت وسريع', desc: 'صياغة فورية للخطط الفردية IEP ومتابعة نسبة إنجاز الأهداف بدقة وموثوقية.' },
        { title: 'ترابط لحظي بين الكوادر', desc: 'لوحة تحكم موحدة تتيح لفريق العمل تبادل الملاحظات السلوكية واللغوية فور حدوثها.' },
        { title: 'تقارير فورية بنقرة زر', desc: 'تصدير مؤشرات التقدم السريري والرسوم البيانية الموجهة لأولياء الأمور والإدارة بلحظات.' },
      ]
    : [
        { title: 'Centralized Secure Digital Workspace', desc: 'Single source of truth tracking comprehensive student history and milestones.' },
        { title: 'Automated & Streamlined Workflows', desc: 'Instant SMART IEP goal structuring with auto-computed progress percentages.' },
        { title: 'Real-time Specialist Collaboration', desc: 'Unified dashboard allowing interdisciplinary team sync on clinical observations.' },
        { title: 'One-Click Analytical Reports', desc: 'Automated progress reports with visual charts ready for parents and administrators.' },
      ];

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="my-8 p-6 sm:p-8 bg-[#08090D] border border-blue-500/25 relative overflow-hidden">
      {/* Top ambient highlight */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-500/40 via-blue-500/60 to-emerald-500/60" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] font-mono tracking-widest text-blue-400 uppercase">
              {isAr ? 'نموذج التحول الرقمي — مدارس الفرقان الأهلية' : 'TRANSFORMATION CONCEPT — AL-FURQAN SCHOOLS'}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {isAr ? 'الأثر المقارن: من الإجراءات اليدوية إلى الأنظمة المتكاملة' : 'Comparative Impact: Manual to Connected Workflows'}
          </h3>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-[#0D111A] p-1 border border-white/10">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-2.5 py-1 text-xs font-mono transition-colors cursor-pointer ${
              activeTab === 'both' ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            {isAr ? 'مقارنة جنباً إلى جنب' : 'Side-by-Side'}
          </button>
          <button
            onClick={() => setActiveTab('before')}
            className={`px-2.5 py-1 text-xs font-mono transition-colors cursor-pointer ${
              activeTab === 'before' ? 'bg-red-500/20 text-red-300 font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            {isAr ? 'قبل (Before)' : 'Before'}
          </button>
          <button
            onClick={() => setActiveTab('after')}
            className={`px-2.5 py-1 text-xs font-mono transition-colors cursor-pointer ${
              activeTab === 'after' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-white/60 hover:text-white'
            }`}
          >
            {isAr ? 'بعد (After)' : 'After'}
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* BEFORE CARD */}
        {(activeTab === 'both' || activeTab === 'before') && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-5 bg-[#120A0B] border border-red-500/25 flex flex-col justify-between ${
              activeTab === 'before' ? 'md:col-span-2' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-red-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <h4 className="text-sm font-bold font-mono tracking-wider text-red-300 uppercase">
                    {isAr ? 'قبل: الإجراءات التقليدية' : 'BEFORE: FRAGMENTED WORKFLOWS'}
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-red-400/70">
                  {isAr ? 'هدر وقت وتشتت' : 'High Friction'}
                </span>
              </div>

              <ul className="space-y-3">
                {beforeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <FileWarning className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white/90">{item.title}</h5>
                      <p className="text-[11px] text-white/60 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-red-500/15 text-[11px] font-mono text-red-400/80">
              {isAr ? 'الحالة: عمليات بطيئة وتحديات في دقة المتابعة' : 'State: High administrative drag & scattered documentation'}
            </div>
          </motion.div>
        )}

        {/* AFTER CARD */}
        {(activeTab === 'both' || activeTab === 'after') && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-5 bg-[#081310] border border-emerald-500/30 flex flex-col justify-between ${
              activeTab === 'after' ? 'md:col-span-2' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/25">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <h4 className="text-sm font-bold font-mono tracking-wider text-emerald-300 uppercase">
                    {isAr ? 'بعد: المنظومة المؤتمتة' : 'AFTER: DIGITAL & CONNECTED'}
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-emerald-400/80">
                  {isAr ? 'كفاءة وتكامل فوري' : 'Automated & Clear'}
                </span>
              </div>

              <ul className="space-y-3">
                {afterItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white">{item.title}</h5>
                      <p className="text-[11px] text-white/70 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-500/20 text-[11px] font-mono text-emerald-300">
              {isAr ? 'الحالة: توفير ساعات أسبوعية وسهولة اتخاذ القرار السريري' : 'State: Hours saved weekly with crystal-clear clinical visibility'}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};
