import React from 'react';
import { ArrowRight, ArrowLeft, ShieldAlert } from 'lucide-react';

interface Slide5ConstraintsProps {
  constraints: string;
  onChangeConstraints: (val: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const Slide5Constraints: React.FC<Slide5ConstraintsProps> = ({
  constraints,
  onChangeConstraints,
  onBack,
  onContinue,
}) => {
  const exampleConstraints = [
    'Do not invent state Department of Education laws or statutory turnaround metrics',
    'Do not fabricate unverified PBSA accreditation or FERPA compliance badges',
    'Clearly mark district pricing tiers and SLA guarantees as [NEEDS VERIFICATION]',
    'Differentiate background requirements for certified teachers vs. parent volunteers',
    'Do not claim instant FBI fingerprinting without required state livescan appointments',
    'Address public school district procurement requirements and Board RFP approvals',
  ];

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 space-y-3.5 flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
          Step 5: Define Boundaries
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
          Give AI boundaries
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal">
          “AI also needs to know what it should NOT assume, invent, or fabricate when building for school districts.”
        </p>
      </div>

      {/* Input */}
      <div className="space-y-1.5">
        <label htmlFor="constraints-input" className="block text-xs sm:text-sm font-semibold text-stone-900">
          What guardrails and constraints should AI respect?
        </label>
        <textarea
          id="constraints-input"
          rows={2.5 as any}
          value={constraints}
          onChange={(e) => onChangeConstraints(e.target.value)}
          placeholder="e.g., Do not invent state Department of Education laws, district statistics, or customer testimonials. Clearly mark anything that still needs verification..."
          className="w-full p-3 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
        />
      </div>

      {/* Examples Chips (in light gray) */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block">
          Education HR Constraints & Guardrails (Click to Add):
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {exampleConstraints.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => {
                const current = constraints.trim();
                const updated = current ? `${current}\n- ${ex}` : `- ${ex}`;
                onChangeConstraints(updated);
              }}
              className="p-2.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200/90 rounded-lg text-left transition-colors cursor-pointer flex items-center justify-between"
            >
              <span className="line-clamp-1">+ {ex}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>Continue to Brief Review</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
