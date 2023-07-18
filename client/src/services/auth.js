import axios from 'axios';
import store from '../store/index';
import router from '../router/index';

const baseUrl = '/api/auth'
const url = window.location.href

export function loginAuth() {
  console.log('loginAuth시작')
  console.log('baseUrl', baseUrl)
  console.log('url', url)

  if (url.indexOf('?')) {
    console.log('url.indexOf')
    const param = url.split('?')[1].split('&')

    if (param != null && param != '') {
      console.log('param != null && param !=')
      const code = param[0].split('=')[1]
      const state = param[1].split('=')[1]

      axios
        .get(baseUrl + '/naver/callback', {
          params: {
            code: code,
            state: state
          }
        })
        .then(response => {
          console.log('callback', response)
          console.log('callback', response.data)

          const data = response['data']
          const access_token = data['access_token']
          const refresh_token = data['refresh_token']
          const token_type = data['token_type']

          axios
            .post(baseUrl + '/naver/me', {
              access_token,
              refresh_token,
              token_type
            })
            .then(response => {
              console.log('me', response.data)

              const me = response.data.response

              const id = me['id']
              const name = me['name']
              const nickname = me['nickname']
              const email = me['email']

              axios
                .post(baseUrl + '/naver/register', {
                  id,
                  name,
                  nickname,
                  email,
                  access_token
                })
                .then(response => {
                  console.log('register', response.data)
                  const token = response.data['token']
                  const data = {
                    access_token,
                    refresh_token,
                    token_type,
                    name,
                    token
                  }
                  console.log('register.data', data)
                  store.commit('SOCIAL_LOGIN', { data })
                  store.commit('setNotiMessage', '로그인 성공 !')
                  store.commit('setNotiShow', true)
                  store.commit('setNotiType', 'success')

                  // navigate to home page
                })
                .catch(error => {
                  console.error('Error registering user', error)
                  // display error message
                  alert('Error registering user')
                })
            })
            .catch(error => {
              console.error('Error fetching user data', error)
              // display error message
              alert('Error fetching user data')
            })
        })
        .catch(error => {
          console.error('Error with authentication', error)
          // display error message
          alert('Error with authentication')
        })
    }
  }
}
export function logoutAuth() {
    store.commit('LOGOUT')
    store.commit('setNotiMessage', '로그아웃 완료')
    store.commit('setNotiShow', true)
    store.commit('setNotiType', 'success')
}