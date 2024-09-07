<template>
  <div class="youtubePreview">
    <div class="videoPlayer" v-if="videoPreview" v-html="videoPreview"></div>
  </div>
</template>
<script>
import '@/components/youtube/youtube.scss'
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
      const youtubeMatch = this.modelValue.match(
        /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?feature=player_embedded&v=|\/user\/\S+?\/\S*?v=)|\/watch\?v=|\/embed\/|\/watch\?feature=player_embedded&v=|\/user\/\S+?\/\S*?v=)([^#\&\?]*).*/
      );
      if (youtubeMatch && youtubeMatch[1].length === 11) {
        return `<iframe class="videoIframe" src="https://www.youtube.com/embed/${youtubeMatch[1]}" frameborder="0" allowfullscreen></iframe>`;
      } else {
        return '<div class="youtube-message"><span>유효하지 않은 YouTube URL입니다. 다시 입력해주세요.</span></div>';
      }
    }
    return '<div class="youtube-message"><span>비디오가 등록되지 않았습니다. 주소를 입력해주세요.</span></div>';
  },
},

};
</script>
