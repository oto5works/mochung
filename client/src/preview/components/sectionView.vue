<template>
  <section 
  :class="{ design3: design === 'design3' }"
  >
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
section {
  position: relative;
  display: block;
  padding: 4px 8px;
}
.design3 {
  border-top: 1px solid rgba(var(--primary-color), 0.4);
  padding: 0;
}
.section-content {
    position: relative;
    display: block;
}
</style>
