export interface CourseProgram {
  id: string;
  code: string;
  title: string;
  category: 'Class 11' | 'Class 12' | 'NEET' | 'Integrated';
  tagline: string;
  subjects: string[];
  description: string;
  highlights: string[];
  curriculumCoverage: string[];
  duration: string;
  batchSchedule: string;
  idealFor: string;
  layoutVariant: 'featured-horizontal' | 'split-editorial' | 'curriculum-focus' | 'integrated-flagship';
  image: string;
  imageAlt: string;
}

export interface BatchScheduleItem {
  id: string;
  batchName: string;
  timing: string;
  duration: string;
  applicableClasses: string[];
  frequency: string;
  focus: string;
  status: 'Open for Enrolment' | 'Limited Seats' | 'Filling Fast';
}

export interface FeeItem {
  id: string;
  programName: string;
  targetClass: string;
  annualFee: number;
  formattedFee: string;
  paymentModes: string;
  includes: string[];
  isRecommended?: boolean;
  notes: string;
}

export interface FacultySlot {
  id: string;
  subject: string;
  department: string;
  qualificationPlaceholder: string;
  experiencePlaceholder: string;
  responsibilities: string[];
  teachingPhilosophy: string;
  isHeadOfDepartment?: boolean;
}

export interface AchievementItem {
  id: string;
  studentName?: string;
  exam: string;
  scoreOrRank?: string;
  year: string;
  category?: string;
  notes: string;
  verified: boolean;
}

export interface EnquiryFormData {
  studentName: string;
  parentName: string;
  mobile: string;
  email: string;
  academicClass: 'Class 11' | 'Class 12' | 'Dropper/Target NEET' | 'Class 10 Moving to 11';
  stream: 'PCM (Physics, Chemistry, Maths)' | 'PCB (Physics, Chemistry, Biology)' | 'PCMB (Both Maths & Biology)';
  message: string;
}

export interface FormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  errorMessage: string | null;
  submittedData: EnquiryFormData | null;
}

