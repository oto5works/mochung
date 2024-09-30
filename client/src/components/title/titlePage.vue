<template>
  <div class="titlePage">
    <div class="titlePage-content">
      <div class="title" v-html="title"></div>
      <div class="content" v-if="content" v-html="content"></div>
      <slot></slot>
    </div>
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
  justify-content: center;
  width: 100%;
}
.titlePage-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 120px;
  text-align: center;
  max-width: 660px;
}
.titlePage .title {
  font-size: 6rem;
  letter-spacing: -0.02em;
  line-height: 6.5rem;
  font-weight: 700;
  font-family: var(--mio-theme-font-family-sp);
}
/* + text-transform: capitalize; */
.titlePage .content {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.75rem;
  letter-spacing: 0;
  color: rgb(var(--mio-theme-color-on-background-70));
}
</style>

<style scoped>
@media all and (max-width: 479px) {
  .titlePage-content {
  gap: 1.5rem;
  margin-bottom: 5rem;
}
  .titlePage .title {
  font-size: 3rem;
  letter-spacing: -0.01em;
  line-height: 3.25rem;
}
.titlePage .content {
  font-size: 1rem;
  line-height: 1.5rem;
}
}
</style>