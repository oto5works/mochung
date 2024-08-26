<template>
  <div class="frame__wrap">
    <frame class="frame" v-if="frame" :class="frame">
      <component :is="frame" />
    </frame>
    <frame class="frame flipped" v-if="frame" :class="frame">
      <component :is="frame" />
    </frame>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    frame: defineAsyncComponent(() =>
      import("@/components/frame/frame")
    ),
    flower: defineAsyncComponent(() =>
      import("@/components/frame/flower")
    ),
    star: defineAsyncComponent(() =>
      import("@/components/frame/star")
    ),
    baroque: defineAsyncComponent(() =>
      import("@/components/frame/baroque")
    ),
  },
  props: { frame: { type: String } },
};
</script>
<style scoped>
.frame__wrap {
  width: 100%;
  height: 100%;
}
.frame__wrap .frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  fill: none;
  stroke: var(--primary-color);
  color: var(--primary-color);
  stroke-width: 1.1;
}
.frame.flipped {
  transform: rotate(180deg) translateY(-100%);
}
</style>
