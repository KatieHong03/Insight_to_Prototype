import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface Slide8BuildV1Props {
  onBack: () => void;
  onContinue: () => void;
}

export const Slide8BuildV1: React.FC<Slide8BuildV1Props> = ({
  onBack,
  onContinue,
}) => {
  const steps = [
    {
      num: '1',
      title: 'Copy your prompt',
      desc: 'Use the prompt generated in the previous step, including your defined user, need, requirements, and constraints.',
    },
    {
      num: '2',
      title: 'Paste it into your AI prototyping tool',
      desc: 'Run the prompt in Claude Artifacts, v0 by Vercel, ChatGPT Canvas, Bolt, or Google AI Studio.',
    },
    {
      num: '3',
      title: 'Review the first result',
      desc: 'Take 2 minutes to inspect what the AI generated before deciding what to keep or change.',
    },
  ];

  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl shadow-xs overflow-hidden p-8 sm:p-12 lg:p-16 space-y-9 min-h-[560px] lg:min-h-[620px] flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-widest block">
          Step 8: Generate Version 1
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
          Now let AI build
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal">
          “Paste your prompt into the AI coding or prototyping tool you are using.”
        </p>
      </div>

      {/* 3 Simple Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map((st) => (
          <div
            key={st.num}
            className="p-6 sm:p-7 bg-[#FAF8F5] border border-stone-200/90 rounded-2xl space-y-3 flex flex-col justify-between"
          >
            <div>
              <span className="w-9 h-9 rounded-full bg-white border border-stone-200 text-amber-900 font-mono text-base font-bold flex items-center justify-center mb-4 shadow-2xs">
                {st.num}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-stone-900 mb-2">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Prominently Displayed Principle */}
      <div className="p-8 sm:p-10 bg-[#F4EFE6] border border-amber-200/90 rounded-3xl text-center space-y-2">
        <p className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
          “Version 1 is a starting point—<span className="text-amber-900">not the final answer.</span>”
        </p>
        <p className="text-sm sm:text-base text-stone-700 max-w-xl mx-auto leading-relaxed">
          AI often produces visually impressive first drafts that subtly hallucinate facts or bury essential user priorities. Your job is to inspect and direct the next iteration.
        </p>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-stone-100 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-3 text-base font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Prompt</span>
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-2xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>I HAVE MY FIRST PROTOTYPE</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
