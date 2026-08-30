import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { SiteContent } from '../data/content';
import { ProjectModal } from './ProjectModal';
import { 
  ArrowUpRight, 
  Layers, 
  Bus, 
  Globe, 
  Wrench, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface ProjectsProps {
  lang: Language;
  content: SiteContent;
}

export const Projects: React.FC<ProjectsProps> = ({ lang, content }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (id: string) => {
    if (id.includes('miyar')) return Layers;
    if (id.includes('leen')) return Bus;
    if (id.includes('website')) return Globe;
    return Wrench;
  };

  const getProjectCta = (id: string) => {
    if (id.includes('miyar')) return content.projects.viewCaseStudy;
    if (id.includes('leen')) return content.projects.exploreProject;
    if (id.includes('website')) return content.projects.viewConcept;
    return content.projects.viewWork;
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#050505] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-bold">
            03 // {lang === 'ar' ? 'المنتجات والمنصات' : 'SYSTEMS & PRODUCTS'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            {content.projects.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {content.projects.subtitle}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.projects.items.map((project) => {
            const Icon = getProjectIcon(project.id);
            const ctaText = getProjectCta(project.id);
            const isFlagship = project.isFlagship;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`group p-8 transition-all duration-200 flex flex-col justify-between ${
                  isFlagship
                    ? 'bg-[#0b0b0b] border-2 border-neutral-600 shadow-2xl relative'
                    : 'bg-[#080808] border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="space-y-6">
                  
                  {/* Flagship Case Study Badge */}
                  {isFlagship && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-widest mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{content.projects.flagshipLabel}</span>
                    </div>
                  )}

                  {/* Category Pill & Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono uppercase font-bold tracking-widest text-neutral-300">
                      <Icon className="w-3 h-3 text-white" />
                      <span>{project.category}</span>
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {project.technologies[0]}
                    </span>
                  </div>

                  {/* Name & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-light text-white">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Architecture Diagram Visualization if present */}
                  {project.architectureDiagram && (
                    <div className="p-3.5 bg-[#101010] border border-neutral-800 space-y-2">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                        {content.projects.architectureLabel}:
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-neutral-300">
                        {project.architectureDiagram.map((node, nIdx) => (
                          <React.Fragment key={nIdx}>
                            <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-750 text-white">
                              {node}
                            </span>
                            {nIdx < project.architectureDiagram!.length - 1 && (
                              <span className="text-neutral-500 font-bold">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Capabilities Preview (3-4 bullets from caseStudy.keyFeatures) */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                      {lang === 'ar' ? 'أبرز الإمكانيات والخصائص:' : 'Key Capabilities:'}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.caseStudy.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-neutral-400 font-light"
                        >
                          <span className="w-1.5 h-1.5 bg-neutral-500 shrink-0 mt-1.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between">
                  <button
                    id={`btn-view-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-neutral-300 transition-colors cursor-pointer"
                  >
                    <span>{ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 border border-neutral-800 bg-neutral-900 hover:border-neutral-600 text-[10px] uppercase font-bold tracking-wider text-neutral-300 hover:text-white transition-all cursor-pointer"
                  >
                    {lang === 'ar' ? 'التفاصيل الكاملة' : 'Full Details'}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        content={content}
      />
    </section>
  );
};
