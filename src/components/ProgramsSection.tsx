import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, CheckCircle2, ChevronRight, Layers, Award, Sparkles } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/instituteData';
import { CourseProgram } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (program: CourseProgram) => void;
  onOpenEnquiry: (programTitle?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram, onOpenEnquiry }) => {
  const p11 = PROGRAMS_DATA.find(p => p.id === 'class-11-science')!;
  const p12 = PROGRAMS_DATA.find(p => p.id === 'class-12-science')!;
  const pNeet = PROGRAMS_DATA.find(p => p.id === 'neet-preparation')!;
  const pIntg = PROGRAMS_DATA.find(p => p.id === 'integrated-program')!;

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#F8F7F3] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E6E7E9] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
                ACADEMIC CURRICULA
              </span>
              <span className="w-6 h-[1px] bg-[#CBA34A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold tracking-tight">
              Programs Designed for Academic Excellence.
            </h2>
          </div>
          <p className="text-sm text-[#737B85] max-w-sm">
            Tailored learning tracks engineered for senior secondary board mastery and competitive medical/engineering entrance standards.
          </p>
        </div>

        {/* 4 DISTINCT PROGRAM COMPOSITIONS */}
        <div className="space-y-16">
          
          {/* ========================================================
              PROGRAM 1: CLASS 11 SCIENCE (Split Editorial with Photo)
             ======================================================== */}
          <div className="bg-[#FFFFFF] border border-[#E6E7E9] rounded p-6 sm:p-8 lg:p-10 shadow-subtle transition-all duration-300 hover:shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-1 bg-[#ECE9E1] text-[#10243B] text-[11px] font-semibold uppercase tracking-wider rounded">
                    {p11.category}
                  </span>
                  <span className="text-xs text-[#737B85] font-mono">
                    Code: {p11.code}
                  </span>
                  <span className="text-xs text-[#CBA34A] font-medium">
                    {p11.duration}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#10243B]">
                    {p11.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#CBA34A] mt-1">
                    {p11.tagline}
                  </p>
                </div>

                {/* Subject Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {p11.subjects.map(s => (
                    <span key={s} className="text-xs font-medium text-[#303B49] bg-[#F8F7F3] border border-[#E6E7E9] px-3 py-1 rounded">
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#303B49] leading-relaxed">
                  {p11.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {p11.highlights.slice(0, 4).map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#737B85]">
                      <span className="text-[#CBA34A] font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectProgram(p11)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#10243B] text-[#F8F7F3] text-xs font-medium uppercase tracking-wider rounded hover:bg-[#091829] transition-all"
                  >
                    <span>Explore Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CBA34A]" />
                  </button>
                  <button
                    onClick={() => onOpenEnquiry(p11.title)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#10243B] border border-[#10243B]/20 hover:border-[#10243B] rounded uppercase tracking-wider transition-all"
                  >
                    <span>Enquire for Class 11</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded overflow-hidden border border-[#E6E7E9] bg-[#091829]">
                  <img
                    src={p11.image}
                    alt={p11.imageAlt}
                    className="w-full h-72 sm:h-84 lg:h-96 object-cover filter saturate-[0.9]"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#10243B]/90 backdrop-blur-sm p-3 rounded text-white text-[11px]">
                    <div className="font-semibold text-[#E2C77D]">Early Bridge Modules Available</div>
                    <div className="text-gray-300 text-[10px]">Smoothing the Class 10 to 11 syllabus jump</div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* ========================================================
              PROGRAM 2: CLASS 12 SCIENCE (Horizontal Editorial Ribbon)
             ======================================================== */}
          <div className="bg-[#FFFFFF] border border-[#E6E7E9] rounded p-6 sm:p-8 lg:p-10 shadow-subtle transition-all duration-300 hover:shadow-card">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E6E7E9]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 bg-[#ECE9E1] text-[#10243B] text-[11px] font-semibold uppercase tracking-wider rounded">
                    {p12.category}
                  </span>
                  <span className="text-xs text-[#737B85] font-mono">Code: {p12.code}</span>
                  <span className="text-xs text-[#CBA34A] font-medium">{p12.duration}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#10243B]">
                  {p12.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#CBA34A] mt-0.5">
                  {p12.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {p12.subjects.map(s => (
                  <span key={s} className="text-xs font-medium text-[#10243B] bg-[#ECE9E1]/70 px-3 py-1.5 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#303B49] leading-relaxed">
                  {p12.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {p12.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#303B49]">
                      <CheckCircle2 className="w-4 h-4 text-[#CBA34A] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#F8F7F3] p-5 rounded border border-[#E6E7E9] space-y-4">
                <div className="text-xs font-semibold text-[#10243B] uppercase tracking-wider">
                  Target Examination Benchmarks
                </div>
                <div className="space-y-2 text-xs text-[#737B85]">
                  <div className="flex justify-between py-1 border-b border-[#E6E7E9]">
                    <span>Syllabus Target:</span>
                    <span className="font-medium text-[#10243B]">November End</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E6E7E9]">
                    <span>Board Mock Series:</span>
                    <span className="font-medium text-[#10243B]">Dec – Jan (Full Scale)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Doubt Desk Hours:</span>
                    <span className="font-medium text-[#10243B]">Daily Post-Lecture</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => onSelectProgram(p12)}
                    className="w-full py-2.5 bg-[#10243B] text-white text-xs font-medium uppercase tracking-wider rounded hover:bg-[#091829] flex items-center justify-center gap-2"
                  >
                    <span>View Syllabus Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CBA34A]" />
                  </button>
                  <button
                    onClick={() => onOpenEnquiry(p12.title)}
                    className="w-full py-2 text-xs font-medium text-[#10243B] border border-[#10243B]/20 rounded hover:border-[#10243B] uppercase tracking-wider"
                  >
                    Enquire for Class 12
                  </button>
                </div>
              </div>
            </div>
          </div>


          {/* ========================================================
              PROGRAM 3: NEET PREPARATION (Deep Navy Institutional Layout)
             ======================================================== */}
          <div className="bg-[#10243B] text-[#F8F7F3] rounded p-6 sm:p-8 lg:p-12 shadow-card relative overflow-hidden border border-[#20344C]">
            {/* Subtle background crest / texture */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#CBA34A]/10 to-transparent rounded-full pointer-events-none -mr-20 -mt-20" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-[#CBA34A] text-[#091829] text-[11px] font-bold uppercase tracking-wider rounded">
                    Medical Entrance Track
                  </span>
                  <span className="text-xs text-gray-300 font-mono">
                    Code: {pNeet.code}
                  </span>
                  <span className="text-xs text-[#E2C77D]">
                    Physics + Chemistry + Biology (Botany & Zoology)
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                    {pNeet.title}
                  </h3>
                  <p className="text-sm font-medium text-[#E2C77D] mt-1">
                    {pNeet.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                  {pNeet.description}
                </p>

                {/* 4 Focused Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#152C47] p-3.5 rounded border border-[#264870]">
                    <div className="text-xs font-semibold text-[#E2C77D] uppercase tracking-wider mb-1">
                      NCERT Line-by-Line Mastery
                    </div>
                    <p className="text-xs text-gray-300">
                      Exhaustive coverage of every NCERT paragraph, diagram, summary, and exemplar problem for Biology & Chemistry.
                    </p>
                  </div>

                  <div className="bg-[#152C47] p-3.5 rounded border border-[#264870]">
                    <div className="text-xs font-semibold text-[#E2C77D] uppercase tracking-wider mb-1">
                      Physics Numerical Intuition
                    </div>
                    <p className="text-xs text-gray-300">
                      Step-by-step calculus tools, dimensional analysis, and error-reduction speed tactics for 45 Physics questions.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectProgram(pNeet)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#CBA34A] text-[#091829] text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#E2C77D] transition-all"
                  >
                    <span>Detailed NEET Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(pNeet.title)}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-white/30 hover:border-white text-white text-xs font-medium uppercase tracking-wider rounded transition-all"
                  >
                    <span>Enquire for NEET Batch</span>
                  </button>
                </div>

              </div>

              {/* Right: Realistic Laboratory & Medical Aspirant Visual Card */}
              <div className="lg:col-span-4">
                <div className="bg-[#152C47] p-5 rounded border border-[#264870] space-y-4">
                  <div className="text-xs font-semibold text-[#E2C77D] uppercase tracking-wider flex items-center justify-between">
                    <span>NEET-UG Target Protocol</span>
                    <Award className="w-4 h-4 text-[#CBA34A]" />
                  </div>
                  
                  <div className="space-y-2.5 text-xs text-gray-300">
                    <div className="pb-2 border-b border-[#264870]">
                      <span className="text-gray-400 block text-[11px]">Testing Pattern:</span>
                      <span className="font-medium text-white">Full 720-Mark OMR Simulations every 2 weeks</span>
                    </div>
                    <div className="pb-2 border-b border-[#264870]">
                      <span className="text-gray-400 block text-[11px]">Negative Marking Control:</span>
                      <span className="font-medium text-white">Individual error analysis register per candidate</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px]">Doubt Faculty:</span>
                      <span className="font-medium text-white">Subject-specific mentors stationed on-site</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#091829] rounded text-[11px] text-gray-300 italic border border-[#1E3B5D]">
                    "Precision in Biology + Speed in Chemistry + Logic in Physics = Medical Seat."
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* ========================================================
              PROGRAM 4: TWO-YEAR INTEGRATED PROGRAM (Flagship Architectural Layout)
             ======================================================== */}
          <div className="bg-[#FFFFFF] border-2 border-[#CBA34A]/40 rounded p-6 sm:p-8 lg:p-12 shadow-card relative">
            {/* Top Right Flagship Tag */}
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#CBA34A] text-[#091829] text-xs font-bold uppercase tracking-wider rounded shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Flagship 2-Year Program</span>
              </span>
            </div>

            <div className="space-y-6">
              
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 bg-[#ECE9E1] text-[#10243B] text-[11px] font-semibold uppercase tracking-wider rounded">
                    {pIntg.category}
                  </span>
                  <span className="text-xs text-[#737B85] font-mono">Code: {pIntg.code}</span>
                  <span className="text-xs text-[#10243B] font-semibold">Class 11 + Class 12 Full Cycle</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#10243B]">
                  {pIntg.title}
                </h3>
                <p className="text-sm font-medium text-[#CBA34A] mt-1">
                  {pIntg.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#303B49] leading-relaxed max-w-4xl">
                {pIntg.description}
              </p>

              {/* Two-Year Roadmap Process */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E6E7E9]">
                <div className="bg-[#F8F7F3] p-5 rounded border border-[#E6E7E9] space-y-2">
                  <div className="text-xs font-bold text-[#CBA34A] font-mono uppercase">
                    Year 1 — Class 11
                  </div>
                  <h4 className="font-serif text-base font-semibold text-[#10243B]">
                    Foundation & Fundamental Mastery
                  </h4>
                  <p className="text-xs text-[#737B85] leading-relaxed">
                    Complete NCERT alignment, mathematical calculation speed, and foundational mechanics & atomic structure.
                  </p>
                </div>

                <div className="bg-[#F8F7F3] p-5 rounded border border-[#E6E7E9] space-y-2">
                  <div className="text-xs font-bold text-[#CBA34A] font-mono uppercase">
                    Year 2 — Class 12
                  </div>
                  <h4 className="font-serif text-base font-semibold text-[#10243B]">
                    Senior Board & Advanced Entrance Focus
                  </h4>
                  <p className="text-xs text-[#737B85] leading-relaxed">
                    Senior curriculum completed 3 months early, transitioning seamlessly into revision and competitive mock drills.
                  </p>
                </div>

                <div className="bg-[#F8F7F3] p-5 rounded border border-[#E6E7E9] space-y-2">
                  <div className="text-xs font-bold text-[#CBA34A] font-mono uppercase">
                    Final 5 Months
                  </div>
                  <h4 className="font-serif text-base font-semibold text-[#10243B]">
                    Full-Syllabus Test Series & Mastery
                  </h4>
                  <p className="text-xs text-[#737B85] leading-relaxed">
                    Intensive multi-chapter revision, previous 15-year examination papers, and micro-error diagnosis.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E6E7E9]">
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectProgram(pIntg)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#10243B] text-white text-xs font-medium uppercase tracking-wider rounded hover:bg-[#091829] transition-all"
                  >
                    <span>View Integrated Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CBA34A]" />
                  </button>
                  <button
                    onClick={() => onOpenEnquiry(pIntg.title)}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-[#10243B]/30 hover:border-[#10243B] text-[#10243B] text-xs font-medium uppercase tracking-wider rounded transition-all"
                  >
                    <span>Enquire for Integrated Batch</span>
                  </button>
                </div>

                <div className="text-xs text-[#737B85] font-mono">
                  *Recommended for students moving from Class 10 to Class 11.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
