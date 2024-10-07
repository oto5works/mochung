import { defineAsyncComponent } from "vue";

const compHome = {
  minimalChic: defineAsyncComponent(() =>
    import("@/preview/home/home/minimalChic.vue")
  ),
  classicElegance: defineAsyncComponent(() =>
    import("@/preview/home/home/classicElegance.vue")
  ),
  modernSimplicity: defineAsyncComponent(() =>
    import("@/preview/home/home/modernSimplicity.vue")
  ),
  welcomingWarmth: defineAsyncComponent(() =>
    import("@/preview/home/home/welcomingWarmth.vue")
  ),
  elegantFlow: defineAsyncComponent(() =>
    import("@/preview/home/home/elegantFlow.vue")
  ),
  elegantSimplicity: defineAsyncComponent(() =>
    import("@/preview/home/home/elegantSimplicity.vue")
  ),
};

export default compHome;
