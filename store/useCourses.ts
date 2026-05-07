import { create } from 'zustand'

interface CourseState {
    number: number
    updateBears: (newBears: number) => void
}

export const useCourse = create<CourseState>((set, get) => ({
    number: 0,
    increasePopulation: () => set((state) => ({ number: state.number + 1 })),
    removeAllBears: () => set({ number: 0 }),
    updateBears: (newBears) => set({ number: newBears }),
}))