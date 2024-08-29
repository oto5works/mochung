<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  props: {
    lat: {
      type: String,
      default: "",
    },
    lng: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      map: null,
      marker: null,
    };
  },
  mounted() {
    this.loadMap();
  },
  watch: {
    lat(newLat) {
      if (this.map) {
        this.updateMap();
      }
    },
    lng(newLng) {
      if (this.map) {
        this.updateMap();
      }
    },
  },
  methods: {
    loadMap() {
      if (window.google && window.google.maps) {
        this.initMap();
      } else {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDZ_RWdWLKgtoniCi5Tx1kt-4Xmc03K5ZU&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = this.initMap;
        document.head.appendChild(script);
      }
    },
    initMap() {
      const lat = parseFloat(this.lat) || 0;
      const lng = parseFloat(this.lng) || 0;

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat, lng },
        zoom: 16,
        disableDefaultUI: true, // 기본 UI 요소를 숨깁니다.
      });

      this.marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.map,
        title: 'Marker',
      });
    },
    updateMap() {
      const lat = parseFloat(this.lat) || 0;
      const lng = parseFloat(this.lng) || 0;

      this.map.setCenter({ lat, lng });
      this.marker.setPosition({ lat, lng });
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 390px;
}
</style>
