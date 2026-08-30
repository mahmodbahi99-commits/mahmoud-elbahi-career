import React, { useState } from 'react';
import { Language } from '../../types';
import { motion } from 'motion/react';
import { User, Activity, GraduationCap, Cpu, TrendingUp } from 'lucide-react';

interface HeroNetworkVisualProps {
  lang: Language;
}

export const HeroNetworkVisual: React.FC<HeroNetworkVisualProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      id: 0,
      title: isAr ? 'الطفل / الطالب' : 'Student',
      subtitle: isAr ? 'نقطة الانطلاق الإنسانية' : 'Human Center',
      icon: User,
      color: 'emerald',
      borderColor: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]',
      textColor: 'text-emerald-400',
      dotColor: 'bg-emerald-400',
      bgGlow: 'from-emerald-500/10 to-transparent',
    },
    {
      id: 1,
      title: isAr ? 'التقييم والتشخيص' : 'Assessment',
      subtitle: isAr ? 'قياس القدرات والاحتياج' : 'Diagnostic Matrix',
      icon: Activity,
      color: 'teal',
      borderColor: 'border-teal-500/30',
      activeBorder: 'border-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.25)]',
      textColor: 'text-teal-400',
      dotColor: 'bg-teal-400',
      bgGlow: 'from-teal-500/10 to-transparent',
    },
    {
      id: 2,
      title: isAr ? 'التربية والتدخل' : 'Education',
      subtitle: isAr ? 'خطة فردية (IEP) وسلوك' : 'IEP & Intervention',
      icon: GraduationCap,
      color: 'emerald',
      borderColor: 'border-emerald-500/30',
      activeBorder: 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]',
      textColor: 'text-emerald-300',
      dotColor: 'bg-emerald-300',
      bgGlow: 'from-emerald-500/10 to-transparent',
    },
    {
      id: 3,
      title: isAr ? 'التقنية والأنظمة' : 'Technology',
      subtitle: isAr ? 'أتمتة وتوثيق رقمي' : 'Digital Systems',
      icon: Cpu,
      color: 'blue',
      borderColor: 'border-blue-500/30',
      activeBorder: 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.25)]',
      textColor: 'text-blue-400',
      dotColor: 'bg-blue-400',
      bgGlow: 'from-blue-500/10 to-transparent',
    },
    {
      id: 4,
      title: isAr ? 'الأثر والتطور' : 'Progress',
      subtitle: isAr ? 'نتائج موثقة ومستدامة' : 'Verified Growth',
      icon: TrendingUp,
      color: 'violet',
      borderColor: 'border-violet-500/30',
      activeBorder: 'border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.25)]',
      textColor: 'text-violet-400',
      dotColor: 'bg-violet-400',
      bgGlow: 'from-violet-500/10 to-transparent',
    },
  ];

  return (
    <div className="relative w-full p-5 sm:p-6 md:p-7 bg-[#0D0F12] border border-white/[0.08] rounded-none overflow-hidden">
      
      {/* Subtle ambient gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] to-transparent pointer-events-none" />

      {/* Top Header info */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-white/50 uppercase">
            {isAr ? 'منظومة الأثر المتكاملة' : 'INTEGRATED IMPACT NETWORK'}
          </span>
        </div>
        <span className="text-[10px] font-mono text-white/30 uppercase">
          {isAr ? 'التربية × التقنية' : 'Education × Tech'}
        </span>
      </div>

      {/* Vertical Interactive Flow Pipeline with Animated Connectors */}
      <div className="relative space-y-3">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isActive = activeNode === node.id;

          return (
            <div key={node.id} className="relative">
              {/* Connector line between steps */}
              {idx < nodes.length - 1 && (
                <div className="absolute left-6 rtl:left-auto rtl:right-6 top-11 bottom--3 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-white/5 z-0" />
              )}

              {/* Node Card */}
              <motion.div
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`relative z-10 p-3 sm:p-3.5 bg-[#14171B] border ${
                  isActive ? node.activeBorder : node.borderColor
                } transition-all duration-200 cursor-pointer flex items-center justify-between group`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-8 h-8 rounded-none border border-white/10 bg-[#08090B] flex items-center justify-center shrink-0 ${
                      isActive ? node.textColor : 'text-white/60'
                    } transition-colors`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white tracking-wide font-heading">
                        {node.title}
                      </span>
                      <span className={`w-1 h-1 rounded-full ${node.dotColor}`} />
                    </div>
                    <p className="text-[11px] font-mono text-white/50 leading-tight">
                      {node.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-white/30 group-hover:text-white/70 transition-colors">
                  0{idx + 1}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Bottom telemetry indicator */}
      <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-white/40">
        <span>{isAr ? 'بيانات مترابطة وموثقة' : 'Traceable clinical & tech data'}</span>
        <span className="text-emerald-400/80">● {isAr ? 'نشط' : 'CONNECTED'}</span>
      </div>

    </div>
  );
};
