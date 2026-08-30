import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { CheckCircle2, GraduationCap, Cpu, Layers, TrendingUp } from 'lucide-react';

interface SelectedCapabilitiesProps {
  lang: Language;
  content: SiteContent;
}

export const SelectedCapabilities: React.FC<SelectedCapabilitiesProps> = ({ lang, content }) => {
  const getGroupIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return GraduationCap;
      case 1:
        return Cpu;
      case 2:
        return Layers;
      case 3:
        return TrendingUp;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="capabilities" className="py-20 md:py-24 bg-[#070707] border-b border-neutral-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-bold font-mono">
            {lang === 'ar' ? 'مصفوفة الكفاءات' : 'COMPETENCY MATRIX'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            {content.selectedCapabilities.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {content.selectedCapabilities.subtitle}
          </p>
        </div>

        {/* 4 Multi-Disciplinary Capability Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.selectedCapabilities.groups.map((group, gIdx) => {
            const Icon = getGroupIcon(gIdx);

            return (
              <div
                key={gIdx}
                id={`capability-group-${gIdx}`}
                className="p-6 sm:p-7 bg-[#0b0b0b] border border-neutral-800 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Group Title & Subtitle */}
                  <div className="space-y-1.5 pb-4 border-b border-neutral-850">
                    <div className="flex items-center gap-2 text-white">
                      <div className="p-1.5 bg-neutral-900 border border-neutral-800">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">
                        {group.title}
                      </h3>
                    </div>
                    <p className="text-[11px] font-mono text-neutral-400">
                      {group.subtitle}
                    </p>
                  </div>

                  {/* Capability List */}
                  <ul className="space-y-2.5">
                    {group.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-light">
                        <span className="w-1.5 h-1.5 bg-neutral-500 shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-6 border-t border-neutral-900 text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center justify-between">
                  <span>Group 0{gIdx + 1}</span>
                  <span className="text-neutral-400">{group.items.length} Core Competencies</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
