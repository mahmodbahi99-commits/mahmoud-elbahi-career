import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { FileDown, Download, AlertCircle, CheckCircle2 } from 'lucide-react';

export interface CvDownloadButtonProps {
  lang: Language;
  variant?: 'primary' | 'secondary' | 'utility' | 'nav' | 'full-profile';
  customLabel?: string;
  className?: string;
  onMissingFileFallback?: () => void;
  id?: string;
  showIcon?: boolean;
}

// Global cache for PDF availability to avoid redundant network probes
let isFileAvailableCache: boolean | null = null;

export const checkPdfAvailability = async (): Promise<boolean> => {
  if (isFileAvailableCache !== null) return isFileAvailableCache;
  try {
    const response = await fetch('/Mahmoud-Elbahi-CV.pdf', { method: 'HEAD' });
    if (response.ok) {
      const contentType = response.headers.get('content-type');
      // If SPA returns HTML fallback index.html for 404s, it is not a real PDF
      if (contentType && contentType.includes('text/html')) {
        isFileAvailableCache = false;
      } else {
        isFileAvailableCache = true;
      }
    } else {
      isFileAvailableCache = false;
    }
  } catch {
    isFileAvailableCache = false;
  }
  return isFileAvailableCache;
};

export const CvDownloadButton: React.FC<CvDownloadButtonProps> = ({
  lang,
  variant = 'primary',
  customLabel,
  className = '',
  onMissingFileFallback,
  id,
  showIcon = true,
}) => {
  const isAr = lang === 'ar';
  const [isAvailable, setIsAvailable] = useState<boolean | null>(isFileAvailableCache);
  const [showNotice, setShowNotice] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    checkPdfAvailability().then((available) => {
      if (isMounted) {
        setIsAvailable(available);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute standard labels based on variant and language
  const getLabel = () => {
    if (customLabel) return customLabel;

    switch (variant) {
      case 'utility':
        return isAr ? 'تحميل السيرة الذاتية ↓' : 'Download CV ↓';
      case 'full-profile':
        return isAr ? 'تحميل السيرة الذاتية الكاملة' : 'DOWNLOAD FULL CV';
      case 'nav':
        return isAr ? 'تحميل السيرة الذاتية' : 'DOWNLOAD CV';
      case 'primary':
      case 'secondary':
      default:
        return isAr ? 'تحميل السيرة الذاتية' : 'DOWNLOAD CV';
    }
  };

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    // Re-verify availability
    const available = await checkPdfAvailability();
    setIsAvailable(available);

    if (!available) {
      e.preventDefault();
      setShowNotice(true);
      if (onMissingFileFallback) {
        onMissingFileFallback();
      }
      setTimeout(() => setShowNotice(false), 4000);
      return;
    }

    // If available, native download proceeds via anchor download attribute
  };

  // Styling per variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'px-5 py-3 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 border border-white min-h-[44px]';
      case 'secondary':
        return 'px-5 py-3 bg-[#0A0A0A] text-white/90 font-mono text-xs font-medium tracking-widest uppercase hover:bg-[#141414] hover:text-white border border-white/20 hover:border-white/40 min-h-[44px]';
      case 'utility':
        return 'px-3 py-2 bg-white/[0.03] hover:bg-white/[0.08] text-white/80 hover:text-white font-mono text-xs tracking-wider border border-white/10 hover:border-white/30 min-h-[38px]';
      case 'nav':
        return 'px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white font-mono text-xs font-medium border border-white/10 hover:border-white/25 min-h-[36px]';
      case 'full-profile':
        return 'px-6 py-3.5 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 border border-white min-h-[44px]';
      default:
        return 'px-5 py-3 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 border border-white min-h-[44px]';
    }
  };

  const missingNoticeText = isAr
    ? 'ملف السيرة الذاتية قيد التجهيز'
    : 'CV PDF coming soon';

  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Real Anchor Tag for standard HTML download */}
      <a
        id={id || `cv-download-btn-${variant}`}
        href="/Mahmoud-Elbahi-CV.pdf"
        download="Mahmoud-Elbahi-CV.pdf"
        onClick={handleClick}
        aria-label={
          isAvailable === false
            ? `${getLabel()} (${missingNoticeText})`
            : getLabel()
        }
        className={`inline-flex items-center justify-center gap-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white cursor-pointer select-none ${getVariantStyles()} ${className}`}
      >
        {showIcon && (
          variant === 'utility' ? (
            <Download className="w-3.5 h-3.5 shrink-0" />
          ) : (
            <FileDown className="w-3.5 h-3.5 shrink-0" />
          )
        )}
        <span className="truncate">{getLabel()}</span>
      </a>

      {/* Non-intrusive tooltip if file is pending upload */}
      {showNotice && (
        <div
          role="status"
          aria-live="polite"
          className="absolute -bottom-10 z-50 px-3 py-1.5 bg-[#141414] border border-white/20 text-white font-mono text-[11px] whitespace-nowrap shadow-xl flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1"
        >
          <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>{missingNoticeText}</span>
        </div>
      )}
    </div>
  );
};
