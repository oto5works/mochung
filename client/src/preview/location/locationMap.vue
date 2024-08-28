<template>
  <sectionView>
    <div id="previewMap" :class="{ 'design3': design === 'design3' }">

      <kakaomap
        v-if="map === 'kakaomap'"
        :lat="lat"
        :lng="lng"
      />
      <!-- 지도 이미지 업데이트 예정
      <img
        v-if="map === 'file'"
        class="object-fit_cover --border-radius_26"
        style="width: 100%; height: 100%"
        :src="fileUrl"
      />
      -->
    </div>
    
     
  </sectionView>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    kakaomap: defineAsyncComponent(() =>
      import("@/preview/location/kakaomap.vue")
    ),
  },
  computed: {
    ...mapGetters({
      design: "getDesign",
    }),
  },
  props: {
    map: { type: String },
    lat: { type: String },
    lng: { type: String },
    fileUrl: { type: String },
  },
};
</script>
<style scoped>
#previewMap {
  width: 100%;
  height: 390px;
  border-radius: var(--border-radius_28);
  overflow: hidden;
}
.design3 {
  border-radius: unset;
}
</style>