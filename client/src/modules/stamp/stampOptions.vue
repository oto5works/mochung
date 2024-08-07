<template>
  <div class="fnOption">
    <buttonOption
      v-for="(item, index) in stampOptions"
      :key="index"
      @click="selectOption(item)"
      :class="{ selected: item.value === customData.stamp }"
      :font3="item.title"
    >
      <div class="fnOption-image">
        <div class="fnOption-component">
          <stamp class="stamp"><component :is="item.value" /></stamp>
        </div>
      </div>
    </buttonOption>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import "@/modules/functions/fnOption.scss";

export default {
  components: {
    stamp: defineAsyncComponent(() => import("@/components/stamp/stamp")),
    bear: defineAsyncComponent(() => import("@/components/stamp/bear/bear1")),
    bird: defineAsyncComponent(() => import("@/components/stamp/bird/bird2")),
    blooming: defineAsyncComponent(() =>
      import("@/components/stamp/blooming/blooming2")
    ),
    couple: defineAsyncComponent(() => import("@/components/stamp/couple/couple1")),
    flower: defineAsyncComponent(() => import("@/components/stamp/flower/flower1")),
    galaxy: defineAsyncComponent(() => import("@/components/stamp/galaxy/galaxy1")),
    steamboat: defineAsyncComponent(() =>
      import("@/components/stamp/steamboat/steamboat2")
    ),
    pooh: defineAsyncComponent(() => import("@/components/stamp/pooh/pooh1")),
    star: defineAsyncComponent(() => import("@/components/stamp/star/star2")),
    hibiscus: defineAsyncComponent(() =>
      import("@/components/stamp/hibiscus/hibiscus3")
    ),
  },
  computed: {
    ...mapGetters({
      customData: "getCustomData",
      stampOptions: "getStampOptions",
    }),
  },
  methods: {
    selectOption(option) {
      this.customData.stamp = option.value;
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style scoped>
.fnOption-component {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.selected .fnOption-component {
  color: var(--primary-color);
}
.fnOption-component .stamp {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  fill: none;
  stroke: currentColor;
  color: currentColor;
  stroke-width: 1;
}
</style>
