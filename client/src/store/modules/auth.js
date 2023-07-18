import router from '@/router/index';


const auth = {
    state: {
        accessToken: localStorage.getItem('token') || '',
        //refresh_token: localStorage.getItem('refresh-token') || '',
        //status: '',
        //username: '',
        //token_type: ''
      },
    
      getters: {
        isAuthenticated: state  => !!state.accessToken,
        //authStatus: state => state.status,
        //getUserName: state => state.username
      },
    
      mutations: {
        LOGIN (state, {data}) {
          state.accessToken = data.token
          state.username = data.name
          localStorage.setItem('access-token', data.token)
          localStorage.setItem('token-type', 'Bearer')
        },
        LOGOUT (state) {
          state.accessToken = null
          state.refresh_token = null
          state.status = ''
          //localStorage.removeItem('access-token')
          //localStorage.removeItem('refresh-token')
          //localStorage.removeItem('token-type')
          localStorage.removeItem('token')
          router.push('/')
        },
    
        SOCIAL_LOGIN (state, { data }) {

            //state.accessToken = data.access_token
            //state.refresh_token = data.refresh_token
            //state.token_type = data.token_type
            //state.username = data.name
            state.token = data.token

            // Save data to cookies
            //localStorage.setItem('access-token', state.accessToken)
            //localStorage.setItem('refresh-token', state.refresh_token)
            //localStorage.setItem('token-type', state.token_type)
            localStorage.setItem('token', state.token)
            router.push('/')
          }
      },
    
      actions: {
        async LOGIN ({commit}, {email, password}) {
          return await axios.post(`${resourceHost}/api/auth/login`,{email, password})
            .then(({data}) => {
              commit('LOGIN', {data})
            })
        },
        LOGOUT ({commit}) {
          commit('LOGOUT')
        },
      }

}

export default auth;