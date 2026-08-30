import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { Clock, HeartHandshake, Cpu, Layers } from 'lucide-react';

interface QuickMetricsProps {
  lang: Language;
  content: SiteContent;
}

export const QuickMetrics: React.FC<QuickMetricsProps> = ({ content }) => {
  const icons = [Clock, HeartHandshake, Cpu, Layers];

  return (
    <section id="metrics" className="border-b border-neutral-800 bg-[#080808] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-neutral-800">
          {content.metrics.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                id={`metric-item-${idx}`}
                className="p-6 md:p-8 flex flex-col justify-between hover:bg-[#0c0c0c] transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="w-8 h-8 rounded-none border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-neutral-700 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-200">
                    {metric.label}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                    {metric.sublabel}
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
