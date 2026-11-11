import React, { useState } from 'react';
import { FEE_STRUCTURE } from '../data/instituteData';
import { Check, AlertCircle, ArrowRight, Calculator } from 'lucide-react';

interface FeeStructureProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const FeeStructure: React.FC<FeeStructureProps> = ({ onOpenEnquiry }) => {
  const [paymentMode, setPaymentMode] = useState<'annual' | 'installment'>('annual');

  const getInstallmentBreakdown = (annualFee: number, id: string) => {
    if (id === 'fee-integrated') {
      return {
        initial: '₹30,000 at admission',
        second: '₹25,000 (Month 4)',
        third: '₹20,000 (Start of Class 12)',
        fourth: '₹10,000 (Month 16)',
        total: '₹85,000 (4 Milestone Installments)'
      };
    } else if (id === 'fee-12') {
      return {
        initial: '₹28,000 at admission',
        second: '₹22,000 (Mid-session milestone)',
        third: null,
        fourth: null,
        total: '₹50,000 (2 Bi-annual Installments)'
      };
    } else {
      return {
        initial: '₹25,000 at admission',
        second: '₹20,000 (Mid-session milestone)',
        third: null,
        fourth: null,
        total: '₹45,000 (2 Bi-annual Installments)'
      };
    }
  };

  return (
    <section id="fees" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E7E9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E6E7E9] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#CBA34A]">
                TUITION & INVESTMENT
              </span>
              <span className="w-6 h-[1px] bg-[#CBA34A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#10243B] font-semibold tracking-tight">
              Fee Structure.
            </h2>
          </div>

          {/* Payment Plan Mode Switcher */}
          <div className="flex items-center gap-2 p-1 bg-[#F8F7F3] rounded border border-[#E6E7E9]">
            <button
              onClick={() => setPaymentMode('annual')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-all ${
                paymentMode === 'annual'
                  ? 'bg-[#10243B] text-white shadow-xs'
                  : 'text-[#737B85] hover:text-[#10243B]'
              }`}
            >
              Annual Overview
            </button>
            <button
              onClick={() => setPaymentMode('installment')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-all flex items-center gap-1.5 ${
                paymentMode === 'installment'
                  ? 'bg-[#10243B] text-white shadow-xs'
                  : 'text-[#737B85] hover:text-[#10243B]'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-[#CBA34A]" />
              <span>Installment Planner</span>
            </button>
          </div>
        </div>

        {/* Advisory Box */}
        <div className="mb-8 p-3.5 bg-[#F8F7F3] rounded border border-[#E6E7E9] flex items-center justify-between text-xs text-[#737B85]">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#CBA34A] shrink-0" />
            <span>These fees are illustrative benchmarks and subject to institute confirmation during direct consultation.</span>
          </div>
          <span className="font-mono text-[#10243B] font-medium hidden sm:inline">Transparent Academic Terms</span>
        </div>

        {/* Professional Editorial Fee Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {FEE_STRUCTURE.map((plan) => {
            const isFeatured = plan.isRecommended;
            const installments = getInstallmentBreakdown(plan.annualFee, plan.id);

            return (
              <div
                key={plan.id}
                className={`rounded flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured 
                    ? 'bg-[#FFFFFF] border-2 border-[#CBA34A] shadow-card p-7 sm:p-8' 
                    : 'bg-[#F8F7F3] border border-[#E6E7E9] shadow-subtle p-7 sm:p-8 hover:border-[#10243B]/30'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#CBA34A] text-[#091829] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded shadow-sm">
                      Recommended Academic Continuum
                    </span>
                  </div>
                )}

                <div>
                  {/* Category / Target Class */}
                  <div className="text-[11px] font-semibold text-[#737B85] uppercase tracking-wider mb-2">
                    {plan.targetClass}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#10243B] mb-4">
                    {plan.programName}
                  </h3>

                  {/* Fee Display depending on mode */}
                  {paymentMode === 'annual' ? (
                    <div className="py-4 my-2 border-y border-[#E6E7E9]">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl sm:text-4xl font-bold text-[#10243B] tracking-tight">
                          {plan.formattedFee}
                        </span>
                        <span className="text-xs text-[#737B85] font-normal">
                          / session
                        </span>
                      </div>
                      <div className="text-[11px] text-[#CBA34A] font-medium mt-1">
                        {plan.paymentModes}
                      </div>
                    </div>
                  ) : (
                    <div className="py-3 my-2 border-y border-[#E6E7E9] space-y-1.5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#737B85]">
                        Structured Milestones:
                      </div>
                      <div className="text-xs text-[#10243B] font-medium flex justify-between">
                        <span>1st Installment:</span>
                        <span className="font-bold">{installments.initial}</span>
                      </div>
                      <div className="text-xs text-[#10243B] font-medium flex justify-between">
                        <span>2nd Installment:</span>
                        <span className="font-bold">{installments.second}</span>
                      </div>
                      {installments.third && (
                        <div className="text-xs text-[#10243B] font-medium flex justify-between">
                          <span>3rd Installment:</span>
                          <span className="font-bold">{installments.third}</span>
                        </div>
                      )}
                      {installments.fourth && (
                        <div className="text-xs text-[#10243B] font-medium flex justify-between">
                          <span>4th Installment:</span>
                          <span className="font-bold">{installments.fourth}</span>
                        </div>
                      )}
                      <div className="pt-1 text-[11px] text-[#CBA34A] font-medium">
                        Total Payable: {plan.formattedFee} (No Surcharge)
                      </div>
                    </div>
                  )}

                  {/* What is Included */}
                  <div className="space-y-3 pt-3">
                    <div className="text-[10px] font-semibold text-[#737B85] uppercase tracking-wider">
                      Academic Inclusions:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#303B49]">
                          <Check className="w-3.5 h-3.5 text-[#CBA34A] shrink-0 mt-0.5" />
                          <span className="leading-snug">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA and Note */}
                <div className="pt-6 mt-6 border-t border-[#E6E7E9] space-y-3">
                  <button
                    onClick={() => onOpenEnquiry(plan.programName)}
                    className={`w-full py-3 px-4 rounded text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-[#10243B] text-white hover:bg-[#091829]'
                        : 'bg-white text-[#10243B] border border-[#10243B]/30 hover:border-[#10243B]'
                    }`}
                  >
                    <span>Discuss Admission Fees</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CBA34A]" />
                  </button>

                  <p className="text-[10px] text-[#737B85] text-center leading-normal italic">
                    {plan.notes}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Scholarships & Merit Policy Note */}
        <div className="mt-12 p-6 bg-[#F8F7F3] border border-[#E6E7E9] rounded flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-base font-semibold text-[#10243B]">
              Merit-Based Scholarship Evaluation
            </h4>
            <p className="text-xs text-[#737B85]">
              Vardhani Classes offers partial tuition concessions for students securing 90%+ in Class 10 Board Examinations or demonstrated scientific aptitude.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry('Scholarship & Merit Assessment')}
            className="shrink-0 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#10243B] border border-[#10243B]/25 hover:border-[#10243B] rounded bg-white"
          >
            Inquire About Scholarship Criteria
          </button>
        </div>

      </div>
    </section>
  );
};
