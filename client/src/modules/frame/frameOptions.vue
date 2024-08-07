<template>
  <div class="fnOption">
    <buttonOption
      v-for="(item, index) in frameOptions"
      :key="index"
      @click="selectOption(item)"
      :class="{ selected: item.value === homeData.frame }"
      :font3="item.title"
    >
      <div class="fnOption-image">
        <div class="fnOption-component">
          <frame class="frame"><component :is="item.value" /></frame>
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
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
      frameOptions: "getFrameOptions",
    }),
  },
  methods: {
    selectOption(option) {
      this.homeData.frame = option.value;
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
  width: 480px;
}
.fnOption-component .frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  fill: none;
  stroke: currentColor;
  color: currentColor;
  stroke-width: 0.5;
}
</style>
