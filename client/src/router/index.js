import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index' // import the store instance

import MainView from '@/views/MainView.vue'
import Post_create from '@/views/Post/Post_create.vue'
import LoginView from '@/views/User/LoginView.vue'
import LogoutView from '@/views/User/LogoutView.vue'
import LoginNaverCallback from '@/views/User/LoginNaverCallback.vue'
import Archive from '@/views/Archive/Archive.vue'

const router = createRouter({
  //history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainView,
      meta: {
        guest: true // only allow guests (non-authenticated users) to access this page
      },
    },
    // 로그인
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/login/naver',
      name: 'LoginNaverCallback',
      component: LoginNaverCallback
    },
    {
      path: '/logout',
      name: 'LogoutView',
      component: LogoutView,
    },
    // 로그인
      {
      path: '/create',
      name: 'Post_create',
      component: Post_create,
      //meta: {
      //  requiresAuth: true // only allow authenticated users to access this page
      //}
    },
    // 내 정보
    {
      path: '/me',
      name: 'Archive',
      component: Archive,    
      //meta: {
        //requiresAuth: true // only allow authenticated users to access this page
      //}  
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

  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isAuthenticated) {
    next('/login')
    store.commit('setNotiMessage', '로그인이 필요한 기능입니다.')
    store.commit('setNotiShow', true)
    store.commit('setNotiType', 'error')
     // redirect to login page if not authenticated
  } else {
    next() // allow access to the requested page
  }
})

export default router
