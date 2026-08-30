import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  GraduationCap, 
  Cpu, 
  MessageSquare 
} from 'lucide-react';

interface ExperienceProps {
  lang: Language;
  content: SiteContent;
}

export const Experience: React.FC<ExperienceProps> = ({ lang, content }) => {
  const getRoleIcon = (id: string) => {
    if (id.includes('teacher')) return GraduationCap;
    if (id.includes('supervisor')) return Cpu;
    if (id.includes('taqaddum')) return MessageSquare;
    if (id.includes('vodafone')) return TrendingUp;
    return Briefcase;
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#050505] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-bold">
            02 // {lang === 'ar' ? 'السجل العملي' : 'TRACK RECORD'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            {content.experience.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {content.experience.subtitle}
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.experience.items.map((item) => {
            const Icon = getRoleIcon(item.id);
            const isFeatured = item.isFeatured;

            return (
              <div
                key={item.id}
                id={`exp-card-${item.id}`}
                className={`p-7 sm:p-8 transition-all duration-200 flex flex-col justify-between ${
                  isFeatured 
                    ? 'bg-[#0e0e0e] border-2 border-neutral-600 shadow-2xl relative md:col-span-2' 
                    : 'bg-[#080808] border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="space-y-5">
                  
                  {/* Featured Badge if Supervisor */}
                  {isFeatured && (
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-neutral-800">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        <span>{item.roleBadge}</span>
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400">
                        {item.intersectionLabel}
                      </div>
                    </div>
                  )}

                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className={`p-1.5 border ${isFeatured ? 'bg-white text-black border-white' : 'bg-neutral-900 border-neutral-800 text-white'}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <h3 className={`text-base sm:text-lg font-light text-white ${isFeatured ? 'font-normal sm:text-xl' : ''}`}>
                          {item.role}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 pt-0.5">
                        <span className="font-mono text-neutral-300 font-semibold">{item.organization}</span>
                        <span className="text-neutral-700">•</span>
                        <span className="inline-flex items-center gap-1 text-neutral-400 font-mono text-[11px]">
                          <MapPin className="w-3 h-3 text-neutral-500" />
                          {item.location}
                        </span>
                        {item.period && (
                          <>
                            <span className="text-neutral-700">•</span>
                            <span className="font-mono text-neutral-400 text-[11px]">{item.period}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Highlight Note for Vodafone or Special Context */}
                  {item.highlightNote && (
                    <div className="p-3.5 bg-[#121212] border border-neutral-700 flex items-start gap-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                      <p className="text-xs text-neutral-300 font-light leading-relaxed">
                        {item.highlightNote}
                      </p>
                    </div>
                  )}

                  {/* What I Worked On (Action-oriented bullets) */}
                  <div className="space-y-2.5 pt-1">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                      {lang === 'ar' ? 'ما تم إنجازه والعمل عليه:' : 'What I Worked On & Delivered:'}
                    </div>
                    <ul className={`space-y-2 ${isFeatured ? 'grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 space-y-0' : ''}`}>
                      {item.whatIWorkedOn.map((action, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs text-neutral-300 font-light">
                          <span className="w-1.5 h-1.5 bg-neutral-500 shrink-0 mt-1.5" />
                          <span className="leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Capabilities Developed (Tags) */}
                  <div className="pt-2">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold mb-2">
                      {lang === 'ar' ? 'القدرات المكتسبة والمطبقة:' : 'Capabilities Developed:'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.capabilitiesDeveloped.map((cap, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
