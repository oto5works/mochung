import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index"; // import the store instance
import { checkToken } from "@/services/auth";

import home from "@/views/home/home.vue";
import archive from "@/views/archive/archive.vue";
import support from "@/views/support/support.vue";

import legal from "@/views/legal/legal.vue";



// 유저 (로그인, 로그아웃)
import login from "@/views/log/login.vue";
import logout from "@/views/log/logout.vue";
import loginNaverCallback from "@/views/log/loginNaverCallback.vue";

// 비동기적 로딩 컴포넌트
const form = () => import("@/views/form/form.vue");
const formSave = () => import("@/views/form/formSave/formSave.vue");

const formView = () => import("@/views/form/formView.vue");
// user
const components = () => import("@/views/components/components.vue");
const coupon = () => import("@/views/admin/adminCoupon.vue");

const router = createRouter({
  //history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      meta: { requiresAuth: false },
    },
    // 로그인
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/login/naver",
      name: "loginNaverCallback",
      component: loginNaverCallback,
    },
    {
      path: "/logout",
      name: "logout",
      component: logout,
    },
    // 제작
    {
      path: "/form",
      name: "form",
      component: form,
      meta: { requiresAuth: false },
    },
    {
      path: "/form/save",
      name: "save",
      component: formSave,
      meta: { requiresAuth: false },
    },
    // 내 정보
    {
      path: "/collection",
      name: "collection",
      component: archive,
      meta: { requiresAuth: false },
    },
    // 고객지원
    {
      path: "/support",
      name: "support",
      component: support,
      meta: { requiresAuth: false },
    },
    {
      path: '/legal/:section?',
      name: 'legal',
      component: legal
    },
    // 보기
    {
      path: "/:id",
      name: "formView",
      component: formView,
      meta: { requiresAuth: false },
      props: { big: false },
    },
    // 수정
    {
      path: "/:id/edit",
      name: "edit",
      component: form,
      meta: { requiresAuth: false },
    },
    {
      path: "/:id/%ED%81%B0%EA%B8%80%EC%9E%90", // "큰글자"를 URL 인코딩한 값
      name: "formViewBig",
      component: formView,
      meta: { requiresAuth: false },
      props: { big: true },
    },
    {
      path: "/admin/coupon",
      name: "coupon",
      component: coupon,
      //meta: { requiresAuth: false },
    },
    {
      path: "/components",
      name: "components",
      component: components,
      //meta: { requiresAuth: false },
    },
    //{
    //path: '/other/:id',
    //name: 'other',
    //component: () => import('../views/OtherProfileView.vue')
    //},
    //{
    //path: '/post/:id',
    //name: 'post',
    //component: () => import('@/views/PostView.vue')
    //},
    //{
    //path: '/post/:id/edit',
    //name: 'postedit',
    //component: () => import('@/Test/TestEditView.vue')
    //},
  ],
});
/*
router.beforeResolve(async (to, from, next) => {
  console.log("라우터 가드");
  // 토큰 확인
  try {
    const response = await checkToken();
    const userData = response.info;
    console.log("userData", userData);
    // 유저 정보 저장
    store.dispatch("handleAuthSuccess", userData);
    // 페이지 이동 허용
    next();
  } catch (error) {
    // 토큰 검사 실패 또는 다른 오류 발생
    console.error("Token check failed", error);

    // 로그인 페이지로 리다이렉트 또는 다른 처리
    store.dispatch("handleAuthFail"); // handleAuthFail 액션 디스패치
    next();
  }
});
*/
export default router;
