import { CertificateItem, CertificateCategory, Language } from '../types';

export const CERTIFICATES_DRIVE_URL = 'https://drive.google.com/drive/folders/1m4LDVTJi91EveOIEnL1N4fYPFPAqphcm?usp=drive_link';

export interface CertificatesContent {
  sectionTag: string;
  title: string;
  subtitle: string;
  description: string;
  driveButton: string;
  driveButtonLong: string;
  archiveNotice: string;
  filterAll: string;
  filters: { id: CertificateCategory; label: string; count?: number }[];
  featuredBadge: string;
  viewCertificate: string;
  openArchive: string;
  openOriginal: string;
  statusCandidate: string;
  items: CertificateItem[];
}

export const certificatesData: Record<Language, CertificatesContent> = {
  en: {
    sectionTag: '05 / CERTIFICATES',
    title: 'CERTIFICATES',
    subtitle: 'Professional Development & Accreditations',
    description: 'A curated collection of Mahmoud Elbahi\'s verified professional certificates, clinical training, and specialized credentials across Special Education, Autism, ABA, and Speech Therapy.',
    driveButton: 'Open Certificate Archive ↗',
    driveButtonLong: 'VIEW ALL CERTIFICATES — GOOGLE DRIVE ARCHIVE ↗',
    archiveNotice: 'Official certificates repository hosted on Google Drive. Individual documents are verified and cataloged.',
    filterAll: 'ALL',
    filters: [
      { id: 'all', label: 'ALL' },
      { id: 'special-education', label: 'SPECIAL EDUCATION' },
      { id: 'autism', label: 'AUTISM' },
      { id: 'aba', label: 'ABA' },
      { id: 'speech-language', label: 'SPEECH & LANGUAGE' },
      { id: 'other', label: 'OTHER TRAINING' },
    ],
    featuredBadge: 'FEATURED CREDENTIAL',
    viewCertificate: 'View Certificate',
    openArchive: 'Open Certificate Archive ↗',
    openOriginal: 'Open Original Document ↗',
    statusCandidate: 'ABAT Candidate — Currently Under Supervision',
    items: [
      {
        id: 'abat-40h',
        title: 'ABAT — 40-Hour Training',
        issuer: 'QABA Standards Curriculum',
        category: 'aba',
        categoryLabel: 'ABA',
        type: 'Professional Credential Course',
        isFeatured: true,
        statusBadge: 'ABAT Candidate — Currently Under Supervision',
        description: 'Comprehensive 40-hour curriculum covering foundational Applied Behavior Analysis principles, task analysis, data collection protocols, reinforcement schedules, and QABA ethical standards. Currently completing supervised fieldwork hours.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'aba-strategies',
        title: 'Applied Behavior Analysis (ABA) Intervention Strategies',
        issuer: 'Specialized Behavioral Training',
        category: 'aba',
        categoryLabel: 'ABA',
        type: 'Clinical & Behavioral Training',
        description: 'Practical training on functional behavior assessments, positive behavior support systems, behavior reduction plans, and continuous behavioral data tracking.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'oral-motor',
        title: 'Oral Motor Therapy & Articulation Assessment',
        issuer: 'Clinical Speech Rehabilitation',
        category: 'speech-language',
        categoryLabel: 'SPEECH & LANGUAGE',
        type: 'Clinical Speech Pathology',
        description: 'Therapeutic and neuromuscular exercises for oral motor musculature, coordination, articulation clarity, and phonological intervention.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'sensory-integration',
        title: 'Sensory Integration Strategies in Educational Settings',
        issuer: 'Advanced Pediatric Training',
        category: 'autism',
        categoryLabel: 'AUTISM',
        type: 'Therapeutic Intervention Workshop',
        description: 'Classroom environmental adjustments, sensory regulation protocols, and sensory processing support for students with Autism Spectrum Disorder.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'iep-development',
        title: 'Individualized Education Program (IEP) Development & Design',
        issuer: 'Educational Standards & Quality',
        category: 'special-education',
        categoryLabel: 'SPECIAL EDUCATION',
        type: 'Pedagogical Framework',
        description: 'Systematic IEP construction, measurable behavioral milestone design, curriculum adaptation, and collaborative parent communication protocols.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'behavior-modification',
        title: 'Positive Behavior Support & Behavior Modification',
        issuer: 'Evidence-Based Behavioral Board',
        category: 'aba',
        categoryLabel: 'ABA',
        type: 'Behavioral Intervention',
        description: 'Antecedent strategies, functional communication training (FCT), positive reinforcement systems, and replacement behavior instruction.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'saudi-license',
        title: 'Saudi Professional Educational License (Practicing Teacher)',
        issuer: 'Education & Training Evaluation Commission (ETEC)',
        category: 'other',
        categoryLabel: 'OTHER TRAINING',
        type: 'Official Professional License',
        description: 'Accredited professional teaching licensure confirming national educational standards, instructional methodologies, and ethical teaching benchmarks in Saudi Arabia.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
    ],
  },
  ar: {
    sectionTag: '05 / CERTIFICATES',
    title: 'الشهادات والاعتمادات',
    subtitle: 'التطوير المهني والبرامج التدريبية المعتمدة',
    description: 'مجموعة موثقة من الشهادات المهنية، وساعات التدريب الإكلينيكي والميداني لمحمود الباهي في مجالات التربية الخاصة، اضطراب طيف التوحد، تحليل السلوك التطبيقي، وأمراض النطق والتخاطب.',
    driveButton: 'فتح أرشيف الشهادات ↗',
    driveButtonLong: 'استعراض كافة الشهادات — أرشيف Google Drive ↗',
    archiveNotice: 'أرشيف الشهادات الرسمي المعتمد على Google Drive. جميع الوثائق والشهادات موثقة ومتاحة للاطلاع.',
    filterAll: 'الكل',
    filters: [
      { id: 'all', label: 'الكل' },
      { id: 'special-education', label: 'التربية الخاصة' },
      { id: 'autism', label: 'اضطراب طيف التوحد' },
      { id: 'aba', label: 'تحليل السلوك (ABA)' },
      { id: 'speech-language', label: 'النطق والتخاطب' },
      { id: 'other', label: 'تدريبات ورخص أخرى' },
    ],
    featuredBadge: 'اعتماد مميز',
    viewCertificate: 'استعراض الشهادة',
    openArchive: 'فتح أرشيف الشهادات ↗',
    openOriginal: 'فتح الوثيقة الأصلية ↗',
    statusCandidate: 'مرشح ABAT — حالياً تحت الإشراف الميداني',
    items: [
      {
        id: 'abat-40h',
        title: 'تدريب فني تحليل السلوك التطبيقي (ABAT) — 40 ساعة',
        issuer: 'معايير البورد الدولي QABA',
        category: 'aba',
        categoryLabel: 'تحليل السلوك (ABA)',
        type: 'برنامج اعتماد مهني معتمد',
        isFeatured: true,
        statusBadge: 'مرشح ABAT — حالياً تحت الإشراف الميداني',
        description: 'إتمام المنهج التدريبي المعتمد (40 ساعة) في مبادئ وأسس تحليل السلوك التطبيقي، قياس وتسجيل السلوك، خطط التدخل السلوكي، والأخلاقيات المهنية لمعايير QABA. العمل مستمر حالياً على استكمال ساعات الإشراف والممارسة الميدانية.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'aba-strategies',
        title: 'استراتيجيات وتدخلات تحليل السلوك التطبيقي (ABA)',
        issuer: 'برامج التدريب السلوكي المتخصص',
        category: 'aba',
        categoryLabel: 'تحليل السلوك (ABA)',
        type: 'تدريب إكلينيكي وسلوكي',
        description: 'تطبيقات عملية في التقييم الوظيفي للسلوك، جداول التعزيز الإيجابي، استراتيجيات السوابق، وجمع البيانات السلوكية الموضوعية.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'oral-motor',
        title: 'التأهيل الحركي النطقي وتدريبات أعضاء النطق (Oral Motor)',
        issuer: 'التأهيل الإكلينيكي للنطق والتخاطب',
        category: 'speech-language',
        categoryLabel: 'النطق والتخاطب',
        type: 'علم أمراض النطق واللغة',
        description: 'تمارين وتقنيات تقوية عضلات النطق، تحسين التناسق العضلي الفموي، وتصحيح مخارج الأصوات وعلاج اللدغات.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'sensory-integration',
        title: 'استراتيجيات التكامل الحسي في البيئة التعليمية والمراكز',
        issuer: 'التطوير النمائي المتخصص للأطفال',
        category: 'autism',
        categoryLabel: 'اضطراب طيف التوحد',
        type: 'ورشة عمل وتدخلات علاجية',
        description: 'التعديلات البيئية داخل الصف المدرسي، واستراتيجيات التنظيم الحسي للتعامل مع صعوبات المعالجة الحسية لدى أطفال التوحد.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'iep-development',
        title: 'بناء وصياغة الخطط التربوية الفردية (IEP)',
        issuer: 'معايير الجودة والتطوير التربوي',
        category: 'special-education',
        categoryLabel: 'التربية الخاصة',
        type: 'منهجيات التصميم التربوي',
        description: 'صياغة الأهداف السلوكية الذكية SMART، تحليل المهام والمهارات النمائية، وتوثيق التقدم الدوري ومشاركة الأسرة.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'behavior-modification',
        title: 'تعديل السلوك والدعم السلوكي الإيجابي',
        issuer: 'برامج التدريب التربوي المبني على الأدلة',
        category: 'aba',
        categoryLabel: 'تحليل السلوك (ABA)',
        type: 'التدخلات السلوكية الإيجابية',
        description: 'استراتيجيات السوابق واللواحق، والتدريب على التواصل الوظيفي البديل، وإحلال السلوكيات التكيفية المستدامة.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
      {
        id: 'saudi-license',
        title: 'الرخصة المهنية التعليمية السعودية (معلم ممارس)',
        issuer: 'هيئة تقويم التعليم والتدريب (ETEC)',
        category: 'other',
        categoryLabel: 'تدريبات ورخص أخرى',
        type: 'رخصة مهنية رسمية معتمدة',
        description: 'اعتماد رسمي صادر من هيئة تقويم التعليم والتدريب في المملكة العربية السعودية يؤكد استيفاء المعايير المهنية الوطنية والتخصصية في التعليم.',
        driveUrl: CERTIFICATES_DRIVE_URL,
      },
    ],
  },
};
