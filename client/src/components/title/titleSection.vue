<template>
  <div class="titleSection">
      <div class="title">{{ title }}</div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.titleSection {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  height: 42px;
}
.titleSection .title {
  font-size: 13px;
  font-weight: 500;
}
</style>
