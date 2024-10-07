<template>
  <div id="homeView">
    <component
      :is="previewHome.style"
      :options="previewHome.options"
      :color="homeColor"
      :fontFamily="null"
    />

    <!--<frameView v-if="previewHome.frame" :frame="previewHome.frame" />-->
    <heroView v-if="previewHome.fnFile" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import compHome from "@/services/compHome.js";

export default {
  components: {
    frameView: defineAsyncComponent(() =>
      import("@/preview/home/frame/frameView")
    ),
    heroView: defineAsyncComponent(() =>
      import("@/preview/home/hero/heroView.vue")
    ),
    ...compHome,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
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
}
.home {
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
