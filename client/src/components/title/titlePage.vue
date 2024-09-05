<template>
  <div class="titlePage">
    <div class="title" v-html="title"></div>
      <div class="content" v-if="content">{{ content }}</div>
      <slot></slot> 
  </div>
</template>

<script>
export default {
  props: {
    title: String, // 메인 스타일 제목
    content: String, // 부제목
  },
};
</script>

<style scoped>
.titlePage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 64px;
  text-align: center;
}
.titlePage .title {
  font-size: 64px;
  font-weight: 700;
  line-height: 130%;
}
.titlePage .content {
  font-size: 20px;
  line-height: 168%;
  color: rgb(var(--mio-theme-color-on-background-70));
}
</style>
