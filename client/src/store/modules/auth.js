/* auth.js */
import router from '@/router/index';
  import { getAUser } from '@/services/users';

// VueX 모듈
const auth = {
  state: {
    isAuthenticated: false,
    userId: '',
    status: '',
    email: '',
  },
  getters: {
    getUserData: state => state,
  },
  mutations: {
    logout(state) {
      state.isAuthenticated = false;
      state.userId = null;
      state.status = 'guest';
      router.push('/');
    },
    SOCIAL_LOGIN(state, { data }) {   
      state.isAuthenticated = true;   
      state.userId = data.id;
    },
    setAuthFail(state) {
      state.isAuthenticated = false;
      state.userId = null;
      state.status = 'guest';
    },
    setAuthSuccess(state, userData) {
      state.userId = userData.userId
      state.isAuthenticated = true;
      console.log ('setAuthSuccess?', userData )
    },
  },
  actions: {
    logout({ commit }) {
      commit('logout');
    },
    handleAuthFail({ commit }) {
      commit('setAuthFail');
    },
    handleAuthSuccess({ commit, state }, userData) {
      commit('setAuthSuccess', userData);
      console.log ('handleAuthSuccess?', userData )
    },
    /*
async handleAuthSuccess({ commit, state }, userData) {
      state.isAuthenticated = true;
      state.userId = userData.userId
      try {
        const data = await getAUser(state.userId);
        // Commit 'setAuthSuccess' mutation with user data
        commit('setAuthSuccess', data);
      } catch (error) {
        console.error('Failed to fetch user data after authentication', error);
        // Handle error as needed
      }
    },
    */
  },
};

export default auth;
