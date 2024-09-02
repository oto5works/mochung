<template>
  <div class="effectView">
    <tsParticlesView :effect="effectData" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    tsParticlesView: defineAsyncComponent(() =>
      import("@/components/tsParticles/tsParticlesView.vue")
    ),
  },
  computed: {
    ...mapGetters({
      effectData: "getEffectData",
    }),
  },
};
</script>

<style scoped>
.effectView {
  position: absolute;
  display: block;
  width: 100%;
  height: 120%;
  top: 0;
  left: 0;
  z-index: 3;
}
</style>
