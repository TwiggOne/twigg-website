// types.ts
export type ApiQuestion = {
  questionId: string
  text: string
  direction: 'Positive' | 'Negative'
  weight: number
}

export type ApiSection = {
  id: string
  title: string          // description text
  trait: string          // topic name
  majorImage: string
  minorImage: string
  questions: ApiQuestion[]
}

export type ApiResponse = {
  sections: ApiSection[]
}
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


