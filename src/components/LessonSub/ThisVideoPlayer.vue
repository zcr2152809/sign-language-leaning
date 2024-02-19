<template>
    <video-player
      class="video-player vjs-big-play-centered"
      :src="videoPath"
      poster="/images/poster/oceans.png"
      crossorigin="anonymous"
      playsinline
      controls
      :volume="0.6"
      :height="320"
      :playback-rates="[0.7, 1.0, 1.5, 2.0]"
    />
  </template>
  
  <script>
  import { defineComponent, shallowRef } from 'vue';
  import { VideoPlayer } from '@videojs-player/vue';
  import 'video.js/dist/video-js.css';

  export default defineComponent({
    name: 'vue-basic-player-example',
    title: 'Basic player (Vue)',
    url: import.meta.url,
    components: {
      VideoPlayer
    },
    props: ["videoPath"],
    setup() {
      const player = shallowRef();
      const handleMounted = (payload) => {
        player.value = payload.player;
        console.log('Basic player mounted', payload);
      };

      const handleEvent = (log) => {
        console.log('Basic player event', log);
      };

      return { player, handleMounted, handleEvent };
    }
  });
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';

.video-player {
    background-color: $black;
    width: 100%;
    border-radius: 8px; // 添加圆角
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 添加阴影效果
    overflow: hidden; // 防止内容溢出圆角
    position: relative; // 设定相对定位

    video {
        width: 100%; // 确保视频宽度匹配播放器
        height: auto; // 保持视频的原始高度比例
    }

    .vjs-control-bar {
        background: rgba(0, 0, 0, 0.7); // 控制栏半透明背景
        bottom: 0; // 确保控制栏在底部
        padding: 8px; // 控制栏内边距
    }

    .vjs-big-play-button {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); // 居中大播放按钮
        width: 70px; // 大播放按钮宽度
        height: 70px; // 大播放按钮高度
        line-height: 70px; // 调整行高以垂直居中按钮图标
        border: none; // 移除边框
        border-radius: 35px; // 圆形按钮
        background-color: rgba(255, 255, 255, 0.8); // 半透明白色背景
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // 添加按钮阴影
        &:hover {
            background-color: rgba(255, 255, 255, 1); // 鼠标悬停时更不透明
        }
    }
}
</style>
