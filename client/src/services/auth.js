import axios from 'axios';
import store from '../store/index';
import router from '@/router/index';

const baseUrl = '/api/auth'
const url = window.location.href

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;`;
  // cookie에서 배포 완료후 맨뒤에 path=/;secure;HttpOnly 해당 코드 넣어줄것.
  document.cookie = cookie;
}

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
      // 1. 네이버에서 콜백 받기
        .get(baseUrl + '/naver/callback', {
          params: {
            code: code,
            state: state
          }
        })
        // 2. 토큰 데이터를 받는다.
        .then(response => {
          console.log('callback', response)
          console.log('callback2', response.data)

          const data = response['data']
          const access_token = data['access_token']
          const refresh_token = data['refresh_token']
          const token_type = data['token_type']

          axios
          // 3. 토큰 데이터를 네이버로 다시 전달해서 유저데이터 받아오기.
            .post(baseUrl + '/naver/me', {
              access_token,
              refresh_token,
              token_type
            })
            .then(response => {
              console.log('내정보는요?', response.data)
              const me = response.data.response
              const id = me['id']
              const nickname = me['nickname']
              const age = me['age'] // 연령
              const gender = me['gender'] // 성별
              const email = me['email']
              const mobile = me['mobile'] // 연락처
              const name = me['name']
              const birthday = me['birthday']
              const birthYear = me['birthYear']
            // 4. 받아온 유저데이터 다시 서버로 전달.
              axios
                .post(baseUrl + '/naver/register', {
                  id,
                  nickname,
                  age,
                  gender,
                  email,
                  mobile,
                  name,
                  birthday,
                  birthYear,
                  access_token
                })
              // 5. 받아온 데이터를 store에 저장 & token은 쿠키에 저장.
                .then(response => {
                  console.log('register', response.data)

                  // token은 쿠키에 저장
                  setCookie('vatoken', response.data['token'], 7);

                  const userId = response.data['id']
                  const status = response.data['status']
                  const email = response.data['email']

                  const userData = { userId, status, email }
                  router.push('/');
                  
                  // navigate to home page
                })
                .catch(error => {
                  console.error('사용자 등록 중 오류 발생', error)
                  // display error message
                  alert('사용자 등록 중 오류 발생')
                })
            })
            .catch(error => {
              console.error('사용자 데이터 가져오기 오류', error)
              // display error message
              alert('사용자 데이터 가져오기 오류')
            })
        })
        .catch(error => {
          console.error('인증 오류', error)
          // display error message
          alert('인증 오류')
        })
    }
  }
}

export function logoutAuth() {
  // Clear the 'token' cookie
  document.cookie = 'vatoken=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;';

  // Commit the 'logout' mutation in the Vuex store
  store.commit('logout');
}




// Assuming you have a function to get cookies named getCookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop().split(';').shift();
    console.log(`Found cookie value for ${name}:`, cookieValue);
    return cookieValue;
  } else {
    console.log(`Cookie ${name} not found.`);
    return undefined;  // Return undefined if the cookie is not found
  }
}

export function checkToken() {
  return new Promise((resolve, reject) => {
    // Get the token from the cookie or wherever it is stored
    const token = getCookie('vatoken');

    console.log('Token from cookie:', token);

    if (token) {
      // If token exists, send it to the server for verification
      axios
        .get(baseUrl + '/check', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          console.log('Token verification successful', response.data);

          // Resolve with user data or other relevant information
          resolve(response.data);
        })
        .catch(error => {
          console.error('Token verification failed', error);

          // Reject with an error message or status
          reject(error);
        });
    } else {
      console.warn('No token found. User is not authenticated.');
      // Handle the case where no token is found, e.g., redirect to the login page

      // Reject with an error message or status
      reject('No token found');
    }
  });
}


