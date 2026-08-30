import React, { useState } from 'react';
import { Language } from '../types';
import { SiteContent } from '../data/content';
import { 
  MessageSquare, 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Phone, 
  Sparkles, 
  Send 
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  content: SiteContent;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  content,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "mahmodbahi99@gmail.com";
  const whatsappNumber = "+966570600671";
  const whatsappUrl = "https://wa.me/966570600671?text=" + encodeURIComponent(
    lang === 'ar' 
      ? 'مرحباً محمود، اطلعت على موقعك المهني وأود التواصل معك بخصوص فرصة/مشروع.' 
      : 'Hello Mahmoud, I came across your career portfolio and would like to connect regarding an opportunity or project.'
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#050505] border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Contact Container */}
        <div className="p-8 sm:p-12 md:p-14 bg-[#080808] border border-neutral-800 space-y-10">
          
          <div className="max-w-2xl space-y-3 text-center mx-auto">
            <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-bold">
              08 // {lang === 'ar' ? 'بدء محادثة' : 'INITIATE DIALOGUE'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              {content.contact.title}
            </h2>
            
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed pt-1">
              {content.contact.subtitle}
            </p>
          </div>

          {/* Quick Direct Actions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* WhatsApp Primary Card */}
            <a
              id="whatsapp-direct-link"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-widest">
                    WhatsApp Direct
                  </div>
                  <div className="text-sm font-light text-white font-mono">
                    {whatsappNumber}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-light">
                    {lang === 'ar' ? 'محادثة فورية مباشرة' : 'Direct instant messaging'}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            </a>

            {/* Email Primary Card */}
            <div className="p-6 bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 transition-all duration-200 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-widest">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-light text-white font-mono hover:underline truncate block max-w-[190px] sm:max-w-[200px]"
                  >
                    {emailAddress}
                  </a>
                  <div className="text-[11px] text-neutral-400 font-light">
                    {lang === 'ar' ? 'استفسارات ومقترحات العمل' : 'Professional inquiries'}
                  </div>
                </div>
              </div>

              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
                title={content.contact.copyEmail}
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Social / Professional Profiles Bar */}
          <div className="pt-6 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              {/* LinkedIn Button */}
              <a
                id="contact-linkedin-link"
                href="https://www.linkedin.com/in/mahmodelbahi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 text-neutral-400" />
                <span>linkedin.com/in/mahmodelbahi</span>
                <span className="text-[10px] font-mono text-neutral-500">↗</span>
              </a>

              {/* GitHub Button (Placeholder link with clear label) */}
              <a
                id="contact-github-link"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-neutral-400" />
                <span>GitHub</span>
                <span className="text-[10px] font-mono text-neutral-500">↗</span>
              </a>
            </div>

            <div className="text-[11px] text-neutral-500 font-mono">
              {lang === 'ar' ? 'الرد عادة خلال 24 ساعة' : 'Typically replies within 24 hours'}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
