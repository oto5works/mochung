<template>
  <div class="width_100">
    <googlemaps v-if="map === 'map'" :lat="lat" :lng="lng" />
    <!-- 지도 이미지 업데이트 예정
      <img
        v-if="map === 'file'"
        class="object-fit_cover --border-radius_26"
        style="width: 100%; height: 100%"
        :src="fileUrl"
      />
      -->
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    googlemaps: defineAsyncComponent(() =>
      import("@/preview/location/googlemaps.vue")
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
