<!-- customData.vue -->
<script>
import { mapGetters, mapActions } from "vuex";
import {
  setColorStyle,
  setDocumentAttribut,
  setDocumentProperty,
} from "@/services/function";
export default {
  computed: {
    ...mapGetters({
      customData: "getCustomData",
      homeColor: "getHomeColor",
    }),
  },
  mounted() {
    const primaryColor = this.customData.primaryColor;
    const backgroundColor = this.customData.backgroundColor;
    setColorStyle("primary", primaryColor);
    setColorStyle("background", backgroundColor);

    // primary-style
    const design = this.customData.design;
    const radius = this.customData.radius;
    // const border = this.customData.border;
    // const shadow = this.customData.shadow;
    // const spacing = this.customData.fontFamily;
    const fontSize = this.customData.fontSize;
    const fontWeight = this.customData.fontWeight;
    const fontAlign = this.customData.fontAlign;

    setDocumentAttribut("design", design);
    setDocumentAttribut("radius", radius);
    // setDocumentAttribut('border', border);
    // setDocumentAttribut('shadow', shadow);
    // setDocumentAttribut("spacing", spacing);
    setDocumentAttribut("font-size", fontSize);
    setDocumentAttribut("font-weight", fontWeight);
    setDocumentAttribut("font-align", fontAlign);

    // font-style
    const fontColor = this.customData.fontColor;
    const fontFamily = this.customData.fontFamily;
    const homeColor = this.homeColor;
    setDocumentProperty("font-color", fontColor);
    setDocumentProperty("font-family", fontFamily);
    setDocumentProperty("home-color", homeColor);

    // gradient
    // const gradient1 = this.customData.gradient1;
    // const gradient2 = this.customData.gradient2;
    // const gradient3 = this.customData.gradient3;
    // setDocumentProperty("gradient-1", gradient1);
    // setDocumentProperty("gradient-2", gradient2);
    // setDocumentProperty("gradient-3", gradient3);
  },
  watch: {
    // Color
    "customData.primaryColor": (newValue) => setColorStyle("primary", newValue),
    "customData.backgroundColor": (newValue) =>
      setColorStyle("background", newValue),

    // radius
    "customData.radius": (newValue) => setDocumentAttribut("radius", newValue),
    // border
    //'customData.border': (newValue) => setDocumentAttribut('border', newValue),
    // shadow
    //'customData.shadow': (newValue) => setDocumentAttribut('shadow', newValue),
    // font
    "customData.fontFamily": (newValue) => {
      // setDocumentAttribut("spacing", newValue);
      setDocumentProperty("font-family", newValue);
    },
    "customData.fontSize": (newValue) =>
      setDocumentAttribut("font-size", newValue),
    "customData.fontWeight": (newValue) =>
      setDocumentAttribut("font-weight", newValue),
    "customData.fontAlign": (newValue) =>
      setDocumentAttribut("font-align", newValue),
    "customData.fontColor": (newValue) =>
      setDocumentProperty("font-color", newValue),
    homeColor: (newValue) => setDocumentProperty("home-color", newValue),
    // "customData.gradient1": (newValue) =>
    //  setDocumentProperty("gradient-1", newValue),
    // "customData.gradient2": (newValue) =>
    //  setDocumentProperty("gradient-2", newValue),
    // "customData.gradient3": (newValue) =>
    //  setDocumentProperty("gradient-3", newValue),

    // design
    "customData.design": (newValue) => setDocumentAttribut("design", newValue),
  },
  methods: {
    ...mapActions(["updateFormDataAction"]),
  },
};
</script>
