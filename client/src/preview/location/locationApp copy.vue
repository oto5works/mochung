<template>
  <v-bottom-sheet v-model="sheet">
    <template v-slot:activator="{ props }">
      <div class="flex flex-direction_column --align-items">
        <button
          class="button-defaulted height_40 gap_8 pa_24 --border-radius_32"
          v-bind="props"
        >
          <icon><location /></icon>
          <span>앱으로 확인하기</span>
        </button>
      </div>
    </template>

    <div class="bottomSheet">
      <div
        class="flex align-items_center justify-content_space-between pa_16 height_40"
      >
        <h5>연결가능한 앱목록</h5>
        <button @click="sheet = false">
          <icon><x /></icon>
        </button>
      </div>

      <div
        class="primary__hover position_relative display_flex align-items_center width_100 height_48 pa_16 cursor_pointer"
        @click="handleNaverMap"
      >
        <div class="flex align-items_center gap_16">
          <button class="navermap width_38 height_38 border-radius_12">
            <icon icon="appNavermap"><appNavermap /></icon>
          </button>
          <h4>네이버맵</h4>
        </div>
      </div>

      <div
        class="primary__hover position_relative display_flex align-items_center width_100 height_48 pa_16 cursor_pointer"
        @click="handleKakaoMap"
      >
        <div class="flex align-items_center gap_16">
          <button class="kakao width_38 height_38 border-radius_12">
            <icon icon="appKakaomap"><appKakaomap /></icon>
          </button>
          <h4>카카오맵</h4>
        </div>
      </div>

      <div
        class="primary__hover position_relative display_flex align-items_center width_100 height_48 pa_16 cursor_pointer"
        @click="handleKakaoNavi"
      >
        <div class="flex align-items_center gap_16">
          <button class="kakao width_38 height_38 border-radius_12">
            <icon icon="appKakaonavi"><appKakaonavi /></icon>
          </button>
          <h4>카카오네비</h4>
        </div>
      </div>

      <div
        class="primary__hover position_relative display_flex align-items_center width_100 height_48 pa_16 cursor_pointer"
        @click="handleTmap"
      >
        <div class="flex align-items_center gap_16">
          <button class="tmap width_38 height_38 border-radius_12">
            <icon icon="appTmap"><appTmap /></icon>
          </button>
          <h4>티맵</h4>
        </div>
      </div>
    </div>
  </v-bottom-sheet>
</template>

<script>
import appKakaomap from "@/components/icons/appKakaomap.vue";
import appKakaonavi from "@/components/icons/appKakaonavi.vue";
import appNavermap from "@/components/icons/appNavermap.vue";
import appTmap from "@/components/icons/appTmap.vue";
import location from "@/components/icon/location.vue";

export default {
  components: { appKakaomap, appKakaonavi, appNavermap, appTmap, location },
  props: {
    app: { type: Object },
    map: { type: Object },
    hall: { type: Object },
  },

  data() {
    return {
      sheet: false,
    };
  },
  methods: {
    handleNaverMap() {
      const lat = this.map.lat;
      const lng = this.map.lng;
      const locationName = this.hall.name;
      // 도착지 이름을 인코딩하여 URL에 추가합니다.
      const encodedLocationName = encodeURIComponent(locationName);
      // 네이버 맵 애플리케이션을 사용한 URL 스킴
      const naverMapLink = `nmap://route/car?dlat=${lat}&dlng=${lng}&dname=${encodedLocationName}`;

      // 네이버 맵 앱이 설치되어 있는지 확인 후 실행합니다.
      if (window.navigator.userAgent.match(/android/i)) {
        window.location.href = `intent:${naverMapLink}#Intent;package=com.nhn.android.nmap;end;`;
      } else if (window.navigator.userAgent.match(/iphone|ipad|ipod/i)) {
        window.location.href = `maps:${naverMapLink}`;
      } else {
        // 다른 플랫폼 또는 네이버 맵 앱이 없는 경우 대체 동작을 정의하세요.
        // 예를 들어, 웹 페이지에서 알림 메시지를 표시할 수 있습니다.
        alert("네이버 맵 앱을 설치해주세요.");
      }

      this.sheet = false;
    },

    handleKakaoMap() {
      const lat = this.map.lat;
      const lng = this.map.lng;
      const locationName = this.hall.name;
      // 도착지 이름을 인코딩하여 URL에 추가합니다.
      const encodedLocationName = encodeURIComponent(locationName);
      // 카카오맵 애플리케이션을 사용한 URL 스킴
      const kakaoMapLink = `kakaomap://route?sp=${lat},${lng}&by=CAR&ep=${lat},${lng}&destination=${encodedLocationName}`;

      // 카카오맵 앱이 설치되어 있는지 확인 후 실행합니다.
      if (window.navigator.userAgent.match(/android/i)) {
        window.location.href = `intent:${kakaoMapLink}#Intent;package=net.daum.android.map;end;`;
      } else if (window.navigator.userAgent.match(/iphone|ipad|ipod/i)) {
        window.location.href = kakaoMapLink;
      } else {
        // 다른 플랫폼 또는 카카오맵 앱이 없는 경우 대체 동작을 정의하세요.
        // 예를 들어, 웹 페이지에서 알림 메시지를 표시할 수 있습니다.
        alert("카카오맵 앱을 설치해주세요.");
      }

      this.sheet = false;
    },

    handleKakaoNavi() {
      const lat = this.map.lat;
      const lng = this.map.lng;
      const locationName = this.hall.name;
      // 도착지 이름을 인코딩하여 URL에 추가합니다.
      const encodedLocationName = encodeURIComponent(locationName);
      // 카카오네비 애플리케이션을 사용한 URL 스킴
      const kakaoNaviLink = `kakaonavi://route?sp=${lat},${lng}&ep=${lat},${lng}&by=CAR&et=`;

      // 카카오네비 앱이 설치되어 있는지 확인 후 실행합니다.
      if (window.navigator.userAgent.match(/android/i)) {
        window.location.href = `intent:${kakaoNaviLink}#Intent;package=com.locnall.KimGiSa;end;`;
      } else if (window.navigator.userAgent.match(/iphone|ipad|ipod/i)) {
        window.location.href = `kakaonavi:${kakaoNaviLink}`;
      } else {
        // 다른 플랫폼 또는 카카오네비 앱이 없는 경우 대체 동작을 정의하세요.
        // 예를 들어, 웹 페이지에서 알림 메시지를 표시할 수 있습니다.
        alert("카카오네비 앱을 설치해주세요.");
      }

      this.sheet = false;
    },
    handleTmap() {
      const lat = this.map.lat;
      const lng = this.map.lng;
      const locationName = this.hall.name;
      // 도착지 이름을 인코딩하여 URL에 추가합니다.
      const encodedLocationName = encodeURIComponent(locationName);
      // 티맵 애플리케이션을 사용한 URL 스킴
      const tmapLink = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${encodedLocationName}`;

      // 티맵 앱이 설치되어 있는지 확인 후 실행합니다.
      if (window.navigator.userAgent.match(/android/i)) {
        window.location.href = `intent:${tmapLink}#Intent;package=com.skt.tmap.ku;end;`;
      } else if (window.navigator.userAgent.match(/iphone|ipad|ipod/i)) {
        window.location.href = tmapLink;
      } else {
        // 다른 플랫폼 또는 티맵 앱이 없는 경우 대체 동작을 정의하세요.
        // 예를 들어, 웹 페이지에서 알림 메시지를 표시할 수 있습니다.
        alert("티맵 앱을 설치해주세요.");
      }

      this.sheet = false;
    },
  },
};
</script>
