<template>
  <button class="audio__wrap --border-radius_32" @click="togglePlayback" >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <rect class="eq-bar eq-bar--1" :class="{ 'eq-bar--paused': !isPlaying }" x="4" y="4" width="3.7" height="8"/>
      <rect class="eq-bar eq-bar--2" :class="{ 'eq-bar--paused': !isPlaying }" x="10.2" y="4" width="3.7" height="16"/>
      <rect class="eq-bar eq-bar--3" :class="{ 'eq-bar--paused': !isPlaying }" x="16.3" y="4" width="3.7" height="11"/>
    </svg>
  </button>
</template>

<script>
import { Howl } from 'howler';

export default {
  props: {
    url: { type: String },
    auto: { type: Boolean }
  },
  data() {
    return {
      isPlaying: false,
      sound: null
    };
  },
  mounted() {
    this.createHowlInstance();
  },
  watch: {
    url() {
      if (this.sound) {
        this.sound.unload();
      }
      this.createHowlInstance();
      this.isPlaying = false
    }
  },
  methods: {
    createHowlInstance(url = this.url) {
      this.sound = new Howl({
        src: [url],
        autoplay: this.auto,
        loop: true,
        onplay: () => {
          this.isPlaying = true;
        },
        onpause: () => {
          this.isPlaying = false;
        }
      });
    },
    togglePlayback() {
      if (this.isPlaying) {
        this.sound.pause();
      } else {
        this.sound.play();
      }
    }
  }
};
</script>


<style scoped>
.audio__wrap {
  position: sticky;
  top: 16px;
  left: 16px;
  width: 32px;
  height: 32px;
  background-color: var(--pc-pc-tr);
  color: var(--po-po-pc);
  border-width: 1px;
  border-style: var(--border-style);
  border-color: var(--po-po-pc);
  z-index: 3000;
}
.audio__wrap svg {
  width: 20px;
  height: 20px;
  fill: var(--po-po-pc);

}
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
