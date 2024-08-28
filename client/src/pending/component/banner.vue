<template>
  <div class="banner">
    <div class="banner-title">
      <div class="font-size_14 --primary-color">{{ info }}</div>
      <div class="sp_4" />
      <div style="line-height: 130%;" class="font-size_26 --font-weight">{{ title }}</div>
    </div>
    <div class="banner-illust">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    info: { type: String },
    title: { type: String },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 0 48px 0;
  border-radius: var(--border-radius-28);
  background-color: var(--tr-bc-tr);
  flex-direction: row;
  padding: 24px 24px 0 24px;
  max-height: 280px;
}
.banner-title {
  width: 30%;
}
.banner-illust {
  position: relative;
  width: 70%;
  height: auto;
  max-width: 280px;
}
</style>
