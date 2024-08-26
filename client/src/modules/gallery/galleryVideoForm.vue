<template>
  <div>
    <youtubeForm v-model="videoGallery.url" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import youtubeForm from "@/components/youtube/youtubeForm.vue";

export default {
  components: { youtubeForm },
  computed: {
    ...mapGetters({
      videoGallery: "getVideoGalleryData",
    }),
  },
};
</script>
