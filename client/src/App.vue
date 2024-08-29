<!-- App.vue -->
<template>
  <div class="app">
  
<headerView />
{{ userData }}
    <!--<appbar />-->
    <RouterView />
    <!--
    <div id="routerView" ref="routerView">
      
    <appFooter />
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import appbar from "@/components/appbar/appbar.vue";
import headerView from "@/components/headerView/headerView.vue";


export default {
  components: {
    appbar, headerView
    
  },
  data() {
    return {
      isLoading: true, // Initially set to true
    };
  },
  computed: {
    ...mapGetters({
      userData: "getUserData",
      username: "getUserName",
    }),
  },
  mounted() {
    // Add an event listener for the window's onload event
    //window.addEventListener("load", this.handleWindowLoad);
    //window.addEventListener("resize", this.handleResize);
    //this.handleResize();
  },
  beforeDestroy() {
    // 컴포넌트 파기 시에 이벤트 리스너를 제거
    //window.removeEventListener("resize", this.handleResize);
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
  height: 100%;
}
.app {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

}
#routerView {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgb(254, 242, 226);
  
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 16px);
  margin: 120px 8px 0;
}
</style>
