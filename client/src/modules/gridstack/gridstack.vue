<!-- gridstack.vue -->

<template>
  <div class="gridstack">
    <div id="gridstack">
      <div id="grid-container">
        <div class="home-component">
          <component
            v-if="homeData.style"
            :is="homeData.style"
            :options="homeDefaultedOptions"
            :color="homeColor"
          />
        </div>
        <div class="grid-stack">
          <gridstackItem :item="homeData.item"></gridstackItem>
          <div class="grid__wrap">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/gridstack-extra.min.css";
import "@/modules/gridstack/gridstack.scss";

import gridstackItem from "@/modules/gridstack/gridstackItem";

export default {
  components: {
    gridstackItem,
    home1: defineAsyncComponent(() => import("@/components/home/home1")),
    home2: defineAsyncComponent(() => import("@/components/home/home2")),
    home3: defineAsyncComponent(() => import("@/components/home/home3")),
    home4: defineAsyncComponent(() => import("@/components/home/home4")),
    home5: defineAsyncComponent(() => import("@/components/home/home5")),
    home6: defineAsyncComponent(() => import("@/components/home/home6")),
  },
  data() {
    return {
      grid: undefined,
      count: 1,
    };
  },
  computed: {
    ...mapGetters({
      homeDefaultedOptions: "getHomeDefaultedOptions",
      homeData: "getHomeData",
      homeColor: "getHomeColor",
    }),
  },
  mounted() {
    // Define your options object with configuration options
    let options = {
      float: true, // Allow items to be freely positioned
      cellHeight: "24px", // Height of each cell
      column: 8, // Number of columns in the grid
      row: 12,
      //minRow: 12,         // Minimum number of rows in the grid
      maxRow: 12,
      minRow: 12,
      disableOneColumnMode: true, // Disable 'oneColumnSize'
      alwaysShowResizeHandle: true,
      //animate: false,
    };

    this.grid = GridStack.init(options); // homeize GridStack with options

    // Drag 이벤트 핸들러
    this.grid.on("dragstop", (event, element) => {
      this.handleGridEvent("drag", element);
    });

    // Resize 이벤트 핸들러
    this.grid.on("resizestop", (event, element) => {
      this.handleGridEvent("resize", element);
    });
    this.grid.batchUpdate();
    this.grid.commit();

    this.$nextTick(() => {
      this.grid.load([this.homeData.item]);
    });
  },
  methods: {
    handleGridEvent(action, element) {
      const node = element.gridstackNode;
      this.homeData.item.x = node.x;
      this.homeData.item.y = node.y;
      this.homeData.item.w = node.w;
      this.homeData.item.h = node.h;
    },
    loadGridItems() {
      // 일괄 업데이트를 시작합니다.
      //this.grid.batchUpdate();
      this.grid.load([this.homeData.item]);
      // 일괄 업데이트를 종료합니다.
      //this.grid.commit();
    },
  },
};
</script>

<style scoped>
.gridstack {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}
#gridstack {
  position: relative;
  height: 288px;
  aspect-ratio: 3 / 5;
  overflow: hidden;
  background-color: rgb(var(--mio-theme-color-primary-05));
}
.grid__wrap {
  position: absolute;
  content: "";
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 1px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* This makes the div non-clickable */
  z-index: 3;
}
.grid__wrap > div {
  outline: 1px solid rgb(var(--mio-theme-color-primary));
  opacity: 0.08;
}
#grid-container {
}
.home-component {
  position: absolute;
  width: 480px;
  height: 800px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.36);
  z-index: 2;
  pointer-events: none;
}
</style>
