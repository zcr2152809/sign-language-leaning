<template>
    <h1 style="font-size: 30px !important; margin-bottom: 20px;">{{ lessonTitle }}</h1>
    <PrevButton v-if="currentLesson!=0"/>
    <NextButton v-if="currentLesson!=lessonNum-1"/>
    <hr/>
</template>

<script>
    import PrevButton from './PrevButton.vue';
    import NextButton from './NextButton.vue';
    import { mapState } from 'vuex';

    export default {
        components: {
            PrevButton,
            NextButton
        },
        props: ["lessonTitle"],
        computed: {
            ...mapState(["lessonNum", "currentLesson"])
        }
    }
</script>