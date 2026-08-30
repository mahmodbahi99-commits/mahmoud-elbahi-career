import React, { useEffect } from 'react';
import { Language, EducationExperienceItem } from '../../types';
import { X, Calendar, MapPin, CheckCircle2, Briefcase, ChevronRight, ChevronLeft, Cpu, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExperienceDetailDrawerProps {
  experience: EducationExperienceItem | null;
  onClose: () => void;
  lang: Language;
}

export const ExperienceDetailDrawer: React.FC<ExperienceDetailDrawerProps> = ({
  experience,
  onClose,
  lang,
}) => {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ChevronLeft : ChevronRight;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (experience) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [experience, onClose]);

  if (!experience) return null;

  const isTechSupervisor = experience.id === 'al-furqan-supervisor' || experience.role.toLowerCase().includes('technical supervisor') || experience.role.includes('مشرف تقني');

  const accentColor = isTechSupervisor ? 'text-blue-400' : 'text-emerald-400';
  const accentBg = isTechSupervisor ? 'bg-blue-500/20 text-blue-300 border-blue-500/40' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
  const dotColor = isTechSupervisor ? 'bg-blue-400' : 'bg-emerald-400';
  const tagBg = isTechSupervisor ? 'bg-[#121A26] border-blue-500/30 text-blue-200' : 'bg-[#14171B] border-[#242A32] text-emerald-300';
  const headerGradient = isTechSupervisor 
    ? 'bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400'
    : 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600';

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
          className="relative w-full max-w-xl h-full bg-[#0D1014] border-l rtl:border-l-0 rtl:border-r border-[#242A32] shadow-2xl flex flex-col justify-between overflow-hidden z-10"
        >
          {/* Top colored strip */}
          <div className={`absolute top-0 inset-x-0 h-1 ${headerGradient}`} />

          {/* Drawer Header */}
          <div className="p-6 pt-7 bg-[#08090B] border-b border-[#1E242C] flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 border text-[10px] font-mono uppercase font-bold tracking-widest ${accentBg}`}>
                  {isTechSupervisor ? <Cpu className="w-3 h-3" /> : <GraduationCap className="w-3 h-3" />}
                  <span>{experience.period}</span>
                </span>
                {isTechSupervisor && (
                  <span className="px-2 py-0.5 bg-[#141C28] border border-blue-500/30 text-blue-300 text-[10px] font-mono font-bold">
                    02 // TECHNOLOGY
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                {experience.role}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-white/70">
                {experience.organization}
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

          {/* Drawer Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-white/80 leading-relaxed font-light">
            
            {/* Meta details */}
            <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#12161C] border border-[#242A32] text-xs font-mono">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-3.5 h-3.5 text-white/50" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="w-3.5 h-3.5 text-white/50" />
                <span>{experience.period}</span>
              </div>
            </div>

            {/* Overview / Short Summary */}
            {experience.shortSummary && (
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                  {isAr ? 'نطاق ونبذة الدور المهني' : 'Role Scope & Professional Positioning'}
                </div>
                <blockquote className={`p-4 bg-[#12161C] border-l-2 rtl:border-l-0 rtl:border-r-2 ${isTechSupervisor ? 'border-blue-400' : 'border-emerald-400'} text-white/90 text-xs sm:text-sm leading-relaxed`}>
                  {experience.shortSummary}
                </blockquote>
              </div>
            )}

            {/* Core Responsibilities & Impact Points */}
            <div className="space-y-3">
              <div className={`text-[10px] font-mono uppercase tracking-widest font-bold flex items-center gap-1.5 ${accentColor}`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isAr ? 'المسؤوليات والإنجازات الميدانية الموثقة' : 'Key Field Responsibilities & Outcomes'}</span>
              </div>
              <div className="space-y-2.5">
                {experience.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#12161C] border border-[#242A32] flex items-start gap-3 text-xs sm:text-sm text-white/85"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-2 shrink-0`} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Methods Developed */}
            {experience.skills && experience.skills.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                  {isAr ? 'المهارات والأدوات المطبقة' : 'Applied Skills & Frameworks'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {experience.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2.5 py-1 border text-[11px] font-mono ${tagBg}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Drawer Footer */}
          <div className="p-4 bg-[#08090B] border-t border-[#1E242C] flex items-center justify-between">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              {isAr ? 'سجل الخبرات المهنية' : 'Career Experience Record'}
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
