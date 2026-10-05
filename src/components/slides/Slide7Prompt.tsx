import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Copy, Check, Edit3, Terminal } from 'lucide-react';

interface Slide7PromptProps {
  promptText: string;
  onChangePrompt: (val: string) => void;
  onEditBrief: () => void;
  onBack: () => void;
  onContinue: () => void;
}

export const Slide7Prompt: React.FC<Slide7PromptProps> = ({
  promptText,
  onChangePrompt,
  onEditBrief,
  onBack,
  onContinue,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const lineCount = promptText.split('\n').length;
  const wordCount = promptText.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl shadow-xs overflow-hidden p-8 sm:p-12 lg:p-16 space-y-8 min-h-[560px] lg:min-h-[620px] flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-widest block">
          Step 7: AI Prompt
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
          Your prototype instructions are ready
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal">
          This structured prompt translates your brief into clear instructions for an AI coding tool.
        </p>
      </div>

      {/* Editor Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-600 font-mono">
          <Terminal className="w-4 h-4 text-amber-800" />
          <span>{lineCount} lines · {wordCount} words (Editable)</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onEditBrief}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-colors cursor-pointer"
          >
            <Edit3 className="w-4 h-4 text-stone-500" />
            <span>EDIT MY BRIEF</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold rounded-xl shadow-2xs transition-all cursor-pointer ${
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
                <span>COPY PROMPT</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editable Prompt Area */}
      <div className="relative">
        <textarea
          rows={15}
          value={promptText}
          onChange={(e) => onChangePrompt(e.target.value)}
          className="w-full p-5 font-mono text-xs sm:text-sm lg:text-base text-stone-800 bg-[#FAF8F5] border border-stone-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all leading-relaxed resize-y shadow-inner"
        />
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
          <span>Continue to Build Version 1</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
