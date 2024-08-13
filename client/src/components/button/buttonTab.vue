<template>
  <button class="buttonTab">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    function: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* common */
.buttonTab {
  color: rgb(var(--mio-theme-color-on-background-40));
  width: fit-content;
  height: 40px;
  gap: 8px;
  font-size: 14px;
  margin-right: 16px;
}
.buttonTab.selected {
  color: rgb(var(--mio-theme-color-primary));
  font-weight: 700;
}
</style>
