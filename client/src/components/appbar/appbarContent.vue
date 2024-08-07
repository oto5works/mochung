<!-- appbar.vue -->
<template>
  <div class="appbar-content">
    <div class="appbar-menu">
      <button :class="{ selected: $route.name === 'form' }" @click="goToForm">
        <span>모바일청첩장</span>
      </button>
      <button
        :class="{ selected: $route.name === 'archive' }"
        @click="goToArchive"
      >
        <span>보관함</span>
      </button>
      <button @click="goToCoupon">
        <span>이벤트/혜택</span>
      </button>
      <button @click="goToCoupon">
        <span>서비스안내</span>
      </button>
      <button
        :class="{ selected: $route.name === 'support' }"
        @click="goToSupport"
      >
        <span>고객센터</span>
      </button>
    </div>
    <div class="appbar-log">
      <button v-if="!userData.isAuthenticated" @click="goToLogin">
        <span>로그인/회원가입</span>
      </button>
      <button v-if="userData.isAuthenticated" @click="goToLogout">
        <span>로그아웃</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      userData: "getUserData",
    }),
  },
  methods: {
    ...mapActions(["updateAppbar", "updateFormOption"]),
    handleResetFormOption() {
      // appbar의 color 및 backgroundColor를 초기화
      this.updateFormOption(null);
    },
    handleResetAppbar() {
      // appbar의 color 및 backgroundColor를 초기화
      this.updateAppbar({
        color: null,
        backgroundColor: null,
      });
    },
    goToHome() {
      this.$router.push({ name: "home" });
    },
    goToForm() {
      this.handleResetAppbar();
      this.handleResetFormOption()
      this.$router.push({ name: "form" });
    },
    goToArchive() {
      this.handleResetAppbar();
      this.$router.push({ name: "archive" });
    },
    goToSupport() {
      this.handleResetAppbar();

      this.$router.push({ name: "support" });
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    goToLogout() {
      this.$router.push({ name: "logout" });
    },
    goToCoupon() {
      this.$router.push({ name: "coupon" });
    },
  },
};
</script>
<style scoped>
.appbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 86%;
  font-size: 14px;
}
.appbar-menu {
  display: flex;
  gap: 72px;
}
.appbar-menu button:hover,
.appbar-menu button.selected {
  font-weight: 700;
}
.appbar-log {
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 24px;
  border: 1px solid currentColor;
}
.appbar-log:hover {
  opacity: .9;
}
</style>


