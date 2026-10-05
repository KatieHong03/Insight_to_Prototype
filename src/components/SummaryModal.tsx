import React, { useState } from 'react';
import { X, Copy, Check, FileText } from 'lucide-react';
import { LearnerData, CRITIQUE_QUESTIONS } from '../types';

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: LearnerData;
}

export const SummaryModal: React.FC<SummaryModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const formatLabel = 
    data.prototypeType === 'page' ? 'Single Landing Page' :
    data.prototypeType === 'website' ? 'Multi-Page Website' :
    data.prototypeType === 'game' ? 'Interactive Game / Simulation' :
    'Web Application / Tool';

  const markdownContent = `# FROM INSIGHT TO PROTOTYPE: LEARNER BRIEF SUMMARY
Workflow: CLARIFY → DEFINE → STRUCTURE → GENERATE → CRITIQUE → REVISE

---

## 1. PROTOTYPE FORMAT & BRIEF
- **Prototype Format:** ${formatLabel}
- **Project Goal:** ${data.prototypeTitle || '[None provided]'}
- **Target User:** ${data.user || '[None provided]'}
- **User Need:** ${data.userNeed || '[None provided]'}
- **Prototype Requirements:** ${data.requirements || '[None provided]'}
- **Constraints & Guardrails:** ${data.constraints || '[None provided]'}

---

## 2. AI PROTOTYPE PROMPT
\`\`\`text
${data.generatedPrompt || '[Prompt not yet generated]'}
\`\`\`

---

## 3. CRITIQUE
- **Criteria Checked:** ${Object.values(data.critiqueChecklist).filter(Boolean).length} of ${CRITIQUE_QUESTIONS.length}
- **Most Important Change Identified:**
${data.critiqueChange || '[None provided]'}

---

## 4. REVISION DIRECTIVES
- **KEEP:** ${data.revisionKeep || '[None provided]'}
- **CHANGE:** ${data.revisionChange || '[None provided]'}
- **ADD:** ${data.revisionAdd || '[None provided]'}
- **REMOVE:** ${data.revisionRemove || '[None provided]'}

\`\`\`text
${data.generatedRevisionPrompt || '[Revision prompt not yet generated]'}
\`\`\`

---

## 5. REFLECTION: WHO MADE THE DECISIONS?
1. **What did AI do well?**
${data.reflectAiWell || '[None provided]'}

2. **What did AI misunderstand or assume?**
${data.reflectAiMisunderstood || '[None provided]'}

3. **What important decision did YOU make?**
${data.reflectUserDecided || '[None provided]'}

---
*"AI generated the prototype. You directed the work."*
`;

  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white border border-stone-200/90 rounded-3xl max-w-4xl xl:max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-stone-100 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100/90 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-amber-900" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
                Learning Activity Brief Summary
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Your complete 12-step learning journey from research insights to prototype revision
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Viewer */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-7 text-sm sm:text-base text-stone-800">
          {/* Section 1: Brief */}
          <div className="space-y-2.5">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-900">
              1. Prototype Format & Brief (Clarify & Define)
            </h4>
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 space-y-2.5 text-xs sm:text-sm leading-relaxed">
              <p><strong className="text-stone-900 font-semibold">Format:</strong> {formatLabel}</p>
              <p><strong className="text-stone-900 font-semibold">Project Goal:</strong> {data.prototypeTitle || '—'}</p>
              <p><strong className="text-stone-900 font-semibold">Target User:</strong> {data.user || '—'}</p>
              <p><strong className="text-stone-900 font-semibold">User Need:</strong> {data.userNeed || '—'}</p>
              <p><strong className="text-stone-900 font-semibold">Requirements:</strong> {data.requirements || '—'}</p>
              <p><strong className="text-stone-900 font-semibold">Constraints:</strong> {data.constraints || '—'}</p>
            </div>
          </div>

          {/* Section 2: Prompt */}
          <div className="space-y-2.5">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-900">
              2. Executable AI Prompt
            </h4>
            <pre className="bg-[#FAF8F5] text-stone-800 p-5 rounded-2xl border border-stone-200/80 text-xs sm:text-sm font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed shadow-inner">
              {data.generatedPrompt || '(Prompt not generated yet)'}
            </pre>
          </div>

          {/* Section 3: Critique */}
          <div className="space-y-2.5">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-900">
              3. Critique of Version 1
            </h4>
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 space-y-2 text-xs sm:text-sm leading-relaxed">
              <p><strong className="text-stone-900 font-semibold">Criteria Audited:</strong> {Object.values(data.critiqueChecklist).filter(Boolean).length} of {CRITIQUE_QUESTIONS.length}</p>
              <p><strong className="text-stone-900 font-semibold">Key Change:</strong> {data.critiqueChange || '—'}</p>
            </div>
          </div>

          {/* Section 4: Revision */}
          <div className="space-y-2.5">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-900">
              4. Revision Instructions
            </h4>
            <pre className="bg-[#FAF8F5] text-stone-800 p-5 rounded-2xl border border-stone-200/80 text-xs sm:text-sm font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed shadow-inner">
              {data.generatedRevisionPrompt || '(Revision prompt not generated yet)'}
            </pre>
          </div>

          {/* Section 5: Reflect */}
          <div className="space-y-2.5">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-900">
              5. Human Agency Reflection
            </h4>
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 space-y-2.5 text-xs sm:text-sm leading-relaxed">
              <p><strong className="text-stone-900 font-semibold">1. AI did well:</strong> {data.reflectAiWell || '—'}</p>
              <p><strong className="text-stone-900 font-semibold">2. AI misunderstood:</strong> {data.reflectAiMisunderstood || '—'}</p>
              <p><strong className="text-stone-900 font-semibold">3. Decision made myself:</strong> {data.reflectUserDecided || '—'}</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-stone-100 bg-[#FAF8F5] flex items-center justify-between gap-3">
          <div className="text-xs text-stone-500 hidden sm:block">
            Tip: Copy the markdown summary to share with your team or save in your notes.
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              type="button"
              onClick={handleCopyMarkdown}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-700 text-white'
                  : 'bg-amber-100 hover:bg-amber-200 text-stone-900 border border-amber-300/80'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>COPIED MARKDOWN!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-amber-800" />
                  <span>COPY AS MARKDOWN</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
