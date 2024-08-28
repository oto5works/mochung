<template>
  <component :is="imageGallery.style" :files="processedImageFiles" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    grid: defineAsyncComponent(() =>
      import("@/preview/gallery/galleryModules/grid.vue")
    ),
    slideshow: defineAsyncComponent(() =>
      import("@/preview/gallery/galleryModules/slideshow.vue")
    ),
    swipe: defineAsyncComponent(() =>
      import("@/preview/gallery/galleryModules/swipe.vue")
    ),
    thumb: defineAsyncComponent(() =>
      import("@/preview/gallery/galleryModules/thumb.vue")
    ),
  },
  computed: {
    ...mapGetters({
      imageGallery: "getImageGalleryData",
    }),
    processedImageFiles() {
      if (this.imageGallery.files.length === 0) {
        return [
          { file: null, url: null },
          { file: null, url: null },
          { file: null, url: null },
          { file: null, url: null },
          { file: null, url: null },
          { file: null, url: null },
          { file: null, url: null },
          { file: null, url: null },
          { file: null, url: null },
        ];
      } else {
        return this.imageGallery.files;
      }
    },
  },
};
</script>
