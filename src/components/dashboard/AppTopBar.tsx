import React from 'react';
import { Language, DashboardSection } from '../../types';
import { Menu, Globe, Linkedin, Download, FileText, ExternalLink } from 'lucide-react';

interface AppTopBarProps {
  lang: Language;
  activeSection: DashboardSection;
  onToggleMobileMenu: () => void;
  onToggleLang: () => void;
  onOpenCvModal: () => void;
}

export const AppTopBar: React.FC<AppTopBarProps> = ({
  lang,
  activeSection,
  onToggleMobileMenu,
  onToggleLang,
  onOpenCvModal,
}) => {
  const isAr = lang === 'ar';

  const sectionMeta: Record<DashboardSection, { tag: string; label: string; color: string }> = {
    education: {
      tag: '01',
      label: isAr ? 'التعليم والتربية الخاصة' : 'EDUCATION',
      color: 'text-emerald-400',
    },
    technology: {
      tag: '02',
      label: isAr ? 'التقنية والأنظمة' : 'TECHNOLOGY',
      color: 'text-blue-400',
    },
    ai: {
      tag: '03',
      label: isAr ? 'الذكاء الاصطناعي وسير العمل' : 'AI & WORKFLOWS',
      color: 'text-violet-400',
    },
    sales: {
      tag: '04',
      label: isAr ? 'المبيعات والتواصل' : 'SALES & COMMS',
      color: 'text-amber-400',
    },
    experience: {
      tag: 'CAREER',
      label: isAr ? 'الخبرات المهنية' : 'EXPERIENCE',
      color: 'text-white/80',
    },
    projects: {
      tag: 'CAREER',
      label: isAr ? 'المشاريع والأنظمة' : 'PROJECTS & CASE STUDIES',
      color: 'text-white/80',
    },
    training: {
      tag: 'PROFILE',
      label: isAr ? 'التدريب والإشراف' : 'TRAINING & FIELDWORK',
      color: 'text-white/80',
    },
    certificates: {
      tag: '05',
      label: isAr ? 'الشهادات والاعتمادات' : 'CERTIFICATES',
      color: 'text-emerald-400',
    },
    academic: {
      tag: 'PROFILE',
      label: isAr ? 'المؤهل الأكاديمي' : 'ACADEMIC DEGREE',
      color: 'text-white/80',
    },
  };

  const currentMeta = sectionMeta[activeSection] || sectionMeta.education;

  return (
    <header className="sticky top-0 z-20 bg-[#0D1014]/90 backdrop-blur-md border-b border-[#1E242C] px-4 sm:px-6 lg:px-8 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Side: Mobile Menu Button & Section Tag */}
        <div className="flex items-center gap-3">
          <button
            id="mobile-menu-btn"
            onClick={onToggleMobileMenu}
            className="md:hidden p-2 text-white/70 hover:text-white bg-[#14171B] border border-[#242A32] rounded transition-colors cursor-pointer"
            aria-label="Open sidebar menu"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Current Section Indicator */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#14171B] border border-[#242A32] text-white/60 tracking-wider">
              {currentMeta.tag}
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider text-white">
              / <span className={currentMeta.color}>{currentMeta.label}</span>
            </span>
          </div>
        </div>

        {/* Right Side: Quick Action Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Language Toggle */}
          <button
            id="topbar-lang-toggle"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-white/70 hover:text-white bg-[#14171B] hover:bg-[#1C2026] border border-[#242A32] transition-colors cursor-pointer"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-white/50" />
            <span className="font-semibold">{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>

          {/* LinkedIn Direct Link */}
          <a
            id="topbar-linkedin-link"
            href="https://www.linkedin.com/in/mahmodelbahi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-white/70 hover:text-white bg-[#14171B] hover:bg-[#1C2026] border border-[#242A32] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
          </a>

          {/* View CV Action (Desktop) */}
          <a
            id="topbar-view-cv-btn"
            href="/Mahmoud-Elbahi-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-white/80 hover:text-white bg-[#14171B] hover:bg-[#1C2026] border border-[#242A32] hover:border-white/40 transition-all group"
            title={isAr ? 'استعراض السيرة الذاتية في تبويب جديد' : 'View CV in new tab'}
          >
            <FileText className="w-3.5 h-3.5 text-white/50 group-hover:text-white" />
            <span>{isAr ? 'عرض CV ↗' : 'View CV ↗'}</span>
          </a>

          {/* Download CV Action */}
          <a
            id="topbar-download-cv-btn"
            href="/Mahmoud-Elbahi-CV.pdf"
            download="Mahmoud-Elbahi-CV.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 hover:border-emerald-500 text-emerald-300 hover:text-white transition-all cursor-pointer shadow-sm group"
          >
            <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            <span>{isAr ? 'تحميل CV' : 'Download CV'}</span>
          </a>

        </div>

      </div>
    </header>
  );
};
