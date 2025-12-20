/* ================= TRAITS ================= */
export type MoneyVibeTrait = {
  raw_score: number;
  max_score: number;
  normalized_score: number;
  level: "Low" | "Medium" | "High" | "Unknown";
};

export type MoneyVibeTraits = {
  Planning: MoneyVibeTrait;
  Risk: MoneyVibeTrait;
  Impulse: MoneyVibeTrait;
  Learning: MoneyVibeTrait;
  Avoidance: MoneyVibeTrait;
  Generosity: MoneyVibeTrait;
  Calmness: MoneyVibeTrait;
};

/* ================= ARCHETYPES ================= */
export type MoneyVibeArchetype = {
  name: string;
  score?: number; // optional because all_archetypes items don't have score
  title: string;
  description: string;
  traits: string;
  icon: string;
  color: string;
};


export type MoneyVibeArchetypes = {
  primary: MoneyVibeArchetype;
  secondary: MoneyVibeArchetype;
  all_scores: Record<string, number>;
    all_archetypes: MoneyVibeArchetype[];

};

/* ================= FULL RESPONSE ================= */
export type MoneyVibeEvaluationResponse = {
  success: boolean;
  traits: MoneyVibeTraits;
  archetypes: MoneyVibeArchetypes;
};

// ================= QUESTIONS =================
export type ApiQuestion = {
  questionId: string
  text: string
  direction: 'Positive' | 'Negative'
  weight: number
}

// ================= SECTIONS =================
export type ApiSection = {
  id: string
  title: string
  description: string
  majorImage: string
  minorImage: string
  questions: ApiQuestion[]
}

// ================= API RESPONSE =================
export type ApiResponse = {
  sections: ApiSection[]
}
export const getTopTraits = (
  traits: MoneyVibeTraits,
  limit = 3
): string[] => {
  return Object.entries(traits)
    .slice(0, limit)
    .map(([traitName, traitData]) => {
      return `${traitData.level} ${traitName}`;
    });
};


export type StackItem =
  | {
      type: 'topic'
      section: ApiSection
    }
  | {
      type: 'question'
      sectionId: string
      question: ApiQuestion
    }
export const buildStack = (sections: ApiSection[]): StackItem[] => {
  const stack: StackItem[] = []

  sections.forEach((section) => {
    // topic intro first
    stack.push({
      type: 'topic',
      section,
    })

    // then its questions
    section.questions.forEach((q) => {
      stack.push({
        type: 'question',
        sectionId: section.id,
        question: q,
      })
    })
  })

  return stack
}
import axios from 'axios'


