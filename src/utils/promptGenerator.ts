import { LearnerData } from '../types';

export function buildAIPrompt(data: Pick<LearnerData, 'prototypeType' | 'prototypeTitle' | 'user' | 'userNeed' | 'requirements' | 'constraints'>): string {
  const typeLabel = 
    data.prototypeType === 'page' ? 'Single Landing Page' :
    data.prototypeType === 'website' ? 'Multi-Page Website' :
    data.prototypeType === 'game' ? 'Interactive Game / Simulation' :
    'Web Application / Tool';

  const projectTitle = data.prototypeTitle?.trim() || 'Tech service product experience';
  const targetUser = data.user.trim() || '[user input]';
  const userNeed = data.userNeed.trim() || '[user input]';
  const requirements = data.requirements.trim() || '[user input]';
  const constraints = data.constraints.trim() || '[user input]';

  return `Create a high-fidelity prototype based on the following requirements.

PROTOTYPE TYPE & GOAL

- Format: ${typeLabel}
- Project: ${projectTitle}

TARGET USER

${targetUser}

USER NEED

${userNeed}

PROTOTYPE REQUIREMENTS

${requirements}

CONSTRAINTS

${constraints}

DESIGN EXPECTATIONS

Create an experience that is:

- clear
- visually polished
- logically organized
- responsive
- accessible
- centered on the needs of the target user

Use appropriate visual hierarchy, navigation, interaction patterns, and calls to action.

Do not invent unsupported information, data, functionality, or claims.

If important information is uncertain, clearly label it:

[NEEDS VERIFICATION]

Prioritize solving the user’s problem over adding decorative features.`;
}

export function buildRevisionPrompt(data: Pick<LearnerData, 'revisionKeep' | 'revisionChange' | 'revisionAdd' | 'revisionRemove'>): string {
  const sections: string[] = [];

  if (data.revisionKeep.trim()) {
    sections.push(`KEEP:\n${data.revisionKeep.trim()}`);
  }

  if (data.revisionChange.trim()) {
    sections.push(`CHANGE:\n${data.revisionChange.trim()}`);
  }

  if (data.revisionAdd.trim()) {
    sections.push(`ADD:\n${data.revisionAdd.trim()}`);
  }

  if (data.revisionRemove.trim()) {
    sections.push(`REMOVE:\n${data.revisionRemove.trim()}`);
  }

  const feedbackBody = sections.length > 0
    ? sections.join('\n\n')
    : `CHANGE:\n[Specify adjustments here]`;

  return `Revise the existing prototype using the following feedback.

${feedbackBody}

Preserve elements that are already working.

Do not redesign parts of the prototype unless requested.

Do not introduce unsupported features or assumptions.`;
}
