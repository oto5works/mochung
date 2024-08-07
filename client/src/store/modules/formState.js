export default {
  state: {
    editorId: "", // 현재 섹션의 ID
    appbar: {
      color: '#000',
      backgroundColor: '#fff'
    },
    previewId: "", // 현재 섹션의 ID
    showPreview: false,
    showNavigation: false,
    showScrim: false,
    section: null,
    screenWidth: "",
    formOption: ''
  },
  mutations: {
    togglePreview(state) {
      state.showPreview = !state.showPreview;
    },
    toggleNavigation(state) {
      state.showNavigation = !state.showNavigation;
      state.showScrim = !state.showScrim;
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
        console.log('받은것요', previewId)
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
    setAppbar(state, option) {
      state.appbar = option;
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
    updateAppbar({ commit }, option) {
      commit("setAppbar", option);
    },
  },
  getters: {
    getShowPreview(state) {
      return state.showPreview;
    },
    getNavigation(state) {
      return state.showNavigation;
    },
    getScrim(state) {
      return state.showScrim;
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
    getAppbar(state) {
      return state.appbar;
    },
  },
};
