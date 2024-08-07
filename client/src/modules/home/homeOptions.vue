<template>
  <div class="fnOption">
    <buttonOption
      v-for="(item, index) in homeStyleOptions"
      :key="index"
      @click="selectOption(item)"
      :class="{ selected: item.value === homeData.style }"
      :font3="item.title"
      :src="item.src"
    >
      <div class="fnOption-image">
        <div
          class="home-image flex align-items_center justify-content_center"
          :style="{
            top: `calc(${item.y} * 8.33%)`,
            left: `calc(${item.x} * 12.5%)`,
            width: `calc(${item.w} * 12.5%)`,
            height: `calc(${item.h} * 8.33%)`,
          }"
        >
          <icon><camera /></icon>
        </div>
        <div class="fnOption-component" :class="item.value">
          <component :is="item.value" :options="homeDefaultedOptions" />
        </div>
      </div>
    </buttonOption>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import "@/modules/functions/fnOption.scss";
import camera from "@/components/icon/camera";

export default {
  components: {
    camera,
    home1: defineAsyncComponent(() => import("@/components/home/home1")),
    home2: defineAsyncComponent(() => import("@/components/home/home2")),
    home3: defineAsyncComponent(() => import("@/components/home/home3")),
    home4: defineAsyncComponent(() => import("@/components/home/home4")),
    home5: defineAsyncComponent(() => import("@/components/home/home5")),
    home6: defineAsyncComponent(() => import("@/components/home/home6")),
    home7: defineAsyncComponent(() => import("@/components/home/home7")),
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
      homeStyleOptions: "getHomeStyleOptions",
      homeDefaultedOptions: "getHomeDefaultedOptions",
    }),
  },
  methods: {
    selectOption(option) {
      this.homeData.style = option.value;
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style scoped>
.fnOption-image {
  width: 120px;
  aspect-ratio: 2 / 3;
  overflow: hidden;
}
.fnOption-component {
  position: absolute;
  left: 50%; /* 가운데 정렬을 위해 left 값을 50%로 조정합니다. */
  top: 50%;
  width: 480px;
  height: 720px;
  transform: translate(-50%, -50%) scale(0.25); /* 50% 만큼 왼쪽과 위로 이동한 후에 scale을 적용합니다. */
}

.home-image svg {
  opacity: 0.12;
}

.home-image {
  position: absolute;
  display: none;
}
.home-image::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: currentColor;
  opacity: 0.04;
}


.fnOption-component.home1 {
  transform: translate(-50%, -50%) scale(0.5);
}
.fnOption-component.home3 {
  transform: translate(-50%, -40%) scale(0.5);
}
.fnOption-component.home5 {
  transform: translate(-50%, -50%) scale(0.5);
}
.fnOption-component.home6 {
  transform: translate(-50%, -45%) scale(0.5);
}
</style>
