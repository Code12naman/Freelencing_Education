import React from 'react';
import { BATCH_SCHEDULES } from '../data/instituteData';
import { Clock, Sun, Moon, AlertCircle, Calendar, Check } from 'lucide-react';

interface BatchScheduleProps {
  onOpenEnquiry: (batchName?: string) => void;
}

export const BatchSchedule: React.FC<BatchScheduleProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="schedule" className="py-20 lg:py-28 bg-[#F8F7F3] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E6E7E9] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
                TIMETABLE & ACADEMIC ROUTINE
              </span>
              <span className="w-6 h-[1px] bg-[#CBA34A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold tracking-tight">
              Class Batch Schedule.
            </h2>
          </div>

          <div className="max-w-sm">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#737B85] bg-white px-3 py-1.5 rounded border border-[#E6E7E9]">
              <AlertCircle className="w-3.5 h-3.5 text-[#CBA34A]" />
              <span>Schedules subject to institute confirmation</span>
            </span>
          </div>
        </div>

        {/* Batch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {BATCH_SCHEDULES.map((batch, index) => {
            const isMorning = index === 0;

            return (
              <div 
                key={batch.id}
                className="bg-white border border-[#E6E7E9] rounded p-7 sm:p-9 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#E6E7E9]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-[#F8F7F3] border border-[#E6E7E9] flex items-center justify-center text-[#10243B]">
                        {isMorning ? <Sun className="w-5 h-5 text-[#CBA34A]" /> : <Moon className="w-5 h-5 text-[#10243B]" />}
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-[#10243B]">
                          {batch.batchName}
                        </h3>
                        <span className="text-xs text-[#737B85] font-mono">
                          {batch.frequency}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F8F7F3] text-[#10243B] border border-[#E6E7E9]">
                      {batch.status}
                    </span>
                  </div>

                  {/* Timing Highlight */}
                  <div className="bg-[#F8F7F3] p-4 rounded border border-[#E6E7E9] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#737B85] font-semibold">
                        Daily Classroom Hours
                      </div>
                      <div className="font-serif text-2xl font-bold text-[#10243B] mt-0.5">
                        {batch.timing}
                      </div>
                    </div>
                    <div className="text-right text-xs text-[#737B85]">
                      <span className="block font-medium text-[#10243B]">{batch.duration}</span>
                      <span>Structured Cycles</span>
                    </div>
                  </div>

                  {/* Applicable Classes */}
                  <div>
                    <div className="text-[11px] font-semibold text-[#737B85] uppercase tracking-wider mb-2">
                      Applicable Academic Streams
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {batch.applicableClasses.map(cls => (
                        <span key={cls} className="text-xs font-medium text-[#10243B] bg-[#ECE9E1]/80 px-2.5 py-1 rounded">
                          {cls}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Focus Area */}
                  <p className="text-xs sm:text-sm text-[#303B49] leading-relaxed">
                    {batch.focus}
                  </p>

                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-[#E6E7E9] flex items-center justify-between">
                  <span className="text-[11px] text-[#737B85] font-mono">
                    *Seat allocation on merit
                  </span>
                  <button
                    onClick={() => onOpenEnquiry(batch.batchName)}
                    className="text-xs font-semibold text-[#10243B] hover:text-[#CBA34A] uppercase tracking-wider underline underline-offset-4"
                  >
                    Enquire for {batch.batchName} →
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Batch Notice Box */}
        <div className="max-w-5xl mx-auto mt-8 p-4 bg-white border border-[#E6E7E9] rounded text-xs text-[#737B85] flex items-center gap-3">
          <Clock className="w-4 h-4 text-[#CBA34A] shrink-0" />
          <span>
            <strong>Official Policy Note:</strong> Batch timing allotments depend on student school timings and classroom batch capacity to ensure healthy student-to-mentor interaction ratios.
          </span>
        </div>

      </div>
    </section>
  );
};
