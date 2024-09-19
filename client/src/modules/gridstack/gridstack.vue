<template>
  <teleport to="body" v-if="dialog">
    <div class="overlay-container" v-bind="$attrs">
      <div class="overlay gridstack">
        <div
          class="overlay__scrim"
          @click="closeDialog"
          :class="{ active: loaded }"
        />
        <div class="overlay__action">
          <buttonDefault
            class="dialog-save"
            variant="tonal"
            height="32"
            @click="saveImage"
          >
            <span>Confirm</span>
          </buttonDefault>
          <buttonDefault
            class="dialog-close"
            variant="tonal"
            height="32"
            :icon="true"
            @click="closeDialog"
          >
            <icon class="icon_16"><x /></icon>
          </buttonDefault>
        </div>
        <div class="overlay__page">
          <span>x {{ homeData.item.x }} y {{ homeData.item.y }} w {{ homeData.item.w }} h {{ homeData.item.h }}</span>
        </div>


        <div class="overlay__content" :class="{ active: loaded }">
          <div class="dialog">
            <div class="dialog-content">
              <!-- gridstack -->
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
                      <div v-for="n in 96" :key="n" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- gridstack -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
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
    home1: defineAsyncComponent(() => import("@/preview/home/home/home1")),
    home2: defineAsyncComponent(() => import("@/preview/home/home/home2")),
    home3: defineAsyncComponent(() => import("@/preview/home/home/home3")),
    home4: defineAsyncComponent(() => import("@/preview/home/home/home4")),
    home5: defineAsyncComponent(() => import("@/preview/home/home/home5")),
    home6: defineAsyncComponent(() => import("@/preview/home/home/home6")),
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      grid: undefined,
      count: 1,
      loaded: false,
      item: {
        filename: "aaaaa",
        id: "hero-image",
        x: 0,
        y: 0,
        w: 0,
        h: 0,
      },
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


    setTimeout(() => {
      this.loaded = true;
    }, 1);
    // Define your options object with configuration options
    let options = {
      float: true, // Allow items to be freely positioned
      cellHeight: "6vh", // Height of each cell
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
    closeDialog() {
      this.$emit("update:dialog", false);
    },
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

<style scoped></style>
