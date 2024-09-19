<template>
  <div
    class="hero__wrap"
    :style="{
      top: topValue,
      left: leftValue,
      width: widthValue,
      height: heightValue,
    }"
  >
    <div v-if="!homeData.files.url" class="upload">
      <span
        >이미지를 업로드하여 프리뷰를 확인하세요.<br />아래의 버튼을 클릭하여
        원하는 이미지를 업로드해 주세요.</span
      >
      <buttonDefault
        variant="tonal"
        height="46"
        @click="this.dialog = true"
        ><span>Upload</span></buttonDefault
      >
      <homeFileDialog
        v-if="dialog"
        :dialog="dialog"
        @update:dialog="dialog = $event"
      >
      </homeFileDialog>
    </div>

    <heroComp v-if="homeData.files.url" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

import heroComp from "@/preview/home/hero/heroComp.vue";

export default {
  components: {
    heroComp,
    homeFileDialog: defineAsyncComponent(() =>
      import("@/modules/homeFile/homeFileDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapGetters({
      homeData: "getHomeData",
    }),
    topValue() {
      return `calc(${this.homeData.item.y} * 8.33%)`;
    },
    leftValue() {
      return `calc(${this.homeData.item.x} * 12.5%)`;
    },
    widthValue() {
      return `calc(${this.homeData.item.w} * 12.5%)`;
    },
    heightValue() {
      return `calc(${this.homeData.item.h} * 8.33%)`;
    },
  },
  methods: {
    characterRules() {
      console.log("vvg");
    },
  },
};
</script>

<style scoped>
.hero__wrap {
  background-color: rgba(var(--background-on), 0.04);
}
.upload {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 90%;
  height: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  border: 1px dashed rgba(var(--background-on), 0.2);
  font-size: 0.875rem;
  border-radius: 24px;
  opacity: 0.8;
}
</style>
