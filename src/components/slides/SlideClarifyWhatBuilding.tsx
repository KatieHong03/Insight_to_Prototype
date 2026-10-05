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
  }[] = [
    {
      id: 'page',
      icon: <FileText className="w-5 h-5 text-amber-800" />,
      title: 'A Page (Landing Page)',
      subtitle: 'A focused standalone web page built to explain a solution, capture leads, or pitch a service to buyers.',
    },
    {
      id: 'website',
      icon: <Globe className="w-5 h-5 text-amber-800" />,
      title: 'A Multi-Page Website',
      subtitle: 'A multi-page site with navigation, product tiers, legal compliance guides, district testimonials, and contact.',
    },
    {
      id: 'game',
      icon: <Gamepad2 className="w-5 h-5 text-amber-800" />,
      title: 'A Game / Simulation',
      subtitle: 'An interactive decision game, scenario simulator, or educational gamified training activity.',
    },
    {
      id: 'webapp',
      icon: <LayoutDashboard className="w-5 h-5 text-amber-800" />,
      title: 'A Web App / Tool',
      subtitle: 'A functional interactive tool, workflow manager, administrative dashboard, or pricing calculator.',
    },
  ];

  const presets = [
    {
      type: 'page' as PrototypeType,
      text: 'K–12 District Rush: Clear 100+ Substitute Teachers in 24–48h',
    },
    {
      type: 'page' as PrototypeType,
      text: 'Audit-Proof District Compliance: 100% State DOE & FBI Fingerprinting',
    },
    {
      type: 'page' as PrototypeType,
      text: '24/7 Automated Staff Safety & Continuous Arrest Monitoring',
    },
    {
      type: 'page' as PrototypeType,
      text: 'Board-Approved RFP Volume Pricing for Districts & Consortia',
    },
    {
      type: 'page' as PrototypeType,
      text: 'Higher Ed Campus Safety: Student Worker & Adjunct Clearance',
    },
  ];

  const isValid = Boolean(prototypeTitle.trim());

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 space-y-4 flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-1.5">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
          Step 1: Clarify What You Are Building
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
          What are you trying to build?
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal">
          “Before defining the user, clarify whether your prototype is a single page, a full website, an interactive game, or a digital tool.”
        </p>
      </div>

      {/* 4 Prototype Type Cards in Light Gray */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block">
          Choose Prototype Format:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {typeOptions.map((opt) => {
            const isSelected = prototypeType === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChangeType(opt.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-amber-50/70 border-amber-400 ring-2 ring-amber-500/20 shadow-xs'
                    : 'bg-stone-100/80 hover:bg-stone-200/60 border-stone-200 text-stone-800'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0">
                        {opt.icon}
                      </div>
                      <span className="font-serif font-bold text-sm text-stone-900">
                        {opt.title}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-snug">
                    {opt.subtitle}
                  </p>
                </div>
                {isSelected && (
                  <span className="text-[10px] font-bold text-amber-900 bg-amber-200/70 px-2 py-0.5 rounded-md self-start">
                    Selected
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Description Input */}
      <div className="space-y-1.5">
        <label htmlFor="project-title" className="block text-xs sm:text-sm font-semibold text-stone-900">
          Describe what this landing page is selling to education buyers:
        </label>
        <textarea
          id="project-title"
          rows={2}
          value={prototypeTitle}
          onChange={(e) => onChangeTitle(e.target.value)}
          placeholder="e.g., B2B landing page for education sector to buy background check services..."
          className="w-full p-3 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
        />
      </div>

      {/* Preset Chips in Light Gray */}
      <div className="space-y-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block">
          Education HR Landing Page Angles (Click to Use):
        </span>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.text}
              type="button"
              onClick={() => {
                onChangeType(preset.type);
                onChangeTitle(preset.text);
              }}
              className="px-3 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors cursor-pointer text-left"
            >
              + {preset.text}
            </button>
          ))}
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
          onClick={onContinue}
          disabled={!isValid}
          className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl shadow-xs transition-all ${
            isValid
              ? 'bg-amber-100 hover:bg-amber-200 text-stone-900 border border-amber-300/80 cursor-pointer active:scale-[0.98]'
              : 'bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed'
          }`}
        >
          <span>Continue to Define User</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
