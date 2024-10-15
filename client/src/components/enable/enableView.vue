<template>
  <div class="enableView">
    <div class="illust-wrap">
      <illustCoffee />
    </div>
    
    <div class="title-wrap">
      <div class="title" v-html="title"></div>
      <div class="content" v-html="content"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import illustCoffee from "@/components/illust/illustCoffee.vue";

export default {
  components: {
    illustCoffee,
  },
  props: {
    title: String, // 메인 스타일 제목
    content: String, // 부제목
  },
};
</script>

<style scoped>
.enableView {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
}
.enableView .illust-wrap {
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
.enableView .title {
  font-size: 16px;
  font-weight: 600;
}
.enableView .content {
  font-size: 13px;
  font-weight: 300;
  color: rgb(var(--mio-theme-color-on-background-70));
}
</style>

<style scoped>
/*--- 태블렛 ---*/
@media all and (max-width: 1023px) {
  .enableView h1 {
    font-size: 24px;
  }
  .enableView.config h1 {
    font-size: var(--font-size-24);
  }
}
</style>
