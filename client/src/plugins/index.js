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
// import modalDialog from "@/components/overlay/modalDialog.vue";
// import bottomSheet from "@/components/overlay/bottomSheet.vue";
import dialogFull from "@/components/dialog/dialogFull.vue"; // new
import dialogBottom from "@/components/dialog/dialogBottom.vue"; // new
import dialogModal from "@/components/dialog/dialogModal.vue"; // new
import "@/components/dialog/overlay.scss";



// input
import formField from "@/components/formField/formField.vue"; // new


import textField from "@/components/input/textField.vue";
import textArea from "@/components/input/textArea.vue";


// button
import buttonOption from "@/components/button/buttonOption.vue";
import buttonDefault from "@/components/button/buttonDefault.vue"; // new

import buttonSelect from "@/components/button/buttonSelect.vue";
import buttonFlicking from "@/components/button/buttonFlicking.vue";
import buttonCheck from "@/components/button/buttonCheck.vue";
import buttonText from "@/components/button/buttonText.vue";

// chip
import chip from "@/components/chip/chip.vue"; // new

// listItem
import listItem from "@/components/listItem/listItem.vue"; // new

// switch
import toggleSwitch from "@/components/toggleSwitch/toggleSwitch.vue"; // new

//checkbox
import checkbox from "@/components/checkbox/checkbox.vue"; // new

// title
import titleMain from "@/components/title/titleMain.vue"; // new
import titleArticle from "@/components/title/titleArticle.vue"; // new
import titleSection from "@/components/title/titleSection.vue"; // new

// card
import card from "@/components/card/card.vue";
import cardView from "@/components/cardView/cardView.vue"; // new

// sidebar
import sidebar from "@/components/sidebar/sidebar.vue"; // new

// Plugins
import store from "../store/index";
import router from "../router";


// css
import "@/styles/flicking.scss";
import "@/components/button/button.scss";
import "@/components/input/input.scss";
import "@/styles/common.scss";


// Sticky
// VueYouTubeEmbed

// Vuetify
import vuetify from "./vuetify";
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
    .use(vuetify)
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


    

    // .component("modalDialog", modalDialog)
    // .component("bottomSheet", bottomSheet)
    .component("dialogFull", dialogFull) // new
    .component("dialogBottom", dialogBottom) // new
    .component("dialogModal", dialogModal) // new


    .component("formField", formField)

    
    
    .component("textField", textField)
    .component("textArea", textArea)


    .component("buttonOption", buttonOption)
    .component("buttonDefault", buttonDefault) // new

    .component("buttonSelect", buttonSelect)
    .component("buttonFlicking", buttonFlicking)
    .component("buttonCheck", buttonCheck)
    .component("buttonText", buttonText)

    .component("chip", chip) // new
    .component("listItem", listItem) // new
    .component("toggleSwitch", toggleSwitch) // new
    .component("checkbox", checkbox) // new


    
    .component("titleMain", titleMain) // new
    .component("titleArticle", titleArticle) // new
    .component("titleSection", titleSection) // new

    
    .component("cardView", cardView) // new
    .component("sidebar", sidebar) // new

    
    
    .component("card", card);
}
