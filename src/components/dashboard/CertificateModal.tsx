import React, { useEffect } from 'react';
import { Language, CertificateItem } from '../../types';
import { CERTIFICATES_DRIVE_URL } from '../../data/certificates';
import { 
  X, 
  ExternalLink, 
  Award, 
  Building2, 
  Tag, 
  Clock, 
  ShieldCheck, 
  FileText,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
  lang: Language;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
  lang,
}) => {
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'special-education':
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-300',
          dot: 'bg-emerald-400',
        };
      case 'autism':
        return {
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/30',
          text: 'text-blue-300',
          dot: 'bg-blue-400',
        };
      case 'aba':
        return {
          bg: 'bg-violet-500/10',
          border: 'border-violet-500/30',
          text: 'text-violet-300',
          dot: 'bg-violet-400',
        };
      case 'speech-language':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/30',
          text: 'text-amber-300',
          dot: 'bg-amber-400',
        };
      default:
        return {
          bg: 'bg-white/5',
          border: 'border-white/20',
          text: 'text-white/80',
          dot: 'bg-white/60',
        };
    }
  };

  const colors = getCategoryColor(certificate.category);

  return (
    <AnimatePresence>
      <div 
        id="certificate-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="w-full max-w-xl bg-[#101318] border-2 border-[#242A32] shadow-2xl overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top color indicator line */}
          <div className={`h-1 w-full ${certificate.isFeatured ? 'bg-gradient-to-r from-violet-500 via-emerald-400 to-blue-500' : 'bg-emerald-500/80'}`} />

          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-[#1E242C] flex items-center justify-between gap-3 bg-[#0C0F14]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#14171B] border border-[#242A32] flex items-center justify-center text-white/90">
                <Award className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                  {isAr ? 'وثيقة اعتماد مهني' : 'PROFESSIONAL CREDENTIAL'}
                </span>
                <span className="text-xs font-mono font-bold text-white/80">
                  {certificate.categoryLabel}
                </span>
              </div>
            </div>

            <button
              id="btn-close-certificate-modal"
              onClick={onClose}
              className="p-1.5 text-white/50 hover:text-white bg-[#14171B] hover:bg-[#1E242C] border border-[#242A32] rounded transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto">
            
            {/* Category & Status Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase font-bold tracking-wider border ${colors.bg} ${colors.border} ${colors.text}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                <span>{certificate.categoryLabel}</span>
              </span>

              {certificate.statusBadge && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-violet-500/15 border border-violet-500/40 text-violet-300">
                  <Clock className="w-3 h-3 text-violet-400 animate-pulse" />
                  <span>{certificate.statusBadge}</span>
                </span>
              )}
            </div>

            {/* Title */}
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading leading-tight">
                {certificate.title}
              </h2>
              {certificate.issuer && (
                <div className="flex items-center gap-2 text-xs font-mono text-white/60 pt-1">
                  <Building2 className="w-3.5 h-3.5 text-white/40" />
                  <span>{certificate.issuer}</span>
                </div>
              )}
            </div>

            {/* Credential Metadata Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#0A0D12] border border-[#1E242C] text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-white/40 uppercase block">
                  {isAr ? 'نوع التدريب / الاعتماد' : 'TRAINING TYPE'}
                </span>
                <span className="font-mono text-white/90">
                  {certificate.type}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-white/40 uppercase block">
                  {isAr ? 'مستودع الأرشيف الرسمي' : 'ARCHIVE REPOSITORY'}
                </span>
                <span className="font-mono text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Google Drive Verified</span>
                </span>
              </div>
            </div>

            {/* Description */}
            {certificate.description && (
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold block">
                  {isAr ? 'ملخص المحتوى التدريبي والكفاءة:' : 'Curriculum & Competency Overview:'}
                </span>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed bg-[#12161C] p-4 border border-[#242A32]">
                  {certificate.description}
                </p>
              </div>
            )}

            {/* Verification Note */}
            <div className="p-3.5 bg-emerald-500/5 border border-emerald-500/20 text-xs text-white/70 font-light flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p>
                {isAr
                  ? 'الوثائق الأصلية وشهادات الإتمام وساعات الإشراف محفوظة في الأرشيف الرقمي المعتمد على Google Drive.'
                  : 'Official certificates, attendance records, and supervised fieldwork documentation are hosted on the Google Drive archive.'}
              </p>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-5 sm:p-6 border-t border-[#1E242C] bg-[#0C0F14] flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              id="btn-open-original-document"
              href={CERTIFICATES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 hover:border-emerald-500 text-emerald-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>{isAr ? 'فتح الوثيقة الأصلية في الأرشيف ↗' : 'Open Original in Archive ↗'}</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 bg-[#14171B] hover:bg-[#1C2128] border border-[#242A32] text-xs font-mono text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
