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
        <div class="overlay__action">
          <buttonDefault
            v-if="save"
            class="dialog-save"
            variant="tonal"
            height="32"
            @click="saveImage"
            ><icon class="icon_16"><save /></icon
            ><span>Image Save</span></buttonDefault
          >
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

       <div class="overlay__page" v-if="index !== 0"><span>{{ index + 1 }}</span><span>/</span><span>{{ image.length }}</span></div>

        <buttonDefault
          variant="filled"
          height="46"
          :icon="true"
          class="overlay__prev"
          v-if="index !== 0"
          @click="prevPage"
          ><icon class="icon_18"><caretLeft /></icon
        ></buttonDefault>

        <buttonDefault
          variant="filled"
          height="46"
          :icon="true"
          class="overlay__next"
          v-if="index !== 0"
          @click="nextPage"
          :class="{ disabled: index === image.length }"
          ><icon class="icon_18"><caretRight /></icon
        ></buttonDefault>

        <div class="overlay__content" :class="{ active: loaded }">
          <div class="dialog">
            <div class="dialog-content">
              <img :src="currentImageUrl" alt="Image" />

              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import "@/components/file/fileViewer.scss";
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
      loaded: false,
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
