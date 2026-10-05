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
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 space-y-3.5 flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
          Step 10: Direct Revision
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
          Direct the next version
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal">
          “Instead of asking AI to ‘make it better,’ tell it exactly what should stay and what should change.”
        </p>
      </div>

      {/* 4 Targeted Directives Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* KEEP */}
        <div className="space-y-1">
          <label htmlFor="rev-keep" className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            KEEP — Working elements:
          </label>
          <input
            id="rev-keep"
            type="text"
            value={data.revisionKeep}
            onChange={(e) => onChangeField('revisionKeep', e.target.value)}
            placeholder="e.g., Overall visual layout and two-column hero structure..."
            className="w-full px-3 py-2 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>

        {/* CHANGE */}
        <div className="space-y-1">
          <label htmlFor="rev-change" className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-600" />
            CHANGE — Needed adjustments:
          </label>
          <input
            id="rev-change"
            type="text"
            value={data.revisionChange}
            onChange={(e) => onChangeField('revisionChange', e.target.value)}
            placeholder="e.g., Move turnaround time details directly beneath the hero headline..."
            className="w-full px-3 py-2 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>

        {/* ADD */}
        <div className="space-y-1">
          <label htmlFor="rev-add" className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            ADD — Missing education items:
          </label>
          <input
            id="rev-add"
            type="text"
            value={data.revisionAdd}
            onChange={(e) => onChangeField('revisionAdd', e.target.value)}
            placeholder="e.g., A clear secondary link to request district-specific pricing & Board RFP kit..."
            className="w-full px-3 py-2 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>

        {/* REMOVE */}
        <div className="space-y-1">
          <label htmlFor="rev-remove" className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            REMOVE — Unsubstantiated claims:
          </label>
          <input
            id="rev-remove"
            type="text"
            value={data.revisionRemove}
            onChange={(e) => onChangeField('revisionRemove', e.target.value)}
            placeholder="e.g., The unsupported 99.8% compliance accuracy statistic..."
            className="w-full px-3 py-2 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400"
          />
        </div>
      </div>

      {/* Button to generate prompt */}
      <div className="flex items-center justify-between gap-3 pt-0.5">
        <span className="text-xs text-stone-500">
          Only filled categories will be included in the revision prompt.
        </span>
        <button
          type="button"
          onClick={onBuildRevisionPrompt}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
        >
          <Wand2 className="w-3.5 h-3.5 text-amber-800" />
          <span>BUILD REVISION PROMPT</span>
        </button>
      </div>

      {/* Generated Revision Prompt Output */}
      {data.generatedRevisionPrompt && (
        <div className="p-3 bg-[#FAF8F5] border border-stone-200/90 rounded-xl space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-800" />
              Generated Revision Prompt:
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg shadow-2xs transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white active:scale-[0.98]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>

          <textarea
            rows={4}
            value={data.generatedRevisionPrompt}
            onChange={(e) => onChangeField('generatedRevisionPrompt', e.target.value)}
            className="w-full p-2.5 font-mono text-xs text-stone-800 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 leading-relaxed resize-y shadow-inner"
          />
        </div>
      )}

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
          <span>Continue to Reflection</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
