<template>
  <div>
    <div>
      video_id : <input type="text" v-model="url" /><br />
      <button @click="togglePlayPause">{{ isPlaying ? 'Pause' : 'Play' }}</button>
    </div>
    <YoutubeVue3 style="display: none;" ref="youtube" :videoid="videoId" loop="1" :width="0" :height="0" :autoplay="fnAutoPlay"
      @ended="onEnded" @paused="onPaused" @played="onPlayed"/>
  </div>
</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'

export default {
  data() {
    return {
      url: '',
      fnAutoPlay: 1,
      isPlaying: false
    }
  },
  computed: {
    videoId() {
      // YouTube 동영상 ID 추출을 위한 정규표현식
      const match = this.url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/);
      
      // 매치된 동영상 ID 반환 또는 빈 문자열
      return match ? match[1] : '';
    }
  },
  components: {
    YoutubeVue3
  },
  methods: {
    togglePlayPause() {
      if (this.isPlaying) {
        this.pauseCurrentVideo();
      } else {
        this.playCurrentVideo();
      }
    },
    playCurrentVideo() {
      this.$refs.youtube.player.playVideo();
      this.isPlaying = true;
    },
    pauseCurrentVideo() {
      this.$refs.youtube.player.pauseVideo();
      this.isPlaying = false;
    },
    onEnded() {
      console.log("## OnEnded")
      this.isPlaying = false;
    },
    onPaused() {
      console.log("## OnPaused")
      this.isPlaying = false;
    },
    onPlayed() {
      console.log("## OnPlayed")
      this.isPlaying = true;
    }
  }
}
</script>
