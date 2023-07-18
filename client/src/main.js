import App from './App.vue'
import axios from 'axios'

// Composables
import { createApp, reactive } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

axios.interceptors.request.use(function (config) {
    //const tokenType =  localStorage.getItem('token-type') || ''
    const accessToken =  localStorage.getItem('token') || ''
  
    config.headers.Authorization = accessToken
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

const GStore = reactive({ successMessage: '', errorMessage: '', session: null });

const app = createApp(App);

app.config.globalProperties.$http = axios;
registerPlugins(app)

app.provide("GStore", GStore);
app.mount("#app");