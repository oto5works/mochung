<template>
  <selectorColor
    v-model="effect.color"
    :options="effectColorOptions"
    title="Main Color Theme"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import selectorColor from "@/components/selector/selectorColor.vue";

export default {
  components: {
    selectorColor,
  },
  props: {
    effect: { type: Object },
  },
  computed: {
    ...mapGetters({
      effectColorOptions: "getEffectColorOptions",
    }),
  },
};
</script>


