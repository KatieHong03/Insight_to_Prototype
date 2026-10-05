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
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 space-y-3.5 flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
          Step 11: Reflect
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
          Who made the decisions?
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal">
          Reflect on the boundary between AI's execution speed and your strategic direction.
        </p>
      </div>

      {/* 3 Reflection Questions in 3 Columns on md/lg */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Question 1 */}
        <div className="space-y-1">
          <label htmlFor="ref-well" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
            1. What did AI do well?
          </label>
          <textarea
            id="ref-well"
            rows={3}
            value={data.reflectAiWell}
            onChange={(e) => onChangeReflection('reflectAiWell', e.target.value)}
            placeholder="Type your reflection here..."
            className="w-full p-2.5 text-xs text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
          />
        </div>

        {/* Question 2 */}
        <div className="space-y-1">
          <label htmlFor="ref-misunderstood" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
            2. What did AI assume or invent?
          </label>
          <textarea
            id="ref-misunderstood"
            rows={3}
            value={data.reflectAiMisunderstood}
            onChange={(e) => onChangeReflection('reflectAiMisunderstood', e.target.value)}
            placeholder="Type your reflection here..."
            className="w-full p-2.5 text-xs text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
          />
        </div>

        {/* Question 3 */}
        <div className="space-y-1">
          <label htmlFor="ref-decided" className="block text-xs font-bold uppercase tracking-wider text-stone-800">
            3. What decisions did YOU make?
          </label>
          <textarea
            id="ref-decided"
            rows={3}
            value={data.reflectUserDecided}
            onChange={(e) => onChangeReflection('reflectUserDecided', e.target.value)}
            placeholder="Type your reflection here..."
            className="w-full p-2.5 text-xs text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
          />
        </div>
      </div>

      {/* Prominent Conclusion Takeaway */}
      <div className="p-3.5 bg-[#F4EFE6] border border-amber-200/90 rounded-xl text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-900 uppercase tracking-widest">
          <Award className="w-3.5 h-3.5 text-amber-800" />
          <span>Core Takeaway</span>
        </div>
        <p className="text-lg sm:text-xl font-serif text-stone-900 tracking-tight leading-snug">
          “AI generated the prototype. <span className="text-amber-900">You directed the work.</span>”
        </p>
      </div>

      {/* Navigation Footer */}
      <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Revision</span>
        </button>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenSummary}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-amber-800" />
            <span>View Full Summary</span>
          </button>

          <button
            type="button"
            onClick={onReturnHome}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
          >
            <Home className="w-4 h-4 text-amber-800" />
            <span>RETURN TO START</span>
          </button>
        </div>
      </div>

      {onResetWorkspace && (
        <div className="text-center pt-0.5">
          <button
            type="button"
            onClick={onResetWorkspace}
            className="text-[11px] text-stone-400 hover:text-stone-700 underline decoration-stone-300 hover:decoration-stone-600 transition-colors cursor-pointer"
          >
            Start fresh with a blank workspace
          </button>
        </div>
      )}
    </div>
  );
};
