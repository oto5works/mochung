<template>
  <div class="formOption">
    <formTitle1
      info="디자인 선택"
      title="나만의 모바일 청첩장을 만들어보세요"
    />
    <!-- content="간편한 템플릿을 활용하거나 자유롭게 디자인하여, 손쉽게 당신만의 스타일로 맞춤형 모바일 청첩장을 만들어보세요!" -->
    <div class="sp_72" />
    <div class="formOption__wrap">
      <card @click="handleFormOption('form1')" class="formOption1Card">
        <div class="fnOption-text">
          <div class="font1">간편하고 빠르게<br />완성하는 스마트 디자인</div>
          <div class="sp_8" />
          <div class="font2">
            스마트 디자인 기능으로 누구나 간편하고 빠르게 나만의 모바일 청첩장을
            만들 수 있습니다.
          </div>
        </div>
        <div class="sp_24" />
        <div class="formOption-image">
          <formOption1 />
        </div>
        <button class="gap_8">
          <div class="font3">스마트 디자인으로 시작하기</div>
        </button>
      </card>

      <card @click="handleFormOption('form2')" class="formOption2Card">
        <div class="fnOption-text">
          <div class="font1 colorfulText">
            나만의 개성을 담은<br />특별한 커스텀 디자인
          </div>
          <div class="sp_8" />
          <div class="font2">
            원하는 디자인 요소를 선택하고 조합하여 개성 넘치는 청첩장을 제작할
            수 있습니다.
          </div>
        </div>
        <div class="sp_24" />
        <div class="formOption-image">
          <formOption2 />
        </div>
        <button class="gap_8">
          <div class="font3">커스텀 디자인으로 시작하기</div>
        </button>
      </card>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import sparkle from "@/components/icon/sparkle.vue";

import color from "@/components/icon/color.vue";
import arrowRight3 from "@/components/icon/arrowRight3.vue";

import formOption1 from "@/components/illust/formOption/formOption1.vue";
import formOption2 from "@/components/illust/formOption/formOption2.vue";

export default {
  components: {
    sparkle,
    color,
    arrowRight3,
    formOption1,
    formOption2,
  },
  methods: {
    ...mapActions(["updateFormOption"]),

    handleFormOption(option) {
      this.updateFormOption(option);
    },
  },
};
</script>
<style scoped>
.formOption {
  color: var(--mio-theme-color-on-background);
}
.formOption__wrap {
  width: 100%;
  display: flex;
  gap: 48px;
}
.formOption-image {
  position: relative;
  fill: none;
  width: 100%;
}
.formOption-image svg {
  width: 70%;
  height: auto;
  fill: none;
  display: inline-block;
  vertical-align: baseline;
  flex-shrink: 0;
  stroke: currentColor;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
button:hover .formOption-image svg {
  stroke-width: 1.2;
}

.card:hover .colorfulText {
  background: -webkit-linear-gradient(
    60deg,
    #f79533,
    #fc7055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fnOption-text {
  text-align: left;
  color: var(--mio-theme-color-on-background);
}
.font1 {
  font-size: 20px;
  line-height: 140%;
  font-weight: 700;
}
.card:hover .font1 {
  color: var(--mio-theme-color-primary);
}
.font2 {
  font-size: 13px;
  opacity: 0.7;
  line-height: 180%;
  width: 90%;
}
.font3 {
  font-size: 13px;
  color: var(--mio-theme-color-on-background);
  border-bottom: 1px solid var(--mio-theme-color-on-background);
}
</style>

<style>
.formOption1Card .formOption1Color,
.formOption2Card .formOption1Color,
.formOption2Card .formOption2Color {
  fill: var(--mio-theme-color-primary-gray);
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.formOption1Card:hover .formOption1Color,
.formOption2Card:hover .formOption1Color {
  fill: var(--mio-theme-color-primary);
}
.formOption2Card:hover .formOption2Color {
  fill: url("#formOption2Gradient");
}
.formOption2Card {
}
</style>

<style scoped>
/*-- 태블릿 --*/
@media all and (max-width: 1023px) {
}

/*--- 모바일 ---*/
@media all and (max-width: 479px) {
  .formOption__wrap {
    flex-direction: column;
    padding: 0 16px;
  }
  .formOption__wrap {
    gap: 16px;
  }
  .formOption-image svg {
    width: 80%;
  }
}
</style>
