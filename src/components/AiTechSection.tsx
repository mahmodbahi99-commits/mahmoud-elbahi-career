import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { Brain, Cpu, Wrench, Sparkles, CheckCircle2, Bot, Workflow, Code2 } from 'lucide-react';

interface AiTechSectionProps {
  lang: Language;
  content: SiteContent;
}

export const AiTechSection: React.FC<AiTechSectionProps> = ({
  lang,
  content,
}) => {
  const categoryIcons = [Code2, Cpu, Brain];
  const tierIcons = [Bot, Workflow, Code2];

  return (
    <section id="tech" className="py-20 md:py-28 relative bg-[#050505] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-bold font-mono">
            05 // {lang === 'ar' ? 'الترسانة التقنية والذكاء الاصطناعي' : 'APPLIED TECH & AI'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            {content.aiTech.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {content.aiTech.subtitle}
          </p>
        </div>

        {/* AI Credibility Tiers (Differentiating AI User vs Designer vs Builder) */}
        <div className="space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
            {content.aiTech.aiTiersTitle}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.aiTech.aiTiers.map((tier, tIdx) => {
              const Icon = tierIcons[tIdx % tierIcons.length];
              return (
                <div
                  key={tIdx}
                  id={`ai-tier-${tIdx}`}
                  className="p-6 bg-[#080808] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-wider">
                        {tier.tier}
                      </span>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      {tier.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Structured Skill Clusters with Project Evidence Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content.aiTech.categories.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];

            return (
              <div
                key={idx}
                id={`tech-cluster-${idx}`}
                className="p-8 bg-[#080808] border border-neutral-800 hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 bg-neutral-900 border border-neutral-800 text-white shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid with Project Evidence */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                      {lang === 'ar' ? 'القدرات ومشاريع الإثبات:' : 'Competencies & Project Evidence:'}
                    </div>
                    <div className="space-y-2">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-2.5 bg-neutral-900/90 border border-neutral-800 flex items-center justify-between gap-2"
                        >
                          <span className="text-xs font-mono text-neutral-200">
                            {skill.name}
                          </span>
                          {skill.projectEvidence && (
                            <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-black text-neutral-400 border border-neutral-800 shrink-0">
                              {skill.projectEvidence}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Context Evidence Tag */}
                <div className="pt-6 mt-6 border-t border-neutral-900 text-[10px] font-mono uppercase tracking-wider text-neutral-400 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-white shrink-0" />
                    <span>{lang === 'ar' ? 'مطبقة في:' : 'Applied In:'}</span>
                  </div>
                  <span className="text-neutral-300 font-semibold">{category.evidenceProject}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

