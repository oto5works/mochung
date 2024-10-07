<!-- effectView.vue -->
<template>
  <div class="effectView">
    <tsParticlesView ref="tsParticlesRef" :effect="effectData" />
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

  beforeUnmount: async function () {
    console.log("Parent component is being unmounted");
    if (this.$refs.tsParticlesRef) {
      try {
        await this.$refs.tsParticlesRef.destroyParticles();
      } catch (error) {
        console.error("Error during destroyParticles:", error);
      }
    }
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
