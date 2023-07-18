/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import store from '../store/index'
import router from '../router'
// Sticky
// Flicking
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
// Vuetify
import vuetify from './vuetify'
// tinycolor
import tinycolor from 'tinycolor2'
// V-Calendar
import { setupCalendar } from 'v-calendar';
// Particles
import Particles from "vue3-particles";
import "@/styles/common.scss";
// Lottie
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
// DaumPostcode
import VueDaumPostcode from 'vue-daum-postcode'
// Slicksort
import { plugin as Slicksort } from 'vue-slicksort';
import 'sal.js/dist/sal.css';

export function registerPlugins (app) {
  app
    .use(store)
    .use(router)
    .use(vuetify)
    .use(setupCalendar, {})
    .use(Particles)
    .component("Flicking", Flicking)
    .use(Vue3Lottie)
    .use(VueDaumPostcode)
    .use(Slicksort)
    .use(tinycolor)
}
