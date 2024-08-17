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
  padding: 12px 0;
}
.titleSection .title {
  font-size: 15px;
  font-weight: 700;
}
</style>
