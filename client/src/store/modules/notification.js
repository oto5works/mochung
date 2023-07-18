const Noti = {
    state: {
        NotiMessage: '',
        NotiShow: false,
        NotiType: '',
      },
      mutations: {
        setNotiMessage(state, NotiMessage) {
            state.NotiMessage = NotiMessage
        },
        setNotiShow(state, value) {
            state.NotiShow = value
        },
        setNotiType(state, type) {
          state.NotiType = type
      },
      },
      getters: {
        getNotiMessage(state) {
          return state.NotiMessage
        },
        getNotiShow(state) {
          return state.NotiShow
        },
        getNotiType(state) {
          return state.NotiType
        },
      },
      actions: {
        hideNoti({ commit }) {
          commit('setNotiShow', false)
          commit('setNotiMessage', '')
          commit('setNotiType', '')
        }
      }
}

export default Noti;