import React, { useState } from 'react';
import { INSTITUTIONAL_FAQS } from '../data/instituteData';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
              ACADEMIC ADVISORY
            </span>
            <span className="w-6 h-[1px] bg-[#CBA34A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-[#737B85] mt-3 leading-relaxed">
            Clear, transparent answers to questions commonly raised by Class 11, Class 12, and NEET aspirants and their parents.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {INSTITUTIONAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="border border-[#E6E7E9] rounded overflow-hidden bg-[#F8F7F3] transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none hover:bg-[#ECE9E1]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#10243B]">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-white border border-[#E6E7E9] flex items-center justify-center shrink-0 text-[#10243B] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#10243B] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#303B49] leading-relaxed border-t border-[#E6E7E9]/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="max-w-4xl mx-auto mt-10 p-5 bg-[#F8F7F3] border border-[#E6E7E9] rounded flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737B85]">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#CBA34A] shrink-0" />
            <span>Have a specific academic query regarding curriculum or scholarship eligibility?</span>
          </div>
          <a
            href={`tel:${INSTITUTE_INFO.contact.phoneClean}`}
            className="font-medium text-[#10243B] hover:text-[#CBA34A] flex items-center gap-1.5 shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Speak with Admissions: {INSTITUTE_INFO.contact.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
