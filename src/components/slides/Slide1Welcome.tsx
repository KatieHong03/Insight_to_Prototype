import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface Slide1WelcomeProps {
  onContinue: () => void;
}

export const Slide1Welcome: React.FC<Slide1WelcomeProps> = ({ onContinue }) => {
  const workflow = ['CLARIFY', 'DEFINE', 'STRUCTURE', 'GENERATE', 'CRITIQUE', 'REVISE'];

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-6 sm:p-8 lg:p-9 space-y-6 flex flex-col justify-between">
      {/* Title & Kicker */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5 text-amber-700" />
          <span>Interactive Learning Activity</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
          From Insight to Prototype
        </h1>
      </div>

      {/* Prominent Motto */}
      <div className="p-5 sm:p-7 bg-[#FAF8F5] border border-amber-200/70 rounded-2xl space-y-3">
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif text-stone-900 leading-snug">
          “AI can build quickly.<br />
          <span className="text-amber-900">You decide what it should build.”</span>
        </blockquote>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          Turn your insights about school district HR into an effective B2B landing page prototype that convinces education buyers.
        </p>
      </div>

      {/* Workflow Visual - Clean responsive grid where text fits perfectly */}
      <div className="space-y-2.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block">
          Activity Workflow
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-2.5 sm:p-3 bg-[#FAF8F5] border border-stone-200/80 rounded-2xl">
          {workflow.map((step, idx) => (
            <div
              key={step}
              className="flex items-center justify-center gap-2 px-2 py-2 rounded-xl bg-white border border-stone-200/70 text-xs font-bold text-stone-800 shadow-2xs"
            >
              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-mono flex items-center justify-center font-bold shrink-0">
                {idx + 1}
              </span>
              <span className="tracking-wider uppercase text-[11px] sm:text-xs truncate">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-stone-100 flex items-center justify-end">
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex items-center gap-2.5 px-7 py-3 text-sm sm:text-base font-bold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-2xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>GET STARTED</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
