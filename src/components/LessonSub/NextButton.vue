<template>
    <el-button plain @click="switchNextLesson">下一节<i class="el-icon-right"></i></el-button>
</template>

<script>
    export default {
        methods: {
            switchNextLesson() {
                var tmp = this.$store.state.currentLesson;
                tmp++;
                this.$store.commit("setCurrentLesson", tmp);
            }
        }
    }
</script>