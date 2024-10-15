<template>
  <header class="appbar_pc">
    <div class="container">
      <div class="logo-container" @click="$router.push({ name: 'form' })">
        <appLogo />
      </div>

      <div class="menu-container">
        <div class="appbar-items">
          <div
            class="appbar-item"
            :class="{ selected: $route.name === 'collection' }"
            @click="$router.push({ name: 'components' })"
          >
            <span>콜렉션</span>
          </div>
          <div
            class="appbar-item"
            :class="{ selected: $route.name === 'form' }"
            @click="$router.push({ name: 'form' })"
          >
            <span>위시리스트</span>
          </div>
          <div
            class="appbar-item"
            :class="{ selected: $route.name === 'components' }"
            @click="$router.push({ name: 'collection' })"
          >
            <span>계정</span>
          </div>
        </div>

       
      </div>

      <div class="login-container">
        <div
          class="appbarAuth"
          :class="{ selected: userData.isAuthenticated }"
          @click="handleLogin"
        >
          <span v-if="userData.isAuthenticated">마이페이지</span>
          <span v-else>로그인</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import appLogo from "@/components/appLogo/appLogo.vue";
import "@/components/appbar/appbar.scss";

export default {
  components: {
    appLogo,
  },
  data() {
    return {
      appName: import.meta.env.VITE_APP_NAME || "DefaultAppName",
    };
  },
  computed: {
    ...mapGetters({
      userData: "getUserData",
    }),
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    isSelected(routeName) {
      return this.currentRouteName === routeName;
    },
    handleLogin() {
      if (this.userData.isAuthenticated) {
        this.$router.push({ name: "collection" });
      } else {
        this.$router.push({ name: "login" });
      }
      this.toggleFold();
    },
    handleLogout() {
      this.$router.push({ name: "logout" });
      this.toggleFold();
    },
  },
};
</script>

<style scoped></style>
