<template>
    <LessonTitle :lessonTitle="lessonTitle"/>
    <LessonFrag v-for="(item, index) in lessonInfo.fragNum" :key="index" :lessonNo="currentLesson+1" :fragVideoName="lessonInfo.fragVideoNames[index]" :fragDescription="lessonInfo.fragDescriptions[index]"/>
    <PrevButton v-if="currentLesson!=0"/>
    <NextButton v-if="currentLesson!=lessonNum-1"/>
</template>

<script>
    import LessonTitle from './LessonSub/LessonTitle.vue';
    import LessonFrag from './LessonSub/LessonFrag.vue';
    import PrevButton from './LessonSub/PrevButton.vue';
    import NextButton from './LessonSub/NextButton.vue';
    import { mapState } from 'vuex';

    export default {
        components: {
            LessonTitle,
            LessonFrag,
            PrevButton,
            NextButton
        },
        computed: {
            ...mapState(["lessonNum", "lessonNames", "currentLesson", "lessonInfos"]),
            lessonTitle() {
                return this.lessonNames[this.currentLesson];
            },
            lessonInfo() {
                return this.lessonInfos[this.currentLesson];
            }
        }
    }
</script>