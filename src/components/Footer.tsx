import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, BookOpen, ShieldCheck } from 'lucide-react';
import { INSTITUTE_INFO, PROGRAMS_DATA } from '../data/instituteData';

interface FooterProps {
  onOpenEnquiry: (program?: string) => void;
  onSelectProgram: (programId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onSelectProgram }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091829] text-[#F8F7F3] border-t border-[#1C3149] pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#1C3149]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#10243B] border border-[#264870] flex items-center justify-center text-[#CBA34A]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  Vardhani Classes
                </span>
                <span className="text-xs text-[#E2C77D] font-mono tracking-wide">
                  Gwalior, Madhya Pradesh
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
              A premier science and medical entrance coaching institute in Gwalior committed to conceptual depth, rigorous assessments, and disciplined mentorship for Class 11, Class 12, and NEET aspirants.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#E2C77D]">
              <ShieldCheck className="w-4 h-4 text-[#CBA34A]" />
              <span>Ethical Education & Uncompromising Quality</span>
            </div>
          </div>

          {/* Academic Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#CBA34A] font-mono">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {PROGRAMS_DATA.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onSelectProgram(p.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => onOpenEnquiry('Class 10 Foundation')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Class 10 to 11 Bridge Foundation
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Institutional Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#CBA34A] font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Vardhani</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Course Curricula</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">Teaching Methodology</a></li>
              <li><a href="#faculty" className="hover:text-white transition-colors">Academic Mentors</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Results Registry</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Batch Timings</a></li>
              <li><a href="#fees" className="hover:text-white transition-colors">Fee Structure</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Campus</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#CBA34A] font-mono">
              Institute Helpdesk
            </h4>
            
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CBA34A] shrink-0 mt-0.5" />
                <span>{INSTITUTE_INFO.contact.addressSummary}, {INSTITUTE_INFO.contact.city} (M.P.)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CBA34A] shrink-0" />
                <a href={`tel:${INSTITUTE_INFO.contact.phoneClean}`} className="hover:text-white font-mono font-medium">
                  {INSTITUTE_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#CBA34A] shrink-0" />
                <a href={`mailto:${INSTITUTE_INFO.contact.email}`} className="hover:text-white">
                  {INSTITUTE_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full py-2.5 px-4 bg-[#CBA34A] hover:bg-[#E2C77D] text-[#091829] text-xs font-bold uppercase tracking-wider rounded transition-colors text-center"
              >
                Apply for Admission
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer with Copyright & Policy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Vardhani Classes. All rights reserved. Gwalior, Madhya Pradesh.</p>
            <p className="text-[11px] text-gray-500">
              Senior Secondary Science & NEET-UG Preparation Center. Dedicated to academic integrity.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#E2C77D] hover:text-white transition-colors py-1.5 px-3 rounded bg-[#10243B] border border-[#20344C]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
