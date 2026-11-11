import React, { useState } from 'react';
import { EnquiryFormData, FormSubmissionState } from '../types';
import { validateIndianMobile, generateWhatsAppLink, submitAdmissionEnquiry } from '../services/api';
import { INSTITUTE_INFO } from '../data/instituteData';
import { Send, Phone, MessageSquare, AlertCircle, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

interface EnquirySectionProps {
  initialSubject?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    studentName: '',
    parentName: '',
    mobile: '',
    email: '',
    academicClass: initialSubject?.includes('12') ? 'Class 12' : initialSubject?.includes('NEET') ? 'Dropper/Target NEET' : 'Class 11',
    stream: initialSubject?.includes('NEET') ? 'PCB (Physics, Chemistry, Biology)' : 'PCM (Physics, Chemistry, Maths)',
    message: initialSubject ? `I would like to enquire about the ${initialSubject} program.` : ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionState, setSubmissionState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    errorMessage: null,
    submittedData: null
  });

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Please enter student's full name.";
    }

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Please enter parent or guardian's name.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!validateIndianMobile(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmissionState({
      isSubmitting: true,
      isSuccess: false,
      errorMessage: null,
      submittedData: null
    });

    const result = await submitAdmissionEnquiry(formData);

    if (result.success) {
      setSubmissionState({
        isSubmitting: false,
        isSuccess: true,
        errorMessage: null,
        submittedData: { ...formData }
      });
    } else {
      setSubmissionState({
        isSubmitting: false,
        isSuccess: false,
        errorMessage: result.message,
        submittedData: { ...formData }
      });
    }
  };

  const handleWhatsAppDirect = () => {
    const link = generateWhatsAppLink(formData);
    window.open(link, '_blank');
  };

  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Editorial Context & Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
                ADMISSIONS DESK
              </span>
              <span className="w-6 h-[1px] bg-[#CBA34A]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold leading-[1.18] tracking-tight">
              Take the First Step Towards Your Academic Goals.
            </h2>

            <p className="text-sm sm:text-base text-[#303B49] leading-relaxed">
              Submit your academic details to receive a detailed program syllabus, batch availability schedule, and invitation for an in-person assessment at our Gwalior institute.
            </p>

            {/* Direct Connect Box */}
            <div className="p-6 bg-[#F8F7F3] rounded border border-[#E6E7E9] space-y-4">
              <div className="text-xs font-semibold text-[#10243B] uppercase tracking-wider">
                Prefer Direct Consultation?
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${INSTITUTE_INFO.contact.phoneClean}`}
                  className="flex items-center gap-3 p-3 bg-white rounded border border-[#E6E7E9] text-xs font-medium text-[#10243B] hover:border-[#10243B] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#CBA34A]" />
                  <div>
                    <span className="block text-[#737B85] text-[10px] uppercase">Telephone Admission Desk</span>
                    <span className="font-bold">{INSTITUTE_INFO.contact.phone}</span>
                  </div>
                </a>

                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center justify-between p-3 bg-green-50 border border-green-200 text-green-900 rounded text-xs font-medium hover:bg-green-100/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-green-700" />
                    <div className="text-left">
                      <span className="block text-green-700 text-[10px] uppercase font-semibold">Instant WhatsApp Desk</span>
                      <span className="font-bold">Chat with Academic Counselors</span>
                    </div>
                  </div>
                  <span className="text-green-700 font-bold">→</span>
                </button>
              </div>

              <div className="text-[11px] text-[#737B85] leading-relaxed">
                Counselors are available Monday to Saturday (8:00 AM to 8:00 PM) to guide students on subject stream selection.
              </div>
            </div>

            {/* Privacy Promise */}
            <div className="text-xs text-[#737B85] font-mono">
              *Your personal contact information is held with strict confidentiality and never shared with commercial telemarketers.
            </div>
          </div>

          {/* Right Side: High-End Admission Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F8F7F3] border border-[#E6E7E9] rounded p-6 sm:p-10 shadow-subtle">
            
            {submissionState.isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#10243B]">
                  Enquiry Registered Successfully
                </h3>
                <p className="text-sm text-[#303B49] max-w-md mx-auto">
                  Thank you, <strong>{submissionState.submittedData?.studentName}</strong>. Our admissions officer will contact parent <strong>{submissionState.submittedData?.parentName}</strong> on <strong>{submissionState.submittedData?.mobile}</strong> shortly with syllabus details and batch confirmation.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-5 py-2.5 bg-green-700 text-white text-xs font-semibold rounded flex items-center gap-2 hover:bg-green-800"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp as well</span>
                  </button>
                  <button
                    onClick={() => setSubmissionState({ isSubmitting: false, isSuccess: false, errorMessage: null, submittedData: null })}
                    className="px-4 py-2.5 text-xs font-medium text-[#737B85] hover:text-[#10243B]"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Form Header */}
                <div className="pb-3 border-b border-[#E6E7E9]">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#10243B]">
                    Admission & Counseling Form
                  </h3>
                  <p className="text-xs text-[#737B85] mt-0.5">
                    Fields marked with asterisk (*) are required.
                  </p>
                </div>

                {/* Honest Offline / Standby Error Message */}
                {submissionState.errorMessage && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded text-amber-900 text-xs space-y-2 animate-in fade-in">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Notice on Digital API Submission</span>
                    </div>
                    <p className="leading-relaxed">
                      {submissionState.errorMessage}
                    </p>
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#10243B] text-white text-[11px] font-semibold uppercase tracking-wider rounded"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#CBA34A]" />
                        <span>Transfer Enquiry Directly to WhatsApp (+91 91442 55864)</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Row 1: Student Name & Parent Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#303B49] block mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aryan Sharma"
                      value={formData.studentName}
                      onChange={(e) => {
                        setFormData({ ...formData, studentName: e.target.value });
                        if (errors.studentName) setErrors({ ...errors, studentName: '' });
                      }}
                      className={`w-full text-xs p-3 rounded bg-white border ${
                        errors.studentName ? 'border-red-500' : 'border-[#E6E7E9]'
                      } focus:border-[#10243B] focus:outline-none transition-colors`}
                    />
                    {errors.studentName && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.studentName}</span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#303B49] block mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.parentName}
                      onChange={(e) => {
                        setFormData({ ...formData, parentName: e.target.value });
                        if (errors.parentName) setErrors({ ...errors, parentName: '' });
                      }}
                      className={`w-full text-xs p-3 rounded bg-white border ${
                        errors.parentName ? 'border-red-500' : 'border-[#E6E7E9]'
                      } focus:border-[#10243B] focus:outline-none transition-colors`}
                    />
                    {errors.parentName && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.parentName}</span>
                    )}
                  </div>
                </div>

                {/* Row 2: Mobile Number & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#303B49] block mb-1">
                      Mobile Number (Indian WhatsApp/Calling) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-xs font-medium text-[#737B85]">+91</span>
                      <input
                        type="tel"
                        maxLength={10}
                        placeholder="98765 43210"
                        value={formData.mobile}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setFormData({ ...formData, mobile: val });
                          if (errors.mobile) setErrors({ ...errors, mobile: '' });
                        }}
                        className={`w-full text-xs p-3 pl-12 rounded bg-white border ${
                          errors.mobile ? 'border-red-500' : 'border-[#E6E7E9]'
                        } focus:border-[#10243B] focus:outline-none transition-colors font-mono`}
                      />
                    </div>
                    {errors.mobile && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.mobile}</span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#303B49] block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full text-xs p-3 rounded bg-white border ${
                        errors.email ? 'border-red-500' : 'border-[#E6E7E9]'
                      } focus:border-[#10243B] focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Row 3: Class & Stream */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#303B49] block mb-1">
                      Academic Class *
                    </label>
                    <select
                      value={formData.academicClass}
                      onChange={(e) => setFormData({ ...formData, academicClass: e.target.value as any })}
                      className="w-full text-xs p-3 rounded bg-white border border-[#E6E7E9] focus:border-[#10243B] focus:outline-none"
                    >
                      <option value="Class 11">Class 11 (Session 2025–26)</option>
                      <option value="Class 12">Class 12 (Board & Entrance)</option>
                      <option value="Dropper/Target NEET">NEET Target / Dropper Batch</option>
                      <option value="Class 10 Moving to 11">Class 10 Moving to 11 (Integrated)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#303B49] block mb-1">
                      Subject Stream *
                    </label>
                    <select
                      value={formData.stream}
                      onChange={(e) => setFormData({ ...formData, stream: e.target.value as any })}
                      className="w-full text-xs p-3 rounded bg-white border border-[#E6E7E9] focus:border-[#10243B] focus:outline-none"
                    >
                      <option value="PCB (Physics, Chemistry, Biology)">PCB — Medical Entrance (NEET)</option>
                      <option value="PCM (Physics, Chemistry, Maths)">PCM — Engineering & Science</option>
                      <option value="PCMB (Both Maths & Biology)">PCMB — Dual Mathematics & Biology</option>
                    </select>
                  </div>
                </div>

                {/* Message / Remarks */}
                <div>
                  <label className="text-xs font-semibold text-[#303B49] block mb-1">
                    Specific Queries / Academic Background
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention previous board percentage, preferred batch timing (Morning/Evening), or specific subject requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs p-3 rounded bg-white border border-[#E6E7E9] focus:border-[#10243B] focus:outline-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={submissionState.isSubmitting}
                    className="flex-1 py-3.5 bg-[#10243B] hover:bg-[#091829] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submissionState.isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#CBA34A]" />
                        <span>Verifying & Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Admission Enquiry</span>
                        <Send className="w-3.5 h-3.5 text-[#CBA34A]" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="sm:w-auto px-5 py-3.5 bg-green-700 hover:bg-green-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
