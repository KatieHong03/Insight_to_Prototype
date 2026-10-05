import React from 'react';
import { ArrowRight, ArrowLeft, FileText, Globe, Gamepad2, LayoutDashboard, Sparkles } from 'lucide-react';
import { PrototypeType } from '../../types';

interface SlideClarifyWhatBuildingProps {
  prototypeType: PrototypeType;
  prototypeTitle: string;
  onChangeType: (type: PrototypeType) => void;
  onChangeTitle: (title: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const SlideClarifyWhatBuilding: React.FC<SlideClarifyWhatBuildingProps> = ({
  prototypeType,
  prototypeTitle,
  onChangeType,
  onChangeTitle,
  onBack,
  onContinue,
}) => {
  const typeOptions: {
    id: PrototypeType;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    example: string;
  }[] = [
    {
      id: 'page',
      icon: <FileText className="w-5 h-5 text-amber-800" />,
      title: 'A Page (Landing Page)',
      subtitle: 'A focused standalone web page built to explain a solution, capture leads, or pitch a service to buyers.',
      example: 'e.g., A B2B landing page for school district HR to evaluate and purchase background check tech services.',
    },
    {
      id: 'website',
      icon: <Globe className="w-5 h-5 text-amber-800" />,
      title: 'A Multi-Page Website',
      subtitle: 'A multi-page site with navigation, product tiers, legal compliance guides, district testimonials, and contact.',
      example: 'e.g., A complete corporate website with Solutions, State Compliance, Pricing, and District Portal.',
    },
    {
      id: 'game',
      icon: <Gamepad2 className="w-5 h-5 text-amber-800" />,
      title: 'A Game / Simulation',
      subtitle: 'An interactive decision game, scenario simulator, or educational gamified training activity.',
      example: 'e.g., An interactive game where learners roleplay as school HR making compliance & hiring decisions.',
    },
    {
      id: 'webapp',
      icon: <LayoutDashboard className="w-5 h-5 text-amber-800" />,
      title: 'A Web App / Tool',
      subtitle: 'A functional interactive tool, workflow manager, administrative dashboard, or pricing calculator.',
      example: 'e.g., An HR screening status dashboard with real-time arrest alerts and candidate progress tracking.',
    },
  ];

  const presets = [
    {
      type: 'page' as PrototypeType,
      text: 'Background check tech service landing page for education HR',
    },
    {
      type: 'page' as PrototypeType,
      text: 'High-volume substitute teacher clearance landing page',
    },
    {
      type: 'website' as PrototypeType,
      text: 'Multi-page education compliance & background screening portal',
    },
    {
      type: 'game' as PrototypeType,
      text: 'Interactive school district hiring & compliance decision game',
    },
    {
      type: 'webapp' as PrototypeType,
      text: 'District HR applicant screening & automated arrest alert dashboard',
    },
  ];

  const isValid = Boolean(prototypeTitle.trim());

  return (
    <div className="bg-white border border-stone-200/90 rounded-3xl shadow-xs overflow-hidden p-8 sm:p-12 lg:p-16 space-y-9 min-h-[560px] lg:min-h-[620px] flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-widest block">
          Step 1: Clarify What You Are Building
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
          What are you trying to build?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-normal">
          “Before defining the user, clarify whether your prototype is a single page, a full website, an interactive game, or a digital tool.”
        </p>
      </div>

      {/* 4 Prototype Type Cards in Light Gray */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-600 block">
          Choose Prototype Format:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {typeOptions.map((opt) => {
            const isSelected = prototypeType === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChangeType(opt.id)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-amber-50/70 border-amber-400 ring-2 ring-amber-500/20 shadow-xs'
                    : 'bg-stone-100/80 hover:bg-stone-200/60 border-stone-200 text-stone-800'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0">
                        {opt.icon}
                      </div>
                      <span className="font-serif font-bold text-base sm:text-lg text-stone-900">
                        {opt.title}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="text-xs font-bold text-amber-900 bg-amber-200/70 px-2.5 py-0.5 rounded-full">
                        Selected
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {opt.subtitle}
                  </p>
                </div>

                <div className="text-[11px] sm:text-xs text-stone-500 italic bg-white/70 p-2.5 rounded-xl border border-stone-200/60">
                  {opt.example}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Description Input */}
      <div className="space-y-3">
        <label htmlFor="project-title" className="block text-base sm:text-lg font-semibold text-stone-900">
          Briefly describe what this prototype is:
        </label>
        <textarea
          id="project-title"
          rows={2}
          value={prototypeTitle}
          onChange={(e) => onChangeTitle(e.target.value)}
          placeholder="e.g., A web page for a company that sells background check tech services for the education sector (for HR to buy in their service)..."
          className="w-full p-4 sm:p-5 text-base sm:text-lg text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
        />
      </div>

      {/* Preset Chips in Light Gray */}
      <div className="space-y-2 pt-1">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-600 block">
          Quick Example Presets:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {presets.map((preset) => (
            <button
              key={preset.text}
              type="button"
              onClick={() => {
                onChangeType(preset.type);
                onChangeTitle(preset.text);
              }}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-xl transition-colors cursor-pointer text-left"
            >
              + {preset.text}
            </button>
          ))}
        </div>
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
          disabled={!isValid}
          className={`inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold rounded-2xl shadow-xs transition-all ${
            isValid
              ? 'bg-amber-100 hover:bg-amber-200 text-stone-900 border border-amber-300/80 cursor-pointer active:scale-[0.98]'
              : 'bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed'
          }`}
        >
          <span>Continue to Define User</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
