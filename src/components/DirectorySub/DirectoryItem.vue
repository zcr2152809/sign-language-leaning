<template>
    <el-menu-item @click="changeLesson">{{ lessonName }}</el-menu-item>
  </template>
  
  <script>
  export default {
    props: ["lessonName", "lessonNo"],
    data() {
      return {
        hover: false
      };
    },
    methods: {
        changeLesson() {
            this.$store.commit("setCurrentLesson", this.lessonNo);
        }
    }
  }
  </script>


  