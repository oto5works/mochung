/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */
// component
import icon from "@/components/icon/icon.vue";
import arrowLeft from "@/components/icon/arrowLeft.vue";
import x from "@/components/icon/x.vue";
import caretLeft from "@/components/icon/caretLeft.vue"; // new
import caretRight from "@/components/icon/caretRight.vue"; // new
import arrowUpRight from "@/components/icon/arrowUpRight.vue"; // new
import check from "@/components/icon/check.vue"; // new
import search from "@/components/icon/search.vue"; // new

// dialog
import dialogBottom from "@/components/dialog/dialogBottom.vue"; // new
import dialogModal from "@/components/dialog/dialogModal.vue"; // new
import "@/components/dialog/overlay.scss"; // new



// 프리뷰에서 사용되는 COMPONENTS
import sectionView from "@/preview/components/sectionView.vue"; // new
import sectionViewAlt from "@/preview/components/sectionViewAlt.vue"; // new


import buttonCustom from "@/preview/components/buttonCustom.vue"; // new



// input
import formField from "@/components/formField/formField.vue"; // new




// button
import buttonDefault from "@/components/button/buttonDefault.vue"; // new

// chip
import chip from "@/components/chip/chip.vue"; // new

// listItem
import listItem from "@/components/listItem/listItem.vue"; // new

// switch
import toggleSwitch from "@/components/toggleSwitch/toggleSwitch.vue"; // new

//checkbox
import checkbox from "@/components/checkbox/checkbox.vue"; // new

// title
import titlePage from "@/components/title/titlePage.vue"; // new
import titleMain from "@/components/title/titleMain.vue"; // new
import titleArticle from "@/components/title/titleArticle.vue"; // new
import titleSection from "@/components/title/titleSection.vue"; // new

// card
import cardView from "@/components/cardView/cardView.vue"; // new

// sidebar
import sidebar from "@/components/sidebar/sidebar.vue"; // new

// Plugins
import store from "../store/index";
import router from "../router";


// css
import "@/styles/flicking.scss";
import "@/components/button/button.scss";
import "@/styles/common.scss";
import "@/styles/variable.scss";
import "@/styles/font.scss";
import "@/styles/reset.scss";
import "@/styles/z-index.scss";
import "@/styles/layout.scss";



// Sticky
// VueYouTubeEmbed

// tinycolor
import tinycolor from "tinycolor2";
// V-Calendar
import { setupCalendar } from "v-calendar";
// Particles
import Particles from "vue3-particles";
// Slicksort
import { plugin as Slicksort } from "vue-slicksort";
import "sal.js/dist/sal.css";
// vClickOutside
import vClickOutside from 'v-click-outside'

export function registerPlugins(app) {
  app
    .use(store)
    .use(router)
    .use(setupCalendar, {})
    .use(Particles)
    .use(Slicksort)
    .use(tinycolor)
    .use(vClickOutside)


    .component("icon", icon)
    .component("arrowLeft", arrowLeft)
    .component("x", x)
    .component("caretLeft", caretLeft) // new
    .component("caretRight", caretRight) // new
    .component("arrowUpRight", arrowUpRight) // new
    .component("check", check) // new
    .component("search", search) // new


    

    .component("dialogBottom", dialogBottom) // new
    .component("dialogModal", dialogModal) // new
    .component("sectionView", sectionView) // new
    .component("sectionViewAlt", sectionViewAlt) // new

    
    .component("formField", formField) // new

    
    


    .component("buttonDefault", buttonDefault) // new
    .component("buttonCustom", buttonCustom) // new



    .component("chip", chip) // new
    .component("listItem", listItem) // new
    .component("toggleSwitch", toggleSwitch) // new
    .component("checkbox", checkbox) // new


    .component("titlePage", titlePage) // new

    .component("titleMain", titleMain) // new
    .component("titleArticle", titleArticle) // new
    .component("titleSection", titleSection) // new

    
    .component("cardView", cardView) // new
    .component("sidebar", sidebar) // new

    
    
}
