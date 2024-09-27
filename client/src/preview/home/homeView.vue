<template>
  <div id="previewHome">
    <component
      :is="previewHome.style"
      :options="previewHome.options"
      :color="homeColor"
      :fontFamily="null"
    />
    
    <!--<frameView v-if="previewHome.frame" :frame="previewHome.frame" />-->
    <heroView v-if="previewHome.fnFile"  />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    frameView: defineAsyncComponent(() =>
      import("@/preview/home/frame/frameView")
    ),
    heroView: defineAsyncComponent(() =>
      import("@/preview/home/hero/heroView.vue")
    ),
    minimalChic: defineAsyncComponent(() =>
      import("@/preview/home/home/minimalChic.vue")
    ),
    classicElegance: defineAsyncComponent(() =>
      import("@/preview/home/home/classicElegance")
    ),
    modernSimplicity: defineAsyncComponent(() =>
      import("@/preview/home/home/modernSimplicity")
    ),
    welcomingWarmth: defineAsyncComponent(() =>
      import("@/preview/home/home/welcomingWarmth")
    ),
    elegantFlow: defineAsyncComponent(() =>
      import("@/preview/home/home/elegantFlow")
    ),
  },
  computed: {
    ...mapGetters({
      previewHome: "getPreviewHome",
      homeColor: "getHomeColor",
    }),
  },
};
</script>

<style scoped>
#previewHome {
  position: relative;
  width: 100%;
  aspect-ratio: var(--mio-theme-aspect-ratio);
}
.home__wrap {
  position: relative;
  width: 100%;
  height: 100%;
  color: var(--home-color);
  pointer-events: none;
  z-index: 3;
}
.frame__wrap {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.hero__wrap {
  position: absolute;
  z-index: 1;
}
</style>
