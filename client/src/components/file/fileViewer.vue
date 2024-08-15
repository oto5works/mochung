<!-- imageViewer.vue -->
<template>
  <teleport to="body" v-if="dialog">
    <div class="overlay-container" v-bind="$attrs">
      <!-- $attrs를 여기에 바인딩 -->
      <div class="overlay fileViewer">
        <div
          class="overlay__scrim"
          @click="closeDialog"
          :class="{ active: loaded }"
        />
        <div class="overlay__content" :class="{ active: loaded }">
          <div class="dialog">
            <buttonDefault
              class="dialog-close"
              variant="tonal"
              height="32"
              :icon="true"
              @click="closeDialog"
            >
              <icon class="icon_16"><x /></icon>
            </buttonDefault>

            <div class="dialog-content">
              <img :src="currentImageUrl" alt="Image" />
              <div v-if="save" class="save flex justify-content_center width_100">
            <button
              class="button-defaulted height_40 pa_24 gap_18 --border-radius_20"
              @click="saveImage"
            >
              <icon><save /></icon><span>이미지 저장</span>
            </button>
          </div>

              <div class="dialog-page">{{ index + 1 }} / {{ image.length }}</div>

              <div class="dialog-pagination" v-if="index !== 0">
                <button class="arrow" @click="prevPage">
                  <icon><caretLeft /></icon>
                </button>


                <button
                  class="arrow"
                  @click="nextPage"
                  :disabled="index === image.length"
                >
                  <icon><caretRight /></icon>
                </button>
              </div>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import '@/components/file/fileViewer.scss'
import save from "@/components/icon/save";
import caretLeft from "@/components/icon/caretLeft";
import caretRight from "@/components/icon/caretRight";

export default {
  components: { caretLeft, caretRight, save },
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    save: {
      type: Boolean,
      default: true,
    },
    image: { type: [String, Array, Object] },
    current: { type: Number, default: 0 },
  },
  data: function () {
    return {
      index: this.current,
    };
  },
  computed: {
    currentImageUrl() {
      if (Array.isArray(this.image)) {
        return this.image[this.index] ? this.image[this.index].url : "";
      } else if (typeof this.image === "object") {
        return this.image.url || "";
      } else {
        return "";
      }
    },
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialog", false);
    },
    prevPage() {
      if (this.index > 0) {
        this.index--;
      }
    },
    nextPage() {
      if (this.index < this.image.length - 1) {
        this.index++;
      }
    },
    saveImage() {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        // 모바일에서는 사용자에게 이미지를 저장할 수 있는 방법을 안내합니다.
        alert("이미지를 길게 눌러 저장하세요.");
      } else {
        // 데스크톱 브라우저에서는 이미지를 저장합니다.
        const link = document.createElement("a");
        link.href = this.currentImageUrl;
        link.download = "image.jpg";
        link.click();
      }
    },
  },
};
</script>