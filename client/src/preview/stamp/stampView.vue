<template>
  <div style="min-height: 48px;" class="flex flex-direction_column justify-content_center width_100">
    <stamp class="stamp" v-if="stamp" :class="stamp">
      <component :is="combinedValue" />
    </stamp>
  </div>
</template>
<script>

import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
  components: {
    stamp: defineAsyncComponent(() =>
      import("@/components/stamp/stamp")
    ),
    blooming1: defineAsyncComponent(() =>
      import("@/components/stamp/blooming/blooming1")
    ),
    blooming2: defineAsyncComponent(() =>
      import("@/components/stamp/blooming/blooming2")
    ),
    blooming3: defineAsyncComponent(() =>
      import("@/components/stamp/blooming/blooming3")
    ),
    blooming4: defineAsyncComponent(() =>
      import("@/components/stamp/blooming/blooming4")
    ),
    star1: defineAsyncComponent(() =>
      import("@/components/stamp/star/star1")
    ),
    star2: defineAsyncComponent(() =>
      import("@/components/stamp/star/star2")
    ),
    star3: defineAsyncComponent(() =>
      import("@/components/stamp/star/star3")
    ),
    star4: defineAsyncComponent(() =>
      import("@/components/stamp/star/star4")
    ),
    galaxy1: defineAsyncComponent(() =>
      import("@/components/stamp/galaxy/galaxy1")
    ),
    galaxy2: defineAsyncComponent(() =>
      import("@/components/stamp/galaxy/galaxy2")
    ),
    galaxy3: defineAsyncComponent(() =>
      import("@/components/stamp/galaxy/galaxy3")
    ),
    bird1: defineAsyncComponent(() =>
      import("@/components/stamp/bird/bird1")
    ),
    bird2: defineAsyncComponent(() =>
      import("@/components/stamp/bird/bird2")
    ),
    bird3: defineAsyncComponent(() =>
      import("@/components/stamp/bird/bird3")
    ),
    flower1: defineAsyncComponent(() =>
      import("@/components/stamp/flower/flower1")
    ),
    flower2: defineAsyncComponent(() =>
      import("@/components/stamp/flower/flower2")
    ),
    flower3: defineAsyncComponent(() =>
      import("@/components/stamp/flower/flower3")
    ),
    steamboat1: defineAsyncComponent(() =>
      import("@/components/stamp/steamboat/steamboat1")
    ),
    steamboat2: defineAsyncComponent(() =>
      import("@/components/stamp/steamboat/steamboat2")
    ),
    steamboat3: defineAsyncComponent(() =>
      import("@/components/stamp/steamboat/steamboat3")
    ),
    pooh1: defineAsyncComponent(() =>
      import("@/components/stamp/pooh/pooh1")
    ),
    pooh2: defineAsyncComponent(() =>
      import("@/components/stamp/pooh/pooh2")
    ),
    pooh3: defineAsyncComponent(() =>
      import("@/components/stamp/pooh/pooh3")
    ),
    couple1: defineAsyncComponent(() =>
      import("@/components/stamp/couple/couple1")
    ),
    couple2: defineAsyncComponent(() =>
      import("@/components/stamp/couple/couple2")
    ),
    couple3: defineAsyncComponent(() =>
      import("@/components/stamp/couple/couple3")
    ),
    bear1: defineAsyncComponent(() =>
      import("@/components/stamp/bear/bear1")
    ),
    bear2: defineAsyncComponent(() =>
      import("@/components/stamp/bear/bear2")
    ),
    bear3: defineAsyncComponent(() =>
      import("@/components/stamp/bear/bear3")
    ),
    hibiscus1: defineAsyncComponent(() =>
      import("@/components/stamp/hibiscus/hibiscus1")
    ),
    hibiscus2: defineAsyncComponent(() =>
      import("@/components/stamp/hibiscus/hibiscus2")
    ),
    hibiscus3: defineAsyncComponent(() =>
      import("@/components/stamp/hibiscus/hibiscus3")
    ),
  },
  props: {
    title: { type: String },
    type: { type: String },
  },
  computed: {
    ...mapGetters({
      stamp: "getStamp",
    }),
    combinedValue() {
      return this.stamp + this.type;
    },
  },
};
</script>

<style scoped>
.stamp.blooming {
  width: 128px;
  height: 128px;
  fill: none;
  stroke: inherit;
}
.stamp.star {
  width: 32px;
  height: 32px;
  fill: inherit;
}
.stamp.galaxy {
  width: 256px;
  height: 256px;
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 1;
}
.stamp.bird {
  width: 256px;
  height: 256px;
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 1.4;
}
#previewIntro .stamp.bird {
  position: absolute;
  display: flex;
  align-items: flex-start;
  top: -144px;
  width: 100%;
  height: 100%;
  z-index: -1;
  stroke-width: 0.8;
}
.stamp.flower {
  width: 256px;
  height: 256px;
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 1;
}
.stamp.steamboat {
  width: 256px;
  height: 256px;
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 1;
}
.stamp.pooh {
  width: 256px;
  height: 256px;
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 1;
}
.stamp.bear {
  width: 256px;
  height: 256px;
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 1.6;
}
.stamp.couple {
  width: 256px;
  height: 256px;
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 1.4;
}
.stamp.hibiscus {
  width: 320px;
  height: 320px;
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 0.6;
}
</style>
