<template>
  <section id="previewMap" class="pa_16">
    <article >
      <kakaomap
        v-if="map === 'kakaomap'"
        :lat="lat"
        :lng="lng"
      />
      <img
        v-if="map === 'file'"
        class="object-fit_cover --border-radius_26"
        style="width: 100%; height: 100%"
        :src="fileUrl"
      />
      <div class="absolute_100 box-shadow_1-bo" />
    </article>
  </section>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    kakaomap: defineAsyncComponent(() =>
      import("@/components/npm/kakaomap.vue")
    ),
  },
  props: {
    map: { type: String },
    lat: { type: String },
    lng: { type: String },
    fileUrl: { type: String },
  },
};
</script>
