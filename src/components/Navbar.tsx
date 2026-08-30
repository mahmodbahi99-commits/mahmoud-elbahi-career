import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { Menu, X, FileDown, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenCvModal: () => void;
  content: SiteContent;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenCvModal,
  content,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'hero',
        'snapshot',
        'story',
        'experience',
        'projects',
        'approach',
        'capabilities',
        'expertise',
        'tech',
        'business',
        'about',
        'contact',
      ];

      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: content.nav.home },
    { id: 'snapshot', label: content.nav.snapshot || (lang === 'ar' ? 'نظرة عامة' : 'Snapshot') },
    { id: 'story', label: content.nav.story },
    { id: 'experience', label: content.nav.experience },
    { id: 'projects', label: content.nav.projects },
    { id: 'approach', label: content.nav.approach || (lang === 'ar' ? 'المنهجية' : 'Approach') },
    { id: 'capabilities', label: content.nav.capabilities || (lang === 'ar' ? 'الكفاءات' : 'Capabilities') },
    { id: 'expertise', label: content.nav.expertise },
    { id: 'tech', label: content.nav.tech },
    { id: 'business', label: content.nav.business },
    { id: 'about', label: content.nav.about },
    { id: 'contact', label: content.nav.contact },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-neutral-800 py-3.5 shadow-xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-7 h-7 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white text-xs font-bold font-mono group-hover:border-neutral-600 transition-colors">
            ME
          </div>
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white group-hover:text-neutral-300 transition-colors block">
              {lang === 'ar' ? 'محمود الباهي' : 'Mahmoud Elbahi'}
            </span>
            <span className="hidden sm:block text-[10px] text-neutral-500 tracking-[0.1em] uppercase font-mono">
              {lang === 'ar' ? 'تربية خاصة × تقنية × ذكاء اصطناعي' : 'Special Ed × AI × Tech'}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 rtl:space-x-reverse bg-[#0a0a0a] px-3 py-1.5 border border-neutral-800">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1 text-[11px] font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white font-bold bg-neutral-800/80 border border-neutral-700'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Language Toggle & Download CV */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            id="lang-toggle-btn"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-800 hover:border-neutral-600 bg-[#080808] text-[10px] uppercase tracking-widest font-bold transition-all cursor-pointer"
            aria-label="Toggle language between English and Arabic"
          >
            <span className={lang === 'en' ? 'text-white' : 'text-neutral-500'}>EN</span>
            <span className="text-neutral-700">|</span>
            <span className={lang === 'ar' ? 'text-white' : 'text-neutral-500'}>AR</span>
          </button>

          {/* Download CV Button */}
          <button
            id="nav-download-cv-btn"
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 text-[10px] uppercase tracking-[0.15em] font-bold text-neutral-200 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>{content.nav.downloadCv}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden bg-[#080808] border-b border-neutral-800 px-4 pt-4 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`text-left rtl:text-right px-3 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                  activeSection === link.id
                    ? 'bg-neutral-800 text-white border border-neutral-700 font-bold'
                    : 'text-neutral-400 hover:text-white bg-neutral-900/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800">
            <button
              id="mobile-drawer-cv-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>{content.nav.downloadCv}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
