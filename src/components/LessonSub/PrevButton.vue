<template>
    <el-button plain @click="switchPrevLesson"><i class="el-icon-back"></i>上一节</el-button>
</template>

<script>
    export default {
        methods: {
            switchPrevLesson() {
                var tmp = this.$store.state.currentLesson;
                tmp--;
                this.$store.commit("setCurrentLesson", tmp);
            }
        }
    }
</script>