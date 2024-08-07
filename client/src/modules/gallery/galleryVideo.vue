<template>
  <div>
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
import videos from "@/components/icon/videos.vue";

export default {
  components: { videos },
  props: {
    video: { type: Object },
  },
  computed: {
    videoPreview() {
      if (this.video.url) {
        // Check if the URL is a YouTube video URL
        const youtubeMatch = this.video.url.match(
          /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?feature=player_embedded&v=|\/user\/\S+?\/\S*?v=)|\/watch\?v=|\/embed\/|\/watch\?feature=player_embedded&v=|\/user\/\S+?\/\S*?v=)([^#\&\?]*).*/
        );
        if (youtubeMatch && youtubeMatch[1].length === 11) {
          return `<iframe class="videoIframe" src="https://www.youtube.com/embed/${youtubeMatch[1]}" frameborder="0" allowfullscreen></iframe>`;
        }

        // Check if the URL is a Vimeo video URL
        const vimeoMatch = this.video.url.match(/vimeo\.com\/(\d+)/);
        if (vimeoMatch) {
          return `<iframe class="videoIframe" src="https://player.vimeo.com/video/${vimeoMatch[1]}" frameborder="0" allowfullscreen></iframe>`;
        }
      }
      return ""; // Return an empty string if the URL is not valid
    },
  },
};
</script>
