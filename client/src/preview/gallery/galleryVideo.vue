<template>
  <div class="pa_8">
    <youtubePreview v-model="videoGallery.url" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import youtubePreview from "@/components/youtube/youtubePreview.vue";

export default {
  components: { youtubePreview },
  computed: {
    ...mapGetters({
      videoGallery: "getVideoGalleryData",
    }),
  },
};
</script>
