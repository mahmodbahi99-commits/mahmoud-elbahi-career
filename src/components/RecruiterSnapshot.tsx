import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { HeartHandshake, Cpu, Layers, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface RecruiterSnapshotProps {
  lang: Language;
  content: SiteContent;
}

export const RecruiterSnapshot: React.FC<RecruiterSnapshotProps> = ({ lang, content }) => {
  const getBlockIcon = (key: string) => {
    switch (key) {
      case 'domain':
        return HeartHandshake;
      case 'technology':
        return Cpu;
      case 'product':
        return Layers;
      case 'business':
        return TrendingUp;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="snapshot" className="py-16 md:py-20 bg-[#070707] border-b border-neutral-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-800/60 gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-neutral-400">
              <span className="w-2 h-2 bg-white inline-block"></span>
              <span>{content.recruiterSnapshot.title}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              {lang === 'ar' ? '4 أبعاد تخصصية في ملف مهني واحد' : '4 Disciplines in 1 Multidisciplinary Profile'}
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400 max-w-md">
            {content.recruiterSnapshot.subtitle}
          </div>
        </div>

        {/* 4 Concise Scannable Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.recruiterSnapshot.blocks.map((block, idx) => {
            const Icon = getBlockIcon(block.key);

            return (
              <div
                key={idx}
                id={`recruiter-snapshot-block-${block.key}`}
                className="p-6 bg-[#0c0c0c] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                      {block.category}
                    </span>
                    <div className="w-7 h-7 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="text-base font-medium text-white leading-snug">
                    {block.headline}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {block.description}
                  </p>
                </div>

                {/* Scannable Micro-Tags */}
                <div className="pt-4 mt-5 border-t border-neutral-900 flex flex-wrap gap-1.5">
                  {block.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-neutral-900/80 border border-neutral-800/80 text-[9px] font-mono uppercase tracking-wider text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
