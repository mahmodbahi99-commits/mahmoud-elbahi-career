import React from 'react';
import { Language, DashboardSection, ProjectItem } from '../../../types';
import { SiteContent } from '../../../data/content';
import { CategoryNavTabs } from '../CategoryNavTabs';
import { 
  Cpu, 
  Layers, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Database, 
  Activity, 
  FileText, 
  School, 
  ExternalLink, 
  Code, 
  LayoutDashboard, 
  Workflow, 
  Bot, 
  Compass, 
  Calendar, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

interface TechnologyDashboardViewProps {
  lang: Language;
  content: SiteContent;
  onSelectSection: (section: DashboardSection) => void;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const TechnologyDashboardView: React.FC<TechnologyDashboardViewProps> = ({
  lang,
  content,
  onSelectSection,
  onOpenCaseStudy,
}) => {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const miyarProject = content.projects.items.find((p) => p.id.includes('miyar')) || content.projects.items[0];
  const leenProject = content.projects.items.find((p) => p.id.includes('leen')) || content.projects.items[1];
  const webProject = content.projects.items.find((p) => p.id.includes('website')) || content.projects.items[2];

  const supervisorFocusAreas = [
    {
      title: isAr ? 'التحول الرقمي' : 'Digital Transformation',
      desc: isAr ? 'دعم مبادرات التحول الرقمي وأتمتة العمليات المدرسية' : 'Supporting school-wide digital initiatives and operational workflows',
      icon: Workflow,
    },
    {
      title: isAr ? 'الأنظمة التعليمية' : 'Educational Systems',
      desc: isAr ? 'تطوير حلول رقمية تنظم عمليات التربية الخاصة وسجلات الطلاب' : 'Developing digital solutions for Special Education and student data',
      icon: Database,
    },
    {
      title: isAr ? 'لوحات التحكم والبيانات' : 'Dashboards & Analytics',
      desc: isAr ? 'تصميم لوحات تحكم ومؤشرات أداء تدعم اتخاذ القرارات اللحظية' : 'Designing visual dashboards for real-time pedagogical insights',
      icon: LayoutDashboard,
    },
    {
      title: isAr ? 'مسارات عمل الذكاء الاصطناعي' : 'AI-assisted Workflows',
      desc: isAr ? 'توظيف الذكاء الاصطناعي لتسريع إعداد الوثائق والخطط الفردية' : 'Deploying AI tools and prompt workflows for documentation and IEPs',
      icon: Bot,
    },
    {
      title: isAr ? 'النماذج الأولية للمنتجات' : 'Product Prototyping',
      desc: isAr ? 'بناء أدوات وبرمجيات رقمية سريعة لحل مشكلات ميدانية حقيقية' : 'Rapidly prototyping web utilities based on real school friction',
      icon: Code,
    },
  ];

  const systemPipeline = [
    {
      step: '01',
      title: isAr ? 'المدرسة والبيئة' : 'SCHOOL & OPS',
      sub: isAr ? 'إدارة العمليات المدرسية' : 'Classroom & Operations',
      icon: School,
      color: 'border-blue-500/30 text-blue-400',
    },
    {
      step: '02',
      title: isAr ? 'بيانات الطلاب' : 'STUDENT DATA',
      sub: isAr ? 'التقييمات والسجلات الفردية' : 'IEP Records & Profiles',
      icon: Database,
      color: 'border-blue-500/40 text-blue-300',
    },
    {
      step: '03',
      title: isAr ? 'سير العمل الرقمي' : 'DIGITAL WORKFLOW',
      sub: isAr ? 'أتمتة الحضور والجلسات' : 'Automated Telemetry',
      icon: Activity,
      color: 'border-blue-500/50 text-blue-200',
    },
    {
      step: '04',
      title: isAr ? 'لوحة المؤشرات' : 'DASHBOARD',
      sub: isAr ? 'تحليل الأداء اللحظي' : 'Real-Time Insights',
      icon: LayoutDashboard,
      color: 'border-cyan-500/50 text-cyan-300',
    },
    {
      step: '05',
      title: isAr ? 'التقارير النوعية' : 'REPORTING',
      sub: isAr ? 'تقارير أولياء الأمور والإدارة' : 'Decision & Parent Feeds',
      icon: FileText,
      color: 'border-emerald-500/50 text-emerald-300',
    },
  ];

  const techStack = [
    'React',
    'Firebase',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Google AI Studio',
    'AI Tools',
    'Google Sheets',
    'Canva',
    'Notion',
  ];

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. HEADER */}
      <section className="space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span>02 / TECHNOLOGY & SYSTEMS</span>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading uppercase">
            {isAr ? 'التقنية والأنظمة الرقمية' : 'TECHNOLOGY'}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-blue-400 font-heading">
            {isAr ? 'الإشراف التقني ✕ التحول الرقمي والأنظمة التعليمية' : 'Technical Supervision ✕ Digital Transformation & Educational Systems'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-4xl">
          {isAr
            ? 'هندسة وتطوير حلول رقمية لسير العمل التربوي، وأتمتة سجلات الطلاب، وبناء لوحات بيانات تدعم المعلمين والإدارة في اتخاذ القرارات اللحظية.'
            : 'Architecting educational workflows, automating student records, and building custom operational dashboards designed specifically for special education and school environments.'}
        </p>
      </section>

      {/* 2. CATEGORY TABS */}
      <section>
        <CategoryNavTabs
          lang={lang}
          activeSection="technology"
          onSelectSection={onSelectSection}
        />
      </section>

      {/* 3. FIRST FEATURED ITEM: TECHNICAL SUPERVISOR (AL-FURQAN PRIVATE SCHOOLS) */}
      <section className="p-6 sm:p-8 bg-[#09111C] border-2 border-blue-500/50 relative overflow-hidden space-y-6">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400" />

        {/* Top Status & Employer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-blue-500/20">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>{isAr ? 'الدور التقني الحالي' : 'CURRENT ROLE'}</span>
            </span>
            <span className="px-2 py-0.5 bg-[#121A26] border border-blue-500/30 text-blue-300 text-[10px] font-mono font-bold">
              02 // TECHNOLOGY SUPERVISION
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

        {/* Title & Core Positioning */}
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
              {isAr ? 'المشرف التقني' : 'TECHNICAL SUPERVISOR'}
            </h3>
            <p className="text-sm sm:text-base font-mono text-blue-300 font-semibold">
              {isAr ? 'مدارس الفرقان الأهلية — المملكة العربية السعودية' : 'Al-Furqan Private Schools — Saudi Arabia'}
            </p>
          </div>

          <blockquote className="p-4 bg-[#0F1A28] border-l-2 rtl:border-l-0 rtl:border-r-2 border-blue-400 text-xs sm:text-sm text-white/90 font-light leading-relaxed">
            {isAr
              ? 'مسؤول حالياً عن دعم العمليات التقنية ومبادرات التحول الرقمي داخل البيئة المدرسية، وترجمة الاحتياجات التعليمية والإدارية الواقعية إلى أنظمة ومسارات عمل وأدوات رقمية عملية.'
              : 'Currently responsible for supporting technology operations and digital transformation initiatives within the school environment, translating real educational and administrative needs into practical digital systems, workflows, and tools.'}
          </blockquote>
        </div>

        {/* 5 Core Technological Focus Pillars */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-300 font-bold flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>{isAr ? 'مجالات العمل والمبادرات التقنية المطبقة' : 'CORE TECHNICAL INITIATIVES & APPLIED WORK'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {supervisorFocusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-4 bg-[#0E1624] border border-blue-500/20 hover:border-blue-400/50 transition-all flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-400 font-bold">
                      0{idx + 1} //
                    </span>
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-heading mb-1">
                      {area.title}
                    </h4>
                    <p className="text-[11px] text-white/70 font-light leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Navigate to Experience Section */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={() => onSelectSection('experience')}
            className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-300 text-xs font-mono transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>{isAr ? 'استعراض الخبرة الكاملة في قسم الخبرات المهنية' : 'View Full Role in Experience Section'}</span>
            <Arrow className="w-3.5 h-3.5" />
          </button>

          <span className="text-xs font-mono text-white/40">
            {isAr ? 'أدوار متكاملة: تربية خاصة + إشراف تقني' : 'Dual Profile: Special Education + Technical Supervision'}
          </span>
        </div>
      </section>

      {/* 4. ANIMATED SYSTEM VISUALIZATION */}
      <section className="p-6 bg-[#0B111A] border border-blue-500/40 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-3 border-b border-blue-500/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <h3 className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
              {isAr ? 'المخطط الهندسي لتدفق الأنظمة المدرسية' : 'EDUCATIONAL PIPELINE ARCHITECTURE'}
            </h3>
          </div>
          <span className="text-[11px] font-mono text-white/40">LIVE DATA FLOW</span>
        </div>

        {/* Pipeline Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
          {systemPipeline.map((node, idx) => {
            const Icon = node.icon;
            return (
              <div key={idx} className="relative flex flex-col justify-between p-4 bg-[#121824] border border-blue-500/20 hover:border-blue-400/60 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-blue-400 font-bold">
                    {node.step} //
                  </span>
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>

                <div className="space-y-1 mb-2">
                  <h4 className="text-sm font-bold text-white font-heading">
                    {node.title}
                  </h4>
                  <p className="text-[11px] font-mono text-white/60">
                    {node.sub}
                  </p>
                </div>

                <div className="w-full bg-[#182232] h-1 rounded-full overflow-hidden mt-2">
                  <div 
                    className="bg-blue-400 h-full rounded-full animate-pulse" 
                    style={{ width: `${(idx + 1) * 20}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CORE SYSTEMS & PLATFORMS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-[#1E242C]">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <h3 className="text-base font-bold text-white font-heading uppercase tracking-tight">
              {isAr ? 'الأنظمة والمنصات الرئيسية' : 'CORE SYSTEMS & PLATFORMS'}
            </h3>
          </div>
          <span className="text-xs font-mono text-white/40">3 PRODUCTION PILLARS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Card 1: Digital Transformation */}
          <div className="p-6 bg-[#0E1522] border border-blue-500/30 flex flex-col justify-between hover:border-blue-500/60 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold border border-blue-500/30">
                  {isAr ? 'مدرسي وعملياتي' : 'SCHOOL OPERATIONS'}
                </span>
                <span className="text-xs font-mono text-white/40">Al-Furqan</span>
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white font-heading">
                  {isAr ? 'التحول الرقمي المدرسي' : 'DIGITAL TRANSFORMATION'}
                </h4>
                <p className="text-xs font-mono text-blue-300">
                  {isAr ? 'مدارس الفرقان الأهلية' : 'Al-Furqan Private Schools'}
                </p>
              </div>

              <div className="space-y-2 text-xs font-light text-white/80 leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>{isAr ? 'سير العمل الرقمي والتعليمي' : 'Digital workflows & educational systems'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>{isAr ? 'أدوات تشغيلية وأتمتة السجلات' : 'Operational tools & record automation'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>{isAr ? 'دعم وتمكين الكادر التعليمي' : 'Staff technology adoption & supervision'}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-blue-500/20">
              <button
                onClick={() => onSelectSection('experience')}
                className="w-full py-2 bg-[#141F30] hover:bg-[#1A2840] border border-blue-500/40 text-blue-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{isAr ? 'استعراض التفاصيل في الخبرات' : 'View in Experience'}</span>
                <Arrow className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Student Management System */}
          <div className="p-6 bg-[#0E1522] border border-blue-500/30 flex flex-col justify-between hover:border-blue-500/60 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold border border-blue-500/30">
                  {isAr ? 'نظام بيانات' : 'DATA SYSTEM'}
                </span>
                <span className="text-xs font-mono text-white/40">IEP & Tracking</span>
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white font-heading">
                  {isAr ? 'نظام إدارة الطلاب والخطط' : 'STUDENT MANAGEMENT SYSTEM'}
                </h4>
                <p className="text-xs font-mono text-blue-300">
                  {isAr ? 'ملفات الطلاب وسير الجلسات' : 'Profiles · Attendance · IEP'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 bg-[#141D2B] border border-blue-500/20 text-white/80">
                  • {isAr ? 'سجلات الطلاب' : 'Student profiles'}
                </div>
                <div className="p-2 bg-[#141D2B] border border-blue-500/20 text-white/80">
                  • {isAr ? 'الحضور اليومي' : 'Daily attendance'}
                </div>
                <div className="p-2 bg-[#141D2B] border border-blue-500/20 text-white/80">
                  • {isAr ? 'أهداف الخطة IEP' : 'IEP milestones'}
                </div>
                <div className="p-2 bg-[#141D2B] border border-blue-500/20 text-white/80">
                  • {isAr ? 'التقارير اللحظية' : 'Live reports'}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-blue-500/20">
              <button
                onClick={() => onOpenCaseStudy(leenProject)}
                className="w-full py-2 bg-[#141F30] hover:bg-[#1A2840] border border-blue-500/40 text-blue-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{isAr ? 'استعراض تفاصيل النظام' : 'Explore System Details'}</span>
                <Arrow className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Miyar 360 */}
          <div className="p-6 bg-[#0B1526] border-2 border-blue-400/50 flex flex-col justify-between hover:border-blue-400 transition-all relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-blue-400 text-black text-[10px] font-mono font-bold">
                  PRODUCT CONCEPT
                </span>
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white font-heading">
                  MIYAR 360
                </h4>
                <p className="text-xs font-mono text-blue-300">
                  {isAr ? 'منصة إدارة التربية الخاصة الشاملة' : 'Special Education Management Platform'}
                </p>
              </div>

              <p className="text-xs text-white/80 font-light leading-relaxed">
                {isAr
                  ? 'منظومة رقمية متكاملة لربط إدارة المركز بالمعلمين وأولياء الأمور، تشمل: الطلاب، الخطط الفردية IEP، الحضور، الجلسات، تعديل السلوك، وتجربة ولي الأمر.'
                  : 'Integrated special education operating system connecting administrators, clinical specialists, and parents with real-time IEP milestones, behavior logs, and sessions.'}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {(isAr ? ['الطلاب', 'IEP', 'الحضور', 'الجلسات', 'التقارير', 'السلوك', 'ولي الأمر'] : ['Students', 'IEP', 'Attendance', 'Sessions', 'Reports', 'Behavior', 'Parent Experience']).map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 text-[10px] font-mono bg-blue-500/15 text-blue-200 border border-blue-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-blue-500/20">
              <button
                onClick={() => onOpenCaseStudy(miyarProject)}
                className="w-full py-2 bg-blue-500 hover:bg-blue-400 text-black text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{isAr ? 'استعراض دراسة الحالة معيار 360' : 'View Miyar 360 Case Study'}</span>
                <Arrow className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TECH STACK */}
      <section className="p-5 bg-[#12161C] border border-[#242A32] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase tracking-widest">
            <Code className="w-3.5 h-3.5 text-blue-400" />
            <span>{isAr ? 'التقنيات والأدوات المستخدمة' : 'TECHNICAL STACK & TOOLS'}</span>
          </div>
          <span className="text-[10px] font-mono text-white/40">EDTECH ENVIRONMENT</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#181D24] border border-[#242A32] text-xs font-mono text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
};
