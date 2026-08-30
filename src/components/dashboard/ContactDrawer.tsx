import React, { useState, useEffect } from 'react';
import { Language } from '../../types';
import { X, Mail, Phone, Linkedin, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const isAr = lang === 'ar';

  const email = 'mahmodbahi99@gmail.com';
  const whatsappNumber = '966570600671';
  const whatsappDisplay = '+966 57 060 0671';
  const linkedinUrl = 'https://www.linkedin.com/in/mahmodelbahi';

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

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: isAr ? '-100%' : '100%' }}
          animate={{ x: 0 }}
          exit={{ x: isAr ? '-100%' : '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative w-full max-w-md h-full bg-[#0D1014] border-l rtl:border-l-0 rtl:border-r border-[#242A32] shadow-2xl flex flex-col justify-between overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-6 bg-[#08090B] border-b border-[#1E242C] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-lg font-bold text-white font-heading uppercase tracking-tight">
                {isAr ? 'تواصل معي مباشرة' : "LET'S CONNECT"}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 border border-[#242A32] bg-[#14171B] hover:bg-[#1E242C] text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4 overflow-y-auto flex-1">
            <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
              {isAr 
                ? 'متاح للمناقشات المهنية، وفرص العمل النوعية، والتعاون في تطوير أنظمة التربية الخاصة والتحول الرقمي التعليمي.'
                : 'Available for high-impact roles, EdTech collaborations, digital workflow consulting, and special education systems.'}
            </p>

            {/* 1. LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-4 bg-[#12161C] hover:bg-[#161B22] border border-[#242A32] hover:border-blue-500/40 transition-all text-left rtl:text-right"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>01 // LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <span className="text-sm font-semibold text-white mb-0.5 font-heading">
                {isAr ? 'الملف المهني على لينكد إن' : 'LinkedIn Profile'}
              </span>
              <span className="text-xs font-mono text-white/60">
                linkedin.com/in/mahmodelbahi
              </span>
            </a>

            {/* 2. WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-4 bg-[#12161C] hover:bg-[#161B22] border border-[#242A32] hover:border-emerald-500/40 transition-all text-left rtl:text-right"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>02 // WHATSAPP</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <span className="text-sm font-semibold text-white mb-0.5 font-heading">
                {isAr ? 'محادثة مباشرة عبر واتساب' : 'Direct WhatsApp Chat'}
              </span>
              <span className="text-xs font-mono text-white/60">
                {whatsappDisplay}
              </span>
            </a>

            {/* 3. Email */}
            <div className="group flex flex-col p-4 bg-[#12161C] hover:bg-[#161B22] border border-[#242A32] hover:border-white/40 transition-all text-left rtl:text-right">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                  <Mail className="w-3.5 h-3.5" />
                  <span>03 // EMAIL</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a 
                href={`mailto:${email}`} 
                className="text-sm font-semibold text-white mb-0.5 hover:underline font-heading truncate"
              >
                {email}
              </a>
              <span className="text-xs font-mono text-white/60">
                {copiedEmail ? (isAr ? 'تم النسخ للحافظة!' : 'Copied to clipboard!') : (isAr ? 'اضغط للإرسال أو النسخ' : 'Click to send email')}
              </span>
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 bg-[#08090B] border-t border-[#1E242C] flex items-center justify-between">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              {isAr ? 'الاستجابة خلال 24 ساعة' : 'Response within 24h'}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-colors cursor-pointer"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
