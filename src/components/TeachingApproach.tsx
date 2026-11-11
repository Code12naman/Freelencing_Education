import React from 'react';
import { TEACHING_STAGES } from '../data/instituteData';
import { Lightbulb, Edit3, Award, RefreshCw, CheckCircle2 } from 'lucide-react';

export const TeachingApproach: React.FC = () => {
  const getStageIcon = (index: number) => {
    switch (index) {
      case 0: return <Lightbulb className="w-5 h-5 text-[#CBA34A]" />;
      case 1: return <Edit3 className="w-5 h-5 text-[#CBA34A]" />;
      case 2: return <Award className="w-5 h-5 text-[#CBA34A]" />;
      case 3: return <RefreshCw className="w-5 h-5 text-[#CBA34A]" />;
      default: return null;
    }
  };

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-[#E6E7E9] gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
                OUR METHODOLOGY
              </span>
              <span className="w-6 h-[1px] bg-[#CBA34A]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold tracking-tight">
              A Structured Approach to Better Learning.
            </h2>
            <p className="text-sm sm:text-base text-[#737B85] mt-3 leading-relaxed">
              Academic excellence is never accidental; it is the predictable outcome of an iterative 4-stage pedagogical continuum executed with discipline.
            </p>
          </div>

          {/* Authentic Whiteboard Teaching Photo Callout */}
          <div className="lg:max-w-sm w-full">
            <div className="relative rounded overflow-hidden border border-[#E6E7E9] bg-[#091829] shadow-subtle">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                alt="Authentic real photograph of science teacher explaining conceptual derivations on a classroom whiteboard"
                className="w-full h-44 sm:h-48 object-cover filter saturate-[0.95] contrast-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091829]/90 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] text-gray-200 font-mono">
                  ACTIVE INSTRUCTION // CONCEPT DECONSTRUCTION
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Clean Horizontal Process Layout with Flow Indicators */}
        {/* Mobile: Refined Vertical Stepper Layout */}
        <div className="relative">
          
          {/* Subtle connecting horizontal line on desktop */}
          <div className="hidden lg:block absolute top-[45px] left-8 right-8 h-[1px] bg-[#E6E7E9] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {TEACHING_STAGES.map((stage, idx) => (
              <div 
                key={stage.number}
                className="bg-[#F8F7F3] border border-[#E6E7E9] rounded p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#CBA34A]/50 hover:shadow-subtle group"
              >
                <div>
                  {/* Top Header with Number and Stage Indicator */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6E7E9]">
                    <span className="font-serif text-3xl font-bold text-[#10243B] tracking-tight group-hover:text-[#CBA34A] transition-colors">
                      {stage.number}
                    </span>
                    <div className="w-9 h-9 rounded bg-white border border-[#E6E7E9] flex items-center justify-center shadow-2xs">
                      {getStageIcon(idx)}
                    </div>
                  </div>

                  {/* Stage Title & Subtitle */}
                  <h3 className="font-serif text-xl font-semibold text-[#10243B] mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#CBA34A] uppercase tracking-wide mb-3">
                    {stage.subheading}
                  </p>

                  <p className="text-xs sm:text-sm text-[#303B49] leading-relaxed mb-5">
                    {stage.description}
                  </p>
                </div>

                {/* Stage Deliverables */}
                <div className="pt-4 border-t border-[#E6E7E9] space-y-2">
                  <div className="text-[10px] font-semibold text-[#737B85] uppercase tracking-wider">
                    Key Deliverables
                  </div>
                  {stage.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#303B49]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBA34A]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Methodology Guarantee Footer Strip */}
        <div className="mt-12 p-6 bg-[#F8F7F3] border border-[#E6E7E9] rounded flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#CBA34A]" />
            <span className="text-xs sm:text-sm text-[#10243B] font-medium">
              Every chapter across Physics, Chemistry, Biology, and Mathematics traverses this 4-step sequence before progressing.
            </span>
          </div>
          <span className="text-xs font-mono text-[#737B85] uppercase tracking-wider shrink-0">
            Strict Pedagogical Standard
          </span>
        </div>

      </div>
    </section>
  );
};
