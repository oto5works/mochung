<!-- appbar.vue -->
<template>
  <div
    class="appbar"
    v-if="$route.name !== 'view' && $route.name !== 'login'"
    :class="{ appbar__transform: isTransform }"
    :style="{ color: textColor }"
  >
    <div class="appbar__wrap">
      <div class="appbar-left">
        <div class="flex align-items_center gap_8">
          <button class="logo" @click="goToHome">
            <logo />
          </button>
        </div>
      </div>
      <div class="appbar-right flex align-items_center gap_8">
        <buttonPreview v-if="screenWidth === 'mobile'" />
        <navigation v-if="screenWidth === 'mobile'" />
        <appbarContent v-if="screenWidth !== 'mobile'" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import logo from "@/components/logo.vue";

export default {
  components: {
    logo,
    navigation: defineAsyncComponent(() =>
      import("@/components/navigation/navigation.vue")
    ),
    appbarContent: defineAsyncComponent(() =>
      import("@/components/appbar/appbarContent.vue")
    ),
    buttonPreview: defineAsyncComponent(() =>
      import("@/components/button/buttonPreview.vue")
    ),
  },
  data() {
    return {
      isTransform: true,
    };
  },
  computed: {
    ...mapGetters({
      screenWidth: "getScreenWidth",
      appbar: "getAppbar",
    }),
    textColor() {
      return this.isTransform ? this.appbar.color : "";
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
    handleScroll() {
      this.isTransform = window.scrollY === 0;
    },
  },
};
</script>
<style scoped>
.appbar {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  color: var(--mio-theme-color-on-background);
  background-color: var(--mio-theme-color-background);
  transition: all 0.4s ease;
}

.appbar.appbar__transform {
  color: inherit;
  background-color: transparent;
}

.logo {
  position: relative;
  width: 80px;
}
.logo svg {
  height: 100%;
  width: 100%;
}

.appbar__wrap {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 64px;
  height: 56px;
}

.appbar-left {
  flex: 1 1 14%;
}
.appbar-right {
  flex: 1 1 86%;
}
</style>

<style scoped>
/*--- 태블렛 ---*/
@media all and (max-width: 1023px) {
  .appbar__wrap {
    padding: 0 16px;
  }
  .appbar-right {
flex: unset;
}
}
</style>
