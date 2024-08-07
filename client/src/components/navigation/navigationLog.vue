<template>
  <div class="navigationLog">
    <div class="navi-log" >
      <div class="font-size_14 bold" v-if="!userData.isAuthenticated" @click="goToLogin()">
        <span class="underline">로그인</span>하고<br />더 많은 혜택을 확인하세요
      </div>
      <div class="font-size_14 bold" v-else>
        {{ userData }}
      </div>
      <div class="underlay"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters({
      userData: "getUserData",
    }),
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    goToLogout() {
      this.$router.push({ name: "logout" });
    },
  },
};
</script>

<style scoped>
.navigationLog {
  position: relative;
  display: flex;
  align-items: center;
  height: 16%;
}
.navi-log {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  padding: 16px;
}
.navi-log .underlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--mio-theme-color-primary);
  border-radius: inherit;
  opacity: .14;
  z-index: -1;
}
</style>
