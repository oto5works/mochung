<template>
  <div class="heroIllust">
    {{ heroIllust }}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      heroIllust: "getHeroIllust",
    }),
  },
};
</script>
<style scoped>
.heroIllust {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
