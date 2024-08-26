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
      :options="{ moveType: 'snap', bound: true, align: 'prev' }"
      :plugins="plugins"
    >
      <div
        class="fnOption-item"
        v-for="(item, index) in audiosOptions"
        :key="index"
      >
        <div
          class="fnOption-image"
          @click="selectOption(item)"
          :class="{ selected: item.value === audiosData.url }"
          :style="{
            backgroundImage: `url('https://www.moyo-studio.com/wp-content/uploads/2023/05/product4v8FINAL2WM.jpg')`,
          }"
        >
          <div class="audio-controls">
            <buttonDefault
              variant="tonal"
              height="40"
              :icon="true"
              @click="playYoutube(item.value, $event)"
              >
              <icon class="icon_16" v-if="youtubeUrl === item.value"
                ><pause
              /></icon>
              <icon class="icon_16" v-else><play /></icon>
            </buttonDefault>
          </div>
        </div>
        <!-- https://jwpggit.github.io/storage/image/moInv/${item.value}.webp -->

        <div class="display_flex flex-direction_column gap_16">
          <div
            class="display_flex align-items_center gap_4"
            @click="selectOption(item)"
          >
            <icon
              v-if="item.value === audiosData.url"
              class="icon_12 color_--mio-theme-color-primary"
              ><check
            /></icon>
            <div class="font-size_14 font-weight_700">{{ item.title }}</div>
          </div>
          <div class="font-size_12">{{ item.info }}</div>
        </div>
      </div>

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

  methods: {
    selectOption(option) {
      this.audiosData.url = option.value;
    },
    prevButtonClick() {
      this.$el.querySelector(".flicking-arrow-prev").click();
    },
    nextButtonClick() {
      this.$el.querySelector(".flicking-arrow-next").click();
    },
    playYoutube(url, event) {
      event.stopPropagation();

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
.fnOption-item {
  position: relative;
  width: 160px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-right: 8px;
  cursor: pointer;
}
.fnOption-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-position: center;
  background-size: cover;
}
.fnOption-image.selected {
  border: 1px solid rgb(var(--mio-theme-color-primary));
}
</style>
