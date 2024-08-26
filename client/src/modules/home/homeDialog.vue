<template>
  <dialogFull
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="메인화면 스타일"
  >
    <titleArticle
      title="메인 효과 설정"
      content="폭죽과 꽃가루 효과로 메인 화면을 특별하게 꾸며보세요. 모바일 초대장이 개성적으로 돋보이게 만들어줍니다."
    />
    <homeOptions @update:dialog="updateDialog" />
  </dialogFull>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    homeOptions: defineAsyncComponent(() =>
      import("@/modules/home/homeOptions.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  methods: {
    selectOption(option) {
      this.dateData.calendar = option.value;
      this.updateDialog(false);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
