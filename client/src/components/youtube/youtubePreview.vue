<template>
  <div class="youtubePreview">
    <div class="videoPlayer" v-if="videoPreview" v-html="videoPreview"></div>
    <div v-else class="youtube-message">
      <span>비디오가 등록되지 않았습니다. 주소를 입력해주세요.</span>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    modelValue: {
      type: String,
      default: null,
    },
  },
  computed: {
    videoPreview() {
      if (this.modelValue) {
        // Check if the URL is a YouTube video URL
        const youtubeMatch = this.modelValue.match(
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

<style scoped>
.youtubePreview {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 9 / 5;
  background-color: rgb(var(--mio-theme-color-on-background));
}
.youtubePreview span {
  color: rgb(var(--mio-theme-color-background));
  font-size: 14px;
}
</style>

<style>
.videoPlayer {
  position: relative; /* absolute는 부모가 relative일 때 부모를 따라간다. */
  width: 100%;
  padding-bottom: 56.25%;
}
.videoIframe {
  position: absolute;
  width: 100%; /* 부모에 맞게 꽉 채운다. */
  height: 100%;
}
</style>
