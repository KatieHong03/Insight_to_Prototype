export type PrototypeType = 'page' | 'website' | 'game' | 'webapp';

export interface LearnerData {
  // Step 1: Clarify what you are building
  prototypeType: PrototypeType;
  prototypeTitle: string;

  // Step 2: Who is this for?
  user: string;

  // Step 3: What does the user need?
  userNeed: string;

  // Step 4: What should the prototype include?
  requirements: string;

  // Step 5: What are the constraints?
  constraints: string;

  // Step 7: AI Prototype Prompt (editable)
  generatedPrompt: string;
  isPromptEdited: boolean;

  // Step 9: Critique
  critiqueChecklist: Record<string, boolean>;
  critiqueChange: string;

  // Step 10: Revision categories
  revisionKeep: string;
  revisionChange: string;
  revisionAdd: string;
  revisionRemove: string;
  revisionVerify?: string;
  generatedRevisionPrompt: string;
  isRevisionPromptGenerated: boolean;

  // Step 11: Reflection
  reflectAiWell: string;
  reflectAiMisunderstood: string;
  reflectUserDecided: string;
}

export const CRITIQUE_QUESTIONS = [
  { id: 'user_clear', label: 'Is it clear who this is designed for?' },
  { id: 'user_need', label: "Does it address the user's main need?" },
  { id: 'easy_find', label: 'Are the most important features or information easy to find?' },
  { id: 'main_action', label: 'Is the main action clear?' },
  { id: 'unrequested', label: 'Did AI add anything you did not ask for?' },
  { id: 'assumptions', label: 'Did AI make unsupported assumptions?' },
  { id: 'missing', label: 'Is anything important missing?' },
  { id: 'design_purpose', label: 'Does the visual design support the purpose?' },
];
