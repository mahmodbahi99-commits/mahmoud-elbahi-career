import React, { useState } from 'react';
import { Language, ProjectItem } from '../../types';
import { SiteContent } from '../../data/content';
import { CrossDomainConnection } from './CrossDomainConnection';
import { PathFooter } from './PathFooter';
import { ProjectModal } from '../ProjectModal';
import { CvDownloadButton } from '../CvDownloadButton';
import { AiWorkflowVisual } from '../visuals/AiWorkflowVisual';
import { Sparkles, Bot, Wrench, Cpu, Info, ArrowUpRight, Workflow } from 'lucide-react';
import { motion } from 'motion/react';

interface AiPathViewProps {
  lang: Language;
  content: SiteContent;
  onOpenCvModal: () => void;
}

export const AiPathView: React.FC<AiPathViewProps> = ({
  lang,
  content,
  onOpenCvModal,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const aiData = content.aiPath;

  const aiGeneratorProject = content.projects.items.find(
    (p) => p.id === 'ai-website-builder' || p.category.toLowerCase().includes('ai')
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-14">
      
      {/* 1. Path Hero Header with Violet Accent */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 pb-8 border-b border-violet-500/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
            <span className="text-xs font-mono tracking-widest text-violet-400 font-semibold uppercase">
              {aiData.badge}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            {aiData.title}
          </h1>
          <p className="text-base sm:text-lg font-mono text-violet-400/90 tracking-wide font-medium">
            {aiData.subtitle}
          </p>
        </div>

        {/* Utility Action: Download CV */}
        <div className="shrink-0">
          <CvDownloadButton
            id="ai-path-download-cv-btn"
            lang={lang}
            variant="utility"
            onMissingFileFallback={onOpenCvModal}
          />
        </div>
      </motion.div>

      {/* 2. Interactive AI Visual: Problem -> Context & AI Models -> Automation -> Practical Solution */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <AiWorkflowVisual lang={lang} />
      </motion.section>

      {/* 3. How I Use AI (4 Core Pillars) */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-violet-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
              {aiData.howIUseAiTitle}
            </h2>
          </div>
          <span className="text-xs font-mono text-violet-400/60">
            {aiData.howIUseAiSubtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aiData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-[#0C0916] border border-violet-500/15 hover:border-violet-500/35 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-violet-400/70">0{idx + 1} // FOCUS</span>
                  <Sparkles className="w-4 h-4 text-violet-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AI Projects & Workflows */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <Workflow className="w-4 h-4 text-violet-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
              {aiData.aiProjectsTitle}
            </h2>
          </div>
          <span className="text-xs font-mono text-violet-400/60">
            {aiData.aiProjectsSubtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {aiData.aiProjects.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0C0916] border border-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-violet-500/10 text-violet-300 border border-violet-500/25">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-violet-400/50">0{idx + 1}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Data Flow */}
                <div className="p-2.5 bg-violet-950/30 border border-violet-500/20 mb-3">
                  <span className="text-[11px] font-mono text-violet-300 leading-tight block">
                    {item.flow}
                  </span>
                </div>

                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {idx === 0 && aiGeneratorProject && (
                <button
                  onClick={() => setSelectedProject(aiGeneratorProject)}
                  className="mt-6 flex items-center justify-between pt-3 border-t border-violet-500/15 text-xs font-mono text-violet-400 hover:text-white transition-colors cursor-pointer"
                >
                  <span>{content.projects.viewCaseStudy || (lang === 'ar' ? 'استعراض دراسة الحالة' : 'Explore Case Study')}</span>
                  <span>→</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. AI Toolkit & Practical Positioning Note */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Toolkit */}
          <div className="p-6 sm:p-7 bg-[#0C0916] border border-violet-500/20">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-violet-500/15">
              <Wrench className="w-3.5 h-3.5 text-violet-400" />
              <h3 className="text-xs font-mono font-bold tracking-wider text-white">
                {aiData.toolkitTitle}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {aiData.toolkitItems.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-mono text-violet-200 bg-violet-500/10 border border-violet-500/25"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Positioning Note */}
          <div className="p-6 sm:p-7 bg-[#0C0916] border border-violet-500/20 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-4 h-4 text-violet-400" />
              <h3 className="text-xs font-mono font-bold tracking-wider text-violet-400 uppercase">
                {lang === 'ar' ? 'ملاحظة التموضع المهني' : 'PRACTICAL AI POSITIONING'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              {aiData.positioningNote}
            </p>
            <div className="mt-4 pt-3 border-t border-violet-500/15 text-[11px] font-mono text-violet-400/80">
              {lang === 'ar' ? 'تطبيق واقعي × كفاءة تشغيلية' : 'Applied implementation × Operational velocity'}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Cross-Domain Connection */}
      <CrossDomainConnection
        lang={lang}
        connection={aiData.connection}
      />

      {/* 7. Footer Contact */}
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
