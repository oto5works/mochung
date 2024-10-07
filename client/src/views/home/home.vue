<template>
  <div class="container">
    <div class="particles">
    <!--  <tsParticles /> -->
    </div>

    <div class="layer-1">
      <div class="mobile" />

      ㅇㅇㅇ
    </div>

    <tooltipMenu>
      <listItem />
      <listItem icon="upload" label="삭제" />
      <listItem icon="upload" label="감지형" />

      <listItem icon="upload" label="삭제" />

      <listItem icon="upload" label="삭제" />
    </tooltipMenu>
    <div class="layer-2">
      <h1>style: tonal</h1>
      <div class="sp_180" />
      <div class="sp_180" />
      <div class="sp_180" />
      <div class="sp_180" />
      <div class="sp_180" />
      <div class="sp_180" />
      <div class="sp_180" />
      <div class="sp_180" />
      <div class="sp_180" />
      <div class="sp_180" />
      <buttonDefault variant="tonal" height="18"
        ><span>18-height</span></buttonDefault
      >
      <div class="sp_180" />
      <buttonDefault variant="tonal" height="24"
        ><span>24-height</span></buttonDefault
      >
      <div class="sp_180" />
      <buttonDefault variant="tonal" height="32"
        ><span>32-height</span></buttonDefault
      >
      <div class="sp_180" />
      <buttonDefault variant="tonal" height="36"
        ><span>36-height</span></buttonDefault
      >

      <buttonDefault variant="tonal" height="40"
        ><span>40-height</span></buttonDefault
      >

      <buttonDefault variant="tonal" height="46"
        ><span>46-height</span></buttonDefault
      >
    </div>
    <div class="layer-3">gird 영역 ;;;</div>
    <likeView />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import app from "@/components/icon/app.vue";
import likeView from "@/preview/like/likeView.vue";
import tooltipMenu from "@/components/tooltip/tooltipMenu.vue";
import listItem from "@/components/listItem/listItem.vue";
//import tsParticles from "@/components/tsParticles/tsParticles.vue";

export default {
  components: {
    app,
    likeView,
    tooltipMenu,
    listItem,
    // tsParticles
  },
  data() {
    return {
      data1: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.particles {
  position: absolute;
  top: 300px;
  left: 300px;
  width: 300px;
  height: 300px;
  background: aqua;
}
</style>
