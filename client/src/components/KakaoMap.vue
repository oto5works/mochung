<template>
    <div id="map" />
</template>

<script>
export default {
  components: {},
  props: {
    adress: String,
    hall_name: String,
    hall_info: String,
    lat: String, 
    lng: String,
  },
  data() {
    return {
      isOpenInfo: false,
      kakaoMap: {},
      locate: {
        lat: '',
        lng: '',
      },
    }
  },
  beforeMount() {
    this.setNowLocate();
  },
  mounted() {
    this.loadMap();
  },
  watch: {
    lat() {
      this.setNowLocate();
      this.initMap();
    },
  },
  methods: {
    loadMap() {
      const { kakao } = window;
      const container = document.getElementById("map");
      const coord = new kakao.maps.LatLng(this.locate.lat, this.locate.lng);
      this.coord = coord
      const hallname = this.hall_name || "예식장명";
      const hallinfo = this.hall_info || "";

      const options = {
        center: coord,
        draggable: false,
        level: 1,
      };
      const map = new kakao.maps.Map(container, options);
      this.kakaoMap = { map, };
      const marker = new kakao.maps.Marker({
        map: this.kakaoMap.map,
        position: coord,
      });
      marker.setPosition(coord)
      map.setLevel(3);
      map.setCenter(coord);
    },
    setNowLocate() {
      const lat = this.lat;
      const lng = this.lng;
      this.locate = { lat, lng };
    },
    initMap() {
      const container = document.getElementById("map");
      const coord = new kakao.maps.LatLng(this.locate.lat, this.locate.lng);

      const options = {
        center: coord,
        draggable: false,
        level: 3,
      };
      this.map = new kakao.maps.Map(container, options);
      const marker = new kakao.maps.Marker({
        map: this.map,
        position: coord,
      });
      marker.setPosition(coord)
    },
  },
  computed: {},
};
</script>


<style scoped>

</style>