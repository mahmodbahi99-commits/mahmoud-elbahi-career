import React from 'react';
import { Language, DashboardSection } from '../../../types';
import { Award, Clock, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';
import { CERTIFICATES_DRIVE_URL } from '../../../data/certificates';

interface TrainingDashboardViewProps {
  lang: Language;
  onSelectSection: (section: DashboardSection) => void;
}

export const TrainingDashboardView: React.FC<TrainingDashboardViewProps> = ({ 
  lang,
  onSelectSection,
}) => {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const professionalDevelopmentSummary = [
    {
      title: isAr ? 'تدريب فني تحليل السلوك التطبيقي (ABAT — 40-Hour Training)' : 'ABAT — 40-Hour Training',
      badge: isAr ? 'مرشح تحت الإشراف' : 'Candidate Status',
      desc: isAr ? 'مبادئ وأسس تحليل السلوك التطبيقي، القياس الموضوعي، وأخلاقيات QABA.' : 'Foundational ABA principles, objective data collection, and QABA ethical standards.',
      isFeatured: true,
    },
    {
      title: isAr ? 'التأهيل الحركي النطقي (Oral Motor)' : 'Oral Motor',
      badge: isAr ? 'تأهيل إكلينيكي' : 'Clinical Training',
      desc: isAr ? 'تمارين تقوية عضلات النطق وتحسين مخارج الحروف والتناسق العضلي الفموي.' : 'Articulation musculature exercises, oral motor coordination, and speech clarity.',
    },
    {
      title: isAr ? 'التكامل الحسي (Sensory Integration)' : 'Sensory Integration',
      badge: isAr ? 'بيئة صفية' : 'Classroom Adaptation',
      desc: isAr ? 'استراتيجيات المعالجة الحسية البيئية لمساعدة الطلاب على التنظيم الذاتي والتركيز.' : 'Environmental sensory regulation strategies for focus and self-regulation.',
    },
    {
      title: isAr ? 'بناء الخطط التربوية الفردية (IEP Development)' : 'IEP Development',
      badge: isAr ? 'تصميم تربوي' : 'Curriculum Design',
      desc: isAr ? 'صياغة أهداف ذكية SMART، وتقسيم المهارات، وقياس الإنجاز الفصلي بدقة.' : 'Formulating individualized goals, milestone metrics, and periodic progress tracking.',
    },
    {
      title: isAr ? 'تحليل السلوك التطبيقي (ABA)' : 'ABA',
      badge: isAr ? 'تدخلات سلوكية' : 'Behavioral Support',
      desc: isAr ? 'استراتيجيات تعديل السلوك، والتعزيز الإيجابي، والقياس الموضوعي للمهارات.' : 'Behavior intervention strategies, positive reinforcement schedules, and task analysis.',
    },
    {
      title: isAr ? 'تعديل السلوك (Behavior Modification)' : 'Behavior Modification',
      badge: isAr ? 'دعم إيجابي' : 'Positive Support',
      desc: isAr ? 'التعامل مع السلوكيات غير المرغوبة وإحلال سلوكيات تكيفية بديلة ومستدامة.' : 'Functional behavior assessment, proactive redirection, and adaptive behavior substitution.',
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. HEADER */}
      <section className="space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#14171B] border border-[#242A32] text-emerald-400 text-xs font-mono font-semibold tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>CAREER / TRAINING & ACCREDITATION</span>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading uppercase">
            {isAr ? 'التدريب والاعتمادات' : 'TRAINING'}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-emerald-400 font-heading">
            {isAr ? 'التدريب المعتمد وساعات الإشراف الميداني' : 'Accredited Training & Supervised Fieldwork'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-3xl">
          {isAr
            ? 'سجل الدورات المعتمدة، وساعات الإشراف الميداني، والبرامج التدريبية التخصصية في تحليل السلوك والتربية الخاصة.'
            : 'Supervised clinical fieldwork, professional development milestones, and evidence-based therapeutic training.'}
        </p>
      </section>

      {/* 2. SPECIAL FEATURED ABAT CANDIDATE CARD */}
      <section className="p-6 sm:p-7 bg-[#101914] border-2 border-emerald-500/40 relative overflow-hidden space-y-4">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
        
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-emerald-500/20">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              {isAr ? 'حالة الاعتماد المهني الدولي' : 'PROFESSIONAL CREDENTIAL STATUS'}
            </span>
          </div>
          <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase">
            UNDER SUPERVISION
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            {isAr ? 'مرشح فني سلوك تطبيقي (ABAT Candidate) — حالياً تحت الإشراف' : 'ABAT Candidate — Currently Under Supervision'}
          </h3>
          <p className="text-sm font-mono text-emerald-300 font-medium">
            {isAr 
              ? 'مستمر حالياً في استكمال متطلبات الإشراف الميداني والتدريب العملي الخاضع للإشراف'
              : 'Currently completing supervised fieldwork / supervision requirements'}
          </p>
        </div>

        <div className="p-4 bg-[#141F18] border border-emerald-500/30 flex items-start gap-3 text-xs text-white/85 font-light leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            {isAr
              ? 'إتمام متطلبات المنهج الأكاديمي والتدريبي المعتمد لـ QABA، والعمل حالياً على توثيق ساعات التطبيق العملي والإشراف المباشر المؤهل للاختبار النهائي.'
              : 'Completed coursework curriculum under QABA standards, actively fulfilling required clinical practice hours and direct supervision milestones toward examination eligibility.'}
          </p>
        </div>
      </section>

      {/* 3. PROFESSIONAL DEVELOPMENT SUMMARY */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1E242C]">
          <h3 className="text-base font-bold text-white font-heading uppercase tracking-tight">
            {isAr ? 'التطوير المهني' : 'PROFESSIONAL DEVELOPMENT'}
          </h3>
          <span className="text-xs font-mono text-white/40">SUMMARY</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {professionalDevelopmentSummary.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#12161C] border border-[#242A32] hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    0{idx + 1} //
                  </span>
                  <span className="text-[10px] font-mono text-white/50 px-2 py-0.5 bg-[#181D24] border border-[#242A32]">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-heading">
                  {item.title}
                </h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#1E242C] flex items-center justify-between text-[10px] font-mono text-emerald-400/80">
                <span>VERIFIED TRAINING</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NAVIGATION TO CERTIFICATES SECTION */}
      <section className="p-6 bg-[#0E151E] border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
              {isAr ? 'معرض الشهادات الكامل' : 'FULL CERTIFICATES GALLERY'}
            </span>
          </div>
          <p className="text-xs text-white/80 font-light max-w-xl">
            {isAr
              ? 'استعرض كافة الشهادات المهنية المعتمدة مصنفة حسب التخصص مع روابط الأرشيف الرسمي على Google Drive.'
              : 'Explore the complete verified certificate gallery with category filters and official Google Drive archive links.'}
          </p>
        </div>

        <button
          id="btn-goto-certificates-from-training"
          onClick={() => onSelectSection('certificates')}
          className="shrink-0 px-5 py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 hover:border-emerald-500 text-emerald-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2"
        >
          <span>{isAr ? 'استعراض كافة الشهادات →' : 'View All Certificates →'}</span>
          <Arrow className="w-3.5 h-3.5" />
        </button>
      </section>

    </div>
  );
};
