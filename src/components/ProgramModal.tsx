import React from 'react';
import { CourseProgram } from '../types';
import { X, CheckCircle2, Clock, Calendar, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface ProgramModalProps {
  program: CourseProgram | null;
  onClose: () => void;
  onEnquire: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose, onEnquire }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#091829]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded max-w-3xl w-full my-8 shadow-2xl border border-[#E6E7E9] overflow-hidden relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#10243B] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-300 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#CBA34A] text-[#091829] font-bold">
              {program.category}
            </span>
            <span className="text-xs text-[#E2C77D] font-mono">
              CURRICULUM SPECIFICATION // {program.code}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {program.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#E2C77D] mt-1 font-medium">
            {program.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#737B85] uppercase tracking-wider">
              Program Synopsis
            </h4>
            <p className="text-sm text-[#303B49] leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Subjects Included */}
          <div>
            <h4 className="text-xs font-semibold text-[#737B85] uppercase tracking-wider mb-2">
              Subjects Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.subjects.map(s => (
                <span key={s} className="text-xs font-medium text-[#10243B] bg-[#F8F7F3] border border-[#E6E7E9] px-3 py-1.5 rounded">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Curriculum Breakdown */}
          <div className="space-y-3 pt-2 border-t border-[#E6E7E9]">
            <h4 className="text-xs font-semibold text-[#10243B] uppercase tracking-wider">
              Core Curriculum Coverage & Syllabus Mapping
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program.curriculumCoverage.map((item, idx) => (
                <div key={idx} className="bg-[#F8F7F3] p-3 rounded border border-[#E6E7E9] text-xs text-[#303B49] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CBA34A] shrink-0 mt-1.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Program Highlights */}
          <div className="space-y-3 pt-2 border-t border-[#E6E7E9]">
            <h4 className="text-xs font-semibold text-[#10243B] uppercase tracking-wider">
              Key Instructional Features
            </h4>
            <div className="space-y-2">
              {program.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#303B49]">
                  <CheckCircle2 className="w-4 h-4 text-[#CBA34A] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Delivery Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E6E7E9] text-xs text-[#737B85]">
            <div className="p-3 bg-[#F8F7F3] rounded border border-[#E6E7E9]">
              <span className="font-semibold text-[#10243B] block mb-0.5">Duration & Term:</span>
              <span>{program.duration}</span>
            </div>
            <div className="p-3 bg-[#F8F7F3] rounded border border-[#E6E7E9]">
              <span className="font-semibold text-[#10243B] block mb-0.5">Batch Timings:</span>
              <span>{program.batchSchedule}</span>
            </div>
          </div>

          <div className="p-3 bg-[#FFF9E6] border border-[#F0DC9E] rounded text-xs text-[#7D5B00]">
            <strong>Ideal For:</strong> {program.idealFor}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#F8F7F3] border-t border-[#E6E7E9] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#737B85] font-mono">
            Vardhani Classes • Gwalior Center
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 border border-[#E6E7E9] text-xs font-medium text-[#737B85] rounded hover:bg-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(program.title);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#10243B] hover:bg-[#091829] text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2"
            >
              <span>Enquire for this Program</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CBA34A]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

