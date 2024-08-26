<template>
  <div class="titleArticle">
    <div class="spacing-1" />
    <div v-if="!content" class="spacing-2" />
    <div class="title-wrap">
      <div class="title" v-html="title"></div>
    </div>
    <div v-if="content" class="spacing-3" />

    <div class="content-wrap">
      <div class="content" v-if="content" v-html="content"></div>

      <div class="content-slot">
        <slot></slot>
      </div>
    </div>
    <div class="spacing-1" />
    <div v-if="!content" class="spacing-2" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped>
.titleArticle {
  position: relative;
  display: flex;
  flex-direction: column;
}
.title-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.titleArticle .title {
  font-size: 18px;
  font-weight: 700;
}
.titleArticle .content {
  font-size: 13px;
  line-height: 140%;
  color: rgb(var(--mio-theme-color-on-background-70));
}
.titleArticle .content-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.spacing-1 {
  height: 24px;
}
.spacing-2 {
  height: 8px;
}
.spacing-3 {
  height: 12px;
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
