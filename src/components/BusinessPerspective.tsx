import React from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { 
  Users, 
  TrendingUp, 
  Lightbulb, 
  Layers, 
  Building2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

interface BusinessPerspectiveProps {
  lang: Language;
  content: SiteContent;
}

export const BusinessPerspective: React.FC<BusinessPerspectiveProps> = ({
  lang,
  content,
}) => {
  const icons = [Users, TrendingUp, Lightbulb, Layers, Building2];

  return (
    <section id="business" className="py-20 md:py-28 relative bg-[#050505] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-bold">
            06 // {lang === 'ar' ? 'البعد التجاري وإدارة المنتجات' : 'COMMERCIAL & PRODUCT LOGIC'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            {content.business.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {content.business.subtitle}
          </p>
        </div>

        {/* Business Mindset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.business.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                id={`biz-item-${idx}`}
                className="p-8 bg-[#080808] border border-neutral-800 hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-750 text-[9px] font-mono uppercase tracking-wider text-neutral-300">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-light text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  <span>0{idx + 1}</span>
                  <span className="text-neutral-400">
                    {idx === 1 ? 'Vodafone Acumen' : 'Product Strategy'}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Strategic Synergy Callout Box */}
          <div className="p-8 bg-[#0C0C0C] border border-neutral-700 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-300 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>{lang === 'ar' ? 'القيمة المضافة' : 'The Strategic Bridge'}</span>
              </div>
              <h3 className="text-base font-light text-white">
                {lang === 'ar' ? 'الجمع بين العمق التعليمي والتفكير التجاري' : 'Clinical Grounding Meets Commercial Pragmatism'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {lang === 'ar'
                  ? 'لا يقتصر عمل محمود على كتابة الكود أو التدريس المنفصل، بل يفهم كيف تُبنى المنتجات التي تحقق عائداً ملموساً للمؤسسة وتوفر تجربة استخدام سهلة للمستفيد النهائي.'
                  : 'Mahmoud bridges clinical domain depth with market viability—designing digital systems that reduce organizational churn and maximize end-user adoption.'}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-neutral-800 text-[10px] uppercase font-bold tracking-widest font-mono text-white">
              {lang === 'ar' ? 'جاهز للمساهمة في فرق المنتجات و EdTech' : 'Ready for EdTech & Product Teams'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
