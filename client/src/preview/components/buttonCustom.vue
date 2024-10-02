<template>
  <button
    class="buttonCustom"
    :class="{
      design3: design === 'design3',
      border: border,
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
  props: {},
  computed: {
    ...mapGetters({
      design: "getDesign",
      shadow: "getShadow",
      border: "getBorder",
    }),
  },
  methods: {},
};
</script>

<style scoped>
/* common */
.buttonCustom {
  color: rgb(var(--primary-on));
  height: 2.5em;
  padding: 0 1.125em;
  font-size: var(--font-size_13);
  font-weight: var(--font-weight_500);
  border-radius: var(--border-radius_14);
}
.buttonCustom .underlay {
  background-color: rgb(var(--primary-color));
}
.buttonCustom .shadow {
  box-shadow: 0 0.625em 1.25em -0.625em rgba(var(--primary-color), 0.5);
}
.buttonCustom.border {
  color: rgb(var(--primary-color));
}
.buttonCustom.border .underlay {
  background-color: transparent;
  border: 0.0625em solid rgb(var(--primary-color));
}
.buttonCustom.design3 {
  color: rgb(var(--primary-color));
  padding: 0;
  text-decoration: underline;
  background-color: transparent;
}
.buttonCustom.design3 .shadow,
.buttonCustom.design3 .underlay {
  display: none;
}
</style>
