<template>
  <div :class="['titleArticle', { hasContent: content }]">
    <div class="slot-wrap">
      <div class="title-wrap">
        <div class="title" v-html="title"></div>
        <div class="content" v-if="content" v-html="content"></div>
      </div>
      <slot name="slot"></slot>
    </div>

    <slot></slot>
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
  align-items: flex-start;
  gap: 12px;
  padding-top: 32px;
  padding-bottom: 32px;

}
.titleArticle.hasContent {
  padding-top: 24px;
  padding-bottom: 24px;
}
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.slot-wrap {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
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
</style>
