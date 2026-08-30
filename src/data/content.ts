import { 
  Language, 
  HubContent,
  EducationPathContent,
  TechnologyPathContent,
  AiPathContent,
  SalesPathContent,
  MetricItem, 
  RecruiterSnapshotBlock, 
  ProblemApproachStep, 
  SelectedCapabilitiesGroup, 
  CareerStoryItem, 
  ExperienceItem, 
  SkillCategory, 
  ProjectItem, 
  BusinessItem, 
  FocusPillar, 
  EducationData 
} from '../types';

export interface SiteContent {
  hub: HubContent;
  educationPath: EducationPathContent;
  technologyPath: TechnologyPathContent;
  aiPath: AiPathContent;
  salesPath: SalesPathContent;
  nav: {
    home: string;
    snapshot: string;
    story: string;
    experience: string;
    projects: string;
    approach: string;
    capabilities: string;
    expertise: string;
    tech: string;
    business: string;
    about: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    name: string;
    positioning: string;
    statement: string;
    status: string;
    roleSignals: string[];
    exploreCta: string;
    downloadCvCta: string;
    contactCta: string;
  };
  recruiterSnapshot: {
    title: string;
    subtitle: string;
    blocks: RecruiterSnapshotBlock[];
  };
  metrics: MetricItem[];
  careerStory: {
    title: string;
    subtitle: string;
    items: CareerStoryItem[];
  };
  experience: {
    title: string;
    subtitle: string;
    supervisorHighlightTitle: string;
    supervisorIntersection: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    flagshipLabel: string;
    viewCaseStudy: string;
    exploreProject: string;
    viewConcept: string;
    viewWork: string;
    architectureLabel: string;
    items: ProjectItem[];
  };
  howIApproach: {
    title: string;
    subtitle: string;
    methodPill: string;
    steps: ProblemApproachStep[];
  };
  selectedCapabilities: {
    title: string;
    subtitle: string;
    groups: SelectedCapabilitiesGroup[];
  };
  specialEducation: {
    title: string;
    subtitle: string;
    skills: string[];
    educationTitle: string;
    developmentTitle: string;
    education: EducationData;
  };
  aiTech: {
    title: string;
    subtitle: string;
    aiTiersTitle: string;
    aiTiers: {
      tier: string;
      title: string;
      description: string;
    }[];
    categories: SkillCategory[];
  };
  business: {
    title: string;
    subtitle: string;
    items: BusinessItem[];
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    pillarsTitle: string;
    pillars: FocusPillar[];
  };
  caseStudyModal: {
    problem: string;
    solution: string;
    role: string;
    system: string;
    technologies: string;
    value: string;
    keyFeatures: string;
    whatILearned: string;
    architecture: string;
    close: string;
  };
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    linkedin: string;
    github: string;
    directNumber: string;
    copied: string;
    copyEmail: string;
    openWhatsapp: string;
  };
  cvModal: {
    title: string;
    description: string;
    pathNotice: string;
    downloadNow: string;
    previewSummary: string;
    close: string;
  };
  footer: {
    copyright: string;
    tagline: string;
    backToTop: string;
  };
}

export const content: Record<Language, SiteContent> = {
  en: {
    hub: {
      name: 'MAHMOUD ELBAHI',
      positioning: 'Education • AI • Technology • Sales',
      summary: 'I combine real-world education experience with AI, technology, digital systems, and business thinking to build practical solutions.',
      paths: [
        {
          id: 'education',
          number: '01',
          title: 'EDUCATION',
          subtitle: 'Special Education · Autism · Speech · Training',
          description: 'Explore my professional experience, educational expertise, training, and work in special education.',
        },
        {
          id: 'technology',
          number: '02',
          title: 'TECHNOLOGY',
          subtitle: 'Digital Systems · Development · EdTech',
          description: 'Explore the digital systems, platforms, workflows, and technology projects I have designed and built.',
        },
        {
          id: 'ai',
          number: '03',
          title: 'AI',
          subtitle: 'AI · Automation · AI-assisted Development',
          description: 'Explore how I use AI to build workflows, educational solutions, and digital products.',
        },
        {
          id: 'sales',
          number: '04',
          title: 'SALES',
          subtitle: 'Customer Experience · Communication · Commercial Skills',
          description: 'Explore my sales experience and the business and customer skills that shaped my professional approach.',
        },
      ],
      viewFullProfile: 'VIEW FULL PROFILE',
      backToHub: 'ALL AREAS',
      allAreas: 'ALL AREAS',
      letsConnect: "Let's Connect",
    },
    educationPath: {
      title: 'EDUCATION',
      subtitle: 'Special Education · Autism · Speech & Language',
      badge: '01 // CLINICAL & EDUCATIONAL FOUNDATION',
      narrative: {
        title: 'FROM SPEECH THERAPY TO SPECIAL EDUCATION',
        text: "Mahmoud's professional journey in education began with clinical speech therapy training, developed through hands-on work with children with communication and developmental challenges, and expanded into specialized work in autism and special education. This experience established a human-centered foundation that later influenced his interest in educational technology, AI, and digital systems.",
      },
      timelineTitle: 'CAREER PROGRESSION TIMELINE',
      timelineItems: [
        {
          year: '2019',
          organization: 'Al-Ahrar Hospital',
          role: 'Speech Therapy Training',
          tag: 'Clinical Training',
        },
        {
          year: '2021',
          organization: 'Taqaddom Centre',
          role: 'Speech & Autism Specialist',
          tag: 'Clinical & Autism Intervention',
        },
        {
          year: '2023',
          organization: 'Hamza Academy',
          role: 'Speech & Language Therapist / Special Needs Specialist',
          tag: 'Specialized Training',
        },
        {
          year: 'Current',
          organization: 'Al-Furqan Private Schools',
          role: 'Technical Supervisor ✕ Special Education Teacher',
          tag: 'Saudi Arabia · Active Roles',
        },
      ],
      experienceTitle: 'PROFESSIONAL EXPERIENCE',
      viewExperienceLabel: 'VIEW EXPERIENCE',
      hideExperienceLabel: 'HIDE DETAILS',
      experienceItems: [
        {
          id: 'al-furqan-supervisor',
          role: 'Technical Supervisor',
          organization: 'Al-Furqan Private Schools',
          location: 'Saudi Arabia',
          period: '2023 – Present (Current Role)',
          employmentType: 'Current Role',
          shortSummary: 'Currently responsible for supporting technology operations and digital transformation initiatives within the school environment, translating real educational and administrative needs into practical digital systems, workflows, and tools.',
          points: [
            'Digital Transformation: Supporting school-wide digital initiatives, identifying operational bottlenecks, designing practical digital workflows, and transitioning from manual processes to structured digital systems.',
            'Educational Technology: Developing digital solutions for Special Education operations, organizing student information workflows, and streamlining attendance, IEPs, session logs, and reporting.',
            'Systems & Dashboards: Designing educational dashboards, data-driven workflows, and progress trackers to maximize data accessibility for teachers and administrators.',
            'AI & Automation: Deploying generative AI tools for productivity, designing prompt workflows for documentation, and prototyping rapid digital utilities tailored to school needs.',
          ],
          skills: [
            'Digital Transformation',
            'Educational Systems',
            'React & Firebase',
            'AI Workflow Automation',
            'Educational Dashboards',
            'Staff Enablement',
          ],
        },
        {
          id: 'al-furqan',
          role: 'Special Education Teacher — Autism Spectrum',
          organization: 'Al-Furqan Private Schools',
          location: 'Makkah, Saudi Arabia',
          period: '2023 – Present (Current Role)',
          employmentType: 'Current Role',
          shortSummary: 'Educating and rehabilitating students with Autism Spectrum Disorder (ASD), designing and managing Individualized Education Programs (IEP), and applying evidence-based interventions.',
          points: [
            'Autism education and evidence-based behavioral intervention',
            'Individualized Education Program (IEP) formulation, implementation, and tracking',
            'Diagnostic and continuous behavioral assessment (ABC data logging & developmental milestones)',
            'Comprehensive skill development across communication, cognitive, and daily living domains',
            'Parent communication, family empowerment, and structured progress reporting',
          ],
          skills: [
            'Autism Education',
            'Special Education',
            'IEP Development',
            'ABA',
            'Behavioral Assessment',
            'Parent Communication',
          ],
        },
        {
          id: 'taqaddom',
          role: 'Speech and Autism Specialist',
          organization: 'Taqaddom Centre for Children with Special Powers',
          location: 'Kafr El Sheikh, Egypt',
          period: 'February 2021 — January 2024',
          duration: '3 years',
          shortSummary: 'Supported children with speech and communication disorders, including Autism Spectrum Disorder (ASD) and developmental delays, delivering diagnostic evaluations, personalized therapy plans, and parent training.',
          points: [
            'Conducted comprehensive speech and language assessments to identify communication challenges.',
            'Developed individualized therapy plans based on each child’s needs.',
            'Provided one-on-one and group therapy sessions.',
            'Worked on speech clarity, language comprehension, communication, and social interaction.',
            'Applied Applied Behavior Analysis (ABA) techniques to support language development and behavioral improvement.',
            'Collaborated with multidisciplinary teams, including occupational therapists and psychologists.',
            'Trained and advised parents and caregivers on strategies to reinforce communication skills at home.',
          ],
          skills: [
            'Speech Therapy',
            'Autism',
            'ABA',
            'Assessment',
            'Individualized Intervention',
            'Parent Training',
            'Multidisciplinary Collaboration',
          ],
        },
        {
          id: 'hamza-academy',
          role: 'Speech & Language Therapist / Specialist for Children with Special Needs',
          organization: 'Hamza Academy',
          location: 'Egypt',
          period: 'January 2023 — October 2023',
          duration: '10 months',
          employmentType: 'Training',
          shortSummary: 'Specialized training role delivering speech and language therapy, communication skill development, and child-focused educational and therapeutic support for children with special needs.',
          points: [
            'Speech and language development and structured speech exercises',
            'Communication skills development and verbal fluency training',
            'Special needs therapeutic support and tailored classroom accommodations',
            'Individualized intervention aligned with developmental milestones',
            'Child-focused educational and therapeutic support',
          ],
          skills: [
            'Speech Therapy',
            'Special Education',
            'Communication',
            'Child Development',
            'Marketing',
          ],
        },
        {
          id: 'al-ahrar',
          role: 'Speech Therapist',
          organization: 'Al-Ahrar Hospital — Zagazig',
          location: 'Zagazig, Egypt',
          period: 'March 2019 — January 2021',
          duration: '1 year 11 months',
          employmentType: 'Training',
          shortSummary: 'Practical clinical training in the Speech Therapy Department at Al-Ahrar Hospital, assisting specialists in assessing and treating speech and language disorders across pediatric and adult cases.',
          points: [
            'Assisting specialists in speech and language assessments.',
            'Supporting therapy sessions and communication exercises.',
            'Gaining practical experience in designing and implementing therapy programs.',
            'Working with both children and adults with speech and language difficulties.',
            'Collaborating with the medical team.',
            'Applying academic knowledge in a real clinical environment.',
          ],
          skills: [
            'Speech Therapy',
            'Assessment',
            'Clinical Practice',
            'Therapy Programs',
            'Communication Disorders',
            'Multidisciplinary Teamwork',
          ],
        },
      ],
      expertiseTitle: 'CORE EXPERTISE',
      expertiseList: [
        'Autism Spectrum Disorder',
        'Special Education',
        'Applied Behavior Analysis (ABA)',
        'Speech & Language Therapy',
        'IEP Development',
        'Behavioral Assessment',
        'Behavior Modification',
        'Oral Motor Therapy',
        'Sensory Integration',
        'Parent Training & Empowerment',
      ],
      trainingTitle: 'ACCREDITED TRAINING & LICENSING',
      trainingList: [
        { title: 'ABAT (Applied Behavior Analysis Technician) 40-Hour Training (Candidate)', issuer: 'QABA Standards' },
        { title: 'Oral Motor Therapy & Articulation Assessment', issuer: 'Clinical Speech Training' },
        { title: 'Sensory Integration in Classroom & Clinical Settings', issuer: 'Advanced Pediatric Workshop' },
        { title: 'Applied Behavior Analysis (ABA) Intervention Strategies', issuer: 'Evidence-Based Training' },
        { title: 'IEP Development & Educational Goal Structuring', issuer: 'Saudi Educational Standards' },
        { title: 'Saudi Professional Educational License', issuer: 'Education & Training Evaluation Commission (ETEC)' },
      ],
      projectsTitle: 'EDUCATION PROJECTS',
      projectsSubtitle: 'Digital tools engineered specifically to solve operational friction in special education.',
      connection: {
        label: 'HOW THIS CONNECTS',
        equation: 'Human Needs → Education → Technology → Better Systems',
        text: 'Real frontline classroom and clinical experience reveals the actual operational friction teachers, therapists, and parents face—providing the exact domain insight required to build genuinely useful digital solutions.',
      },
    },
    technologyPath: {
      title: 'TECHNOLOGY',
      subtitle: 'Digital Systems · Development · EdTech',
      badge: '02 // SYSTEMS & DEVELOPMENT',
      whatIBuildTitle: 'WHAT I BUILD',
      whatIBuildItems: [
        'Educational & Administrative Dashboards',
        'Automated Digital Workflows & Google Apps Script pipelines',
        'Student Systems & Special Education Tracking tools',
        'Real-time Data Systems & Cloud Databases (Firestore)',
        'QR-based Workflows & Offline-first Physical-to-Digital bridges',
        'Modern Responsive Web Applications',
        'Full EdTech Platforms & Portals',
      ],
      projectsTitle: 'FEATURED TECHNOLOGY PROJECTS',
      projectsSubtitle: 'Production-ready web applications built to address concrete organizational needs.',
      stackTitle: 'TECHNOLOGY STACK',
      stackCategories: [
        {
          category: 'DEVELOPMENT',
          items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript / TypeScript', 'HTML5 / CSS3', 'Responsive Design'],
        },
        {
          category: 'DATA / BACKEND',
          items: ['Firebase', 'Firestore', 'Firebase Auth', 'REST APIs', 'Cloud Functions (Basic)'],
        },
        {
          category: 'TOOLS & ECOSYSTEM',
          items: ['GitHub', 'Google AI Studio', 'Figma', 'Canva', 'Google Sheets & Forms', 'Notion', 'WordPress', 'Google Sites'],
        },
      ],
      technicalRole: {
        title: 'TECHNICAL ROLE & POSITIONING',
        pillars: ['Education', 'Technology', 'Operations', 'Digital Transformation'],
        description: 'I work at the practical intersection of classroom pedagogy, modern web tooling, school operational workflows, and digital transformation—bridging the gap between non-technical stakeholders and scalable digital systems.',
      },
      connection: {
        label: 'HOW THIS CONNECTS',
        equation: 'Technology → Education → Practical Solutions',
        text: 'Technology is never treated as code for its own sake. It is designed to remove manual friction, automate repetitive reporting, and provide educators and organizations with reliable, lightweight systems.',
      },
    },
    aiPath: {
      title: 'AI & AUTOMATION',
      subtitle: 'AI · Automation · AI-assisted Development',
      badge: '03 // APPLIED AI & WORKFLOW AUTOMATION',
      howIUseAiTitle: 'HOW I USE AI',
      howIUseAiSubtitle: 'Practical application of modern AI models and automated pipelines to accelerate output and eliminate repetitive effort.',
      pillars: [
        {
          title: 'AI-Assisted Development',
          description: 'Using modern AI coding tools and LLMs to accelerate prototyping, generate robust component structures, and build responsive web applications in record time.',
        },
        {
          title: 'Workflow Automation',
          description: 'Designing AI-assisted automation pipelines that link intake forms, prompt templates, and structured data outputs—eliminating repetitive manual data entry.',
        },
        {
          title: 'Educational AI',
          description: 'Applying generative AI to educational planning, lesson adaptations, Arabic content drafting, and specialized IEP objective structuring.',
        },
        {
          title: 'Product Prototyping',
          description: 'Using AI to rapidly explore, mock up, and iterate on interactive product ideas from concept to live functional prototype in hours.',
        },
      ],
      aiProjectsTitle: 'AI-POWERED PROJECTS',
      aiProjectsSubtitle: 'Real implementations leveraging generative models and automated pipelines.',
      aiProjects: [
        {
          title: 'AI Business Website Generator',
          flow: 'Business Input → Prompt Engine → Interactive RTL Website',
          description: 'Interactive concept taking raw business profiles and generating tailored Arabic website structures, headlines, and call-to-action sections.',
          badge: 'Concept & Prototype',
        },
        {
          title: 'AI × Special Education Workflows',
          flow: 'Behavioral Observations → AI Structuring → IEP Progress Drafts',
          description: 'Applied workflows helping special educators draft behavioral goals and session notes with high consistency and speed.',
          badge: 'Applied Workflow',
        },
        {
          title: 'AI × Product Prototyping Engine',
          flow: 'Problem Definition → LLM Logic Mapping → Live React Build',
          description: 'Accelerated development methodology using AI Studio and LLM-assisted coding to move rapidly from requirement to deployment.',
          badge: 'Development System',
        },
      ],
      toolkitTitle: 'AI TOOLKIT',
      toolkitItems: [
        'Google AI Studio',
        'Generative AI (Gemini & LLMs)',
        'Prompt Engineering & System Directives',
        'AI-assisted Development & Tooling',
        'AI Workflow Automation & Data Structuring',
      ],
      positioningNote: 'I focus on practical, applied AI implementation and product integration—not foundational machine learning research or model training.',
      connection: {
        label: 'HOW THIS CONNECTS',
        equation: 'AI → Automation → Better Workflows',
        text: 'AI amplifies human expertise by handling repetitive synthesis, enabling professionals to focus on high-touch clinical decisions, strategic execution, and user empathy.',
      },
    },
    salesPath: {
      title: 'SALES & COMMERCIAL ACUMEN',
      subtitle: 'Customer Experience · Communication · Commercial Skills',
      badge: '04 // COMMERCIAL & HUMAN DYNAMICS',
      experienceTitle: 'COMMERCIAL EXPERIENCE',
      vodafoneExperience: {
        role: 'Senior Sales & Customer Experience Specialist',
        company: 'Vodafone Egypt',
        location: 'Egypt',
        period: '2020 – 2021',
        points: [
          'High-volume customer communication, deep discovery, and active needs analysis',
          'Consultative selling of complex telecom, enterprise, and data solutions',
          'Professional objection handling, negotiation, and closing under pressure',
          'Long-term client relationship building and trust maintenance',
          'Consistent target-oriented execution and quota achievement',
          'Delivering high-standard customer experience and loyalty retention',
        ],
      },
      valueFlowTitle: 'WHAT SALES ADDED TO MY PROFESSIONAL PROFILE',
      valueFlowSubtitle: 'The 5-step commercial mindset that directly informs my product architecture and technical solutions.',
      valueFlowSteps: [
        {
          step: '01',
          action: 'Listen',
          description: 'Deeply uncover customer pain points, implicit constraints, and unspoken motivations.',
        },
        {
          step: '02',
          action: 'Communicate',
          description: 'Translate complex technical capabilities into clear, persuasive, human-centered language.',
        },
        {
          step: '03',
          action: 'Understand Value',
          description: 'Connect features directly to tangible business benefits, time savings, and cost reduction.',
        },
        {
          step: '04',
          action: 'Negotiate',
          description: 'Handle skepticism and friction with empathy, creating alignment around shared goals.',
        },
        {
          step: '05',
          action: 'Build Relationships',
          description: 'Earn lasting credibility through accountability, follow-through, and reliable delivery.',
        },
      ],
      salesImpactText: 'Sales experience provided a rigorous grounding in human psychology, real customer motivation, and commercial viability—ensuring that every digital product I design solves genuine user problems and delivers measurable value.',
      connection: {
        label: 'HOW THIS CONNECTS',
        equation: 'Customer → Product → Value',
        text: 'Understanding human psychology, real buyer objections, and commercial value guarantees that digital products solve real-world problems rather than theoretical ones.',
      },
    },
    nav: {
      home: 'Overview',
      snapshot: 'Snapshot',
      story: 'Story',
      experience: 'Experience',
      projects: 'Projects',
      approach: 'Approach',
      capabilities: 'Capabilities',
      expertise: 'Education & SEN',
      tech: 'AI & Tech',
      business: 'Business',
      about: 'About',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    hero: {
      name: 'MAHMOUD ELBAHI',
      positioning: 'Special Education × Technical Supervision × AI × EdTech',
      statement:
        'Special Education professional specializing in Autism, Speech & Language, and educational intervention, currently working in Saudi Arabia as a Special Education Teacher and Technical Supervisor, supporting digital transformation and the development of practical educational systems and workflows.',
      status: 'Open to selected opportunities & collaborations',
      roleSignals: [
        'Special Education Teacher (Autism)',
        'Technical Supervisor & Digital Transformation',
        'EdTech / Educational Systems & Dashboards',
        'Applied AI & Workflow Automation',
      ],
      exploreCta: 'Explore My Work',
      downloadCvCta: 'Download CV',
      contactCta: 'Let\'s Connect',
    },
    recruiterSnapshot: {
      title: 'Recruiter Snapshot',
      subtitle: 'A 10-second summary of core profile dimensions and interdisciplinary impact.',
      blocks: [
        {
          key: 'domain',
          category: 'CORE DOMAIN',
          headline: 'Special Education & Autism',
          description: 'Classroom practitioner with verified expertise in autism spectrum support, IEP design, assessment, and behavioral intervention.',
          tags: ['Autism Spectrum', 'IEP Systems', 'Applied Behavior', 'Speech Foundations'],
        },
        {
          key: 'technology',
          category: 'TECHNOLOGY',
          headline: 'AI · Digital Systems · Web Development',
          description: 'Builder utilizing React, modern frontend tooling, Firebase, and generative AI workflow automation to build responsive web applications.',
          tags: ['React & Vite', 'Firebase / Firestore', 'AI Automation', 'Digital Dashboards'],
        },
        {
          key: 'product',
          category: 'PRODUCT',
          headline: 'EdTech · SaaS · Workflow Solutions',
          description: 'Translates messy classroom and administrative pain points into cohesive product architectures, role-based workflows, and clean UX.',
          tags: ['Product Architecture', 'User Workflows', 'SaaS Concepts', 'Rapid MVP'],
        },
        {
          key: 'business',
          category: 'BUSINESS',
          headline: 'Sales · Customer Experience · Communication',
          description: 'Commercial experience at Vodafone in client needs discovery, value articulation, consultative persuasion, and stakeholder alignment.',
          tags: ['Needs Discovery', 'Customer Experience', 'Negotiation', 'Commercial Logic'],
        },
      ],
    },
    metrics: [
      {
        value: '7+ Years',
        label: 'Applied Experience',
        sublabel: 'Education, Operations & Tech',
      },
      {
        value: 'Special Ed + Tech',
        label: 'Uncommon Intersection',
        sublabel: 'Domain Depth + Builder Skills',
      },
      {
        value: '4 Full Prototypes',
        label: 'Product Architectures',
        sublabel: 'Miyar 360, Leen, SEN Tools, AI Web',
      },
      {
        value: 'Saudi Licensed',
        label: 'Verified Professional',
        sublabel: 'Education & Training Authority',
      },
    ],
    careerStory: {
      title: 'The Career Story: Progression of Capabilities',
      subtitle:
        'A deliberate evolution from clinical speech therapy to special education, technical supervision, applied AI, and software product design.',
      items: [
        {
          step: '01',
          title: 'Speech Therapy',
          tagline: 'Human-Centered Communication',
          description:
            'Began in clinical language rehabilitation and speech therapy. Built deep direct experience diagnosing communication barriers, structuring non-verbal interaction protocols, understanding family anxieties, and observing human nuance.',
          coreImpact: 'Formed the empathetic foundation: understanding human communication, diagnosis, and individual needs.',
          tags: ['Language Assessment', 'Non-Verbal Support', 'Clinical Protocols', 'Family Counseling'],
        },
        {
          step: '02',
          title: 'Special Education',
          tagline: 'Education + Behavior + Individualized Systems',
          description:
            'Moved into specialized autism education and developmental intervention. Managed individualized educational programs (IEPs), multi-domain assessments, behavioral modification protocols, and classroom differentiation.',
          coreImpact: 'Developed comprehensive expertise in IEP frameworks, classroom management, and autism support.',
          tags: ['Autism Spectrum', 'IEP Design', 'Behavior Modification', 'Functional Assessment'],
        },
        {
          step: '03',
          title: 'Technical Supervision',
          tagline: 'Education + Technology Integration',
          description:
            'Stepped into a technical and operational coordination role. Led digital system adoption, built structured reporting templates, trained teachers on software, and redesigned administrative communication workflows across school teams.',
          coreImpact: 'Bridged pedagogical practice with operational technology, systemizing daily reporting and staff enablement.',
          tags: ['Workflow Redesign', 'Teacher Enablement', 'Data Organization', 'Operational Tech'],
        },
        {
          step: '04',
          title: 'AI & Digital Transformation',
          tagline: 'Technology + Automation',
          description:
            'Applied generative AI models and structured prompt frameworks to reduce administrative overhead in educational planning, automate repetitive documentation, and construct visual instructional assets rapidly.',
          coreImpact: 'Leveraged AI to eliminate manual friction, turning days of documentation into automated minutes.',
          tags: ['Generative AI', 'Prompt Engineering', 'Documentation Automation', 'Digital Transformation'],
        },
        {
          step: '05',
          title: 'Product Development',
          tagline: 'Problem → System → Product',
          description:
            'Synthesized hands-on educational insights and technical skills into full digital products. Architected Miyar 360 for special education coordination, Leen for student transit safety, and modular classroom web utilities.',
          coreImpact: 'Transformed real-world institutional friction into working, deployable web software solutions.',
          tags: ['Full Product Design', 'React / Firebase', 'UX Architecture', 'MVP Execution'],
        },
        {
          step: '06',
          title: 'Sales & Customer Experience',
          tagline: 'Customer Empathy + Commercial Acumen',
          description:
            'Worked in customer-facing commercial operations at Vodafone. Mastered fast needs discovery, active listening, consultative negotiation, value-based positioning, and target-driven accountability.',
          coreImpact: 'Equipped every product build with rigorous commercial viability, clarity, and user empathy.',
          tags: ['Client Needs Discovery', 'Negotiation', 'Target Execution', 'Commercial Mindset'],
        },
      ],
    },
    experience: {
      title: 'Professional Track Record',
      subtitle:
        'Hands-on experience spanning special education classrooms, digital operations, technical supervision, and commercial communication.',
      supervisorHighlightTitle: 'KEY LEADERSHIP & TECHNICAL INTERSECTION',
      supervisorIntersection: 'Education + Operations + Technology + Training + AI',
      items: [
        {
          id: 'technical-supervisor',
          role: 'Technical Supervisor & Digital Coordinator',
          organization: 'Educational Institution',
          location: 'Saudi Arabia',
          period: 'Key Role',
          isFeatured: true,
          roleBadge: 'Featured Multi-Disciplinary Role',
          intersectionLabel: 'Education + Operations + Technology + Training + AI',
          whatIWorkedOn: [
            'Designed and streamlined digital operational workflows for educational staff and administration.',
            'Implemented centralized reporting systems, reducing paper-based administrative bottlenecks.',
            'Trained and onboarded teachers on modern digital tools, assessment templates, and classroom platforms.',
            'Integrated AI-assisted prompt workflows to expedite individual educational plan (IEP) formulation.',
            'Organized student progress data into clear dashboards for administrative review and parent updates.',
          ],
          capabilitiesDeveloped: [
            'Digital Workflow Design',
            'Staff Enablement',
            'AI-Assisted Workflows',
            'Data Dashboards',
            'System Implementation',
          ],
        },
        {
          id: 'special-ed-teacher',
          role: 'Special Education Teacher (Autism Spectrum)',
          organization: 'Specialized Educational Environment',
          location: 'Saudi Arabia',
          period: 'Specialized Practice',
          whatIWorkedOn: [
            'Developed and executed Individualized Educational Plans (IEPs) tailored to diverse autism profiles.',
            'Conducted continuous behavioral assessments (ABC analysis) and applied positive reinforcement protocols.',
            'Created multi-sensory visual schedules and interactive learning aids to support cognitive skill growth.',
            'Maintained regular transparent communication channels with parents on milestone progress and home strategies.',
          ],
          capabilitiesDeveloped: [
            'Autism Intervention',
            'IEP Lifecycle Management',
            'Behavior Modification',
            'Direct Student Support',
          ],
        },
        {
          id: 'speech-therapist-taqaddum',
          role: 'Speech & Language Specialist',
          organization: 'Al Taqaddum Special Needs Center',
          location: 'Egypt',
          period: 'Clinical Foundation',
          whatIWorkedOn: [
            'Evaluated speech, language delays, and articulation challenges in pediatric cases.',
            'Formulated individual therapeutic intervention regimens targeting expressive and receptive communication.',
            'Utilized alternative and augmentative communication (AAC) techniques for non-verbal learners.',
            'Coached parents on speech stimulation exercises for reinforcement in home environments.',
          ],
          capabilitiesDeveloped: [
            'Clinical Communication Analysis',
            'Diagnostic Assessment',
            'AAC Systems',
            'Parent Coaching',
          ],
        },
        {
          id: 'vodafone-commercial',
          role: 'Commercial & Customer Experience Specialist',
          organization: 'Vodafone',
          location: 'Egypt',
          period: 'Commercial Experience',
          highlightNote:
            'This commercial foundation provides Mahmoud with sharp user empathy, needs discovery skills, and business pragmatism that inform every software product he designs.',
          whatIWorkedOn: [
            'Conducted real-time customer needs assessments to recommend optimal telecom and service packages.',
            'Handled complex customer inquiries, de-escalating conflicts with patience, clarity, and empathy.',
            'Negotiated solutions aligned with both customer satisfaction and organizational revenue targets.',
            'Consistently achieved high customer satisfaction ratings and met rigorous team performance metrics.',
          ],
          capabilitiesDeveloped: [
            'Customer Needs Discovery',
            'Consultative Selling',
            'High-Stakes Negotiation',
            'Performance Metrics & ROI',
          ],
        },
      ],
    },
    projects: {
      title: 'Systems & Software Products',
      subtitle:
        'Functional prototypes and software architectures built to solve real operational, educational, and business challenges.',
      flagshipLabel: 'FLAGSHIP CASE STUDY',
      viewCaseStudy: 'Explore Flagship Case Study',
      exploreProject: 'View Project Architecture',
      viewConcept: 'View Product Concept',
      viewWork: 'View System Details',
      architectureLabel: 'Core Architecture Flow',
      items: [
        {
          id: 'miyar-360',
          name: 'Miyar 360 (معيار 360)',
          category: 'Special Education + Product + Technology',
          tagline: 'Comprehensive Digital Special Education Management Platform',
          summary:
            'A unified Arabic-first platform concept centralizing student profiles, IEP formulation, daily session logs, behavioral tracking, and parent communication into one synchronized hub.',
          isFlagship: true,
          technologies: ['React', 'Firebase / Firestore', 'Tailwind CSS', 'AI Prompt Engineering', 'Vite'],
          architectureDiagram: [
            'Student Profile Data',
            'IEP Goals & Behavioral Logs',
            'Specialist Session Tracker',
            'Automated Analytics & Reports',
            'Parent Experience Portal',
          ],
          caseStudy: {
            problem:
              'Special education centers often operate with fragmented paper folders, isolated WhatsApp updates, manual IEP writing, and disconnected session notes, creating administrative strain and parent anxiety.',
            solution:
              'A centralized web platform unifying student clinical records, IEP milestones, daily session logging, behavioral monitoring, and automated progress report generation into an intuitive Arabic interface.',
            myRole:
              'Conceived full product vision, mapped special education operational workflows, designed UX/UI wireframes, and built the interactive frontend connected to Firebase data structures.',
            howItWorks:
              'Teachers and therapists log session outcomes and behavioral metrics in under 60 seconds; the system aggregates data to update IEP goal progress bars and automatically formats printable/exportable parent reports.',
            value:
              'Saves teachers 4+ hours per week in manual paperwork, eliminates record loss, and delivers transparent, data-grounded updates to families.',
            keyFeatures: [
              'Structured IEP Goal & Objective Formulation Engine',
              'Fast Daily Session Logging (Attendance, Skills, Notes)',
              'Behavioral Tracking & Incident Documentation (ABC Model)',
              'Automated Milestone Progress Analytics & Reports',
              'Parent Portal with Real-Time Goal Transparency',
              'Multi-Role Permissions (Advisors, Teachers, Admin, Parents)',
            ],
            whatILearned:
              'Designing for special education requires extreme UI clarity—reducing cognitive friction for busy practitioners is the single most important factor for software adoption.',
          },
        },
        {
          id: 'leen-transport',
          name: 'Leen / Z-TranZit (لين)',
          category: 'Mobility + Safety + Product',
          tagline: 'Smart School Transportation & Student Safety Platform',
          summary:
            'A synchronized student commute monitoring solution bridging schools, bus drivers, attendants, and parents through QR verification and live route visibility.',
          technologies: ['React', 'Firebase Realtime', 'Tailwind CSS', 'Geolocation APIs', 'QR Scanning'],
          architectureDiagram: [
            'Student QR Badge',
            'Driver / Attendant App',
            'Live Dispatch Cloud',
            'Real-Time Route Maps',
            'Parent Guardian Alerts',
          ],
          caseStudy: {
            problem:
              'School bus commutes lack real-time visibility, manual paper rosters cause attendance discrepancies, and parents experience high anxiety during daily morning and afternoon transit.',
            solution:
              'A multi-interface transport platform where attendants scan student QR badges upon boarding/departure, instantly dispatching timestamped notifications and live status to parents and dispatchers.',
            myRole:
              'Designed user personas (Driver, Bus Attendant, School Admin, Parent), mapped transit edge cases (unplanned stops, absent students), and built the responsive web dashboard.',
            howItWorks:
              'Attendants use a quick-scan mobile interface. Each scan logs GPS coordinates and time into Firebase, updating the school fleet dispatch console and sending automated status alerts to parents.',
            value:
              'Ensures zero student oversight, eliminates frantic phone calls to school reception, and provides school administrations with verifiable transit logs.',
            keyFeatures: [
              'One-Tap QR Badge Student Check-in / Check-out',
              'Real-Time Bus Fleet Dispatch & Status Monitor',
              'Instant Automated Boarding / Arrival Alerts for Parents',
              'Emergency Delay & Incident Alert Dispatcher',
              'Driver Route & Student Passenger Manifests',
            ],
            whatILearned:
              'Mobile interfaces for drivers and attendants must be operational with one hand and large high-contrast touch targets in bright daylight conditions.',
          },
        },
        {
          id: 'ai-website-builder',
          name: 'AI Business Website Generator',
          category: 'AI + SaaS + Business',
          tagline: 'Automated Arabic Web Presence Engine for Local Businesses',
          summary:
            'A rapid generator converting basic business profile inputs into customized, high-converting Arabic landing pages with automated localized copy and WhatsApp ordering actions.',
          technologies: ['React', 'Generative AI Prompts', 'Tailwind CSS', 'Vite', 'RTL Engine'],
          architectureDiagram: [
            'Business Profile Intake',
            'Structured AI Prompt Pipeline',
            'Dynamic Arabic Copy Generation',
            'Component Composition Engine',
            'Deployable Arabic Landing Page',
          ],
          caseStudy: {
            problem:
              'Small Arab service businesses, clinics, and local shops frequently lack websites due to high agency costs, technical complexity, and poor RTL template support.',
            solution:
              'A guided tool where owners answer 4 key questions; generative AI models produce engaging Arabic headlines, value propositions, and structured service menus within a responsive website layout.',
            myRole:
              'Developed system prompts for natural regional Arabic copy generation, created modular responsive Tailwind UI components, and built the live preview generator.',
            howItWorks:
              'User inputs business category, location, and key services. The backend prompt pipeline generates tailored value copy and instantly renders a live preview with direct WhatsApp action buttons.',
            value:
              'Reduces web deployment time from 2 weeks to 2 minutes, enabling non-technical merchants to immediately capture leads.',
            keyFeatures: [
              '4-Step Guided Arabic Business Questionnaire',
              'AI Copy Generation Optimized for Conversion & Local Dialects',
              'Instant Live Responsive Web Layout Rendering',
              'Direct-to-WhatsApp Lead & Order Integration',
              'One-Click Dark/Light Theme Customization',
            ],
            whatILearned:
              'Structured system prompts with explicit negative constraints produce far more dependable business copy than open-ended LLM generations.',
          },
        },
        {
          id: 'sen-digital-tools',
          name: 'Special Education Digital Toolkit',
          category: 'Education + AI + Micro-Tools',
          tagline: 'Classroom Utilities for Special Educators & Therapists',
          summary:
            'A suite of lightweight interactive digital utilities including token economies, sensory timers, ABC behavior loggers, and visual schedule organizers built for active classroom use.',
          technologies: ['React', 'Local State Engines', 'Tailwind CSS', 'Web Audio', 'Touch UX'],
          architectureDiagram: [
            'Classroom Need / Behavior',
            'Interactive Touch Utility',
            'Real-Time Student Reinforcement',
            'Instant Behavioral Data Log',
            'Instructional Continuity',
          ],
          caseStudy: {
            problem:
              'Classroom teachers lose momentum when juggling physical tokens, mechanical stopwatches, printed schedule strips, and paper clipboards while managing active student behaviors.',
            solution:
              'A suite of clean, distraction-free web tools designed to run seamlessly on classroom iPads and smartboards, allowing instant reinforcement and zero-fuss data logging.',
            myRole:
              'Designed, tested, and iterated every tool directly in active special education classrooms, refining auditory feedback and visual pacing based on student responses.',
            howItWorks:
              'Teachers launch dedicated single-purpose utilities: a custom token board with customizable token icons, a countdown sensory visual timer, and an instant tap ABC behavior logger.',
            value:
              'Maintains instructional continuity, reduces physical clutter, and keeps students engaged through consistent visual-auditory reinforcement.',
            keyFeatures: [
              'Customizable Interactive Token Economy Boards (Stars, Badges, Coins)',
              'Sensory Visual Timers with Calming Visual Transitions',
              'One-Tap ABC Behavior Logger for Antecedent-Behavior-Consequence',
              'Visual Schedule Sequencer for Daily Routine Transition Support',
            ],
            whatILearned:
              'Classroom digital tools must load instantly, require zero login friction, and provide customizable sensory settings for neurodivergent students.',
          },
        },
      ],
    },
    howIApproach: {
      title: 'How I Approach Problems',
      subtitle:
        'A repeatable 5-step methodology that moves from field-level human observation to robust, refined digital solutions.',
      methodPill: 'REPEATABLE PROBLEM-SOLVING METHOD',
      steps: [
        {
          step: '01',
          title: 'Observe',
          description:
            'Immerse in the real-world operational context. Observe how educators, specialists, or team members actually work, identifying unstated pain points, emotional friction, and manual inefficiencies.',
          action: 'Understand the human reality before touching any technology.',
        },
        {
          step: '02',
          title: 'Map',
          description:
            'Deconstruct the messy workflow into distinct stages, role responsibilities, data inputs, edge cases, and decision points to identify the exact leverage point.',
          action: 'Map workflows, user journeys, and data handoffs.',
        },
        {
          step: '03',
          title: 'Design',
          description:
            'Architect a practical, minimal system. Establish the data schema, role-based interaction model, and simple, high-contrast user interface layouts that minimize cognitive load.',
          action: 'Design intuitive systems, not just pretty screens.',
        },
        {
          step: '04',
          title: 'Build',
          description:
            'Develop working functional prototypes rapidly using modern frontend technologies (React, Tailwind, Firebase) and AI-accelerated workflows to test hypotheses early.',
          action: 'Build usable MVPs with real responsive interaction.',
        },
        {
          step: '05',
          title: 'Improve',
          description:
            'Deploy to real users in the field, gather qualitative feedback and usability friction points, and iterate quickly to maximize real-world adoption and utility.',
          action: 'Refine based on actual practitioner behavior and feedback.',
        },
      ],
    },
    selectedCapabilities: {
      title: 'Selected Capabilities Matrix',
      subtitle:
        'A scannable breakdown of core capabilities across clinical, technical, product, and business disciplines.',
      groups: [
        {
          title: 'Education & Human Services',
          subtitle: 'Clinical & Pedagogical Foundation',
          items: [
            'Autism Spectrum Disorder',
            'Individualized Educational Plans (IEP)',
            'Special Education Teaching',
            'Applied Behavior Analysis (ABA Basics)',
            'Speech & Language Therapy Foundations',
            'Alternative & Augmentative Communication (AAC)',
            'Functional & Developmental Assessment',
            'Parent Coaching & Family Communication',
          ],
        },
        {
          title: 'Technology & Engineering',
          subtitle: 'Modern Web & Applied Tools',
          items: [
            'React & Vite Ecosystem',
            'TypeScript & JavaScript (ESNext)',
            'Tailwind CSS & Responsive Layouts',
            'Firebase & Firestore Architecture',
            'REST APIs & Asynchronous State',
            'RTL (Arabic) Layout Engineering',
            'Digital Dashboards & Data Visualization',
            'Authentication & Role-Based Access',
          ],
        },
        {
          title: 'Product & System Design',
          subtitle: 'From Concept to Execution',
          items: [
            'Operational Workflow Mapping',
            'User Experience (UX) Architecture',
            'Rapid MVP Prototyping',
            'EdTech System Design',
            'Form & Data Collection Workflows',
            'QR Verification Workflows',
            'Product Requirement Specification',
            'Continuous User Feedback Iteration',
          ],
        },
        {
          title: 'Business & Communication',
          subtitle: 'Commercial Empathy & Execution',
          items: [
            'Customer Needs Discovery',
            'Consultative Value Communication',
            'Stakeholder Negotiation & Persuasion',
            'Target & Performance Accountability',
            'Staff Enablement & Software Training',
            'Client Relationship Management',
            'Cross-Disciplinary Team Alignment',
            'Commercial Pragmatism & ROI Focus',
          ],
        },
      ],
    },
    specialEducation: {
      title: 'Special Education Expertise & Credentials',
      subtitle:
        'Grounding technology in licensed, real-world special education practice and verified clinical methodology.',
      skills: [
        'Autism Spectrum Disorder Intervention',
        'Individualized Educational Plans (IEP)',
        'Behavior Modification & Positive Support',
        'Speech & Language Development Protocols',
        'Specialized Educational Curricula',
        'Sensory-Friendly Learning Design',
        'Functional Classroom Assessment',
        'Parent Consultation & Guidance',
      ],
      educationTitle: 'ACADEMIC FOUNDATION',
      developmentTitle: 'VERIFIED PROFESSIONAL CERTIFICATIONS',
      education: {
        degree: {
          title: 'Bachelor of Arts & Education',
          specialization: 'Special Education & Psychology',
          institution: 'Zagazig University',
        },
        professionalDevelopment: [
          'Professional Educational License — Saudi Education & Training Evaluation Commission',
          'Autism & Developmental Disorders Intervention Specialist Certification',
          'Speech & Language Disorders Therapeutic Protocols',
          'Applied Behavior Modification & Positive Reinforcement',
          'Modern Instructional Design & Assistive Educational Technology',
        ],
      },
    },
    aiTech: {
      title: 'Applied AI & Technical Credibility',
      subtitle:
        'A balanced technical skill set combining modern web development, applied AI workflow design, and operational automation.',
      aiTiersTitle: 'HOW MAHMOUD WORKS WITH AI',
      aiTiers: [
        {
          tier: '01 // AI USER',
          title: 'Workforce Acceleration',
          description:
            'Uses state-of-the-art AI models daily to accelerate research, draft instructional content, refine documentation, and write technical specifications in a fraction of standard time.',
        },
        {
          tier: '02 // AI WORKFLOW DESIGNER',
          title: 'Structured Prompt Pipelines',
          description:
            'Designs repeatable prompt systems and structured inputs/outputs that transform complex educational or business requirements into consistent, high-quality deliverables.',
        },
        {
          tier: '03 // AI-ASSISTED BUILDER',
          title: 'Rapid Software Prototyping',
          description:
            'Leverages modern AI-assisted engineering tools to build complete, functional web prototypes (React + Firebase) rapidly, validating product concepts with real end users.',
        },
      ],
      categories: [
        {
          title: 'Frontend & Web Development',
          description: 'Building clean, fast, responsive web interfaces with full Arabic RTL support.',
          evidenceProject: 'Miyar 360, Leen, AI Website Generator',
          skills: [
            { name: 'React', projectEvidence: 'Miyar 360, Leen' },
            { name: 'TypeScript / JS', projectEvidence: 'All Projects' },
            { name: 'Tailwind CSS', projectEvidence: 'Miyar 360, Leen' },
            { name: 'Vite & Modern Tooling', projectEvidence: 'All Projects' },
            { name: 'Responsive RTL Layouts', projectEvidence: 'Miyar 360, AI Generator' },
          ],
        },
        {
          title: 'Data, Backend & Automation',
          description: 'Structuring reliable database models, authentication, and automated workflows.',
          evidenceProject: 'Miyar 360, Leen',
          skills: [
            { name: 'Firebase Firestore', projectEvidence: 'Miyar 360, Leen' },
            { name: 'Firebase Auth & Roles', projectEvidence: 'Miyar 360' },
            { name: 'REST APIs & Webhooks', projectEvidence: 'Leen, Miyar 360' },
            { name: 'Digital Forms & QR Systems', projectEvidence: 'Leen, SEN Tools' },
            { name: 'Google Sheets (Advanced)', projectEvidence: 'Educational Operations' },
          ],
        },
        {
          title: 'AI & Product Tools',
          description: 'Applying generative models and visual tooling to bring software concepts to life.',
          evidenceProject: 'AI Business Generator, SEN Toolkit',
          skills: [
            { name: 'Generative AI & LLMs', projectEvidence: 'AI Generator, Miyar 360' },
            { name: 'Prompt Engineering', projectEvidence: 'AI Website Generator' },
            { name: 'Google AI Studio', projectEvidence: 'Concept Workflows' },
            { name: 'Figma & UI Wireframing', projectEvidence: 'Miyar 360, Leen' },
            { name: 'Notion & Documentation', projectEvidence: 'System Architecture' },
          ],
        },
      ],
    },
    business: {
      title: 'Commercial & Customer Experience Perspective',
      subtitle:
        'Real-world business experience connecting user needs with sustainable product viability and clear communication.',
      items: [
        {
          title: 'Customer Needs Discovery & Active Listening',
          description:
            'Trained at Vodafone to dissect customer pain points quickly, ask the right diagnostic questions, and translate complex service options into clear, compelling solutions.',
          badge: 'Vodafone Foundation',
        },
        {
          title: 'Consultative Communication & Persuasion',
          description:
            'Bridges the gap between technical details and business value, effectively presenting ideas to stakeholders, school administrators, and non-technical clients.',
          badge: 'Stakeholder Alignment',
        },
        {
          title: 'Target-Driven Execution & Accountability',
          description:
            'Experienced working under measurable KPIs and performance metrics, instilling a strong sense of urgency, delivery discipline, and outcome ownership in every project.',
          badge: 'Commercial Discipline',
        },
      ],
    },
    about: {
      title: 'About Mahmoud Elbahi',
      p1:
        'Mahmoud Elbahi is an Egyptian professional based in Saudi Arabia who works at the intersection of special education, applied AI, modern technology, and product development. Having started in direct clinical speech therapy and autism education, he brings genuine domain insight into how students learn, how teachers work, and where educational operations break down.',
      p2:
        'Rather than viewing technology as an abstract concept, Mahmoud uses modern web development and generative AI as practical tools to build real, usable software that simplifies administrative burdens and improves human outcomes.',
      pillarsTitle: 'WHAT I AM BUILDING TOWARD',
      pillars: [
        {
          title: 'Special Education Technology',
          description: 'Pioneering Arabic-first EdTech platforms that make individualized education tracking effortless and data-rich.',
        },
        {
          title: 'AI Workflow Automation',
          description: 'Eliminating repetitive administrative paperwork for educators and organizations through intelligent prompt systems.',
        },
        {
          title: 'Human-Centered Product Design',
          description: 'Translating real-world operational bottlenecks into clear, intuitive digital tools that people actually enjoy using.',
        },
        {
          title: 'Cross-Disciplinary Team Impact',
          description: 'Contributing to forward-thinking EdTech startups, technology teams, and educational institutions as a versatile domain bridge.',
        },
      ],
    },
    caseStudyModal: {
      problem: 'The Problem',
      solution: 'The Solution',
      role: 'Mahmoud\'s Role',
      system: 'How the System Works',
      technologies: 'Technology Stack',
      value: 'Practical Value & Impact',
      keyFeatures: 'Key Capabilities & Features',
      whatILearned: 'Key Architectural Insights',
      architecture: 'System Architecture Flow',
      close: 'Close Case Study',
    },
    contact: {
      title: 'Let\'s Build Something Useful',
      subtitle:
        'Looking for someone who understands both the human problem and the technology? Open to select full-time roles, EdTech collaborations, product development, and technical consulting.',
      whatsapp: 'WhatsApp Direct',
      email: 'Email Mahmoud',
      linkedin: 'LinkedIn Profile',
      github: 'GitHub Profile',
      directNumber: '+966 57 060 0671',
      copied: 'Copied to clipboard!',
      copyEmail: 'Copy Email Address',
      openWhatsapp: 'Open WhatsApp Conversation',
    },
    cvModal: {
      title: 'Curriculum Vitae (CV)',
      description:
        'Download the official comprehensive CV of Mahmoud Elbahi or review the concise qualification overview below.',
      pathNotice: 'The PDF is structured for recruiters, hiring managers, and EdTech founders.',
      downloadNow: 'Download Official PDF CV',
      previewSummary: 'Qualifications & Background Summary',
      close: 'Close Window',
    },
    footer: {
      copyright: 'Mahmoud Elbahi. All rights reserved.',
      tagline: 'Special Education × AI × Technology × EdTech',
      backToTop: 'Back to Top',
    },
  },
  ar: {
    hub: {
      name: 'محمود الباهي',
      positioning: 'التعليم • الذكاء الاصطناعي • التقنية • المبيعات',
      summary: 'أجمع بين الخبرة الواقعية في التعليم والذكاء الاصطناعي والتقنية والأنظمة الرقمية والتفكير التجاري لبناء حلول عملية.',
      paths: [
        {
          id: 'education',
          number: '01',
          title: 'التعليم',
          subtitle: 'التربية الخاصة · التوحد · التخاطب · التدريب',
          description: 'استكشف خبراتي المهنية في التربية الخاصة والتوحد والتخاطب والبرامج التدريبية المعتمدة.',
        },
        {
          id: 'technology',
          number: '02',
          title: 'التقنية',
          subtitle: 'الأنظمة الرقمية · التطوير · تقنيات التعليم',
          description: 'استكشف الأنظمة الرقمية والمنصات ومسارات العمل والمشاريع التقنية التي صممتها وطورتها.',
        },
        {
          id: 'ai',
          number: '03',
          title: 'الذكاء الاصطناعي',
          subtitle: 'الذكاء الاصطناعي · الأتمتة · التطوير بمساعدة AI',
          description: 'استكشف كيف أوظف الذكاء الاصطناعي في هندسة مسارات العمل والحلول التعليمية والمنتجات الرقمية.',
        },
        {
          id: 'sales',
          number: '04',
          title: 'المبيعات',
          subtitle: 'تجربة العملاء · التواصل · المهارات التجارية',
          description: 'استكشف خبرتي في المبيعات وتجربة العملاء والمهارات التجارية التي صقلت أسلوبي المهني.',
        },
      ],
      viewFullProfile: 'عرض الملف المهني الكامل',
      backToHub: 'جميع المجالات',
      allAreas: 'جميع المجالات',
      letsConnect: 'تواصل معي',
    },
    educationPath: {
      title: 'التعليم والتربية الخاصة',
      subtitle: 'التربية الخاصة · التوحد · النطق والتخاطب',
      badge: '01 // الأساس الإكلينيكي والميداني',
      narrative: {
        title: 'من علاج النطق والتخاطب إلى التربية الخاصة',
        text: 'بدأت رحلة محمود المهنية في قطاع التعليم من خلال التدريب الإكلينيكي في علاج أمراض النطق والتخاطب، ثم تطورت عبر الممارسة الميدانية المباشرة مع الأطفال ذوي صعوبات التواصل والتحديات النمائية، لتتوسع بعد ذلك نحو التخصص في اضطراب طيف التوحد والتربية الخاصة. شكلت هذه الخبرات أساساً إنسانياً عميقاً ألهم لاحقاً اهتمامه بتطوير تقنيات التعليم، وتوظيف الذكاء الاصطناعي، وبناء الأنظمة الرقمية.',
      },
      timelineTitle: 'التسلسل الزمني للخبرات التعليمية',
      timelineItems: [
        {
          year: '2019',
          organization: 'مستشفى الأحرار التعليمي',
          role: 'تدريب علاج النطق والتخاطب',
          tag: 'تدريب إكلينيكي',
        },
        {
          year: '2021',
          organization: 'مركز تقدم للرعاية النهارية',
          role: 'أخصائي تخاطب وتوحد',
          tag: 'تأهيل إكلينيكي وتوحد',
        },
        {
          year: '2023',
          organization: 'أكاديمية حمزة',
          role: 'أخصائي تخاطب ولغة / ذوي الاحتياجات الخاصة',
          tag: 'تدريب متخصص',
        },
        {
          year: 'حالياً',
          organization: 'مدارس الفرقان الأهلية',
          role: 'مشرف تقني ✕ معلم تربية خاصة (مسار التوحد)',
          tag: 'المملكة العربية السعودية · أدوار حالية',
        },
      ],
      experienceTitle: 'الخبرات المهنية والميدانية',
      viewExperienceLabel: 'استعراض تفاصيل الخبرة',
      hideExperienceLabel: 'إخفاء التفاصيل',
      experienceItems: [
        {
          id: 'al-furqan-supervisor',
          role: 'مشرف تقني',
          organization: 'مدارس الفرقان الأهلية',
          location: 'المملكة العربية السعودية',
          period: '2023 – حتى الآن (الدور الحالي)',
          employmentType: 'الدور الحالي',
          shortSummary: 'مسؤول حالياً عن دعم العمليات التقنية ومبادرات التحول الرقمي داخل البيئة المدرسية، وترجمة الاحتياجات التعليمية والإدارية الواقعية إلى أنظمة ومسارات عمل وأدوات رقمية عملية.',
          points: [
            'التحول الرقمي: دعم مبادرات التحول الرقمي في مسارات العمل المدرسية، وتحديد العمليات التشغيلية والتعليمية القابلة للتطوير التقني، وتصميم وتطبيق مسارات عمل رقمية عملية، ودعم الانتقال من النماذج الورقية إلى الأنظمة المنظمة.',
            'تكنولوجيا التعليم: تطوير حلول رقمية تدعم عمليات التربية الخاصة، وتنظيم تدفق بيانات ومعلومات الطلاب، ودعم العمليات الرقمية للحضور، والخطط التربوية الفردية IEP، والجلسات، والتوثيق والتقارير.',
            'الأنظمة ولوحات التحكم: تصميم لوحات تحكم تعليمية ومسارات عمل معتمدة على البيانات، وتطوير نظم لتنظيم بيانات الطلاب وسير العمليات التربوية، وتحسين إمكانية وصول المعلمين والإدارة للبيانات.',
            'الذكاء الاصطناعي والأتمتة: توظيف أدوات الذكاء الاصطناعي لرفع الإنتاجية، واستكشاف حلول ذكية لإنشاء المحتوى والتوثيق والتحليل، وبناء نماذج أولية لأدوات رقمية تعالج تحديات واقعية في البيئة المدرسية.',
          ],
          skills: [
            'التحول الرقمي',
            'تكنولوجيا التعليم',
            'React & Firebase',
            'أتمتة الذكاء الاصطناعي',
            'لوحات التحكم التعليمية',
            'تمكين الكادر التعليمي',
          ],
        },
        {
          id: 'al-furqan',
          role: 'معلم تربية خاصة — مسار التوحد',
          organization: 'مدارس الفرقان الأهلية',
          location: 'مكة المكرمة، المملكة العربية السعودية',
          period: '2023 – حتى الآن (الدور الحالي)',
          employmentType: 'الدور الحالي',
          shortSummary: 'تعليم وتأهيل الطلاب ذوي اضطراب طيف التوحد، وإعداد وإدارة الخطط التربوية الفردية (IEP)، وتطبيق التدخلات السلوكية القائمة على الأدلة العلمية.',
          points: [
            'تعليم وتأهيل ذوي اضطراب طيف التوحد وتطبيق التدخلات السلوكية القائمة على الدليل العلمي',
            'إعداد وتطبيق وتتبع الخطط التربوية الفردية (IEP) ومواءمتها مع احتياجات كل طالب',
            'إجراء القياس والتقييم السلوكي واللغوي الدوري المستمر (سجلات ABC وتتبع المعالم النمائية)',
            'تنمية المهارات الشاملة: التواصلية، المعرفية، الاستقلالية، والرعاية الذاتية',
            'التواصل المستمر مع أولياء الأمور، تمكين الأسر، وتقديم تقارير تقدم دورية موثقة',
          ],
          skills: [
            'اضطراب طيف التوحد',
            'التربية الخاصة',
            'الخطط الفردية (IEP)',
            'تحليل السلوك التطبيقي (ABA)',
            'التقييم السلوكي',
            'التواصل الأسري',
          ],
        },
        {
          id: 'taqaddom',
          role: 'أخصائي تخاطب وتوحد',
          organization: 'مركز تقدم للرعاية النهارية وذوي القدرات الخاصة',
          location: 'كفر الشيخ، مصر',
          period: 'فبراير 2021 — يناير 2024',
          duration: '3 سنوات',
          shortSummary: 'تقديم الدعم والتدخل العلاجي للأطفال الذين يعانون من اضطرابات النطق والتواصل، بما في ذلك اضطراب طيف التوحد والتأخر النمائي، وإجراء التقييمات الشاملة وخطط التدخل الفردية وتدريب الأسر.',
          points: [
            'إجراء تقييمات شاملة للنطق واللغة لتحديد التحديات التواصلية بدقة.',
            'تطوير خطط علاجية فردية مخصصة بناءً على الاحتياجات الفردية لكل طفل.',
            'تقديم جلسات علاجية فردية وجماعية مكثفة.',
            'العمل على وضوح النطق، والفهم اللغوي، ومهارات التواصل، والتفاعل الاجتماعي.',
            'تطبيق تقنيات تحليل السلوك التطبيقي (ABA) لدعم التطوير اللغوي وتحسين السلوك.',
            'التعاون مع فرق متعددة التخصصات، بما يشمل أخصائيي العلاج الوظيفي والأخصائيين النفسيين.',
            'تدريب وإرشاد أولياء الأمور ومقدمي الرعاية على استراتيجيات تعزيز مهارات التواصل في المنزل.',
          ],
          skills: [
            'علاج النطق والتخاطب',
            'اضطراب طيف التوحد',
            'تحليل السلوك التطبيقي (ABA)',
            'التقييم والتشخيص',
            'التدخل الفردي',
            'تدريب أولياء الأمور',
            'العمل الجماعي متعدد التخصصات',
          ],
        },
        {
          id: 'hamza-academy',
          role: 'أخصائي تخاطب ولغة (أخصائي لذوي الاحتياجات الخاصة)',
          organization: 'أكاديمية حمزة',
          location: 'مصر',
          period: 'يناير 2023 — أكتوبر 2023',
          duration: '10 أشهر',
          employmentType: 'تدريب',
          shortSummary: 'العمل كأخصائي تخاطب ولغة وأخصائي للأطفال ذوي الاحتياجات الخاصة في إطار تدريبي متخصص يركز على التطوير اللغوي والتواصلي والدعم التربوي والعلاجي.',
          points: [
            'تطوير وتنمية مهارات النطق واللغة وبناء الحصيلة اللغوية',
            'تعزيز مهارات التواصل والتعبير اللفظي وغير اللفظي',
            'تقديم الدعم التخصصي للأطفال ذوي الاحتياجات الخاصة في البيئة التعليمية',
            'تطبيق برامج التدخل الفردي الموجهة لمعالجة الصعوبات النمائية',
            'تقديم الدعم التعليمي والعلاجي المتمحور حول الطفل',
          ],
          skills: [
            'علاج النطق والتخاطب',
            'التربية الخاصة',
            'مهارات التواصل',
            'نمو الطفل',
            'التواصل المؤسسي والتسويق',
          ],
        },
        {
          id: 'al-ahrar',
          role: 'أخصائي تخاطب',
          organization: 'مستشفى الأحرار التعليمي — الزقازيق',
          location: 'الزقازيق، مصر',
          period: 'مارس 2019 — يناير 2021',
          duration: 'سنة و11 شهراً',
          employmentType: 'تدريب',
          shortSummary: 'اكتساب خبرة إكلينيكية وعملية واسعة في تقييم وعلاج اضطرابات النطق واللغة عبر مختلف الفئات العمرية داخل قسم التخاطب بمستشفى الأحرار التعليمي.',
          points: [
            'مساعدة الأخصائيين في إجراء التقييمات اللغوية واختبارات النطق.',
            'دعم الجلسات العلاجية وتطبيق التمارين الصوتية والتواصلية.',
            'اكتساب خبرة عملية مباشرة في تصميم وتطبيق البرامج والخطط العلاجية.',
            'التعامل مع الأطفال والبالغين الذين يعانون من صعوبات واضطرابات النطق والكلام.',
            'التعاون والتنسيق الوثيق مع الفريق الطبي في المستشفى.',
            'تطبيق المعرفة الأكاديمية والسريرية في بيئة إكلينيكية واقعية.',
          ],
          skills: [
            'علاج النطق والتخاطب',
            'التقييم والتشخيص الإكلينيكي',
            'الممارسة السريرية',
            'البرامج العلاجية',
            'اضطرابات التواصل',
            'العمل الجماعي متعدد التخصصات',
          ],
        },
      ],
      expertiseTitle: 'مجالات الخبرة والكفاءات التخصصية',
      expertiseList: [
        'اضطراب طيف التوحد',
        'التربية الخاصة',
        'تحليل السلوك التطبيقي (ABA)',
        'اضطرابات النطق والتخاطب',
        'إعداد الخطط الفردية (IEP)',
        'القياس والتشخيص السلوكي',
        'تعديل السلوك والتدخل الإيجابي',
        'التأهيل الحركي النطقي (Oral Motor)',
        'التكامل الحسي',
        'تدريب وتمكين أولياء الأمور',
      ],
      trainingTitle: 'البرامج التدريبية المعتمدة والرخص',
      trainingList: [
        { title: 'تدريب فني تحليل السلوك التطبيقي ABAT (40 ساعة - مرشح تحت الإشراف)', issuer: 'وفق معايير البورد الدولي QABA' },
        { title: 'التأهيل الحركي النطقي وعلاج اللدغات (Oral Motor)', issuer: 'تدريب إكلينيكي متخصص' },
        { title: 'التكامل الحسي وتطبيقاته في البيئة الصفية والمراكز', issuer: 'ورشة عمل متقدمة' },
        { title: 'استراتيجيات وتدخلات تحليل السلوك التطبيقي (ABA)', issuer: 'تدريب قائم على الأدلة العلمية' },
        { title: 'صياغة وبناء الخطط التربوية الفردية والأهداف السلوكية', issuer: 'معايير التطوير المهني' },
        { title: 'الرخصة المهنية التعليمية السعودية (معلم ممارس)', issuer: 'هيئة تقويم التعليم والتدريب (ETEC)' },
      ],
      projectsTitle: 'مشاريع التربية الخاصة',
      projectsSubtitle: 'أدوات رقمية مبنية خصيصاً لمعالجة الاحتياجات التشغيلية والتوثيقية في التربية الخاصة.',
      connection: {
        label: 'كيف يترابط هذا البعد؟',
        equation: 'احتياجات الإنسان ← التعليم ← التقنية ← أنظمة أفضل',
        text: 'الممارسة الميدانية المباشرة في الصفوف والمراكز تكشف التحديات الحقيقية التي يواجهها المعلمون وأولياء الأمور، مما يمنحني الرؤية الدقيقة اللازمة لتصميم أدوات تقنية تحل المشكلات من جذورها.',
      },
    },
    technologyPath: {
      title: 'التقنية والأنظمة',
      subtitle: 'الأنظمة الرقمية · التطوير · تقنيات التعليم',
      badge: '02 // هندسة الأنظمة والبرمجيات',
      whatIBuildTitle: 'ماذا أبني وأطور؟',
      whatIBuildItems: [
        'لوحات تحكم إدارية وتعليمية تفاعلية',
        'مسارات عمل مؤتمتة وأدوات Google Apps Script السحابية',
        'أنظمة متابعة الطلاب وأدوات التربية الخاصة الرقمية',
        'قواعد بيانات فورية وأنظمة سحابية (Firestore / Firebase)',
        'مسارات عمل بالباركود والـ QR لربط الواقع الفيزيائي بالسحابي',
        'تطبيقات ويب متجاوبة وسريعة وعالية الكفاءة',
        'منصات تكنولوجيا تعليم (EdTech) متكاملة',
      ],
      projectsTitle: 'المشاريع التقنية المميزة',
      projectsSubtitle: 'تطبيقات وأنظمة حية مبنية لمعالجة احتياجات تشغيلية حقيقية للمؤسسات والمدارس.',
      stackTitle: 'الترسانة التقنية والأدوات',
      stackCategories: [
        {
          category: 'التطوير البرمجي (Development)',
          items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript / TypeScript', 'HTML5 / CSS3', 'التصميم المتجاوب'],
        },
        {
          category: 'البيانات والبنية الخلفية (Data / Backend)',
          items: ['Firebase', 'Firestore', 'Firebase Auth', 'REST APIs', 'Cloud Functions (أساسيات)'],
        },
        {
          category: 'الأدوات ومنظومة العمل (Tools & Ecosystem)',
          items: ['GitHub', 'Google AI Studio', 'Figma', 'Canva', 'Google Sheets & Forms', 'Notion', 'WordPress', 'Google Sites'],
        },
      ],
      technicalRole: {
        title: 'الدور التقني وموقع التأثير',
        pillars: ['التعليم', 'التقنية', 'العمليات التشغيلية', 'التحول الرقمي'],
        description: 'أعمل في ملتقى التطبيق الميداني والتقنيات البرمجية الحديثة والعمليات المدرسية والتحول الرقمي—حيث أربط بين احتياجات المستخدمين غير التقنيين وبناء أنظمة رقمية مرنة وقابلة للتوسع.',
      },
      connection: {
        label: 'كيف يترابط هذا البعد؟',
        equation: 'التقنية ← التعليم ← حلول عملية',
        text: 'التقنية ليست غاية في حد ذاتها، بل هي وسيلة لإلغاء التعقيد اليدوي وأتمتة التوثيق الروتيني وتمكين الكوادر التعليمية من التركيز على رسالتهم الجوهرية.',
      },
    },
    aiPath: {
      title: 'الذكاء الاصطناعي والأتمتة',
      subtitle: 'الذكاء الاصطناعي · الأتمتة · التطوير بمساعدة AI',
      badge: '03 // الذكاء الاصطناعي التطبيقي',
      howIUseAiTitle: 'كيف أوظف الذكاء الاصطناعي؟',
      howIUseAiSubtitle: 'توظيف عملي لنماذج الذكاء الاصطناعي التوليدي والأتمتة الذكية لرفع الإنتاجية وإلغاء الجهد اليدوي المتكرر.',
      pillars: [
        {
          title: 'التطوير بمساعدة الذكاء الاصطناعي (AI-Assisted Dev)',
          description: 'استخدام أحدث أدوات البرمجة الذكية والنماذج التوليدية لتسريع بناء النماذج الأولية وتوليد المكونات البرمجية وبناء تطبيقات الويب بكفاءة قياسية.',
        },
        {
          title: 'أتمتة مسارات العمل (Workflow Automation)',
          description: 'تصميم مسارات عمل ذكية تربط نماذج الإدخال وهندسة الأوامر مع مخرجات البيانات المنظمة، مما يلغي التوثيق والإدخال اليدوي المتكرر.',
        },
        {
          title: 'الذكاء الاصطناعي في التعليم (Educational AI)',
          description: 'تطبيق نماذج الذكاء الاصطناعي في صياغة الخطط التربوية، وتكييف الأنشطة والمناهج التعليمية، وبناء بنوك الأهداف السلوكية بدقة عالية.',
        },
        {
          title: 'بناء النماذج الأولية للمنتجات (Product Prototyping)',
          description: 'توظيف الذكاء الاصطناعي لاختبار وتجسيد أفكار المنتجات الرقمية وتحويلها من مجرد فكرة إلى نموذج تفاعلي حي خلال ساعات معدودة.',
        },
      ],
      aiProjectsTitle: 'مشاريع مدعومة بالذكاء الاصطناعي',
      aiProjectsSubtitle: 'تطبيقات عملية توظف النماذج التوليدية والأتمتة الذكية.',
      aiProjects: [
        {
          title: 'مولد مواقع الأعمال بالذكاء الاصطناعي',
          flow: 'بيانات المنشأة ← محرك الذكاء الاصطناعي ← موقع عربي تفاعلي متكامل',
          description: 'مفهوم تفاعلي يستقبل معلومات النشاط التجاري ويولد هيكلاً كاملاً لموقع ويب عربي متجاوب مع النصوص الدعائية وأقسام العمل.',
          badge: 'نموذج أولي ومفهوم',
        },
        {
          title: 'مسارات الذكاء الاصطناعي × التربية الخاصة',
          flow: 'الملاحظات السلوكية ← المعالجة الذكية ← مسودات تقارير الخطط الفردية',
          description: 'مسارات عمل تطبيقية تساعد معلمي وأخصائيي التربية الخاصة على صياغة الأهداف السلوكية وتقارير التقدم باتساق وسرعة فائقة.',
          badge: 'مسار عمل تطبيقي',
        },
        {
          title: 'محرك تطوير المنتجات بمساعدة AI',
          flow: 'تحديد المشكلة ← هيكلة المنطق عبر LLM ← بناء كود React الحي',
          description: 'منهجية تطوير سريعة تعتمد على Google AI Studio والبرمجة بمساعدة الذكاء الاصطناعي للانتقال السريع من المتطلب إلى التطبيق المنشور.',
          badge: 'منظومة تطوير',
        },
      ],
      toolkitTitle: 'حزمة أدوات الذكاء الاصطناعي',
      toolkitItems: [
        'Google AI Studio',
        'الذكاء الاصطناعي التوليدي ونماذج LLMs',
        'هندسة الأوامر وتوجيه النماذج (Prompt Engineering)',
        'التطوير بمساعدة الذكاء الاصطناعي (AI-Assisted Dev)',
        'أتمتة مسارات العمل وهيكلة البيانات السحابية',
      ],
      positioningNote: 'أركز على التطبيق العملي والتوظيف الذكي لأدوات الذكاء الاصطناعي في المنتجات والأنظمة، وليس على أبحاث وتدريب النماذج الرياضية التأسيسية.',
      connection: {
        label: 'كيف يترابط هذا البعد؟',
        equation: 'الذكاء الاصطناعي ← الأتمتة ← مسارات عمل أفضل',
        text: 'الذكاء الاصطناعي يضاعف الأثر الإنساني عبر تولي مهام التلخيص والتوثيق والتحليل المتكرر، متيحاً للمتخصصين التركيز على القرارات السريرية والتربوية الحساسة والتواصل البشري.',
      },
    },
    salesPath: {
      title: 'المبيعات والفكر التجاري',
      subtitle: 'تجربة العملاء · التواصل · المهارات التجارية',
      badge: '04 // الديناميكيات البشرية والتجارية',
      experienceTitle: 'الخبرة التجارية والمبيعات',
      vodafoneExperience: {
        role: 'أخصائي مبيعات وتجربة عملاء أول',
        company: 'فودافون مصر',
        location: 'مصر',
        period: '2020 – 2021',
        points: [
          'التواصل المباشر مع مئات العملاء يومياً، الاستكشاف العميق، وتحليل الاحتياجات الدقيقة',
          'المبيعات الاستشارية لخدمات الاتصالات وحلول الشركات والبيانات المتقدمة',
          'التعامل الاحترافي مع الاعتراضات، والتفاوض الفعال، وإتمام الصفقات تحت الضغط',
          'بناء علاقات طويلة الأمد مع العملاء وترسيخ الثقة والمصداقية المستدامة',
          'الالتزام الصارم بتحقيق المستهدفات البيعية (Sales Targets) بنسب إنجاز متقدمة',
          'تقديم تجربة عملاء استثنائية تعزز ولاء العميل ورضاه عن المنظومة',
        ],
      },
      valueFlowTitle: 'ماذا أضافت تجربة المبيعات لملفي المهني؟',
      valueFlowSubtitle: 'المنهجية التجارية المكونة من 5 خطوات والتي توجه أسلوبي اليوم في هندسة المنتجات وتصميم الحلول التقنية.',
      valueFlowSteps: [
        {
          step: '01',
          action: 'الاستماع والإنصات',
          description: 'الفهم العميق لنقاط ألم العميل، والقيود التشغيلية، والدوافع غير المعلنة.',
        },
        {
          step: '02',
          action: 'التواصل الفعال',
          description: 'ترجمة الخصائص التقنية المعقدة إلى لغة إنسانية بسيطة ومقنعة تركز على الحل.',
        },
        {
          step: '03',
          action: 'استيعاب القيمة الحقيقية',
          description: 'ربط الميزات البرمجية بالمنفعة المادية المباشرة، وتوفير الوقت، وتقليل الهدر.',
        },
        {
          step: '04',
          action: 'التفاوض وحل الاعتراضات',
          description: 'معالجة الشكوك والتردد بتعاطف واحترافية، وصناعة توافق مبني على الأهداف المشتركة.',
        },
        {
          step: '05',
          action: 'بناء العلاقات والثقة',
          description: 'اكتساب المصداقية المستدامة عبر الالتزام بالوعود، والمتابعة، وجودة التسليم.',
        },
      ],
      salesImpactText: 'خبرتي في فودافون صقلت قدرتي على فهم سلوك المستخدمين ونفسياتهم والتفاوض الفعال، وهو ما يمنحني ميزة جوهرية عند تصميم المنتجات الرقمية للتأكد من أنها تحقق قيمة تجارية وتشغيلية ملموسة.',
      connection: {
        label: 'كيف يترابط هذا البعد؟',
        equation: 'العميل ← المنتج ← القيمة',
        text: 'فهم السلوك البشري والاعتراضات الواقعية ودوافع الشراء يضمن أن المنتجات والأنظمة الرقمية التي أصممها تبنى لحل مشكلات واقعية تلبي احتياجات المستخدم النهائي.',
      },
    },
    nav: {
      home: 'الرئيسية',
      snapshot: 'لمحة سريعة',
      story: 'المسار المهني',
      experience: 'الخبرات',
      projects: 'المشاريع والأنظمة',
      approach: 'المنهجية',
      capabilities: 'القدرات',
      expertise: 'التربية الخاصة',
      tech: 'التقنية والذكاء الاصطناعي',
      business: 'البعد التجاري',
      about: 'عن محمود',
      contact: 'تواصل معي',
      downloadCv: 'تحميل السيرة الذاتية',
    },
    hero: {
      name: 'محمود الباهي',
      positioning: 'التربية الخاصة × الإشراف التقني × الذكاء الاصطناعي × تكنولوجيا التعليم',
      statement:
        'متخصص في التربية الخاصة مع التركيز على اضطراب طيف التوحد، والتخاطب، والتدخلات التعليمية، أعمل حالياً في المملكة العربية السعودية كمعلم تربية خاصة ومشرف تقني، لدعم التحول الرقمي وبناء الأنظمة ومسارات العمل التعليمية التطبيقية.',
      status: 'متاح للفرص والشراكات النوعية والمشاريع المبتكرة',
      roleSignals: [
        'معلم تربية خاصة (مسار التوحد)',
        'مشرف تقني ومسؤول التحول الرقمي',
        'تكنولوجيا التعليم والأنظمة ولوحات التحكم',
        'تطبيقات الذكاء الاصطناعي والأتمتة',
      ],
      exploreCta: 'استعراض المشاريع والأنظمة',
      downloadCvCta: 'تحميل السيرة الذاتية',
      contactCta: 'تواصل معي',
    },
    recruiterSnapshot: {
      title: 'لمحة سريعة لمسؤولي التوظيف',
      subtitle: 'ملخص شامل في 10 ثوانٍ يوضح أبعاد الملف المهني والتكامل الفريد بين التخصصات.',
      blocks: [
        {
          key: 'domain',
          category: 'المجال الأساسي',
          headline: 'طيف التوحد والتربية الخاصة',
          description: 'ممارس معتمد وميداني ذو خبرة موثقة في برامج التوحد، وتصميم الخطط التربوية الفردية (IEP)، والتقييم، وتعديل السلوك.',
          tags: ['طيف التوحد', 'الخطط الفردية (IEP)', 'تعديل السلوك', 'أسس النطق والتخاطب'],
        },
        {
          key: 'technology',
          category: 'الجانب التقني',
          headline: 'ذكاء اصطناعي · أنظمة رقمية · تطوير ويب',
          description: 'مطور يوظف React وتقنيات الويب الحديثة، وFirebase، وأتمتة مسارات العمل بالذكاء الاصطناعي لبناء واجهات سريعة وتفاعلية.',
          tags: ['React & Vite', 'Firebase / Firestore', 'أتمتة الذكاء الاصطناعي', 'لوحات التحكم'],
        },
        {
          key: 'product',
          category: 'المنتجات والحلول',
          headline: 'تكنولوجيا التعليم · برمجيات SaaS · أتمتة مسارات العمل',
          description: 'يحوّل التحديات الميدانية والإدارية المعقدة إلى هياكل منتجات متماسكة، ومسارات عمل واضحة وتجربة مستخدم مدروسة.',
          tags: ['هندسة المنتجات', 'مسارات المستخدم', 'نماذج SaaS', 'تطوير النماذج الأولية'],
        },
        {
          key: 'business',
          category: 'الجانب التجاري',
          headline: 'مبيعات · تجربة عملاء · تواصل وتفاوض',
          description: 'خبرة تجارية عملية في فودافون في تحليل احتياجات العميل، وإيصال القيمة، والإقناع الاستشاري، وتحقيق المستهدفات.',
          tags: ['تحليل الاحتياجات', 'تجربة العملاء', 'التفاوض والإقناع', 'التفكير التجاري'],
        },
      ],
    },
    metrics: [
      {
        value: '+7 سنوات',
        label: 'خبرة ميدانية وتطبيقية',
        sublabel: 'في التعليم والعمليات والتقنية',
      },
      {
        value: 'تربية خاصة + تقنية',
        label: 'تكامل تخصصي غير تقليدي',
        sublabel: 'عمق ميداني + مهارات بناء تقنية',
      },
      {
        value: '4 نماذج مكتملة',
        label: 'هندسة منتجات وأنظمة',
        sublabel: 'معيار 360، لين، أدوات صفية، مولد الويب',
      },
      {
        value: 'رخصة سعودية معتمدة',
        label: 'ممارس مهني معتمد',
        sublabel: 'هيئة تقويم التعليم والتدريب',
      },
    ],
    careerStory: {
      title: 'المسار المهني: تطور القدرات والخبرات',
      subtitle:
        'تطور مهني متدرج ومدروس من الممارسة الإكلينيكية في التخاطب إلى التربية الخاصة، ثم الإشراف التقني، والذكاء الاصطناعي، وهندسة المنتجات.',
      items: [
        {
          step: '01',
          title: 'التخاطب والتواصل',
          tagline: 'التواصل المتمركز حول الإنسان',
          description:
            'بدأ المسار من جلسات التأهيل اللغوي والتخاطب الإكلينيكي. بنى خبرة مباشرة عميقة في فهم تحديات التواصل غير اللفظي، وديناميكيات قلق الأسر، وتفاصيل السلوك الإنساني.',
          coreImpact: 'تأسيس القاعدة الإنسانية والإكلينيكية: فهم آليات التواصل، والتشخيص الدقيق، واحتياجات الأفراد.',
          tags: ['تقييم لغوي', 'تواصل غير لفظي', 'بروتوكولات إكلينيكية', 'إرشاد أسري'],
        },
        {
          step: '02',
          title: 'التربية الخاصة والتوحد',
          tagline: 'تعليم + سلوك + أنظمة فردية',
          description:
            'انتقل إلى الممارسة التخصصية مع طلاب طيف التوحد والاضطرابات النمائية. أدار الخطط التربوية الفردية (IEP)، والتقييمات النمائية الشاملة، وبروتوكولات تعديل السلوك.',
          coreImpact: 'بناء خبرة متكاملة في إدارة الخطط الفردية وتعديل السلوك التخصصي داخل البيئات التعليمية.',
          tags: ['طيف التوحد', 'تصميم IEP', 'تعديل السلوك الإيجابي', 'تقييم وظيفي'],
        },
        {
          step: '03',
          title: 'الإشراف والتنسيق التقني',
          tagline: 'دمج التعليم بالتقنية والعمليات',
          description:
            'تولى مسؤولية التنسيق التقني والتشغيلي. قاد تحول العمليات اليدوية إلى نماذج رقمية، ودرب المعلمين على الأدوات الحديثة، وأعاد تصميم مسارات التوثيق بين الكادر والإدارة.',
          coreImpact: 'الربط بين الممارسة التربوية والأنظمة التقنية، وتوحيد تقارير الأداء وتدريب الكادر التعليمي.',
          tags: ['إعادة تصميم مسارات العمل', 'تمكين المعلمين', 'تنظيم البيانات', 'تقنيات تشغيلية'],
        },
        {
          step: '04',
          title: 'الذكاء الاصطناعي والتحول الرقمي',
          tagline: 'التقنية + أتمتة العمليات',
          description:
            'وظف نماذج الذكاء الاصطناعي التوليدي وهندسة الأوامر (Prompting) لتقليص الأعباء الورقية في إعداد الخطط التربوية، وأتمتة كتابة التقارير، وتوليد الوسائل التعليمية التفاعلية بسرعة فائقة.',
          coreImpact: 'استثمار الذكاء الاصطناعي لإلغاء الهدر الإداري، وتحويل ساعات التوثيق اليدوي إلى دقائق مؤتمتة.',
          tags: ['ذكاء اصطناعي توليدي', 'هندسة الأوامر', 'أتمتة التوثيق', 'تحول رقمي'],
        },
        {
          step: '05',
          title: 'تطوير وهندسة المنتجات',
          tagline: 'المشكلة ← النظام ← المنتج',
          description:
            'دمج الفهم الميداني والمهارات البرمجية في بناء منتجات وأنظمة رقمية متكاملة. ابتكر منصة "معيار 360" لإدارة التربية الخاصة، ومنظومة "لين" لسلامة النقل المدرسي، وأدوات صفية متطورة.',
          coreImpact: 'تحويل المشكلات التشغيلية الواقعية إلى حلول برمجية ويب حقيقية وقابلة للتطبيق.',
          tags: ['تصميم المنتجات', 'React / Firebase', 'هندسة تجربة المستخدم', 'إطلاق النماذج الأولية'],
        },
        {
          step: '06',
          title: 'المبيعات وتجربة العملاء',
          tagline: 'فهم العميل + الفكر التجاري',
          description:
            'اكتسب خبرة تجارية مباشرة في بيئة عمل فودافون. أتقن مهارات الاستماع الفعال، واكتشاف احتياجات العميل الحقيقية، والتفاوض القائم على القيمة، والعمل وفق مستهدفات أداء دقيقة.',
          coreImpact: 'تزويد كافة المنتجات البرمجية بحس تجاري واقعي وفهم عميق لاحتياجات المستخدم النهائي.',
          tags: ['استكشاف احتياجات العميل', 'التفاوض والإقناع', 'تحقيق المستهدفات', 'عقلية تجارية'],
        },
      ],
    },
    experience: {
      title: 'السجل والخبرات المهنية',
      subtitle:
        'خبرة تطبيقية وميدانية تجمع بين فصول التربية الخاصة، والعمليات الرقمية، والإشراف التقني، والتواصل التجاري.',
      supervisorHighlightTitle: 'محور القيادة والتكامل التخصصي الأبرز',
      supervisorIntersection: 'التعليم + العمليات + التقنية + التدريب + الذكاء الاصطناعي',
      items: [
        {
          id: 'technical-supervisor',
          role: 'مشرف ومنسق تقني للأنظمة التعليمية',
          organization: 'مؤسسة تعليمية وتأهيلية',
          location: 'المملكة العربية السعودية',
          period: 'دور تخصصي قيادي',
          isFeatured: true,
          roleBadge: 'دور متكامل متعدد التخصصات',
          intersectionLabel: 'التعليم + العمليات + التقنية + التدريب + الذكاء الاصطناعي',
          whatIWorkedOn: [
            'صمم وطور مسارات عمل رقمية لإلغاء الاعتماد على الأوراق وتسهيل التنسيق بين الكادر التعليمي والإدارة.',
            'طبق أنظمة تقارير موحدة ساهمت في تسريع متابعة تطور الطلاب وتوثيق الجلسات التأهيلية.',
            'درب المعلمين والأخصائيين على استخدام المنصات الرقمية الحديثة ونماذج التقييم المؤتمتة.',
            'وظف مسارات الذكاء الاصطناعي التوليدي لتسريع صياغة الأهداف التربوية في الخطط الفردية (IEP).',
            'نظم بيانات الأداء في لوحات متابعة واضحة تدعم اتخاذ القرارات الإدارية والتواصل مع أولياء الأمور.',
          ],
          capabilitiesDeveloped: [
            'تصميم مسارات العمل الرقمية',
            'تمكين وتدريب الكادر',
            'مسارات عمل الذكاء الاصطناعي',
            'لوحات البيانات',
            'تنفيذ الأنظمة التقنية',
          ],
        },
        {
          id: 'special-ed-teacher',
          role: 'معلم وأخصائي تربية خاصة (طيف التوحد)',
          organization: 'بيئة تعليمية وتأهيلية متخصصة',
          location: 'المملكة العربية السعودية',
          period: 'ممارسة تخصصية ميدانية',
          whatIWorkedOn: [
            'صمم ونفذ خططاً تربوية فردية (IEPs) مخصصة لكل طالب وفق تقييم دقيق للمهارات.',
            'أجرى تقييمات سلوكية مستمرة (نموذج ABC) وطبق بروتوكولات التعزيز الإيجابي وتعديل السلوك.',
            'ابتكر جداول بصرية حسية ووسائل تعليمية تفاعلية لتطوير المهارات المعرفية والتواصلية.',
            'حافظ على قنوات تواصل شفافة ودورية مع أولياء الأمور لمتابعة تحقيق الأهداف في المنزل والمدرسة.',
          ],
          capabilitiesDeveloped: [
            'تأهيل طيف التوحد',
            'إدارة الخطط الفردية (IEP)',
            'تعديل السلوك الإيجابي',
            'العمل الميداني المباشر',
          ],
        },
        {
          id: 'speech-therapist-taqaddum',
          role: 'أخصائي نطق وتخاطب',
          organization: 'مركز التقدم لرعاية ذوي الاحتياجات الخاصة',
          location: 'مصر',
          period: 'الأساس الإكلينيكي',
          whatIWorkedOn: [
            'شخص حالات التأخر اللغوي واضطرابات النطق ومخارج الحروف لدى الأطفال.',
            'وضع برامج علاجية فردية تستهدف تطوير المهارات اللغوية الاستقبالية والتعبيرية.',
            'استخدم وسائل التواصل البديل والمعزز (AAC) لدعم الأطفال غير الناطقين.',
            'درب أولياء الأمور على تمارين التحفيز اللغوي لضمان استمرارية التقدم خارج المركز.',
          ],
          capabilitiesDeveloped: [
            'التحليل الإكلينيكي للتواصل',
            'التشخيص والتقييم اللغوي',
            'أنظمة التواصل البديل (AAC)',
            'الإرشاد والتدريب الأسري',
          ],
        },
        {
          id: 'vodafone-commercial',
          role: 'أخصائي مبيعات وتجربة عملاء',
          organization: 'فودافون (Vodafone)',
          location: 'مصر',
          period: 'الخبرة التجارية والمبيعات',
          highlightNote:
            'منحت هذه الخبرة التجارية محمود فهماً عميقاً لسيكولوجية المستخدم، واستكشاف الاحتياجات، والواقعية التجارية التي يدمجها في كل منتج رقمي يصممه.',
          whatIWorkedOn: [
            'أجرى تحليلاً فورياً لاحتياجات العملاء لتقديم الحلول والباقات المناسبة بأعلى كفاءة.',
            'تعامل مع الاستفسارات والشكاوى المعقدة بهدوء ووضوح لبناء ثقة طويلة الأمد مع المستفيد.',
            'فاوض واقترح خيارات تحقق أعلى درجات رضا العميل وتلبي مستهدفات الشركة في آن واحد.',
            'حقق تقييمات متميزة باستمرار في مؤشرات جودة الخدمة ورضا العملاء وتحقيق الأهداف البيعية.',
          ],
          capabilitiesDeveloped: [
            'استكشاف احتياجات العميل',
            'البيع الاستشاري المبني على القيمة',
            'التفاوض وإدارة المواقف المعقدة',
            'مؤشرات الأداء والعائد التجاري',
          ],
        },
      ],
    },
    projects: {
      title: 'الأنظمة والمنتجات البرمجية',
      subtitle:
        'نماذج برمجية وأنظمة حقيقية صُممت لحل مشكلات تشغيلية وتعليمية وتجارية واقعية.',
      flagshipLabel: 'دراسة الحالة الرئيسية',
      viewCaseStudy: 'استعراض دراسة الحالة الرئيسية',
      exploreProject: 'استعراض معمارية النظام',
      viewConcept: 'استعراض فكرة المنتج',
      viewWork: 'استعراض تفاصيل النظام',
      architectureLabel: 'مسار تدفق النظام',
      items: [
        {
          id: 'miyar-360',
          name: 'معيار 360 (Miyar 360)',
          category: 'تربية خاصة + منتج + تقنية',
          tagline: 'منظومة رقمية شاملة لإدارة وتوثيق برامج التربية الخاصة',
          summary:
            'منصة ويب متكاملة موجهة للبيئة العربية، توحد ملفات الطلاب، والخطط الفردية (IEP)، وسجلات الجلسات اليومية، ومتابعة السلوك، والتواصل مع ولي الأمر في نظام سحابي متزامن واحد.',
          isFlagship: true,
          technologies: ['React', 'Firebase / Firestore', 'Tailwind CSS', 'هندسة أوامر الذكاء الاصطناعي', 'Vite'],
          architectureDiagram: [
            'بيانات ملف الطالب',
            'أهداف الخطط الفردية والسلوك',
            'سجل جلسات الأخصائي اليومي',
            'التقارير والتحليلات الآلية',
            'بوابة تجربة ولي الأمر',
          ],
          caseStudy: {
            problem:
              'تعاني مراكز ومدارس التربية الخاصة من تشتت البيانات بين أوراق متفرقة، ومحادثات واتساب غير منظمة، وجهد يدوي مضنٍ في كتابة الخطط الفردية وتقارير الجلسات، مما يرهق المعلم ويقلق ولي الأمر.',
            solution:
              'منصة ويب مركزية تجمع السجلات الإكلينيكية، ومراحل الأهداف الفردية، وتوثيق الجلسات اليومية، ورصد السلوك، وتوليد التقارير الدورية تلقائياً في واجهة عربية تفاعلية وسلسة.',
            myRole:
              'ابتكار الرؤية الكاملة للمنتج، وهندسة مسارات العمل التعليمية والتأهيلية، وتصميم واجهات المستخدم (UI/UX)، وبناء الواجهة التفاعلية وربطها بهياكل بيانات Firebase.',
            howItWorks:
              'يقوم المعلم أو الأخصائي بتوثيق الجلسة والسلوك في أقل من 60 ثانية؛ يقوم النظام بتجميع البيانات وتحديث نسب إنجاز الأهداف وتوليد تقارير جاهزة للطباعة أو الإرسال لولي الأمر.',
            value:
              'توفر أكثر من 4 ساعات أسبوعياً لكل معلم من الأعباء الورقية، وتمنع فقدان السجلات، وتقدم للأسرة تحديثات دقيقة وشفافة مبنية على بيانات موثقة.',
            keyFeatures: [
              'محرك ذكي لبناء وصياغة أهداف الخطط الفردية (IEP)',
              'توثيق سريع للجلسات اليومية (الحضور، المهارات المكتسبة، الملاحظات)',
              'رصد وتوثيق السلوك وفق النموذج الوظيفي (ABC Analysis)',
              'توليد تقارير أداء دورية ورسوم بيانية لنسب التقدم تلقائياً',
              'بوابة مخصصة لولي الأمر لمتابعة الإنجاز اليومي بشفافية',
              'صلاحيات متعددة المستويات (مشرف، معلم، إدارة، ولي أمر)',
            ],
            whatILearned:
              'التصميم لبيئات التربية الخاصة يتطلب تبسيطاً فائقاً للواجهات—تقليل الجهد الذهني للمعلم أثناء الحصة هو العامل الحاسم لنجاح أي نظام برمجي تعليمي.',
          },
        },
        {
          id: 'leen-transport',
          name: 'منظومة لين (Leen / Z-TranZit)',
          category: 'نقل ذكي + أمان + منتج',
          tagline: 'منصة ذكية لتعزيز أمان ومتابعة النقل المدرسي',
          summary:
            'حل تقني متزامن يربط المدرسة، والسائقين، والمشرفين، وأولياء الأمور عبر مسح بطاقات QR والتتبع المباشر لضمان أمان الطلاب أثناء الذهاب والعودة.',
          technologies: ['React', 'Firebase Realtime', 'Tailwind CSS', 'خرائط وتحديد المواقع', 'مسح الـ QR'],
          architectureDiagram: [
            'بطاقة الـ QR للطالب',
            'تطبيق السائق / المشرف',
            'منظومة المتابعة المركزية',
            'التتبع الحي للمسار',
            'إشعارات ولي الأمر الفورية',
          ],
          caseStudy: {
            problem:
              'غياب الرؤية الحية لمسار الحافلات المدرسية، والأخطاء الناتجة عن الكشوفات الورقية اليدوية للحضور والغياب، والقلق المستمر لدى أولياء الأمور أثناء فترات النقل.',
            solution:
              'منصة نقل متعددة الواجهات؛ يقوم المشرف بمسح رمز QR الخاص بالطالب فور صعوده أو نزوله، مما يرسل إشعاراً لحظياً لولي الأمر ولوحة تحكم المدرسة مع توثيق التوقيت والموقع.',
            myRole:
              'تحديد وتصميم رحلة كل مستخدم (سائق، مشرفة، إدارة، ولي أمر)، ومعالجة سيناريوهات النقل الميدانية المعقدة، وتطوير لوحة التحكم التفاعلية المتجاوبة.',
            howItWorks:
              'واجهة سريعة لمشرف الحافلة تعمل بلمسة واحدة لمسح الرمز، وتحديث فوري لقاعدة البيانات، مع إرسال إشعارات وتحديث خريطة التتبع للمستفيدين.',
            value:
              'يضمن عدم نسيان أو تجاوز أي طالب في الحافلة، ويقلل الاتصالات اليومية المتكررة، ويوفر للإدارة سجلاً دقيقاً وموثقاً لعمليات النقل.',
            keyFeatures: [
              'تسجيل صعود ونزول الطلاب بمسح رمز QR بلمسة واحدة',
              'شاشة مركزية لإدارة ومتابعة أسطول الحافلات المدرسية لحظياً',
              'إشعارات فورية لولي الأمر عند صعود الطالب ووصوله بأمان',
              'نظام إنذار للطوارئ أو التأخيرات المرورية غير المخططة',
              'كشوفات رقمية لبيانات الطلاب الموزعين على كل مسار',
            ],
            whatILearned:
              'تطبيقات السائقين والمشرفين الميدانيين يجب أن تُصمم بأزرار لمس كبيرة وواضحة جداً لتعمل بكفاءة بيد واحدة وتحت ضوء الشمس المباشر.',
          },
        },
        {
          id: 'ai-website-builder',
          name: 'مولد المواقع الذكي للأعمال',
          category: 'ذكاء اصطناعي + SaaS + أعمال',
          tagline: 'منصة لأتمتة إنشاء صفحات الهبوط العربية للمشاريع المحلية',
          summary:
            'أداة سريعة تحول بيانات المشروع الأساسية إلى صفحات هبوط احترافية متكاملة باللغة العربية مع محتوى تسويقي مقنع وأزرار طلب مباشر عبر واتساب خلال ثوانٍ.',
          technologies: ['React', 'أوامر الذكاء الاصطناعي التوليدي', 'Tailwind CSS', 'Vite', 'محرك RTL'],
          architectureDiagram: [
            'إدخال بيانات النشاط',
            'معالجة بالأوامر الذكية',
            'توليد المحتوى التسويقي العربي',
            'تجميع المكونات البرمجية',
            'صفحة هبوط جاهزة للإطلاق',
          ],
          caseStudy: {
            problem:
              'تفتقر العديد من المشاريع والعيادات والمتاجر المحلية العربية إلى حضور رقمي فعال بسبب التكلفة المرتفعة لشركات التطوير وصعوبة القوالب الجاهزة غير المتوافقة مع العربية.',
            solution:
              'نظام تفاعلي يجيب فيه صاحب العمل على 4 أسئلة محددة؛ يقوم الذكاء الاصطناعي بصياغة نصوص تسويقية مقنعة باللغة العربية وتنسيق صفحة ويب متكاملة ومتجاوبة فوراً.',
            myRole:
              'بناء وهندسة مسارات الأوامر الذكية (Prompts) لتوليد نصوص عربية طبيعية وجذابة، وتصميم المكونات البرمجية المتجاوبة بمحاذاة RTL دقيقة.',
            howItWorks:
              'يدخل المستخدم نوع النشاط وميزاته التنافسية؛ يعالج المحرك البيانات ويخرج صفحة ويب مكتملة تحتوي على معرض الخدمات ورابط الشراء أو التواصل المباشر عبر واتساب.',
            value:
              'يقلص زمن إطلاق الصفحة من أسبوعين إلى دقيقتين، مما يمكن أصحاب الأعمال غير التقنيين من بدء استقبال طلبات العملاء فوراً.',
            keyFeatures: [
              'استبيان مبسط وموجه من 4 خطوات لجمع تفاصيل النشاط',
              'توليد نصوص تسويقية باللغة العربية مصممة لزيادة التحويل',
              'عرض وتعديل فوري لصفحة الهبوط مع دعم كامل للشاشات',
              'ربط مباشر ومؤتمت مع واتساب لتلقي طلبات العملاء',
              'إمكانية التبديل بين الوضع الليلي والنهاري بضغطة زر',
            ],
            whatILearned:
              'استخدام أوامر محددة ذات قيود صارمة ينتج محتوى تجارياً أكثر احترافية واعتمادية بكثير من الأوامر المفتوحة للنماذج اللغوية.',
          },
        },
        {
          id: 'sen-digital-tools',
          name: 'حزمة الأدوات الصفية للتربية الخاصة',
          category: 'تعليم + ذكاء اصطناعي + أدوات سريعة',
          tagline: 'تطبيقات رقمية تفاعلية مساعدة لمعلمي وأخصائيي التربية الخاصة',
          summary:
            'مجموعة أدوات تفاعلية خفيفة وسريعة تشمل لوحات التعزيز الرقمي، والمؤقتات البصرية الحسية، وسجل رصد السلوك، وجداول الانتقال البصري المخصصة للشاشات الصفية.',
          technologies: ['React', 'إدارة الحالة اللحظية', 'Tailwind CSS', 'مؤثرات صوتية ويب', 'واجهات لمس'],
          architectureDiagram: [
            'الحاجة الصفية / السلوك',
            'أداة تفاعلية تعمل باللمس',
            'تعزيز فوري للطفل',
            'توثيق سريع لبيانات السلوك',
            'استمرارية التركيز التعليمي',
          ],
          caseStudy: {
            problem:
              'يفقد المعلم تركيز الفصل عندما يضطر للتعامل مع بطاقات التعزيز الكرتونية، وساعات الإيقاف اليدوية، والأوراق المنفصلة أثناء إدارة سلوكيات الطلاب داخل الفصل.',
            solution:
              'حزمة أدوات ويب تفاعلية خالية من المشتتات، مصممة لتعمل بسلاسة على شاشات الآيباد والسبورات الذكية لتوفير تعزيز بصري وحسي فوري وتوثيق سريع.',
            myRole:
              'تصميم وبرمجة واختبار كل أداة بشكل مباشر داخل فصول التربية الخاصة، وضبط المؤثرات البصرية والصوتية لتناسب حساسية الطلاب ذوي التوحد.',
            howItWorks:
              'يفتح المعلم الأداة المحددة بنقرة واحدة: لوحة تعزيز بالنجوم القابلة للتخصيص، أو مؤقت بصري هادئ، أو مسجل سلوك بلمسة واحدة لتدوين تكرار السلوكيات.',
            value:
              'يحافظ على سلاسة الحصة التعليمية، ويقلل الأدوات الورقية المبعثرة، ويحفز الطلاب عبر تغذية راجعة بصرية وصوتية مشجعة.',
            keyFeatures: [
              'لوحات تعزيز رمزي تفاعلية قابلة للتخصيص (نجوم، كؤوس، أوسمة)',
              'مؤقتات بصرية حسية ذات ألوان مهدئة وانتقالات تدريجية',
              'مسجل رصد السلوك بلمسة واحدة (السوابق - السلوك - اللواحق)',
              'منظم الجداول البصرية اليومية لدعم الانتقال بين الأنشطة',
            ],
            whatILearned:
              'الأدوات الصفية يجب أن تعمل بدون أي تأخير، وبدون الحاجة لتسجيل دخول معقد، مع مراعاة الفروق الفردية في الحساسية البصرية والصوتية.',
          },
        },
      ],
    },
    howIApproach: {
      title: 'منهجية معالجة المشكلات',
      subtitle:
        'منهجية من 5 خطوات واضحة ومكررة لتحويل المشكلات الميدانية والتشغيلية الواقعية إلى حلول وأنظمة رقمية متينة.',
      methodPill: 'منهجية حل مشكلات عملية ومكررة',
      steps: [
        {
          step: '01',
          title: 'الملاحظة الميدانية (Observe)',
          description:
            'الانغماس في البيئة الواقعية لفهم التحدي الإنساني والتشغيلي. ملاحظة كيف يعمل المعلم أو الأخصائي أو الفريق في الواقع، وتحديد نقاط الهدر غير المرئية.',
          action: 'فهم الواقع الإنساني والعملي بعمق قبل التفكير في أي تقنية.',
        },
        {
          step: '02',
          title: 'تفكيك وتحليل المسار (Map)',
          description:
            'تفكيك مسار العمل المعقد إلى مراحل تفصيلية، وتحديد مسؤولية كل طرف، ونقاط إدخال البيانات، والحالات الاستثنائية للوصول لنقطة التحسين الجوهرية.',
          action: 'رسم مسارات العمل، ورحلة المستخدم، وتدفق البيانات.',
        },
        {
          step: '03',
          title: 'تصميم النظام (Design)',
          description:
            'هندسة نظام عملي ومبسط. بناء هيكل البيانات، وتحديد الصلاحيات، ورسم واجهات مستخدم مريحة وعالية التباين تقلل الجهد الذهني للمستخدم.',
          action: 'تصميم أنظمة متماسكة وسهلة الاستخدام، وليس مجرد شاشات جميلة.',
        },
        {
          step: '04',
          title: 'البناء والنمذجة السريعة (Build)',
          description:
            'تطوير نماذج برمجية حقيقية وتفاعلية بسرعة باستخدام أحدث تقنيات الويب (React, Tailwind, Firebase) والاستفادة من الذكاء الاصطناعي لاختبار الفرضيات.',
          action: 'بناء نماذج أولية تفاعلية وقابلة للتجربة الفعلية.',
        },
        {
          step: '05',
          title: 'التطوير عبر الملاحظة (Improve)',
          description:
            'إتاحة النظام للمستخدمين الفعليين في الميدان، وجمع الملاحظات المباشرة حول نقاط الصعوبة، والتحسين السريع لضمان تحقيق أعلى قيمة واعتماد.',
          action: 'التحسين المستمر بناءً على سلوك وملاحظات الممارسين الحقيقيين.',
        },
      ],
    },
    selectedCapabilities: {
      title: 'مصفوفة القدرات التخصصية',
      subtitle:
        'استعراض منظم وسريع لأبرز القدرات عبر مجالات التربية الخاصة، والتقنية، والمنتجات، والمهارات التجارية.',
      groups: [
        {
          title: 'التربية الخاصة والخدمات الإنسانية',
          subtitle: 'الأساس الإكلينيكي والتربوي',
          items: [
            'تأهيل اضطراب طيف التوحد',
            'تصميم وإدارة الخطط الفردية (IEP)',
            'تدريس ومناهج التربية الخاصة',
            'تحليل وتعديل السلوك التطبيقي (ABA)',
            'أسس التأهيل اللغوي والتخاطب',
            'أنظمة التواصل البديل والمعزز (AAC)',
            'التقييم النمائي والوظيفي الشامل',
            'الإرشاد والتوجيه الأسري المستمر',
          ],
        },
        {
          title: 'التقنية وهندسة البرمجيات',
          subtitle: 'أدوات الويب والأنظمة الحديثة',
          items: [
            'بيئة وتطوير React & Vite',
            'لغة TypeScript و JavaScript الحديثة',
            'تنسيق Tailwind CSS والتصميم المتجاوب',
            'قواعد بيانات Firebase و Firestore',
            'واجهات البرمجة REST APIs وإدارة الحالة',
            'هندسة واجهات اللغة العربية (RTL)',
            'لوحات التحكم وتصور البيانات الرقمية',
            'أنظمة الصلاحيات وتسجيل الدخول الآمن',
          ],
        },
        {
          title: 'هندسة وتصميم المنتجات',
          subtitle: 'من الفكرة النظرية إلى المنتج الفعلي',
          items: [
            'رسم وتحليل مسارات العمل التشغيلية',
            'هندسة تجربة المستخدم (UX Architecture)',
            'بناء النماذج الأولية السريعة (Rapid MVP)',
            'تصميم أنظمة تكنولوجيا التعليم (EdTech)',
            'مسارات جمع البيانات والنماذج الرقمية',
            'أنظمة التحقق بمسح الـ QR',
            'صياغة المتطلبات الوظيفية للبرمجيات',
            'التطوير المستمر عبر ملاحظات المستخدمين',
          ],
        },
        {
          title: 'المهارات التجارية والتواصل',
          subtitle: 'الفكر التجاري وتجربة العملاء',
          items: [
            'استكشاف الاحتياجات وتحليل المشكلات',
            'التواصل الاستشاري القائم على القيمة',
            'التفاوض وإقناع أصحاب المصلحة',
            'الالتزام بمؤشرات الأداء والمستهدفات',
            'تدريب المعلمين وتمكين الكوادر تقنياً',
            'إدارة العلاقات وبناء الثقة طويلة الأمد',
            'مواءمة العمل بين الفرق متعددة التخصصات',
            'الواقعية التجارية والتركيز على العائد (ROI)',
          ],
        },
      ],
    },
    specialEducation: {
      title: 'الخبرة التخصصية والاعتمادات المهنية',
      subtitle:
        'ربط التقنية بالممارسة الميدانية المعتمدة في التربية الخاصة والمناهج الإكلينيكية الموثقة.',
      skills: [
        'برامج تأهيل طيف التوحد المعتمدة',
        'بناء ومتابعة الخطط التربوية الفردية (IEP)',
        'تعديل السلوك واستراتيجيات التعزيز الإيجابي',
        'بروتوكولات التأهيل اللغوي والنطق',
        'مناهج التربية الخاصة المتخصصة',
        'تصميم البيئات التعليمية المناسبة حسياً',
        'التقييم التشخيصي والوظيفي الصفي',
        'الإرشاد والشراكة الفعالة مع أولياء الأمور',
      ],
      educationTitle: 'المؤهل الأكاديمي والأساس التخصصي',
      developmentTitle: 'الاعتمادات والتراخيص المهنية المعتمدة',
      education: {
        degree: {
          title: 'بكالوريوس الآداب والتربية',
          specialization: 'التربية الخاصة وعلم النفس التربوي',
          institution: 'جامعة الزقازيق',
        },
        professionalDevelopment: [
          'الرخصة المهنية التعليمية — هيئة تقويم التعليم والتدريب بالمملكة العربية السعودية',
          'شهادة أخصائي تأهيل اضطرابات التوحد والنمو',
          'بروتوكولات علاج اضطرابات النطق والكلام والتواصل',
          'استراتيجيات تعديل السلوك والتعزيز الإيجابي الميداني',
          'التصميم التعليمي الحديث والتقنيات المساعدة لذوي الإعاقة',
        ],
      },
    },
    aiTech: {
      title: 'الذكاء الاصطناعي والمصداقية التقنية',
      subtitle:
        'ترسانة تقنية متوازنة تجمع بين تطوير الويب الحديث، وهندسة مسارات الذكاء الاصطناعي، والأتمتة التشغيلية.',
      aiTiersTitle: 'كيف يوظف محمود الذكاء الاصطناعي؟',
      aiTiers: [
        {
          tier: '01 // مستخدم ذكي للذكاء الاصطناعي',
          title: 'تسريع إنتاجية العمل والأبحاث',
          description:
            'يوظف أحدث نماذج الذكاء الاصطناعي يومياً لتسريع البحث، وإعداد المحتوى التعليمي، وصياغة التوثيق، وكتابة المواصفات الفنية في جزء ضئيل من الوقت المعتاد.',
        },
        {
          tier: '02 // مصمم مسارات عمل ذكية',
          title: 'هندسة أوامر دقيقة وممنهجة',
          description:
            'يصمم مسارات أوامر (Prompts) متكررة ومحكمة المدخلات والمخرجات تحول المتطلبات التعليمية والتجارية المعقدة إلى نتائج برمجية ومحتوى متسق عالي الجودة.',
        },
        {
          tier: '03 // مطور معزز بالذكاء الاصطناعي',
          title: 'بناء النماذج البرمجية الأولية بسرعة',
          description:
            'يستثمر أدوات البرمجة الحديثة المعززة بالذكاء الاصطناعي لبناء تطبيقات ويب كاملة وتفاعلية (React + Firebase) بسرعة للتحقق من فاعلية الأفكار مع المستخدمين الحقيقيين.',
        },
      ],
      categories: [
        {
          title: 'تطوير واجهات الويب (Frontend)',
          description: 'بناء واجهات سريعة وتفاعلية مع دعم كامل وأصيل للغة العربية والمحاذاة من اليمين لليسار.',
          evidenceProject: 'معيار 360، لين، مولد المواقع',
          skills: [
            { name: 'React', projectEvidence: 'معيار 360، لين' },
            { name: 'TypeScript / JS', projectEvidence: 'كافة المشاريع' },
            { name: 'Tailwind CSS', projectEvidence: 'معيار 360، لين' },
            { name: 'Vite والأدوات الحديثة', projectEvidence: 'كافة المشاريع' },
            { name: 'واجهات RTL متجاوبة', projectEvidence: 'معيار 360، مولد الويب' },
          ],
        },
        {
          title: 'البيانات والسحابة والأتمتة',
          description: 'هندسة قواعد البيانات السحابية، ونظم المصادقة والصلاحيات، ومسارات الأتمتة الموثوقة.',
          evidenceProject: 'معيار 360، لين',
          skills: [
            { name: 'Firebase Firestore', projectEvidence: 'معيار 360، لين' },
            { name: 'المصادقة والصلاحيات', projectEvidence: 'معيار 360' },
            { name: 'واجهات REST APIs', projectEvidence: 'لين، معيار 360' },
            { name: 'النماذج الرقمية والـ QR', projectEvidence: 'لين، الأدوات الصفية' },
            { name: 'Google Sheets المتقدم', projectEvidence: 'العمليات التعليمية' },
          ],
        },
        {
          title: 'أدوات الذكاء الاصطناعي وتصميم المنتجات',
          description: 'توظيف النماذج اللغوية والأدوات البصرية لتحويل المفاهيم البرمجية إلى منتجات حية.',
          evidenceProject: 'مولد المواقع الذكي، حزمة الأدوات الصفية',
          skills: [
            { name: 'الذكاء الاصطناعي التوليدي', projectEvidence: 'مولد الويب، معيار 360' },
            { name: 'هندسة الأوامر (Prompting)', projectEvidence: 'مولد المواقع الذكي' },
            { name: 'Google AI Studio', projectEvidence: 'مسارات بناء المفاهيم' },
            { name: 'Figma وهيكلة الواجهات', projectEvidence: 'معيار 360، لين' },
            { name: 'Notion والتوثيق المنظم', projectEvidence: 'معمارية الأنظمة' },
          ],
        },
      ],
    },
    business: {
      title: 'المنظور التجاري وتجربة العملاء',
      subtitle:
        'خبرة عملية تربط بين احتياجات المستفيد والجدوى التجارية للمنتج والتواصل المؤثر.',
      items: [
        {
          title: 'استكشاف احتياجات العميل والاستماع الفعال',
          description:
            'تدرب في بيئة فودافون على تحليل مشكلات العميل بسرعة، وطرح الأسئلة التشخيصية الدقيقة، وترجمة الخيارات المعقدة إلى حلول واضحة ومقنعة.',
          badge: 'خبرة فودافون العملية',
        },
        {
          title: 'التواصل الاستشاري والإقناع القائم على القيمة',
          description:
            'يجسر الفجوة بين التفاصيل التقنية الدقيقة والقيمة التجارية الملموسة، مما يمكنه من عرض الأفكار بوضوح للإدارات وأصحاب القرار.',
          badge: 'مواءمة أصحاب القرار',
        },
        {
          title: 'العمل وفق مستهدفات الأداء والمسؤولية',
          description:
            'خبرة متمرسة في العمل تحت معايير أداء ومستهدفات دقيقة، مما يرسخ الانضباط والتركيز على النتائج والمخرجات في كل مشروع.',
          badge: 'الانضباط والفاعلية',
        },
      ],
    },
    about: {
      title: 'عن محمود الباهي',
      p1:
        'محمود الباهي مهني مصري يعمل في المملكة العربية السعودية عند نقطة التقاء تجمع بين التربية الخاصة، والذكاء الاصطناعي، وتقنيات الويب الحديثة، وتطوير المنتجات. انطلق مساره من العمل الإكلينيكي المباشر في التخاطب وتأهيل أطفال طيف التوحد، مما منحه فهماً ميدانياً حقيقياً لكيفية تعلم الطلاب، وتحديات المعلمين، ونقاط الهدر في البيئات التعليمية.',
      p2:
        'بدلاً من النظر إلى التقنية كمفهوم مجرد أو نظري، يوظف محمود البرمجة الحديثة والذكاء الاصطناعي كأدوات عملية لبناء برمجيات حقيقية وسهلة الاستخدام، تسهم في تقليص الأعباء الإدارية والارتقاء بجودة الخدمات الإنسانية والتعليمية.',
      pillarsTitle: 'ما أعمل على بنائه وتطويره مستقبلاً',
      pillars: [
        {
          title: 'تكنولوجيا التربية الخاصة (SEN EdTech)',
          description: 'ريادة منصات تكنولوجيا التعليم العربية التي تجعل متابعة الخطط الفردية وتوثيقها عملية سهلة ومثرية بالبيانات.',
        },
        {
          title: 'أتمتة مسارات العمل بالذكاء الاصطناعي',
          description: 'إلغاء الأعباء الروتينية والورقية عن كاهل المعلمين والمؤسسات عبر مسارات عمل ذكية مؤتمتة.',
        },
        {
          title: 'تصميم المنتجات المتمحورة حول الإنسان',
          description: 'تحويل المشكلات التشغيلية المعقدة إلى أدوات رقمية بديهية وسهلة يستمتع المستخدمون بالتعامل معها يومياً.',
        },
        {
          title: 'المساهمة في الفرق متعددة التخصصات',
          description: 'الانضمام كحلقة وصل تخصصية للشركات الناشئة في تكنولوجيا التعليم والفرق التقنية والمؤسسات الطموحة.',
        },
      ],
    },
    caseStudyModal: {
      problem: 'المشكلة والتحدي الواقعي',
      solution: 'الحل والمنظومة المقترحة',
      role: 'دور محمود في المشروع',
      system: 'كيف يعمل النظام بالتفصيل؟',
      technologies: 'الترسانة والتقنيات المستخدمة',
      value: 'القيمة العملية والأثر التطبيقي',
      keyFeatures: 'أبرز الخصائص والقدرات',
      whatILearned: 'الدروس والرؤى المعمارية',
      architecture: 'مخطط تدفق النظام',
      close: 'إغلاق دراسة الحالة',
    },
    contact: {
      title: 'لنبنِ معاً حلولاً عملية ذات قيمة',
      subtitle:
        'هل تبحث عن شخص يفهم المشكلة الإنسانية والتشغيلية ويفهم التقنية في آن واحد؟ متاح للفرص الوظيفية النوعية، والشراكات في تكنولوجيا التعليم، وتطوير المنتجات، والاستشارات التقنية.',
      whatsapp: 'محادثة مباشرة عبر واتساب',
      email: 'إرسال بريد إلكتروني',
      linkedin: 'الملف الشخصي على لينكد إن',
      github: 'حساب GitHub',
      directNumber: '+966 57 060 0671',
      copied: 'تم النسخ إلى الحافظة بنجاح!',
      copyEmail: 'نسخ عنوان البريد الإلكتروني',
      openWhatsapp: 'فتح المحادثة في واتساب',
    },
    cvModal: {
      title: 'السيرة الذاتية المهنية (CV)',
      description:
        'يمكنك تحميل السيرة الذاتية الرسمية لمحمود الباهي بصيغة PDF أو الاطلاع على ملخص المؤهلات والخبرات أدناه.',
      pathNotice: 'الملف منظم لمسؤولي التوظيف ومديري المنتجات ومؤسسي شركات تكنولوجيا التعليم.',
      downloadNow: 'تحميل ملف الـ PDF الرسمي',
      previewSummary: 'ملخص المؤهلات والخبرات الأساسية',
      close: 'إغلاق النافذة',
    },
    footer: {
      copyright: 'محمود الباهي. جميع الحقوق محفوظة.',
      tagline: 'تربية خاصة × ذكاء اصطناعي × تقنية × تكنولوجيا التعليم',
      backToTop: 'العودة للأعلى',
    },
  },
};
