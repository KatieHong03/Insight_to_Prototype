import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface Slide1WelcomeProps {
  onContinue: () => void;
}

export const Slide1Welcome: React.FC<Slide1WelcomeProps> = ({ onContinue }) => {
  const workflow = ['CLARIFY', 'DEFINE', 'STRUCTURE', 'GENERATE', 'CRITIQUE', 'REVISE'];

  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl shadow-xs overflow-hidden p-8 sm:p-12 lg:p-16 space-y-10 min-h-[560px] lg:min-h-[620px] flex flex-col justify-between">
      {/* Title & Kicker */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-widest">
          <Compass className="w-4 h-4 text-amber-700" />
          <span>Interactive Learning Activity</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight leading-tight">
          From Insight to Prototype
        </h1>
      </div>

      {/* Prominent Motto */}
      <div className="p-8 sm:p-10 lg:p-12 bg-[#FAF8F5] border border-amber-200/70 rounded-3xl space-y-4">
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 leading-snug">
          “AI can build quickly.<br />
          <span className="text-amber-900">You decide what it should build.”</span>
        </blockquote>
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed font-normal">
          “In this activity, you’ll turn what you know about a problem into clear instructions for an AI prototyping tool.”
        </p>
      </div>

      {/* Workflow Visual */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-600 block">
          Activity Workflow
        </span>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-[#FAF8F5] border border-stone-200/80 rounded-2xl">
          {workflow.map((step, idx) => (
            <React.Fragment key={step}>
              <div className="flex items-center gap-2.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-stone-800">
                <span className="w-6 h-6 rounded-full bg-white border border-stone-200 text-amber-800 text-xs font-mono flex items-center justify-center shadow-2xs font-bold">
                  {idx + 1}
                </span>
                <span className="tracking-wide">{step}</span>
              </div>
              {idx < workflow.length - 1 && (
                <ArrowRight className="w-4 h-4 text-stone-400 hidden sm:block shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-stone-100 flex items-center justify-end">
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex items-center gap-3 px-9 py-4 text-base sm:text-lg font-bold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-2xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>GET STARTED</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
