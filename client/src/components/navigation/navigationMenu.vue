<!-- navigation.vue -->
<template>
  <div class="navigationMiddle">
    <buttonNavigation
      :class="{ selected: $route.name === 'home' }"
      @click="goToHome"
    >
      <icon><home /></icon>
      <span>Home</span>
    </buttonNavigation>

    <buttonNavigation
      :class="{ selected: $route.name === 'form' }"
      @click="goToForm"
    >
      <icon><sparkle /></icon>
      <span>카드 메이커</span>
    </buttonNavigation>

    <buttonNavigation
      :class="{ selected: $route.name === 'archive' }"
      @click="goToArchive"
    >
      <icon><archive /></icon><span>보관함</span>
    </buttonNavigation>

    <buttonNavigation
      class="button-navigation"
      :class="{ selected: $route.name === 'support' }"
      @click="goToSupport"
    >
      <icon><info /></icon>
      <span>서포트</span>
    </buttonNavigation>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import buttonNavigation from "@/components/button/buttonNavigation.vue";
import home from "@/components/icon/home.vue";
import sparkle from "@/components/icon/sparkle.vue";
import archive from "@/components/icon/archive.vue";
import info from "@/components/icon/info.vue";

export default {
  components: { buttonNavigation, home, sparkle, archive, info },
  methods: {
    ...mapActions([
      "toggleNavigationAction",
      "updateAppbar",
      "updateFormOption",
    ]),
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
      this.toggleNavigationAction();
      this.$router.push({ name: "home" });
    },
    goToForm() {
      this.toggleNavigationAction();
      this.handleResetAppbar();
      this.handleResetFormOption();
      this.$router.push({ name: "form" });

    },
    goToArchive() {
      this.toggleNavigationAction();
      this.handleResetAppbar();
      this.$router.push({ name: "archive" });
    },
    goToSupport() {
      this.toggleNavigationAction();
      this.$router.push({ name: "support" });
    },
    closeDialog() {
      this.toggleNavigationAction();
    },
  },
};
</script>

<style scoped>
.navigationMiddle {
  height: auto;
  overflow-y: auto;
}
</style>
