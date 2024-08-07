<!-- imageViewer.vue -->
<template>
  <teleport to="body">
    <div class="overlay-container" v-if="dialog">
      <div class="overlay fileViewer" :class="{ config: config }">
        <div class="overlay__scrim" @click="closeDialog" />
        <div class="overlay__content">
          <div class="dialog">
            <div class="dialog-content">
              <button class="close" @click="closeDialog">
                <icon><x /></icon>
              </button>
              <img v-if="!isVideoType" :src="currentImageUrl" alt="Image" />
              <video
                controls
                v-if="isVideoType"
                :src="currentImageUrl"
                class="video-preview"
              ></video>
              <div class="pagination" v-if="index !== 0">
                <button class="arrow" @click="prevPage">
                  <icon><caretLeft /></icon>
                </button>

                <div class="page">{{ index + 1 }} / {{ image.length }}</div>

                <button
                  class="arrow"
                  @click="nextPage"
                  :disabled="index === image.length"
                >
                  <icon><caretRight /></icon>
                </button>
              </div>
            </div>
          </div>

          <div v-if="save" class="save flex justify-content_center width_100">
            <button
              class="button-defaulted height_40 pa_24 gap_18 --border-radius_20"
              @click="saveImage"
            >
              <icon><save /></icon><span>이미지 저장</span>
            </button>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import '@/modules/file/fileViewer.scss'
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
    config: {
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
    isVideoType() {
      return this.image.file && this.image.file.type.startsWith("video/");
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
<style scoped>
.pagination {
  bottom: 0;
}
.close {
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
}
.pagination,
.close {
  position: absolute;
  color: white;
  filter: drop-shadow(0px 0px 1px black);
}
.video-preview {
  width: 100%;
  height: auto;
}
.save {
  position: absolute;
  bottom: -52px;
}
</style>
