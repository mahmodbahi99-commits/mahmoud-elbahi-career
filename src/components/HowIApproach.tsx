import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { Eye, GitMerge, Layout, Hammer, RefreshCw, ArrowRight } from 'lucide-react';

interface HowIApproachProps {
  lang: Language;
  content: SiteContent;
}

export const HowIApproach: React.FC<HowIApproachProps> = ({ lang, content }) => {
  const stepIcons = [Eye, GitMerge, Layout, Hammer, RefreshCw];

  return (
    <section id="approach" className="py-20 md:py-24 bg-[#050505] border-b border-neutral-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-300">
            <span>{content.howIApproach.methodPill}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            {content.howIApproach.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {content.howIApproach.subtitle}
          </p>
        </div>

        {/* 5-Step Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {content.howIApproach.steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];

            return (
              <div
                key={idx}
                id={`approach-step-${idx}`}
                className="p-6 bg-[#080808] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-neutral-500 group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                    <div className="w-7 h-7 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-medium text-white">
                    {step.title}
                  </h3>

                  {/* Detailed Description */}
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Practical Action Takeaway */}
                <div className="pt-4 mt-5 border-t border-neutral-900">
                  <div className="text-[10px] font-mono text-neutral-400 leading-snug">
                    <span className="text-white font-semibold block mb-0.5">
                      {lang === 'ar' ? 'المحصلة التطبيقية:' : 'Core Action:'}
                    </span>
                    {step.action}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
