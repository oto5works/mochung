<template>
  <div class="enableImage">
    <div class="illust-wrap">
      <illustAngel />
    </div>

    <div class="title-wrap">
      <div class="title">이미지 없음</div>
      <div class="content">
        현재 업로드된 이미지가 없습니다.<br>계속 진행하려면 이미지를 업로드해
        주세요.
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import illustAngel from "@/components/illust/illustAngel.vue";

export default {
  components: {
    illustAngel,
  },
};
</script>

<style scoped>
.enableImage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
}
.enableImage .illust-wrap {
  position: relative;

  width: 50%;
  height: auto;
}
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}
.enableImage .title {
  font-size: 18px;
  font-weight: 700;
}
.enableImage .content {
  font-size: 14px;
  color: rgb(var(--mio-theme-color-on-background-70));
}
</style>

<style scoped>
/*--- 태블렛 ---*/
@media all and (max-width: 1023px) {
  .enableImage h1 {
    font-size: 24px;
  }
  .enableImage.config h1 {
    font-size: var(--font-size-24);
  }
}
</style>
