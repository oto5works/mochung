<template>
  <a :href="naverLoginUrl">
    <buttonDefault class="gap_8 height_48 width_100 border-radius_24" color="#62da6b">
      <icon><naver /></icon>
      <span>네이버로 시작하기</span>
    </buttonDefault>
  </a>
</template>
<script>
import naver from "@/components/icon/naver.vue";
export default {
  components: { naver },
  data() {
    return {
      naverLoginUrl:
        "https://nid.naver.com/oauth2.0/authorize?" +
        "client_id=K4zOH6MzWXb5jjEMIQWa" +
        "&response_type=code" +
        "&redirect_uri=http://localhost:5173/login/naver" +
        "&state=RAMDOM_STATE",
    };
  },
};
</script>

<style scoped>
</style>
