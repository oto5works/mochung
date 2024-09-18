<template>
  <dialogBottom :dialog="dialog" title="연락하기" @update:dialog="updateDialog">
    <listItem
      icon="upload"
      label="이미지 업로드"
      v-if="!files.url"
      @click="triggerFileInput"
    />
  </dialogBottom>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  props: {
    dialog: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      locationData: "getLocationData",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    handleNaverMap() {
      const lat = this.locationData.lat;
      const lng = this.locationData.lng;
      const locationName = this.locationData.name;
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
      this.$emit("update:dialog", false);
    },

    handleKakaoMap() {
      const lat = this.locationData.lat;
      const lng = this.locationData.lng;
      const locationName = this.locationData.name;
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
      this.$emit("update:dialog", false);
    },

    handleKakaoNavi() {
      const lat = this.locationData.lat;
      const lng = this.locationData.lng;
      const locationName = this.locationData.name;
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
      this.$emit("update:dialog", false);
    },
    handleTmap() {
      const lat = this.locationData.lat;
      const lng = this.locationData.lng;
      const locationName = this.locationData.name;
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
      this.$emit("update:dialog", false);
    },
  },
};
</script>
