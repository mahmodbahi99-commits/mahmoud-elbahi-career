import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { CvDownloadButton } from './CvDownloadButton';
import { Brain, Cpu, HeartHandshake, Layers, Compass, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  content: SiteContent;
  onOpenCvModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  content,
  onOpenCvModal,
}) => {
  const pillarIcons = [Brain, Cpu, HeartHandshake, Layers];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#050505] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-bold">
            07 // {lang === 'ar' ? 'الرؤية والهدف' : 'PROFILE & VISION'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            {content.about.title}
          </h2>
        </div>

        {/* Narrative & Pillars Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Editorial Biography (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            <div className="p-8 bg-[#080808] border border-neutral-800 space-y-4">
              <p>
                {content.about.p1}
              </p>
              <p className="text-neutral-400">
                {content.about.p2}
              </p>

              <div className="pt-6 border-t border-neutral-900 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">{lang === 'ar' ? 'الموقع الحالي:' : 'Current Location:'}</span>
                  <span className="font-light text-white">{lang === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">{lang === 'ar' ? 'الجنسية / الأصل:' : 'Origin / Nationality:'}</span>
                  <span className="font-light text-white">{lang === 'ar' ? 'مصري' : 'Egyptian'}</span>
                </div>
              </div>

              {/* DOWNLOAD FULL CV Action */}
              <div className="pt-4 border-t border-neutral-900 flex justify-start">
                <CvDownloadButton
                  id="about-download-full-cv-btn"
                  lang={lang}
                  variant="full-profile"
                  onMissingFileFallback={onOpenCvModal}
                />
              </div>
            </div>
          </div>

          {/* What I'm Building Toward: 4 Pillars (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest mb-2">
              <Compass className="w-3.5 h-3.5 text-white" />
              <span>{content.about.pillarsTitle}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.about.pillars.map((pillar, idx) => {
                const Icon = pillarIcons[idx % pillarIcons.length];
                return (
                  <div
                    key={idx}
                    id={`pillar-card-${idx}`}
                    className="p-6 bg-[#080808] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-7 h-7 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-light text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-neutral-900 flex items-center gap-1 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3 text-neutral-400" />
                      <span>{lang === 'ar' ? 'أولوية تطوير' : 'Core Focus Pillar'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
