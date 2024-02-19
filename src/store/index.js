import { createStore } from "vuex";

const store = createStore({
    state: {
        lessonNum: 0,
        lessonNames: [],
        currentLesson: 0,
        lessonInfos: []
    },
    mutations: {
        setLessonNum(state, lessonNum) {
            state.lessonNum = lessonNum
        },
        setLessonNames(state, lessonNames) {
            state.lessonNames = lessonNames
        },
        setCurrentLesson(state, currentLesson) {
            state.currentLesson = currentLesson
        },
        setLessonInfos(state, lessonInfos) {
            state.lessonInfos = lessonInfos
        },
    }
})

export default store;