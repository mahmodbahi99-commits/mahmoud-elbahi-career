import React from 'react';
import { Language } from '../../types';
import { Network, ArrowRight, ArrowLeft } from 'lucide-react';

interface CrossDomainConnectionProps {
  lang: Language;
  connection: {
    label: string;
    equation: string;
    text: string;
  };
}

export const CrossDomainConnection: React.FC<CrossDomainConnectionProps> = ({
  lang,
  connection,
}) => {
  return (
    <div className="my-16 p-6 sm:p-8 md:p-10 bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A] border border-white/15 relative overflow-hidden">
      
      {/* Subtle corner label */}
      <div className="flex items-center gap-2 mb-4">
        <Network className="w-4 h-4 text-white/60" />
        <span className="text-xs font-mono tracking-widest text-white/50 uppercase">
          {connection.label}
        </span>
      </div>

      {/* Connection Formula */}
      <div className="mb-4">
        <h4 className="text-lg sm:text-xl md:text-2xl font-bold font-mono tracking-tight text-white">
          {connection.equation}
        </h4>
      </div>

      {/* Rationale explanation */}
      <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light max-w-3xl">
        {connection.text}
      </p>

    </div>
  );
};
