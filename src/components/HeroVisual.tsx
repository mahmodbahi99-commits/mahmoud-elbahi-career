import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { 
  GraduationCap, 
  Brain, 
  Cpu, 
  HeartHandshake, 
  Layers, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';

interface HeroVisualProps {
  lang: Language;
}

interface NodeData {
  id: string;
  labelEn: string;
  labelAr: string;
  icon: React.ElementType;
  angle: number; // in degrees for radial layout
  radius: number; // distance from center
  color: string;
  glow: string;
  roleEn: string;
  roleAr: string;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ lang }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [pulseTick, setPulseTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const nodes: NodeData[] = [
    {
      id: 'autism',
      labelEn: 'AUTISM',
      labelAr: 'طيف التوحد',
      icon: HeartHandshake,
      angle: 210,
      radius: 140,
      color: '#38bdf8', // sky
      glow: 'rgba(56, 189, 248, 0.4)',
      roleEn: 'Clinical IEPs, behavioral interventions & sensory strategies',
      roleAr: 'خطط فردية، تدخل سلوكي وتكامل حسي',
    },
    {
      id: 'ai',
      labelEn: 'AI',
      labelAr: 'الذكاء الاصطناعي',
      icon: Brain,
      angle: 330,
      radius: 145,
      color: '#a855f7', // purple
      glow: 'rgba(168, 85, 247, 0.4)',
      roleEn: 'Generative AI prompts, workflow automation & smart assistants',
      roleAr: 'أتمتة الأعمال، هندسة الأوامر وتوليد المحتوى',
    },
    {
      id: 'tech',
      labelEn: 'TECH',
      labelAr: 'التقنية',
      icon: Cpu,
      angle: 30,
      radius: 140,
      color: '#06b6d4', // cyan
      glow: 'rgba(6, 182, 212, 0.4)',
      roleEn: 'Full-stack web, cloud databases & institutional dashboards',
      roleAr: 'تطوير الويب، قواعد البيانات واللوحات الرقمية',
    },
    {
      id: 'product',
      labelEn: 'PRODUCT',
      labelAr: 'المنتجات',
      icon: Layers,
      angle: 90,
      radius: 145,
      color: '#10b981', // emerald
      glow: 'rgba(16, 185, 129, 0.4)',
      roleEn: 'SaaS platforms, Miyar 360, Leen transportation & digital tools',
      roleAr: 'منصات SaaS، معيار 360، منصة لين والأدوات الصفية',
    },
    {
      id: 'business',
      labelEn: 'BUSINESS',
      labelAr: 'الأعمال',
      icon: TrendingUp,
      angle: 150,
      radius: 140,
      color: '#f59e0b', // amber
      glow: 'rgba(245, 158, 11, 0.4)',
      roleEn: 'Client empathy, sales negotiation & B2B solutions',
      roleAr: 'فهم العميل، مهارات التفاوض وحلول المؤسسات',
    },
  ];

  const centerX = 200;
  const centerY = 200;

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Background ambient halo */}
      <div className="absolute inset-4 rounded-full bg-cyan-950/20 blur-3xl pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-blue-900/10 blur-2xl pointer-events-none" />

      {/* SVG Canvas for interactive nodes & connecting lines */}
      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full relative z-10 overflow-visible"
      >
        <defs>
          <filter id="glow-filter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {nodes.map((n) => (
            <linearGradient key={`grad-${n.id}`} id={`grad-${n.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor={n.color} stopOpacity="0.8" />
            </linearGradient>
          ))}
        </defs>

        {/* Orbit track */}
        <circle
          cx={centerX}
          cy={centerY}
          r={142}
          fill="none"
          stroke="#262626"
          strokeWidth="1"
          strokeDasharray="3 5"
          className="opacity-60"
        />

        {/* Cross interconnection mesh between adjacent nodes */}
        {nodes.map((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length];
          const rad1 = (node.angle * Math.PI) / 180;
          const rad2 = (nextNode.angle * Math.PI) / 180;
          const x1 = centerX + node.radius * Math.cos(rad1);
          const y1 = centerY + node.radius * Math.sin(rad1);
          const x2 = centerX + nextNode.radius * Math.cos(rad2);
          const y2 = centerY + nextNode.radius * Math.sin(rad2);

          return (
            <line
              key={`mesh-${node.id}-${nextNode.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#262626"
              strokeWidth="1"
              strokeDasharray="2 4"
              className="opacity-40"
            />
          );
        })}

        {/* Dynamic connecting lines from center to each discipline node */}
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const targetX = centerX + node.radius * Math.cos(rad);
          const targetY = centerY + node.radius * Math.sin(rad);
          const isHighlighted = activeNode === node.id || activeNode === null;

          // Animated particle position along line
          const particleT = ((pulseTick + node.angle) % 100) / 100;
          const particleX = centerX + (targetX - centerX) * particleT;
          const particleY = centerY + (targetY - centerY) * particleT;

          return (
            <g key={`line-group-${node.id}`}>
              {/* Primary connector line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={targetX}
                y2={targetY}
                stroke={node.color}
                strokeWidth={activeNode === node.id ? "2" : "1"}
                strokeOpacity={isHighlighted ? (activeNode === node.id ? 0.9 : 0.4) : 0.15}
                strokeDasharray={activeNode === node.id ? "none" : "3 3"}
                className="transition-all duration-300"
              />

              {/* Traveling light particle */}
              <circle
                cx={particleX}
                cy={particleY}
                r={activeNode === node.id ? 2.5 : 1.5}
                fill={node.color}
                opacity={isHighlighted ? 0.9 : 0.3}
              />
            </g>
          );
        })}

        {/* Central EDUCATION Node */}
        <g 
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setActiveNode(null)}
          onMouseEnter={() => setActiveNode('center')}
          onMouseLeave={() => setActiveNode(null)}
        >
          {/* Outer ring */}
          <circle
            cx={centerX}
            cy={centerY}
            r={36}
            fill="none"
            stroke="#404040"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          {/* Core circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r={30}
            fill="#0A0A0A"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          {/* Central icon */}
          <foreignObject x={centerX - 12} y={centerY - 20} width={24} height={24}>
            <div className="w-full h-full flex items-center justify-center text-white">
              <GraduationCap className="w-4 h-4" />
            </div>
          </foreignObject>
          {/* Central Label */}
          <text
            x={centerX}
            y={centerY + 14}
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="8"
            fontWeight="700"
            letterSpacing="0.1em"
            className="font-mono"
          >
            {lang === 'ar' ? 'التعليم' : 'EDUCATION'}
          </text>
        </g>

        {/* Satellite Discipline Nodes */}
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = centerX + node.radius * Math.cos(rad);
          const ny = centerY + node.radius * Math.sin(rad);
          const isActive = activeNode === node.id;
          const NodeIcon = node.icon;

          return (
            <g
              key={`node-${node.id}`}
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={() => setActiveNode(isActive ? null : node.id)}
            >
              {/* Outer halo on active */}
              {isActive && (
                <circle
                  cx={nx}
                  cy={ny}
                  r={26}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1"
                  className="animate-ping"
                  opacity="0.4"
                />
              )}

              {/* Node background */}
              <circle
                cx={nx}
                cy={ny}
                r={21}
                fill="#0A0A0A"
                stroke={isActive ? node.color : '#262626'}
                strokeWidth={isActive ? '1.5' : '1'}
                className="transition-colors duration-200"
              />

              {/* Icon */}
              <foreignObject x={nx - 9} y={ny - 14} width={18} height={18}>
                <div 
                  className="w-full h-full flex items-center justify-center transition-transform duration-200"
                  style={{ color: node.color }}
                >
                  <NodeIcon className="w-3.5 h-3.5" />
                </div>
              </foreignObject>

              {/* Node Text Label */}
              <text
                x={nx}
                y={ny + 11}
                textAnchor="middle"
                fill={isActive ? '#ffffff' : '#a3a3a3'}
                fontSize="7"
                fontWeight="700"
                letterSpacing="0.06em"
                className="font-mono transition-colors duration-200 uppercase"
              >
                {lang === 'ar' ? node.labelAr : node.labelEn}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Floating Info Pill below diagram showing interactive intersection details */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[340px] px-4 py-2.5 bg-[#0A0A0A] border border-neutral-800 shadow-2xl text-center z-20 transition-all duration-300">
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-400 uppercase tracking-widest font-mono font-bold">
          <Sparkles className="w-3 h-3 text-white" />
          <span>
            {activeNode && activeNode !== 'center'
              ? (lang === 'ar'
                  ? nodes.find((n) => n.id === activeNode)?.labelAr
                  : nodes.find((n) => n.id === activeNode)?.labelEn)
              : (lang === 'ar' ? 'تقاطع متعدد التخصصات' : 'Multidisciplinary Nexus')}
          </span>
        </div>
        <p className="text-[11px] text-neutral-300 leading-snug mt-1">
          {activeNode && activeNode !== 'center'
            ? (lang === 'ar'
                ? nodes.find((n) => n.id === activeNode)?.roleAr
                : nodes.find((n) => n.id === activeNode)?.roleEn)
            : (lang === 'ar'
                ? 'مرتكز تعليمي إكلينيكي متصل بأحدث تقنيات الذكاء الاصطناعي وتطوير المنتجات.'
                : 'Centralized clinical foundation bridged with AI, engineering & product acumen.')}
        </p>
      </div>
    </div>
  );
};
