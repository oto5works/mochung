<template>
  <div class="flicking">
    <button class="flicking-prev button-defaulted" @click="prevButtonClick">
      <icon><caretLeft /></icon>
    </button>
    <button class="flicking-next button-defaulted" @click="nextButtonClick">
      <icon><caretRight /></icon>
    </button>

    <YoutubeVue3
      style="display: none"
      ref="youtube"
      :videoid="youtubeId"
      :loop="0"
      :width="0"
      :height="0"
      :autoplay="0"
    />
    <Flicking
      ref="flicking"
      class="flicking-item"
      :options="{ moveType: 'snap', bound: true }"
      :plugins="plugins"
    >
      <buttonFlicking
        class="fnOption-item"
        v-for="(item, index) in audiosOptions"
        :key="index"
        :class="{ selected: item.value === audiosData.url }"
        :font1="item.title"
        :font2="item.info"
      >
        <div class="audio-controls">
          <buttonDefault @click="playYoutube(item.value)" class="icon_40 --border-radius_24">
            <icon class="icon_16" v-if="youtubeUrl === item.value"><pause /></icon>
            <icon class="icon_16" v-else><play /></icon>
          </buttonDefault>
        </div>

        <div
          class="fnOption-image"
          :style="{
            backgroundImage: `url('https://jwpggit.github.io/storage/image/moInv/${item.value}.webp')`,
          }"
        ></div>
        <div @click="selectOption(item)" class="fnOption-select"></div>
      </buttonFlicking>

      <template #viewport>
        <span class="flicking-arrow-prev"></span>
        <span class="flicking-arrow-next"></span>
        <div class="flicking-pagination"></div>
      </template>
    </Flicking>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Flicking from "@egjs/vue3-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import { YoutubeVue3 } from "youtube-vue3";
import "@/modules/functions/fnOption.scss";

import caretLeft from "@/components/icon/caretLeft.vue";
import caretRight from "@/components/icon/caretRight.vue";
import play from "@/components/icon/play.vue";
import pause from "@/components/icon/pause.vue";

export default {
  components: {
    Flicking,
    YoutubeVue3,
    caretLeft,
    caretRight,
    play,
    pause,
  },
  props: {
    url: { type: String },
  },
  data: function () {
    return {
      plugins: [new Arrow(), new Pagination({ type: "bullet" })],
      youtubeUrl: "",
      youtubeId: "",
    };
  },
  computed: {
    ...mapGetters({
      audiosOptions: "getAudiosOptions",
      audiosData: "getAudiosData",
    }),
  },
  mounted() {
    this.selectedIndex();
  },

  methods: {
    selectOption(option) {
this.audiosData.url = option.value
      this.selectedIndex();
    },
    async selectedIndex() {
      try {
        // 선택한 인덱스로 이동합니다.
        const selectedIndex = this.audiosOptions.findIndex(
          (option) => option.url === this.url
        );

        if (selectedIndex !== -1) {
          // Flicking의 moveTo 메서드를 사용하고 프라미스를 처리합니다.
          await this.$refs.flicking.moveTo(selectedIndex);
        } else {
          console.error("Selected index not found. 값이 없습니다.");
          // You can customize this message or take appropriate action.
        }
      } catch (error) {
        console.log("Flicking 에러"); // Add this line to log a generic error message
      }
    },
    prevButtonClick() {
      this.$el.querySelector(".flicking-arrow-prev").click();
    },
    nextButtonClick() {
      this.$el.querySelector(".flicking-arrow-next").click();
    },
    playYoutube(url) {
      if (url === this.youtubeId) {
        // 현재 재생 중인 동영상을 중지하고 상태를 초기화합니다.
        this.youtubeUrl = "";
        this.youtubeId = "";
        this.$refs.youtube.player.stopVideo();
      } else {
        if (
          url.match(/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/)
        ) {
          // 주어진 URL이 YouTube 링크인 경우, ID를 추출합니다.
          const match = url.match(
            /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/
          );
          this.youtubeId = match ? match[1] : "";
        } else {
          // 주어진 URL이 이미 YouTube ID인 경우, 그대로 사용합니다.
          this.youtubeId = url;
        }
        // YouTube URL을 설정하고 동영상을 재생합니다.
        this.youtubeUrl = url;
        this.$refs.youtube.player.playVideo();
      }
    },
  },
};
</script>

<style scoped>
.audio-controls {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}

</style>

<style scoped>
.fnOption-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-position: center;
  background-size: cover;
  z-index: 4;
}
</style>
