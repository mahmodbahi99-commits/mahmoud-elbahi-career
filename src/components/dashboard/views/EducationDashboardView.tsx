import React, { useState } from 'react';
import { Language, DashboardSection, EducationExperienceItem } from '../../../types';
import { SiteContent } from '../../../data/content';
import { CategoryNavTabs } from '../CategoryNavTabs';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Layers, 
  Brain, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface EducationDashboardViewProps {
  lang: Language;
  content: SiteContent;
  onSelectSection: (section: DashboardSection) => void;
  onOpenExperienceDetail: (exp: EducationExperienceItem) => void;
}

export const EducationDashboardView: React.FC<EducationDashboardViewProps> = ({
  lang,
  content,
  onSelectSection,
  onOpenExperienceDetail,
}) => {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;
  const edu = content.educationPath;

  const specialEdTeacherExp = edu.experienceItems.find((e) => e.id === 'al-furqan' || e.id === 'alfurqan') || edu.experienceItems[0];
  const supervisorExp = edu.experienceItems.find((e) => e.id === 'al-furqan-supervisor');

  const specializationChips = [
    { label: isAr ? 'اضطراب طيف التوحد (Autism)' : 'Autism Spectrum Disorder', tag: 'Core Specialization' },
    { label: isAr ? 'التربية الخاصة وتعديل السلوك' : 'Special Education & Intervention', tag: 'Clinical' },
    { label: isAr ? 'أمراض النطق والتخاطب' : 'Speech & Language Therapy', tag: 'Therapeutic' },
    { label: isAr ? 'تحليل السلوك التطبيقي (ABA)' : 'Applied Behavior Analysis (ABA)', tag: 'Methodology' },
    { label: isAr ? 'الخطط التربوية الفردية (IEP)' : 'Individualized Education Programs (IEP)', tag: 'Assessment' },
  ];

  const timelineMilestones = [
    {
      year: '2019 — 2021',
      org: isAr ? 'مستشفى الأحرار التعليمي' : 'Al-Ahrar Educational Hospital',
      role: isAr ? 'أخصائي نطق وتخاطب (تدريب ميداني)' : 'Speech Therapist (Clinical Training)',
      location: isAr ? 'مصر' : 'Egypt',
      status: 'Completed',
      color: 'border-white/20 text-white/70',
    },
    {
      year: '2021 — 2024',
      org: isAr ? 'مركز تقدم للرعاية النهارية' : 'Taqaddom Day Care Centre',
      role: isAr ? 'أخصائي توحد وتخاطب' : 'Speech & Autism Specialist',
      location: isAr ? 'مصر' : 'Egypt',
      status: 'Completed',
      color: 'border-white/20 text-white/70',
    },
    {
      year: '2023',
      org: isAr ? 'أكاديمية حمزة' : 'Hamza Academy',
      role: isAr ? 'أخصائي نطق وتخاطب (تدريب وتأهيل)' : 'Speech & Language Therapist (Training)',
      location: isAr ? 'مصر' : 'Egypt',
      status: 'Completed',
      color: 'border-white/20 text-white/70',
    },
    {
      year: isAr ? 'الحالي' : 'Current',
      org: isAr ? 'مدارس الفرقان الأهلية' : 'Al-Furqan Private Schools',
      role: isAr ? 'معلم تربية خاصة (مسار التوحد) ✕ مشرف تقني' : 'Special Education Teacher (Autism) ✕ Technical Supervisor',
      location: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia',
      status: 'Active',
      color: 'border-emerald-500 text-emerald-400',
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. HERO / INTRODUCTION HEADER */}
      <section className="space-y-4 pt-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>01 / EDUCATION & SPECIAL EDUCATION</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading uppercase">
            {isAr ? 'محمود الباهي' : 'MAHMOUD ELBAHI'}
          </h1>
          <h2 className="text-lg sm:text-2xl font-semibold text-emerald-400 font-heading">
            {isAr ? 'معلم وممارس تربية خاصة وتوحد' : 'Special Education Teacher & Autism Practitioner'}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-white/80">
          <span className="px-2 py-0.5 bg-[#14171B] border border-[#242A32] text-emerald-300">
            {isAr ? 'اضطراب طيف التوحد' : 'Autism Spectrum'}
          </span>
          <span className="text-white/30">•</span>
          <span className="px-2 py-0.5 bg-[#14171B] border border-[#242A32] text-emerald-300">
            {isAr ? 'التربية الخاصة' : 'Special Education'}
          </span>
          <span className="text-white/30">•</span>
          <span className="px-2 py-0.5 bg-[#14171B] border border-[#242A32] text-emerald-300">
            {isAr ? 'أمراض النطق والتخاطب' : 'Speech & Language'}
          </span>
        </div>

        <blockquote className="p-4 sm:p-5 bg-[#12161C] border-l-2 rtl:border-l-0 rtl:border-r-2 border-emerald-400 text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-4xl">
          {isAr
            ? 'متخصص في التربية الخاصة مع خبرة ميدانية وتطبيقية في اضطراب طيف التوحد، والتخاطب، والتدخلات التعليمية، والتطوير الشامل للطلاب — يجمع حالياً بين الممارسة التربوية والإشراف التقني والتحول الرقمي في بيئة مدرسية متكاملة.'
            : 'Special Education professional with hands-on experience in Autism, Speech & Language, educational intervention, and student development — currently combining educational practice with technical supervision and digital transformation within a school environment.'}
        </blockquote>
      </section>

      {/* 2. FOUR HORIZONTAL CATEGORY CARDS / TABS */}
      <section>
        <CategoryNavTabs
          lang={lang}
          activeSection="education"
          onSelectSection={onSelectSection}
        />
      </section>

      {/* 3. SPECIAL EDUCATION DASHBOARD OVERVIEW */}
      <section className="space-y-6">
        
        <div className="flex items-center justify-between pb-3 border-b border-[#1E242C]">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white font-heading uppercase tracking-tight">
              {isAr ? 'التربية الخاصة والتوحد' : 'SPECIAL EDUCATION'}
            </h2>
          </div>
          <span className="text-xs font-mono text-emerald-400/80">
            {isAr ? 'الممارسة الميدانية' : 'CLINICAL & CLASSROOM'}
          </span>
        </div>

        {/* Featured Current Role Card */}
        <div className="p-6 sm:p-7 bg-[#101914] border-2 border-emerald-500/40 relative overflow-hidden space-y-6">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500" />
          
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-emerald-500/20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                {isAr ? 'الخبرة الميدانية الحالية' : 'CURRENT ACTIVE ROLE'}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-emerald-300/80">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {specialEdTeacherExp.period}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {specialEdTeacherExp.location}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              {isAr ? 'معلم تربية خاصة — مسار اضطراب طيف التوحد' : 'Special Education Teacher — Autism Spectrum'}
            </h3>
            <p className="text-sm font-mono text-emerald-400">
              {isAr ? 'مدارس الفرقان الأهلية — المملكة العربية السعودية' : 'Al-Furqan Private Schools — Saudi Arabia'}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-3xl">
            {specialEdTeacherExp.shortSummary || (isAr 
              ? 'تطبيق أحدث البرامج التربوية والسلوكية الفردية لتطوير المهارات التكيفية واللغوية والاجتماعية للطلاب ذوي اضطراب طيف التوحد داخل البيئة المدرسية، وقياس التقدم بدقة.'
              : 'Applying individualized evidence-based educational and behavioral frameworks to build adaptive, communication, and social skills for students on the Autism spectrum.')}
          </p>

          {/* Special Education Key Responsibilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {specialEdTeacherExp.points.slice(0, 4).map((point, idx) => (
              <div key={idx} className="p-3 bg-[#0B1510] border border-emerald-500/20 flex items-start gap-2 text-xs text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Additional Current Responsibility Callout: Technical Supervisor */}
          <div className="p-4 bg-[#0A1320] border border-blue-500/30 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider block">
                  {isAr ? 'المسؤولية الإضافية الحالية بالمدرسة' : 'ADDITIONAL CURRENT RESPONSIBILITY'}
                </span>
                <div className="text-xs sm:text-sm font-bold text-white font-heading">
                  {isAr ? 'المشرف التقني ومسؤول التحول الرقمي' : 'Technical Supervisor & Digital Transformation Lead'}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectSection('technology')}
              className="px-3.5 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-300 text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>{isAr ? 'استعراض المسار التقني' : 'Explore Technology'}</span>
              <Arrow className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="view-current-role-detail-btn"
              onClick={() => onOpenExperienceDetail(specialEdTeacherExp)}
              className="px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{isAr ? 'استعراض تفاصيل الدور والمسؤوليات' : 'View Detailed Responsibilities'}</span>
              <Arrow className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onSelectSection('experience')}
              className="px-4 py-2 bg-[#14171B] hover:bg-[#1C2026] border border-[#242A32] text-white/80 hover:text-white text-xs font-mono transition-colors cursor-pointer"
            >
              {isAr ? 'كافة الخبرات المهنية' : 'All Experience'}
            </button>
          </div>
        </div>

      </section>

      {/* 4. SPECIALIZATION MATRIX */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1E242C]">
          <h3 className="text-base font-bold text-white font-heading uppercase tracking-tight">
            {isAr ? 'مجالات التخصص الدقيق' : 'SPECIALIZATION'}
          </h3>
          <span className="text-xs font-mono text-white/40">CORE DOMAINS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {specializationChips.map((spec, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#12161C] border border-[#242A32] flex flex-col justify-between gap-3 hover:border-emerald-500/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                  0{idx + 1} // {spec.tag}
                </span>
                <Brain className="w-4 h-4 text-emerald-400/60" />
              </div>
              <span className="text-sm font-semibold text-white font-heading">
                {spec.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MODERN VERTICAL EXPERIENCE TIMELINE */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-[#1E242C]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <h3 className="text-base font-bold text-white font-heading uppercase tracking-tight">
              {isAr ? 'التسلسل الزمني للخبرات' : 'EXPERIENCE TIMELINE'}
            </h3>
          </div>
          <span className="text-xs font-mono text-white/40">2019 — CURRENT</span>
        </div>

        <div className="relative pl-6 rtl:pl-0 rtl:pr-6 space-y-6 before:absolute before:left-2 rtl:before:left-auto rtl:before:right-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#242A32]">
          {timelineMilestones.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <span className="absolute -left-6 rtl:-left-auto rtl:-right-6 top-1.5 w-4 h-4 rounded-full bg-[#0D1014] border-2 border-emerald-400 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>

              {/* Card */}
              <div className={`p-4 sm:p-5 bg-[#12161C] border ${item.color} transition-all hover:bg-[#161B22]`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {item.year}
                  </span>
                  <span className="text-[11px] font-mono text-white/50">
                    {item.location}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white font-heading mb-1">
                  {item.org}
                </h4>
                <p className="text-xs text-white/70 font-mono">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. EDUCATIONAL WORKFLOW VISUALIZATION */}
      <section className="p-6 bg-[#0E1522] border border-blue-500/30 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>{isAr ? 'نموذج التدخل التربوي الرقمي' : 'EDUCATIONAL INTERVENTION WORKFLOW'}</span>
          </div>
          <span className="text-[10px] font-mono text-blue-300/60 uppercase">SYSTEM FLOW</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 bg-[#14171B] border border-blue-500/20 space-y-1">
            <span className="text-[10px] text-blue-400 font-bold">01 // EVALUATE</span>
            <div className="text-white font-semibold">{isAr ? 'التقييم النمائي' : 'Clinical Assessment'}</div>
            <div className="text-white/50 text-[11px]">{isAr ? 'تحديد خط الأساس' : 'Baseline mapping'}</div>
          </div>
          <div className="p-3 bg-[#14171B] border border-blue-500/20 space-y-1">
            <span className="text-[10px] text-blue-400 font-bold">02 // PLAN</span>
            <div className="text-white font-semibold">{isAr ? 'الخطة الفردية IEP' : 'IEP Formulation'}</div>
            <div className="text-white/50 text-[11px]">{isAr ? 'أهداف سلوكية دقيقة' : 'SMART milestone targets'}</div>
          </div>
          <div className="p-3 bg-[#14171B] border border-blue-500/20 space-y-1">
            <span className="text-[10px] text-blue-400 font-bold">03 // EXECUTE</span>
            <div className="text-white font-semibold">{isAr ? 'التدخل السلوكي والتدريس' : 'Targeted Teaching'}</div>
            <div className="text-white/50 text-[11px]">{isAr ? 'استراتيجيات ABA المعتمدة' : 'Evidence-based sessions'}</div>
          </div>
          <div className="p-3 bg-[#14171B] border border-emerald-500/30 space-y-1">
            <span className="text-[10px] text-emerald-400 font-bold">04 // TELEMETRY</span>
            <div className="text-white font-semibold">{isAr ? 'التوثيق الرقمي والقياس' : 'Digital Telemetry'}</div>
            <div className="text-white/50 text-[11px]">{isAr ? 'تقارير فورية لولي الأمر' : 'Live progress & dashboards'}</div>
          </div>
        </div>
      </section>

    </div>
  );
};
