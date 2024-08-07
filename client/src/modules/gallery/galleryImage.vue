<template>
  <component :is="image.style" :files="processedImageFiles" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    grid: defineAsyncComponent(() =>
      import("@/modules/gallery/galleryGrid.vue")
    ),
    slideshow: defineAsyncComponent(() =>
      import("@/modules/gallery/gallerySlideshow.vue")
    ),
    swipe: defineAsyncComponent(() =>
      import("@/modules/gallery/gallerySwipe.vue")
    ),
    thumb: defineAsyncComponent(() =>
      import("@/modules/gallery/galleryThumb.vue")
    ),
  },
  props: {
    image: { type: [Object] },
  },
  computed: {
    processedImageFiles() {
      if (this.image.files.length === 0) {
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
        return this.image.files;
      }
    },
  },
};
</script>
