import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { HeroVisual } from './HeroVisual';
import { CvDownloadButton } from './CvDownloadButton';
import { ArrowRight, Mail } from 'lucide-react';

interface HeroProps {
  lang: Language;
  content: SiteContent;
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, content, onOpenCvModal }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] pt-28 pb-16 md:py-28 flex items-center justify-center overflow-hidden border-b border-neutral-800/80"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Text & Positioning Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-400">
                {content.hero.status}
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter text-white leading-[0.95] uppercase font-sans">
                {content.hero.name}
              </h1>
              
              <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-neutral-400 font-semibold font-mono">
                {content.hero.positioning}
              </p>
            </div>

            {/* Short Professional Statement */}
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              {content.hero.statement}
            </p>

            {/* Compact Professional Role Signals (4 Dimensions) */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start rtl:lg:justify-start pt-1 pb-1">
              {content.hero.roleSignals.map((signal, sIdx) => (
                <span
                  key={sIdx}
                  id={`hero-role-signal-${sIdx}`}
                  className="px-3 py-1.5 bg-[#0f0f0f] border border-neutral-800 text-[11px] font-mono text-neutral-300 tracking-wide inline-flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 bg-neutral-400"></span>
                  <span>{signal}</span>
                </span>
              ))}
            </div>

            {/* Key Value Anchor Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 pb-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2 justify-center lg:justify-start rtl:lg:justify-start">
                <span className="w-1.5 h-1.5 bg-neutral-500 shrink-0" />
                <span>{lang === 'ar' ? 'أخصائي معتمد وممارس بالتربية الخاصة' : 'Verified Special Education Practitioner'}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start rtl:lg:justify-start">
                <span className="w-1.5 h-1.5 bg-neutral-500 shrink-0" />
                <span>{lang === 'ar' ? 'تطوير حلول EdTech ونماذج SaaS عملية' : 'EdTech & Practical SaaS Architecture'}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start rtl:lg:justify-start">
                <span className="w-1.5 h-1.5 bg-neutral-500 shrink-0" />
                <span>{lang === 'ar' ? 'دمج الذكاء الاصطناعي في مسارات العمل' : 'Applied AI Workflows & Automation'}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start rtl:lg:justify-start">
                <span className="w-1.5 h-1.5 bg-neutral-500 shrink-0" />
                <span>{lang === 'ar' ? 'حس تجاري وخبرة مبيعات متقدمة' : 'Commercial Acumen & Client Empathy'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-3">
              {/* Primary CTA */}
              <button
                id="hero-explore-btn"
                onClick={scrollToProjects}
                className="px-6 py-3.5 bg-white text-black text-xs font-mono font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center gap-2 group cursor-pointer min-h-[44px]"
              >
                <span>{content.hero.exploreCta}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA: DOWNLOAD FULL CV */}
              <CvDownloadButton
                id="hero-download-cv-btn"
                lang={lang}
                variant="full-profile"
                onMissingFileFallback={onOpenCvModal}
              />

              {/* Third Subtle Action */}
              <button
                id="hero-contact-btn"
                onClick={scrollToContact}
                className="px-4 py-3.5 text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer min-h-[44px]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{content.hero.contactCta}</span>
              </button>
            </div>

          </div>

          {/* Abstract Interconnected Nodes Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVisual lang={lang} />
          </div>

        </div>
      </div>
    </section>
  );
};
