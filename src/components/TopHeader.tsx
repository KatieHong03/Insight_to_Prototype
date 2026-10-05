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
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Left: Brand & Home */}
        <button
          type="button"
          onClick={() => onGoToSlide(1)}
          className="flex items-center gap-3 text-stone-900 hover:text-amber-900 transition-colors text-left shrink-0 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-amber-100/80 border border-amber-300/60 flex items-center justify-center shrink-0 group-hover:bg-amber-200/80 transition-colors">
            <BookOpen className="w-4 h-4 text-amber-900 shrink-0" />
          </div>
          <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-stone-900">
            From Insight to Prototype
          </span>
        </button>

        {/* Center: Slide indicator */}
        <div className="flex items-center gap-2 bg-white/90 border border-stone-200 rounded-full px-4 py-1.5 shadow-2xs">
          <span className="text-xs sm:text-sm font-semibold text-stone-800">
            Slide <span className="font-bold text-stone-950">{currentSlide}</span> <span className="text-stone-400 font-normal">/</span> {totalSlides}
          </span>
        </div>

        {/* Right: Quick actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onReset}
            title="Reset workspace and start fresh"
            className="p-2 sm:px-3 sm:py-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70 rounded-xl transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            aria-label="Reset workspace"
          >
            <RotateCcw className="w-4 h-4 text-stone-600" />
            <span className="hidden md:inline text-xs font-medium text-stone-600">Reset</span>
          </button>

          <button
            type="button"
            onClick={onOpenSummary}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-800" />
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
