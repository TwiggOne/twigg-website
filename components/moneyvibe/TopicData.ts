// ================= TRAITS =================
export type TraitLevel = "Low" | "Medium" | "High" | "Unknown";

export type MoneyVibeTrait = {
  level: TraitLevel;
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

// ================= ARCHETYPES =================
export type MoneyVibeArchetype = {
  name: string;
  title: string;
  description: string;
  traits: string;
  icon: string;
  recognitionHook: string;
  youProbably: string[];
  whatThisMeans: string[];
  watchOutFor: string;
  score?: number; // present only for primary & secondary archetypes
};

export type MoneyVibeArchetypes = {
  primary: MoneyVibeArchetype;
  secondary: MoneyVibeArchetype;
  all_scores: Record<string, number>;
  all_archetypes: MoneyVibeArchetype[];
};

// ================= BOLLYWOOD VIBE =================
export type BollywoodVibe = {
  primary: {
    title: string;
    character: string;
    imageUrl: string;
    personality: string;
    moneyWise: string;
  };
};

// ================= CRICKET VIBE =================
export type CricketVibe = {
  primary: {
    title: string;
    player: string;
    imageUrl: string;
    personality: string;
    moneyWise: string;
  };
};

// ================= FULL RESPONSE =================
export type MoneyVibeEvaluationResponse = {
  success: boolean;
  traits: MoneyVibeTraits;
  archetypes: MoneyVibeArchetypes;
  bollywoodVibe: BollywoodVibe;
  cricketVibe: CricketVibe;
};

// ================= QUESTIONS =================
export type ApiQuestion = {
  questionId: string;
  text: string;
  direction: "Positive" | "Negative";
  weight: number;
};

// ================= SECTIONS =================
export type ApiSection = {
  id: string;
  title: string;
  description: string;
  majorImage: string;
  minorImage: string;
  questions: ApiQuestion[];
};

// ================= API RESPONSE =================
export type ApiResponse = {
  sections: ApiSection[];
};

// ================= STACK HELPERS =================
export type StackItem =
  | { type: "topic"; section: ApiSection }
  | { type: "question"; sectionId: string; question: ApiQuestion };

export const buildStack = (sections: ApiSection[]): StackItem[] => {
  const stack: StackItem[] = [];

  sections.forEach((section) => {
    // topic intro first
    stack.push({
      type: "topic",
      section,
    });

    // then its questions
    section.questions.forEach((q) => {
      stack.push({
        type: "question",
        sectionId: section.id,
        question: q,
      });
    });
  });

  return stack;
};

// ================= HELPER: TOP TRAITS =================
export const getTopTraits = (
  traits: MoneyVibeTraits,
  limit = 3
): string[] => {
  return Object.entries(traits)
    .slice(0, limit)
    .map(([traitName, traitData]) => `${traitData.level} ${traitName}`);
};

// ================= AXIOS (for API call) =================
import axios from "axios";

export const fetchMoneyVibeEvaluation = async (
  userId: string
): Promise<MoneyVibeEvaluationResponse> => {
  const response = await axios.get<MoneyVibeEvaluationResponse>(
    `/api/moneyvibe/evaluation?userId=${userId}`
  );
  return response.data;
};
