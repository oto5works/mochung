<template>
  <div id="previewHome">
    <component
      :is="previewHome.style"
      :options="previewHome.options"
      :color="homeColor"
      :fontFamily="null"
    />
    <!--<frameView v-if="previewHome.frame" :frame="previewHome.frame" />-->
    <heroView :item="previewHome.item" />
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
    home1: defineAsyncComponent(() =>
      import("@/preview/home/home/home1.vue")
    ),
    home2: defineAsyncComponent(() =>
      import("@/preview/home/home/home2")
    ),
    home3: defineAsyncComponent(() =>
      import("@/preview/home/home/home3")
    ),
    home4: defineAsyncComponent(() =>
      import("@/preview/home/home/home4")
    ),
    home5: defineAsyncComponent(() =>
      import("@/preview/home/home/home5")
    ),
    home6: defineAsyncComponent(() =>
      import("@/preview/home/home/home6")
    ),
    home7: defineAsyncComponent(() =>
      import("@/preview/home/home/home7")
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
  background-color: var(--tr-bc-tr);
}
.home__wrap {
  position: relative;
  width: 100%;
  height: 100%;
  color: var(--home-color);
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
