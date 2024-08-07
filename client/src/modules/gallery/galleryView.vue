<template>
  <div id="previewGallery">
    <section
      class="--pa_0-4-0"
      v-if="galleryData.image.fnImage || galleryData.video.fnVideo"
    >
      <article>
        <div class="sp_72" />

        <div class="previewSubTitle pa_24">GALLERY</div>
        <div class="sp_12" />
        <div class="flex --justify-content width_100 pa_24">
          <div class="previewTitle">{{ galleryData.title }}</div>
        </div>

        <div class="sp_48" />
        <galleryImage
          class="pa_16"
          v-if="galleryData.image.fnImage"
          :image="galleryData.image"
        />
        <div v-if="galleryData.video.fnVideo">
          <div class="sp_16" />
          <stamp
            v-if="stamp"
            class="align-items_center --primary-color"
            :stamp="stamp"
            type="3"
          />
          <div class="sp_16" />
          <galleryVideo
            class="pa_16"
            v-if="galleryData.video.fnVideo"
            :video="galleryData.video"
          />
        </div>
        <div class="sp_72" />
      </article>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import "@/modules/gallery/gallery.scss";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    galleryImage: defineAsyncComponent(() =>
      import("@/modules/gallery/galleryImage.vue")
    ),
    galleryVideo: defineAsyncComponent(() =>
      import("@/modules/gallery/galleryVideo.vue")
    ),
    stamp: defineAsyncComponent(() => import("@/modules/stamp/stampView.vue")),
  },
  computed: {
    ...mapGetters({
      galleryData: "getGalleryData",
      stamp: "getStamp",
    }),
  },
};
</script>

<style scoped>
.opposite-bg {
  background-color: var(--background-on);
  color: var(--background-color);
}
</style>
