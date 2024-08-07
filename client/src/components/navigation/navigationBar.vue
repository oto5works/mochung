<!-- navigationBar.vue -->
<template>
  <teleport to="body">
    <div class="overlay-container">
      <div class="overlay navigation">
        <div
          class="overlay__scrim"
          :class="{ active: loaded }"
          @click="closeDialog"
        />
        <div class="overlay__content" :class="{ active: loaded }">
          <navigationTop />
          <navigationLog />
          <navigationMenu />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import "@/components/overlay/overlay.scss";
import "@/components/navigation/navigationBar.scss";

import { mapGetters, mapActions } from "vuex";
import navigationTop from "@/components/navigation/navigationTop.vue";

import navigationLog from "@/components/navigation/navigationLog.vue";
import navigationMenu from "@/components/navigation/navigationMenu.vue";

export default {
  components: { navigationTop, navigationLog, navigationMenu },
  computed: {
    ...mapGetters({
      showNavigation: "getNavigation",
    }),
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    ...mapActions(["toggleNavigationAction"]),
    closeDialog() {
      this.toggleNavigationAction();
    },
  },
  mounted() {
    // 페이지 로드 후 0.1초 후에 loaded를 true로 설정
    setTimeout(() => {
      this.loaded = true;
    }, 1); // 0.1초를 milliseconds 단위로 지정
  },
};
</script>
