import React, { useState } from 'react';
import { Language, ProjectItem } from '../../types';
import { SiteContent } from '../../data/content';
import { CrossDomainConnection } from './CrossDomainConnection';
import { PathFooter } from './PathFooter';
import { ProjectModal } from '../ProjectModal';
import { CvDownloadButton } from '../CvDownloadButton';
import { EducationWorkflowVisual } from '../visuals/EducationWorkflowVisual';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Layers, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Calendar,
  Sparkles,
  Compass,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface EducationPathViewProps {
  lang: Language;
  content: SiteContent;
  onOpenCvModal: () => void;
}

export const EducationPathView: React.FC<EducationPathViewProps> = ({
  lang,
  content,
  onOpenCvModal,
}) => {
  const isAr = lang === 'ar';
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedTimelineIdx, setSelectedTimelineIdx] = useState<number>(3); // Default to current
  const [expandedExperiences, setExpandedExperiences] = useState<Record<string, boolean>>({
    'taqaddom': true,
  });

  const edu = content.educationPath;
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const toggleExperience = (id: string) => {
    setExpandedExperiences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const educationProjects = content.projects.items.filter(
    (p) => p.id === 'miyar360' || p.category.toLowerCase().includes('special') || p.category.toLowerCase().includes('education') || p.category.includes('التربية')
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-14">
      
      {/* 1. Path Hero Header with Emerald Accent */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 pb-8 border-b border-emerald-500/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
              {edu.badge}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            {edu.title}
          </h1>
          <p className="text-base sm:text-lg font-mono text-emerald-400/90 tracking-wide font-medium">
            {edu.subtitle}
          </p>
        </div>

        {/* Utility Action: Download CV */}
        <div className="shrink-0">
          <CvDownloadButton
            id="edu-path-download-cv-btn"
            lang={lang}
            variant="utility"
            onMissingFileFallback={onOpenCvModal}
          />
        </div>
      </motion.div>

      {/* 2. Interactive Animated Workflow: Student -> Assessment -> Plan -> Intervention -> Progress */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <EducationWorkflowVisual lang={lang} />
      </motion.section>

      {/* 3. Career Narrative */}
      {edu.narrative && (
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-14 p-6 sm:p-8 bg-[#080B09] border border-emerald-500/20 relative"
        >
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-emerald-400 uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>{edu.narrative.title}</span>
          </div>
          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
            {edu.narrative.text}
          </p>
        </motion.section>
      )}

      {/* 4. Interactive Chronological Progression Timeline */}
      {edu.timelineItems && edu.timelineItems.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
                {edu.timelineTitle}
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400/60">
              {isAr ? 'المسار الزمني التراكمي' : 'Chronological Milestones'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {edu.timelineItems.map((item, idx) => {
              const isSelected = selectedTimelineIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedTimelineIdx(idx)}
                  className={`p-4 transition-all duration-200 flex flex-col justify-between cursor-pointer border ${
                    isSelected
                      ? 'bg-emerald-950/30 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.12)] -translate-y-0.5'
                      : 'bg-[#080B09] border-emerald-500/15 hover:border-emerald-500/35 hover:bg-[#0A0F0C]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-emerald-500/15">
                      <span className={`text-xs font-mono font-bold tracking-widest ${isSelected ? 'text-emerald-300' : 'text-white'}`}>
                        {item.year}
                      </span>
                      {item.tag && (
                        <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 border ${
                          isSelected 
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                            : 'bg-white/[0.04] text-white/60 border-white/10'
                        }`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1 leading-snug">
                      {item.organization}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400/60 leading-tight">
                      {item.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* 5. Professional Experience with Progressive Disclosure */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
              {edu.experienceTitle}
            </h2>
          </div>
          <span className="text-[11px] font-mono text-emerald-400/60">
            {edu.experienceItems.length} {lang === 'ar' ? 'سجلات موثقة' : 'Verified Roles'}
          </span>
        </div>

        <div className="space-y-6">
          {/* SPECIAL FEATURED DUAL-ROLE CARD: AL-FURQAN PRIVATE SCHOOLS */}
          {edu.experienceItems.filter(e => e.id === 'alfurqan').map((exp) => {
            const isExpanded = !!expandedExperiences[exp.id];
            return (
              <div
                key={exp.id}
                id={`exp-${exp.id}`}
                className="p-6 sm:p-8 bg-[#080D0A] border-2 border-emerald-500/40 relative overflow-hidden"
              >
                {/* Top highlight bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500" />
                
                {/* Badge & Current Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-emerald-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                      {isAr ? 'الدور المهني الحالي // تقاطع تخصصي فريد' : 'CURRENT DUAL ROLE // INTERSECTION'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-300/80">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                    <span className="text-white/30">•</span>
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Dual Role Titles */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                      {isAr ? 'معلم تربية خاصة — مسار اضطراب طيف التوحد' : 'SPECIAL EDUCATION TEACHER — AUTISM'}
                    </h3>
                    <span className="text-emerald-400/60 font-mono font-bold hidden md:inline text-lg">✕</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-400 font-heading tracking-tight">
                      {isAr ? 'المشرف التقني ومسؤول التحول الرقمي' : 'TECHNICAL SUPERVISOR'}
                    </h3>
                  </div>
                  <p className="text-sm font-mono text-white/70">
                    {exp.organization} — {exp.location}
                  </p>
                </div>

                {/* Visual Two-Column Separation: EDUCATION vs DIGITAL TRANSFORMATION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Column 1: Education */}
                  <div className="p-4 sm:p-5 bg-[#0A120D] border border-emerald-500/30">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-emerald-500/20">
                      <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {isAr ? '01 // مسار التربية الخاصة والتوحد' : '01 // EDUCATION FOCUS'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {(isAr ? ['اضطراب طيف التوحد', 'الخطط الفردية IEP', 'التقييم النمائي', 'تعديل السلوك', 'التطوير الشامل للطالب'] : ['Autism Spectrum', 'IEP Systems', 'Clinical Assessment', 'Behavior Intervention', 'Student Development']).map((s, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed font-light">
                      {isAr
                        ? 'تطبيق أحدث الاستراتيجيات التربوية المبنية على الأدلة لتطوير مهارات الطلاب التكليفية واللغوية وتحقيق أهداف الخطط التربوية الفردية.'
                        : 'Applying evidence-based special education frameworks, functional behavior modification, and personalized IEP milestone delivery.'}
                    </p>
                  </div>

                  {/* Column 2: Digital Transformation */}
                  <div className="p-4 sm:p-5 bg-[#081018] border border-blue-500/30">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-blue-500/20">
                      <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        {isAr ? '02 // مسار التحول الرقمي والأنظمة' : '02 // DIGITAL TRANSFORMATION'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {(isAr ? ['الأنظمة الرقمية', 'سير العمل التربوي', 'لوحات المؤشرات', 'تدريب الكادر التقني', 'أتمتة الذكاء الاصطناعي'] : ['Digital Systems', 'Educational Workflows', 'Telemetry Dashboards', 'Staff Tech Adoption', 'AI-assisted Workflows']).map((s, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[11px] font-mono bg-blue-500/15 text-blue-300 border border-blue-500/30">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed font-light">
                      {isAr
                        ? 'هندسة ونشر البنية الرقمية للمدرسة، أتمتة سجلات الطلاب، وبناء لوحات بيانات تدعم الإدارة والمعلمين في اتخاذ القرارات اللحظية.'
                        : 'Architecting and deploying school digital infrastructure, automated student IEP telemetry, and staff digital workflow adoption.'}
                    </p>
                  </div>
                </div>

                {/* Progressive Disclosure Toggle */}
                <button
                  type="button"
                  onClick={() => toggleExperience(exp.id)}
                  className="flex items-center gap-2 text-xs font-mono tracking-wider text-emerald-300 hover:text-white uppercase py-2 px-4 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 transition-all cursor-pointer"
                >
                  <span>
                    {isExpanded 
                      ? (edu.hideExperienceLabel || (lang === 'ar' ? 'إخفاء المسؤوليات التفصيلية' : 'HIDE DETAILED RESPONSIBILITIES'))
                      : (edu.viewExperienceLabel || (lang === 'ar' ? 'استعراض كافة المسؤوليات الميدانية والتقنية' : 'VIEW FIELD & TECHNICAL RESPONSIBILITIES'))
                    }
                  </span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {/* Expanded Detailed Responsibilities */}
                {isExpanded && (
                  <div className="mt-5 pt-5 border-t border-emerald-500/20 space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3">
                      {isAr ? 'المسؤوليات والإنجازات الميدانية والتقنية الموثقة:' : 'Detailed Field & Technical Scope:'}
                    </h4>
                    <ul className="space-y-2">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}

          {/* OTHER CHRONOLOGICAL EXPERIENCES */}
          {edu.experienceItems.filter(e => e.id !== 'alfurqan').map((exp) => {
            const isExpanded = !!expandedExperiences[exp.id];

            return (
              <div
                key={exp.id}
                id={`exp-${exp.id}`}
                className="p-6 sm:p-8 bg-[#080B09] border border-emerald-500/15 hover:border-emerald-500/35 transition-all"
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4 pb-4 border-b border-emerald-500/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.employmentType && (
                        <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                          {exp.employmentType}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-mono text-white/60">
                      <span className="text-white/85 font-medium">{exp.organization}</span>
                      <span className="text-white/30">•</span>
                      <span className="flex items-center gap-1 text-white/50">
                        <MapPin className="w-3 h-3 text-emerald-400/70" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:text-right shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400/60 hidden sm:inline-block" />
                    <div>
                      <span className="text-xs font-mono text-emerald-400/80 block font-semibold">
                        {exp.period}
                      </span>
                      {exp.duration && (
                        <span className="text-[11px] font-mono text-white/40 block">
                          ({exp.duration})
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Short Summary */}
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-4">
                  {exp.shortSummary}
                </p>

                {/* Skill Badges */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/25"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Progressive Disclosure Toggle */}
                <button
                  type="button"
                  onClick={() => toggleExperience(exp.id)}
                  className="flex items-center gap-2 text-xs font-mono tracking-wider text-emerald-300 hover:text-white uppercase py-2 px-3.5 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 transition-all cursor-pointer"
                >
                  <span>
                    {isExpanded 
                      ? (edu.hideExperienceLabel || (lang === 'ar' ? 'إخفاء التفاصيل' : 'HIDE DETAILS'))
                      : (edu.viewExperienceLabel || (lang === 'ar' ? 'استعراض تفاصيل الخبرة' : 'VIEW EXPERIENCE'))
                    }
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>

                {/* Expanded Detailed Responsibilities */}
                {isExpanded && (
                  <div className="mt-5 pt-5 border-t border-emerald-500/10 space-y-2.5">
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-emerald-400/80 mb-3">
                      {lang === 'ar' ? 'المسؤوليات والإنجازات السريرية والميدانية:' : 'Key Responsibilities & Clinical Scope:'}
                    </h4>
                    <ul className="space-y-2">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Core Expertise */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
            {edu.expertiseTitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {edu.expertiseList.map((skill, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-[#080B09] border border-emerald-500/15 hover:border-emerald-500/35 transition-colors flex items-center gap-2"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white/90 truncate">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Accredited Training & Licensing */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-4 h-4 text-emerald-400" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
            {edu.trainingTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {edu.trainingList.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-[#080B09] border border-emerald-500/15 hover:border-emerald-500/35 transition-colors flex flex-col justify-between"
            >
              <div className="flex items-start gap-2.5 mb-2">
                <span className="text-xs font-mono text-emerald-400/70 mt-0.5">0{idx + 1}</span>
                <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                  {item.title}
                </h4>
              </div>
              {item.issuer && (
                <p className="text-[11px] font-mono text-white/50 pl-5 rtl:pl-0 rtl:pr-5">
                  {item.issuer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. Education Projects */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
              {edu.projectsTitle}
            </h2>
          </div>
          <span className="text-xs font-mono text-emerald-400/60">
            {edu.projectsSubtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {educationProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer p-6 sm:p-7 bg-[#080B09] border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400/60 group-hover:text-emerald-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-emerald-400/80 mb-3">
                  {project.tagline}
                </p>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-emerald-500/15 text-xs font-mono text-emerald-400/80 group-hover:text-emerald-300 transition-colors">
                <span>{content.projects.viewCaseStudy || (lang === 'ar' ? 'استعراض دراسة الحالة' : 'Explore Case Study')}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Cross-Domain Connection */}
      <CrossDomainConnection
        lang={lang}
        connection={edu.connection}
      />

      {/* 10. Footer Contact */}
      <PathFooter
        lang={lang}
        content={content}
        onOpenCvModal={onOpenCvModal}
      />

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        content={content}
      />

    </div>
  );
};
