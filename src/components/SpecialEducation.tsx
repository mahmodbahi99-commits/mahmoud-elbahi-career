import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  HeartHandshake, 
  BookOpen 
} from 'lucide-react';

interface SpecialEducationProps {
  lang: Language;
  content: SiteContent;
}

export const SpecialEducation: React.FC<SpecialEducationProps> = ({
  lang,
  content,
}) => {
  return (
    <section id="expertise" className="py-20 md:py-28 relative bg-[#050505] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-bold">
            04 // {lang === 'ar' ? 'التخصص الإكلينيكي والتربوي' : 'CLINICAL & SEN EXPERTISE'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            {content.specialEducation.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {content.specialEducation.subtitle}
          </p>
        </div>

        {/* Expertise Grid & Academic Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Clinical & SEN Competencies Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-7 sm:p-8 bg-[#080808] border border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-6">
                <HeartHandshake className="w-4 h-4 text-white" />
                <span>{lang === 'ar' ? 'المجالات والمناهج التخصصية' : 'Specialized Clinical & Educational Domains'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.specialEducation.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    id={`sen-skill-${sIdx}`}
                    className="p-3.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-neutral-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-light text-neutral-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Professional Development Certifications */}
            <div className="p-7 sm:p-8 bg-[#080808] border border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-5">
                <Award className="w-4 h-4 text-white" />
                <span>{content.specialEducation.developmentTitle}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {content.specialEducation.education.professionalDevelopment.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 bg-neutral-900 border border-neutral-800 flex items-start gap-2.5 text-xs text-neutral-300 font-light"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Foundation & Licensing Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 sm:p-8 bg-[#0C0C0C] border border-neutral-800 space-y-6">
              <div className="flex items-center gap-2.5 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                <GraduationCap className="w-3.5 h-3.5 text-white" />
                <span>{content.specialEducation.educationTitle}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-light text-white leading-tight">
                  {content.specialEducation.education.degree.title}
                </h3>
                
                <div className="inline-block px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-[10px] font-mono uppercase font-bold tracking-widest text-neutral-300">
                  {content.specialEducation.education.degree.specialization}
                </div>

                <p className="text-xs font-mono text-neutral-400">
                  {content.specialEducation.education.degree.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-3 text-xs text-neutral-400 font-light">
                <div className="flex items-center gap-2 text-neutral-200 font-bold uppercase tracking-wider text-[10px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'ar' ? 'الاعتماد والرخصة المهنية' : 'Verified Professional Status'}</span>
                </div>
                <p className="leading-relaxed">
                  {lang === 'ar' 
                    ? 'حاصل على الرخصة المهنية التعليمية من هيئة تقويم التعليم والتدريب بالمملكة العربية السعودية.'
                    : 'Holds the verified Saudi Professional Educational License for Special Education practitioners.'}
                </p>
              </div>
            </div>

            {/* Practitioner Note Box */}
            <div className="p-6 bg-[#080808] border border-neutral-800 text-xs text-neutral-400 font-light space-y-2">
              <div className="flex items-center gap-2 text-neutral-200 font-bold uppercase tracking-wider text-[10px]">
                <BookOpen className="w-3.5 h-3.5 text-white" />
                <span>{lang === 'ar' ? 'المنظور التطبيقي' : 'Applied Perspective'}</span>
              </div>
              <p className="leading-relaxed">
                {lang === 'ar'
                  ? 'يجمع بين العمل الميداني المباشر مع الطلاب والتخطيط المؤسسي للمدارس، مما يمنحه فهماً واقعياً لاحتياجات البيئة الصفية.'
                  : 'Synthesizes direct student intervention with institutional educational planning, ensuring all digital tools are grounded in real classroom dynamics.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
