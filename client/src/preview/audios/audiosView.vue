<template>
  <buttonAlt class="audios" variant="audios" @click="togglePlay">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <rect
        class="eq-bar eq-bar--1"
        :class="{ 'eq-bar--paused': !isPlaying }"
        x="4"
        y="4"
        width="3.7"
        height="8"
        fill="currentColor"
      />
      <rect
        class="eq-bar eq-bar--2"
        :class="{ 'eq-bar--paused': !isPlaying }"
        x="10.2"
        y="4"
        width="3.7"
        height="16"
        fill="currentColor"
      />
      <rect
        class="eq-bar eq-bar--3"
        :class="{ 'eq-bar--paused': !isPlaying }"
        x="16.3"
        y="4"
        width="3.7"
        height="11"
        fill="currentColor"
      />
    </svg>
    <template v-if="videoId">
      <YoutubeVue3
        style="display: none"
        ref="youtube"
        :videoid="videoId"
        :loop="0"
        :width="0"
        :height="0"
        :autoplay="audiosData.fnAutoPlay"
        @played="onPlayed"
        @paused="onPaused"
      />
    </template>
  </buttonAlt>
</template>

<script>
import { mapGetters } from "vuex";
import { YoutubeVue3 } from "youtube-vue3";
import buttonAlt from "@/preview/components/buttonAlt.vue";

export default {
  components: {
    buttonAlt,
    YoutubeVue3,
  },
  data() {
    return {
      isPlaying: false,
    };
  },
  computed: {
    ...mapGetters({
      audiosData: "getAudiosData",
    }),
    videoId() {
      // Check if url exists before extracting videoId
      if (this.audiosData.url) {
        // YouTube 동영상 ID 추출을 위한 정규표현식
        const match = this.audiosData.url.match(
          /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/
        );
        // 매치된 동영상 ID 반환 또는 빈 문자열
        return match ? match[1] : "";
      } else {
        return ""; // Return an empty string if url is not available
      }
    },
  },
  methods: {
    togglePlay() {
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
    onPaused() {
      console.log("## OnPaused");
      this.isPlaying = false;
    },
    onPlayed() {
      console.log("## OnPlayed");
      this.isPlaying = true;
    },
  },
};
</script>

<style scoped>
.eq-bar {
  transform: scale(1, -1) translate(0, -24px);
  animation-play-state: running;
}

.eq-bar--paused {
  animation-play-state: paused;
}

.eq-bar--1 {
  animation-name: short-eq;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
}

.eq-bar--2 {
  animation-name: tall-eq;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-delay: 0.17s;
}

.eq-bar--3 {
  animation-name: short-eq;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-delay: 0.34s;
}
.play-animation {
  animation: slide-in-out 3s ease-in-out;
}
.audios svg {
  width: 1em;
  height: 1em;
}
@keyframes short-eq {
  0% {
    height: 8px;
  }

  50% {
    height: 4px;
  }

  100% {
    height: 8px;
  }
}

@keyframes tall-eq {
  0% {
    height: 16px;
  }

  50% {
    height: 6px;
  }

  100% {
    height: 16px;
  }
}
</style>
