import React from 'react';
import { Language } from '../../../types';
import { BookOpen, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

interface AcademicDashboardViewProps {
  lang: Language;
}

export const AcademicDashboardView: React.FC<AcademicDashboardViewProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. HEADER */}
      <section className="space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#14171B] border border-[#242A32] text-white/80 text-xs font-mono font-semibold tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span>CAREER / ACADEMIC QUALIFICATION</span>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading uppercase">
            {isAr ? 'المؤهل الأكاديمي' : 'ACADEMIC EDUCATION'}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-emerald-400 font-heading">
            {isAr ? 'الدرجة الجامعية والتأسيس العلمي' : 'University Degree & Scientific Foundation'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-3xl">
          {isAr
            ? 'الأساس الأكاديمي التخصصي في علوم الإعاقة والتأهيل مع التركيز الدقيق على اضطراب طيف التوحد والتدخلات السلوكية.'
            : 'Formal academic background in Disability and Rehabilitation Sciences specializing in Autism Spectrum Disorders and developmental intervention.'}
        </p>
      </section>

      {/* 2. PRIMARY DEGREE CARD */}
      <section className="p-6 sm:p-8 bg-[#101914] border-2 border-emerald-500/40 relative overflow-hidden space-y-6">
        <div className="absolute top-0 inset-x-0 h-1 bg-emerald-400" />

        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-emerald-500/20">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              {isAr ? 'المؤهل الجامعي الأساسي' : 'BACHELOR DEGREE'}
            </span>
          </div>
          <span className="text-xs font-mono text-emerald-300">
            Zagazig University — Egypt
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            {isAr ? 'بكالوريوس علوم الإعاقة والتأهيل' : 'Bachelor of Disability & Rehabilitation Sciences'}
          </h3>
          <p className="text-base font-mono text-emerald-300">
            {isAr ? 'جامعة الزقازيق — جمهورية مصر العربية' : 'Zagazig University — Faculty of Disability & Rehabilitation Sciences'}
          </p>
        </div>

        {/* Key Academic Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-[#141F18] border border-emerald-500/30 space-y-1">
            <span className="text-[10px] font-mono text-white/50 uppercase block">
              {isAr ? 'التخصص الدقيق' : 'SPECIALIZATION'}
            </span>
            <span className="text-base font-bold text-emerald-400 font-heading">
              {isAr ? 'اضطراب طيف التوحد (Autism)' : 'Autism Spectrum'}
            </span>
          </div>

          <div className="p-4 bg-[#141F18] border border-emerald-500/30 space-y-1">
            <span className="text-[10px] font-mono text-white/50 uppercase block">
              {isAr ? 'التقدير العام' : 'ACADEMIC GRADE'}
            </span>
            <span className="text-base font-bold text-white font-heading">
              {isAr ? 'جيد جداً (Very Good)' : 'Very Good'}
            </span>
          </div>

          <div className="p-4 bg-[#141F18] border border-emerald-500/30 space-y-1">
            <span className="text-[10px] font-mono text-white/50 uppercase block">
              {isAr ? 'المعدل التراكمي' : 'CUMULATIVE GPA'}
            </span>
            <span className="text-base font-bold text-emerald-300 font-mono">
              3.28 / 4.00
            </span>
          </div>
        </div>

        {/* Academic Pillars */}
        <div className="space-y-3 pt-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold block">
            {isAr ? 'المجالات المعرفية الأكاديمية:' : 'Foundational Study Areas:'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80 font-light">
            <div className="flex items-center gap-2 p-2.5 bg-[#12161C] border border-[#242A32]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{isAr ? 'التقييم والتشخيص النمائي' : 'Developmental Assessment & Diagnostic Criteria'}</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-[#12161C] border border-[#242A32]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{isAr ? 'علم أمراض التخاطب واللغة' : 'Speech-Language Pathology & Articulation'}</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-[#12161C] border border-[#242A32]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{isAr ? 'نظريات ومناهج تعديل السلوك' : 'Behavior Modification Principles'}</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-[#12161C] border border-[#242A32]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{isAr ? 'تصميم البرامج والخطط الفردية' : 'Curriculum Adaptation & IEP Architecture'}</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
