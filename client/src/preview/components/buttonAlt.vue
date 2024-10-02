<template>
  <button
    class="buttonAlt"
    :class="{
      design3: design === 'design3',
      border: border,
      [variant]: true,
    }"
  >
    <slot></slot>
    <div class="underlay" />
    <div v-if="shadow" class="shadow" />
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    variant: {
      type: String,
      default: "fuctions", // audios, fuctions
    },
  },
  computed: {
    ...mapGetters({
      design: "getDesign",
      shadow: "getShadow",
      border: "getBorder",
    }),
  },
};
</script>

<style scoped>
.buttonAlt {
  color: rgb(var(--primary-on));
  backdrop-filter: blur(0.25em);
  -webkit-backdrop-filter: blur(0.25em);
}
.buttonAlt.fuctions {
  width: 3.25em;
  height: 3.25em;
  border-radius: var(--border-radius_20);
}
.buttonAlt.audios {
  width: 2em;
  height: 2em;
  border-radius: var(--border-radius_14);
}
.buttonAlt .underlay {
  background-color: rgb(var(--primary-color));
}
.buttonAlt .shadow {
  box-shadow: 0 0.625em 1.25em -0.625em rgba(var(--primary-color), 0.5);
}
.buttonAlt.border {
  color: rgb(var(--primary-color));
}
.buttonAlt.border .underlay {
  background-color: transparent;
  border: 0.0625em solid rgb(var(--primary-color));
}
.buttonAlt.design3 {
  color: rgb(var(--primary-color));
  background-color: rgba(var(--primary-color), 0.08);
}
.buttonAlt.design3 .shadow,
.buttonAlt.design3 .underlay {
  display: none;
}
</style>
