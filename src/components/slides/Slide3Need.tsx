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
    <div className="bg-white border border-stone-200/90 rounded-3xl shadow-xs overflow-hidden p-8 sm:p-12 lg:p-16 space-y-9 min-h-[560px] lg:min-h-[620px] flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-widest block">
          Step 3: Define User Needs
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
          What does this user need?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal">
          “Focus on the problem they are trying to solve—not yet on what the interface should look like.”
        </p>
      </div>

      {/* Subtle previous context banner */}
      <div className="p-4 sm:p-5 bg-[#FAF8F5] border border-stone-200 rounded-2xl flex items-start gap-3.5">
        <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
          <User className="w-4 h-4 text-amber-800" />
        </div>
        <div className="text-sm sm:text-base leading-relaxed text-stone-700">
          <span className="font-bold text-stone-900 uppercase tracking-wider block text-xs mb-1">
            You are designing for:
          </span>
          <span className="font-medium text-stone-800">{user.trim() || 'A specific target user'}</span>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-4">
        <label htmlFor="need-input" className="block text-base sm:text-lg font-semibold text-stone-900">
          What goals, problems, questions, or pain points should your prototype address?
        </label>
        <textarea
          id="need-input"
          rows={4}
          value={userNeed}
          onChange={(e) => onChangeNeed(e.target.value)}
          placeholder="e.g., They need to understand turnaround times, compliance mandates, costs, and whether the service fits hiring rushes before opening day..."
          className="w-full p-5 text-base sm:text-lg text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
        />
      </div>

      {/* Examples in Light Gray */}
      <div className="space-y-3 pt-1">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-600 block">
          Education HR Priorities & Needs:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {[
            'Fast 24–48h turnaround for substitute teachers before term starts',
            'Full compliance with state Department of Education & FBI fingerprinting',
            'Direct integration with Frontline Education and PowerSchool HR',
            'Volume tier pricing and public school purchase order billing',
            'Mobile applicant portal to avoid lost paper authorization forms',
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                const current = userNeed.trim();
                const updated = current ? `${current}\n- ${item}` : item;
                onChangeNeed(updated);
              }}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-xl transition-colors cursor-pointer text-left"
            >
              + {item}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-stone-100 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-3 text-base font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-2xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
