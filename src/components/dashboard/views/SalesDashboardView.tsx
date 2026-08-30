import React from 'react';
import { Language, DashboardSection } from '../../../types';
import { SiteContent } from '../../../data/content';
import { CategoryNavTabs } from '../CategoryNavTabs';
import { 
  TrendingUp, 
  MessageSquare, 
  Target, 
  Users, 
  Handshake, 
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface SalesDashboardViewProps {
  lang: Language;
  content: SiteContent;
  onSelectSection: (section: DashboardSection) => void;
}

export const SalesDashboardView: React.FC<SalesDashboardViewProps> = ({
  lang,
  content,
  onSelectSection,
}) => {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const salesPillars = [
    {
      title: isAr ? 'التواصل الفعال مع العملاء' : 'Customer Communication',
      desc: isAr ? 'الاستماع النشط، وبناء جسور الثقة السريعة، وإدارة الحوارات المعقدة بمرونة عالية.' : 'Active listening, rapport building, and high-clarity interpersonal communication.',
      icon: MessageSquare,
    },
    {
      title: isAr ? 'تحليل الاحتياجات الدقيقة' : 'Needs Analysis',
      desc: isAr ? 'فهم دوافع العميل الحقيقية وتقديم الحلول المخصصة المناسبة بدقة واحترافية.' : 'Diagnosing client requirements to propose high-fit value propositions.',
      icon: Target,
    },
    {
      title: isAr ? 'المبيعات والاستشارات' : 'Consultative Sales',
      desc: isAr ? 'البيع القائم على القيمة الحقيقية ومواءمة المنتجات مع متطلبات العميل.' : 'Value-based solution positioning and structured closing.',
      icon: TrendingUp,
    },
    {
      title: isAr ? 'التفاوض وإدارة الاعتراضات' : 'Negotiation & Objection Handling',
      desc: isAr ? 'تحويل التحديات والاعتراضات إلى فرص نجاح متفق عليها ترضي جميع الأطراف.' : 'Reframing hesitation into mutually beneficial operational alignment.',
      icon: Handshake,
    },
    {
      title: isAr ? 'تجربة العميل ورضاه' : 'Customer Experience (CX)',
      desc: isAr ? 'ضمان أعلى معايير الجودة ورضا المستفيدين في كل نقطة اتصال.' : 'End-to-end satisfaction focus and relationship longevity.',
      icon: Users,
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. HEADER */}
      <section className="space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>04 / SALES & COMMUNICATION</span>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading uppercase">
            {isAr ? 'المبيعات والتواصل' : 'SALES'}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-amber-400 font-heading">
            {isAr ? 'فودافون مصر — خدمة العملاء والمبيعات الاستشارية' : 'Vodafone Egypt — Sales & Customer Experience'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-3xl">
          {isAr
            ? 'خبرة تأسيسية في مهارات التواصل رفيعة المستوى، وتحليل متطلبات العملاء، والمبيعات المبنية على القيمة الحقيقية، وإدارة تجربة المستفيدين.'
            : 'Foundational experience in high-volume customer communication, diagnostic needs analysis, value-driven negotiation, and stakeholder relationship management.'}
        </p>
      </section>

      {/* 2. CATEGORY TABS */}
      <section>
        <CategoryNavTabs
          lang={lang}
          activeSection="sales"
          onSelectSection={onSelectSection}
        />
      </section>

      {/* 3. VODAFONE EXPERIENCE CARD */}
      <section className="p-6 bg-[#16120B] border-2 border-amber-500/40 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-amber-500/20">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-mono font-bold text-amber-400 uppercase tracking-widest">
              {isAr ? 'فودافون مصر // تجربة العملاء والمبيعات' : 'VODAFONE EGYPT // EXPERIENCE'}
            </h3>
          </div>
          <span className="text-xs font-mono text-white/50">Egypt</span>
        </div>

        <div className="space-y-1">
          <h4 className="text-xl font-bold text-white font-heading">
            {isAr ? 'مستشار خدمة عملاء ومبيعات' : 'Sales & Customer Care Specialist'}
          </h4>
          <p className="text-xs font-mono text-amber-300">
            Vodafone Egypt
          </p>
        </div>

        <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
          {isAr
            ? 'التعامل مع شريحة واسعة من العملاء يومياً، وتقديم الاستشارات المناسبة للباقات والخدمات، وحل المشكلات المعقدة تحت ضغط، وتحقيق أهداف المبيعات المحددة بأعلى معدلات رضا.'
            : 'Delivered high-volume consultative customer interactions, diagnosed customer connectivity requirements, achieved sales conversion benchmarks, and preserved customer retention.'}
        </p>
      </section>

      {/* 4. CORE CAPABILITIES (5 PILLARS) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1E242C]">
          <h3 className="text-base font-bold text-white font-heading uppercase tracking-tight">
            {isAr ? 'المهارات المكتسبة والمطبقة' : 'CORE CAPABILITIES'}
          </h3>
          <span className="text-xs font-mono text-white/40">5 PILLARS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {salesPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-4 bg-[#12161C] border border-[#242A32] hover:border-amber-500/30 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-amber-400">
                    0{idx + 1} //
                  </span>
                  <Icon className="w-4 h-4 text-amber-400/70" />
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white font-heading">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CONNECTION TO SPECIAL ED & TECH */}
      <section className="p-4 sm:p-5 bg-[#12161C] border border-[#242A32] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
            {isAr ? 'التقاطع مع التربية والتقنية' : 'INTERSECTIONAL VALUE'}
          </span>
          <p className="text-xs text-white/80 font-light">
            {isAr
              ? 'مهارات التواصل والإقناع وتحليل الاحتياجات تمثل ركيزة أساسية في التعامل مع أولياء الأمور وإقناع الكادر التعليمي بتبني الأنظمة الرقمية.'
              : 'Directly reinforces communication with families and drives smooth teacher adoption for digital school tools.'}
          </p>
        </div>

        <button
          onClick={() => onSelectSection('education')}
          className="px-4 py-2 bg-[#181D24] hover:bg-[#202732] border border-[#242A32] text-xs font-mono text-white transition-colors cursor-pointer shrink-0 flex items-center gap-2"
        >
          <span>{isAr ? 'العودة لمسار التعليم' : 'Back to Education'}</span>
          <Arrow className="w-3.5 h-3.5" />
        </button>
      </section>

    </div>
  );
};
