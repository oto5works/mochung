<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    adress: String,
    lat: {
          type: String,
          default: '',
      }, 
      lng: {
          type: String,
          default: '',
      }, 
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
  watch: {
    locate() {
      this.loadMap();
    },
  },
  methods: {
    loadMap() {
      const { kakao } = window;
      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      const container = document.getElementById("map");
      const coord = new kakao.maps.LatLng(this.locate.lat, this.locate.lng);
      this.coord = coord
      const options = {
        center: coord,
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      this.kakaoMap = {
        map,
        infowindow,
      };
      const marker = new kakao.maps.Marker({
        map: this.kakaoMap.map,
        position: coord,
      });
      marker.setPosition(coord)
      map.setLevel(3);
      map.setCenter(coord);
    },
    setNowLocate() {
      const lat = this.lat || "37.365264512305174";
      const lng = this.lng || "127.10676860117488";
      this.locate = {
        lat,
        lng,
        };
    },
    searchLocation(coord) {
      const { kakao } = window;
      const { map } = this.kakaoMap;
      const marker = new kakao.maps.Marker({
        map: this.kakaoMap.map,
        position: coord,
        clickable: true
      });
      marker.setMap(map);
      const iwContent = '<div style="padding:5px;">Hello World! <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
      position : iwPosition, 
      content : iwContent 
      });
      kakao.maps.event.addListener(marker, 'click', function() {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);  
      });
      map.setLevel(3);
      map.setCenter(coord);
    },
  },
  computed: {},
};
</script>

<style scoped>
#map {
    width: 100%;
    height: 390px;
}
</style>