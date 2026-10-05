import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import { LearnerData } from './types';
import { buildAIPrompt, buildRevisionPrompt } from './utils/promptGenerator';
import { TopHeader } from './components/TopHeader';
import { SummaryModal } from './components/SummaryModal';

// Slides
import { Slide1Welcome } from './components/slides/Slide1Welcome';
import { SlideClarifyWhatBuilding } from './components/slides/SlideClarifyWhatBuilding';
import { Slide2User } from './components/slides/Slide2User';
import { Slide3Need } from './components/slides/Slide3Need';
import { Slide4Requirements } from './components/slides/Slide4Requirements';
import { Slide5Constraints } from './components/slides/Slide5Constraints';
import { Slide6BriefReview } from './components/slides/Slide6BriefReview';
import { Slide7Prompt } from './components/slides/Slide7Prompt';
import { Slide8BuildV1 } from './components/slides/Slide8BuildV1';
import { Slide9Critique } from './components/slides/Slide9Critique';
import { Slide10Revision } from './components/slides/Slide10Revision';
import { Slide11Reflect } from './components/slides/Slide11Reflect';

const STORAGE_KEY = 'from_insight_to_prototype_state_v6';
const SLIDE_STORAGE_KEY = 'from_insight_to_prototype_slide_v6';

const initialBlankData: LearnerData = {
  prototypeType: 'page',
  prototypeTitle: 'B2B landing page for education sector to buy background check services',
  user: 'K–12 School District HR Director',
  userNeed: 'They need to understand turnaround times, compliance mandates, costs, and whether the service fits hiring rushes before opening day.',
  requirements: '1. Hero section with 24–48h substitute turnaround guarantee and "Request District Demo" primary CTA\n2. State Department of Education (DOE) & FBI fingerprinting statutory compliance matrix\n3. Frontline Education and PowerSchool ATS integration badge showcase\n4. Public school district volume licensing tier guide and Board approval RFP kit\n5. PBSA Accreditation seal and FCRA legal safety compliance disclaimers',
  constraints: 'Do not invent state Department of Education laws or statutory turnaround metrics. Do not fabricate unverified PBSA accreditation or FERPA compliance badges. Clearly mark district pricing tiers and SLA guarantees as [NEEDS VERIFICATION].',
  generatedPrompt: '',
  isPromptEdited: false,
  critiqueChecklist: {
    user_clear: true,
    user_need: true,
    easy_find: false,
    main_action: true,
    unrequested: false,
    assumptions: false,
    missing: false,
    design_purpose: true,
  },
  critiqueChange: 'Move turnaround times directly below the headline and remove any unverified statistics from the hero section.',
  revisionKeep: 'Overall visual layout, two-column hero structure, and typography hierarchy.',
  revisionChange: 'Move turnaround times directly beneath the hero headline instead of burying them in the footer.',
  revisionAdd: 'A clear link to request district-specific pricing and substitute teacher onboarding timeline.',
  revisionRemove: 'The unsupported 99.8% compliance claim.',
  generatedRevisionPrompt: '',
  isRevisionPromptGenerated: false,
  reflectAiWell: '',
  reflectAiMisunderstood: '',
  reflectUserDecided: '',
};

export default function App() {
  const [data, setData] = useState<LearnerData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return initialBlankData;
  });

  const [currentSlide, setCurrentSlide] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(SLIDE_STORAGE_KEY);
      if (saved !== null) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 1 && parsed <= 12) return parsed;
      }
    } catch {
      // ignore
    }
    return 1;
  });

  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [data]);

  // Sync slide & scroll top
  useEffect(() => {
    try {
      localStorage.setItem(SLIDE_STORAGE_KEY, currentSlide.toString());
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSlide]);

  // Keep generated prompt in sync unless user explicitly customized it
  useEffect(() => {
    if (!data.isPromptEdited || !data.generatedPrompt) {
      const freshPrompt = buildAIPrompt({
        prototypeType: data.prototypeType,
        prototypeTitle: data.prototypeTitle,
        user: data.user,
        userNeed: data.userNeed,
        requirements: data.requirements,
        constraints: data.constraints,
      });
      setData((prev) => ({
        ...prev,
        generatedPrompt: freshPrompt,
      }));
    }
  }, [data.prototypeType, data.prototypeTitle, data.user, data.userNeed, data.requirements, data.constraints, data.isPromptEdited]);

  // Keyboard navigation (Left / Right arrow keys when not typing)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowRight' && currentSlide < 12) {
        if (currentSlide === 2 && !data.prototypeTitle.trim()) {
          return; // blocked if slide 2 empty
        }
        if (currentSlide === 3 && !data.user.trim()) {
          return; // blocked if slide 3 empty
        }
        setCurrentSlide((s) => s + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 1) {
        setCurrentSlide((s) => s - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, data.prototypeTitle, data.user]);

  // Slide navigation helpers
  const goToSlide = (n: number) => {
    if (n >= 1 && n <= 12) {
      setCurrentSlide(n);
    }
  };

  const nextSlide = () => {
    if (currentSlide < 12) {
      setCurrentSlide((s) => s + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide((s) => s - 1);
    }
  };

  // Build AI Prompt (Transition to Slide 8)
  const handleBuildPromptAction = () => {
    const prompt = buildAIPrompt({
      prototypeType: data.prototypeType,
      prototypeTitle: data.prototypeTitle,
      user: data.user,
      userNeed: data.userNeed,
      requirements: data.requirements,
      constraints: data.constraints,
    });
    setData((prev) => ({
      ...prev,
      generatedPrompt: prompt,
      isPromptEdited: false,
    }));
    setCurrentSlide(8);
  };

  // Build Revision Prompt Action
  const handleBuildRevisionPromptAction = () => {
    const rev = buildRevisionPrompt({
      revisionKeep: data.revisionKeep,
      revisionChange: data.revisionChange,
      revisionAdd: data.revisionAdd,
      revisionRemove: data.revisionRemove,
    });
    setData((prev) => ({
      ...prev,
      generatedRevisionPrompt: rev,
      isRevisionPromptGenerated: true,
    }));
  };

  // Reset / Start new prototype without blocked window.confirm
  const handleStartNewPrototype = () => {
    setIsResetModalOpen(true);
  };

  const confirmResetWorkspace = () => {
    setData({
      prototypeType: 'page',
      prototypeTitle: '',
      user: '',
      userNeed: '',
      requirements: '',
      constraints: '',
      generatedPrompt: '',
      isPromptEdited: false,
      critiqueChecklist: {},
      critiqueChange: '',
      revisionKeep: '',
      revisionChange: '',
      revisionAdd: '',
      revisionRemove: '',
      generatedRevisionPrompt: '',
      isRevisionPromptGenerated: false,
      reflectAiWell: '',
      reflectAiMisunderstood: '',
      reflectUserDecided: '',
    });
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(SLIDE_STORAGE_KEY);
    } catch {
      // ignore
    }
    setCurrentSlide(1);
    setIsResetModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Header with Progress (1 / 12) */}
      <TopHeader
        currentSlide={currentSlide}
        totalSlides={12}
        onGoToSlide={goToSlide}
        onOpenSummary={() => setIsSummaryOpen(true)}
        onReset={handleStartNewPrototype}
      />

      {/* Main Single-Slide Container */}
      <main className="flex-1 max-w-5xl xl:max-w-6xl w-full mx-auto px-4 sm:px-6 py-2.5 sm:py-4 flex flex-col justify-center">
        {/* Slide 1 — Welcome */}
        {currentSlide === 1 && (
          <Slide1Welcome onContinue={nextSlide} />
        )}

        {/* Slide 2 — Step 1: Clarify What You're Building */}
        {currentSlide === 2 && (
          <SlideClarifyWhatBuilding
            prototypeType={data.prototypeType}
            prototypeTitle={data.prototypeTitle}
            onChangeType={(val) => setData((prev) => ({ ...prev, prototypeType: val }))}
            onChangeTitle={(val) => setData((prev) => ({ ...prev, prototypeTitle: val }))}
            onBack={prevSlide}
            onContinue={nextSlide}
          />
        )}

        {/* Slide 3 — Step 2: Define the User */}
        {currentSlide === 3 && (
          <Slide2User
            prototypeType={data.prototypeType}
            prototypeTitle={data.prototypeTitle}
            user={data.user}
            onChangeUser={(val) => setData((prev) => ({ ...prev, user: val }))}
            onBack={prevSlide}
            onContinue={nextSlide}
          />
        )}

        {/* Slide 4 — Step 3: Define the User Need */}
        {currentSlide === 4 && (
          <Slide3Need
            user={data.user}
            userNeed={data.userNeed}
            onChangeNeed={(val) => setData((prev) => ({ ...prev, userNeed: val }))}
            onBack={prevSlide}
            onContinue={nextSlide}
          />
        )}

        {/* Slide 5 — Step 4: Define Prototype Requirements */}
        {currentSlide === 5 && (
          <Slide4Requirements
            user={data.user}
            userNeed={data.userNeed}
            requirements={data.requirements}
            onChangeRequirements={(val) => setData((prev) => ({ ...prev, requirements: val }))}
            onBack={prevSlide}
            onContinue={nextSlide}
          />
        )}

        {/* Slide 6 — Step 5: Define Constraints */}
        {currentSlide === 6 && (
          <Slide5Constraints
            constraints={data.constraints}
            onChangeConstraints={(val) => setData((prev) => ({ ...prev, constraints: val }))}
            onBack={prevSlide}
            onContinue={nextSlide}
          />
        )}

        {/* Slide 7 — Step 6: Review Your Prototype Brief */}
        {currentSlide === 7 && (
          <Slide6BriefReview
            data={data}
            onEditSection={(slideNum) => setCurrentSlide(slideNum)}
            onBack={prevSlide}
            onBuildPrompt={handleBuildPromptAction}
          />
        )}

        {/* Slide 8 — Step 7: Build Your AI Prompt */}
        {currentSlide === 8 && (
          <Slide7Prompt
            promptText={data.generatedPrompt}
            onChangePrompt={(val) => setData((prev) => ({ ...prev, generatedPrompt: val, isPromptEdited: true }))}
            onEditBrief={() => setCurrentSlide(7)}
            onBack={prevSlide}
            onContinue={nextSlide}
          />
        )}

        {/* Slide 9 — Step 8: Build Version 1 */}
        {currentSlide === 9 && (
          <Slide8BuildV1
            onBack={prevSlide}
            onContinue={nextSlide}
          />
        )}

        {/* Slide 10 — Step 9: Critique the Prototype */}
        {currentSlide === 10 && (
          <Slide9Critique
            checklist={data.critiqueChecklist}
            onToggleItem={(id) => setData((prev) => ({
              ...prev,
              critiqueChecklist: {
                ...prev.critiqueChecklist,
                [id]: !prev.critiqueChecklist[id],
              },
            }))}
            critiqueChange={data.critiqueChange}
            onChangeCritiqueChange={(val) => setData((prev) => ({ ...prev, critiqueChange: val }))}
            onBack={prevSlide}
            onContinue={nextSlide}
          />
        )}

        {/* Slide 11 — Step 10: Build a Revision Prompt */}
        {currentSlide === 11 && (
          <Slide10Revision
            data={data}
            onChangeField={(field, val) => setData((prev) => ({ ...prev, [field]: val }))}
            onBuildRevisionPrompt={handleBuildRevisionPromptAction}
            onBack={prevSlide}
            onContinue={nextSlide}
          />
        )}

        {/* Slide 12 — Step 11: Reflect */}
        {currentSlide === 12 && (
          <Slide11Reflect
            data={data}
            onChangeReflection={(field, val) => setData((prev) => ({ ...prev, [field]: val }))}
            onBack={prevSlide}
            onOpenSummary={() => setIsSummaryOpen(true)}
            onReturnHome={() => setCurrentSlide(1)}
            onResetWorkspace={handleStartNewPrototype}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="py-2.5 border-t border-stone-200/80 bg-white/70 text-xs text-stone-500 text-center">
        <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-1">
          <span className="font-serif text-stone-800">From Insight to Prototype</span>
          <span className="text-[11px] text-stone-500">
            Slide {currentSlide} of 12 · Use Back and Continue or keyboard ← → to navigate
          </span>
        </div>
      </footer>

      {/* Summary Brief Modal */}
      <SummaryModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
        data={data}
      />

      {/* Reset Confirmation In-App Modal (Works smoothly in all iframes) */}
      {isResetModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200/90 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-900">
              <RotateCcw className="w-6 h-6 text-amber-800" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Reset Workspace?
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                This will clear all your answers, generated prompts, and critique notes, and return you to Slide 1.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsResetModalOpen(false)}
                className="px-5 py-2.5 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmResetWorkspace}
                className="px-5 py-2.5 text-sm font-bold text-white bg-stone-900 hover:bg-stone-800 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                Yes, Reset Workspace
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
