import React from 'react';
import { Language, ProjectItem } from '../../../types';
import { SiteContent } from '../../../data/content';
import { FolderGit2, ArrowUpRight, Sparkles, Layers, ArrowRight, ArrowLeft } from 'lucide-react';

interface ProjectsDashboardViewProps {
  lang: Language;
  content: SiteContent;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const ProjectsDashboardView: React.FC<ProjectsDashboardViewProps> = ({
  lang,
  content,
  onOpenCaseStudy,
}) => {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. HEADER */}
      <section className="space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#14171B] border border-[#242A32] text-blue-400 text-xs font-mono font-semibold tracking-wider">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>CAREER / PROJECTS</span>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading uppercase">
            {isAr ? 'المشاريع والأنظمة' : 'PROJECTS'}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-blue-400 font-heading">
            {isAr ? 'منظومات العمل الرقمية ودراسات الحالة' : 'Educational Systems & Production Case Studies'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-3xl">
          {isAr
            ? 'نماذج من الأنظمة والمنصات الرقمية المطورة لحل التحديات التشغيلية والتربوية داخل المدارس ومراكز التربية الخاصة.'
            : 'Explore engineered systems and product concepts designed to streamline educational operations and improve clinical telemetry.'}
        </p>
      </section>

      {/* 2. PROJECT CARDS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {content.projects.items.map((project) => {
          const isFlagship = project.isFlagship;

          return (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 border ${
                isFlagship
                  ? 'bg-[#0E1624] border-2 border-blue-500/50 shadow-xl'
                  : 'bg-[#12161C] border-[#242A32] hover:border-blue-500/40'
              }`}
            >
              <div className="space-y-4">
                
                {/* Header tag */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#14171B] border border-[#242A32] text-[10px] font-mono uppercase font-bold tracking-widest text-blue-300">
                    <Layers className="w-3 h-3" />
                    <span>{project.category}</span>
                  </span>

                  {isFlagship && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-mono font-bold uppercase">
                      <Sparkles className="w-3 h-3" />
                      <span>{isAr ? 'المنصة الرئيسية' : 'FLAGSHIP'}</span>
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-mono">
                    {project.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Features Bullets */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold block">
                    {isAr ? 'أبرز الإمكانيات:' : 'Key Capabilities:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {project.caseStudy.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-white/70">
                        <span className="w-1.5 h-1.5 bg-blue-400 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#14171B] border border-[#242A32] text-[10px] font-mono text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#1E242C] flex items-center justify-between">
                <button
                  id={`btn-view-case-study-${project.id}`}
                  onClick={() => onOpenCaseStudy(project)}
                  className="w-full py-2.5 px-4 bg-[#181D24] hover:bg-[#202732] border border-blue-500/30 hover:border-blue-500/60 text-blue-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{isAr ? 'استعراض دراسة الحالة (Case Study)' : 'View Case Study'}</span>
                  <Arrow className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
};
