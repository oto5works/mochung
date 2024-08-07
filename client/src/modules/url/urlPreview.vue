<!-- checkUrl.vue -->
<template>
  <div
  style="position: relative;"
    class=" flex align-items_center justify-content_center width_100 height_80 --border-radius_18"
  >
    <div class="flex align-items_center gap_4">
      <span class="font-size_14 bold">http://localhost:5173/</span>
      <buttonSelect class="--border-radius_12" v-if="url" :class="{ 'selected': isValid }"
        ><span>{{ url }}</span></buttonSelect
      >
    </div>

    <div class="absolute_100 overlay_pc box-shadow_3-pc outline_pc" :class="{ 'error-background': !isValid }"></div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    url: { type: String },
    isValid: { type: Boolean },
  },

  methods: {},
};
</script>
<style scoped>
.error-background {
  background-color: var(--mio-theme-color-utility-error);
}
</style>