<template>
  <div>
    <textField label="주소 입력" v-model="audiosValue.url" />
    <template v-if="videoId">
      <YoutubeVue3
        ref="youtube"
        :videoid="videoId"
        :loop="0"
        :width="0"
        :height="0"
        :autoplay="0"
      />
    </template>
  </div>
</template>
<script>
import { YoutubeVue3 } from "youtube-vue3";

export default {
  components: {
    YoutubeVue3,
  },
  props: {
    audiosValue: { type: Object },
  },
  computed: {
    videoId() {
      // Check if url exists before extracting videoId
      if (this.audiosValue.url) {
        // YouTube 동영상 ID 추출을 위한 정규표현식
        const match = this.audiosValue.url.match(
          /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/
        );
        // 매치된 동영상 ID 반환 또는 빈 문자열
        return match ? match[1] : "";
      } else {
        return ""; // Return an empty string if url is not available
      }
    },
  },
};
</script>
