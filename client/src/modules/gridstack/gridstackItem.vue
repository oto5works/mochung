<!-- gridStackItem.vue -->

<template>
  <div
    class="grid-stack-item"
    :id="item.id"
    :gs-id="item.id"
    :data-gs-x="item.x"
    :data-gs-y="item.y"
    :data-gs-width="item.w"
    :data-gs-height="item.h"
    :style="{ top: topValue }"
  >
    <heroComp />
  </div>
</template>

<script>
import heroComp from "@/modules/hero/heroComp.vue";

export default {
  components: {
    heroComp,
  },
  props: {
    item: { type: Object },
  },
  computed: {
    topValue() {
      return `calc(${this.item.y} * 24px)`;
    },
  },
};
</script>

<style scoped>
.grid-stack-item {
  position: absolute;
  background-size: cover;
  background-position: center;
  cursor: move;
  z-index: 1;
}
</style>
