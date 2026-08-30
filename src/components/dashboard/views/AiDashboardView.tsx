import React from 'react';
import { Language, DashboardSection } from '../../../types';
import { SiteContent } from '../../../data/content';
import { CategoryNavTabs } from '../CategoryNavTabs';
import { 
  Sparkles, 
  Workflow, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle,
  Lightbulb,
  Zap,
  ArrowRight,
  ArrowLeft,
  Bot
} from 'lucide-react';

interface AiDashboardViewProps {
  lang: Language;
  content: SiteContent;
  onSelectSection: (section: DashboardSection) => void;
}

export const AiDashboardView: React.FC<AiDashboardViewProps> = ({
  lang,
  content,
  onSelectSection,
}) => {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const aiCards = [
    {
      step: '01',
      title: isAr ? 'التعليم المدعوم بالذكاء الاصطناعي' : 'AI-Assisted Education',
      desc: isAr
        ? 'توظيف نماذج الذكاء الاصطناعي التوليدي في صياغة مقترحات الأهداف التربوية، وتكييف المحتوى التعليمي ليناسب الاحتياجات الفردية للطلاب.'
        : 'Leveraging generative models to draft individualized curriculum adaptations, visual token prompts, and differentiated learning steps.',
      badge: 'Curriculum & IEP',
    },
    {
      step: '02',
      title: isAr ? 'أتمتة سير العمل المدرسي' : 'Workflow Automation',
      desc: isAr
        ? 'تحويل المهام الروتينية المتكررة (صياغة التقارير، جدولة المتابعات، تنسيق البيانات) إلى مسارات مؤتمتة تختصر الوقت وتقلل الأخطاء.'
        : 'Automating repetitive administrative overhead: report structuring, schedule synchronization, and routine educational record formatting.',
      badge: 'Productivity & Flow',
    },
    {
      step: '03',
      title: isAr ? 'بناء النماذج الأولية السريعة' : 'AI Prototyping',
      desc: isAr
        ? 'استخدام أدوات الذكاء الاصطناعي لبناء نماذج تفاعلية سريعة ومختبرات لتجربة الحلول البرمجية قبل تطبيقها في البيئة التعليمية.'
        : 'Rapid interactive prototyping of specialized dashboard components and functional utilities before full deployment.',
      badge: 'Rapid Validation',
    },
    {
      step: '04',
      title: isAr ? 'التطوير البرمجي بمساعدة الذكاء الاصطناعي' : 'AI-assisted Development',
      desc: isAr
        ? 'تسريع كتابة الأكواد، وتصحيح الأخطاء، وهندسة واجهات الاستخدام بالاستفادة من أحدث أدوات المساعدة الذكية.'
        : 'Accelerating frontend logic, component scaffolding, and system debugging through modern generative assistance workflows.',
      badge: 'Engineering Velocity',
    },
  ];

  const aiWorkflowNodes = [
    {
      step: '01',
      label: isAr ? 'المشكلة والتحدي' : 'PROBLEM',
      desc: isAr ? 'تحدي تربوي أو روتين بطيء' : 'Educational bottleneck',
      color: 'border-white/20 text-white/70',
    },
    {
      step: '02',
      label: isAr ? 'النموذج الذكي' : 'AI',
      desc: isAr ? 'هندسة الأوامر والنماذج' : 'Prompt & Model Reasoning',
      color: 'border-violet-500/50 text-violet-300',
    },
    {
      step: '03',
      label: isAr ? 'الأتمتة والتنفيذ' : 'AUTOMATION',
      desc: isAr ? 'سير عمل مؤتمت ومستقر' : 'Structured Automated Flow',
      color: 'border-violet-500/70 text-violet-200',
    },
    {
      step: '04',
      label: isAr ? 'الحل المتكامل' : 'SOLUTION',
      desc: isAr ? 'أداة عملية سريعة الاستخدام' : 'Production Outcome',
      color: 'border-emerald-500/50 text-emerald-300',
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. HEADER */}
      <section className="space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span>03 / AI & WORKFLOWS</span>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading uppercase">
            {isAr ? 'الذكاء الاصطناعي وسير العمل' : 'AI'}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-violet-400 font-heading">
            {isAr ? 'الذكاء الاصطناعي في التعليم وأتمتة العمليات' : 'AI IN EDUCATION & WORKFLOWS'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-3xl">
          {isAr
            ? 'تطبيق تقنيات الذكاء الاصطناعي التوليدي كأداة تسريع وتطوير لحل المشكلات الميدانية، وأتمتة المهام الروتينية، وبناء نماذج أولية ذكية تدعم المنظومة التعليمية.'
            : 'Applying modern generative AI and prompt engineering as an accelerator for educational problem-solving, repetitive workflow automation, and rapid prototyping.'}
        </p>
      </section>

      {/* 2. CATEGORY TABS */}
      <section>
        <CategoryNavTabs
          lang={lang}
          activeSection="ai"
          onSelectSection={onSelectSection}
        />
      </section>

      {/* 3. ANIMATED AI WORKFLOW VISUALIZATION */}
      <section className="p-6 bg-[#120E1F] border border-violet-500/40 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-3 border-b border-violet-500/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <h3 className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
              {isAr ? 'مخطط حل المشكلات عبر الذكاء الاصطناعي' : 'PROBLEM-TO-SOLUTION AI PIPELINE'}
            </h3>
          </div>
          <span className="text-[11px] font-mono text-white/40">VIOLET AUTOMATION FLOW</span>
        </div>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {aiWorkflowNodes.map((node, idx) => (
            <div key={idx} className="p-4 bg-[#191428] border border-violet-500/20 hover:border-violet-400/60 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-violet-400 font-bold">
                  {node.step} //
                </span>
                <span className="text-xs font-mono text-white/40">→</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading mb-1">
                  {node.label}
                </h4>
                <p className="text-xs font-mono text-white/60">
                  {node.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOUR MAIN AI CARDS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-[#1E242C]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <h3 className="text-base font-bold text-white font-heading uppercase tracking-tight">
              {isAr ? 'ركائز التطبيق والابتكار' : 'CORE AI PRACTICES'}
            </h3>
          </div>
          <span className="text-xs font-mono text-white/40">APPLIED METHODOLOGIES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiCards.map((card, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-[#12161C] border border-[#242A32] hover:border-violet-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-violet-400 font-bold">
                    {card.step} // {card.badge}
                  </span>
                  <Bot className="w-4 h-4 text-violet-400/60" />
                </div>
                <h4 className="text-lg font-bold text-white font-heading">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1E242C] flex items-center justify-between text-xs font-mono text-white/50">
                <span>{isAr ? 'تطبيق ميداني' : 'Applied in production'}</span>
                <span className="text-violet-400 font-bold">✓</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TOOLS & POSITIONING NOTE */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Tools */}
        <div className="p-5 bg-[#12161C] border border-[#242A32] space-y-3 lg:col-span-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
              {isAr ? 'الأدوات والمنهجيات المعتمدة' : 'AI TOOLS & METHODOLOGIES'}
            </span>
            <span className="text-[10px] font-mono text-violet-400">PRACTICAL STACK</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="p-3 bg-[#181D24] border border-[#242A32] text-xs font-mono text-white">
              <span className="text-violet-400 block font-bold mb-1">01 // Google AI Studio</span>
              <span className="text-white/60 text-[11px]">{isAr ? 'بناء النماذج وهندسة الأوامر' : 'Prototyping & testing'}</span>
            </div>
            <div className="p-3 bg-[#181D24] border border-[#242A32] text-xs font-mono text-white">
              <span className="text-violet-400 block font-bold mb-1">02 // Generative AI</span>
              <span className="text-white/60 text-[11px]">{isAr ? 'النماذج اللغوية والتوليد' : 'LLM structured output'}</span>
            </div>
            <div className="p-3 bg-[#181D24] border border-[#242A32] text-xs font-mono text-white">
              <span className="text-violet-400 block font-bold mb-1">03 // Prompt Engineering</span>
              <span className="text-white/60 text-[11px]">{isAr ? 'سياق تربوي دقيق' : 'Zero/Few-shot domain prompts'}</span>
            </div>
          </div>
        </div>

        {/* Clear Positioning Note */}
        <div className="p-5 bg-[#171324] border border-violet-500/30 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-violet-400 font-bold uppercase tracking-widest">
              {isAr ? 'توضيح الموقع المهني' : 'PROFESSIONAL SCOPE'}
            </span>
            <p className="text-xs text-white/80 font-light leading-relaxed">
              {isAr
                ? 'التركيز منصب على التطبيق العملي للذكاء الاصطناعي كأداة لحل المشكلات التربوية وتسريع الأنظمة، وليس كمهندس خوارزميات ذكاء اصطناعي.'
                : 'Positioned as an applied innovator leveraging modern AI to solve practical educational and workflow challenges.'}
            </p>
          </div>
          <span className="text-[10px] font-mono text-white/40 pt-2 border-t border-violet-500/20">
            PRACTICAL INNOVATION
          </span>
        </div>

      </section>

    </div>
  );
};
