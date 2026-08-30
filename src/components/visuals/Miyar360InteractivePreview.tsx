import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  Sparkles, 
  Layers, 
  Users, 
  FileText, 
  TrendingUp, 
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { motion } from 'motion/react';

interface Miyar360InteractivePreviewProps {
  lang: Language;
  onOpenCaseStudy: () => void;
}

export const Miyar360InteractivePreview: React.FC<Miyar360InteractivePreviewProps> = ({
  lang,
  onOpenCaseStudy,
}) => {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'goals' | 'assessment' | 'analytics'>('goals');

  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;

  return (
    <div className="my-8 rounded-none border border-blue-500/30 bg-[#06080F] overflow-hidden shadow-2xl relative">
      {/* Top Banner / Window Bar */}
      <div className="px-4 py-3 bg-[#0A0E1A] border-b border-blue-500/20 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider text-blue-400">
            MIYAR 360 // EdTech Workspace
          </span>
        </div>

        {/* Prototype Indicator Badge */}
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30 uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-blue-400 animate-pulse" />
            {isAr ? 'نموذج أولي / Concept Prototype' : 'Concept / Prototype'}
          </span>
          <button
            onClick={onOpenCaseStudy}
            className="text-[11px] font-mono text-white/70 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>{isAr ? 'دراسة الحالة الكاملة' : 'Case Study'}</span>
            <ExternalLink className="w-3 h-3 text-blue-400" />
          </button>
        </div>
      </div>

      {/* Interactive Sub-Navigation */}
      <div className="px-4 py-2 bg-[#080B14] border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('goals')}
          className={`px-3 py-1.5 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
            activeTab === 'goals'
              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold'
              : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{isAr ? 'تتبع أهداف الخطط (IEP)' : 'IEP Goal Tracking'}</span>
        </button>

        <button
          onClick={() => setActiveTab('assessment')}
          className={`px-3 py-1.5 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
            activeTab === 'assessment'
              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold'
              : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isAr ? 'المصفوفة التشخيصية' : 'Diagnostic Matrix'}</span>
        </button>

        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-3 py-1.5 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
            activeTab === 'analytics'
              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold'
              : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>{isAr ? 'مؤشرات الإنجاز السريري' : 'Clinical KPI Radar'}</span>
        </button>
      </div>

      {/* Main Interactive Screen Content */}
      <div className="p-5 sm:p-6 bg-[#070910]">
        
        {/* TAB 1: IEP GOALS */}
        {activeTab === 'goals' && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
              <div>
                <span className="text-xs font-mono text-white/50">{isAr ? 'الطالب التجريبي' : 'Sample Case'}:</span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {isAr ? 'عمر م. (طيف توحد - مستوى 2)' : 'Omar M. (Autism Spectrum - Level 2)'}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-[11px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {isAr ? 'معدل الإنجاز العام: 78%' : 'Overall Mastery: 78%'}
                </span>
              </div>
            </div>

            {/* Goal Row 1 */}
            <div className="p-3.5 bg-[#0C101E] border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-500/15 text-blue-300">
                    {isAr ? 'تخاطب ولغة' : 'SPEECH & COMM'}
                  </span>
                  <span className="text-xs font-bold text-white">
                    {isAr ? 'استخدام نظام PECS للمطالبة بـ 4 معززات أساسية' : 'PECS Phase III: Requesting 4 preferred reinforcers'}
                  </span>
                </div>
                <p className="text-[11px] text-white/60 font-mono">
                  {isAr ? 'معيار الإتقان: 4 محاولات ناجحة من أصل 5 خلال 3 جلسات متتالية' : 'Mastery criteria: 4/5 correct trials over 3 consecutive sessions'}
                </p>
              </div>
              <div className="w-full sm:w-36 shrink-0">
                <div className="flex justify-between text-[11px] font-mono text-white/70 mb-1">
                  <span>{isAr ? 'التقدم' : 'Progress'}</span>
                  <span className="text-emerald-400 font-bold">85%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-800 rounded-none overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[85%]" />
                </div>
              </div>
            </div>

            {/* Goal Row 2 */}
            <div className="p-3.5 bg-[#0C101E] border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-violet-500/15 text-violet-300">
                    {isAr ? 'سلوك تكيفي' : 'ADAPTIVE BEHAVIOR'}
                  </span>
                  <span className="text-xs font-bold text-white">
                    {isAr ? 'الاستجابة للتوجيه اللفظي المباشر خلال 5 ثوانٍ' : 'Compliance with 1-step verbal directions within 5s'}
                  </span>
                </div>
                <p className="text-[11px] text-white/60 font-mono">
                  {isAr ? 'الاستراتيجية: جداول بصرية وتعزيز تفاضلي (DRA)' : 'Strategy: Visual schedules & differential reinforcement (DRA)'}
                </p>
              </div>
              <div className="w-full sm:w-36 shrink-0">
                <div className="flex justify-between text-[11px] font-mono text-white/70 mb-1">
                  <span>{isAr ? 'التقدم' : 'Progress'}</span>
                  <span className="text-blue-400 font-bold">70%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-800 rounded-none overflow-hidden">
                  <div className="h-full bg-blue-400 w-[70%]" />
                </div>
              </div>
            </div>

            {/* Goal Row 3 */}
            <div className="p-3.5 bg-[#0C101E] border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-amber-500/15 text-amber-300">
                    {isAr ? 'تفاعل اجتماعي' : 'SOCIAL INTERACTION'}
                  </span>
                  <span className="text-xs font-bold text-white">
                    {isAr ? 'مشاركة اللعب التبادلي مع زميل لمدة 5 دقائق متواصلة' : 'Turn-taking during structured play with peer for 5 mins'}
                  </span>
                </div>
                <p className="text-[11px] text-white/60 font-mono">
                  {isAr ? 'مرحلة التعميم في ساحة النشاط المشترك' : 'Generalization stage across unstructured settings'}
                </p>
              </div>
              <div className="w-full sm:w-36 shrink-0">
                <div className="flex justify-between text-[11px] font-mono text-white/70 mb-1">
                  <span>{isAr ? 'التقدم' : 'Progress'}</span>
                  <span className="text-amber-400 font-bold">60%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-800 rounded-none overflow-hidden">
                  <div className="h-full bg-amber-400 w-[60%]" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: DIAGNOSTIC MATRIX */}
        {activeTab === 'assessment' && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <div className="p-4 bg-[#0B0F1C] border border-white/10">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block mb-1">
                {isAr ? 'مقياس التوحد (CARS-2)' : 'CARS-2 Assessment'}
              </span>
              <div className="text-xl font-bold text-white font-mono mb-1">32.5</div>
              <p className="text-xs text-white/60 font-mono">
                {isAr ? 'درجة طيف توحد متوسطة، استجابة حسية منضبطة' : 'Mild-to-moderate autism symptoms'}
              </p>
            </div>

            <div className="p-4 bg-[#0B0F1C] border border-white/10">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                {isAr ? 'مقياس فاينلاند للسلوك التكيفي' : 'Vineland-3 Scale'}
              </span>
              <div className="text-xl font-bold text-white font-mono mb-1">74 Standard</div>
              <p className="text-xs text-white/60 font-mono">
                {isAr ? 'تحسن ملحوظ في مهارات الحياة اليومية والتواصل' : 'Marked growth in daily living domain'}
              </p>
            </div>

            <div className="p-4 bg-[#0B0F1C] border border-white/10">
              <span className="text-[10px] font-mono text-violet-400 uppercase tracking-wider block mb-1">
                {isAr ? 'اختبار القدرة النطقية واللغوية' : 'Receptive-Expressive Battery'}
              </span>
              <div className="text-xl font-bold text-white font-mono mb-1">Age Equiv: 4.2y</div>
              <p className="text-xs text-white/60 font-mono">
                {isAr ? 'تطور الفهم الاستقبالي يسبق التعبير الصوتي' : 'Receptive language leads expressive output'}
              </p>
            </div>
          </motion.div>
        )}

        {/* TAB 3: CLINICAL KPI RADAR */}
        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
              <div className="p-3 bg-[#0B0F1E] border border-blue-500/20">
                <span className="text-[10px] font-mono text-white/50">{isAr ? 'الجلسات المنفذة' : 'Sessions Done'}</span>
                <div className="text-lg font-bold font-mono text-white">48 / 50</div>
              </div>
              <div className="p-3 bg-[#0B0F1E] border border-blue-500/20">
                <span className="text-[10px] font-mono text-white/50">{isAr ? 'نسبة حضور الأخصائيين' : 'Therapist Rate'}</span>
                <div className="text-lg font-bold font-mono text-emerald-400">96.8%</div>
              </div>
              <div className="p-3 bg-[#0B0F1E] border border-blue-500/20">
                <span className="text-[10px] font-mono text-white/50">{isAr ? 'أهداف محققة (Mastered)' : 'Mastered Goals'}</span>
                <div className="text-lg font-bold font-mono text-blue-400">14 Goals</div>
              </div>
              <div className="p-3 bg-[#0B0F1E] border border-blue-500/20">
                <span className="text-[10px] font-mono text-white/50">{isAr ? 'تفاعل أولياء الأمور' : 'Parent Engagement'}</span>
                <div className="text-lg font-bold font-mono text-amber-400">91.4%</div>
              </div>
            </div>

            <p className="text-xs font-mono text-white/50 text-center">
              {isAr ? '* البيانات محاكاة برمجية لتوضيح قدرة النظام على توليد مؤشرات فورية للأداء السريري والإداري.' : '* Simulated prototype data illustrating real-time clinical and administrative telemetry.'}
            </p>
          </motion.div>
        )}

      </div>

      {/* Footer Callout */}
      <div className="px-5 py-3 bg-[#090C16] border-t border-blue-500/15 flex items-center justify-between">
        <span className="text-xs font-mono text-white/60">
          {isAr ? 'تم تصميم وتطوير المنظومة بواسطة محمود الباهي' : 'Designed & engineered by Mahmoud Elbahi'}
        </span>
        <button
          onClick={onOpenCaseStudy}
          className="group text-xs font-mono font-bold text-blue-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>{isAr ? 'استكشف تفاصيل المشروع' : 'Explore Case Study'}</span>
          <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </button>
      </div>
    </div>
  );
};
