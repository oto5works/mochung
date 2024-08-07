<template>
  <div class="heroWrap">
    <component :is="heroType" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    file: defineAsyncComponent(() => import("@/modules/hero/heroFile.vue")),
    illust: defineAsyncComponent(() => import("@/modules/hero/heroIllust.vue")),
  },
  computed: {
    ...mapGetters({
      heroType: "getHeroType",
    }),
  },
};
</script>
<style scoped>
.heroWrap {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
