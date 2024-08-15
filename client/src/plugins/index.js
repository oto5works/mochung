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

// dialog
// import modalDialog from "@/components/overlay/modalDialog.vue";
// import bottomSheet from "@/components/overlay/bottomSheet.vue";
import dialogFull from "@/components/dialog/dialogFull.vue"; // new
import dialogBottom from "@/components/dialog/dialogBottom.vue"; // new
import dialogModal from "@/components/dialog/dialogModal.vue"; // new



// input
import textField from "@/components/input/textField.vue";
import textArea from "@/components/input/textArea.vue";

import formTitle1 from "@/modules/formTitle/formTitle1.vue";
import formTitle2 from "@/modules/formTitle/formTitle2.vue";
import formTitle3 from "@/modules/formTitle/formTitle3.vue";
import formBox from "@/modules/formBox/formBox.vue";

// button
import buttonOption from "@/components/button/buttonOption.vue";
import buttonDefault from "@/components/button/buttonDefault.vue"; // new
import buttonTab from "@/components/button/buttonTab.vue"; // new

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

// title
import titleMain from "@/components/title/titleMain.vue"; // new
import titleArticle from "@/components/title/titleArticle.vue"; // new

// card
import card from "@/components/card/card.vue";
import cardView from "@/components/cardView/cardView.vue"; // new

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

export function registerPlugins(app) {
  app
    .use(store)
    .use(router)
    .use(vuetify)
    .use(setupCalendar, {})
    .use(Particles)
    .use(Slicksort)
    .use(tinycolor)

    .component("icon", icon)
    .component("arrowLeft", arrowLeft)
    .component("x", x)
    .component("caretLeft", caretLeft) // new
    .component("caretRight", caretRight) // new
    .component("arrowUpRight", arrowUpRight) // new
    .component("check", check) // new




    // .component("modalDialog", modalDialog)
    // .component("bottomSheet", bottomSheet)
    .component("dialogFull", dialogFull) // new
    .component("dialogBottom", dialogBottom) // new
    .component("dialogModal", dialogModal) // new

    
    
    .component("textField", textField)
    .component("textArea", textArea)

    .component("formTitle1", formTitle1)
    .component("formTitle2", formTitle2)
    .component("formTitle3", formTitle3)

    .component("formBox", formBox)
    .component("buttonOption", buttonOption)
    .component("buttonDefault", buttonDefault) // new
    .component("buttonTab", buttonTab) // new

    .component("buttonSelect", buttonSelect)
    .component("buttonFlicking", buttonFlicking)
    .component("buttonCheck", buttonCheck)
    .component("buttonText", buttonText)

    .component("chip", chip) // new
    .component("listItem", listItem) // new
    .component("toggleSwitch", toggleSwitch) // new
    .component("titleMain", titleMain) // new
    .component("titleArticle", titleArticle) // new
    .component("cardView", cardView) // new

    
    
    .component("card", card);
}
