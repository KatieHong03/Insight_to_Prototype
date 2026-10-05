import React from 'react';
import { ArrowRight, ArrowLeft, CheckSquare, Square, CheckCircle2 } from 'lucide-react';
import { CRITIQUE_QUESTIONS } from '../../types';

interface Slide9CritiqueProps {
  checklist: Record<string, boolean>;
  onToggleItem: (id: string) => void;
  critiqueChange: string;
  onChangeCritiqueChange: (val: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const Slide9Critique: React.FC<Slide9CritiqueProps> = ({
  checklist,
  onToggleItem,
  critiqueChange,
  onChangeCritiqueChange,
  onBack,
  onContinue,
}) => {
  const evaluatedCount = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 space-y-3.5 flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-1">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
            Step 9: Critique Version 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
            Don't accept Version 1 automatically
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-normal">
            “A prototype can look polished and still solve the wrong problem.”
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-xs font-semibold text-stone-700">
          <CheckCircle2 className="w-3.5 h-3.5 text-amber-800" />
          <span>{evaluatedCount} of {CRITIQUE_QUESTIONS.length} evaluated</span>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block">
          Inspection Checklist:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {CRITIQUE_QUESTIONS.map((q) => {
            const isChecked = Boolean(checklist[q.id]);
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onToggleItem(q.id)}
                className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                  isChecked
                    ? 'bg-amber-50/60 border-amber-300 text-stone-900 shadow-2xs'
                    : 'bg-[#FAF8F5]/80 border-stone-200 hover:border-stone-300 text-stone-700'
                }`}
              >
                <div className="shrink-0 text-stone-400">
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-amber-800" />
                  ) : (
                    <Square className="w-4 h-4 text-stone-300" />
                  )}
                </div>
                <span className="text-xs font-medium leading-snug">
                  {q.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* The Single Most Important Change */}
      <div className="space-y-1.5 pt-2 border-t border-stone-100">
        <label htmlFor="critique-change" className="block text-xs sm:text-sm font-semibold text-stone-900">
          What is the MOST important thing you would change?
        </label>
        <textarea
          id="critique-change"
          rows={2}
          value={critiqueChange}
          onChange={(e) => onChangeCritiqueChange(e.target.value)}
          placeholder="e.g., The hero section introduces an unverified metric and buries turnaround times below generic marketing text. Move turnaround times directly below the headline and remove unsupported claims..."
          className="w-full p-3 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
        />
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
          <span>Continue to Build Revision</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
