export default {
  state: {
    editorId: "", // 현재 섹션의 ID
    previewId: "", // 현재 섹션의 ID
    showPreview: false,
    section: null,
    screenWidth: "",
    formOption: null,
  },
  mutations: {
    togglePreview(state) {
      state.showPreview = !state.showPreview;
    },
    setSection(state, section) {
      state.section = section;
    },
    setFormOption(state, option) {
      state.formOption = option;
    },
    setScreenWidth(state, width) {
      state.screenWidth = width <= 1023 ? "mobile" : "desktop";
    },
    handleScrollTo(state, previewId) {
      if (previewId) {
        console.log("받은것요", previewId);
        const targetSection = document.getElementById(previewId);
        const routerView = document.getElementById("preview");
        if (targetSection && routerView) {
          // Scroll to the target section inside #routerView
          routerView.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    },
    resetFormOption(state) {
      state.formOption = null; // 초기화
    },
  },
  actions: {
    togglePreviewAction({ commit }) {
      commit("togglePreview");
    },
    toggleNavigationAction({ commit }) {
      commit("toggleNavigation");
    },
    updateSection({ commit }, visibleSection) {
      commit("setSection", visibleSection);
    },
    updateScreenWidthAction({ commit }, width) {
      commit("setScreenWidth", width);
    },
    handleScrollToAction({ commit }, previewId) {
      commit("handleScrollTo", previewId);
    },
    updateFormOption({ commit }, option) {
      commit("setFormOption", option);
    },
    resetFormOptionAction({ commit }) {
      commit("resetFormOption"); // resetFormOption 뮤테이션 호출
    },
  },
  getters: {
    getShowPreview(state) {
      return state.showPreview;
    },
    getSection(state) {
      return state.section;
    },
    getScreenWidth(state) {
      return state.screenWidth;
    },
    getFormOption(state) {
      return state.formOption;
    },
  },
};
