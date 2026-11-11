import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Eyebrow & Title */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
              ABOUT VARDHANI
            </span>
            <span className="w-6 h-[1px] bg-[#CBA34A]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold leading-[1.2] tracking-tight">
            Education Built Around Understanding, Not Memorisation.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Authentic Classroom Environment Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded overflow-hidden shadow-card border border-[#E6E7E9] bg-[#091829]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                alt="Authentic real photograph of students seated at desks in a coaching institute classroom attending an academic lecture"
                className="w-full h-[460px] sm:h-[520px] object-cover filter saturate-[0.9] contrast-[1.05]"
                loading="lazy"
              />
              
              {/* Subtle caption bar */}
              <div className="absolute bottom-0 inset-x-0 bg-[#10243B]/90 backdrop-blur-sm p-4 border-t border-[#E6E7E9]/20 text-white">
                <p className="font-serif italic text-xs text-[#E2C77D]">
                  "When the foundation is solid, competitive excellence follows naturally."
                </p>
                <p className="text-[10px] text-gray-300 font-sans tracking-wide mt-1 uppercase">
                  Classroom Pedagogy — Gwalior Center
                </p>
              </div>
            </div>

            {/* Subtle editorial offset border */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full border border-[#CBA34A]/25 -z-10 rounded pointer-events-none" />
          </div>

          {/* Right: Carefully written narrative & 3 Numbered Principles */}
          <div className="lg:col-span-7 space-y-8 lg:pl-4">
            
            <div className="space-y-4 text-[#303B49] text-base sm:text-lg leading-relaxed">
              <p>
                Founded in Gwalior with a singular commitment to academic depth, <strong>Vardhani Classes</strong> was established to counter the superficial shortcut culture pervasive in competitive coaching. We believe that true mastery of Physics, Chemistry, Mathematics, and Biology cannot be achieved through rote formulas; it requires genuine comprehension of physical principles and chemical logic.
              </p>
              <p className="text-sm sm:text-base text-[#737B85]">
                Our academic framework bridges the gap between state/central board requirements and high-stakes national examinations like NEET-UG. By maintaining disciplined batch sizes, every student receives the intellectual scrutiny and personalized mentorship necessary to identify blind spots before they reflect on examination day.
              </p>
            </div>

            {/* Three Principles using Numbered Typography (No generic icon cards) */}
            <div className="pt-6 border-t border-[#E6E7E9] space-y-6">
              
              {/* Principle 01 */}
              <div className="flex items-start gap-5 group">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#CBA34A] tracking-tighter leading-none shrink-0 pt-0.5">
                  01
                </span>
                <div className="space-y-1.5 border-b border-[#E6E7E9] pb-5 w-full">
                  <h3 className="font-serif text-lg font-semibold text-[#10243B] tracking-tight group-hover:text-[#CBA34A] transition-colors">
                    Concept Clarity
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737B85] leading-relaxed">
                    Prioritizing rigorous first-principles derivation and conceptual intuition over formulaic cramming, ensuring students can adapt to novel questions on competitive exams.
                  </p>
                </div>
              </div>

              {/* Principle 02 */}
              <div className="flex items-start gap-5 group">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#CBA34A] tracking-tighter leading-none shrink-0 pt-0.5">
                  02
                </span>
                <div className="space-y-1.5 border-b border-[#E6E7E9] pb-5 w-full">
                  <h3 className="font-serif text-lg font-semibold text-[#10243B] tracking-tight group-hover:text-[#CBA34A] transition-colors">
                    Consistent Assessment
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737B85] leading-relaxed">
                    Scheduled chapter tests, descriptive board-pattern evaluations, and simulated OMR tests ensure errors are diagnosed and rectified within the same learning cycle.
                  </p>
                </div>
              </div>

              {/* Principle 03 */}
              <div className="flex items-start gap-5 group">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#CBA34A] tracking-tighter leading-none shrink-0 pt-0.5">
                  03
                </span>
                <div className="space-y-1.5 w-full">
                  <h3 className="font-serif text-lg font-semibold text-[#10243B] tracking-tight group-hover:text-[#CBA34A] transition-colors">
                    Student-Centred Guidance
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737B85] leading-relaxed">
                    An open-door academic policy where mentors remain accessible for individual doubt sessions, emotional equilibrium, and disciplined time-management counseling.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
