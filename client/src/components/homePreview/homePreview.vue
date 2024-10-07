<template>
  <teleport to="body" v-if="dialog">
    <div class="overlay-container" v-bind="$attrs">
      <div class="overlay homePreview">
        <div
          class="overlay__scrim"
          @click="closeDialog"
          :class="{ active: loaded }"
        />
        <div class="overlay__action">
          <buttonDefault
            class="dialog-save"
            variant="tonal"
            height="32"
            @click="applyOption"
          >
            <span>적용</span>
          </buttonDefault>
          <buttonDefault
            class="dialog-close"
            variant="tonal"
            height="32"
            :icon="true"
            @click="closeDialog"
          >
            <icon class="icon_16"><x /></icon>
          </buttonDefault>
        </div>

        <div class="overlay__page"></div>

        <buttonDefault
          variant="filled"
          height="46"
          :icon="true"
          class="overlay__prev"
          v-if="index > 0"
          @click="prevPage"
        >
          <icon class="icon_18"><caretLeft /></icon>
        </buttonDefault>

        <buttonDefault
          variant="filled"
          height="46"
          :icon="true"
          class="overlay__next"
          v-if="index < homeStyleOptions.length - 1"
          @click="nextPage"
        >
          <icon class="icon_18"><caretRight /></icon>
        </buttonDefault>

        <div class="overlay__content" :class="{ active: loaded }">
          <div class="dialog">
            <div class="dialog-content">
              <!-- homePreview -->
              <div id="homePreview">
                <div id="grid-container">
                  <div class="home-component">
                    <div
                      class="image"
                      :style="{
                        top: topValue,
                        left: leftValue,
                        width: widthValue,
                        height: heightValue,
                      }"
                    >
                      <img
                        class="object-fit_cover"
                        :src="`${imageBaseUrl}homePreview.webp`"
                        />
                    </div>
                    <!-- backgroundImage: `url('${imageBaseUrl}previewImage.webp')`, -->
                    <component
                      v-if="homeStyleOptions[this.index].value"
                      :is="homeStyleOptions[this.index].value"
                      :options="homeDefaultedOptions"
                      :color="homeStyleOptions[this.index].color"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { mapGetters } from "vuex";
import "@/components/homePreview/homePreview.scss";
import compHome from "@/services/compHome.js";

export default {
  components: {
    ...compHome,
  },
  props: {
    dialog: { type: Boolean },
    index: { type: Number, default: 0 }, // index prop 추가
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    ...mapGetters({
      homeDefaultedOptions: "getHomeDefaultedOptions",
      homeStyleOptions: "getHomeStyleOptions",
    }),

    topValue() {
      return `calc(${this.homeStyleOptions[this.index].item.y} * 8.33%)`;
    },
    leftValue() {
      return `calc(${this.homeStyleOptions[this.index].item.x} * 12.5%)`;
    },
    widthValue() {
      return `calc(${this.homeStyleOptions[this.index].item.w} * 12.5%)`;
    },
    heightValue() {
      return `calc(${this.homeStyleOptions[this.index].item.h} * 8.33%)`;
    },

    imageBaseUrl() {
      // 환경 변수를 사용하여 이미지 기본 URL 반환
      return import.meta.env.VITE_IMAGE_BASE_URL || "https://default.url/";
    },
  },

  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1);
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialog", false);
    },
    prevPage() {
      if (this.index > 0) {
        this.$emit("update:index", this.index - 1); // 이전 페이지로 이동
      }
    },
    nextPage() {
      if (this.index < this.homeStyleOptions.length - 1) {
        this.$emit("update:index", this.index + 1); // 다음 페이지로 이동
      }
    },
    applyOption() {
      // 부모의 selectOption 메서드를 호출하면서 현재 스타일 옵션을 전달
      this.$emit("applyOption", this.homeStyleOptions[this.index]);
      // 다이얼로그 닫기
      this.closeDialog();
    },
  },
};
</script>

<style scoped></style>
