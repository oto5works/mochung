import App from './App.vue';
import axios from 'axios';
import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';
import { checkToken } from '@/services/auth'; // 경로를 맞춰주세요

const app = createApp(App);
app.config.globalProperties.$http = axios;




// Vuex 액션을 디스패치하기 위한 변수
let store;
let router; 

// 설정된 앱 이름을 문서 제목으로 설정
document.title = import.meta.env.VITE_APP_NAME;

async function initializeApp() {
  try {
    // 토큰 검증
    const userData = await checkToken();

    // Vuex 상태 업데이트
    if (store) {
      store.dispatch('handleAuthSuccess', userData);
    }
  } catch (error) {
    console.error('토큰 검증 실패:', error);
    if (store) {
      store.dispatch('handleAuthFail');
    }
  }
}

// 플러그인 및 컴포넌트 등록
registerPlugins(app);

// 애플리케이션을 초기화한 후에 마운트합니다.
initializeApp().then(() => {
  // store와 router를 플러그인에서 가져오기
  store = app.config.globalProperties.$store;
  router = app.config.globalProperties.$router;

  app.mount('#app');
});
