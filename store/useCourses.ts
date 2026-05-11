import { CoursesCardHome } from '@/actios/courses'
import axios from 'axios'
import { create } from 'zustand'

interface CourseState {
    betsCourses: CoursesCardHome[]
    getCourses: () => Promise<void>
}

export const useCourse = create<CourseState>((set, get) => ({
    betsCourses: [],

    getCourses: async () => {

        if (get().betsCourses.length > 0) return
        const res = await axios.get('/api/course/coursesCardsHome')

        set({
            betsCourses: res.data.data
        })
    }
}))