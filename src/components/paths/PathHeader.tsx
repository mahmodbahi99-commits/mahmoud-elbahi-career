import React from 'react';
import { Language, ActiveView } from '../../types';
import { SiteContent } from '../../data/content';
import { CvDownloadButton } from '../CvDownloadButton';
import { ArrowLeft, ArrowRight, Globe, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

interface PathHeaderProps {
  lang: Language;
  currentPath: ActiveView;
  content: SiteContent;
  onSelectPath: (path: ActiveView) => void;
  onToggleLang: () => void;
  onOpenCvModal: () => void;
}

export const PathHeader: React.FC<PathHeaderProps> = ({
  lang,
  currentPath,
  content,
  onSelectPath,
  onToggleLang,
  onOpenCvModal,
}) => {
  const isRtl = lang === 'ar';
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  const pathItems: { 
    id: ActiveView; 
    label: string; 
    number: string;
    activeClass: string;
    dotColor: string;
  }[] = [
    { 
      id: 'education', 
      label: lang === 'ar' ? 'التعليم' : 'Education', 
      number: '01',
      activeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-semibold',
      dotColor: 'bg-emerald-400'
    },
    { 
      id: 'technology', 
      label: lang === 'ar' ? 'التقنية' : 'Technology', 
      number: '02',
      activeClass: 'bg-blue-500/20 text-blue-300 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)] font-semibold',
      dotColor: 'bg-blue-400'
    },
    { 
      id: 'ai', 
      label: lang === 'ar' ? 'الذكاء الاصطناعي' : 'AI', 
      number: '03',
      activeClass: 'bg-violet-500/20 text-violet-300 border-violet-500/50 shadow-[0_0_15px_rgba(139,92,246,0.15)] font-semibold',
      dotColor: 'bg-violet-400'
    },
    { 
      id: 'sales', 
      label: lang === 'ar' ? 'المبيعات' : 'Sales', 
      number: '04',
      activeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)] font-semibold',
      dotColor: 'bg-amber-400'
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#08090B]/95 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-6 md:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Navigation Actions (BACK & HOME) */}
        <div className="flex items-center gap-2">
          <button
            id="path-back-btn"
            onClick={() => onSelectPath('hub')}
            className="group flex items-center gap-1.5 text-xs font-mono font-medium tracking-wider text-white hover:text-white bg-[#14171B] hover:bg-[#1C2026] border border-white/20 hover:border-white/40 px-3 py-1.5 transition-all cursor-pointer"
          >
            <BackArrow className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5 text-white/70 group-hover:text-white" />
            <span>{lang === 'ar' ? 'رجوع' : 'BACK'}</span>
          </button>

          <button
            id="path-home-btn"
            onClick={() => onSelectPath('hub')}
            className="text-xs font-mono font-medium tracking-wider text-white/70 hover:text-white bg-[#0D0F12] hover:bg-[#14171B] border border-white/10 hover:border-white/30 px-3 py-1.5 transition-all cursor-pointer"
          >
            <span>{lang === 'ar' ? 'الرئيسية' : 'HOME'}</span>
          </button>
        </div>

        {/* Center: Quick Path Selector (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-white/[0.02] border border-white/[0.08] p-1">
          {pathItems.map((item) => {
            const isActive = currentPath === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectPath(item.id)}
                className={`px-3 py-1 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer border ${
                  isActive
                    ? item.activeClass
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04] border-transparent'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} ${isActive ? 'opacity-100' : 'opacity-30'}`} />
                <span className="opacity-60">{item.number}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: WhatsApp, CV, and Language */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/966570600671"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-emerald-400 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
          </a>

          <CvDownloadButton
            id="path-header-cv-btn"
            lang={lang}
            variant="nav"
            onMissingFileFallback={onOpenCvModal}
          />

          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-white/80 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-white/50" />
            <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
          </button>
        </div>

      </div>

      {/* Mobile Path Switcher Row */}
      <div className="flex lg:hidden items-center gap-1.5 mt-2.5 pt-2.5 border-t border-white/[0.06] overflow-x-auto pb-1 scrollbar-none">
        {pathItems.map((item) => {
          const isActive = currentPath === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectPath(item.id)}
              className={`px-2.5 py-1 text-[11px] font-mono whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer border ${
                isActive
                  ? item.activeClass
                  : 'text-white/50 hover:text-white bg-white/[0.02] border-white/[0.06]'
              }`}
            >
              <span className={`w-1 h-1 rounded-full ${item.dotColor}`} />
              <span className="opacity-60">{item.number}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
