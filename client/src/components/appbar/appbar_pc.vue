<template>
  <header class="appbar_pc">
    <div class="container">
      <div class="logo-container" @click="$router.push({ name: 'home' })">
        <span class="logo">logo</span>
      </div>
      <div class="menu-container">
        <div class="menu-wrap">
          
         
          <appbarButton
            :class="{ selected: $route.name === 'archive' }"
            @click="$router.push({ name: 'archive' })"
            >archive</appbarButton
          >
          <appbarButton
            :class="{ selected: $route.name === 'form' }"
            @click="$router.push({ name: 'form' })"
            >form</appbarButton
          >
          <appbarButton
            :class="{ selected: $route.name === 'components' }"
            @click="$router.push({ name: 'components' })"
            >components</appbarButton
          >
         
          <div class="underlay" />
        </div>
      </div>
      <div class="login-container">
        <buttonDefault variant="filled" height="46" @click="goToLogin()"
          ><span>Login</span></buttonDefault
        >
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { useRoute } from "vue-router";
import logo from "@/components/logo.vue";
import appbarButton from "@/components/appbar/appbarButton.vue";
import "@/components/appbar/appbar.scss";

export default {
  components: {
    logo,
    appbarButton,
  },
  data() {
    return {
      isTransform: true,
    };
  },
  computed: {
    ...mapGetters({}),
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    isSelected(routeName) {
      return this.currentRouteName === routeName;
    },
    goToHome() {
      this.$router.push({ name: "home" });
    },
    goToAbout() {
      this.$router.push({ name: "about" });
    },
    goToArchive() {
      this.$router.push({ name: "archive" });
    },
    goToForm() {
      this.$router.push({ name: "form" });
    },
    goToComponents() {
      this.$router.push({ name: "components" });
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
</style>
