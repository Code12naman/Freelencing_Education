import { CourseProgram, BatchScheduleItem, FeeItem, FacultySlot, AchievementItem } from '../types';

export const INSTITUTE_INFO = {
  name: "Vardhani Classes",
  tagline: "Class 11–12 | NEET Preparation",
  heroEyebrow: "GWALIOR | SCIENCE & MEDICAL ENTRANCE COACHING",
  heroHeading: "Building Strong Foundations for a Brighter Future.",
  heroSubheading: "Focused academic guidance for Class 11, Class 12 and NEET aspirants through conceptual learning, structured preparation and individual attention.",
  contact: {
    phone: "+91 91442 55864",
    phoneDisplay: "+91 91442 55864",
    phoneClean: "919144255864",
    email: "vardhaniclasses@gmail.com",
    city: "Gwalior",
    state: "Madhya Pradesh",
    pincode: "474001",
    addressSummary: "City Centre / Lashkar Educational Corridor, Gwalior, Madhya Pradesh",
    workingHours: "Monday – Saturday: 7:00 AM – 8:30 PM | Sunday: 9:00 AM – 1:00 PM (Doubt Clearing & Assessments)"
  },
  highlights: [
    { title: "Concept-Based Teaching", desc: "Focus on fundamental clarity and first-principles reasoning before numerical problem solving." },
    { title: "Structured Assessments", desc: "Weekly chapter tests, monthly cumulative reviews and simulated examination conditions." },
    { title: "Individual Guidance", desc: "Disciplined batch sizes ensuring regular one-on-one doubt resolution and progress tracking." }
  ]
};

export const PROGRAMS_DATA: CourseProgram[] = [
  {
    id: "class-11-science",
    code: "PGM-11S",
    title: "Class 11 Science",
    category: "Class 11",
    tagline: "Building Core Scientific Aptitude & Academic Rigor",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    description: "The transition from Class 10 to Class 11 introduces a significant leap in conceptual depth. This program bridges fundamental gaps, establishes mathematical precision, and inculcates independent analytical reasoning required for both senior secondary board excellence and competitive entrance foundations.",
    highlights: [
      "Rigorous NCERT syllabus coverage synchronized with board benchmarks",
      "Special emphasis on fundamental calculus, vectors, chemical stoichiometry and cell biology",
      "Daily problem-solving practice sheets with progressive difficulty levels",
      "Bi-weekly objective and subjective evaluation with detailed paper analysis"
    ],
    curriculumCoverage: [
      "Physics: Mechanics, Waves, Thermodynamics, Properties of Bulk Matter",
      "Chemistry: Atomic Structure, Chemical Bonding, Thermodynamics, Organic Fundamentals",
      "Biology: Cell Biology, Plant & Human Physiology, Structural Organisation",
      "Mathematics: Sets, Trigonometry, Calculus Foundations, Coordinate Geometry"
    ],
    duration: "1 Year Academic Session",
    batchSchedule: "Morning & Evening Options Available",
    idealFor: "Students stepping into senior secondary looking for deep conceptual grasp without memorisation shortcuts.",
    layoutVariant: "split-editorial",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Indian science student engaged in focused laboratory and academic study"
  },
  {
    id: "class-12-science",
    code: "PGM-12S",
    title: "Class 12 Science",
    category: "Class 12",
    tagline: "Mastery, Speed, and Board Examination Precision",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
    description: "A comprehensive senior program designed to balance top-tier performance in Board Examinations (CBSE / MP Board) while maintaining sharp alignment with national entrance examination patterns. Covers advanced electrodynamics, organic synthesis mechanisms, and high-yield topics.",
    highlights: [
      "Thorough syllabus completion targeted 3 months prior to board examinations",
      "Dedicated Board Pattern Test Series with comprehensive descriptive feedback",
      "Systematic revision cycles covering essential Class 11 linkage chapters",
      "Time-management and exam-hall strategy workshops"
    ],
    curriculumCoverage: [
      "Physics: Electrodynamics, Magnetism, Optics, Modern Physics, Semiconductor Electronics",
      "Chemistry: Solutions, Electrochemistry, Kinetics, Coordination Compounds, Advanced Organic Chemistry",
      "Biology: Genetics, Evolution, Biotechnology, Ecology & Environment",
      "Mathematics: Integral Calculus, Differential Equations, Vectors & 3D Geometry, Probability"
    ],
    duration: "1 Year Academic Session",
    batchSchedule: "Morning & Evening Batches",
    idealFor: "Class 12 students aiming for distinction in board exams alongside parallel competitive readiness.",
    layoutVariant: "featured-horizontal",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Focused students collaborating and solving problems in classroom"
  },
  {
    id: "neet-preparation",
    code: "PGM-NEET",
    title: "NEET Preparation",
    category: "NEET",
    tagline: "High-Yield Conceptual Mastery for Medical Aspirants",
    subjects: ["Physics", "Chemistry", "Biology (Botany & Zoology)"],
    description: "An intensive, entrance-specific program centered entirely around the National Eligibility cum Entrance Test (NEET-UG). Emphasizes line-by-line NCERT clarity for Biology and Chemistry, coupled with systematic analytical problem-solving in Physics.",
    highlights: [
      "Line-by-line NCERT deconstruction across Botany, Zoology, and Inorganic/Organic Chemistry",
      "Extensive question banks categorized into assertion-reason, diagrammatic, and statement-based questions",
      "Full-length OMR-based NEET mock simulations matching NTA test environment",
      "Individual error-log analysis to systematically eliminate recurring negative marking"
    ],
    curriculumCoverage: [
      "Physics: High-yield mechanics, electrostatics, modern physics & numerical accuracy drills",
      "Chemistry: Physical chemistry calculations, inorganic reaction pathways, organic mechanisms",
      "Botany: Plant diversity, genetics, cell cycle, plant physiology and ecology",
      "Zoology: Human physiology, animal kingdom, biomolecules, and biotechnology applications"
    ],
    duration: "1 or 2 Years (Tailored to Batch Level)",
    batchSchedule: "Dedicated Morning & Evening Batches with Extended Doubt Labs",
    idealFor: "Medical aspirants targeting government medical colleges requiring discipline, accuracy, and depth.",
    layoutVariant: "curriculum-focus",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Medical and biological laboratory environment for academic study"
  },
  {
    id: "integrated-program",
    code: "PGM-INTG",
    title: "Two-Year Integrated Program",
    category: "Integrated",
    tagline: "Seamless Synchronization of Schooling and Entrance Prep",
    subjects: ["Class 11 + 12", "Foundation Learning", "Entrance Preparation"],
    description: "Our flagship academic continuum designed for students entering Class 11. Over twenty-four months, students build an unshakeable academic foundation, eliminating the stress of dual-track preparation by integrating core concepts with advanced application from day one.",
    highlights: [
      "Unified two-year curriculum mapping that avoids conceptual overlap and fatigue",
      "Early syllabus completion in both years allowing 5+ months of pure test simulation",
      "Personal academic mentor assigned for continuous performance reviews and motivational guidance",
      "Gradual progression: NCERT fundamentals → Exemplar challenges → Previous 15-year national exam papers"
    ],
    curriculumCoverage: [
      "Complete Senior Secondary Physics, Chemistry, and Mathematics / Biology syllabi",
      "Integrated Board subjective writing training + Entrance speed drills",
      "Comprehensive digital & physical module sets with chapter-wise solved illustrations",
      "Specialized weekend mastery clinics for challenging topics"
    ],
    duration: "2 Years (Full Academic Cycle)",
    batchSchedule: "Synchronized School-Compatible Timings",
    idealFor: "Students aspiring for medical or premier science careers with an early, structured start.",
    layoutVariant: "integrated-flagship",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students in quiet library academic study environment"
  }
];

export const TEACHING_STAGES = [
  {
    number: "01",
    title: "Understand",
    subheading: "Build strong conceptual foundations.",
    description: "Every topic begins with first principles. Rather than providing formulas for rote memorisation, teachers deconstruct the underlying theory, physical intuition, and real-world relevance.",
    deliverables: ["Interactive lecture delivery", "Illustrated conceptual notes", "Socratic questioning in class"]
  },
  {
    number: "02",
    title: "Practise",
    subheading: "Solve topic-based questions.",
    description: "Immediate reinforcement follows conceptual delivery. Students work through graded Daily Practice Problems (DPPs) ranging from foundational NCERT exercises to multi-concept problems.",
    deliverables: ["Daily Practice Problem sheets", "Graded exercise sets (Levels 1–3)", "Supervised in-class solving sessions"]
  },
  {
    number: "03",
    title: "Evaluate",
    subheading: "Regular tests and assessments.",
    description: "Frequent testing removes examination anxiety and gauges retention. We conduct scheduled weekly chapter tests and full-syllabus milestone evaluations under real examination conditions.",
    deliverables: ["Weekly topic tests (Subjective & OMR)", "Detailed performance scorecards", "Topic-wise accuracy & time benchmarks"]
  },
  {
    number: "04",
    title: "Improve",
    subheading: "Identify weaknesses and revise.",
    description: "Assessment is meaningless without targeted correction. We maintain student error registers to spot patterns of recurring mistakes, followed by dedicated one-on-one doubt clearing sessions.",
    deliverables: ["Individual error register analysis", "1-on-1 doubt resolution desk", "Structured re-tests on weak modules"]
  }
];

export const BATCH_SCHEDULES: BatchScheduleItem[] = [
  {
    id: "morning-batch",
    batchName: "Morning Batch",
    timing: "7:00 AM – 11:00 AM",
    duration: "4 Hours Daily",
    applicableClasses: ["Class 11 Science", "Class 12 Science", "NEET Target"],
    frequency: "Monday through Saturday",
    focus: "Core theoretical lectures, numerical modeling & guided problem sessions during peak cognitive alertness.",
    status: "Open for Enrolment"
  },
  {
    id: "evening-batch",
    batchName: "Evening Batch",
    timing: "4:00 PM – 8:00 PM",
    duration: "4 Hours Daily",
    applicableClasses: ["Class 11 Science", "Class 12 Science"],
    frequency: "Monday through Saturday",
    focus: "Optimized for students attending morning schools. Comprehensive subject coverage and evening doubt clinics.",
    status: "Limited Seats"
  }
];

export const FEE_STRUCTURE: FeeItem[] = [
  {
    id: "fee-11",
    programName: "Class 11 Science (PCM / PCB)",
    targetClass: "Class 11",
    annualFee: 45000,
    formattedFee: "₹45,000",
    paymentModes: "Annual / Bi-annual Installments Available",
    includes: [
      "Complete 1-Year Comprehensive Classroom Instruction",
      "Printed Study Modules & Daily Practice Problem Sheets",
      "Weekly Chapter Assessments & Test Series Access",
      "Dedicated In-Person Doubt Resolution Desk",
      "Parent-Teacher Consultation & Academic Reporting"
    ],
    notes: "Illustrative fee structure for the academic session. Subject to institute confirmation."
  },
  {
    id: "fee-12",
    programName: "Class 12 Science (PCM / PCB)",
    targetClass: "Class 12",
    annualFee: 50000,
    formattedFee: "₹50,000",
    paymentModes: "Annual / Bi-annual Installments Available",
    includes: [
      "Complete 1-Year Senior Board & Entrance Syllabus Coverage",
      "Pre-Board Simulation Examinations with Model Answer Feedback",
      "Printed High-Yield Revision Modules & Formula Compendiums",
      "Targeted NEET / Entrance Foundation Practice Modules",
      "Full Test Series with Micro-Analysis of Weak Chapters"
    ],
    notes: "Illustrative fee structure for the academic session. Subject to institute confirmation."
  },
  {
    id: "fee-integrated",
    programName: "Class 11–12 Integrated Program",
    targetClass: "Class 11 + 12 (Two-Year)",
    annualFee: 85000,
    formattedFee: "₹85,000",
    paymentModes: "Structured Milestone Installments Across 2 Years",
    isRecommended: true,
    includes: [
      "Continuous 24-Month Comprehensive Academic Guidance",
      "Complete Class 11 & Class 12 Coursework with Entrance Synchronization",
      "Complete Printed Study Material, Exercise Modules & Archives",
      "Unrestricted Access to Regular Mock Tests & Doubt Desk",
      "Personal Academic Mentorship & Career Guidance Sessions",
      "Substantial fee advantage over individual consecutive annual admissions"
    ],
    notes: "Illustrative combined two-year fee structure. Subject to institute confirmation."
  }
];

export const FACULTY_SLOTS: FacultySlot[] = [
  {
    id: "dept-physics",
    subject: "Physics",
    department: "Department of Physical Sciences",
    qualificationPlaceholder: "Senior Subject Mentor & Physics Lead",
    experiencePlaceholder: "Extensive background in competitive entrance pedagogy & conceptual mechanics",
    responsibilities: [
      "Mechanics, Electrodynamics & Optics",
      "Mathematical modeling & numerical problem intuition",
      "Error analysis in competitive physics tests"
    ],
    teachingPhilosophy: "Demystifying physical laws through intuitive visualization and mathematical discipline rather than memorised shortcuts.",
    isHeadOfDepartment: true
  },
  {
    id: "dept-chemistry",
    subject: "Chemistry",
    department: "Department of Chemical Sciences",
    qualificationPlaceholder: "Senior Chemistry Specialist",
    experiencePlaceholder: "Expertise in organic reaction mechanisms and physical chemistry stoichiometry",
    responsibilities: [
      "Organic Chemistry mechanisms & pathways",
      "Physical Chemistry numerical precision",
      "Inorganic NCERT deconstruction"
    ],
    teachingPhilosophy: "Bridging microscopic chemical behavior with predictable structural rules, making organic synthesis logical and natural.",
    isHeadOfDepartment: true
  },
  {
    id: "dept-biology",
    subject: "Biology (Botany & Zoology)",
    department: "Department of Life Sciences",
    qualificationPlaceholder: "Senior Medical Entrance Mentor",
    experiencePlaceholder: "Specialized in NEET-UG curriculum, diagrammatic accuracy & biological taxonomies",
    responsibilities: [
      "NCERT line-by-line interpretation",
      "Diagram-based and assertion-reason reasoning",
      "Human Physiology & Genetics mastery"
    ],
    teachingPhilosophy: "Rigorous attention to biological nomenclature and NCERT precision to maximize high-yield score potential in NEET.",
    isHeadOfDepartment: true
  },
  {
    id: "dept-maths",
    subject: "Mathematics",
    department: "Department of Mathematical Sciences",
    qualificationPlaceholder: "Senior Mathematics Instructor",
    experiencePlaceholder: "Calculus, coordinate geometry and algebraic reasoning specialist",
    responsibilities: [
      "Differential & Integral Calculus",
      "Algebraic proofs & speed drills",
      "Board presentation and entrance problem approaches"
    ],
    teachingPhilosophy: "Cultivating structured step-by-step reasoning that transforms daunting mathematical problems into manageable milestones.",
    isHeadOfDepartment: false
  }
];

export const RESULTS_CHARTER = {
  title: "Recognising Academic Progress",
  subtitle: "Official Student Achievement & Performance Registry",
  noticeHeading: "Official Records Registry Under Periodic Institutional Update",
  noticeText: "Vardhani Classes adheres to strict ethical standards in academic communication. We do not publish unverified scores, fabricated ranks, or fictional claims. The institute's official achievement roll for the current session is undergoing administrative audit and will be formally published here following candidate board and entrance verifications.",
  features: [
    { title: "Direct Verification", text: "Every published score and rank is backed by verifiable admit cards and official scorecards." },
    { title: "Ethical Standards", text: "No misleading aggregate percentages or shared credit claims from distant correspondence lists." },
    { title: "Student-First Recognition", text: "Acknowledging not just top ranks, but transformative percentile improvements across all batches." }
  ]
};

export const REVIEWS_CHARTER = {
  title: "Student & Parent Experience",
  subtitle: "Authentic Reflections on Learning at Vardhani Classes",
  invitationText: "We value genuine feedback from our students and parents over marketing testimonials. As our ongoing batches progress through the academic cycle, verified reviews and parent perspectives will be updated here.",
  pillars: [
    { title: "Transparent Communication", desc: "Regular parent-faculty interactions keep families updated on genuine student progress and attendance." },
    { title: "Accessible Mentors", desc: "Students are encouraged to ask questions freely without hesitation or intimidation." },
    { title: "Consistent Academic Environment", desc: "A disciplined, distraction-free atmosphere built around consistent study habits." }
  ]
};

