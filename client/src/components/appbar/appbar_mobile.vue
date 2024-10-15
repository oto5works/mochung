<template>
  <header class="appbar_mobile">
    <div class="appbar-content" :class="{ isOpen: isOpen }">
      <div class="container">
        <appLogo />

        <buttonDefault
          variant="text"
          height="36"
          :icon="true"
          @click="toggleFold()"
          :class="{ selected: isOpen }"
        >
          <icon class="icon_16"><component :is="isOpen ? 'x' : 'list'" /></icon>
        </buttonDefault>
      </div>
      <div class="appbar-panel" :class="{ isOpen: isOpen }">
        <div
          class="appbarAuth"
          :class="{ selected: userData.isAuthenticated }"
          @click="handleLogin"
        >
          <span v-if="userData.isAuthenticated">마이페이지</span>

          <span v-else>로그인</span>
        </div>

        <div class="appbar-items">
          <div
            class="appbar-item"
            :class="{ selected: $route.name === 'collection' }"
            @click="handleCollection"
          >
            <span>콜렉션</span>
          </div>
          <div
            class="appbar-item"
            :class="{ selected: $route.name === 'form' }"
            @click="handleForm"
          >
            <span>위시리스트</span>
          </div>
          <div
            class="appbar-item"
            :class="{ selected: $route.name === 'components' }"
            @click="handleComponents"
          >
            <span>계정</span>
          </div>
        </div>

        <div v-if="userData.isAuthenticated" class="logout" @click="handleLogout">로그아웃</div>
      </div>
    </div>
    <div v-if="isOpen" class="scrim" @click="toggleFold()" />
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import appLogo from "@/components/appLogo/appLogo.vue";
import list from "@/components/icon/list.vue";

import "@/components/appbar/appbar.scss";

export default {
  components: {
    appLogo,
    list,
  },
  data() {
    return {
      isOpen: false,
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
    handleCollection() {
      this.$router.push({ name: "collection" });
      this.toggleFold();
    },
    handleForm() {
      this.$router.push({ name: "form" });
      this.toggleFold();
    },
    handleComponents() {
      this.$router.push({ name: "components" });
      this.toggleFold();
    },
    toggleFold() {
      this.isOpen = !this.isOpen;
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
