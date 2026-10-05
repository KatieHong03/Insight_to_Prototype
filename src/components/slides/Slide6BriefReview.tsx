import React from 'react';
import { ArrowRight, ArrowLeft, Edit3, Wand2, Lightbulb } from 'lucide-react';
import { LearnerData } from '../../types';

interface Slide6BriefReviewProps {
  data: LearnerData;
  onEditSection: (slideNumber: number) => void;
  onBack: () => void;
  onBuildPrompt: () => void;
}

export const Slide6BriefReview: React.FC<Slide6BriefReviewProps> = ({
  data,
  onEditSection,
  onBack,
  onBuildPrompt,
}) => {
  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 space-y-3.5 flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
          Step 6: Review Brief
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
          Your Prototype Brief
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal">
          Review your decisions before turning them into an executable prompt.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="space-y-3">
        {/* Card 0: Prototype Format & Focus */}
        <div className="p-3 bg-[#FAF8F5] border border-amber-200/80 rounded-xl space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                PROTOTYPE FORMAT & GOAL
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                {data.prototypeType === 'page' ? 'Single Landing Page' :
                 data.prototypeType === 'website' ? 'Multi-Page Website' :
                 data.prototypeType === 'game' ? 'Interactive Game / Simulation' : 'Web Application / Tool'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onEditSection(2)}
              className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 font-semibold cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-stone-400" />
              <span>Edit</span>
            </button>
          </div>
          <p className="text-xs sm:text-sm text-stone-800 font-medium line-clamp-1">
            {data.prototypeTitle || <span className="text-stone-400 italic">[No project title specified]</span>}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Card 1: Target User */}
          <div className="p-3 bg-[#FAF8F5] border border-stone-200/90 rounded-xl space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900">
                TARGET USER
              </span>
              <button
                type="button"
                onClick={() => onEditSection(3)}
                className="inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-stone-900 font-semibold cursor-pointer"
              >
                <Edit3 className="w-3 h-3 text-stone-400" />
                <span>Edit</span>
              </button>
            </div>
            <p className="text-xs text-stone-800 leading-relaxed line-clamp-2">
              {data.user.trim() || <span className="text-stone-400 italic">[No user specified yet]</span>}
            </p>
          </div>

          {/* Card 2: User Need */}
          <div className="p-3 bg-[#FAF8F5] border border-stone-200/90 rounded-xl space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900">
                USER NEED
              </span>
              <button
                type="button"
                onClick={() => onEditSection(4)}
                className="inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-stone-900 font-semibold cursor-pointer"
              >
                <Edit3 className="w-3 h-3 text-stone-400" />
                <span>Edit</span>
              </button>
            </div>
            <p className="text-xs text-stone-800 leading-relaxed line-clamp-2">
              {data.userNeed.trim() || <span className="text-stone-400 italic">[No user needs specified yet]</span>}
            </p>
          </div>

          {/* Card 3: Prototype Requirements */}
          <div className="p-3 bg-[#FAF8F5] border border-stone-200/90 rounded-xl space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900">
                PROTOTYPE REQUIREMENTS
              </span>
              <button
                type="button"
                onClick={() => onEditSection(5)}
                className="inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-stone-900 font-semibold cursor-pointer"
              >
                <Edit3 className="w-3 h-3 text-stone-400" />
                <span>Edit</span>
              </button>
            </div>
            <p className="text-xs text-stone-800 leading-relaxed line-clamp-2">
              {data.requirements.trim() || <span className="text-stone-400 italic">[No requirements specified yet]</span>}
            </p>
          </div>

          {/* Card 4: Constraints */}
          <div className="p-3 bg-[#FAF8F5] border border-stone-200/90 rounded-xl space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900">
                CONSTRAINTS
              </span>
              <button
                type="button"
                onClick={() => onEditSection(6)}
                className="inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-stone-900 font-semibold cursor-pointer"
              >
                <Edit3 className="w-3 h-3 text-stone-400" />
                <span>Edit</span>
              </button>
            </div>
            <p className="text-xs text-stone-800 leading-relaxed line-clamp-2">
              {data.constraints.trim() || <span className="text-stone-400 italic">[No constraints specified yet]</span>}
            </p>
          </div>
        </div>
      </div>

      {/* Instructional Callout */}
      <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-center gap-3">
        <Lightbulb className="w-4 h-4 text-amber-800 shrink-0" />
        <div className="text-xs sm:text-sm text-amber-950 font-serif">
          “Research tells you <span className="underline decoration-amber-500 font-semibold">what matters</span>. Your prototype decides <span className="underline decoration-amber-500 font-semibold">how to communicate it</span>.”
        </div>
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
          onClick={onBuildPrompt}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/80 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
        >
          <Wand2 className="w-4 h-4 text-amber-800" />
          <span>BUILD MY AI PROMPT</span>
        </button>
      </div>
    </div>
  );
};
