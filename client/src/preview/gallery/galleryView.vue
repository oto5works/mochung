<template>
  <section v-if="galleryData.image.fnImage || galleryData.video.fnVideo">
    <div id="previewGallery">
      <div class="width_100 --font-size_24 font-weight_700 text-align_center">
        {{ galleryData.title }}
      </div>

      <div class="width_100" v-if="galleryData.image.fnImage">
        <span class="--font-size_11 font-weight_700 pa_8">IMAGE GALLERY</span>
        <div class="sp_40" />
        <galleryImage :image="galleryData.image" />
      </div>

      <div class="width_100" v-if="galleryData.video.fnVideo">
        <span class="--font-size_11 font-weight_700 pa_8">VIDEO GALLERY</span>
        <div class="sp_40" />
        <galleryVideo />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import "@/preview/gallery/gallery.scss";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    galleryImage: defineAsyncComponent(() =>
      import("@/preview/gallery/galleryImage.vue")
    ),
    galleryVideo: defineAsyncComponent(() =>
      import("@/preview/gallery/galleryVideo.vue")
    ),
  },
  computed: {
    ...mapGetters({
      galleryData: "getGalleryData",
    }),
  },
};
</script>

<style scoped>

</style>
