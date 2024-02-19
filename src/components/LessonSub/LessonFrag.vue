<template>
    <p style="white-space: pre-wrap; font-weight: bold;">{{ fragDescription }}</p>
    <ThisVideoPlayer :videoPath="videoPath"/>
    <hr/>
</template>

<script>
    import ThisVideoPlayer from './ThisVideoPlayer.vue';

    export default {
        props: ["fragVideoName", "fragDescription", "lessonNo"],
        computed: {
            videoPath() {
                return '/src/assets/fragVideo/lesson' + this.lessonNo + '/' + 'lesson' + this.lessonNo + '-' + this.fragVideoName + '.mp4'
            }
        },
        components: {
            ThisVideoPlayer
        }
    }
</script>



