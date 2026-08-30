import React, { useState, useEffect } from 'react';
import { Language, DashboardSection, EducationExperienceItem, ProjectItem } from './types';
import { content } from './data/content';
import { AppSidebar } from './components/dashboard/AppSidebar';
import { AppTopBar } from './components/dashboard/AppTopBar';
import { EducationDashboardView } from './components/dashboard/views/EducationDashboardView';
import { TechnologyDashboardView } from './components/dashboard/views/TechnologyDashboardView';
import { AiDashboardView } from './components/dashboard/views/AiDashboardView';
import { SalesDashboardView } from './components/dashboard/views/SalesDashboardView';
import { ExperienceDashboardView } from './components/dashboard/views/ExperienceDashboardView';
import { ProjectsDashboardView } from './components/dashboard/views/ProjectsDashboardView';
import { TrainingDashboardView } from './components/dashboard/views/TrainingDashboardView';
import { CertificatesDashboardView } from './components/dashboard/views/CertificatesDashboardView';
import { AcademicDashboardView } from './components/dashboard/views/AcademicDashboardView';
import { ExperienceDetailDrawer } from './components/dashboard/ExperienceDetailDrawer';
import { CaseStudyDrawer } from './components/dashboard/CaseStudyDrawer';
import { ContactDrawer } from './components/dashboard/ContactDrawer';
import { CvModal } from './components/CvModal';
import { CertificateModal } from './components/dashboard/CertificateModal';
import { CertificateItem } from './types';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<DashboardSection>('education');
  
  // Mobile sidebar state
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  
  // Drawer states
  const [selectedExperience, setSelectedExperience] = useState<EducationExperienceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  // Synchronize document attributes for language and RTL
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar'
      ? 'محمود الباهي | لوحة العمل المهنية — التربية الخاصة • التقنية • AI'
      : 'Mahmoud Elbahi | Career Dashboard — Special Education • Technology • AI';
  }, [lang]);

  // Scroll main container to top when section changes
  useEffect(() => {
    const mainWorkspace = document.getElementById('main-workspace');
    if (mainWorkspace) {
      mainWorkspace.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleSelectSection = (section: DashboardSection) => {
    setActiveSection(section);
  };

  const currentContent = content[lang];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#08090B] text-[#EDEDEE] antialiased selection:bg-emerald-400 selection:text-black">
      
      {/* 1. PERMANENT APPLICATION SIDEBAR */}
      <AppSidebar
        lang={lang}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onToggleLang={toggleLanguage}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* 2. MAIN APPLICATION WORKSPACE */}
      <div 
        id="main-workspace"
        className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#0D1014] relative z-10"
      >
        
        {/* Subtle Ambient Background Depth */}
        <div className="fixed inset-0 bg-grid-pattern opacity-25 pointer-events-none z-0" />
        <div className="fixed -top-40 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="fixed top-1/2 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="fixed bottom-0 left-1/3 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Sticky App Top Bar */}
        <AppTopBar
          lang={lang}
          activeSection={activeSection}
          onToggleMobileMenu={() => setIsMobileSidebarOpen(true)}
          onToggleLang={toggleLanguage}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* Dynamic Workspace Content with Fluid Animations */}
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 max-w-6xl w-full mx-auto relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection + lang}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Primary Pathways */}
              {activeSection === 'education' && (
                <EducationDashboardView
                  lang={lang}
                  content={currentContent}
                  onSelectSection={handleSelectSection}
                  onOpenExperienceDetail={(exp) => setSelectedExperience(exp)}
                />
              )}

              {activeSection === 'technology' && (
                <TechnologyDashboardView
                  lang={lang}
                  content={currentContent}
                  onSelectSection={handleSelectSection}
                  onOpenCaseStudy={(proj) => setSelectedProject(proj)}
                />
              )}

              {activeSection === 'ai' && (
                <AiDashboardView
                  lang={lang}
                  content={currentContent}
                  onSelectSection={handleSelectSection}
                />
              )}

              {activeSection === 'sales' && (
                <SalesDashboardView
                  lang={lang}
                  content={currentContent}
                  onSelectSection={handleSelectSection}
                />
              )}

              {/* Career Modules */}
              {activeSection === 'experience' && (
                <ExperienceDashboardView
                  lang={lang}
                  content={currentContent}
                  onOpenExperienceDetail={(exp) => setSelectedExperience(exp)}
                />
              )}

              {activeSection === 'projects' && (
                <ProjectsDashboardView
                  lang={lang}
                  content={currentContent}
                  onOpenCaseStudy={(proj) => setSelectedProject(proj)}
                />
              )}

              {activeSection === 'training' && (
                <TrainingDashboardView
                  lang={lang}
                  onSelectSection={handleSelectSection}
                />
              )}

              {activeSection === 'certificates' && (
                <CertificatesDashboardView
                  lang={lang}
                  onOpenCertificate={(cert) => setSelectedCertificate(cert)}
                />
              )}

              {activeSection === 'academic' && (
                <AcademicDashboardView
                  lang={lang}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Minimalist Dashboard Footer */}
        <footer className="mt-auto border-t border-[#1E242C] bg-[#0A0C0F]/80 backdrop-blur px-4 sm:px-8 py-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/50">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Mahmoud Elbahi — Personal Career Dashboard</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/mahmodelbahi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <button
                onClick={() => setIsContactOpen(true)}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                {lang === 'ar' ? 'تواصل مباشر' : 'Contact'}
              </button>
            </div>
          </div>
        </footer>

      </div>

      {/* 3. DRAWERS & MODALS */}
      
      {/* Experience Detail Drawer */}
      <ExperienceDetailDrawer
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        lang={lang}
      />

      {/* Project Case Study Drawer */}
      <CaseStudyDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />

      {/* Contact Panel Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />

      {/* CV Download / Preview Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        lang={lang}
        content={currentContent}
      />

      {/* Certificate Detail / Verification Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        lang={lang}
      />

    </div>
  );
}
