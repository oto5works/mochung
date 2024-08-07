<template>
  <div class="homeSettings">
    <gridstack />
    
    <div class="settings">
      <homeBox />
      <homeFile />
      <homeColor />
    </div>
    <div class="absolute_100 outline_pc overlay_pc" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    gridstack: defineAsyncComponent(() =>
      import("@/modules/gridstack/gridstack")
    ),
    homeBox: defineAsyncComponent(() => import("@/modules/home/homeBox")),
    homeFile: defineAsyncComponent(() => import("@/modules/file/homeFile")),
    homeColor: defineAsyncComponent(() => import("@/modules/color/homeColor")),
  },
  data() {
    return {
      grid: undefined,
      count: 1,
    };
  },
};
</script>

<style scoped>
.homeSettings {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px 24px;
  gap: 16px;
  border-radius: var(--border-radius-16);
}
.settings {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 124px;
  max-width: 32%;
}
.homeSettings .gridstack {
  flex: 1;
}

</style>
