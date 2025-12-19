import { UserAnswer } from "./MoneyMainContent"

const STORAGE_KEY = "money_vibe_progress"

export type PersistedState = {
  answers: UserAnswer[]
  activeIndex: number
}

export const saveProgress = (data: PersistedState) => {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export const loadProgress = (): PersistedState | null => {
  if (typeof window === "undefined") return null
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : null
}

export const clearProgress = () => {
  if (typeof window === "undefined") return
  localStorage.removeItem(STORAGE_KEY)
}
