<template>
  <div class="formTitle1" :class="{ config: config }">
    <div v-if="info" class="info">{{ info }}</div>
    <h1 v-html="title"></h1>
    <div v-if="content" class="content">{{ content }}</div>
    <slot></slot>
  </div>
</template>

<script>
import "@/modules/formTitle/formTitle.scss";

export default {
  props: {
    info: String, // 메인 스타일 제목
    title: String, // 메인 스타일 제목
    content: String, // 부제목
    config: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.formTitle1 {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;
  margin-top: 12px;
  margin-bottom: 18px;
}

.formTitle1.config {
  align-items: var(--justify-content);
}
.formTitle1 .info {
  font-size: 13px;
  font-weight: 700;
  font-family: var(--mio-theme-font-family-2);
}
.formTitle1 .info {
  color: var(--mio-theme-color-primary);
}
.formTitle1.config .info {
  color: var(--primary-color);
}
.formTitle1 h1 {
  font-size: 28px;
  line-height: 140%;
  font-weight: 700;
  color: currentColor;
  width: 70%;
}
.formTitle1 .content {
  font-size: 14px;
  line-height: 160%;
  color: currentColor;
  width: 90%;
}
.formTitle1.config .info {
  font-size: var(--font-size-13);
  text-align: var(--text-align);
  font-family: inherit;
  font-weight: var(--font-weight);
}
.formTitle1.config h1 {
  font-size: var(--font-size-28);
  font-weight: var(--font-weight);
  text-align: var(--text-align);
}
.formTitle1.config .content {
  font-size: var(--font-size-13);
  text-align: var(--text-align);
}
</style>

<style scoped>
/*--- 태블렛 ---*/
@media all and (max-width: 1023px) {
  .formTitle1 h1 {
    font-size: 24px;
  }
  .formTitle1.config h1 {
    font-size: var(--font-size-24);
  }
}
</style>
