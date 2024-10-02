<template>
  <div class="hostInfo">
    <!-- Render hostInfo items with slashes in between -->
    <div
      v-for="(option, index) in hostInfo"
      :key="index"
      class="display_flex align-items_center gap_24"
    >
      <!-- Render title and name for each option -->

      <div class="display_flex align-items_center gap_12">
        <span class="--font-size_11 opacity_70">
          {{ option.title }}
        </span>
        <span class="--font-size_14 font-weight_700 letter-spacing_8">
          {{ option.name }}
        </span>
      </div>
      <!-- Render a slash icon between items, but not after the last item -->
      <icon v-if="index < hostInfo.length - 1" class="icon_16">
        <slash />
      </icon>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import slash from "@/components/icon/slash.vue";

export default {
  components: {
    slash,
  },
  computed: {
    ...mapGetters({
      hostInfo: "getHostInfo",
    }),
  },
};
</script>

<style scoped>
.gap_host {
  gap: 0.5em 1.5em;
}
.hostInfo {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: var(--justify-content);
  gap: 0.5em 1.75em;
  width: 100%;
}
</style>
