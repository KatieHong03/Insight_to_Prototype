import React from 'react';
import { ArrowRight, ArrowLeft, Target, Layers } from 'lucide-react';
import { PrototypeType } from '../../types';

interface Slide2UserProps {
  prototypeType?: PrototypeType;
  prototypeTitle?: string;
  user: string;
  onChangeUser: (val: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const Slide2User: React.FC<Slide2UserProps> = ({
  prototypeType,
  prototypeTitle,
  user,
  onChangeUser,
  onBack,
  onContinue,
}) => {
  const examples = [
    'K–12 School District HR Director',
    'County Educational Service Agency Talent Lead',
    'Charter School Network People Operations Manager',
    'Substitute Teacher Staffing Coordinator',
    'University Campus Staff Recruitment Manager',
  ];

  const typeLabel = 
    prototypeType === 'page' ? 'Single Landing Page' :
    prototypeType === 'website' ? 'Multi-Page Website' :
    prototypeType === 'game' ? 'Interactive Game / Simulation' :
    'Web Application / Tool';

  const isValid = Boolean(user.trim());

  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl shadow-xs overflow-hidden p-8 sm:p-12 lg:p-16 space-y-9 min-h-[560px] lg:min-h-[620px] flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-widest block">
          Step 2: Define the User
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
          Who are you designing for?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal">
          “Strong prototypes begin with a specific user.”
        </p>
      </div>

      {/* Prototype Context Banner */}
      {prototypeTitle && (
        <div className="p-4 sm:p-5 bg-stone-100/90 border border-stone-200 rounded-2xl flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4 text-stone-700" />
          </div>
          <div className="text-sm sm:text-base leading-relaxed text-stone-700">
            <span className="font-bold text-stone-900 uppercase tracking-wider block text-xs mb-0.5">
              You are building ({typeLabel}):
            </span>
            <span className="font-medium text-stone-800">{prototypeTitle}</span>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="space-y-4">
        <label htmlFor="user-input" className="block text-base sm:text-lg font-semibold text-stone-900">
          Who is the primary user or audience?
        </label>
        <textarea
          id="user-input"
          rows={3}
          value={user}
          onChange={(e) => onChangeUser(e.target.value)}
          placeholder="e.g., K–12 HR director evaluating background check tech services for district schools..."
          className="w-full p-5 text-base sm:text-lg text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
        />
        <p className="text-sm text-stone-500 italic">
          “Try to describe a specific type of person rather than ‘everyone.’”
        </p>
      </div>

      {/* Examples Chips (in light gray) */}
      <div className="space-y-3 pt-2">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-600 block">
          Education HR Examples:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {examples.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => onChangeUser(ex)}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-xl transition-colors cursor-pointer"
            >
              + {ex}
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
          disabled={!isValid}
          className={`inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold rounded-2xl shadow-xs transition-all ${
            isValid
              ? 'bg-amber-100 hover:bg-amber-200 text-stone-900 border border-amber-300/80 cursor-pointer active:scale-[0.98]'
              : 'bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed'
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
