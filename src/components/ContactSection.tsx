import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

export const ContactSection: React.FC = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;
    setContactSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F7F3] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
              LOCATION & COMMUNICATION
            </span>
            <span className="w-6 h-[1px] bg-[#CBA34A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold tracking-tight">
            Contact Vardhani Classes.
          </h2>
          <p className="text-sm sm:text-base text-[#737B85] mt-3 leading-relaxed">
            Our campus is centrally located in Gwalior with convenient access for students from across the city.
          </p>
        </div>

        {/* 3-Column / Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Institutional Contact Details & Direct Triggers */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-[#E6E7E9] rounded p-6 sm:p-8 space-y-6 shadow-subtle">
              <h3 className="font-serif text-xl font-semibold text-[#10243B]">
                Institute Address & Helpdesk
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-[#F8F7F3] border border-[#E6E7E9] flex items-center justify-center text-[#10243B] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#CBA34A]" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#10243B]">Campus Location</span>
                    <span className="text-[#303B49]">{INSTITUTE_INFO.contact.addressSummary}</span>
                    <span className="block text-[#737B85] text-xs mt-0.5">{INSTITUTE_INFO.contact.city}, {INSTITUTE_INFO.contact.state} — {INSTITUTE_INFO.contact.pincode}</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-[#F8F7F3] border border-[#E6E7E9] flex items-center justify-center text-[#10243B] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#CBA34A]" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#10243B]">Telephone Admissions</span>
                    <a 
                      href={`tel:${INSTITUTE_INFO.contact.phoneClean}`}
                      className="text-[#10243B] font-bold text-base hover:text-[#CBA34A] transition-colors"
                    >
                      {INSTITUTE_INFO.contact.phone}
                    </a>
                    <span className="block text-[#737B85] text-xs">Direct line to Academic Director</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-[#F8F7F3] border border-[#E6E7E9] flex items-center justify-center text-[#10243B] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#CBA34A]" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#10243B]">Official Email</span>
                    <a 
                      href={`mailto:${INSTITUTE_INFO.contact.email}`}
                      className="text-[#303B49] hover:text-[#10243B] underline underline-offset-2"
                    >
                      {INSTITUTE_INFO.contact.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-[#F8F7F3] border border-[#E6E7E9] flex items-center justify-center text-[#10243B] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#CBA34A]" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#10243B]">Academic Hours</span>
                    <span className="text-[#737B85] text-xs leading-relaxed block">
                      {INSTITUTE_INFO.contact.workingHours}
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E6E7E9] flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${INSTITUTE_INFO.contact.phoneClean}`}
                  className="flex-1 py-3 px-4 bg-[#10243B] hover:bg-[#091829] text-white text-xs font-semibold uppercase tracking-wider rounded text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#CBA34A]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${INSTITUTE_INFO.contact.phoneClean}?text=Hello%20Vardhani%20Classes,%20I%20would%20like%20to%20visit%20your%20Gwalior%20center%20for%20admission%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-green-700 hover:bg-green-800 text-white text-xs font-semibold uppercase tracking-wider rounded text-center transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Column 2: Google Maps Integration & Quick Contact */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Google Maps Frame */}
            <div className="bg-white border border-[#E6E7E9] rounded overflow-hidden shadow-subtle">
              <div className="p-4 bg-[#10243B] text-white flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <MapPin className="w-4 h-4 text-[#CBA34A]" />
                  <span>Campus Location — Gwalior, Madhya Pradesh</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Gwalior,+Madhya+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#E2C77D] hover:underline flex items-center gap-1 font-mono"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Responsive Map Embed for Gwalior */}
              <div className="relative w-full h-[280px] sm:h-[320px] bg-gray-100">
                <iframe
                  title="Vardhani Classes Gwalior Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114542.48366472489!2d78.11542456485542!3d26.223590740924962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3aaa!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'saturate(0.85) contrast(1.05)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-4 bg-[#F8F7F3] border-t border-[#E6E7E9] flex items-center justify-between text-xs text-[#737B85]">
                <span>Near premier educational institutions & coaching avenue, Gwalior</span>
                <span className="font-mono text-[#10243B] font-medium">PIN: 474001</span>
              </div>
            </div>

            {/* Direct Quick Query Form */}
            <div className="bg-white border border-[#E6E7E9] rounded p-6 shadow-subtle">
              <h4 className="font-serif text-base font-semibold text-[#10243B] mb-3">
                Quick Message to Administration
              </h4>

              {contactSubmitted ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded text-green-900 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0" />
                  <span>Thank you. Your message has been received. Our team will get back to you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="text-xs p-2.5 rounded bg-[#F8F7F3] border border-[#E6E7E9] focus:outline-none focus:border-[#10243B]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number *"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="text-xs p-2.5 rounded bg-[#F8F7F3] border border-[#E6E7E9] focus:outline-none focus:border-[#10243B]"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Brief inquiry regarding admissions, batches, or study material..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full text-xs p-2.5 rounded bg-[#F8F7F3] border border-[#E6E7E9] focus:outline-none focus:border-[#10243B]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#10243B] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#091829] flex items-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 text-[#CBA34A]" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
