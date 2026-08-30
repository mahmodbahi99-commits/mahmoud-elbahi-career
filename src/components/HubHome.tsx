import React from 'react';
import { Language, ActiveView } from '../types';
import { SiteContent } from '../data/content';
import { CvDownloadButton } from './CvDownloadButton';
import { HeroNetworkVisual } from './visuals/HeroNetworkVisual';
import { ArrowRight, ArrowLeft, Globe, MessageSquare, Mail, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HubHomeProps {
  lang: Language;
  content: SiteContent;
  onSelectPath: (path: ActiveView) => void;
  onToggleLang: () => void;
  onOpenCvModal: () => void;
}

export const HubHome: React.FC<HubHomeProps> = ({
  lang,
  content,
  onSelectPath,
  onToggleLang,
  onOpenCvModal,
}) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // 4 Primary Colored Paths with refined Linear/Notion minimal styling
  const pathCards = [
    {
      id: 'education' as ActiveView,
      number: '01',
      title: lang === 'ar' ? 'التعليم والتربية الخاصة' : 'EDUCATION',
      tags: lang === 'ar' ? 'التوحد · التربية الخاصة · التخاطب' : 'Autism · Special Education · Speech',
      description: lang === 'ar' 
        ? 'الخبرة الميدانية والتأهيل السريري في اضطراب طيف التوحد والخطط الفردية (IEP) والتدخل السلوكي.' 
        : 'Hands-on practice in Autism Spectrum Disorder, speech & language intervention, and IEP development.',
      accentBorder: 'hover:border-emerald-500/50',
      activeGradient: 'group-hover:bg-gradient-to-br group-hover:from-emerald-950/30 group-hover:to-transparent',
      topLine: 'bg-emerald-400',
      accentColor: 'text-emerald-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]',
      dotColor: 'bg-emerald-400',
      arrowBorder: 'group-hover:border-emerald-500/40 group-hover:text-emerald-300 group-hover:bg-emerald-500/10',
    },
    {
      id: 'technology' as ActiveView,
      number: '02',
      title: lang === 'ar' ? 'التقنية والأنظمة' : 'TECHNOLOGY',
      tags: lang === 'ar' ? 'الأنظمة الرقمية · التحول المؤسسي' : 'Digital Systems · Transformation',
      description: lang === 'ar'
        ? 'تصميم وتطبيق الأنظمة الرقمية ومسارات العمل المدرسية ولوحات التحكم وبناء النماذج الأولية.'
        : 'Designing and implementing digital educational workflows, dashboards, and platform architectures.',
      accentBorder: 'hover:border-blue-500/50',
      activeGradient: 'group-hover:bg-gradient-to-br group-hover:from-blue-950/30 group-hover:to-transparent',
      topLine: 'bg-blue-400',
      accentColor: 'text-blue-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]',
      dotColor: 'bg-blue-400',
      arrowBorder: 'group-hover:border-blue-500/40 group-hover:text-blue-300 group-hover:bg-blue-500/10',
    },
    {
      id: 'ai' as ActiveView,
      number: '03',
      title: lang === 'ar' ? 'الذكاء الاصطناعي' : 'AI',
      tags: lang === 'ar' ? 'الذكاء الاصطناعي · الأتمتة · الابتكار' : 'AI · Automation · Innovation',
      description: lang === 'ar'
        ? 'توظيف نماذج الذكاء الاصطناعي في هندسة المحتوى التعليمي وأتمتة مسارات العمل وتطوير الأدوات.'
        : 'Applied AI pipelines for educational content, workflow acceleration, and interactive tooling.',
      accentBorder: 'hover:border-violet-500/50',
      activeGradient: 'group-hover:bg-gradient-to-br group-hover:from-violet-950/30 group-hover:to-transparent',
      topLine: 'bg-violet-400',
      accentColor: 'text-violet-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]',
      dotColor: 'bg-violet-400',
      arrowBorder: 'group-hover:border-violet-500/40 group-hover:text-violet-300 group-hover:bg-violet-500/10',
    },
    {
      id: 'sales' as ActiveView,
      number: '04',
      title: lang === 'ar' ? 'المبيعات وتجربة العملاء' : 'SALES',
      tags: lang === 'ar' ? 'التواصل · العميل · التفكير التجاري' : 'Communication · Customer · Business',
      description: lang === 'ar'
        ? 'تحليل احتياجات العملاء والتفاوض الاستشاري والمهارات التجارية المكتسبة من فودافون مصر.'
        : 'Consultative communication, customer needs discovery, and commercial value creation from Vodafone Egypt.',
      accentBorder: 'hover:border-amber-500/50',
      activeGradient: 'group-hover:bg-gradient-to-br group-hover:from-amber-950/30 group-hover:to-transparent',
      topLine: 'bg-amber-400',
      accentColor: 'text-amber-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]',
      dotColor: 'bg-amber-400',
      arrowBorder: 'group-hover:border-amber-500/40 group-hover:text-amber-300 group-hover:bg-amber-500/10',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between px-4 sm:px-6 md:px-12 py-6 md:py-10 max-w-7xl mx-auto w-full relative">
      
      {/* 1. Global Minimal Header */}
      <header className="relative z-10 flex items-center justify-between pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs sm:text-sm font-mono tracking-wider font-semibold text-white/90 uppercase">
            {lang === 'ar' ? 'محمود الباهي / المسار المهني' : 'MAHMOUD ELBAHI / CAREER'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Header CV Download Button */}
          <CvDownloadButton
            id="hub-header-cv-btn"
            lang={lang}
            variant="nav"
            onMissingFileFallback={onOpenCvModal}
          />

          {/* Language Switcher */}
          <button
            id="hub-lang-toggle"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-white/80 hover:text-white bg-[#14171B] hover:bg-[#1C2026] border border-white/10 rounded-none transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-white/60" />
            <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
          </button>
        </div>
      </header>

      {/* 2. Hero Section: Split screen on Desktop, Single column on Mobile */}
      <main className="relative z-10 my-auto py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column: Identity & Statement (Editorial Typography) */}
          <div className="lg:col-span-7">
            
            {/* Small label */}
            <motion.div 
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 bg-[#14171B] border border-white/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 font-semibold uppercase">
                {lang === 'ar' ? 'محمود الباهي / المسار المهني' : 'MAHMOUD ELBAHI / CAREER'}
              </span>
            </motion.div>

            {/* Large Editorial Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mb-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] font-heading uppercase">
                {lang === 'ar' ? (
                  <>
                    محمود
                    <br />
                    الباهي
                  </>
                ) : (
                  <>
                    MAHMOUD
                    <br />
                    ELBAHI
                  </>
                )}
              </h1>
            </motion.div>

            {/* Disciplines below name */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-sm sm:text-base md:text-lg font-mono text-emerald-300/90 font-medium mb-6"
            >
              <span>{lang === 'ar' ? 'التربية الخاصة' : 'Special Education'}</span>
              <span className="text-white/30">•</span>
              <span>{lang === 'ar' ? 'التوحد' : 'Autism'}</span>
              <span className="text-white/30">•</span>
              <span className="text-blue-300/90">{lang === 'ar' ? 'التحول الرقمي' : 'Digital Transformation'}</span>
            </motion.div>

            {/* Core concise statement */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="text-sm sm:text-base md:text-lg text-white/75 leading-relaxed font-normal max-w-2xl"
            >
              {lang === 'ar'
                ? 'أخصائي ومعلم تربية خاصة بخبرة ميدانية في التوحد واضطرابات النطق والتخاطب والتدخل التربوي — يجمع حالياً بين الممارسة التعليمية والإشراف التقني والتحول الرقمي.'
                : 'Special Education professional with hands-on experience in Autism, Speech & Language, and educational intervention — currently combining educational practice with technical supervision and digital transformation.'}
            </motion.p>
          </div>

          {/* Right Column (Desktop) / Below (Mobile): Abstract Animated Education + Tech Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroNetworkVisual lang={lang} />
          </motion.div>
        </div>

        {/* 3. Main Navigation: Four Large Interactive Doorway Cards */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white/40" />
            <h2 className="text-[11px] font-mono uppercase tracking-widest text-white/40">
              {lang === 'ar' ? 'استكشف مسارات الخبرة' : 'CHOOSE CAREER PATHWAY'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {pathCards.map((card, index) => {
              return (
                <motion.button
                  key={card.id}
                  id={`hub-path-${card.id}`}
                  onClick={() => onSelectPath(card.id)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + index * 0.06 }}
                  whileHover={{ y: -3 }}
                  className={`group relative text-left rtl:text-right p-6 sm:p-7 md:p-8 bg-[#0D0F12] border border-white/[0.08] ${card.accentBorder} ${card.activeGradient} ${card.glow} transition-all duration-250 ease-out flex flex-col justify-between min-h-[200px] cursor-pointer overflow-hidden`}
                >
                  {/* Subtle top accent line */}
                  <div className={`absolute top-0 inset-x-0 h-[2px] ${card.topLine} opacity-30 group-hover:opacity-100 transition-opacity duration-250`} />
                  
                  {/* Top Row: Number & Animated Arrow */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-mono tracking-widest text-white/40 group-hover:text-white transition-colors">
                        {card.number} //
                      </span>
                      <span className={`w-1.5 h-1.5 rounded-full ${card.dotColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
                    </div>

                    <div className={`w-8 h-8 rounded-none border border-white/10 ${card.arrowBorder} flex items-center justify-center bg-[#14171B] transition-all duration-200`}>
                      <ArrowIcon className={`w-4 h-4 text-white/50 group-hover:text-white transition-transform duration-200 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1.5 font-heading group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className={`text-xs sm:text-sm font-mono ${card.accentColor} mb-2.5 tracking-wide font-medium`}>
                      {card.tags}
                    </p>
                    <p className="text-xs sm:text-sm text-white/50 group-hover:text-white/75 transition-colors line-clamp-2 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* 4. Action Row: Direct CV Download + Full Profile Overview */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <CvDownloadButton
              id="hub-download-cv-btn"
              lang={lang}
              variant="primary"
              onMissingFileFallback={onOpenCvModal}
            />

            <button
              id="hub-view-full-profile-btn"
              onClick={() => onSelectPath('full')}
              className="group flex items-center justify-center gap-2.5 px-5 py-3 border border-white/20 hover:border-white/40 bg-[#14171B] hover:bg-[#1C2026] text-white/90 hover:text-white transition-all text-xs font-mono tracking-wider uppercase min-h-[44px] cursor-pointer"
            >
              <span>{content.hub.viewFullProfile}</span>
              <ArrowIcon className={`w-4 h-4 text-white/60 group-hover:text-white transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>

          <p className="text-xs font-mono text-white/40 tracking-wider text-center sm:text-left rtl:sm:text-right">
            {lang === 'ar' 
              ? 'تصفح مسارات التخصص التفاعلية أو استعراض السيرة الكاملة'
              : 'Interactive specialized pathways or complete CV overview'}
          </p>
        </div>
      </main>

      {/* 5. Minimal Global Footer with Verified LinkedIn, WhatsApp, Email */}
      <footer className="relative z-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com/in/mahmodelbahi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400/80" />
            <span>linkedin.com/in/mahmodelbahi</span>
          </a>
          <a
            href="https://wa.me/966570600671"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400/80" />
            <span>WhatsApp (+966 57 060 0671)</span>
          </a>
          <a
            href="mailto:mahmodbahi99@gmail.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>mahmodbahi99@gmail.com</span>
          </a>
        </div>

        <div>
          <span>© {new Date().getFullYear()} Mahmoud Elbahi</span>
        </div>
      </footer>

    </div>
  );
};
