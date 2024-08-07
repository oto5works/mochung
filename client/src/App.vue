<!-- App.vue -->
<template>
  <div class="app">
<headerView />
    <!--<appbar />-->
    <div id="routerView" ref="routerView">
      <RouterView />
      <appFooter />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import appbar from "@/components/appbar/appbar.vue";
import headerView from "@/components/headerView/headerView.vue";

import appFooter from "@/components/component/appFooter.vue";

export default {
  components: {
    appbar,
    appFooter, headerView
    
  },
  data() {
    return {
      isLoading: true, // Initially set to true
    };
  },
  computed: {
    ...mapGetters({
      auth: "isAuthenticated",
      username: "getUserName",
    }),
  },
  mounted() {
    // Add an event listener for the window's onload event
    window.addEventListener("load", this.handleWindowLoad);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    // 컴포넌트 파기 시에 이벤트 리스너를 제거
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapActions(["updateScreenWidthAction"]),
    handleWindowLoad() {
      // Update the isLoading property when the window finishes loading
      this.isLoading = false;
    },
    handleResize() {
      // 화면 크기가 변경될 때마다 Vuex 상태를 업데이트
      this.updateScreenWidthAction(window.innerWidth);
    },
  },
};
</script>
<style>
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: var(--mio-theme-color-background);
  font-family: var(--mio-theme-font-family-1);
}
.app {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.app-content {
  padding-left: 0px;
  width: 100%;
}
.app-content.app-content-padding {
  padding-left: 88px;
  width: 100%;
}
.app-content__wrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: calc(100vh - 64px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.app-content__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
#routerView {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  width: 100%;
  min-height: 100%;
  background-color: var(--mio-theme-color-background);
  
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 16px);
  margin: 120px 8px 0;
}
</style>
