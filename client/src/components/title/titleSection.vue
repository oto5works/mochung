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
  gap: 8px;
  height: 42px;
}
.titleSection .title {
  font-size: 15px;
  font-weight: 700;
}
</style>
