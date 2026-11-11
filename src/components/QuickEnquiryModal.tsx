import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { EnquiryFormData } from '../types';
import { validateIndianMobile, generateWhatsAppLink, submitAdmissionEnquiry } from '../services/api';
import { INSTITUTE_INFO } from '../data/instituteData';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledSubject?: string;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  prefilledSubject
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<EnquiryFormData>({
    studentName: '',
    parentName: '',
    mobile: '',
    email: '',
    academicClass: prefilledSubject?.includes('12') ? 'Class 12' : prefilledSubject?.includes('NEET') ? 'Dropper/Target NEET' : 'Class 11',
    stream: prefilledSubject?.includes('NEET') ? 'PCB (Physics, Chemistry, Biology)' : 'PCM (Physics, Chemistry, Maths)',
    message: prefilledSubject ? `Enquiry regarding: ${prefilledSubject}` : ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) errs.studentName = "Student name is required";
    if (!formData.parentName.trim()) errs.parentName = "Parent name is required";
    if (!formData.mobile.trim()) {
      errs.mobile = "Mobile number is required";
    } else if (!validateIndianMobile(formData.mobile)) {
      errs.mobile = "Enter a valid 10-digit Indian mobile number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setErrorMessage(null);

    const result = await submitAdmissionEnquiry(formData);
    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(result.message);
    }
  };

  const handleWhatsApp = () => {
    const link = generateWhatsAppLink(formData);
    window.open(link, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#091829]/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded max-w-lg w-full shadow-2xl border border-[#E6E7E9] overflow-hidden relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#10243B] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white p-1 rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-[10px] font-mono text-[#E2C77D] uppercase tracking-widest mb-1">
            GWALIOR ADMISSIONS DESK
          </div>
          <h3 className="font-serif text-2xl font-bold">
            Admission & Batch Enquiry
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Connect with Vardhani Classes academic counseling team.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#10243B]">
                Enquiry Logged
              </h4>
              <p className="text-xs text-[#303B49]">
                Our admissions mentor will call <strong>{formData.mobile}</strong> shortly.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 bg-green-700 text-white text-xs font-semibold uppercase rounded hover:bg-green-800 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send details on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="text-xs text-[#737B85] hover:text-[#10243B] py-1"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-900 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-semibold">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>API Notice: Instant WhatsApp Available</span>
                  </div>
                  <p>{errorMessage}</p>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full py-2 bg-[#10243B] text-white text-[11px] font-semibold uppercase tracking-wider rounded"
                  >
                    Transfer to WhatsApp (+91 91442 55864)
                  </button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#303B49] block mb-1">Student Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Student Name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full text-xs p-2.5 rounded bg-[#F8F7F3] border border-[#E6E7E9] focus:outline-none focus:border-[#10243B]"
                  />
                  {errors.studentName && <span className="text-[10px] text-red-600 block mt-0.5">{errors.studentName}</span>}
                </div>
                <div>
                  <label className="text-xs font-medium text-[#303B49] block mb-1">Parent Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Parent / Guardian"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full text-xs p-2.5 rounded bg-[#F8F7F3] border border-[#E6E7E9] focus:outline-none focus:border-[#10243B]"
                  />
                  {errors.parentName && <span className="text-[10px] text-red-600 block mt-0.5">{errors.parentName}</span>}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#303B49] block mb-1">Mobile Number (Calling & WhatsApp) *</label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-xs text-[#737B85]">+91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    required
                    placeholder="98765 43210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                    className="w-full text-xs p-2.5 pl-10 rounded bg-[#F8F7F3] border border-[#E6E7E9] focus:outline-none focus:border-[#10243B] font-mono"
                  />
                </div>
                {errors.mobile && <span className="text-[10px] text-red-600 block mt-0.5">{errors.mobile}</span>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#303B49] block mb-1">Class</label>
                  <select
                    value={formData.academicClass}
                    onChange={(e) => setFormData({ ...formData, academicClass: e.target.value as any })}
                    className="w-full text-xs p-2.5 rounded bg-[#F8F7F3] border border-[#E6E7E9] focus:outline-none"
                  >
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Dropper/Target NEET">NEET Target / Dropper</option>
                    <option value="Class 10 Moving to 11">Class 10 moving to 11</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-[#303B49] block mb-1">Stream</label>
                  <select
                    value={formData.stream}
                    onChange={(e) => setFormData({ ...formData, stream: e.target.value as any })}
                    className="w-full text-xs p-2.5 rounded bg-[#F8F7F3] border border-[#E6E7E9] focus:outline-none"
                  >
                    <option value="PCB (Physics, Chemistry, Biology)">PCB (NEET)</option>
                    <option value="PCM (Physics, Chemistry, Maths)">PCM (Engineering/Maths)</option>
                    <option value="PCMB (Both Maths & Biology)">PCMB (Both)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#303B49] block mb-1">Message or Specific Queries</label>
                <textarea
                  rows={2}
                  placeholder="Ask about batch timings, fees, demo class..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs p-2.5 rounded bg-[#F8F7F3] border border-[#E6E7E9] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[#10243B] hover:bg-[#091829] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#CBA34A]" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Admission Request</span>
                      <Send className="w-3.5 h-3.5 text-[#CBA34A]" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 bg-green-700 hover:bg-green-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

