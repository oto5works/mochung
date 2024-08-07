<template>
  <div>
    <textField label="주소 입력" v-model="videoGallery.url" />
    <div
      v-if="!videoPreview"
      class="videoPreview flex_center flex-direction_column gap_8"
    >
      <div class="flex_center absolute_100 overlay_skeleton">
        <icon class="opacity_40"><videos /></icon>
      </div>
    </div>
    <div class="videoPlayer" v-if="videoPreview" v-html="videoPreview"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import videos from "@/components/icon/videos";

export default {
  components: { videos },
  computed: {
    ...mapGetters({
      videoGallery: "getVideoGalleryData",
    }),
    videoPreview() {
      if (this.videoGallery.url) {
        // Check if the URL is a YouTube video URL
        const youtubeMatch = this.videoGallery.url.match(
          /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?feature=player_embedded&v=|\/user\/\S+?\/\S*?v=)|\/watch\?v=|\/embed\/|\/watch\?feature=player_embedded&v=|\/user\/\S+?\/\S*?v=)([^#\&\?]*).*/
        );
        if (youtubeMatch && youtubeMatch[1].length === 11) {
          return `<iframe class="videoIframe" src="https://www.youtube.com/embed/${youtubeMatch[1]}" frameborder="0" allowfullscreen></iframe>`;
        }
      }
      return ""; // Return an empty string if the URL is not a valid YouTube URL
    },
  },
};
</script>
