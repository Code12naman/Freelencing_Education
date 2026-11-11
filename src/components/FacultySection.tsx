import React, { useState } from 'react';
import { FACULTY_SLOTS } from '../data/instituteData';
import { FacultySlot } from '../types';
import { UserCheck, Shield, Edit2, Check, BookOpen, Layers } from 'lucide-react';

export const FacultySection: React.FC = () => {
  const [facultyList, setFacultyList] = useState<FacultySlot[]>(FACULTY_SLOTS);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<{
    subject: string;
    department: string;
    qualificationPlaceholder: string;
    teachingPhilosophy: string;
  }>({
    subject: '',
    department: '',
    qualificationPlaceholder: '',
    teachingPhilosophy: ''
  });

  const handleStartEdit = (faculty: FacultySlot) => {
    setEditingId(faculty.id);
    setEditFormData({
      subject: faculty.subject,
      department: faculty.department,
      qualificationPlaceholder: faculty.qualificationPlaceholder,
      teachingPhilosophy: faculty.teachingPhilosophy
    });
  };

  const handleSaveEdit = (id: string) => {
    setFacultyList(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          subject: editFormData.subject,
          department: editFormData.department,
          qualificationPlaceholder: editFormData.qualificationPlaceholder,
          teachingPhilosophy: editFormData.teachingPhilosophy
        };
      }
      return item;
    }));
    setEditingId(null);
  };

  return (
    <section id="faculty" className="py-20 lg:py-28 bg-[#F8F7F3] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E6E7E9] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
                ACADEMIC MENTORSHIP
              </span>
              <span className="w-6 h-[1px] bg-[#CBA34A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold tracking-tight">
              Guidance That Makes a Difference.
            </h2>
          </div>

          <div className="max-w-sm text-xs sm:text-sm text-[#737B85]">
            <p>
              Under our institutional policy, faculty appointments are subject to rigorous peer review and academic verification before public profile publication.
            </p>
          </div>
        </div>

        {/* Faculty Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyList.map((faculty) => {
            const isEditing = editingId === faculty.id;

            return (
              <div 
                key={faculty.id}
                className="bg-[#FFFFFF] border border-[#E6E7E9] rounded overflow-hidden flex flex-col justify-between shadow-subtle hover:shadow-card transition-all duration-200"
              >
                <div>
                  {/* Portrait Placeholder with Institutional Silhouette & Accent */}
                  <div className="relative h-64 bg-[#091829] flex flex-col items-center justify-center p-6 border-b border-[#E6E7E9] text-center overflow-hidden">
                    {/* Subtle geometric lines */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CBA34A_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {/* Professional Academic Silhouette Placeholder */}
                    <div className="w-24 h-24 rounded-full border-2 border-[#CBA34A]/40 bg-[#10243B] flex items-center justify-center text-[#CBA34A] mb-3 relative z-10 shadow-inner">
                      <svg className="w-12 h-12 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2C77D] bg-[#10243B]/80 px-2.5 py-0.5 rounded border border-[#CBA34A]/20">
                        {faculty.subject}
                      </span>
                    </div>

                    {/* Department Tag Overlay */}
                    <div className="absolute top-3 left-3 text-[10px] font-mono text-gray-400">
                      DEPT // 0{faculty.id.slice(-1) || '1'}
                    </div>

                    {/* Edit Trigger for Institute Administrators */}
                    <button
                      onClick={() => isEditing ? handleSaveEdit(faculty.id) : handleStartEdit(faculty)}
                      className="absolute top-3 right-3 text-[11px] text-[#CBA34A] hover:text-white bg-[#10243B]/90 hover:bg-[#10243B] p-1.5 rounded transition-colors flex items-center gap-1 border border-[#CBA34A]/30"
                      title="Edit Profile Data (Institute Control)"
                    >
                      {isEditing ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Edit2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    {isEditing ? (
                      /* In-place Editable Form for Institute */
                      <div className="space-y-3">
                        <div>
                          <label className="text-[10px] font-semibold text-[#737B85] uppercase block">Subject / Chair</label>
                          <input
                            type="text"
                            value={editFormData.subject}
                            onChange={(e) => setEditFormData({ ...editFormData, subject: e.target.value })}
                            className="w-full text-xs p-1.5 border border-[#E6E7E9] rounded bg-[#F8F7F3]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-[#737B85] uppercase block">Designation / Mentor Title</label>
                          <input
                            type="text"
                            value={editFormData.qualificationPlaceholder}
                            onChange={(e) => setEditFormData({ ...editFormData, qualificationPlaceholder: e.target.value })}
                            className="w-full text-xs p-1.5 border border-[#E6E7E9] rounded bg-[#F8F7F3]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-[#737B85] uppercase block">Department</label>
                          <input
                            type="text"
                            value={editFormData.department}
                            onChange={(e) => setEditFormData({ ...editFormData, department: e.target.value })}
                            className="w-full text-xs p-1.5 border border-[#E6E7E9] rounded bg-[#F8F7F3]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-[#737B85] uppercase block">Teaching Philosophy</label>
                          <textarea
                            rows={3}
                            value={editFormData.teachingPhilosophy}
                            onChange={(e) => setEditFormData({ ...editFormData, teachingPhilosophy: e.target.value })}
                            className="w-full text-xs p-1.5 border border-[#E6E7E9] rounded bg-[#F8F7F3]"
                          />
                        </div>
                        <button
                          onClick={() => handleSaveEdit(faculty.id)}
                          className="w-full py-1.5 bg-[#10243B] text-white text-xs rounded font-medium"
                        >
                          Save Changes
                        </button>
                      </div>
                    ) : (
                      /* Dignified Display */
                      <div className="space-y-3">
                        <div>
                          <div className="text-[11px] font-semibold text-[#CBA34A] uppercase tracking-wider">
                            {faculty.department}
                          </div>
                          <h3 className="font-serif text-lg font-semibold text-[#10243B] mt-0.5">
                            {faculty.qualificationPlaceholder}
                          </h3>
                        </div>

                        <p className="text-xs text-[#737B85] italic leading-relaxed border-l-2 border-[#CBA34A]/40 pl-3">
                          "{faculty.teachingPhilosophy}"
                        </p>

                        <div className="pt-2 border-t border-[#E6E7E9] space-y-1.5">
                          <div className="text-[10px] font-semibold text-[#737B85] uppercase tracking-wider">
                            Academic Focus
                          </div>
                          {faculty.responsibilities.map((resp, idx) => (
                            <div key={idx} className="text-xs text-[#303B49] flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#10243B]" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Institutional Badge */}
                <div className="px-6 py-3 bg-[#F8F7F3] border-t border-[#E6E7E9] text-[10px] font-mono text-[#737B85] flex items-center justify-between">
                  <span>FACULTY ID: #{faculty.id.toUpperCase()}</span>
                  <span className="text-[#CBA34A]">VERIFIED ROLE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Transparency Note */}
        <div className="mt-12 p-5 bg-[#FFFFFF] border border-[#E6E7E9] rounded text-xs text-[#737B85] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#CBA34A] shrink-0" />
            <span>
              <strong>Institute Integrity Commitment:</strong> We do not publish promotional faculty biographies until fully authenticated by institutional appointment records.
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#10243B] shrink-0">
            Vardhani Academic Governance
          </span>
        </div>

      </div>
    </section>
  );
};
