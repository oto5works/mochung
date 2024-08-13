<template>
  <div class="titleMain">
    <div class="step" v-if="step">{{ step }}</div>
    <div class="title-wrap">
      <div class="title" v-html="title"></div>
      <div class="content" v-if="content">{{ content }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    step: String, // 메인 스타일 제목
    title: String, // 메인 스타일 제목
    content: String, // 부제목
  },
};
</script>

<style scoped>
.titleMain {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 64px;
}
.titleMain .step {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.4px;
}
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.titleMain .title {
  font-size: 48px;
  font-weight: 700;
  line-height: 130%;
}
.titleMain .content {
  font-size: 16px;
  line-height: 168%;
  color: rgb(var(--mio-theme-color-on-background-70));
}
</style>

<style scoped>
/*--- 태블렛 ---*/
@media all and (max-width: 1023px) {
  .titleMain h1 {
    font-size: 24px;
  }
  .titleMain.config h1 {
    font-size: var(--font-size-24);
  }
}
</style>
