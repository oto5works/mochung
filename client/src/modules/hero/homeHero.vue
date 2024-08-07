<template>
  <div
    class="hero__wrap"
    :style="{
      top: topValue,
      left: leftValue,
      width: widthValue,
      height: heightValue,
    }"
  >
    <heroFiles v-if="heroType === 'file'" />
    <heroIllust v-if="heroType === 'illust'" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    heroFiles: defineAsyncComponent(() =>
      import("@/components/component/hero/heroFiles")
    ),
    heroIllust: defineAsyncComponent(() =>
      import("@/components/component/hero/heroIllust")
    ),
  },
  computed: {
    ...mapGetters({
      heroType: "getHeroType",
    }),
    topValue() {
      return `calc(${this.item.y} * 8.33%)`;
    },
    leftValue() {
      return `calc(${this.item.x} * 12.5%)`;
    },
    widthValue() {
      return `calc(${this.item.w} * 12.5%)`;
    },
    heightValue() {
      return `calc(${this.item.h} * 8.33%)`;
    },
  },
};
</script>
<style scoped>

</style>
