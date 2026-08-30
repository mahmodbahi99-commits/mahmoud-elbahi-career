import React from 'react';
import { Language, EducationExperienceItem } from '../../../types';
import { SiteContent } from '../../../data/content';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Cpu, 
  GraduationCap, 
  School, 
  Database, 
  LayoutDashboard, 
  FileText, 
  Bot, 
  Workflow, 
  Code, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';

interface ExperienceDashboardViewProps {
  lang: Language;
  content: SiteContent;
  onOpenExperienceDetail: (exp: EducationExperienceItem) => void;
}

export const ExperienceDashboardView: React.FC<ExperienceDashboardViewProps> = ({
  lang,
  content,
  onOpenExperienceDetail,
}) => {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;
  const edu = content.educationPath;

  // Find roles
  const supervisorExp = edu.experienceItems.find((e) => e.id === 'al-furqan-supervisor') || {
    id: 'al-furqan-supervisor',
    role: isAr ? 'مشرف تقني' : 'Technical Supervisor',
    organization: isAr ? 'مدارس الفرقان الأهلية' : 'Al-Furqan Private Schools',
    location: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia',
    period: isAr ? '2023 – حتى الآن (الدور الحالي)' : '2023 – Present (Current Role)',
    employmentType: isAr ? 'الدور الحالي' : 'Current Role',
    shortSummary: isAr
      ? 'مسؤول حالياً عن دعم العمليات التقنية ومبادرات التحول الرقمي داخل البيئة المدرسية، وترجمة الاحتياجات التعليمية والإدارية الواقعية إلى أنظمة ومسارات عمل وأدوات رقمية عملية.'
      : 'Currently responsible for supporting technology operations and digital transformation initiatives within the school environment, translating real educational and administrative needs into practical digital systems, workflows, and tools.',
    points: [
      isAr ? 'التحول الرقمي: دعم مبادرات التحول الرقمي في مسارات العمل المدرسية، وتصميم مسارات عمل رقمية عملية، وتسهيل الانتقال من النماذج الورقية إلى الأنظمة المنظمة.' : 'Digital Transformation: Supporting school-wide digital initiatives, identifying operational bottlenecks, designing practical digital workflows, and transitioning from manual processes to structured digital systems.',
      isAr ? 'تكنولوجيا التعليم: تطوير حلول رقمية تدعم عمليات التربية الخاصة، وتنظيم تدفق بيانات الطلاب، وأتمتة الحضور، والخطط الفردية IEP، والجلسات، والتقارير.' : 'Educational Technology: Developing digital solutions for Special Education operations, organizing student information workflows, and streamlining attendance, IEPs, session logs, and reporting.',
      isAr ? 'الأنظمة ولوحات التحكم: تصميم لوحات تحكم تعليمية ومسارات عمل معتمدة على البيانات لتعزيز إمكانية وصول المعلمين والإدارة للبيانات.' : 'Systems & Dashboards: Designing educational dashboards, data-driven workflows, and progress trackers to maximize data accessibility for teachers and administrators.',
      isAr ? 'الذكاء الاصطناعي والأتمتة: توظيف أدوات الذكاء الاصطناعي لرفع الإنتاجية، وبناء نماذج أولية لأدوات رقمية تعالج تحديات واقعية في البيئة المدرسية.' : 'AI & Automation: Deploying generative AI tools for productivity, designing prompt workflows for documentation, and prototyping rapid digital utilities tailored to school needs.',
    ],
    skills: [
      'Digital Transformation',
      'Educational Systems',
      'React & Firebase',
      'AI Workflow Automation',
      'Educational Dashboards',
      'Staff Enablement',
    ],
  };

  const specialEdTeacherExp = edu.experienceItems.find((e) => e.id === 'al-furqan' || e.id === 'alfurqan') || edu.experienceItems[0];
  const otherExperiences = edu.experienceItems.filter((e) => e.id !== 'al-furqan-supervisor' && e.id !== 'al-furqan' && e.id !== 'alfurqan');

  // 4 Structured Technical Supervisor Responsibility Pillars
  const supervisorPillars = [
    {
      id: 'dt',
      title: isAr ? 'التحول الرقمي' : 'Digital Transformation',
      sub: isAr ? 'مبادرات وأتمتة مسارات العمل' : 'School-Wide Workflows & Systems',
      icon: Workflow,
      color: 'border-blue-500/30 text-blue-400',
      items: isAr
        ? [
            'دعم مبادرات التحول الرقمي عبر مختلف مسارات العمل المدرسية.',
            'تحديد العمليات التشغيلية والتعليمية القابلة للتطوير والتحسين التقني.',
            'تصميم وتطبيق مسارات عمل رقمية عملية ومرنة.',
            'دعم الانتقال السلس من العمليات اليدوية والورقية إلى أنظمة رقمية منظمة.',
          ]
        : [
            'Supporting digital transformation initiatives across school workflows.',
            'Identifying operational and educational processes that can be improved through technology.',
            'Designing and implementing practical digital workflows.',
            'Supporting the transition from manual processes to structured digital systems.',
          ],
    },
    {
      id: 'edtech',
      title: isAr ? 'تكنولوجيا التعليم' : 'Educational Technology',
      sub: isAr ? 'دعم التربية الخاصة وتمكين الكادر' : 'SEN Operations & Staff Support',
      icon: GraduationCap,
      color: 'border-cyan-500/30 text-cyan-400',
      items: isAr
        ? [
            'تطوير حلول رقمية تدعم عمليات التربية الخاصة الميدانية.',
            'تنظيم معلومات الطلاب وهيكلة تدفق البيانات التعليمية.',
            'دعم العمليات الرقمية للحضور، والخطط الفردية IEP، والجلسات، والتوثيق والتقارير.',
            'مساعدة الكادر التعليمي والإداري على تبني واستخدام الأدوات الرقمية بفاعلية.',
          ]
        : [
            'Developing digital solutions that support Special Education operations.',
            'Organizing student information and educational data workflows.',
            'Supporting digital processes related to attendance, IEPs, sessions, documentation, and reporting.',
            'Helping staff adopt and use digital tools effectively.',
          ],
    },
    {
      id: 'dashboards',
      title: isAr ? 'الأنظمة ولوحات التحكم' : 'Systems & Dashboards',
      sub: isAr ? 'بيانات الطلاب والتحليلات البصرية' : 'Student Data & Visual Telemetry',
      icon: LayoutDashboard,
      color: 'border-blue-500/30 text-blue-300',
      items: isAr
        ? [
            'تصميم لوحات تحكم تعليمية ومسارات عمل معتمدة على البيانات.',
            'تطوير نظم متماسكة لتنظيم ملفات الطلاب والعمليات التعليمية.',
            'تحسين إمكانية الوصول إلى البيانات التعليمية للمعلمين والإدارة وأولياء الأمور.',
            'أتمتة استخراج تقارير الإنجاز والمعالم النمائية.',
          ]
        : [
            'Designing educational dashboards and data-driven workflows.',
            'Developing systems to organize student information and educational processes.',
            'Improving accessibility of educational data for teachers and administrators.',
            'Automating progress tracking and milestone generation.',
          ],
    },
    {
      id: 'ai',
      title: isAr ? 'الذكاء الاصطناعي والأتمتة' : 'AI & Automation',
      sub: isAr ? 'تطبيقات الذكاء الاصطناعي والإنتاجية' : 'AI Workflows & Rapid Prototyping',
      icon: Bot,
      color: 'border-violet-500/30 text-violet-400',
      items: isAr
        ? [
            'توظيف أدوات الذكاء الاصطناعي لرفع الإنتاجية وكفاءة مسارات العمل التعليمية.',
            'استكشاف حلول الذكاء الاصطناعي لإعداد المحتوى، والتوثيق، والتحليل، والمهام التشغيلية.',
            'بناء نماذج أولية لأدوات رقمية لمعالجة المشكلات الواقعية في البيئة المدرسية.',
            'هندسة أوامر موجهة (Prompts) لتسريع إعداد مسودات الخطط الفردية IEP.',
          ]
        : [
            'Using AI tools to improve productivity and educational workflows.',
            'Exploring AI-assisted solutions for content creation, documentation, analysis, and operational tasks.',
            'Prototyping digital tools based on real problems identified within the school environment.',
            'Deploying structured prompt pipelines to assist IEP formulation and documentation.',
          ],
    },
  ];

  // Digital Transformation Pipeline Steps
  const dtPipeline = [
    {
      step: '01',
      title: isAr ? 'تحديد المشكلة' : 'IDENTIFY',
      sub: isAr ? 'تحدي تعليمي أو إداري' : 'Educational / Admin Problem',
      color: 'border-blue-500/30 text-blue-400',
    },
    {
      step: '02',
      title: isAr ? 'تصميم المسار' : 'DESIGN',
      sub: isAr ? 'مسار عمل رقمي منظم' : 'Digital Workflow Blueprint',
      color: 'border-blue-500/40 text-blue-300',
    },
    {
      step: '03',
      title: isAr ? 'بناء النظام' : 'BUILD',
      sub: isAr ? 'أداة أو نظام رقمي متكامل' : 'Custom Tool / System',
      color: 'border-cyan-500/40 text-cyan-300',
    },
    {
      step: '04',
      title: isAr ? 'التطبيق والتمكين' : 'IMPLEMENT',
      sub: isAr ? 'في البيئة المدرسية' : 'School Environment Adoption',
      color: 'border-emerald-500/40 text-emerald-300',
    },
    {
      step: '05',
      title: isAr ? 'التحسين المستمر' : 'IMPROVE',
      sub: isAr ? 'رفع الكفاءة وسهولة الوصول' : 'Workflow & Data Access',
      color: 'border-emerald-400 text-emerald-400',
    },
  ];

  // Digital Systems & Tools
  const systemsList = [
    {
      title: isAr ? 'نظام إدارة الطلاب' : 'Student Management System',
      desc: isAr ? 'سجلات الطلاب، الحضور، الخطط الفردية IEP، الجلسات، والتقارير' : 'Student profiles, Attendance, IEP, Sessions, Reports',
      tag: isAr ? 'نظام عمليات' : 'OPERATIONS',
      icon: Database,
    },
    {
      title: isAr ? 'لوحة التحكم التعليمية' : 'Educational Dashboard',
      desc: isAr ? 'بيانات الطلاب، تتبع التقدم، التقارير والتحليلات البصرية' : 'Student data, Progress tracking, Reporting, Visual analytics',
      tag: isAr ? 'لوحة تحليلات' : 'ANALYTICS',
      icon: LayoutDashboard,
    },
    {
      title: isAr ? 'مسار الخطط الفردية IEP الرقمي' : 'IEP Digital Workflow',
      desc: isAr ? 'أهداف الطلاب، المعالم النمائية، التتبع والتوثيق المنظم' : 'Student goals, Objectives, Progress tracking, Documentation',
      tag: isAr ? 'التربية الخاصة' : 'SPECIAL EDUCATION',
      icon: FileText,
    },
    {
      title: isAr ? 'مسارات العمل التعليمية الرقمية' : 'Digital Educational Workflows',
      desc: isAr ? 'التوثيق، تنظيم البيانات، مسارات عمل المعلمين والتقارير' : 'Documentation, Data organization, Staff workflows, Reporting',
      tag: isAr ? 'التحول الرقمي' : 'DIGITAL WORKFLOW',
      icon: Workflow,
    },
  ];

  // Technical Skills Badges
  const techSkills = [
    'React',
    'Firebase',
    'JavaScript',
    'Tailwind CSS',
    'Google AI Studio',
    'AI Tools',
    'Google Sheets',
    'Canva',
    'Notion',
  ];

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HEADER SECTION */}
      <section className="space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#14171B] border border-[#242A32] text-emerald-400 text-xs font-mono font-semibold tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>05 // PROFESSIONAL EXPERIENCE</span>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading uppercase">
            {isAr ? 'الخبرات المهنية' : 'EXPERIENCE'}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-emerald-400 font-heading">
            {isAr ? 'التربية الخاصة ✕ الإشراف التقني والتحول الرقمي' : 'Special Education ✕ Technical Supervision & Digital Transformation'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-4xl">
          {isAr
            ? 'سجل مهني يجمع بين الممارسة الميدانية العميقة في التربية الخاصة واضطراب طيف التوحد، وبين الإشراف التقني وهندسة الأنظمة والتحول الرقمي في البيئات المدرسية.'
            : 'A verified professional track record combining deep frontline Special Education practice in Autism with Technical Supervision, digital transformation, and educational systems engineering.'}
        </p>
      </section>

      {/* 2. CURRENT EMPLOYER & DUAL-ROLE SHOWCASE: AL-FURQAN PRIVATE SCHOOLS */}
      <section className="space-y-6">
        
        {/* Section Title & Connector Banner */}
        <div className="p-4 bg-[#090D12] border border-[#1E2632] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{isAr ? 'التربية الخاصة' : 'Education'}</span>
            </div>
            <span className="text-white/40 font-mono">✕</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>{isAr ? 'التقنية والإشراف' : 'Technology'}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-white/70">
            <School className="w-3.5 h-3.5 text-white/50" />
            <span className="font-bold text-white">{isAr ? 'مدارس الفرقان الأهلية' : 'Al-Furqan Private Schools'}</span>
            <span className="text-white/30">•</span>
            <span className="text-emerald-400">{isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold">
              {isAr ? 'حالي' : 'CURRENT'}
            </span>
          </div>
        </div>

        {/* ROLE 1: TECHNICAL SUPERVISOR (TECHNOLOGY BLUE THEME) */}
        <div
          id="experience-card-technical-supervisor"
          className="p-6 sm:p-8 bg-[#091018] border-2 border-blue-500/40 relative overflow-hidden space-y-6"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400" />
          
          {/* Top Status & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-blue-500/20">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>{isAr ? 'الدور الحالي // الإشراف والتقنية' : 'CURRENT ROLE // TECHNOLOGY SUPERVISION'}</span>
              </span>
              <span className="px-2 py-0.5 bg-[#141C28] border border-blue-500/30 text-blue-300 text-[10px] font-mono font-bold">
                02 // TECHNOLOGY
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-blue-300/80">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {isAr ? '2023 – حتى الآن' : '2023 – Present'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
              </span>
            </div>
          </div>

          {/* Role Title & Description */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-2">
                <span className="text-blue-400">🔵</span>
                <span>{isAr ? 'المشرف التقني' : 'Technical Supervisor'}</span>
              </h3>
              <p className="text-sm font-mono text-blue-300/90 font-semibold">
                {isAr ? 'مدارس الفرقان الأهلية — المملكة العربية السعودية' : 'Al-Furqan Private Schools — Saudi Arabia'}
              </p>
            </div>

            <blockquote className="p-4 bg-[#0F1824] border-l-2 rtl:border-l-0 rtl:border-r-2 border-blue-400 text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              {isAr
                ? 'مسؤول حالياً عن دعم العمليات التقنية ومبادرات التحول الرقمي داخل البيئة المدرسية، وترجمة الاحتياجات التعليمية والإدارية الواقعية إلى أنظمة ومسارات عمل وأدوات رقمية عملية.'
                : 'Currently responsible for supporting technology operations and digital transformation initiatives within the school environment, translating real educational and administrative needs into practical digital systems, workflows, and tools.'}
            </blockquote>
          </div>

          {/* 4 Structured Responsibility Pillars */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{isAr ? 'ركائز المسؤوليات ومجالات العمل' : 'FOUR CORE RESPONSIBILITY PILLARS'}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supervisorPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className={`p-4 bg-[#0D1520] border ${pillar.color} space-y-3 hover:bg-[#101A28] transition-all`}
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <h4 className="text-sm font-bold text-white font-heading">
                          {pillar.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-white/40 uppercase">
                        {pillar.id}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs text-white/80 font-light leading-relaxed">
                      {pillar.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FEATURED ACHIEVEMENT: DIGITAL TRANSFORMATION PIPELINE */}
          <div className="p-5 bg-[#0B1522] border border-blue-500/30 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-blue-500/20">
              <div>
                <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-widest block">
                  {isAr ? 'الإنجاز الأبرز' : 'FEATURED ACHIEVEMENT'}
                </span>
                <h4 className="text-base font-bold text-white font-heading">
                  {isAr ? 'التحول الرقمي: من المشكلات التعليمية إلى الحلول الرقمية' : 'DIGITAL TRANSFORMATION: From Educational Problems → Digital Solutions'}
                </h4>
              </div>
              <span className="text-xs font-mono text-blue-300/70">END-TO-END METHODOLOGY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-xs font-mono">
              {dtPipeline.map((node, nIdx) => (
                <div
                  key={nIdx}
                  className={`p-3 bg-[#111A27] border ${node.color} flex flex-col justify-between gap-2`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white/50">{node.step} //</span>
                    <Arrow className="w-3.5 h-3.5 text-blue-400/50 hidden lg:block" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs">{node.title}</div>
                    <div className="text-[11px] text-white/60 font-light">{node.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DIGITAL SYSTEMS & TOOLS SUBSECTION */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-blue-500/20">
              <h4 className="text-xs font-mono uppercase tracking-widest text-blue-300 font-bold flex items-center gap-2">
                <Database className="w-3.5 h-3.5" />
                <span>{isAr ? 'الأنظمة والأدوات الرقمية المطورة' : 'DIGITAL SYSTEMS & TOOLS DEVELOPED'}</span>
              </h4>
              <span className="text-[10px] font-mono text-white/40">4 CORE SOLUTIONS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {systemsList.map((sys, sIdx) => {
                const SysIcon = sys.icon;
                return (
                  <div
                    key={sIdx}
                    className="p-4 bg-[#0D1520] border border-blue-500/20 flex flex-col justify-between gap-3 hover:border-blue-400/50 transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-1.5 py-0.5 text-[9px] font-mono bg-blue-500/15 text-blue-300 border border-blue-500/30 font-bold">
                          {sys.tag}
                        </span>
                        <SysIcon className="w-4 h-4 text-blue-400" />
                      </div>
                      <h5 className="text-xs font-bold text-white font-heading">
                        {sys.title}
                      </h5>
                      <p className="text-[11px] text-white/70 font-light leading-relaxed">
                        {sys.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MIYAR 360 CONNECTION */}
          <div className="p-4 sm:p-5 bg-[#0A1628] border border-blue-400/40 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest">
                  {isAr ? 'الربط بمشروع منصة معيار 360' : 'MIYAR 360 PLATFORM CONNECTION'}
                </span>
              </div>
              <span className="px-2 py-0.5 bg-blue-400 text-black text-[10px] font-mono font-bold">
                PRODUCT CONCEPT / SYSTEM DESIGN
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
              {isAr
                ? 'مستوحى من مسارات العمل الميدانية الحقيقية والاحتياجات التشغيلية للتربية الخاصة في المدارس: منظومة متكاملة لربط إدارة المركز بالمعلمين وأولياء الأمور، تشمل: الطلاب، الخطط الفردية IEP، الحضور، الجلسات، تعديل السلوك، وتجربة ولي الأمر.'
                : 'Inspired by real Special Education workflows and operational needs observed in school environments: a comprehensive management platform concept unifying Student Records, IEP Formulation, Daily Attendance, Session Tracking, Behavioral Monitoring, and Parent Communication.'}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {(isAr ? ['الطلاب', 'IEP', 'الحضور', 'الجلسات', 'التقارير', 'السلوك', 'ولي الأمر'] : ['Students', 'IEP', 'Attendance', 'Sessions', 'Reports', 'Behavior', 'Parent Experience']).map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 text-[10px] font-mono bg-blue-500/20 text-blue-200 border border-blue-500/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* TECHNICAL SKILLS BADGES */}
          <div className="p-4 bg-[#0B121C] border border-[#202B3A] space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-white/60 uppercase">
                <Code className="w-3.5 h-3.5 text-blue-400" />
                <span>{isAr ? 'المهارات التقنية والأدوات' : 'TECHNICAL STACK & PRODUCTIVITY TOOLS'}</span>
              </div>
              <span className="text-[10px] font-mono text-white/40">COMPACT STACK</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {techSkills.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-[#121A26] border border-blue-500/25 text-xs font-mono text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Drawer Trigger for Supervisor Role */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => onOpenExperienceDetail(supervisorExp)}
              className="px-5 py-2.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-blue-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{isAr ? 'استعراض تفاصيل دور المشرف التقني' : 'View Full Technical Supervisor Details'}</span>
              <Arrow className="w-3.5 h-3.5" />
            </button>

            <span className="text-xs font-mono text-white/40">
              {isAr ? 'اضغط لعرض كافة المسؤوليات في لوحة جانبية' : 'Click to inspect structured details in drawer'}
            </span>
          </div>

        </div>

        {/* ROLE 2: SPECIAL EDUCATION TEACHER — AUTISM (EDUCATION GREEN THEME) */}
        <div
          id="experience-card-special-education-teacher"
          className="p-6 sm:p-8 bg-[#091510] border-2 border-emerald-500/40 relative overflow-hidden space-y-6"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-400" />

          {/* Top Status & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-emerald-500/20">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{isAr ? 'الدور الحالي // الممارسة الميدانية' : 'CURRENT ROLE // SPECIAL EDUCATION'}</span>
              </span>
              <span className="px-2 py-0.5 bg-[#122218] border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
                01 // EDUCATION
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-emerald-300/80">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {specialEdTeacherExp.period}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {specialEdTeacherExp.location}
              </span>
            </div>
          </div>

          {/* Role Title & Description */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight flex items-center gap-2">
                <span className="text-emerald-400">🟢</span>
                <span>{isAr ? 'معلم تربية خاصة — مسار اضطراب طيف التوحد' : 'Special Education Teacher — Autism Spectrum'}</span>
              </h3>
              <p className="text-sm font-mono text-emerald-300/90 font-semibold">
                {specialEdTeacherExp.organization} — {specialEdTeacherExp.location}
              </p>
            </div>

            <p className="p-4 bg-[#0E1F16] border-l-2 rtl:border-l-0 rtl:border-r-2 border-emerald-400 text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              {specialEdTeacherExp.shortSummary}
            </p>
          </div>

          {/* Core Responsibilities Grid */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{isAr ? 'المسؤوليات والإنجازات الميدانية' : 'VERIFIED CLASSROOM RESPONSIBILITIES & OUTCOMES'}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {specialEdTeacherExp.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[#0C1A13] border border-emerald-500/20 flex items-start gap-2.5 text-xs sm:text-sm text-white/85"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Education Skills Badges */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80 font-bold">
              {isAr ? 'المهارات التخصصية المعتمدة' : 'APPLIED CLINICAL & PEDAGOGICAL SKILLS'}
            </div>
            <div className="flex flex-wrap gap-2">
              {specialEdTeacherExp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 bg-[#10241A] border border-emerald-500/30 text-xs font-mono text-emerald-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Current Responsibility Callout */}
          <div className="p-4 bg-[#08131E] border border-blue-500/30 flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                {isAr ? 'مسؤولية حالية إضافية بالمدرسة' : 'ADDITIONAL CURRENT RESPONSIBILITY'}
              </span>
              <div className="text-sm font-bold text-white font-heading">
                {isAr ? 'المشرف التقني ومسؤول التحول الرقمي' : 'Technical Supervisor & Digital Transformation Lead'}
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('experience-card-technical-supervisor');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-300 text-xs font-mono transition-colors cursor-pointer"
            >
              {isAr ? 'عرض بيانات الإشراف التقني ↑' : 'View Supervisor Section ↑'}
            </button>
          </div>

          {/* Drawer Trigger for Teacher Role */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => onOpenExperienceDetail(specialEdTeacherExp)}
              className="px-5 py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{isAr ? 'استعراض تفاصيل دور معلم التربية الخاصة' : 'View Full Special Education Details'}</span>
              <Arrow className="w-3.5 h-3.5" />
            </button>

            <span className="text-xs font-mono text-white/40">
              {isAr ? 'اضغط لفتح لوحة التفاصيل الجانبية' : 'Click to open slide-out drawer'}
            </span>
          </div>

        </div>

      </section>

      {/* 3. WHERE EDUCATION MEETS TECHNOLOGY (VISUAL SECTION) */}
      <section className="p-6 sm:p-8 bg-[#090D14] border-2 border-blue-500/30 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1E2634]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>{isAr ? 'حيث يلتقي التعليم بالتقنية' : 'WHERE EDUCATION MEETS TECHNOLOGY'}</span>
          </div>
          <span className="text-[10px] font-mono text-white/40 uppercase">INTERDISCIPLINARY ARCHITECTURE</span>
        </div>

        {/* Visual Formula Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
          
          {/* Box 1 */}
          <div className="p-4 bg-[#0E1622] border border-emerald-500/30 space-y-1">
            <span className="text-[10px] font-mono text-emerald-400 font-bold block">01 // DOMAIN</span>
            <div className="text-sm font-bold text-white font-heading">
              {isAr ? 'التربية الخاصة' : 'Special Education Experience'}
            </div>
            <p className="text-[11px] text-white/60 font-mono">
              {isAr ? 'التوحد، التخاطب، والخطط IEP' : 'Autism, Speech & IEP practice'}
            </p>
          </div>

          {/* Symbol */}
          <div className="text-center font-mono text-xl font-bold text-blue-400 hidden md:block">
            ✕
          </div>

          {/* Box 2 */}
          <div className="p-4 bg-[#0E1622] border border-blue-500/30 space-y-1">
            <span className="text-[10px] font-mono text-blue-400 font-bold block">02 // OPERATIONS</span>
            <div className="text-sm font-bold text-white font-heading">
              {isAr ? 'الإشراف التقني' : 'Technical Supervision'}
            </div>
            <p className="text-[11px] text-white/60 font-mono">
              {isAr ? 'العمليات المدرسية والأدوات' : 'School operations & tools'}
            </p>
          </div>

          {/* Symbol */}
          <div className="text-center font-mono text-xl font-bold text-cyan-400 hidden md:block">
            →
          </div>

          {/* Box 3 */}
          <div className="p-4 bg-[#091B24] border-2 border-cyan-400/50 space-y-1">
            <span className="text-[10px] font-mono text-cyan-300 font-bold block">03 // SYNTHESIS</span>
            <div className="text-sm font-bold text-white font-heading">
              {isAr ? 'التحول الرقمي والأنظمة التعليمية' : 'Digital Transformation & EdTech Systems'}
            </div>
            <p className="text-[11px] text-cyan-200/70 font-mono">
              {isAr ? 'حلول واقعية وقابلة للتطبيق' : 'Practical, usable workflows'}
            </p>
          </div>

        </div>
      </section>

      {/* 4. PREVIOUS CHRONOLOGICAL EXPERIENCES */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1E242C]">
          <div className="text-xs font-mono tracking-widest text-white/50 font-bold uppercase">
            {isAr ? 'المسار الزمني للخبرات السابقة' : 'PREVIOUS CHRONOLOGICAL ROLES'}
          </div>
          <span className="text-xs font-mono text-white/40">2019 — 2024</span>
        </div>

        <div className="space-y-3">
          {otherExperiences.map((exp) => (
            <div
              key={exp.id}
              id={`experience-card-${exp.id}`}
              onClick={() => onOpenExperienceDetail(exp)}
              className="p-5 sm:p-6 bg-[#12161C] hover:bg-[#161B22] border border-[#242A32] hover:border-emerald-500/40 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Calendar className="w-3.5 h-3.5 text-white/40" />
                  <span>{exp.period}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/60">{exp.location}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                  {exp.role}
                </h3>
                
                <p className="text-xs font-mono text-white/60">
                  {exp.organization}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-white/50 group-hover:text-white transition-colors shrink-0">
                <span>{isAr ? 'استعراض التفاصيل' : 'Details'}</span>
                <Arrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
