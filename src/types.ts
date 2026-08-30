export type Language = 'en' | 'ar';

export type DashboardSection = 
  | 'education' 
  | 'technology' 
  | 'ai' 
  | 'sales' 
  | 'experience' 
  | 'projects' 
  | 'training' 
  | 'certificates'
  | 'academic';

export type CertificateCategory = 
  | 'all' 
  | 'special-education' 
  | 'autism' 
  | 'aba' 
  | 'speech-language' 
  | 'other';

export interface CertificateItem {
  id: string;
  title: string;
  issuer?: string;
  category: CertificateCategory;
  categoryLabel: string;
  type: string;
  year?: string;
  isFeatured?: boolean;
  statusBadge?: string;
  description?: string;
  driveUrl?: string;
}

export type ActiveView = DashboardSection | 'hub' | 'full';

export interface HubPathItem {
  id: 'education' | 'technology' | 'ai' | 'sales';
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface HubContent {
  name: string;
  positioning: string;
  summary: string;
  paths: HubPathItem[];
  viewFullProfile: string;
  backToHub: string;
  allAreas: string;
  letsConnect: string;
}

export interface EducationExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  duration?: string;
  employmentType?: string;
  shortSummary: string;
  points: string[];
  skills: string[];
}

export interface EducationTimelineItem {
  year: string;
  organization: string;
  role: string;
  tag?: string;
}

export interface EducationPathContent {
  title: string;
  subtitle: string;
  badge: string;
  narrative: {
    title: string;
    text: string;
  };
  timelineTitle: string;
  timelineItems: EducationTimelineItem[];
  experienceTitle: string;
  experienceItems: EducationExperienceItem[];
  viewExperienceLabel: string;
  hideExperienceLabel: string;
  expertiseTitle: string;
  expertiseList: string[];
  trainingTitle: string;
  trainingList: {
    title: string;
    issuer?: string;
  }[];
  projectsTitle: string;
  projectsSubtitle: string;
  connection: {
    label: string;
    equation: string;
    text: string;
  };
}

export interface TechnologyPathContent {
  title: string;
  subtitle: string;
  badge: string;
  whatIBuildTitle: string;
  whatIBuildItems: string[];
  projectsTitle: string;
  projectsSubtitle: string;
  stackTitle: string;
  stackCategories: {
    category: string;
    items: string[];
  }[];
  technicalRole: {
    title: string;
    pillars: string[];
    description: string;
  };
  connection: {
    label: string;
    equation: string;
    text: string;
  };
}

export interface AiPathContent {
  title: string;
  subtitle: string;
  badge: string;
  howIUseAiTitle: string;
  howIUseAiSubtitle: string;
  pillars: {
    title: string;
    description: string;
  }[];
  aiProjectsTitle: string;
  aiProjectsSubtitle: string;
  aiProjects: {
    title: string;
    flow: string;
    description: string;
    badge: string;
  }[];
  toolkitTitle: string;
  toolkitItems: string[];
  positioningNote: string;
  connection: {
    label: string;
    equation: string;
    text: string;
  };
}

export interface SalesPathContent {
  title: string;
  subtitle: string;
  badge: string;
  experienceTitle: string;
  vodafoneExperience: {
    role: string;
    company: string;
    location: string;
    period?: string;
    points: string[];
  };
  valueFlowTitle: string;
  valueFlowSubtitle: string;
  valueFlowSteps: {
    step: string;
    action: string;
    description: string;
  }[];
  salesImpactText: string;
  connection: {
    label: string;
    equation: string;
    text: string;
  };
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface RecruiterSnapshotBlock {
  key: 'domain' | 'tech' | 'technology' | 'product' | 'business';
  category: string;
  headline: string;
  description: string;
  tags: string[];
}

export interface ProblemApproachStep {
  step: string;
  title: string;
  description: string;
  action: string;
}

export interface SelectedCapabilitiesGroup {
  title: string;
  subtitle: string;
  items: string[];
}

export interface CareerStoryItem {
  step: string;
  title: string;
  tagline: string;
  description: string;
  coreImpact: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period?: string;
  isFeatured?: boolean;
  roleBadge?: string;
  intersectionLabel?: string;
  whatIWorkedOn: string[];
  capabilitiesDeveloped: string[];
  highlightNote?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  evidenceProject?: string;
  skills: {
    name: string;
    projectEvidence?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  isFlagship?: boolean;
  technologies: string[];
  architectureDiagram?: string[];
  caseStudy: {
    problem: string;
    solution: string;
    myRole: string;
    howItWorks: string;
    value: string;
    keyFeatures: string[];
    whatILearned: string;
  };
}

export interface BusinessItem {
  title: string;
  description: string;
  badge?: string;
}

export interface FocusPillar {
  title: string;
  description: string;
}

export interface EducationData {
  degree: {
    title: string;
    specialization: string;
    institution: string;
  };
  professionalDevelopment: string[];
}

