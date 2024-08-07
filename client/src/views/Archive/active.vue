<template>
  <appDialog :dialog="dialog" @update:dialog="updateDialog" :root="root">
    <article>
      <v-text-field
        :rules="[required, characterRules]"
        :variant="input"
        label="코드번호"
        v-model="couponCode"
        hint="코드번호는 숫자와 영문 조합 8자리 이상이어야 합니다."
      />
      <button
        class="button-defaulted height_40 pa_24 --border-radius_12"
        :disabled="!isValid"
        @click="handleSubmit"
      >
        <span>코드로 활성화 하기</span>
      </button>
      <button class="button-defaulted width_100 height_40 --border-radius_16">
        <span>네이버페이로 인증하기</span>
      </button>
    </article>
  </appDialog>
</template>
<script>
import inDialog from "@/components/component/inDialog.vue";

export default {
  components: { inDialog },
  props: {
    id: { type: String },
    input: { type: String },
    root: { type: Boolean },
    pay: { type: Object },
    dialog: { type: Boolean },
  },
  data() {
    return {
      dialogVisible: false,
      couponCode: null,
      isValid: false,
    };
  },
  methods: {
    required(v) {
      const isValid = !!v;
      this.isValid = isValid;
      return isValid || "이 항목은 필수입니다.";
    },
    characterRules(v) {
      const isValid = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(v);
      this.isValid = isValid;
      return isValid || "비밀번호는 숫자 4자리여야 합니다.";
    },
    async handleSubmit() {
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
    updateInDialog(value) {
      this.dialogVisible = value;
    },
  },
};
</script>
