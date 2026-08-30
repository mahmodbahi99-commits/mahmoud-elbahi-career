import React, { useState } from 'react';
import { Language, CertificateCategory, CertificateItem } from '../../../types';
import { certificatesData, CERTIFICATES_DRIVE_URL } from '../../../data/certificates';
import { 
  Award, 
  ExternalLink, 
  Clock, 
  Building2, 
  ShieldCheck, 
  Filter, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  FolderOpen,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CertificatesDashboardViewProps {
  lang: Language;
  onOpenCertificate: (certificate: CertificateItem) => void;
}

export const CertificatesDashboardView: React.FC<CertificatesDashboardViewProps> = ({
  lang,
  onOpenCertificate,
}) => {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;
  const data = certificatesData[lang];

  const [activeCategory, setActiveCategory] = useState<CertificateCategory>('all');

  const filteredItems = data.items.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'special-education') {
      return item.category === 'special-education' || item.category === 'autism' || item.category === 'aba';
    }
    return item.category === activeCategory;
  });

  const featuredCert = data.items.find((item) => item.isFeatured);

  const getCategoryStyles = (cat: CertificateCategory, isActive: boolean) => {
    switch (cat) {
      case 'special-education':
        return isActive
          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 shadow-sm shadow-emerald-500/20'
          : 'bg-[#12161C] text-white/70 hover:text-emerald-300 hover:border-emerald-500/40 border-[#242A32]';
      case 'autism':
        return isActive
          ? 'bg-blue-500/20 text-blue-300 border-blue-500/60 shadow-sm shadow-blue-500/20'
          : 'bg-[#12161C] text-white/70 hover:text-blue-300 hover:border-blue-500/40 border-[#242A32]';
      case 'aba':
        return isActive
          ? 'bg-violet-500/20 text-violet-300 border-violet-500/60 shadow-sm shadow-violet-500/20'
          : 'bg-[#12161C] text-white/70 hover:text-violet-300 hover:border-violet-500/40 border-[#242A32]';
      case 'speech-language':
        return isActive
          ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm shadow-amber-500/20'
          : 'bg-[#12161C] text-white/70 hover:text-amber-300 hover:border-amber-500/40 border-[#242A32]';
      case 'other':
        return isActive
          ? 'bg-neutral-600/30 text-white border-neutral-400/60'
          : 'bg-[#12161C] text-white/70 hover:text-white hover:border-neutral-500 border-[#242A32]';
      default:
        return isActive
          ? 'bg-white/15 text-white border-white/50'
          : 'bg-[#12161C] text-white/70 hover:text-white hover:border-[#3A4350] border-[#242A32]';
    }
  };

  const getCardAccent = (cat: CertificateCategory) => {
    switch (cat) {
      case 'special-education':
        return {
          badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
          dot: 'bg-emerald-400',
          borderHover: 'hover:border-emerald-500/40',
          indicator: 'bg-emerald-400',
        };
      case 'autism':
        return {
          badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
          dot: 'bg-blue-400',
          borderHover: 'hover:border-blue-500/40',
          indicator: 'bg-blue-400',
        };
      case 'aba':
        return {
          badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
          dot: 'bg-violet-400',
          borderHover: 'hover:border-violet-500/40',
          indicator: 'bg-violet-400',
        };
      case 'speech-language':
        return {
          badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
          dot: 'bg-amber-400',
          borderHover: 'hover:border-amber-500/40',
          indicator: 'bg-amber-400',
        };
      default:
        return {
          badge: 'bg-white/5 text-white/80 border-white/20',
          dot: 'bg-white/60',
          borderHover: 'hover:border-white/40',
          indicator: 'bg-white/60',
        };
    }
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. HEADER SECTION */}
      <section className="space-y-4 pt-2">
        
        {/* Top Tag & Archive Action */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#14171B] border border-[#242A32] text-emerald-400 text-xs font-mono font-semibold tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>{data.sectionTag}</span>
          </div>

          <a
            id="btn-header-drive-archive"
            href={CERTIFICATES_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 hover:border-emerald-500 text-emerald-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer group"
          >
            <FolderOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>{data.driveButton}</span>
            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading uppercase">
            {data.title}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-emerald-400 font-heading">
            {data.subtitle}
          </h2>
        </div>

        {/* Description & Repository banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#12161C] border border-[#242A32]">
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-2xl">
            {data.description}
          </p>

          <a
            id="btn-banner-drive-archive"
            href={CERTIFICATES_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 bg-[#181D24] hover:bg-[#202732] border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-300 hover:text-white text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 group"
          >
            <span>{isAr ? 'فتح مستودع Google Drive ↗' : 'Open Drive Archive ↗'}</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </section>

      {/* 2. HIGHLIGHTED / FEATURED CERTIFICATE: ABAT CANDIDATE */}
      {featuredCert && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-violet-400 font-bold uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{data.featuredBadge}</span>
            </span>
            <span className="text-xs font-mono text-white/40">QABA STANDARDS</span>
          </div>

          <div
            id="featured-certificate-abat"
            className="p-6 sm:p-7 bg-[#13111C] border-2 border-violet-500/40 relative overflow-hidden space-y-4"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-500 via-emerald-400 to-blue-500" />
            
            {/* Top row */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-violet-500/20">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-violet-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-violet-300 uppercase tracking-wider">
                  {data.statusCandidate}
                </span>
              </div>

              <span className="px-2.5 py-0.5 bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[10px] font-mono font-bold uppercase">
                IN SUPERVISION
              </span>
            </div>

            {/* Title & Issuer */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                {featuredCert.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-violet-300">
                {featuredCert.issuer} — {featuredCert.type}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed bg-[#0E0C16] p-4 border border-violet-500/20">
              {featuredCert.description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                id="btn-view-featured-cert"
                onClick={() => onOpenCertificate(featuredCert)}
                className="px-4 py-2 bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/50 text-violet-200 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{data.viewCertificate}</span>
                <Arrow className="w-3.5 h-3.5" />
              </button>

              <a
                href={CERTIFICATES_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-white/50 hover:text-violet-300 transition-colors flex items-center gap-1.5"
              >
                <span>{isAr ? 'متاح في الأرشيف الرسمي ↗' : 'Available in Official Archive ↗'}</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 3. INTERACTIVE CATEGORY FILTER TABS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1E242C]">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-white/40" />
            <h3 className="text-xs font-mono font-bold text-white/60 uppercase tracking-wider">
              {isAr ? 'تصفية الشهادات حسب التخصص' : 'FILTER BY CATEGORY'}
            </h3>
          </div>
          <span className="text-xs font-mono text-white/40">
            {filteredItems.length} {isAr ? 'شهادات' : 'CERTIFICATES'}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {data.filters.map((filter) => {
            const isActive = activeCategory === filter.id;
            const styleClasses = getCategoryStyles(filter.id, isActive);

            return (
              <button
                key={filter.id}
                id={`filter-btn-${filter.id}`}
                onClick={() => setActiveCategory(filter.id)}
                className={`px-3.5 py-1.5 text-xs font-mono font-semibold border transition-all cursor-pointer ${styleClasses}`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. CERTIFICATE GALLERY GRID */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((cert, idx) => {
              const accent = getCardAccent(cert.category);

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: idx * 0.04 }}
                  id={`cert-card-${cert.id}`}
                  className={`p-5 bg-[#12161C] border border-[#242A32] ${accent.borderHover} transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group`}
                >
                  <div className="space-y-3">
                    
                    {/* Top Tag & Status */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase font-bold tracking-wider border ${accent.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                        <span>{cert.categoryLabel}</span>
                      </span>

                      <Award className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white font-heading group-hover:text-emerald-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {/* Issuer & Type */}
                    <div className="space-y-1 text-xs">
                      {cert.issuer && (
                        <div className="flex items-center gap-1.5 text-white/60 font-mono">
                          <Building2 className="w-3 h-3 text-white/40 shrink-0" />
                          <span className="line-clamp-1">{cert.issuer}</span>
                        </div>
                      )}
                      
                      <div className="text-[11px] font-mono text-white/40">
                        {cert.type}
                      </div>
                    </div>

                    {/* Candidate Badge if present */}
                    {cert.statusBadge && (
                      <div className="p-2 bg-violet-500/10 border border-violet-500/30 text-[10px] font-mono text-violet-300 flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-violet-400 shrink-0" />
                        <span className="line-clamp-1">{cert.statusBadge}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 mt-4 border-t border-[#1E242C] flex items-center justify-between">
                    <button
                      id={`btn-view-cert-${cert.id}`}
                      onClick={() => onOpenCertificate(cert)}
                      className="text-xs font-mono font-semibold text-white/70 group-hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{data.viewCertificate}</span>
                      <Arrow className="w-3 h-3 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </button>

                    <a
                      href={CERTIFICATES_DRIVE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-white transition-colors p-1"
                      title={isAr ? 'فتح في Google Drive' : 'Open in Google Drive'}
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. BOTTOM ARCHIVE CTA */}
      <section className="p-6 bg-[#0E1318] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left rtl:sm:text-right">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
            {isAr ? 'مستودع الشهادات المعتمد' : 'OFFICIAL CERTIFICATE REPOSITORY'}
          </span>
          <p className="text-xs text-white/80 font-light max-w-xl">
            {data.archiveNotice}
          </p>
        </div>

        <a
          id="btn-footer-drive-archive"
          href={CERTIFICATES_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 hover:border-emerald-500 text-emerald-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2 group"
        >
          <span>{data.driveButton}</span>
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </section>

    </div>
  );
};
