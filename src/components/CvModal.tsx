import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { 
  X, 
  FileDown, 
  FileText,
  ExternalLink,
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Mail, 
  Linkedin,
  ShieldCheck, 
  GraduationCap, 
  Award, 
  Layers 
} from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  content: SiteContent;
}

export const CvModal: React.FC<CvModalProps> = ({
  isOpen,
  onClose,
  lang,
  content,
}) => {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'notice'>('idle');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadClick = async () => {
    setDownloadStatus('downloading');
    try {
      // Check if file exists
      const response = await fetch('/Mahmoud-Elbahi-CV.pdf', { method: 'HEAD' });
      if (response.ok) {
        const ct = response.headers.get('content-type');
        if (ct && ct.includes('text/html')) {
          setDownloadStatus('notice');
          return;
        }
        const link = document.createElement('a');
        link.href = '/Mahmoud-Elbahi-CV.pdf';
        link.download = 'Mahmoud-Elbahi-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadStatus('idle');
      } else {
        // Gracefully notify user without breaking
        setDownloadStatus('notice');
      }
    } catch {
      setDownloadStatus('notice');
    }
  };

  const whatsappUrl = "https://wa.me/966570600671?text=" + encodeURIComponent(
    lang === 'ar' 
      ? 'مرحباً محمود، أود الحصول على نسخة حديثة من سيرتك الذاتية (CV).' 
      : 'Hello Mahmoud, I would like to request the latest copy of your CV.'
  );

  return (
    <div
      id="cv-download-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#080808] border border-neutral-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#0a0a0a] border-b border-neutral-800 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-widest">
              Curriculum Vitae
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-white">
              {content.cvModal.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              {content.cvModal.description}
            </p>
          </div>

          <button
            id="close-cv-modal-btn"
            onClick={onClose}
            className="p-2 border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close CV modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body: Verified Credentials & Highlights */}
        <div className="p-6 sm:p-8 space-y-6 text-sm text-neutral-300 font-light leading-relaxed max-h-[70vh] overflow-y-auto">
          
          {/* Action Button & Notice Box */}
          <div className="space-y-3 p-5 bg-[#0d0d0d] border border-neutral-800">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="space-y-0.5 font-mono">
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                  PDF FILE: /Mahmoud-Elbahi-CV.pdf
                </div>
                <div className="text-xs text-neutral-400 font-sans">
                  {lang === 'ar' ? 'ملف السيرة الذاتية المهني الرسمي' : 'Official professional document'}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* View CV */}
                <a
                  id="modal-pdf-view-action-btn"
                  href="/Mahmoud-Elbahi-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-neutral-900 border border-neutral-700 text-white font-mono font-bold uppercase tracking-widest text-[10px] hover:bg-neutral-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{lang === 'ar' ? 'عرض السيرة الذاتية ↗' : 'View CV ↗'}</span>
                </a>

                {/* Download CV */}
                <a
                  id="modal-pdf-download-action-btn"
                  href="/Mahmoud-Elbahi-CV.pdf"
                  download="Mahmoud-Elbahi-CV.pdf"
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'تحميل PDF' : 'Download PDF'}</span>
                </a>
              </div>
            </div>

            {/* Graceful notice if file pending upload to public root */}
            {downloadStatus === 'notice' && (
              <div className="pt-3 border-t border-neutral-800 text-xs text-neutral-300 flex items-start gap-2 animate-in fade-in duration-200">
                <AlertCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="font-light">
                    {lang === 'ar'
                      ? 'ملف PDF مخصص ليتم وضعه في المسار: /public/Mahmoud-Elbahi-CV.pdf. يمكنك طلب نسخة رقمية مباشرة وفورية عبر واتساب أو البريد الإلكتروني أدناه:'
                      : 'The PDF is structured for /public/Mahmoud-Elbahi-CV.pdf. For an instant direct copy, connect with Mahmoud directly via WhatsApp or Email below:'}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px]">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 transition-colors uppercase tracking-wider"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp (+966570600671)</span>
                    </a>
                    <a
                      href="mailto:mahmodbahi99@gmail.com?subject=CV%20Request%20-%20Mahmoud%20Elbahi"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 transition-colors uppercase tracking-wider"
                    >
                      <Mail className="w-3 h-3" />
                      <span>mahmodbahi99@gmail.com</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mahmodelbahi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 transition-colors uppercase tracking-wider"
                    >
                      <Linkedin className="w-3 h-3 text-blue-400" />
                      <span>linkedin.com/in/mahmodelbahi</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Summary of Credentials on CV */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
              {content.cvModal.previewSummary}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 bg-neutral-900/60 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-300 font-bold uppercase tracking-wider text-[10px] font-mono">
                  <GraduationCap className="w-3 h-3 text-white" />
                  <span>{lang === 'ar' ? 'الدرجة العلمية' : 'Education'}</span>
                </div>
                <div className="text-white font-light">B.Sc. Disability & Rehabilitation (Autism)</div>
                <div className="text-neutral-500 text-[11px] font-mono">Zagazig University</div>
              </div>

              <div className="p-4 bg-neutral-900/60 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-300 font-bold uppercase tracking-wider text-[10px] font-mono">
                  <Award className="w-3 h-3 text-white" />
                  <span>{lang === 'ar' ? 'الاعتمادات' : 'Certifications'}</span>
                </div>
                <div className="text-white font-light">{lang === 'ar' ? 'مرشح ABAT • رخصة مهنية تعليمية' : 'ABAT Candidate • Saudi Teaching License'}</div>
                <div className="text-neutral-500 text-[11px] font-mono">ABA, Oral Motor, Sensory Integration, IEP</div>
              </div>

              <div className="p-4 bg-neutral-900/60 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-300 font-bold uppercase tracking-wider text-[10px] font-mono">
                  <ShieldCheck className="w-3 h-3 text-white" />
                  <span>{lang === 'ar' ? 'الخبرات' : 'Experience'}</span>
                </div>
                <div className="text-white font-light">Special Ed Teacher & Tech Supervisor</div>
                <div className="text-neutral-500 text-[11px] font-mono">Al-Furqan Schools, Taqaddum, Vodafone</div>
              </div>

              <div className="p-4 bg-neutral-900/60 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-300 font-bold uppercase tracking-wider text-[10px] font-mono">
                  <Layers className="w-3 h-3 text-white" />
                  <span>{lang === 'ar' ? 'الأنظمة والمنتجات' : 'Platforms'}</span>
                </div>
                <div className="text-white font-light">Miyar 360 • Leen • AI SaaS Generator</div>
                <div className="text-neutral-500 text-[11px] font-mono">React, Tailwind, Firebase, GenAI</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#0a0a0a] border-t border-neutral-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold uppercase tracking-widest text-[10px] transition-colors cursor-pointer"
          >
            {content.caseStudyModal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
