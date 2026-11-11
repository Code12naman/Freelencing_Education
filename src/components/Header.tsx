import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, GraduationCap } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

interface HeaderProps {
  onOpenEnquiry: (prefilledSubject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Results', href: '#results' },
    { name: 'Schedule & Fees', href: '#schedule-fees' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F8F7F3]/95 backdrop-blur-md border-b border-[#E6E7E9] shadow-sm py-3' 
          : 'bg-[#F8F7F3]/80 backdrop-blur-sm border-b border-transparent py-4 lg:py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-3.5 group text-left"
        >
          {/* Custom Open-Book Emblem */}
          <div className="w-10 h-10 rounded-md bg-[#10243B] flex items-center justify-center text-[#CBA34A] shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
            <svg 
              className="w-6 h-6" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#10243B] leading-none">
                Vardhani Classes
              </span>
            </div>
            <p className="text-[11px] sm:text-xs font-medium text-[#737B85] tracking-wide mt-1">
              Class 11–12 <span className="text-[#CBA34A] mx-0.5">|</span> NEET Preparation
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-[13.5px] font-medium text-[#303B49] hover:text-[#10243B] tracking-normal transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#CBA34A] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action / Contact */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${INSTITUTE_INFO.contact.phoneClean}`}
            className="flex items-center gap-2 text-xs font-medium text-[#303B49] hover:text-[#10243B] py-1.5 px-3 rounded border border-transparent hover:border-[#E6E7E9] transition-all"
            title="Call Vardhani Admissions Desk"
          >
            <Phone className="w-3.5 h-3.5 text-[#CBA34A]" />
            <span className="tracking-tight">{INSTITUTE_INFO.contact.phone}</span>
          </a>

          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#10243B] hover:bg-[#091829] text-[#F8F7F3] text-xs font-medium tracking-wide uppercase rounded transition-all duration-150 shadow-sm hover:shadow hover:translate-y-[-1px] active:translate-y-[0px] border border-[#10243B]"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#CBA34A]" />
          </button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            onClick={() => onOpenEnquiry()}
            className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-1.5 bg-[#10243B] text-white rounded"
          >
            Enquire
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-[#10243B] hover:bg-[#ECE9E1] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F7F3] border-b border-[#E6E7E9] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-[#E6E7E9]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#10243B] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#CBA34A]" />
                Institutional Navigation
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-[#303B49] hover:text-[#10243B] transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#CBA34A] text-xs font-mono">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-[#E6E7E9] flex flex-col gap-3">
              <a
                href={`tel:${INSTITUTE_INFO.contact.phoneClean}`}
                className="flex items-center justify-center gap-2 text-sm font-medium text-[#10243B] py-2.5 px-4 rounded bg-[#ECE9E1]/70"
              >
                <Phone className="w-4 h-4 text-[#CBA34A]" />
                <span>Call: {INSTITUTE_INFO.contact.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#10243B] text-[#F8F7F3] text-sm font-medium uppercase tracking-wider rounded"
              >
                <span>Submit Admission Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#CBA34A]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
