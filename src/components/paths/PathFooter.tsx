import React, { useState } from 'react';
import { Language } from '../../types';
import { SiteContent } from '../../data/content';
import { MessageSquare, Mail, Linkedin, Github, Check, Copy, ArrowUpRight } from 'lucide-react';

interface PathFooterProps {
  lang: Language;
  content: SiteContent;
  onOpenCvModal: () => void;
}

export const PathFooter: React.FC<PathFooterProps> = ({
  lang,
  content,
  onOpenCvModal,
}) => {
  const [copied, setCopied] = useState(false);
  const email = 'mahmodbahi99@gmail.com';
  const whatsappNumber = '+966570600671';
  const whatsappDisplay = '+966 57 060 0671';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-16 pb-20 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto text-center sm:text-left rtl:sm:text-right">
        
        {/* Section Header */}
        <div className="flex items-center justify-center sm:justify-start rtl:sm:justify-start gap-2 mb-3">
          <span className="w-1.5 h-1.5 bg-emerald-400" />
          <span className="text-xs font-mono tracking-widest text-white/50 uppercase">
            {lang === 'ar' ? 'التواصل المباشر والفرص' : 'DIRECT CONTACT & COLLABORATION'}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 font-heading uppercase">
          {lang === 'ar' ? 'تواصل معي' : "LET'S CONNECT"}
        </h3>

        <p className="text-sm sm:text-base text-white/70 font-normal mb-8 max-w-2xl">
          {lang === 'ar'
            ? 'متاح للمشاريع النوعية والفرص المهنية والاستشارات في التربية الخاصة وتكنولوجيا التعليم والأنظمة الرقمية.'
            : 'Available for high-impact roles, EdTech collaborations, digital workflow consulting, and special education systems.'}
        </p>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mahmodelbahi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-4 bg-[#0D0F12] hover:bg-[#14171B] border border-white/10 hover:border-blue-500/40 transition-all text-left rtl:text-right"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-blue-400">01 // LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <span className="text-sm font-semibold text-white mb-0.5 font-heading">{lang === 'ar' ? 'الملف المهني' : 'LinkedIn Profile'}</span>
            <span className="text-xs font-mono text-white/60">linkedin.com/in/mahmodelbahi</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-4 bg-[#0D0F12] hover:bg-[#14171B] border border-white/10 hover:border-emerald-500/40 transition-all text-left rtl:text-right"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-emerald-400">02 // WHATSAPP</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <span className="text-sm font-semibold text-white mb-0.5 font-heading">{lang === 'ar' ? 'محادثة مباشرة' : 'Direct Chat'}</span>
            <span className="text-xs font-mono text-white/60">{whatsappDisplay}</span>
          </a>

          {/* Email */}
          <div className="group flex flex-col p-4 bg-[#0D0F12] hover:bg-[#14171B] border border-white/10 hover:border-white/30 transition-all text-left rtl:text-right">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-white/50">03 // EMAIL</span>
              <button
                onClick={() => copyToClipboard(email)}
                className="text-white/40 hover:text-white transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <a href={`mailto:${email}`} className="text-sm font-semibold text-white mb-0.5 hover:underline truncate font-heading">
              {email}
            </a>
            <span className="text-xs font-mono text-white/60">{copied ? (lang === 'ar' ? 'تم النسخ!' : 'Copied!') : (lang === 'ar' ? 'اضغط للنسخ أو الإرسال' : 'Click to send')}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
