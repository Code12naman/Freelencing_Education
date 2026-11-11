import React, { useState } from 'react';
import { RESULTS_CHARTER } from '../data/instituteData';
import { ShieldCheck, Plus, CheckCircle2, Award, FileText, Image as ImageIcon, X } from 'lucide-react';
import { AchievementItem } from '../types';

export const ResultsSection: React.FC = () => {
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    exam: 'NEET-UG',
    scoreOrRank: '',
    year: '2025',
    category: 'Medical College Selection',
    notes: ''
  });

  const handleAddRecord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.scoreOrRank) return;

    const newRecord: AchievementItem = {
      id: `achieve-${Date.now()}`,
      studentName: formData.studentName,
      exam: formData.exam,
      scoreOrRank: formData.scoreOrRank,
      year: formData.year,
      category: formData.category,
      notes: formData.notes,
      verified: true
    };

    setAchievements([newRecord, ...achievements]);
    setShowAddModal(false);
    setFormData({
      studentName: '',
      exam: 'NEET-UG',
      scoreOrRank: '',
      year: '2025',
      category: 'Medical College Selection',
      notes: ''
    });
  };

  return (
    <section id="results" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E6E7E9] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
                ACHIEVEMENT & MERIT
              </span>
              <span className="w-6 h-[1px] bg-[#CBA34A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold tracking-tight">
              Recognising Academic Progress.
            </h2>
          </div>

          <div>
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-[#10243B] bg-[#F8F7F3] hover:bg-[#ECE9E1] border border-[#E6E7E9] rounded transition-all"
            >
              <Plus className="w-3.5 h-3.5 text-[#CBA34A]" />
              <span>Add Verified Record (Admin)</span>
            </button>
          </div>
        </div>

        {/* If institute has added verified records, render them in elegant editorial format */}
        {achievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {achievements.map((item) => (
              <div key={item.id} className="bg-[#F8F7F3] border border-[#E6E7E9] rounded p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#737B85]">
                  <span className="font-mono">{item.exam} • {item.year}</span>
                  <span className="text-green-700 bg-green-50 px-2 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1 border border-green-200">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Result
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#10243B]">{item.studentName}</h3>
                  <div className="text-base font-bold text-[#CBA34A] mt-1">{item.scoreOrRank}</div>
                  <div className="text-xs text-[#737B85] mt-0.5">{item.category}</div>
                </div>
                {item.notes && (
                  <p className="text-xs text-[#303B49] italic border-l-2 border-[#CBA34A] pl-2.5">
                    {item.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Tasteful Institutional Empty State matching client guidelines */
          <div className="bg-[#F8F7F3] border border-[#E6E7E9] rounded p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-subtle">
            <div className="w-14 h-14 rounded-full bg-white border border-[#E6E7E9] flex items-center justify-center text-[#CBA34A] mx-auto mb-6 shadow-2xs">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <div className="max-w-xl mx-auto space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#737B85]">
                OFFICIAL VERIFICATION PROTOCOL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#10243B]">
                {RESULTS_CHARTER.noticeHeading}
              </h3>
              <p className="text-sm text-[#303B49] leading-relaxed">
                {RESULTS_CHARTER.noticeText}
              </p>
            </div>

            {/* Verification Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#E6E7E9] text-left">
              {RESULTS_CHARTER.features.map((feat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="text-xs font-semibold text-[#10243B] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CBA34A]" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-[#737B85] leading-relaxed">
                    {feat.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Official Registration CTA */}
            <div className="mt-8 pt-6 border-t border-[#E6E7E9]/70 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#737B85]">
              <span>Are you a registered Vardhani student or parent with updated examination credentials?</span>
              <button
                onClick={() => setShowAddModal(true)}
                className="font-medium text-[#10243B] hover:text-[#CBA34A] underline underline-offset-4"
              >
                Submit Score for Registry Verification →
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Add Record Modal for Institute Administration */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-[#091829]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E6E7E9] relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-[#737B85] hover:text-[#10243B] p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-semibold text-[#CBA34A] uppercase tracking-wider font-mono">
                INSTITUTE ADMINISTRATION REGISTRY
              </span>
              <h3 className="font-serif text-xl font-bold text-[#10243B] mt-1">
                Add Verified Student Achievement
              </h3>
              <p className="text-xs text-[#737B85] mt-1">
                Enter authenticated candidate details to publish on the official results roll.
              </p>
            </div>

            <form onSubmit={handleAddRecord} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-[#303B49] block mb-1">Student Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Sharma"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full text-xs p-2.5 rounded border border-[#E6E7E9] bg-[#F8F7F3] focus:border-[#10243B] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#303B49] block mb-1">Exam Type</label>
                  <select
                    value={formData.exam}
                    onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                    className="w-full text-xs p-2.5 rounded border border-[#E6E7E9] bg-[#F8F7F3] focus:border-[#10243B] focus:outline-none"
                  >
                    <option value="NEET-UG">NEET-UG</option>
                    <option value="CBSE Class 12 Boards">CBSE Class 12 Boards</option>
                    <option value="MP Board Class 12">MP Board Class 12</option>
                    <option value="Class 11 Science Distinction">Class 11 Science Distinction</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-[#303B49] block mb-1">Score / Percentile / Rank *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 665/720 or 96.4%"
                    value={formData.scoreOrRank}
                    onChange={(e) => setFormData({ ...formData, scoreOrRank: e.target.value })}
                    className="w-full text-xs p-2.5 rounded border border-[#E6E7E9] bg-[#F8F7F3] focus:border-[#10243B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#303B49] block mb-1">Year of Achievement</label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full text-xs p-2.5 rounded border border-[#E6E7E9] bg-[#F8F7F3] focus:border-[#10243B] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#303B49] block mb-1">Achievement Category</label>
                  <input
                    type="text"
                    placeholder="e.g. GMC Selection / Subject 99%"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full text-xs p-2.5 rounded border border-[#E6E7E9] bg-[#F8F7F3] focus:border-[#10243B] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#303B49] block mb-1">Verification Reference / Notes</label>
                <input
                  type="text"
                  placeholder="e.g. Roll No. Verified, GRMC Gwalior Allotment"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-xs p-2.5 rounded border border-[#E6E7E9] bg-[#F8F7F3] focus:border-[#10243B] focus:outline-none"
                />
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 border border-[#E6E7E9] text-xs font-medium text-[#737B85] rounded hover:bg-[#F8F7F3]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#10243B] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#091829]"
                >
                  Confirm & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

