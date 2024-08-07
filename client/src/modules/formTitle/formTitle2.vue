<template>
  <div class="formTitle2">
    <div class="title">{{ title }}</div>
    <div v-if="content" class="content">{{ content }}</div>
    <slot></slot>
  </div>
</template>

<script>
import "@/modules/formTitle/formTitle.scss";

export default {
  props: {
    title: String, // 메인 스타일 제목
    content: String, // 부제목
  },
};
</script>

<style scoped>

.formTitle2 {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;
  margin-top: 12px;
  margin-bottom: 18px;
}
.config .formTitle2 {
}
.formTitle2 .title {
  font-size: 20px;
  line-height: 140%;
  font-weight: 700;
  color: currentColor;
}
.formTitle2 .content {
  font-size: 13px;
  opacity: 0.7;
  line-height: 180%;
  color: currentColor;
  width: 90%;
}
.config .formTitle2 .title {
  font-size: var(--font-size-20);
  font-weight: var(--font-weight);
  text-align: var(--text-align);
}
.config .formTitle2 .content {
  font-size: var(--font-size-13);
  text-align: var(--text-align);
}
</style>