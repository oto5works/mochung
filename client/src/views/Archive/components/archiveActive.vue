<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_24">
      <titleArticle title="FIELDS OF EXPRESSION" />
      <formField
        label="코드번호"
        v-model="couponCode"
        :spacing="true"
        hint="코드번호는 숫자와 영문 조합 8자리 이상이어야 합니다."
      />
    </div>
    <div class="dialog-actions">
      <buttonDefault
        class="width_100"
        variant="text"
        height="46"
        @click="handleSubmit"
        ><span class="text-decoration_underline">네이버페이로 인증하기</span></buttonDefault
      >
      <buttonDefault
        class="width_100"
        variant="filled"
        height="46"
        @click="handleSubmit"
        ><span>코드로 활성화 하기</span></buttonDefault
      >
    </div>
  </dialogModal>
</template>
<script>
import { activePost } from "@/services/posts";

export default {
  components: {},
  props: {
    id: { type: String },
    dialog: { type: Boolean },
  },
  data() {
    return {
      couponCode: null,
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.couponCode) {
        window.alert("코드번호를 입력해 주세요.");
        return;
      }

      const proceed = window.confirm(
        "활성화 진행 시 코드번호를 변경할 수 없습니다. 계속 진행하시겠습니까?"
      );
      if (!proceed) {
        return;
      }

      try {
        const id = this.id;
        const couponCode = this.couponCode;
        await activePost(id, couponCode);
        this.dialog = false;
      } catch (error) {
        window.alert(error.response.data.message);
      }
    },

    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
