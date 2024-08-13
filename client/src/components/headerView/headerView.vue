<!-- headerView.vue -->
<template>
  <header class="headerView">
    <div class="container">
      <div class="logo-container">
        <span class="logo">logo</span>
      </div>
      <div class="menu-container">
        <div class="menu-wrap">
          <buttonHeader class="selected">Hom2e</buttonHeader>
          <buttonHeader>About</buttonHeader>
          <buttonHeader>Services</buttonHeader>
          <buttonHeader>Contact</buttonHeader>
          <div class="underlay" />
        </div>
      </div>
      <div class="login-container">
        <buttonDefault variant="filled" height="46"><span>Login</span></buttonDefault>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import logo from "@/components/logo.vue";
import buttonHeader from "@/components/button/buttonHeader.vue";

export default {
  components: {
    logo,
    buttonHeader,
  },
  data() {
    return {
      isTransform: true,
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style scoped>
.headerView {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px; /* 고정 높이 설정 */
  color: rgb(var(--mio-theme-color-on-background));
  background-color: transparent;
  padding: 0 48px; /* 좌우 패딩 */
  box-sizing: border-box; /* 패딩과 경계선을 포함한 박스 모델 */
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
}
.headerView .container {
  width: 100%;
  height: 100%;
  margin: 0 auto; /* 중앙 정렬 */
  box-sizing: border-box; /* 패딩과 경계선을 포함한 박스 모델 */
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12컬럼 그리드 시스템 설정 */
  gap: 24px; /* 그리드 아이템 간의 간격 */
}
.headerView .logo-container {
  position: relative;
  height: 100%;
  grid-column: 1 / 3; /* 1번 컬럼부터 2번 컬럼까지 */
  display: flex;
  align-items: center;
}
.headerView .logo-container .logo {
  height: 25%;
  width: 100%;
}
/* 메뉴 컨테이너 */
.headerView .menu-container {
  grid-column: 7 / 11; /* 7번 컬럼부터 10번 컬럼까지 */
  display: flex;
  align-items: center;
}
.headerView .menu-wrap {
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;
  width: fit-content;
  height: 48px;
}
.headerView .menu-wrap .underlay {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 48px);
  height: 100%;
  border-radius: 16px;
  background-color: rgba(var(--mio-theme-color-background), 0.12);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.headerView .login-container {
  grid-column: 12 / 13; /* 12번 컬럼 */
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 오른쪽 정렬 */
}
.headerView .login {
  width: 100%;
  height: 40px;
}
</style>
