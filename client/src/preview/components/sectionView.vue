<template>
  <section class="sectionView" :class="design">
    <slot></slot>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      design: "getDesign",
    }),
  },
};
</script>

<style scoped>
.sectionView {
  position: relative;
  display: block;
  padding: 0.25em 0.5em;
}
.sectionView.design3 {
  border-top: 0.0625em solid rgba(var(--primary-color), 0.4);
}
.section-content {
  position: relative;
  display: block;
}
</style>
