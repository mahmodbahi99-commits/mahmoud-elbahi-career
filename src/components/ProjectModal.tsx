import React, { useEffect } from 'react';
import { Language, ProjectItem } from '../types';
import { SiteContent } from '../data/content';
import { X, CheckCircle2, Layers, Cpu, Wrench, Lightbulb, AlertCircle, BookOpen } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
  content: SiteContent;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  lang,
  content,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-case-study-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#080808] border border-neutral-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#0a0a0a] border-b border-neutral-800 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-[10px] font-mono uppercase font-bold tracking-widest">
              <Layers className="w-3 h-3 text-white" />
              <span>{project.category}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-white">
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-normal">
              {project.tagline}
            </p>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-neutral-900 text-sm text-neutral-300 leading-relaxed font-light">
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold mr-2">
              {content.caseStudyModal.technologies}:
            </span>
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="space-y-2 p-5 bg-[#0d0d0d] border border-neutral-800">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                <AlertCircle className="w-3.5 h-3.5 text-neutral-300" />
                <span>{content.caseStudyModal.problem}</span>
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm font-light">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="space-y-2 p-5 bg-[#0d0d0d] border border-neutral-800">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                <Lightbulb className="w-3.5 h-3.5 text-neutral-300" />
                <span>{content.caseStudyModal.solution}</span>
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm font-light">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Diagram if available */}
          {project.architectureDiagram && (
            <div className="space-y-2 pt-6">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                <Layers className="w-3.5 h-3.5 text-neutral-300" />
                <span>{content.caseStudyModal.architecture}</span>
              </div>
              <div className="p-4 bg-[#121212] border border-neutral-800 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-200">
                {project.architectureDiagram.map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 font-semibold text-white">
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

          {/* My Role */}
          <div className="space-y-2 pt-6">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
              <Wrench className="w-3.5 h-3.5 text-neutral-300" />
              <span>{content.caseStudyModal.role}</span>
            </div>
            <p className="text-neutral-300 font-light">
              {project.caseStudy.myRole}
            </p>
          </div>

          {/* How It Works */}
          <div className="space-y-2 pt-6">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5 text-neutral-300" />
              <span>{content.caseStudyModal.system}</span>
            </div>
            <p className="text-neutral-300 font-light">
              {project.caseStudy.howItWorks}
            </p>
          </div>

          {/* Value & Real-World Impact */}
          <div className="space-y-2 pt-6">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              <span>{content.caseStudyModal.value}</span>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm font-light">
              {project.caseStudy.value}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3 pt-6">
            <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
              {content.caseStudyModal.keyFeatures}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.caseStudy.keyFeatures.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="p-3.5 bg-neutral-900/60 border border-neutral-800 flex items-start gap-2.5 text-xs text-neutral-300 font-light"
                >
                  <span className="w-1.5 h-1.5 bg-neutral-500 shrink-0 mt-1.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="space-y-2 pt-6">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5 text-neutral-300" />
              <span>{content.caseStudyModal.whatILearned}</span>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm font-light">
              {project.caseStudy.whatILearned}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#0a0a0a] border-t border-neutral-800 flex items-center justify-between">
          <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
            {lang === 'ar' ? 'نموذج دراسة حالة منتج' : 'Product Case Study'}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            {content.caseStudyModal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
