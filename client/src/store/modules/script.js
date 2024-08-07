export default {
  state: {
    loginScript: {
      info: "Log In",
      title: "안녕하세요.<br>스타벅스입니다.",
      content: "회원 서비스 이용을 위해 로그인 해주세요.",
    },
    homeHero: [
      {
        title: "2022<br>밴드해",
        content: "HAPPY BAND YEAR",
        image: "homeImage1",
        color: "#000",
        backgroundColor: "#ff4d00",
      },
      {
        title: "Hello World!<br>You Wish - You Had.",
        content:
          "Start your 14-day free Demo. Cancle anytime.<br>No credit card needed.",
        image: "",
        color: "#000",
        backgroundColor: "#F6F6F6",
      },
      {
        title: "Hello World!<br>You Wish - You Had.",
        content:
          "Start your 14-day free Demo. Cancle anytime.<br>No credit card needed.",
        image: "",
        color: "#000",
        backgroundColor: "#F6F6F6",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getHomeHero(state) {
      return state.homeHero;
    },
    getLoginScript(state) {
      return state.loginScript;
    },
  },
};
