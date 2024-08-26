<template>
  <div class="heroFiles">
    <img v-if="isImage" class="object-fit_cover" :src="heroFiles.url" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      heroFiles: "getHeroFiles",
    }),
    isImage() {
      return this.heroFiles.file && this.heroFiles.file.type.startsWith("image/");
    },
  },
};
</script>
<style scoped>
.heroFiles {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.heroFiles .file-image,
.heroFiles img,
.heroFiles video {
  width: 100%;
  height: 100%;
}
.heroFiles .file-image {
  background-position: center center;
  background-size: cover !important; /* !important로 구체성을 높임 */
  background-attachment: fixed !important; /* !important로 구체성을 높임 */
}
</style>
