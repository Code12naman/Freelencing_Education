import { EnquiryFormData } from '../types';

export const validateIndianMobile = (mobile: string): boolean => {
  const cleaned = mobile.replace(/[\s\-\+]/g, '');
  // Handles 10-digit number starting with 6, 7, 8, or 9, or with 91/0 prefix
  if (/^[6-9]\d{9}$/.test(cleaned)) return true;
  if (/^91[6-9]\d{9}$/.test(cleaned)) return true;
  if (/^0[6-9]\d{9}$/.test(cleaned)) return true;
  return false;
};

export const formatIndianMobile = (mobile: string): string => {
  const cleaned = mobile.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return mobile;
};

export const generateWhatsAppLink = (data: Partial<EnquiryFormData>): string => {
  const phone = "919144255864";
  const lines = [
    `*Admission Enquiry — Vardhani Classes*`,
    `Student Name: ${data.studentName || 'Not specified'}`,
    `Parent/Guardian: ${data.parentName || 'Not specified'}`,
    `Class: ${data.academicClass || 'Class 11'}`,
    `Stream: ${data.stream || 'PCB/PCM'}`,
    `Mobile: ${data.mobile || 'Not specified'}`,
    `Email: ${data.email || 'Not specified'}`,
    `Message: ${data.message || 'I would like to enquire about admission, batch timings, and fee details.'}`
  ];
  
  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${phone}?text=${text}`;
};

export interface SubmitEnquiryResult {
  success: boolean;
  message: string;
  referenceId?: string;
  backendConnected: boolean;
}

export const submitAdmissionEnquiry = async (formData: EnquiryFormData): Promise<SubmitEnquiryResult> => {
  const API_URL = import.meta.env.VITE_API_URL || '/api/enquiry';
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'Website Admission Form'
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: data.message || "Your enquiry has been logged successfully with the Vardhani Admissions Desk.",
        referenceId: data.referenceId || `VC-${Math.floor(100000 + Math.random() * 900000)}`,
        backendConnected: true
      };
    } else {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        message: errorData.message || "Server responded with an issue. Please connect directly via WhatsApp or phone.",
        backendConnected: true
      };
    }
  } catch {
    // When backend server is not running or offline, return honest status
    return {
      success: false,
      message: "The backend admissions API is currently in demo/standby mode. To ensure your enquiry reaches the academic team immediately without delay, please use the direct WhatsApp link below or call +91 91442 55864.",
      backendConnected: false
    };
  }
};

