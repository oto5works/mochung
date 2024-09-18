<template>
  <buttonDefault class="naver" variant="filled" height="46" @click="navigateToNaver">
    <icon><naver /></icon>
    <span>Log in with Naver</span>
  </buttonDefault>
</template>

<script>
import naver from "@/components/icon/naver.vue";
export default {
  components: { naver },
  data() {
    return {
      naverLoginUrl:
        `https://nid.naver.com/oauth2.0/authorize?` +
        `client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}` +
        `&response_type=code` +
        `&redirect_uri=${import.meta.env.VITE_NAVER_REDIRECT_URI}` +
        `&state=RAMDOM_STATE`,
    };
  },
  methods: {
    navigateToNaver() {
      window.location.href = this.naverLoginUrl;
    },
  },
};
</script>

<style scoped>
.naver {
  width: 100%;
  max-width: 400px;
}
</style>
