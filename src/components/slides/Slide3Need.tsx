import React from 'react';
import { ArrowRight, ArrowLeft, User } from 'lucide-react';

interface Slide3NeedProps {
  user: string;
  userNeed: string;
  onChangeNeed: (val: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const Slide3Need: React.FC<Slide3NeedProps> = ({
  user,
  userNeed,
  onChangeNeed,
  onBack,
  onContinue,
}) => {
  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 space-y-4 flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
          Step 3: Define User Needs
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
          What does this user need?
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal">
          “Focus on what education sector buyers need to see on the landing page to trust and buy the service.”
        </p>
      </div>

      {/* Subtle previous context banner */}
      <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
          <User className="w-3.5 h-3.5 text-amber-800" />
        </div>
        <div className="text-xs sm:text-sm leading-snug text-stone-700">
          <span className="font-bold text-stone-900 uppercase tracking-wider block text-[10px] mb-0.5">
            You are designing for:
          </span>
          <span className="font-medium text-stone-800 line-clamp-1">{user.trim() || 'A specific target user'}</span>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label htmlFor="need-input" className="block text-xs sm:text-sm font-semibold text-stone-900">
          What problems, compliance requirements, or urgent goals must this landing page address?
        </label>
        <textarea
          id="need-input"
          rows={2}
          value={userNeed}
          onChange={(e) => onChangeNeed(e.target.value)}
          placeholder="e.g., Fast 24–48h substitute clearance before school opening, State DOE statutory compliance, Frontline integration..."
          className="w-full p-3.5 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
        />
      </div>

      {/* Examples in Light Gray */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block">
          Key Buyer Priorities to Attract Education Decision Makers (Click to Add):
        </span>
        <div className="flex flex-wrap gap-2">
          {[
            'Guaranteed 24–48h turnaround for substitute teachers before opening day',
            '100% compliance with state Department of Education (DOE) & FBI fingerprinting',
            'Direct integration with Frontline Education and PowerSchool HR',
            'Volume tier pricing and public school purchase order (PO) billing',
            'Paperless mobile portal: applicants finish background disclosures in 3 min',
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                const current = userNeed.trim();
                const updated = current ? `${current}\n- ${item}` : item;
                onChangeNeed(updated);
              }}
              className="px-3 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors cursor-pointer text-left"
            >
              + {item}
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
          <span>Continue</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
