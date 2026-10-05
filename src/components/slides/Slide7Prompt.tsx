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
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 space-y-3.5 flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
          Step 7: AI Prompt
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
          Your prototype instructions are ready
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal">
          This structured prompt translates your brief into clear instructions for an AI coding tool.
        </p>
      </div>

      {/* Editor Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-0.5">
        <div className="flex items-center gap-2 text-xs text-stone-600 font-mono">
          <Terminal className="w-3.5 h-3.5 text-amber-800" />
          <span>{lineCount} lines · {wordCount} words (Editable)</span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onEditBrief}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5 text-stone-500" />
            <span>EDIT BRIEF</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg shadow-2xs transition-all cursor-pointer ${
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
                <span>COPY PROMPT</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editable Prompt Area */}
      <div className="relative">
        <textarea
          rows={7}
          value={promptText}
          onChange={(e) => onChangePrompt(e.target.value)}
          className="w-full p-3.5 font-mono text-xs sm:text-sm text-stone-800 bg-[#FAF8F5] border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all leading-relaxed resize-y shadow-inner"
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
          <span>Continue to Build Version 1</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
