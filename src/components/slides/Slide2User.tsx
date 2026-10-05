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
    'K–12 District HR Director (Managing 500+ teachers & substitute rushes)',
    'Assistant Superintendent of HR (District safety compliance & Board audits)',
    'Charter School Network People Operations Lead (Multi-campus rapid hiring)',
    'County Educational Service Agency Staffing Lead (Regional substitute pool)',
    'University Campus HR & Student Employment Director',
  ];

  const typeLabel = 
    prototypeType === 'page' ? 'Single Landing Page' :
    prototypeType === 'website' ? 'Multi-Page Website' :
    prototypeType === 'game' ? 'Interactive Game / Simulation' :
    'Web Application / Tool';

  const isValid = Boolean(user.trim());

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 space-y-4 flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
          Step 2: Define the User
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
          Who are you designing for?
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal">
          “Strong prototypes begin with a specific buyer in the education sector.”
        </p>
      </div>

      {/* Prototype Context Banner */}
      {prototypeTitle && (
        <div className="p-3 bg-stone-100/90 border border-stone-200 rounded-xl flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0">
            <Layers className="w-3.5 h-3.5 text-stone-700" />
          </div>
          <div className="text-xs sm:text-sm leading-snug text-stone-700">
            <span className="font-bold text-stone-900 uppercase tracking-wider block text-[10px] mb-0.5">
              Target Prototype ({typeLabel}):
            </span>
            <span className="font-medium text-stone-800 line-clamp-1">{prototypeTitle}</span>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="space-y-2">
        <label htmlFor="user-input" className="block text-xs sm:text-sm font-semibold text-stone-900">
          Who is the primary education sector buyer or decision maker?
        </label>
        <textarea
          id="user-input"
          rows={2}
          value={user}
          onChange={(e) => onChangeUser(e.target.value)}
          placeholder="e.g., K–12 District HR Director who needs to buy background check tech services for school district hiring..."
          className="w-full p-3.5 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
        />
      </div>

      {/* Examples Chips (in light gray) */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block">
          Education Sector Buyer Personas (Click to Select):
        </span>
        <div className="flex flex-wrap gap-2">
          {examples.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => onChangeUser(ex)}
              className="px-3 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors cursor-pointer text-left"
            >
              + {ex}
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
          disabled={!isValid}
          className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl shadow-xs transition-all ${
            isValid
              ? 'bg-amber-100 hover:bg-amber-200 text-stone-900 border border-amber-300/80 cursor-pointer active:scale-[0.98]'
              : 'bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed'
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
