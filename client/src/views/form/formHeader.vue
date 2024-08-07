<template>
  <div class="formHeader">
    <div class="banner-title">
      <div class="title">지금가장 인기 있는 제품 어때요?</div>
      <div class="sp_6" />
      <div class="info">사용자의 메인화면을 검색하고 설정 가능합니다.</div>
    </div>
    <div class="banner-illust">
      <illust><illustTest /></illust>
    </div>
  </div>
</template>
<script>
import banner from "@/components/component/banner.vue";
import illust from "@/components/modules/illust/illust.vue";

import illustTest from "@/components/modules/illust/illustTest.vue";

export default {
  components: {
    banner,
    illust,
    illustTest,
  },
};
</script>
<style scoped>
.formHeader {
  position: relative;
  width: 100%;
  max-width: 72%;
  padding: 28px 24px;
  height: 248px;
}
.banner-title {
  position: relative;
  width: 60%;
  max-width: 320px;
  color: var(--primary-on);
  z-index: 2;
}
.banner-title .title {
  font-size: 32px;
  line-height: 132%;
  font-weight: 700;
}
.banner-title .info {
  font-size: 14px;
  line-height: 124%;
  opacity: 70%;
}
.banner-illust {
  position: absolute;
  bottom: 0;
  right: 10%;
  height: 90%;
  max-width: 320px;
}
.banner-illust svg {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
@media all and (max-width: 1023px) {
  .formHeader {
    width: 100%;
    max-width: unset;
  }
  .banner-title .title {
    font-size: 28px;
  }
  .banner-title .info {
    font-size: 12px;
  }
  .banner-illust {
    height: 80%;
    max-width: 280px;
    right: 0;
  }
}
</style>
