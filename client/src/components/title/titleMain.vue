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
  gap: 2rem 24px;
  margin-bottom: 4rem;
}
.titleMain .step {
  font-size: 1rem;
        font-weight: 500;
        letter-spacing: .1875rem;
        line-height: 1.125rem;
        text-transform: uppercase;
}
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.titleMain .title {
  font-size: 3rem;
        letter-spacing: -.01em;
        line-height: 3.25rem;
  font-weight: 800;
  font-family: var(--mio-theme-font-family-sp);
}
.titleMain .content {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: 0;
  color: rgb(var(--mio-theme-color-on-background-70));
}
</style>

<style scoped>
@media all and (max-width: 479px) {
  .titleMain .step {
    font-size: .875rem;
    letter-spacing: .1875rem;
    line-height: 1.125rem;
    text-transform: uppercase;
}
  .titleMain .title {
    font-size: 2rem;
    letter-spacing: -.01em;
    line-height: 2.25rem;
  }
  .titleMain .content {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
</style>
