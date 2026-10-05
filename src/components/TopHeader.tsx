import React from 'react';
import { BookOpen, RotateCcw, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

interface TopHeaderProps {
  currentSlide: number;
  totalSlides: number;
  onGoToSlide: (slideNumber: number) => void;
  onOpenSummary: () => void;
  onReset: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  currentSlide,
  totalSlides,
  onGoToSlide,
  onOpenSummary,
  onReset,
}) => {
  const progressPercent = ((currentSlide) / totalSlides) * 100;

  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 h-13 sm:h-14 flex items-center justify-between gap-3">
        {/* Left: Brand & Home */}
        <button
          type="button"
          onClick={() => onGoToSlide(1)}
          className="flex items-center gap-2.5 text-stone-900 hover:text-amber-900 transition-colors text-left shrink-0 cursor-pointer group"
        >
          <div className="w-7 h-7 rounded-lg bg-amber-100/80 border border-amber-300/60 flex items-center justify-center shrink-0 group-hover:bg-amber-200/80 transition-colors">
            <BookOpen className="w-3.5 h-3.5 text-amber-900 shrink-0" />
          </div>
          <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-stone-900">
            From Insight to Prototype
          </span>
        </button>

        {/* Center: Slide indicator */}
        <div className="flex items-center gap-1.5 bg-white/90 border border-stone-200 rounded-full px-3 py-1 shadow-2xs">
          <span className="text-xs font-semibold text-stone-800">
            Slide <span className="font-bold text-stone-950">{currentSlide}</span> <span className="text-stone-400 font-normal">/</span> {totalSlides}
          </span>
        </div>

        {/* Right: Quick actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onReset}
            title="Reset workspace and start fresh"
            className="p-1.5 sm:px-2.5 sm:py-1 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70 rounded-lg transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            aria-label="Reset workspace"
          >
            <RotateCcw className="w-3.5 h-3.5 text-stone-600" />
            <span className="hidden md:inline text-xs font-medium text-stone-600">Reset</span>
          </button>

          <button
            type="button"
            onClick={onOpenSummary}
            title="Open full learning activity summary"
            className="p-1.5 sm:px-3 sm:py-1 text-xs font-semibold text-amber-950 bg-amber-100/80 hover:bg-amber-200 border border-amber-300/80 rounded-lg shadow-2xs transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-amber-900" />
            <span className="hidden sm:inline">Brief Summary</span>
          </button>
        </div>
      </div>

      {/* Visual progress line */}
      <div className="w-full bg-stone-200/60 h-1">
        <div
          className="bg-amber-700 h-1 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
};
