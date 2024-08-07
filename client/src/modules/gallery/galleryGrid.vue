<template>
  <div>
    <div class="gallery_grid__wrap">
      <div
        class="gallery_grid__content"
        v-for="(image, imageIndex) in galleryData"
        :key="imageIndex"
        :style="{
          backgroundImage: 'url(' + image + ')',
          width: '100%',
          height: '100%',
        }"
        @click="dialog = true"
      >
        <imageViewer
          :image="files"
          v-if="dialog"
          :dialog="dialog"
          @update:dialog="dialog = $event"
          :current="(index = (currentPage - 1) * perPage + imageIndex)"
        />
        <div class="flex_center absolute_100 overlay_skeleton">
          <icon class="opacity_40"><images /></icon>
        </div>
      </div>
    </div>
    <div class="sp_4" />
    <div class="flex justify-content_center">
      <div
        class="flex align-items_center justify-content_space-between width_100 gap_12"
      >
        <div class="pagination">
          <button class="arrow" @click="prevPage" :disabled="currentPage === 1">
            <icon><caretLeft /></icon>
          </button>
          <div class="page">{{ currentPage }} / {{ totalPages }}</div>
          <button
            class="arrow"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            <icon><caretRight /></icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import images from "@/components/icon/images";
import caretLeft from "@/components/icon/caretLeft";
import caretRight from "@/components/icon/caretRight";

export default {
  components: {
    images,
    caretLeft,
    caretRight,
    imageViewer: defineAsyncComponent(() =>
      import("@/components/component/imageViewer")
    ),
  },
  props: {
    files: { type: [String, Array, Object] },
  },
  data: function () {
    return {
      dialog: false,
      index: null,
      perPage: 9,
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.files.length / this.perPage);
    },
    galleryData() {
      // Check if this.files is null, not defined, or contains any null value
      if (!this.files || this.files.some((file) => file === null)) {
        return [];
      }
      // Continue with the rest of the method
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.files.slice(startIndex, endIndex).map((item) => item.url);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
.gallery_grid__wrap {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}

.gallery_grid__content {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-size: cover;
  cursor: pointer;
  border-radius: var(--border-radius-12);
}

.gallery_grid__content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.button-icon svg {
  stroke-width: 8;
}
</style>
