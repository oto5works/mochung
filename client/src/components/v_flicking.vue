<template>
  <Flicking :options="{ defaultIndex: 0, circular: false }" :plugins="plugins">
    <div class="flicking__content" :class="{ 'active': item.value === selected }" v-for="(item, index) in options" :key="index">
      
      <div class="audio-controls" v-if="item.value.endsWith('.mp3')">
        <audio :src="item.value" ref="audioPlayers" :id="`audioPlayer_${index}`"></audio>
        <button @click="playAudio(index)" class="audio-button">
          <icon v-if="audioPlayingIndex === index" icon="Pause"><Pause /></icon>
          <icon v-else icon="Play"><Play /></icon>
        </button>

      </div>
      
      <div @click="selectOption(item)">
      <img class="slider_img --border-radius_16" :src="`https://jwpggit.github.io/storage/image/card/${item.folder}/${item.image}.png`"/>
      
      <div class="check justify-content_center align-items_center --border-radius_16" v-if="item.value === selected">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.13" d="M5 11L11 17L21 7">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/>
          </path>
        </svg>
      </div>

      <div v-if="item.like === true" class="slider_like">👍 인기 있는</div>
      <div class="sp_8"/>
      <h4 class="pa_8 --font-weight">{{ item.title }}</h4>
      <h5 class="pa_8">{{ item.exp }}</h5>


    </div>
    </div>

    <template #viewport>
      <span class="flicking-arrow-prev"><icon icon="CaretLeft"><CaretLeft /></icon></span>
      <span class="flicking-arrow-next"><icon icon="CaretRight"><CaretRight /></icon></span>
      <div class="flicking-pagination"></div>
    </template>
  </Flicking>
</template>

<script>
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import icon from '@/components/Icons/icon.vue';
import Check from '@/components/Icons/Check.vue';
import CaretLeft from '@/components/Icons/CaretLeft.vue';
import CaretRight from '@/components/Icons/CaretRight.vue';
import Play from '@/components/Icons/Play.vue'
import Pause from '@/components/Icons/Pause.vue'

export default {
  components: { icon, Check, CaretLeft, CaretRight ,Play, Pause },
  data() {
    return {
      plugins: [new Arrow(), new Pagination({ type: 'bullet' })],
      audioPlayingIndex: -1
    };
  },
  props: {
    options: { type: Array },
    selected: { type: String }
  },
  methods: {
    selectOption(option) {
      if (option.value === this.selected) {
        this.$emit('update:selected', null); // deselect the option
      } else {
        this.$emit('update:selected', option.value); // select the option
      }
    },
    playAudio(index) {
    const audioPlayers = document.querySelectorAll('audio');
    
    // Pause all other audio players
    audioPlayers.forEach((audioPlayer, i) => {
      if (i !== index && !audioPlayer.paused) {
        audioPlayer.pause();
      }
    });
    
    const audioPlayer = document.getElementById(`audioPlayer_${index}`);
    
    if (audioPlayer.paused) {
        audioPlayer.play();
        this.audioPlayingIndex = index; // Update the audioPlayingIndex
      } else {
        audioPlayer.pause();
        this.audioPlayingIndex = -1; // Reset the audioPlayingIndex
      }
  },
  }
};
</script>


<style scoped>
.audio-controls {
  position: absolute;
  top: 8px;
  left: 8px;
  color: white;
}
.audio-button {
  width: 32px;
  height: 32px;
}
.audio-button svg {
  width: 18px;
  height: 18px;
}
</style>
