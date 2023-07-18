<template>
  <div ref="kakaomap" />
</template>

<script>

export default {
props: {
  lat: { type: String },
  lng: { type: String },
},
data() {
  return {
    apiKey: '5a47656c6e47a887a539a20f1784472f',
    kakaomap: null,
    marker: null,
  };
},
mounted() {
  this.initializeMap();
},
watch: {
  'lat': {
    deep: true,
    handler() {
      this.updateMap();
    },
  },
},
methods: {
  initializeMap() {
    const container = this.$refs.kakaomap;
    const options = {
      center: new kakao.maps.LatLng(this.lat, this.lng),
      level: 3,
    };
    this.kakaomap = new kakao.maps.Map(container, options);
    this.marker = new kakao.maps.Marker({
      position: options.center,
    });
    this.marker.setMap(this.kakaomap);
  },
  updateMap() {
    const newCenter = new kakao.maps.LatLng(this.lat, this.lng);
    this.kakaomap.setCenter(newCenter);
    this.marker.setPosition(newCenter);
  },
},
};
</script>
