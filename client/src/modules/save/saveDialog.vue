<!-- SaveFormDataButton.vue -->

<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div>
      <div class="flex justify-content_center width_100">
        <div class="illust">
          <illust class="steam">
            <component :is="'coffee' + currentCoffee" />
          </illust>
          <illust class="people"><coffee0 /></illust>
        </div>
      </div>

      <div class="flex flex-direction_column gap_10 pa_8">
        <div
          class="font-size_22 bold text-align_center"
          :class="{
            error: res.status === 'error',
            success: res.status === 'success',
            processing: res.status === 'processing',
          }"
        >
          <div class="resIcon"><component :is="getResIcon" /></div>
          {{ res.message }}
        </div>

        <div class="font-size_13 opacity_70 line-height_180 text-align_center">
          서비스는 어떠셨나요? 고객님의 소중한 의견을 듣고<br/>
          서비스를 더욱 개선하고자 합니다. 별점을 남겨주시면 큰 도움이 됩니다.
        </div>
      </div>
    </div>
    <div class="flex flex-direction_column align-items_center gap_8 width_100">
      <saveRating v-model="rating" :maxStars="5" />
      <div class="font-size_16 bold text-align_center width_100" v-if="rating">
        " {{ ratingText }} "
      </div>
    </div>
    <div class="sp_8" />

    <article>
      <textArea
        v-if="rating"
        placeholder="고객님의 의견을 함께 남겨주세요. (선택사항)"
        v-model="content"
      />
    </article>

    <article style="flex-direction: row">
      <buttonText
        :disabled="res.status !== 'success'"
        class="flex_1 --border-radius_24 height_40 gap_12"
        @click="saveFormData"
      >
        <span>홈으로 이동</span>
        <icon><home /></icon>
      </buttonText>

      <buttonDefault
        :disabled="res.status !== 'success'"
        class="flex_1 --border-radius_24 height_40 gap_12"
        @click="saveFormData"
      >
        <span>보관함으로 이동</span>
        <icon><archive /></icon>
      </buttonDefault>
    </article>
  </dialogModal>
</template>

<script>
// Import mapActions from Vuex
import { mapActions, mapGetters } from "vuex";
import aniLoading from "@/components/icon/aniLoading";
import aniError from "@/components/icon/aniError";
import aniCheck from "@/components/icon/aniCheck";

import archive from "@/components/icon/archive";
import home from "@/components/icon/home";

import illust from "@/components/illust/illust.vue";
import coffee0 from "@/components/illust/coffee/coffee0";
import coffee1 from "@/components/illust/coffee/coffee1";
import coffee2 from "@/components/illust/coffee/coffee2";
import coffee3 from "@/components/illust/coffee/coffee3";
import coffee4 from "@/components/illust/coffee/coffee4";
import coffee5 from "@/components/illust/coffee/coffee5";
import coffee6 from "@/components/illust/coffee/coffee6";
import coffee7 from "@/components/illust/coffee/coffee7";
import coffee8 from "@/components/illust/coffee/coffee8";
import coffee9 from "@/components/illust/coffee/coffee9";
import coffee10 from "@/components/illust/coffee/coffee10";
import coffee11 from "@/components/illust/coffee/coffee11";
import coffee12 from "@/components/illust/coffee/coffee12";
import saveRating from "@/modules/save/saveRating.vue";

export default {
  components: {
    aniLoading,
    aniError,
    aniCheck,
    archive,
    home,
    illust,
    coffee0,
    coffee1,
    coffee2,
    coffee3,
    coffee4,
    coffee5,
    coffee6,
    coffee7,
    coffee8,
    coffee9,
    coffee10,
    coffee11,
    coffee12,
    saveRating,
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      currentCoffee: 1, // 현재 커피 번호
      animationInterval: null, // 애니메이션을 제어할 setInterval 객체
      rating: 0,
      content: "",
    };
  },
  created() {
    this.startAnimation();

    this.saveFormData();
  },
  beforeDestroy() {
    // 컴포넌트가 파기되기 전에 애니메이션 정지
    clearInterval(this.animationInterval);
  },
  computed: {
    ...mapGetters({
      res: "getRes",
    }),
    ratingText() {
      const value = this.rating;
      if (value === 5) {
        return "최고에요.";
      } else if (value === 4) {
        return "아주 좋아요.";
      } else if (value === 3) {
        return "보통이에요.";
      } else if (value === 2) {
        return "나쁘지 않아요.";
      } else {
        return "별로에요.";
      }
    },
    getResIcon() {
      const value = this.res.status;
      if (value === "error") {
        return "aniError";
      } else if (value === "success") {
        return "aniCheck";
      } else {
        return "aniLoading";
      }
    },
  },
  methods: {
    ...mapActions(["saveFormData"]),
    // 애니메이션 시작
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    startAnimation() {
      // 1000ms(1초)마다 커피 번호를 업데이트하는 애니메이션 설정
      this.animationInterval = setInterval(() => {
        // 현재 커피 번호 업데이트
        this.currentCoffee = (this.currentCoffee % 12) + 1; // 1부터 12까지 루프
      }, 150); // 1초마다 업데이트
    },
  },
};
</script>

<style scoped>
.illust {
  position: relative;
  width: 256px;
  height: 256px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1;
}

.steam,
.people {
  position: absolute;
  width: 100%;
  height: 100%;
}
.resIcon {
  position: relative;
  display: inline-block;
  top: 4px;
  width: 24px;
  height: 100%;
}
.error {
  color: var(--mio-theme-color-utility-error);
}
.success {
  color: var(--primary-color);
}
.processing {
  color: var(--font-color);
}
</style>
