<template>
  <div style="height: 360px;" class="--border-radius_18" ref="kakaomap">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      kakaomap: null,
      marker: null,
      mapInitialized: false,
    };
  },
  mounted() {
    try {
      this.initializeMap();
      this.mapInitialized = true;
    } catch (error) {
      console.error('Error initializing map:', error);
      this.mapInitialized = false;
      // Handle the error as needed, e.g., show a message to the user or disable map-related functionality
    }
  },
  computed: {
    ...mapGetters({
      coordinate: 'getCoordinate',
    }),
  },
  watch: {
    coordinate: {
      deep: true,
      handler() {
        if (this.mapInitialized) {
          this.updateMap();
        }
      },
    },
  },
  methods: {
    initializeMap() {
      const container = this.$refs.kakaomap;
      const options = {
        center: new kakao.maps.LatLng(this.coordinate.lat, this.coordinate.lng),
        level: 3,
      };
      this.kakaomap = new kakao.maps.Map(container, options);
      this.marker = new kakao.maps.Marker({
        position: options.center,
      });
      this.marker.setMap(this.kakaomap);
    },
    updateMap() {
      const newCenter = new kakao.maps.LatLng(this.coordinate.lat, this.coordinate.lng);
      this.kakaomap.setCenter(newCenter);
      this.marker.setPosition(newCenter);
    },
  },
};
</script>
