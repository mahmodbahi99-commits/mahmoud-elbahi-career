import React, { useState } from 'react';
import { Language, ProjectItem } from '../../types';
import { SiteContent } from '../../data/content';
import { CrossDomainConnection } from './CrossDomainConnection';
import { PathFooter } from './PathFooter';
import { ProjectModal } from '../ProjectModal';
import { CvDownloadButton } from '../CvDownloadButton';
import { TechnologySystemVisual } from '../visuals/TechnologySystemVisual';
import { Miyar360InteractivePreview } from '../visuals/Miyar360InteractivePreview';
import { DigitalTransformationComparison } from '../visuals/DigitalTransformationComparison';
import { Terminal, Layers, Code, Database, Wrench, ArrowUpRight, Cpu, GitBranch, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface TechnologyPathViewProps {
  lang: Language;
  content: SiteContent;
  onOpenCvModal: () => void;
}

export const TechnologyPathView: React.FC<TechnologyPathViewProps> = ({
  lang,
  content,
  onOpenCvModal,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const tech = content.technologyPath;
  const techProjects = content.projects.items;

  // Find Miyar 360 project item for modal opening
  const miyarProject = content.projects.items.find((p) => p.id === 'miyar360') || content.projects.items[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-14">
      
      {/* 1. Path Hero Header with Electric Blue Accent */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 pb-8 border-b border-blue-500/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-xs font-mono tracking-widest text-blue-400 font-semibold uppercase">
              {tech.badge}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            {tech.title}
          </h1>
          <p className="text-base sm:text-lg font-mono text-blue-400/90 tracking-wide font-medium">
            {tech.subtitle}
          </p>
        </div>

        {/* Utility Action: Download CV */}
        <div className="shrink-0">
          <CvDownloadButton
            id="tech-path-download-cv-btn"
            lang={lang}
            variant="utility"
            onMissingFileFallback={onOpenCvModal}
          />
        </div>
      </motion.div>

      {/* 2. Interactive Technology Visual: School -> Student Data -> Digital System -> Dashboard -> Reports */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <TechnologySystemVisual lang={lang} />
      </motion.section>

      {/* 3. Miyar 360 Interactive UI Prototype Mockup */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mb-14"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
              {lang === 'ar' ? 'معاينة الواجهة التفاعلية للمنظومة' : 'INTERACTIVE SYSTEM UI PREVIEW'}
            </h2>
          </div>
          <span className="text-xs font-mono text-blue-400/70">
            {lang === 'ar' ? 'بيئة إدارة التربية الخاصة' : 'EdTech Workspace Demo'}
          </span>
        </div>

        <Miyar360InteractivePreview
          lang={lang}
          onOpenCaseStudy={() => setSelectedProject(miyarProject)}
        />
      </motion.section>

      {/* 4. Digital Transformation Case Study: Before / After Concept */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-14"
      >
        <DigitalTransformationComparison lang={lang} />
      </motion.section>

      {/* 5. What I Build */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-blue-400" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
            {tech.whatIBuildTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {tech.whatIBuildItems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#070A12] border border-blue-500/15 hover:border-blue-500/35 transition-colors flex items-start gap-3"
            >
              <span className="text-xs font-mono text-blue-400/70 mt-0.5">0{idx + 1}</span>
              <span className="text-xs sm:text-sm font-medium text-white/90 leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Technology Projects */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
              {tech.projectsTitle}
            </h2>
          </div>
          <span className="text-xs font-mono text-blue-400/60">
            {tech.projectsSubtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer p-6 bg-[#070A12] border border-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400/60 group-hover:text-blue-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-blue-400/80 mb-3">
                  {project.tagline}
                </p>
                <p className="text-xs text-white/60 font-light leading-relaxed mb-4 line-clamp-3">
                  {project.summary}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 3).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-1.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-white/40">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-blue-500/15 text-xs font-mono text-blue-400/80 group-hover:text-blue-300 transition-colors">
                <span>{content.projects.viewCaseStudy || (lang === 'ar' ? 'استعراض دراسة الحالة' : 'Explore Case Study')}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Technology Stack */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Code className="w-4 h-4 text-blue-400" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
            {tech.stackTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tech.stackCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#070A12] border border-blue-500/15 hover:border-blue-500/35 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-500/10">
                {idx === 0 && <Code className="w-3.5 h-3.5 text-blue-400" />}
                {idx === 1 && <Database className="w-3.5 h-3.5 text-blue-400" />}
                {idx === 2 && <Wrench className="w-3.5 h-3.5 text-blue-400" />}
                <h3 className="text-xs font-mono font-bold tracking-wider text-white">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="px-2.5 py-1 text-xs font-mono text-white/90 bg-white/[0.04] border border-blue-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Technical Role & Positioning */}
      <section className="mb-16">
        <div className="p-6 sm:p-8 bg-[#070A14] border border-blue-500/25">
          <div className="flex items-center gap-2 mb-4">
            <GitBranch className="w-4 h-4 text-blue-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
              {tech.technicalRole.title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 font-mono text-xs sm:text-sm font-semibold text-white">
            {tech.technicalRole.pillars.map((pillar, pIdx) => (
              <React.Fragment key={pIdx}>
                <span className="px-3 py-1.5 bg-blue-500/15 border border-blue-500/30 text-blue-300">
                  {pillar}
                </span>
                {pIdx < tech.technicalRole.pillars.length - 1 && (
                  <span className="text-blue-400/40 font-mono">+</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-3xl">
            {tech.technicalRole.description}
          </p>
        </div>
      </section>

      {/* 9. Cross-Domain Connection */}
      <CrossDomainConnection
        lang={lang}
        connection={tech.connection}
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
