import React from 'react';
import { ArrowLeft, Home, FileText, Award, RotateCcw } from 'lucide-react';
import { LearnerData } from '../../types';

interface Slide11ReflectProps {
  data: LearnerData;
  onChangeReflection: (field: 'reflectAiWell' | 'reflectAiMisunderstood' | 'reflectUserDecided', val: string) => void;
  onBack: () => void;
  onOpenSummary: () => void;
  onReturnHome: () => void;
  onResetWorkspace?: () => void;
}

export const Slide11Reflect: React.FC<Slide11ReflectProps> = ({
  data,
  onChangeReflection,
  onBack,
  onOpenSummary,
  onReturnHome,
  onResetWorkspace,
}) => {
  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl shadow-xs overflow-hidden p-8 sm:p-12 lg:p-16 space-y-9 min-h-[560px] lg:min-h-[620px] flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-widest block">
          Step 11: Reflect
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
          Who made the decisions?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal">
          Reflect on the boundary between AI's execution speed and your strategic direction.
        </p>
      </div>

      {/* 3 Reflection Questions */}
      <div className="space-y-6">
        {/* Question 1 */}
        <div className="space-y-2">
          <label htmlFor="ref-well" className="block text-base sm:text-lg font-semibold text-stone-900">
            What did AI do well?
          </label>
          <textarea
            id="ref-well"
            rows={3}
            value={data.reflectAiWell}
            onChange={(e) => onChangeReflection('reflectAiWell', e.target.value)}
            placeholder="e.g., It quickly laid out a responsive visual grid and saved hours scaffolding component structures..."
            className="w-full p-4 sm:p-5 text-sm sm:text-base text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>

        {/* Question 2 */}
        <div className="space-y-2">
          <label htmlFor="ref-misunderstood" className="block text-base sm:text-lg font-semibold text-stone-900">
            What did AI misunderstand or assume?
          </label>
          <textarea
            id="ref-misunderstood"
            rows={3}
            value={data.reflectAiMisunderstood}
            onChange={(e) => onChangeReflection('reflectAiMisunderstood', e.target.value)}
            placeholder="e.g., It fabricated a 99.8% compliance accuracy metric and buried turnaround times below generic marketing copy..."
            className="w-full p-4 sm:p-5 text-sm sm:text-base text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>

        {/* Question 3 */}
        <div className="space-y-2">
          <label htmlFor="ref-decided" className="block text-base sm:text-lg font-semibold text-stone-900">
            What important decision did YOU make?
          </label>
          <textarea
            id="ref-decided"
            rows={3}
            value={data.reflectUserDecided}
            onChange={(e) => onChangeReflection('reflectUserDecided', e.target.value)}
            placeholder="e.g., I determined the priority of substitute hiring speed over marketing slogans, and established constraints to prevent false claims..."
            className="w-full p-4 sm:p-5 text-sm sm:text-base text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>
      </div>

      {/* Prominent Conclusion Takeaway */}
      <div className="p-8 sm:p-10 bg-[#F4EFE6] border border-amber-200/90 rounded-3xl text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-widest mb-1">
          <Award className="w-5 h-5 text-amber-800" />
          <span>Core Takeaway</span>
        </div>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight leading-snug">
          “AI generated the prototype.<br />
          <span className="text-amber-900">You directed the work.”</span>
        </p>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Revision</span>
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenSummary}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 rounded-2xl shadow-2xs transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-800" />
            <span>View Full Summary</span>
          </button>

          <button
            type="button"
            onClick={onReturnHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-2xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
          >
            <Home className="w-5 h-5 text-amber-800" />
            <span>RETURN TO HOME PAGE</span>
          </button>
        </div>
      </div>

      {onResetWorkspace && (
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onResetWorkspace}
            className="text-xs sm:text-sm text-stone-400 hover:text-stone-700 underline decoration-stone-300 hover:decoration-stone-600 transition-colors cursor-pointer"
          >
            Start fresh with a blank workspace
          </button>
        </div>
      )}
    </div>
  );
};
