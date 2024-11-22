import { create } from "zustand"
import { QuizScore } from "./types"

export const quizScore = create<QuizScore>((set) => ({
    score: 0,
    addScore: () => set((state) => ({score: state.score + 1})),
    removeScore: () => set({score: 0})
}))