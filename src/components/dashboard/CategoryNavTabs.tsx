import React from 'react';
import { Language, DashboardSection } from '../../types';
import { GraduationCap, Cpu, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface CategoryNavTabsProps {
  lang: Language;
  activeSection: DashboardSection;
  onSelectSection: (section: DashboardSection) => void;
}

export const CategoryNavTabs: React.FC<CategoryNavTabsProps> = ({
  lang,
  activeSection,
  onSelectSection,
}) => {
  const isAr = lang === 'ar';

  const tabs: {
    id: DashboardSection;
    number: string;
    title: string;
    sublabel: string;
    description: string;
    icon: React.FC<{ className?: string }>;
    accentColor: string;
    activeBorder: string;
    activeGlow: string;
    activeBg: string;
    iconColor: string;
    tagBg: string;
  }[] = [
    {
      id: 'education',
      number: '01',
      title: isAr ? 'التعليم' : 'EDUCATION',
      sublabel: isAr ? 'التربية الخاصة والتوحد' : 'Special Education · Autism',
      description: isAr 
        ? 'اضطراب طيف التوحد · التخاطب · الخطط الفردية IEP' 
        : 'Autism Spectrum · Speech & Language · IEP Plans',
      icon: GraduationCap,
      accentColor: 'text-emerald-400',
      activeBorder: 'border-emerald-500/50',
      activeGlow: 'shadow-[0_0_20px_rgba(16,185,129,0.12)]',
      activeBg: 'bg-[#101914]',
      iconColor: 'text-emerald-400',
      tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
    {
      id: 'technology',
      number: '02',
      title: isAr ? 'التقنية' : 'TECHNOLOGY',
      sublabel: isAr ? 'التحول الرقمي والأنظمة' : 'Digital Transformation · Systems',
      description: isAr 
        ? 'أنظمة الطلاب · سير العمل الرقمي · معيار 360' 
        : 'Educational Systems · Workflows · Miyar 360',
      icon: Cpu,
      accentColor: 'text-blue-400',
      activeBorder: 'border-blue-500/50',
      activeGlow: 'shadow-[0_0_20px_rgba(59,130,246,0.12)]',
      activeBg: 'bg-[#0E1522]',
      iconColor: 'text-blue-400',
      tagBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    },
    {
      id: 'ai',
      number: '03',
      title: isAr ? 'الذكاء الاصطناعي' : 'AI',
      sublabel: isAr ? 'الأتمتة وتطوير الأدوات' : 'AI · Automation · Workflows',
      description: isAr 
        ? 'أتمتة المهام التربوية · نماذج تجريبية · Google AI' 
        : 'Workflow Automation · Educational Tools · Prompting',
      icon: Sparkles,
      accentColor: 'text-violet-400',
      activeBorder: 'border-violet-500/50',
      activeGlow: 'shadow-[0_0_20px_rgba(139,92,246,0.12)]',
      activeBg: 'bg-[#151122]',
      iconColor: 'text-violet-400',
      tagBg: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    },
    {
      id: 'sales',
      number: '04',
      title: isAr ? 'المبيعات' : 'SALES',
      sublabel: isAr ? 'التواصل وتحليل الاحتياجات' : 'Communication · Customer',
      description: isAr 
        ? 'خدمة العملاء · فودافون مصر · المهارات التفاوضية' 
        : 'Needs Analysis · Vodafone Egypt · Negotiation',
      icon: TrendingUp,
      accentColor: 'text-amber-400',
      activeBorder: 'border-amber-500/50',
      activeGlow: 'shadow-[0_0_20px_rgba(245,158,11,0.12)]',
      activeBg: 'bg-[#1A160E]',
      iconColor: 'text-amber-400',
      tagBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-8">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeSection === tab.id;

        return (
          <motion.button
            key={tab.id}
            id={`category-tab-${tab.id}`}
            onClick={() => onSelectSection(tab.id)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative p-4 sm:p-5 text-left rtl:text-right transition-all duration-200 border cursor-pointer ${
              isActive
                ? `${tab.activeBg} ${tab.activeBorder} ${tab.activeGlow} ring-1 ring-white/10`
                : 'bg-[#12161C] hover:bg-[#161B22] border-[#242A32] hover:border-[#353E4A]'
            }`}
          >
            {/* Active Indicator Top Bar */}
            {isActive && (
              <div className={`absolute top-0 inset-x-0 h-1 bg-current ${tab.accentColor}`} />
            )}

            {/* Top row: Number & Icon */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-white/40 tracking-wider">
                {tab.number} //
              </span>
              <div className={`p-1.5 rounded-none border ${isActive ? tab.tagBg : 'bg-[#181D24] text-white/50 border-[#242A32]'}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            {/* Title */}
            <div className="mb-1.5 flex items-center justify-between">
              <h3 className={`text-base font-bold font-heading uppercase tracking-tight ${isActive ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
                {tab.title}
              </h3>
              {isActive && (
                <span className="flex h-2 w-2 relative">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${tab.tagBg}`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 bg-current ${tab.accentColor}`} />
                </span>
              )}
            </div>

            {/* Sublabel */}
            <div className={`text-xs font-mono mb-2 ${isActive ? tab.accentColor : 'text-white/60'}`}>
              {tab.sublabel}
            </div>

            {/* Description */}
            <p className="text-xs text-white/60 font-light leading-relaxed">
              {tab.description}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
};
