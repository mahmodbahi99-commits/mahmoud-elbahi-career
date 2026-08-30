import React from 'react';
import { Language } from '../../types';
import { SiteContent } from '../../data/content';
import { CrossDomainConnection } from './CrossDomainConnection';
import { PathFooter } from './PathFooter';
import { CvDownloadButton } from '../CvDownloadButton';
import { SalesWorkflowVisual } from '../visuals/SalesWorkflowVisual';
import { TrendingUp, Briefcase, Users, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface SalesPathViewProps {
  lang: Language;
  content: SiteContent;
  onOpenCvModal: () => void;
}

export const SalesPathView: React.FC<SalesPathViewProps> = ({
  lang,
  content,
  onOpenCvModal,
}) => {
  const isRtl = lang === 'ar';
  const FlowArrow = isRtl ? ArrowLeft : ArrowRight;
  const sales = content.salesPath;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-14">
      
      {/* 1. Path Hero Header with Amber Accent */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 pb-8 border-b border-amber-500/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
            <span className="text-xs font-mono tracking-widest text-amber-400 font-semibold uppercase">
              {sales.badge}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            {sales.title}
          </h1>
          <p className="text-base sm:text-lg font-mono text-amber-400/90 tracking-wide font-medium">
            {sales.subtitle}
          </p>
        </div>

        {/* Utility Action: Download CV */}
        <div className="shrink-0">
          <CvDownloadButton
            id="sales-path-download-cv-btn"
            lang={lang}
            variant="utility"
            onMissingFileFallback={onOpenCvModal}
          />
        </div>
      </motion.div>

      {/* 2. Interactive Sales Flow Visual */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <SalesWorkflowVisual lang={lang} />
      </motion.section>

      {/* 3. Professional Experience (Vodafone Egypt) */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-4 h-4 text-amber-400" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
            {sales.experienceTitle}
          </h2>
        </div>

        <div className="p-6 sm:p-8 bg-[#120E08] border border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-3 border-b border-amber-500/15">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {sales.vodafoneExperience.role}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-amber-400/80">
                {sales.vodafoneExperience.company} — {sales.vodafoneExperience.location}
              </p>
            </div>
            {sales.vodafoneExperience.period && (
              <span className="text-xs font-mono text-amber-400/70 tracking-wider">
                {sales.vodafoneExperience.period}
              </span>
            )}
          </div>

          <ul className="space-y-2.5">
            {sales.vodafoneExperience.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. 5-Step Value Flow */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-white/50">
              {sales.valueFlowTitle}
            </h2>
          </div>
          <span className="text-xs font-mono text-amber-400/60">
            {sales.valueFlowSubtitle}
          </span>
        </div>

        {/* 5 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {sales.valueFlowSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#120E08] border border-amber-500/15 hover:border-amber-500/35 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-amber-500/15">
                  <span className="text-xs font-mono text-amber-400/70 font-semibold">{step.step}</span>
                  {idx < sales.valueFlowSteps.length - 1 && (
                    <FlowArrow className="w-3.5 h-3.5 text-amber-400/40 hidden md:block" />
                  )}
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                  {step.action}
                </h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Impact Callout */}
        <div className="p-6 sm:p-7 bg-[#120E08] border border-amber-500/25">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400">
              {lang === 'ar' ? 'الأثر التجاري في بناء المنتجات' : 'COMMERCIAL IMPACT IN PRODUCT DESIGN'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-3xl">
            {sales.salesImpactText}
          </p>
        </div>
      </section>

      {/* 5. Cross-Domain Connection */}
      <CrossDomainConnection
        lang={lang}
        connection={sales.connection}
      />

      {/* 6. Footer Contact */}
      <PathFooter
        lang={lang}
        content={content}
        onOpenCvModal={onOpenCvModal}
      />

    </div>
  );
};
