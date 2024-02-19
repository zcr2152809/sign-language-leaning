<template>
    <el-header>
      目录
    </el-header>
    <el-menu active-text-color="#000">
        <DirectoryItem v-for="(lessonName, index) in lessonNames" :key="index" :lessonName="lessonName" :lessonNo="index"/>
    </el-menu>
            
</template>
  
<script>
  import DirectoryItem from './DirectorySub/DirectoryItem.vue';
  import { mapState } from 'vuex';

  export default {
    components: {
      DirectoryItem
    },
    computed: {
      ...mapState(["lessonNames"])
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #000;
    color: #fff;
    line-height: 40px;
    margin-bottom: 20px;
    height: 40px !important;
    font-weight: bold;
    margin-bottom: 0px;
  }
</style>