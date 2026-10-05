import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Layout, Layers, Sparkles, Check } from 'lucide-react';

interface Slide4RequirementsProps {
  user: string;
  userNeed: string;
  requirements: string;
  onChangeRequirements: (val: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

interface PageBlueprint {
  title: string;
  tagline: string;
  description: string;
  sections: string[];
}

export const Slide4Requirements: React.FC<Slide4RequirementsProps> = ({
  user,
  userNeed,
  requirements,
  onChangeRequirements,
  onBack,
  onContinue,
}) => {
  const [activeTab, setActiveTab] = useState<'blueprints' | 'blocks'>('blueprints');
  const [appliedIndex, setAppliedIndex] = useState<number | null>(null);

  const pageBlueprints: PageBlueprint[] = [
    {
      title: 'High-Volume K–12 District Onboarding Page',
      tagline: 'Built for district HR clearing substitute teachers & back-to-school rushes',
      description: 'Features fast turnaround benchmarks, ATS integrations, and district volume procurement.',
      sections: [
        'Hero section with 24–48h substitute turnaround guarantee and "Request District Demo" primary CTA',
        'State Department of Education (DOE) & FBI fingerprinting statutory compliance matrix',
        'Frontline Education and PowerSchool ATS integration badge showcase',
        'Interactive substitute rush onboarding timeline vs. paper processing',
        'Public school district volume licensing tier guide and Board approval RFP kit',
        'PBSA Accreditation seal and FCRA legal safety compliance disclaimers',
      ],
    },
    {
      title: 'Student Safety & Continuous Arrest Monitoring Page',
      tagline: 'Built for risk managers and school boards prioritizing ongoing protection',
      description: 'Features real-time arrest alerts, automated re-screening, and tiered staff checks.',
      sections: [
        'Safety-first hero headline with student protection pledge and "Book Board Briefing" CTA',
        '24/7 continuous arrest & citation notification dashboard preview',
        'Tiered vetting comparison: Certified Teachers vs. Bus Drivers vs. Parent Volunteers',
        'Mobile candidate disclosure portal (completed in under 3 minutes with zero paperwork)',
        'District audit pass-rate metrics and Superintendent endorsement quotes',
        'State-specific disqualification offense checklist and adverse action legal workflow',
      ],
    },
    {
      title: 'Charter Network & Higher Ed Staffing Page',
      tagline: 'Built for multi-campus charter networks and university staff recruitment',
      description: 'Features scalable faculty screening, student-worker checks, and transparent tiers.',
      sections: [
        'Modern tech-forward hero with instant self-service pilot access',
        'Multi-campus staff management dashboard with role-based permissions',
        'Degree verification and multi-jurisdiction criminal registry checks',
        'Flexible transparent pricing calculator with monthly or annual billing',
        'SOC2 Type II, FERPA compliance certifications, and 99.9% uptime SLA',
        'Dedicated district account executive onboarding support guarantee',
      ],
    },
  ];

  const buildingBlocks = [
    'Hero section with district turnaround guarantee & "Schedule Demo" CTA',
    'State DOE & FBI fingerprint compliance verification matrix',
    'Frontline Education & PowerSchool HRIS integration showcase',
    '24–48h substitute pool rush onboarding benchmark comparison',
    'Real-time arrest alerts & automated annual re-screening preview',
    'Multi-tier vetting checklist: Teachers, Aides, Bus Drivers & Volunteers',
    'Candidate mobile self-service portal (paperless consent & disclosures)',
    'District volume pricing tier calculator & purchase order billing terms',
    'PBSA Accredited & FCRA compliance trust badges',
    'Clear FAQ addressing substitute teacher clearance and state audits',
  ];

  const handleApplyBlueprint = (blueprint: PageBlueprint, idx: number) => {
    const formatted = blueprint.sections.map((s, i) => `${i + 1}. ${s}`).join('\n');
    onChangeRequirements(formatted);
    setAppliedIndex(idx);
    setTimeout(() => setAppliedIndex(null), 2000);
  };

  return (
    <div className="bg-white border border-stone-200/90 rounded-2xl shadow-xs overflow-hidden p-5 sm:p-6 lg:p-7 space-y-3.5 flex flex-col justify-between">
      {/* Header */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
          Step 4: Define Prototype Requirements
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 tracking-tight">
          Turn insights into requirements
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-normal">
          “Decide what sections the landing page needs to convince education HR buyers.”
        </p>
      </div>

      {/* Subtle Context Line */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-1 p-2.5 bg-[#FAF8F5] border border-stone-200 rounded-xl text-xs text-stone-700">
        <div>
          <span className="font-bold text-stone-900 uppercase tracking-wider mr-1.5">Target Buyer:</span>
          <span className="font-medium text-stone-800">{user.trim() || 'K–12 District HR Director'}</span>
        </div>
        <div>
          <span className="font-bold text-stone-900 uppercase tracking-wider mr-1.5">Key Need:</span>
          <span className="font-medium text-stone-800 line-clamp-1">{userNeed.trim() || 'Fast 24-48h turnaround, compliance, volume pricing'}</span>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="req-input" className="block text-xs sm:text-sm font-semibold text-stone-900">
            What sections and features should the landing page include?
          </label>
          <span className="text-[11px] text-stone-500">Pick from blueprints below or write custom</span>
        </div>
        <textarea
          id="req-input"
          rows={3}
          value={requirements}
          onChange={(e) => onChangeRequirements(e.target.value)}
          placeholder="e.g., 1. Hero with 24-48h substitute rush guarantee...&#10;2. State DOE and FBI fingerprint compliance matrix...&#10;3. Frontline/PowerSchool integrations..."
          className="w-full p-3 text-xs sm:text-sm text-stone-900 bg-[#FAF8F5]/80 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-700 transition-all placeholder:text-stone-400 leading-relaxed shadow-inner"
        />
      </div>

      {/* Page Building Examples in Light Gray */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <Layout className="w-3.5 h-3.5 text-stone-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
              Education Landing Page Blueprints:
            </span>
          </div>

          {/* Toggle Tab */}
          <div className="flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200">
            <button
              type="button"
              onClick={() => setActiveTab('blueprints')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'blueprints'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Full Page Blueprints
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('blocks')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'blocks'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Building Blocks
            </button>
          </div>
        </div>

        {/* Tab 1: Full Page Blueprints in Light Gray */}
        {activeTab === 'blueprints' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5">
            {pageBlueprints.map((bp, idx) => (
              <div
                key={bp.title}
                className="p-3 bg-stone-100/90 border border-stone-200/90 rounded-xl flex flex-col justify-between space-y-2 hover:bg-stone-200/60 transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-amber-900 uppercase">
                      Blueprint {idx + 1}
                    </span>
                    <span className="text-[10px] font-semibold text-stone-500 bg-stone-200 px-1.5 py-0.2 rounded">
                      {bp.sections.length} Sections
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 font-serif leading-tight line-clamp-1">
                    {bp.title}
                  </h4>
                  <p className="text-[11px] text-stone-600 line-clamp-2 leading-snug">
                    {bp.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleApplyBlueprint(bp, idx)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-2 text-[11px] font-semibold text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg shadow-2xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  {appliedIndex === idx ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Applied to Requirements ✓</span>
                    </>
                  ) : (
                    <>
                      <Layers className="w-3 h-3 text-stone-600" />
                      <span>Apply this Blueprint</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Individual Building Blocks in Light Gray */}
        {activeTab === 'blocks' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-36 overflow-y-auto pr-1">
            {buildingBlocks.map((block) => (
              <button
                key={block}
                type="button"
                onClick={() => {
                  const current = requirements.trim();
                  const updated = current ? `${current}\n- ${block}` : `- ${block}`;
                  onChangeRequirements(updated);
                }}
                className="p-2 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200/90 rounded-lg text-left transition-colors cursor-pointer flex items-center justify-between gap-1.5"
              >
                <span className="line-clamp-1">+ {block}</span>
              </button>
            ))}
          </div>
        )}
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
          <span>Continue</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
