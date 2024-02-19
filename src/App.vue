<template>
  <el-container id="totalContainer">
    <el-header>
      <WebTitle style="margin: auto;"/>
    </el-header>
    <el-container>
      <el-aside>
        <Directory/>
      </el-aside>
      <el-main>
        <Lesson/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import WebTitle from './components/WebTitle.vue';
  import Directory from './components/Directory.vue';
  import Lesson from './components/Lesson.vue';

  export default {
    components: {
      WebTitle,
      Directory,
      Lesson,
    },
    created() {
      const lessonNum = 4;
      const lessonNames = ["问候", "介绍", "欢迎", "赞美"];
      const currentLesson = 0;
      const lessonInfos = [
        {
          fragNum: 4,
          fragVideoNames: ["你好", "早上好", "你好吗", "很好谢谢"],
          fragDescriptions: ["你好", "早上好", "你好吗？", "很好，谢谢"]
        },
        {
          fragNum: 6,
          fragVideoNames: ["你叫什么名字", "你多大啦", "你家几口人", "你家在哪", "很高兴认识您", "志愿者问答"],
          fragDescriptions: ["你叫什么名字", "——你多大啦？\n——我26岁", "——你家有几口人？\n——5口人，爸爸，妈妈，姐姐，哥哥和我", "——你家在哪？\n——我家在新疆乌鲁木齐", "很高兴认识您", "——你第一次来上海吗？\n——我是志愿者"]
        },
        {
          fragNum: 1,
          fragVideoNames: ["欢迎"],
          fragDescriptions: ["欢迎你到我家来玩，请坐"]
        },
        {
          fragNum: 1,
          fragVideoNames: ["房子漂亮"],
          fragDescriptions: ["你们的房子真漂亮，谢谢"]
        }
      ]
      this.$store.commit("setLessonNum", lessonNum);
      this.$store.commit("setLessonNames", lessonNames);
      this.$store.commit("setCurrentLesson", currentLesson);
      this.$store.commit("setLessonInfos", lessonInfos);
    }
  };
</script>

<style scoped>
  #totalContainer {
    width: 1000px;
    margin: auto;
  }
  .el-header {
    background-color: #000;
    color: #fff;
    font-size: 35px;
    line-height: 100px;
    margin-bottom: 20px;
    height: 100px !important;
  }
  
  .el-aside {
    color: #333;
    width: 200px !important;
  }
</style>