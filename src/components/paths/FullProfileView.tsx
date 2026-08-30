import React from 'react';
import { Language } from '../../types';
import { SiteContent } from '../../data/content';
import { Hero } from '../Hero';
import { RecruiterSnapshot } from '../RecruiterSnapshot';
import { QuickMetrics } from '../QuickMetrics';
import { CareerStory } from '../CareerStory';
import { Experience } from '../Experience';
import { Projects } from '../Projects';
import { HowIApproach } from '../HowIApproach';
import { SelectedCapabilities } from '../SelectedCapabilities';
import { SpecialEducation } from '../SpecialEducation';
import { AiTechSection } from '../AiTechSection';
import { BusinessPerspective } from '../BusinessPerspective';
import { AboutSection } from '../AboutSection';
import { ContactSection } from '../ContactSection';
import { Footer } from '../Footer';

interface FullProfileViewProps {
  lang: Language;
  content: SiteContent;
  onOpenCvModal: () => void;
}

export const FullProfileView: React.FC<FullProfileViewProps> = ({
  lang,
  content,
  onOpenCvModal,
}) => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <Hero
        lang={lang}
        content={content}
        onOpenCvModal={onOpenCvModal}
      />

      {/* Recruiter Snapshot */}
      <RecruiterSnapshot
        lang={lang}
        content={content}
      />

      {/* Quick Metrics */}
      <QuickMetrics
        lang={lang}
        content={content}
      />

      {/* 01: Career Story */}
      <CareerStory
        lang={lang}
        content={content}
      />

      {/* 02: Professional Experience */}
      <Experience
        lang={lang}
        content={content}
      />

      {/* 03: Selected Projects & Case Studies */}
      <Projects
        lang={lang}
        content={content}
      />

      {/* 04: How I Approach Problems */}
      <HowIApproach
        lang={lang}
        content={content}
      />

      {/* 05: Selected Capabilities */}
      <SelectedCapabilities
        lang={lang}
        content={content}
      />

      {/* 06: Special Education Deep-Dive */}
      <SpecialEducation
        lang={lang}
        content={content}
      />

      {/* 07: Applied AI & Technology Ecosystem */}
      <AiTechSection
        lang={lang}
        content={content}
      />

      {/* 08: Business & Sales Foundation */}
      <BusinessPerspective
        lang={lang}
        content={content}
      />

      {/* 09: About Mahmoud */}
      <AboutSection
        lang={lang}
        content={content}
        onOpenCvModal={onOpenCvModal}
      />

      {/* 10: Direct Contact Section */}
      <ContactSection
        lang={lang}
        content={content}
      />

      {/* Footer */}
      <Footer
        lang={lang}
        content={content}
      />
    </div>
  );
};
