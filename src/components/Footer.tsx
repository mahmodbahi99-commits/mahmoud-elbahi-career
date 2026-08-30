import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  lang: Language;
  content: SiteContent;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  content,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="py-12 bg-[#050505] border-t border-neutral-800 text-xs text-neutral-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left rtl:md:text-right">
            <div className="flex items-center justify-center md:justify-start rtl:md:justify-start gap-2">
              <span className="text-base font-light text-white tracking-tight font-sans">
                {content.footer.name}
              </span>
              <span className="w-1.5 h-1.5 bg-neutral-400" />
            </div>
            <p className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">
              {content.footer.positioning}
            </p>
          </div>

          {/* Quick Footer Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-wider font-mono text-neutral-400">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {content.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {content.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {content.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {content.nav.expertise}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {content.nav.contact}
            </button>
          </nav>

          {/* Back to top action */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="p-2.5 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors flex items-center gap-2 cursor-pointer uppercase text-[10px] tracking-wider"
            title={content.footer.backToTop}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{content.footer.backToTop}</span>
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-widest text-neutral-500">
          <p>© 2026 Mahmoud Elbahi</p>
          <div className="flex items-center gap-1.5">
            <span>Special Education × AI × Technology × EdTech</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
