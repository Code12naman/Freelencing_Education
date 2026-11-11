import React from 'react';
import { REVIEWS_CHARTER } from '../data/instituteData';
import { MessageSquare, HeartHandshake, CheckCircle2, Shield } from 'lucide-react';

export const ParentStudentReviews: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#F8F7F3] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
              EXPERIENCE & TRUST
            </span>
            <span className="w-6 h-[1px] bg-[#CBA34A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold tracking-tight">
            Student & Parent Experience.
          </h2>
          <p className="text-sm sm:text-base text-[#737B85] mt-3 leading-relaxed">
            {REVIEWS_CHARTER.invitationText}
          </p>
        </div>

        {/* Authentic Pillars Grid (Instead of fake 5-star reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_CHARTER.pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#E6E7E9] rounded p-7 sm:p-8 shadow-subtle hover:border-[#CBA34A]/40 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded bg-[#F8F7F3] border border-[#E6E7E9] flex items-center justify-center text-[#10243B] mb-5">
                <span className="font-serif text-base font-bold text-[#CBA34A]">0{idx + 1}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#10243B] mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#737B85] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Parent Consultation Invitation Bar */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-[#E6E7E9] rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#10243B]">
              <HeartHandshake className="w-4 h-4 text-[#CBA34A]" />
              <span>In-Person Parent Consultation Desk</span>
            </div>
            <p className="text-xs text-[#737B85]">
              We invite parents to visit our Gwalior center, inspect study materials, meet mentors, and discuss their child's academic roadmap before admission.
            </p>
          </div>

          <a
            href="tel:919144255864"
            className="shrink-0 px-5 py-2.5 bg-[#10243B] text-white text-xs font-medium uppercase tracking-wider rounded hover:bg-[#091829] transition-all"
          >
            Book Center Visit: +91 91442 55864
          </a>
        </div>

      </div>
    </section>
  );
};

