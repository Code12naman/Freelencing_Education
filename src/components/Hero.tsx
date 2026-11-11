import React from 'react';
import { ArrowRight, Compass, CheckCircle2, PhoneCall } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

interface HeroProps {
  onExplorePrograms: () => void;
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms, onOpenEnquiry }) => {
  return (
    <section id="hero" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden border-b border-[#E6E7E9] bg-[#F8F7F3]">
      {/* Subtle institutional micro-grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#10243B 1px, transparent 1px), linear-gradient(90deg, #10243B 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow with gold accent bar */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#CBA34A]" />
              <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#737B85]">
                {INSTITUTE_INFO.heroEyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-[#10243B] font-semibold tracking-tight leading-[1.12]">
              Building Strong Foundations for a Brighter Future.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#303B49] leading-relaxed max-w-2xl font-normal">
              {INSTITUTE_INFO.heroSubheading}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#10243B] hover:bg-[#091829] text-[#F8F7F3] text-sm font-medium tracking-wide uppercase rounded transition-all duration-200 shadow-sm hover:shadow group border border-[#10243B]"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4 text-[#CBA34A] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-transparent hover:bg-[#ECE9E1]/60 text-[#10243B] text-sm font-medium tracking-wide uppercase rounded border border-[#10243B]/25 hover:border-[#10243B] transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-[#CBA34A]" />
                <span>Talk to Our Team</span>
              </button>
            </div>

            {/* Understated Highlights Strip */}
            <div className="pt-8 border-t border-[#E6E7E9] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#10243B] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CBA34A]" />
                  <span>Concept-Based</span>
                </div>
                <p className="text-xs text-[#737B85] leading-relaxed">
                  First-principles focus before numerical shortcut application.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#10243B] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CBA34A]" />
                  <span>Structured Tests</span>
                </div>
                <p className="text-xs text-[#737B85] leading-relaxed">
                  Scheduled chapter tests with detailed descriptive feedback.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#10243B] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CBA34A]" />
                  <span>Individual Guidance</span>
                </div>
                <p className="text-xs text-[#737B85] leading-relaxed">
                  Dedicated in-person doubt resolution desks and progress tracking.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Art-Directed Editorial Image */}
          <div className="lg:col-span-5 relative">
            
            {/* Restrained Gold Geometric Frame Accent */}
            <div className="absolute -top-3 -right-3 w-32 h-32 border-t-2 border-r-2 border-[#CBA34A]/40 pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-3 -left-3 w-32 h-32 border-b-2 border-l-2 border-[#CBA34A]/40 pointer-events-none hidden sm:block" />

            <div className="relative bg-[#091829] rounded overflow-hidden shadow-card border border-[#E6E7E9]">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                alt="Science students engaged in disciplined academic study at Vardhani Classes"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-transform duration-500 hover:scale-[1.02]"
                loading="eager"
              />

              {/* Sophisticated Editorial Vignette & Information Plate */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#091829]/90 via-[#091829]/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#CBA34A]/20 backdrop-blur-md border border-[#CBA34A]/40 text-[11px] font-semibold text-[#E2C77D] uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-[#CBA34A]" />
                  <span>Academic Session 2025–26 Enrolment</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 font-light leading-snug">
                  Providing focused physical classroom guidance in Gwalior with dedicated faculty attention.
                </p>
              </div>
            </div>

            {/* Understated Institutional Accreditation Ribbon */}
            <div className="mt-4 flex items-center justify-between text-[11px] text-[#737B85] px-1 font-mono">
              <span>LOCATION: GWALIOR (M.P.)</span>
              <span className="text-[#CBA34A]">ADMISSIONS OPEN</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
