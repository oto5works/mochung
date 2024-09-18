// store/modules/auth.js
const auth = {
  state: {
    isAuthenticated: false,
    userId: null,
    status: "guest",
    userInfo: {
      email: "",
    },
  },

  mutations: {
    logout(state) {
      state.isAuthenticated = false;
      state.userId = null;
      state.status = "guest";
    },
    SOCIAL_LOGIN(state, { data }) {
      state.isAuthenticated = true;
      state.userId = data.id;
    },
    setAuthFail(state) {
      state.isAuthenticated = false;
      state.userId = null;
      state.status = "guest";
    },
    setAuthSuccess(state, userData) {
      state.isAuthenticated = true;
      state.userId = userData.userId;
      state.status = "user";
      console.log("setAuthSuccess", userData);
    },
  },
  actions: {
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        resolve(); // 로그아웃 후 프로미스 완료
      });
    },
    handleAuthFail({ commit }) {
      commit("setAuthFail");
    },
    handleAuthSuccess({ commit }, userData) {
      commit("setAuthSuccess", userData);
      console.log("handleAuthSuccess", userData);
    },
  },
  getters: {
    getUserData: (state) => state,
    getUserId: (state) => {
      return state.userId;
    },
  },
};

export default auth;
