import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Wand2, Copy, Check, Terminal } from 'lucide-react';
import { LearnerData } from '../../types';

interface Slide10RevisionProps {
  data: LearnerData;
  onChangeField: (field: 'revisionKeep' | 'revisionChange' | 'revisionAdd' | 'revisionRemove' | 'generatedRevisionPrompt', val: string) => void;
  onBuildRevisionPrompt: () => void;
  onBack: () => void;
  onContinue: () => void;
}

export const Slide10Revision: React.FC<Slide10RevisionProps> = ({
  data,
  onChangeField,
  onBuildRevisionPrompt,
  onBack,
  onContinue,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.generatedRevisionPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl shadow-xs overflow-hidden p-8 sm:p-12 lg:p-16 space-y-9 min-h-[560px] lg:min-h-[620px] flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-widest block">
          Step 10: Direct Revision
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
          Direct the next version
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal">
          “Instead of asking AI to ‘make it better,’ tell it exactly what should stay and what should change.”
        </p>
      </div>

      {/* 4 Targeted Directives */}
      <div className="space-y-5">
        {/* KEEP */}
        <div className="space-y-1.5">
          <label htmlFor="rev-keep" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-950 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            KEEP — What is already working?
          </label>
          <input
            id="rev-keep"
            type="text"
            value={data.revisionKeep}
            onChange={(e) => onChangeField('revisionKeep', e.target.value)}
            placeholder="e.g., Overall visual hierarchy and clean two-column layout..."
            className="w-full px-4 py-3 text-sm sm:text-base text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>

        {/* CHANGE */}
        <div className="space-y-1.5">
          <label htmlFor="rev-change" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-950 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
            CHANGE — What needs improvement?
          </label>
          <input
            id="rev-change"
            type="text"
            value={data.revisionChange}
            onChange={(e) => onChangeField('revisionChange', e.target.value)}
            placeholder="e.g., Move turnaround time details directly beneath the hero headline..."
            className="w-full px-4 py-3 text-sm sm:text-base text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>

        {/* ADD */}
        <div className="space-y-1.5">
          <label htmlFor="rev-add" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-950 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            ADD — What is missing?
          </label>
          <input
            id="rev-add"
            type="text"
            value={data.revisionAdd}
            onChange={(e) => onChangeField('revisionAdd', e.target.value)}
            placeholder="e.g., A clear secondary link to request district-specific pricing..."
            className="w-full px-4 py-3 text-sm sm:text-base text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>

        {/* REMOVE */}
        <div className="space-y-1.5">
          <label htmlFor="rev-remove" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-950 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
            REMOVE — What is unnecessary?
          </label>
          <input
            id="rev-remove"
            type="text"
            value={data.revisionRemove}
            onChange={(e) => onChangeField('revisionRemove', e.target.value)}
            placeholder="e.g., The unsupported 99.8% compliance statistic..."
            className="w-full px-4 py-3 text-sm sm:text-base text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>
      </div>

      {/* Button to generate prompt */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs sm:text-sm text-stone-500">
          Only filled categories will be included in the revision prompt.
        </span>
        <button
          type="button"
          onClick={onBuildRevisionPrompt}
          className="inline-flex items-center gap-2.5 px-6 py-3 text-sm sm:text-base font-semibold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-2xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
        >
          <Wand2 className="w-4 h-4 text-amber-800" />
          <span>BUILD MY REVISION PROMPT</span>
        </button>
      </div>

      {/* Generated Revision Prompt Output */}
      {data.generatedRevisionPrompt && (
        <div className="p-6 bg-[#FAF8F5] border border-stone-200/90 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-amber-800" />
              Generated Revision Prompt:
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl shadow-2xs transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white active:scale-[0.98]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY REVISION PROMPT</span>
                </>
              )}
            </button>
          </div>

          <textarea
            rows={8}
            value={data.generatedRevisionPrompt}
            onChange={(e) => onChangeField('generatedRevisionPrompt', e.target.value)}
            className="w-full p-4 font-mono text-xs sm:text-sm text-stone-800 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 leading-relaxed resize-y shadow-inner"
          />
        </div>
      )}

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
          <span>Continue to Reflection</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
