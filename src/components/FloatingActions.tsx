import React from 'react';
import { Phone, MessageSquare, Edit3 } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

interface FloatingActionsProps {
  onOpenEnquiry: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEnquiry }) => {
  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 sm:gap-2.5">
      {/* WhatsApp Quick Trigger */}
      <a
        href={`https://wa.me/${INSTITUTE_INFO.contact.phoneClean}?text=Hello%20Vardhani%20Classes,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${INSTITUTE_INFO.contact.phoneClean}`}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#10243B] hover:bg-[#091829] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 border border-[#CBA34A]/40"
        title="Call Vardhani Admissions Desk"
        aria-label="Call Vardhani Admissions Desk"
      >
        <Phone className="w-5 h-5 sm:w-5 sm:h-5 text-[#CBA34A]" />
      </a>

      {/* Quick Enquire Button */}
      <button
        onClick={onOpenEnquiry}
        className="hidden sm:inline-flex items-center gap-2 px-4 py-3 bg-[#10243B] hover:bg-[#091829] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg border border-[#CBA34A]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        <Edit3 className="w-3.5 h-3.5 text-[#CBA34A]" />
        <span>Enquire Now</span>
      </button>
    </aside>
  );
};

