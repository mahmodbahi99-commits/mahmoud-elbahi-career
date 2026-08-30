import React, { useEffect } from 'react';
import { Language, ProjectItem } from '../../types';
import { 
  X, 
  Layers, 
  Cpu, 
  Wrench, 
  Lightbulb, 
  AlertCircle, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CaseStudyDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
}

export const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({
  project,
  onClose,
  lang,
}) => {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Slide-out Drawer Panel */}
        <motion.div
          initial={{ x: isAr ? '-100%' : '100%' }}
          animate={{ x: 0 }}
          exit={{ x: isAr ? '-100%' : '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative w-full max-w-2xl h-full bg-[#0D1014] border-l rtl:border-l-0 rtl:border-r border-[#242A32] shadow-2xl flex flex-col justify-between overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-6 bg-[#08090B] border-b border-[#1E242C] flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#14171B] border border-[#242A32] text-blue-400 text-[10px] font-mono uppercase font-bold tracking-widest">
                <Layers className="w-3 h-3" />
                <span>{project.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-mono">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-[#242A32] bg-[#14171B] hover:bg-[#1E242C] text-white/60 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Close drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-white/80 leading-relaxed font-light">
            
            {/* Quick Context Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#12161C] border border-[#242A32] text-xs font-mono">
              <div>
                <span className="text-white/40 block text-[10px] uppercase">{isAr ? 'السياق والمؤسسة' : 'CONTEXT'}</span>
                <span className="text-white font-medium">{project.id.includes('miyar') ? (isAr ? 'منصة مستقلة' : 'Proprietary Concept') : (isAr ? 'مدارس الفرقان الأهلية' : 'Al-Furqan Private Schools')}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase">{isAr ? 'الدور والمسؤولية' : 'ROLE'}</span>
                <span className="text-blue-400 font-medium">{isAr ? 'المشرف التقني والمصمم' : 'Technical Supervisor'}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-white/40 block text-[10px] uppercase">{isAr ? 'النوع' : 'TYPE'}</span>
                <span className="text-emerald-400 font-medium">{isAr ? 'نظام مدرسي وإنتاجي' : 'Production & Workflow'}</span>
              </div>
            </div>

            {/* Architecture Visual Flow */}
            {project.architectureDiagram && (
              <div className="p-4 bg-[#08090B] border border-blue-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Cpu className="w-3 h-3" />
                    {isAr ? 'مخطط تدفق النظام والبيانات' : 'SYSTEM ARCHITECTURE & WORKFLOW'}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  {project.architectureDiagram.map((node, nIdx) => (
                    <React.Fragment key={nIdx}>
                      <span className="px-2.5 py-1 bg-[#14171B] border border-blue-500/30 text-white font-semibold shadow-sm">
                        {node}
                      </span>
                      {nIdx < project.architectureDiagram!.length - 1 && (
                        <Arrow className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#12161C] border border-[#242A32] space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{isAr ? 'التحدي والمشكلة' : 'PROBLEM & CHALLENGE'}</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className="p-4 bg-[#12161C] border border-[#242A32] space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{isAr ? 'الحل الهندسي والتربوي' : 'ENGINEERED SOLUTION'}</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Core Modules & Components */}
            <div className="space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                {isAr ? 'مكونات النظام والخصائص الأساسية' : 'CORE SYSTEM COMPONENTS & FEATURES'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.caseStudy.keyFeatures.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3 bg-[#14171B] border border-[#242A32] flex items-start gap-2.5 text-xs text-white/85"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Role & Value */}
            <div className="p-4 bg-[#12161C] border border-[#242A32] space-y-3">
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                  {isAr ? 'الدور التنفيذي' : 'EXECUTION & ROLE'}
                </span>
                <p className="text-xs text-white/85 leading-relaxed font-light">
                  {project.caseStudy.myRole}
                </p>
              </div>
              <div className="pt-2 border-t border-[#1E242C]">
                <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">
                  {isAr ? 'القيمة والأثر الحقيقي' : 'REAL-WORLD IMPACT & VALUE'}
                </span>
                <p className="text-xs text-white/85 leading-relaxed font-light">
                  {project.caseStudy.value}
                </p>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                {isAr ? 'التقنيات المستخدمة' : 'TECHNOLOGY STACK'}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-[#14171B] border border-[#242A32] text-[11px] font-mono text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 bg-[#08090B] border-t border-[#1E242C] flex items-center justify-between">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              {isAr ? 'دراسة حالة وتصميم نظام' : 'SYSTEM DESIGN & CASE STUDY'}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-colors cursor-pointer"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
