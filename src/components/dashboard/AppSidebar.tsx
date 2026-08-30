import React from 'react';
import { Language, DashboardSection } from '../../types';
import { 
  GraduationCap, 
  Cpu, 
  Sparkles, 
  TrendingUp, 
  Briefcase, 
  FolderGit2, 
  Award, 
  FileBadge,
  BookOpen, 
  Download, 
  FileText,
  ExternalLink,
  Linkedin, 
  MessageSquare, 
  Globe, 
  X,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AppSidebarProps {
  lang: Language;
  activeSection: DashboardSection;
  onSelectSection: (section: DashboardSection) => void;
  onToggleLang: () => void;
  onOpenContact: () => void;
  onOpenCvModal: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  lang,
  activeSection,
  onSelectSection,
  onToggleLang,
  onOpenContact,
  onOpenCvModal,
  isMobileOpen,
  onCloseMobile,
}) => {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;

  const primaryPaths: { id: DashboardSection; label: string; enLabel: string; icon: React.FC<{ className?: string }>; color: string; dotColor: string; activeBg: string; activeBorder: string }[] = [
    {
      id: 'education',
      label: isAr ? 'التعليم والتربية الخاصة' : 'Education',
      enLabel: '01 // EDUCATION',
      icon: GraduationCap,
      color: 'text-emerald-400',
      dotColor: 'bg-emerald-400',
      activeBg: 'bg-emerald-500/10 text-emerald-300',
      activeBorder: 'border-emerald-500/40',
    },
    {
      id: 'technology',
      label: isAr ? 'التقنية والأنظمة' : 'Technology',
      enLabel: '02 // TECHNOLOGY',
      icon: Cpu,
      color: 'text-blue-400',
      dotColor: 'bg-blue-400',
      activeBg: 'bg-blue-500/10 text-blue-300',
      activeBorder: 'border-blue-500/40',
    },
    {
      id: 'ai',
      label: isAr ? 'الذكاء الاصطناعي' : 'AI',
      enLabel: '03 // AI',
      icon: Sparkles,
      color: 'text-violet-400',
      dotColor: 'bg-violet-400',
      activeBg: 'bg-violet-500/10 text-violet-300',
      activeBorder: 'border-violet-500/40',
    },
    {
      id: 'sales',
      label: isAr ? 'المبيعات والتواصل' : 'Sales',
      enLabel: '04 // SALES',
      icon: TrendingUp,
      color: 'text-amber-400',
      dotColor: 'bg-amber-400',
      activeBg: 'bg-amber-500/10 text-amber-300',
      activeBorder: 'border-amber-500/40',
    },
  ];

  const careerSections: { id: DashboardSection; label: string; icon: React.FC<{ className?: string }> }[] = [
    {
      id: 'experience',
      label: isAr ? 'الخبرات المهنية' : 'Experience',
      icon: Briefcase,
    },
    {
      id: 'projects',
      label: isAr ? 'المشاريع والأنظمة' : 'Projects',
      icon: FolderGit2,
    },
    {
      id: 'training',
      label: isAr ? 'التدريب والإشراف' : 'Training',
      icon: Award,
    },
    {
      id: 'certificates',
      label: isAr ? 'الشهادات والاعتمادات' : 'Certificates',
      icon: FileBadge,
    },
    {
      id: 'academic',
      label: isAr ? 'المؤهل الأكاديمي' : 'Education',
      icon: BookOpen,
    },
  ];

  const handleNavClick = (section: DashboardSection) => {
    onSelectSection(section);
    onCloseMobile();
  };

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full bg-[#08090B] border-r border-[#1E242C] rtl:border-r-0 rtl:border-l text-white select-none">
      
      {/* Top Part: Brand & Navigation */}
      <div className="p-4 sm:p-5 overflow-y-auto">
        
        {/* Brand Header */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#1E242C]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#14171B] border border-[#242A32] flex items-center justify-center font-heading font-bold text-base text-emerald-400 shadow-sm">
              M
            </div>
            <div>
              <h1 className="font-heading font-bold text-sm text-white tracking-tight uppercase leading-tight">
                {isAr ? 'محمود الباهي' : 'MAHMOUD ELBAHI'}
              </h1>
              <p className="text-[10px] font-mono text-white/50 leading-tight">
                {isAr ? 'التربية الخاصة · التقنية · AI' : 'Special Ed · Tech · AI'}
              </p>
            </div>
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={onCloseMobile}
            className="md:hidden p-1.5 text-white/50 hover:text-white bg-[#14171B] border border-[#242A32] rounded"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 1. CAREER PATHWAYS */}
        <div className="space-y-1 mb-6">
          <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase px-2 mb-2">
            {isAr ? 'المسارات المهنية' : 'CAREER'}
          </div>

          {primaryPaths.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                id={`sidebar-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-none text-xs font-mono transition-all duration-150 cursor-pointer ${
                  isActive
                    ? `${item.activeBg} border ${item.activeBorder} font-bold shadow-sm`
                    : 'text-white/70 hover:text-white hover:bg-[#12161C] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                  <Icon className={`w-4 h-4 ${isActive ? item.color : 'text-white/60'}`} />
                  <span className="font-sans font-medium text-xs text-left rtl:text-right">
                    {item.label}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {isActive && <span className="text-[9px] font-mono opacity-80">●</span>}
                  <ArrowIcon className={`w-3.5 h-3.5 opacity-40 group-hover:opacity-100 ${isActive ? 'text-white' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#1E242C] my-4" />

        {/* 2. PROFILE SECTIONS */}
        <div className="space-y-1 mb-6">
          <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase px-2 mb-2">
            {isAr ? 'الملف المهني' : 'PROFILE'}
          </div>

          {careerSections.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                id={`sidebar-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#14171B] border border-[#242A32] text-white font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-[#0D1014] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-white/50" />
                  <span className="font-sans font-normal text-xs">{item.label}</span>
                </div>

                <ArrowIcon className="w-3 h-3 opacity-30" />
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#1E242C] my-4" />

        {/* 3. CONNECT ACTIONS */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase px-2 mb-2">
            {isAr ? 'التواصل والملفات' : 'CONNECT'}
          </div>

          {/* Download CV button */}
          <a
            id="sidebar-download-cv"
            href="/Mahmoud-Elbahi-CV.pdf"
            download="Mahmoud-Elbahi-CV.pdf"
            className="w-full flex items-center justify-between px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500 text-emerald-300 hover:text-emerald-200 text-xs font-mono transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              <span>{isAr ? 'تحميل السيرة الذاتية (CV)' : 'DOWNLOAD CV'}</span>
            </div>
            <span className="text-[10px] opacity-60">PDF</span>
          </a>

          {/* View CV in new tab */}
          <a
            id="sidebar-view-cv"
            href="/Mahmoud-Elbahi-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-3 py-2 bg-[#12161C] hover:bg-[#181D24] border border-[#242A32] hover:border-white/40 text-white/80 hover:text-white text-xs font-mono transition-all group"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-white/60 group-hover:text-white" />
              <span>{isAr ? 'استعراض السيرة الذاتية' : 'VIEW CV'}</span>
            </div>
            <span className="text-[10px] font-mono text-white/40 group-hover:text-white transition-colors">↗</span>
          </a>

          {/* LinkedIn Profile */}
          <a
            id="sidebar-linkedin"
            href="https://www.linkedin.com/in/mahmodelbahi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-3 py-2 bg-[#12161C] hover:bg-[#181D24] border border-[#242A32] text-white/80 hover:text-white text-xs font-mono transition-all"
          >
            <div className="flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </div>
            <span className="text-[10px] font-mono text-white/40">↗</span>
          </a>

          {/* Contact Trigger */}
          <button
            id="sidebar-contact-btn"
            onClick={() => {
              onOpenContact();
              onCloseMobile();
            }}
            className="w-full flex items-center justify-between px-3 py-2 bg-[#12161C] hover:bg-[#181D24] border border-[#242A32] text-white/80 hover:text-white text-xs font-mono transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isAr ? 'تواصل معي' : 'Contact'}</span>
            </div>
            <span className="text-[10px] text-white/40 font-mono">Direct</span>
          </button>
        </div>

      </div>

      {/* Bottom Footer: Language Switcher & System Status */}
      <div className="p-4 border-t border-[#1E242C] bg-[#0A0C0F] flex items-center justify-between">
        <button
          id="sidebar-lang-toggle"
          onClick={onToggleLang}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#14171B] hover:bg-[#1C2026] border border-[#242A32] text-xs font-mono text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <Globe className="w-3.5 h-3.5 text-white/50" />
          <span>{lang === 'en' ? 'العربية' : 'English'}</span>
        </button>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>v3.0</span>
        </div>
      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar (260px) */}
      <aside className="hidden md:block w-64 lg:w-72 shrink-0 h-screen sticky top-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Slide-Out Drawer with Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseMobile}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: isAr ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isAr ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 w-72 max-w-[85vw] h-full shadow-2xl"
            >
              {sidebarContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
