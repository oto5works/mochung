<!-- tabs.vue -->
<template>
  <div class="chips">
    <slot></slot>
  </div>
</template>

<script>
export default {

  methods: {

  },
};
</script>

<style scoped>
.chips {
  position: relative;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
}
</style>
