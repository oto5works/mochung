<template>
  <div class="effect__wrap">
    <effectComp :effect="effectData" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    effectComp: defineAsyncComponent(() =>
      import("@/modules/effect/effectComp.vue")
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
.effect__wrap {
  position: absolute;
  display: block;
  width: 100%;
  height: 120%;
  top: 0;
  left: 0;
  z-index: 3;
}
</style>
