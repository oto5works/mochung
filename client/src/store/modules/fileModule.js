export default {
    state: {
        temporaryImage: null,
        temporaryVideo: null,
    },
    mutations: {
      setTemporaryImage(state, image) {
        state.temporaryImage = image;
        sessionStorage.setItem('temporaryImage', JSON.stringify(image));
      },
      setTemporaryVideo(state, video) {
        state.temporaryVideo = video;
        sessionStorage.setItem('temporaryVideo', JSON.stringify(video));
      },
      clearTemporaryImage(state) {
        state.temporaryImage = null;
        sessionStorage.removeItem('temporaryImage');
      },
      clearTemporaryVideo(state) {
        state.temporaryVideo = null;
        sessionStorage.removeItem('temporaryVideo');
      },
    },
    actions: {
      saveTemporaryImage({ commit }, image) {
        commit('setTemporaryImage', image);
      },
      saveTemporaryVideo({ commit }, video) {
        commit('setTemporaryVideo', video);
      },
      clearTemporaryImage({ commit }) {
        commit('clearTemporaryImage');
      },
      clearTemporaryVideo({ commit }) {
        commit('clearTemporaryVideo');
      },
    },
    getters: {
      getPreviewImage(state) {
        return state.temporaryImage;
      },
      getPreviewVideo(state) {
        return state.temporaryVideo;
      },
    },
}