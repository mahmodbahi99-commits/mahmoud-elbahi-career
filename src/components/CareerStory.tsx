import React, { useState } from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { 
  Volume2, 
  HeartHandshake, 
  Settings, 
  BrainCircuit, 
  Layers, 
  TrendingUp, 
  ArrowRight, 
  Check 
} from 'lucide-react';

interface CareerStoryProps {
  lang: Language;
  content: SiteContent;
}

export const CareerStory: React.FC<CareerStoryProps> = ({ lang, content }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const stepIcons = [
    Volume2,
    HeartHandshake,
    Settings,
    BrainCircuit,
    Layers,
    TrendingUp,
  ];

  return (
    <section id="story" className="py-20 md:py-28 relative overflow-hidden border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-bold">
            01 // {lang === 'ar' ? 'التطور المهني' : 'THE CAREER STORY'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            {content.careerStory.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {content.careerStory.subtitle}
          </p>
        </div>

        {/* Timeline Progression System */}
        <div className="space-y-8">
          
          {/* Milestone Step Selector (Desktop / Tablet Pills Bar) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {content.careerStory.items.map((item, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              const isSelected = selectedStep === idx;

              return (
                <button
                  key={idx}
                  id={`career-story-step-${idx}`}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-4 text-left rtl:text-right transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#141414] border-white text-white shadow-lg'
                      : 'bg-[#080808] border-neutral-800 text-neutral-400 hover:bg-[#0f0f0f] hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-[10px] font-bold ${isSelected ? 'text-white' : 'text-neutral-500'}`}>
                      {item.step}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-neutral-600'}`} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider line-clamp-1">
                    {item.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Deep Dive Card */}
          <div className="p-6 sm:p-8 bg-[#0C0C0C] border border-neutral-800 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-700 font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-300">
                    STAGE {content.careerStory.items[selectedStep].step}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-white">
                    {content.careerStory.items[selectedStep].title}
                  </h3>
                  {content.careerStory.items[selectedStep].tagline && (
                    <p className="text-xs font-mono text-neutral-400">
                      {content.careerStory.items[selectedStep].tagline}
                    </p>
                  )}
                </div>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {content.careerStory.items[selectedStep].description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {content.careerStory.items[selectedStep].tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[10px] uppercase tracking-wider text-neutral-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r border-neutral-800 pt-4 lg:pt-0 lg:px-6 space-y-4">
                <div className="space-y-1.5">
                  <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono font-bold">
                    {lang === 'ar' ? 'الأثر والمحصلة التطبيقية' : 'Core Impact & Takeaway'}
                  </div>
                  <div className="text-xs text-neutral-200 leading-relaxed font-light p-3 bg-neutral-900/80 border border-neutral-800">
                    {content.careerStory.items[selectedStep].coreImpact || (
                      selectedStep === 0 ? 'Clinical foundation in human communication and diagnosis.' : 'Applied systems and strategic execution.'
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedStep((prev) => (prev > 0 ? prev - 1 : content.careerStory.items.length - 1))}
                    className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-[10px] uppercase tracking-wider text-neutral-300 hover:text-white hover:border-neutral-600 cursor-pointer"
                  >
                    {lang === 'ar' ? 'السابق' : 'Previous'}
                  </button>
                  <span className="text-[10px] font-mono text-neutral-600">
                    {selectedStep + 1} / {content.careerStory.items.length}
                  </span>
                  <button
                    onClick={() => setSelectedStep((prev) => (prev < content.careerStory.items.length - 1 ? prev + 1 : 0))}
                    className="px-3 py-1.5 bg-white text-black text-[10px] uppercase font-bold tracking-wider hover:bg-neutral-200 cursor-pointer"
                  >
                    {lang === 'ar' ? 'التالي' : 'Next'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Complete 6-Step Visual Progression Grid for Full Readability */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {content.careerStory.items.map((item, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div
                  key={idx}
                  id={`career-story-card-${idx}`}
                  className="p-6 bg-[#080808] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[10px] font-bold text-neutral-500 group-hover:text-white transition-colors">
                          {item.step}
                        </span>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-100">
                          {item.title}
                        </h4>
                      </div>
                      <Icon className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 transition-colors" />
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-neutral-900">
                    {item.tags.map((t, tIndex) => (
                      <span key={tIndex} className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
