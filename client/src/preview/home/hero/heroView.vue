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
    <heroComp />
  </div>
</template>

<script>
import heroComp from "@/preview/home/hero/heroComp.vue";

export default {
  components: {
    heroComp,
  },
  props: {
    item: { type: Object },
  },
  computed: {
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
