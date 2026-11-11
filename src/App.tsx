import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TeachingApproach } from './components/TeachingApproach';
import { FacultySection } from './components/FacultySection';
import { ResultsSection } from './components/ResultsSection';
import { BatchSchedule } from './components/BatchSchedule';
import { FeeStructure } from './components/FeeStructure';
import { ParentStudentReviews } from './components/ParentStudentReviews';
import { EnquirySection } from './components/EnquirySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProgramModal } from './components/ProgramModal';
import { QuickEnquiryModal } from './components/QuickEnquiryModal';
import { FloatingActions } from './components/FloatingActions';
import { CourseProgram } from './types';
import { PROGRAMS_DATA } from './data/instituteData';

export function App() {
  const [selectedProgram, setSelectedProgram] = useState<CourseProgram | null>(null);
  const [quickEnquiryOpen, setQuickEnquiryOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (subject?: string) => {
    setEnquirySubject(subject);
    setQuickEnquiryOpen(true);
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgramById = (id: string) => {
    const prog = PROGRAMS_DATA.find(p => p.id === id);
    if (prog) {
      setSelectedProgram(prog);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#303B49] flex flex-col selection:bg-[#CBA34A]/25 selection:text-[#10243B]">
      {/* Refined Navigation Header */}
      <Header onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Split-Screen Editorial Hero */}
        <Hero 
          onExplorePrograms={handleExplorePrograms}
          onOpenEnquiry={() => handleOpenEnquiry('General Admission')}
        />

        {/* Institution Introduction (About) */}
        <AboutSection />

        {/* 4 Distinct Academic Program Layouts */}
        <ProgramsSection 
          onSelectProgram={(program) => setSelectedProgram(program)}
          onOpenEnquiry={(programTitle) => handleOpenEnquiry(programTitle)}
        />

        {/* Teaching Methodology (4 Stages) */}
        <TeachingApproach />

        {/* Faculty Mentorship Section */}
        <FacultySection />

        {/* Results & Student Progress Showcase (Authentic Registry) */}
        <ResultsSection />

        {/* Batch Schedule */}
        <div id="schedule-fees">
          <BatchSchedule onOpenEnquiry={(batch) => handleOpenEnquiry(`Batch: ${batch}`)} />
          <FeeStructure onOpenEnquiry={(plan) => handleOpenEnquiry(`Fee Query: ${plan}`)} />
        </div>

        {/* Student & Parent Experience Charter */}
        <ParentStudentReviews />

        {/* High-Conversion Admission Enquiry Section */}
        <EnquirySection initialSubject={enquirySubject} />

        {/* Campus Location & Contact */}
        <ContactSection />
      </main>

      {/* Dark Navy Institutional Footer */}
      <Footer 
        onOpenEnquiry={handleOpenEnquiry}
        onSelectProgram={handleSelectProgramById}
      />

      {/* Modals & Floating CTAs */}
      <ProgramModal 
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnquire={(title) => {
          setSelectedProgram(null);
          handleOpenEnquiry(title);
        }}
      />

      <QuickEnquiryModal 
        isOpen={quickEnquiryOpen}
        onClose={() => setQuickEnquiryOpen(false)}
        prefilledSubject={enquirySubject}
      />

      <FloatingActions 
        onOpenEnquiry={() => handleOpenEnquiry('Quick Enquiry')}
      />
    </div>
  );
}

export default App;

