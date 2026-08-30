import React, { useEffect, useState } from 'react';

export const HeroAmbientBackground: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden z-0" 
      aria-hidden="true"
    >
      {/* Subtle ambient light meshes */}
      <div 
        className={`absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-500/[0.04] via-blue-500/[0.03] to-transparent blur-3xl ${
          prefersReducedMotion ? '' : 'animate-pulse'
        }`}
        style={{ animationDuration: '8s' }}
      />
      <div 
        className={`absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-violet-500/[0.035] via-amber-500/[0.025] to-transparent blur-3xl ${
          prefersReducedMotion ? '' : 'animate-pulse'
        }`}
        style={{ animationDuration: '11s', animationDelay: '2s' }}
      />

      {/* Floating subtle grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />

      {/* Very subtle linear gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
    </div>
  );
};
